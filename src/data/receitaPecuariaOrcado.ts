import type { OrcadoGrupoMonthValue } from '@/data/orcadoImportData';
import type { ExcelRow } from '@/types/budget';
import { tryParsePecuariaOrcadoBudgetRow } from '@/data/pecuariaOrcadoGrupoContabilCodes';

/** Grupos contábeis de receita operacional pecuária (planilhas em Orçado_Receitas/Receita_Pecuaria). */
export const RECEITA_PECUARIA_GRUPO_PREFIX = '3.1.01';

const GRUPO_CODE_PATTERN = /^\d(?:\.\d{1,4}){2,}/;

const normalizeMatch = (value?: string) =>
  String(value || '')
    .toUpperCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export const canonicalReceitaPecuariaDepartmentKey = (value?: string) =>
  normalizeMatch(value)
    .replace(/^(DEPARTAMENTO|DEPTO)\s+/, '')
    .replace(/\s+/g, ' ')
    .trim();

/** Chave única por departamento para substituir reimportações (evita lote embutido + upload duplicado). */
export const receitaPecuariaOrcadoScopeKey = (departamento: string) =>
  `RECEITA_PECUARIA::${canonicalReceitaPecuariaDepartmentKey(departamento)}`;

const extractGrupoCode = (value: string): string => {
  const normalized = String(value || '').trim();
  const match = normalized.match(GRUPO_CODE_PATTERN);
  return match?.[0] || '';
};

const pickGrupoFromCell = (rawValue: unknown): string => {
  const value = String(rawValue ?? '').trim();
  if (!value) return '';
  const candidate = value.split('-')[0]?.trim() || value;
  const code = extractGrupoCode(candidate);
  return code.startsWith(RECEITA_PECUARIA_GRUPO_PREFIX) ? code : '';
};

const parseReceitaGrupoFromRow = (row: Record<string, unknown>): string => {
  const keys = [
    'GRUPO_CONTABIL',
    'GRUPOCONTABIL',
    'CONTA_CONTABIL',
    '__EMPTY',
    '__EMPTY_0',
    'Unnamed: 0',
  ];
  for (const key of keys) {
    const code = pickGrupoFromCell(row[key]);
    if (code) return code;
  }
  for (const value of Object.values(row)) {
    const code = pickGrupoFromCell(value);
    if (code) return code;
  }
  return '';
};

export function isReceitaPecuariaOrcadoBatch(batch: {
  atividade: string;
  rows: OrcadoGrupoMonthValue[];
}): boolean {
  return (
    batch.atividade === 'PECUARIA' &&
    batch.rows.length > 0 &&
    batch.rows.every((row) => row.grupoContabil.startsWith(RECEITA_PECUARIA_GRUPO_PREFIX)) &&
    !batch.rows.some((row) => row.pecuariaOrcadoScope)
  );
}

/** Planilha pivot de receita (3.1.01.*), distinta do layout granular de custos pecuária. */
export function isReceitaPecuariaOrcadoWorkbook(rows: ExcelRow[]): boolean {
  if (rows.length === 0) return false;

  let receitaRows = 0;
  let custosRows = 0;

  for (const row of rows) {
    const raw = row as Record<string, unknown>;
    if (tryParsePecuariaOrcadoBudgetRow(raw) !== null) {
      custosRows += 1;
      continue;
    }
    if (parseReceitaGrupoFromRow(raw)) {
      receitaRows += 1;
    }
  }

  return receitaRows > 0 && custosRows === 0;
}
