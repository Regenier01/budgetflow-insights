import ExcelJS from 'exceljs';
import { MONTHS, type AccountEntry, type AtividadeKey, type MonthKey } from '@/types/budget';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import { isReceitaPecuariaGeneticaDepartment } from '@/data/receitaPecuariaGenetica';

export type DeviationExportAreaKey =
  | Exclude<AtividadeKey, 'DESP_ADM_TRIB' | 'PECUARIA' | 'CANA' | 'ENCARGOS'>
  | 'DESP_ADM_TRIB_FINANCEIRO'
  | 'DESP_ADM_TRIB_RH'
  | 'DESP_ADM_TRIB_TRIBUTARIAS'
  | 'PECUARIA_PASTO'
  | 'PECUARIA_CONFINAMENTO'
  | 'PECUARIA_GENETICA';

export interface DeviationGroupRow {
  grupoContabil: string;
  orcado: number;
  realizado: number;
  diferenca: number;
}

/** Um lançamento na mesma granularidade exibida na visão "Planilha" do dashboard (departamento, centro de custo, descrição, produto, complemento). */
export interface DeviationLancamentoRow {
  grupoContabil: string;
  departamento: string;
  centroCusto: string;
  descricao: string;
  produto: string;
  complemento: string;
  quantidade: number | null;
  realizado: number;
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
  /** Último mês incluído na consolidação (orçado e realizado); null = todos os meses da safra. */
  cutoffMonth: MonthKey | null;
}

interface AreaSource {
  key: DeviationExportAreaKey;
  label: string;
  sheetLabel: string;
  /** Seleciona os lançamentos (nível 5) desta área/sub-área. */
  match: (entry: AccountEntry) => boolean;
  /** Prefixos de código de grupo contábil a excluir desta área (ex.: '3.' para descartar grupos duplicados de outra classificação). */
  excludeGrupoContabilPrefixes?: string[];
}

