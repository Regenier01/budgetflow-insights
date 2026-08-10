import * as XLSX from 'xlsx';
import type { AccountEntry, AtividadeKey } from '@/types/budget';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';

export type DeviationExportAreaKey = AtividadeKey | 'OUTRAS_RECEITAS_EVENTUAIS';

export interface DeviationGroupRow {
  grupoContabil: string;
  orcado: number;
  realizado: number;
  diferenca: number;
}

export interface DeviationLancamentoRow {
  grupoContabil: string;
  conta: string;
  descricao: string;
  departamento: string;
  centroCusto: string;
  orcado: number;
  realizado: number;
  diferenca: number;
}

export interface DeviationAreaData {
  key: DeviationExportAreaKey;
  label: string;
  sheetLabel: string;
  groupRows: DeviationGroupRow[];
  lancamentos: DeviationLancamentoRow[];
}

export interface DeviationResumoGeralRow extends DeviationGroupRow {
  area: string;
}

export interface DeviationExportData {
  areas: DeviationAreaData[];
  resumoGeral: DeviationResumoGeralRow[];
}

/** Áreas do export, na mesma divisão usada pelo restante do dashboard (tiles da Home / páginas de atividade). */
const EXPORT_AREAS: { key: DeviationExportAreaKey; label: string; sheetLabel: string }[] = [
  { key: 'PECUARIA', label: 'Pecuária', sheetLabel: 'Pecuária' },
  { key: 'AGRICOLA', label: 'Agrícola', sheetLabel: 'Agrícola' },
  { key: 'SERINGAL', label: 'Seringal', sheetLabel: 'Seringal' },
  { key: 'CANA', label: 'Cana', sheetLabel: 'Cana' },
  { key: 'DESP_ADM_TRIB', label: 'Despesas Administrativas e Tributárias', sheetLabel: 'Adm e Tributárias' },
  { key: 'ENCARGOS', label: 'Encargos Financeiros', sheetLabel: 'Encargos' },
  { key: 'OUTRAS_RECEITAS_EVENTUAIS', label: 'Outras Receitas Eventuais', sheetLabel: 'Outras Receitas' },
];

const GRUPO_CODE_PATTERN = /^\d+(\.\d+){2,}/;

/** Rótulo do grupo contábil (N9), com fallback pelo prefixo da conta quando a planilha não trouxer o grupo. */
function resolveGrupoContabilLabel(entry: Pick<AccountEntry, 'grupoContabilN9' | 'codigo' | 'descricao'>): string {
  const raw = (entry.grupoContabilN9 || '').trim();
  if (raw && GRUPO_CODE_PATTERN.test(raw)) return raw;
  const prefix = entry.codigo.split('.').slice(0, 3).join('.');
  if (raw) return prefix ? `${prefix} - ${raw}` : raw;
  return prefix ? `${prefix} - ${entry.descricao || 'Sem Descrição'}` : entry.descricao || 'Sem Grupo Contábil';
}

function sumAllMonths(values: Record<string, number>): number {
  return Object.values(values).reduce((sum, v) => sum + (Number(v) || 0), 0);
}

function entriesForArea(accounts: AccountEntry[], areaKey: DeviationExportAreaKey): AccountEntry[] {
  const leaves = accounts.filter((a) => a.nivel === 5);
  if (areaKey === 'OUTRAS_RECEITAS_EVENTUAIS') {
    return leaves.filter((a) => isOutrasReceitasEventuaisCode(a.codigo));
  }
  return leaves.filter((a) => a.atividade === areaKey && !isOutrasReceitasEventuaisCode(a.codigo));
}

function buildAreaData(
  accounts: AccountEntry[],
  area: { key: DeviationExportAreaKey; label: string; sheetLabel: string }
): DeviationAreaData {
  const entries = entriesForArea(accounts, area.key);
  const groups = new Map<string, { orcado: number; realizado: number }>();
  const lancamentos: DeviationLancamentoRow[] = [];

  for (const entry of entries) {
    const orcado = sumAllMonths(entry.orcado);
    const realizado = sumAllMonths(entry.realizado);
    if (orcado === 0 && realizado === 0) continue;

    const grupoContabil = resolveGrupoContabilLabel(entry);
    const agg = groups.get(grupoContabil) ?? { orcado: 0, realizado: 0 };
    agg.orcado += orcado;
    agg.realizado += realizado;
    groups.set(grupoContabil, agg);

    lancamentos.push({
      grupoContabil,
      conta: entry.codigo,
      descricao: entry.descricao || '',
      departamento: entry.departamento || '',
      centroCusto: entry.centroCusto || '',
      orcado,
      realizado,
      diferenca: realizado - orcado,
    });
  }

  const groupRows: DeviationGroupRow[] = Array.from(groups.entries())
    .map(([grupoContabil, v]) => ({
      grupoContabil,
      orcado: v.orcado,
      realizado: v.realizado,
      diferenca: v.realizado - v.orcado,
    }))
    .sort((a, b) => Math.abs(b.diferenca) - Math.abs(a.diferenca));

  const groupRank = new Map(groupRows.map((g, i) => [g.grupoContabil, i]));
  lancamentos.sort((a, b) => {
    const rankDiff = (groupRank.get(a.grupoContabil) ?? 0) - (groupRank.get(b.grupoContabil) ?? 0);
    if (rankDiff !== 0) return rankDiff;
    return Math.abs(b.diferenca) - Math.abs(a.diferenca);
  });

  return { key: area.key, label: area.label, sheetLabel: area.sheetLabel, groupRows, lancamentos };
}

