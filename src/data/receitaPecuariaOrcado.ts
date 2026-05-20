import type { OrcadoGrupoMonthValue } from '@/data/orcadoImportData';
import type { ExcelRow } from '@/types/budget';
import {
  extractGrupoN9FourLevels,
  tryParsePecuariaOrcadoBudgetRow,
} from '@/data/pecuariaOrcadoGrupoContabilCodes';

/** Grupos contábeis de receita operacional pecuária (planilhas em Orçado_Receitas/Receita_Pecuaria). */
export const RECEITA_PECUARIA_GRUPO_PREFIX = '3.1.01';

const normalizeMatch = (value?: string) =>
  String(value || '')
    .toUpperCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const normalizeOrcadoHeaderKey = (value: string) =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/\s+/g, ' ')
    .trim();

const firstCell = (row: Record<string, unknown>, keys: readonly string[]): unknown => {
  for (const k of keys) {
    if (!(k in row)) continue;
    const v = row[k];
    if (v !== undefined && v !== null && String(v).trim() !== '') return v;
  }
  const normalizedPatterns = keys.map(normalizeOrcadoHeaderKey);
  for (const [k, v] of Object.entries(row)) {
    if (v === undefined || v === null || String(v).trim() === '') continue;
    if (normalizedPatterns.includes(normalizeOrcadoHeaderKey(k))) return v;
  }
  return undefined;
};

const COL_GRUPO_KEYS = ['GRUPO_CONTABIL', 'GRUPOCONTABIL', 'GRUPO CONTABIL', '__EMPTY', '__EMPTY_0'] as const;
const COL_CONTA_KEYS = ['CONTA_CONTABIL', 'CONTA CONTABIL', 'CONTA', '__EMPTY_1'] as const;
const COL_DESCRICAO_KEYS = [
  'DESCRICAO C. CONTABIL',
  'DESCRICAO C CONTABIL',
  'DESCRICAO C. CONTÁBIL',
  'DESCRICAO C CONTÁBIL',
  'DESCRICAO_C_CONTABIL',
  'DESCRICAO_CONTABIL',
  'DESCRICAO',
  '__EMPTY_2',
] as const;

export const canonicalReceitaPecuariaDepartmentKey = (value?: string) =>
  normalizeMatch(value)
    .replace(/^(DEPARTAMENTO|DEPTO)\s+/, '')
    .replace(/\s+/g, ' ')
    .trim();

/** Chave única por departamento para substituir reimportações (evita lote embutido + upload duplicado). */
export const receitaPecuariaOrcadoScopeKey = (departamento: string) =>
  `RECEITA_PECUARIA::${canonicalReceitaPecuariaDepartmentKey(departamento)}`;

/** Descrição para linhas só de grupo (conta vazia): col. C, depois texto após o hífen em GRUPO_CONTABIL. */
export function resolveReceitaPecuariaOrcadoGrupoDescricao(
  grupoContabilLabel: string,
  descricaoContabil?: string
): string {
  const fromColC = String(descricaoContabil ?? '').trim();
  if (fromColC) return fromColC;
  const label = String(grupoContabilLabel ?? '').trim();
  const dashIdx = label.indexOf('-');
  if (dashIdx >= 0) {
    const afterDash = label.slice(dashIdx + 1).trim();
    if (afterDash) return afterDash;
  }
  return label;
}

/** Layout: GRUPO_CONTABIL, CONTA_CONTABIL, Descrição C. Contábil + meses (prefixo 3.1.01). */
export interface ReceitaPecuariaOrcadoGranularRow {
  grupoN9: string;
  grupoContabilLabel: string;
  contaContabil: string;
  descricaoContabil: string;
  scope: 'grupo' | 'descricao';
}

export const tryParseReceitaPecuariaOrcadoBudgetRow = (
  row: Record<string, unknown>
): ReceitaPecuariaOrcadoGranularRow | null => {
  const grupoRaw = firstCell(row, COL_GRUPO_KEYS);
  if (grupoRaw === undefined || grupoRaw === null || String(grupoRaw).trim() === '') return null;

  const grupoContabilLabel = String(grupoRaw).trim();
  let grupoN9 = extractGrupoN9FourLevels(grupoContabilLabel);
  if (!grupoN9 || !grupoN9.startsWith(RECEITA_PECUARIA_GRUPO_PREFIX)) return null;

  const contaContabil = String(firstCell(row, COL_CONTA_KEYS) ?? '').trim();
  const descricaoContabil = String(firstCell(row, COL_DESCRICAO_KEYS) ?? '').trim();
  const hasConta = /^\d\.\d+\.\d+/.test(contaContabil);

  if (!hasConta) {
    return {
      grupoN9,
      grupoContabilLabel,
      contaContabil: '',
      descricaoContabil,
      scope: 'grupo',
    };
  }

  const fromConta = extractGrupoN9FourLevels(contaContabil);
  if (fromConta && fromConta.startsWith(RECEITA_PECUARIA_GRUPO_PREFIX)) {
    grupoN9 = fromConta;
  }

  return {
    grupoN9,
    grupoContabilLabel,
    contaContabil,
    descricaoContabil: descricaoContabil || contaContabil,
    scope: 'descricao',
  };
};

export function isReceitaPecuariaOrcadoBatch(batch: {
  atividade: string;
  rows: OrcadoGrupoMonthValue[];
}): boolean {
  return (
    batch.atividade === 'PECUARIA' &&
    batch.rows.length > 0 &&
    batch.rows.every((row) => {
      const prefix = extractGrupoN9FourLevels(row.grupoContabil);
      return prefix.startsWith(RECEITA_PECUARIA_GRUPO_PREFIX);
    })
  );
}

/** Planilha de receita pecuária (3.1.01.*), distinta do orçado de custos (4.x). */
export function isReceitaPecuariaOrcadoWorkbook(rows: ExcelRow[]): boolean {
  if (rows.length === 0) return false;

  let receitaRows = 0;
  let custosRows = 0;

  for (const row of rows) {
    const raw = row as Record<string, unknown>;
    if (tryParseReceitaPecuariaOrcadoBudgetRow(raw) !== null) {
      receitaRows += 1;
      continue;
    }
    const custosParsed = tryParsePecuariaOrcadoBudgetRow(raw);
    if (custosParsed && !custosParsed.grupoN9.startsWith(RECEITA_PECUARIA_GRUPO_PREFIX)) {
      custosRows += 1;
    }
  }

  return receitaRows > 0 && custosRows === 0;
}