const normalizeMatchText = (value?: string) =>
  (value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim();

/** Mesmo critério de "Despesas Tributárias" usado na página de Despesas Adm. e Tributárias do dashboard. */
const isTributariaGroupEntry = (entry: Pick<AccountEntry, 'grupoContabil' | 'grupoContabilN9'>): boolean => {
  const grupo = normalizeMatchText(entry.grupoContabil);
  const grupoN9 = normalizeMatchText(entry.grupoContabilN9);
  return (
    grupo.startsWith('3.4.03.01') ||
    grupo.startsWith('3.4.03.02') ||
    grupoN9.startsWith('3.4.03.01') ||
    grupoN9.startsWith('3.4.03.02')
  );
};

/** Mesmos centros de custo da "Gerência RH" (Railene) usados na página de Despesas Adm. e Tributárias do dashboard. */
const DESPESAS_GERENCIA_RH_COST_CENTERS = [
  'RATEIO DESENVOLVIMENTO HUMANO',
  'MARKETING INTERNO',
  'ORGANIZACAO PREDIAL',
  'PESSOAL',
];
const isGerenciaRhCostCenter = (centroCusto?: string) =>
  DESPESAS_GERENCIA_RH_COST_CENTERS.some((item) => normalizeMatchText(item) === normalizeMatchText(centroCusto));

const isNotOutrasReceitas = (entry: Pick<AccountEntry, 'codigo'>) => !isOutrasReceitasEventuaisCode(entry.codigo);

/** Mesmos centros de custo/departamento de "Confinamento" usados na página de Pecuária do dashboard. */
const CONFINAMENTO_COST_CENTERS = [
  'RATEIO CONFINAMENTO',
  'CONFINAMENTO - TRANSPORTE DE GADO',
  'CONFINAMENTO - TRANSPORTE DE INSUMOS',
  'MANUTENCAO SISTEMA IRRIGACAO - CUSTO CONFINAMENTO',
  'RECRIA GOTEJO CONFINAMENTO',
];
const isConfinamentoEntry = (entry: Pick<AccountEntry, 'departamento' | 'centroCusto'>): boolean => {
  const dept = normalizeMatchText(entry.departamento);
  const cc = normalizeMatchText(entry.centroCusto);
  return dept === 'CONFINAMENTO' || CONFINAMENTO_COST_CENTERS.some((item) => normalizeMatchText(item) === cc);
};

/** Mesmo critério de "Custos Genética" usado na página de Pecuária do dashboard (departamento CENTRO COMERCIAL DE TOUROS). */
const isPecuariaGeneticaEntry = (entry: Pick<AccountEntry, 'departamento'>): boolean =>
  isReceitaPecuariaGeneticaDepartment(entry.departamento);

/**
 * Áreas do export, na mesma divisão usada pelo restante do dashboard (tiles da Home / páginas de
 * atividade) — exceto Cana e Encargos Financeiros, que não entram neste relatório. Pecuária,
 * Agrícola e Seringal descartam grupos contábeis com código iniciado em "3." (classificação
 * duplicada dos mesmos custos); Despesas Administrativas Gerência Financeiro e Gerência RH
 * descartam os iniciados em "4." pelo mesmo motivo. Pecuária é
 * dividida em Genética, Confinamento e Pasto (nessa ordem de prioridade — Genética e Confinamento
 * saem primeiro do total, o resto cai em Pasto), e Despesas Administrativas e Tributárias em 3
 * sub-áreas (Gerência Financeiro / RH / Despesas Tributárias), replicando as mesmas separações já
 * exibidas nas páginas das atividades — cada lançamento cai em exatamente uma sub-área.
 */
const EXPORT_AREAS: AreaSource[] = [
  {
    key: 'PECUARIA_GENETICA',
    label: 'Pecuária — Genética',
    sheetLabel: 'Pecuária - Genet.',
    match: (a) => a.atividade === 'PECUARIA' && isNotOutrasReceitas(a) && isPecuariaGeneticaEntry(a),
    excludeGrupoContabilPrefixes: ['3.'],
  },
  {
    key: 'PECUARIA_CONFINAMENTO',
    label: 'Pecuária — Confinamento',
    sheetLabel: 'Pecuária - Confin',
    match: (a) =>
      a.atividade === 'PECUARIA' && isNotOutrasReceitas(a) && !isPecuariaGeneticaEntry(a) && isConfinamentoEntry(a),
    excludeGrupoContabilPrefixes: ['3.'],
  },
  {
    key: 'PECUARIA_PASTO',
    label: 'Pecuária — Pasto',
    sheetLabel: 'Pecuária - Pasto',
    match: (a) =>
      a.atividade === 'PECUARIA' && isNotOutrasReceitas(a) && !isPecuariaGeneticaEntry(a) && !isConfinamentoEntry(a),
    excludeGrupoContabilPrefixes: ['3.'],
  },
  {
    key: 'AGRICOLA',
    label: 'Agrícola',
    sheetLabel: 'Agrícola',
    match: (a) => a.atividade === 'AGRICOLA' && isNotOutrasReceitas(a),
    excludeGrupoContabilPrefixes: ['3.'],
  },
  {
    key: 'SERINGAL',
    label: 'Seringal',
    sheetLabel: 'Seringal',
    match: (a) => a.atividade === 'SERINGAL' && isNotOutrasReceitas(a),
    excludeGrupoContabilPrefixes: ['3.'],
  },
  {
    key: 'DESP_ADM_TRIB_FINANCEIRO',
    label: 'Despesas Administrativas — Gerência Financeiro',
    sheetLabel: 'Adm - Financeiro',
    match: (a) =>
      a.atividade === 'DESP_ADM_TRIB' &&
      isNotOutrasReceitas(a) &&
      !isTributariaGroupEntry(a) &&
      !isGerenciaRhCostCenter(a.centroCusto),
    excludeGrupoContabilPrefixes: ['4.'],
  },
  {
    key: 'DESP_ADM_TRIB_RH',
    label: 'Despesas Administrativas — Gerência RH',
    sheetLabel: 'Adm - RH',
    match: (a) =>
      a.atividade === 'DESP_ADM_TRIB' &&
      isNotOutrasReceitas(a) &&
      !isTributariaGroupEntry(a) &&
      isGerenciaRhCostCenter(a.centroCusto),
    excludeGrupoContabilPrefixes: ['4.'],
  },
  {
    key: 'DESP_ADM_TRIB_TRIBUTARIAS',
    label: 'Despesas Tributárias',
    sheetLabel: 'Desp. Tributárias',
    match: (a) => a.atividade === 'DESP_ADM_TRIB' && isNotOutrasReceitas(a) && isTributariaGroupEntry(a),
  },
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

/**
 * Último mês da sequência contínua de meses com realizado, a partir do início da safra — sem
 * limiar de materialidade (qualquer valor diferente de zero conta): se há dado em Abr-Jun, o
 * corte é Jun; assim que passar a existir dado em Jul, o corte acompanha e passa a ser Jul
 * automaticamente. Exige continuidade (para no primeiro mês zerado) para não confundir um
 * lançamento perdido/residual em um mês futuro (ex.: ruído de importação/seed) com o real avanço
 * do período — realizado é lançado em ordem cronológica, então um mês isolado com dado muito à
 * frente de um bloco de meses zerados não é "o mês mais recente com dado", é ruído.
 */
export function resolveLatestRealizadoMonth(accounts: AccountEntry[]): MonthKey | null {
  const monthsWithData = new Set<MonthKey>();
  for (const a of accounts) {
    if (a.nivel !== 5) continue;
    for (const [month, value] of Object.entries(a.realizado)) {
      if (Number(value) || 0) monthsWithData.add(month as MonthKey);
    }
  }

  let cutoff: MonthKey | null = null;
  for (const month of MONTHS) {
    if (!monthsWithData.has(month.key)) break;
    cutoff = month.key;
  }
  return cutoff;
}

/** Meses a somar (orçado e realizado): até `cutoff` (inclusive) para comparar o mesmo período nos dois lados; `null` = todos os meses da safra. */
function resolveIncludedMonths(cutoff: MonthKey | null | undefined): Set<MonthKey> | null {
  if (!cutoff) return null;
  const idx = MONTHS.findIndex((m) => m.key === cutoff);
  if (idx === -1) return null;
  return new Set(MONTHS.slice(0, idx + 1).map((m) => m.key));
}

function sumMonths(values: Record<string, number>, includedMonths: Set<MonthKey> | null): number {
  let sum = 0;
  for (const [month, value] of Object.entries(values)) {
    if (includedMonths && !includedMonths.has(month as MonthKey)) continue;
    sum += Number(value) || 0;
  }
  return sum;
}

function buildAreaData(
  accounts: AccountEntry[],
  area: AreaSource,
  includedMonths: Set<MonthKey> | null
): DeviationAreaData {
  // Só custos e despesas (tipo 'C'/'D'); contas de receita ficam de fora, como pedido.
  const entries = accounts.filter((a) => a.nivel === 5 && a.tipo !== 'R' && area.match(a));
  const groups = new Map<string, { orcado: number; realizado: number }>();
  const lancamentos: DeviationLancamentoRow[] = [];

  for (const entry of entries) {
    const grupoContabil = resolveGrupoContabilLabel(entry);
    if (area.excludeGrupoContabilPrefixes?.some((prefix) => grupoContabil.startsWith(prefix))) continue;

    const orcado = sumMonths(entry.orcado, includedMonths);
    const realizado = sumMonths(entry.realizado, includedMonths);
    if (orcado === 0 && realizado === 0) continue;

    const agg = groups.get(grupoContabil) ?? { orcado: 0, realizado: 0 };
    agg.orcado += orcado;
    agg.realizado += realizado;
    groups.set(grupoContabil, agg);

    // Abertura: mesma granularidade e colunas da visão "Planilha" já exibida no dashboard.
    if (realizado !== 0) {
      const quantidade = entry.quantidade ? sumMonths(entry.quantidade, includedMonths) : 0;
      lancamentos.push({
        grupoContabil,
        departamento: entry.departamento || '',
        centroCusto: entry.centroCusto || '',
        descricao: entry.descricao || '',
        produto: entry.nomeProduto || '',
        complemento: entry.complemento || '',
        quantidade: quantidade !== 0 ? quantidade : null,
        realizado,
      });
    }
  }

  const groupRows: DeviationGroupRow[] = Array.from(groups.entries())
    .map(([grupoContabil, v]) => ({
      grupoContabil,
      orcado: v.orcado,
      realizado: v.realizado,
      diferenca: v.realizado - v.orcado,
    }))
    .sort((a, b) => Math.abs(b.diferenca) - Math.abs(a.diferenca));

  // Abertura: agrupada pelo mesmo ranking de maior desvio do resumo; dentro do grupo, maior |Realizado| primeiro (igual à Planilha do dashboard).
  const groupRank = new Map(groupRows.map((g, i) => [g.grupoContabil, i]));
  lancamentos.sort((a, b) => {
    const rankDiff = (groupRank.get(a.grupoContabil) ?? 0) - (groupRank.get(b.grupoContabil) ?? 0);
    if (rankDiff !== 0) return rankDiff;
    return Math.abs(b.realizado) - Math.abs(a.realizado);
  });

  return { key: area.key, label: area.label, sheetLabel: area.sheetLabel, groupRows, lancamentos };
}

/**
 * Agrega os lançamentos (nível 5, "folha") por Área x Grupo Contábil — apenas custos e despesas
 * (tipo 'C'/'D'); contas de receita não entram nesta análise. Orçado e realizado são somados no
 * mesmo intervalo de meses (até `cutoffMonth`, inclusive) para comparar períodos equivalentes.
 * Quando `cutoffMonth` não é informado (`undefined`), é detectado automaticamente como o último
 * mês com realizado importado nos dados — passe `null` explicitamente para forçar o consolidado
 * da safra inteira, sem corte algum. Função pura, sem geração de arquivo — usada pelo writer
 * abaixo e testável isoladamente.
 */
export function buildDeviationExportData(
  accounts: AccountEntry[],
  cutoffMonth?: MonthKey | null
): DeviationExportData {
  const resolvedCutoff = cutoffMonth === undefined ? resolveLatestRealizadoMonth(accounts) : cutoffMonth;
  const includedMonths = resolveIncludedMonths(resolvedCutoff);
  const areas = EXPORT_AREAS.map((area) => buildAreaData(accounts, area, includedMonths));

  const resumoGeral: DeviationResumoGeralRow[] = areas
    .flatMap((area) => area.groupRows.map((g) => ({ area: area.label, ...g })))
    .sort((a, b) => Math.abs(b.diferenca) - Math.abs(a.diferenca));

  return { areas, resumoGeral, cutoffMonth: resolvedCutoff };
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

const HEADER_FILL: ExcelJS.Fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFED7D31' },
};

const THIN_BORDER: Partial<ExcelJS.Borders> = {
  top: { style: 'thin', color: { argb: 'FF000000' } },
  left: { style: 'thin', color: { argb: 'FF000000' } },
  bottom: { style: 'thin', color: { argb: 'FF000000' } },
  right: { style: 'thin', color: { argb: 'FF000000' } },
};

/** Adiciona uma aba com cabeçalho laranja em negrito, bordas em todas as células e a última linha (total) em negrito. */
function addSheet(
  wb: ExcelJS.Workbook,
  sheetName: string,
  headers: string[],
  rows: (string | number)[][],
  numberCols: number[],
  totalRow = false
): void {
  const ws = wb.addWorksheet(sheetName);
  ws.columns = headers.map((header, i) => ({ header, width: numberCols.includes(i) ? 16 : 30 }));

  const headerRow = ws.getRow(1);
  headerRow.eachCell((cell) => {
    cell.fill = HEADER_FILL;
    cell.font = { bold: true, color: { argb: 'FF000000' } };
    cell.border = THIN_BORDER;
  });

  rows.forEach((rowValues, i) => {
    const isTotal = totalRow && i === rows.length - 1;
    const row = ws.addRow(rowValues);
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      cell.border = THIN_BORDER;
      if (isTotal) cell.font = { bold: true };
      if (numberCols.includes(colNumber - 1) && typeof cell.value === 'number') {
        cell.numFmt = '#,##0.00';
      }
    });
  });

  ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: headers.length } };
}