/**
 * Agrega os lançamentos (nível 5, "folha") por Área x Grupo Contábil, consolidando todos os
 * meses (sempre o período completo, independentemente de filtros de tela). Função pura,
 * sem geração de arquivo — usada pelo writer abaixo e testável isoladamente.
 */
export function buildDeviationExportData(accounts: AccountEntry[]): DeviationExportData {
  const areas = EXPORT_AREAS.map((area) => buildAreaData(accounts, area));

  const resumoGeral: DeviationResumoGeralRow[] = areas
    .flatMap((area) => area.groupRows.map((g) => ({ area: area.label, ...g })))
    .sort((a, b) => Math.abs(b.diferenca) - Math.abs(a.diferenca));

  return { areas, resumoGeral };
}

const SHEET_FORBIDDEN_CHARS = /[:\\/?*[\]]/g;
const SHEET_NAME_MAX_LEN = 31;

function sanitizeSheetName(name: string, used: Set<string>): string {
  const base = name.replace(SHEET_FORBIDDEN_CHARS, '').trim().slice(0, SHEET_NAME_MAX_LEN) || 'Planilha';
  let candidate = base;
  let suffix = 2;
  while (used.has(candidate)) {
    const suffixText = ` ${suffix}`;
    candidate = base.slice(0, SHEET_NAME_MAX_LEN - suffixText.length) + suffixText;
    suffix += 1;
  }
  used.add(candidate);
  return candidate;
}

function buildSheet(
  headers: string[],
  rows: (string | number)[][],
  currencyCols: number[]
): XLSX.WorkSheet {
  const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  const range = XLSX.utils.decode_range(ws['!ref']!);
  for (let r = 1; r <= range.e.r; r++) {
    for (const c of currencyCols) {
      const addr = XLSX.utils.encode_cell({ r, c });
      const cell = ws[addr];
      if (cell && typeof cell.v === 'number') {
        cell.z = '#,##0.00';
      }
    }
  }
  ws['!cols'] = headers.map((_, i) => ({ wch: currencyCols.includes(i) ? 16 : 30 }));
  ws['!autofilter'] = {
    ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: 0, c: headers.length - 1 } }),
  };
  return ws;
}

function sumRows(rows: DeviationGroupRow[]) {
  return rows.reduce(
    (acc, r) => ({ orcado: acc.orcado + r.orcado, realizado: acc.realizado + r.realizado }),
    { orcado: 0, realizado: 0 }
  );
}

/**
 * Gera e baixa o Excel de análise de desvios: uma aba "Resumo Geral" (todos os grupos de todas
 * as áreas, ordenados pelo maior |desvio|) e, por área, uma aba de resumo por grupo contábil
 * (Total Orçado / Total Realizado / Diferença / Justificativa) + uma aba de abertura com os
 * lançamentos que compõem cada grupo.
 */
export function exportDeviationAnalysisWorkbook(accounts: AccountEntry[], fileName?: string): void {
  const { areas, resumoGeral } = buildDeviationExportData(accounts);
  const wb = XLSX.utils.book_new();
  const usedNames = new Set<string>();

  const totalGeral = sumRows(resumoGeral);
  const resumoGeralRows: (string | number)[][] = resumoGeral.map((g) => [
    g.area,
    g.grupoContabil,
    g.orcado,
    g.realizado,
    g.diferenca,
    '',
  ]);
  resumoGeralRows.push([
    'TOTAL GERAL',
    '',
    totalGeral.orcado,
    totalGeral.realizado,
    totalGeral.realizado - totalGeral.orcado,
    '',
  ]);
  const resumoGeralSheet = buildSheet(
    ['Área', 'Grupo Contábil', 'Total Orçado', 'Total Realizado', 'Diferença', 'Justificativa'],
    resumoGeralRows,
    [2, 3, 4]
  );
  XLSX.utils.book_append_sheet(wb, resumoGeralSheet, sanitizeSheetName('Resumo Geral', usedNames));

  for (const area of areas) {
    const totals = sumRows(area.groupRows);
    const resumoRows: (string | number)[][] = area.groupRows.map((g) => [
      g.grupoContabil,
      g.orcado,
      g.realizado,
      g.diferenca,
      '',
    ]);
    resumoRows.push(['TOTAL', totals.orcado, totals.realizado, totals.realizado - totals.orcado, '']);
    const resumoSheet = buildSheet(
      ['Grupo Contábil', 'Total Orçado', 'Total Realizado', 'Diferença', 'Justificativa'],
      resumoRows,
      [1, 2, 3]
    );
    XLSX.utils.book_append_sheet(wb, resumoSheet, sanitizeSheetName(`${area.sheetLabel} - Resumo`, usedNames));

    const lancRows: (string | number)[][] = area.lancamentos.map((l) => [
      l.grupoContabil,
      l.conta,
      l.descricao,
      l.departamento,
      l.centroCusto,
      l.orcado,
      l.realizado,
      l.diferenca,
    ]);
    const lancSheet = buildSheet(
      ['Grupo Contábil', 'Conta', 'Descrição', 'Departamento', 'Centro de Custo', 'Orçado', 'Realizado', 'Diferença'],
      lancRows,
      [5, 6, 7]
    );
    XLSX.utils.book_append_sheet(
      wb,
      lancSheet,
      sanitizeSheetName(`${area.sheetLabel} - Lançamentos`, usedNames)
    );
  }

  const resolvedFileName = fileName ?? `Analise_Desvios_Orcamentario_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, resolvedFileName);
}