async function downloadWorkbook(wb: ExcelJS.Workbook, fileName: string): Promise<void> {
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function sumRows(rows: DeviationGroupRow[]) {
  return rows.reduce(
    (acc, r) => ({ orcado: acc.orcado + r.orcado, realizado: acc.realizado + r.realizado }),
    { orcado: 0, realizado: 0 }
  );
}

const monthLabel = (month: MonthKey): string => MONTHS.find((m) => m.key === month)?.label ?? month;

/**
 * Gera e baixa o Excel de análise de desvios de custos e despesas (contas de receita não entram):
 * uma aba "Resumo Geral" (todos os grupos de todas as áreas, ordenados pelo maior |desvio|) e,
 * por área, uma aba de resumo por grupo contábil (Total Orçado / Total Realizado / Diferença /
 * Justificativa) + uma aba de abertura com os lançamentos (mesma granularidade da visão
 * "Planilha" do dashboard) que compõem cada grupo.
 *
 * Orçado e realizado são consolidados no mesmo intervalo de meses — por padrão, detectado
 * automaticamente como o último mês com realizado importado nos dados (passe `cutoffMonth: null`
 * para forçar o consolidado da safra inteira) — para que a diferença reflita um período
 * comparável nos dois lados.
 */
export async function exportDeviationAnalysisWorkbook(
  accounts: AccountEntry[],
  cutoffMonth?: MonthKey | null,
  fileName?: string
): Promise<void> {
  const { areas, resumoGeral, cutoffMonth: resolvedCutoff } = buildDeviationExportData(accounts, cutoffMonth);
  const wb = new ExcelJS.Workbook();
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
  addSheet(
    wb,
    sanitizeSheetName('Resumo Geral', usedNames),
    ['Área', 'Grupo Contábil', 'Total Orçado', 'Total Realizado', 'Diferença', 'Justificativa'],
    resumoGeralRows,
    [2, 3, 4],
    true
  );

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
    addSheet(
      wb,
      sanitizeSheetName(`${area.sheetLabel} - Resumo`, usedNames),
      ['Grupo Contábil', 'Total Orçado', 'Total Realizado', 'Diferença', 'Justificativa'],
      resumoRows,
      [1, 2, 3],
      true
    );

    const lancRows: (string | number)[][] = area.lancamentos.map((l) => [
      l.grupoContabil,
      l.departamento,
      l.centroCusto,
      l.descricao,
      l.produto,
      l.complemento,
      l.quantidade ?? '',
      l.realizado,
    ]);
    addSheet(
      wb,
      sanitizeSheetName(`${area.sheetLabel} - Lançamentos`, usedNames),
      [
        'Grupo Contábil',
        'Departamento',
        'Centro de Custo',
        'Descrição',
        'Produto',
        'Complemento',
        'Quantidade',
        'Realizado',
      ],
      lancRows,
      [6, 7]
    );
  }

  const periodSuffix = resolvedCutoff ? `ate_${resolvedCutoff}` : 'consolidado';
  const resolvedFileName = fileName ?? `Analise_Desvios_Custos_${periodSuffix}.xlsx`;
  await downloadWorkbook(wb, resolvedFileName);
}

export { monthLabel as deviationExportMonthLabel };
