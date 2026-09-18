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

export interface DeviationDescriptionRow extends DeviationGroupRow {
  descricaoContabil: string;
}

export interface DeviationDepartmentData {
  departamento: string;
  groupRows: DeviationGroupRow[];
  descriptionRows: DeviationDescriptionRow[];
}

/** Um lançamento na mesma granularidade exibida na visão "Planilha" do dashboard (departamento, centro de custo, descrição, produto, complemento), aberto por mês. */
export interface DeviationLancamentoRow {
  grupoContabil: string;
  mes: MonthKey;
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
  departments: DeviationDepartmentData[];
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
  const departments = new Map<
    string,
    {
      groups: Map<string, { orcado: number; realizado: number }>;
      descriptions: Map<string, DeviationDescriptionRow>;
    }
  >();
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

    // A mesma base usada no total da atividade também alimenta os departamentos.
    // Entradas sem departamento ficam explícitas para que nenhuma parcela seja perdida na reconciliação.
    const departamento = entry.departamento?.trim() || 'Sem Departamento';
    const descricaoContabil = entry.descricao?.trim() || 'Sem Descrição Contábil';
    const dept = departments.get(departamento) ?? {
      groups: new Map<string, { orcado: number; realizado: number }>(),
      descriptions: new Map<string, DeviationDescriptionRow>(),
    };

    const deptGroup = dept.groups.get(grupoContabil) ?? { orcado: 0, realizado: 0 };
    deptGroup.orcado += orcado;
    deptGroup.realizado += realizado;
    dept.groups.set(grupoContabil, deptGroup);

    const descriptionKey = `${grupoContabil}\u0000${descricaoContabil}`;
    const deptDescription = dept.descriptions.get(descriptionKey) ?? {
      grupoContabil,
      descricaoContabil,
      orcado: 0,
      realizado: 0,
      diferenca: 0,
    };
    deptDescription.orcado += orcado;
    deptDescription.realizado += realizado;
    deptDescription.diferenca = deptDescription.realizado - deptDescription.orcado;
    dept.descriptions.set(descriptionKey, deptDescription);
    departments.set(departamento, dept);

    // Abertura: mesma granularidade e colunas da visão "Planilha" já exibida no dashboard, uma linha por mês com realizado.
    for (const month of MONTHS) {
      if (includedMonths && !includedMonths.has(month.key)) continue;
      const monthRealizado = Number(entry.realizado[month.key]) || 0;
      if (monthRealizado === 0) continue;
      const monthQuantidade = entry.quantidade ? Number(entry.quantidade[month.key]) || 0 : 0;
      lancamentos.push({
        grupoContabil,
        mes: month.key,
        departamento: entry.departamento || '',
        centroCusto: entry.centroCusto || '',
        descricao: entry.descricao || '',
        produto: entry.nomeProduto || '',
        complemento: entry.complemento || '',
        quantidade: monthQuantidade !== 0 ? monthQuantidade : null,
        realizado: monthRealizado,
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

  const departmentRows: DeviationDepartmentData[] = Array.from(departments.entries())
    .map(([departamento, data]) => {
      const deptGroupRows: DeviationGroupRow[] = Array.from(data.groups.entries())
        .map(([grupoContabil, v]) => ({
          grupoContabil,
          orcado: v.orcado,
          realizado: v.realizado,
          diferenca: v.realizado - v.orcado,
        }))
        .sort((a, b) => Math.abs(b.diferenca) - Math.abs(a.diferenca));

      const groupRank = new Map(deptGroupRows.map((g, i) => [g.grupoContabil, i]));
      const descriptionRows = Array.from(data.descriptions.values()).sort((a, b) => {
        const rankDiff = (groupRank.get(a.grupoContabil) ?? 0) - (groupRank.get(b.grupoContabil) ?? 0);
        if (rankDiff !== 0) return rankDiff;
        const diff = Math.abs(b.diferenca) - Math.abs(a.diferenca);
        if (diff !== 0) return diff;
        return a.descricaoContabil.localeCompare(b.descricaoContabil, 'pt-BR');
      });

      return { departamento, groupRows: deptGroupRows, descriptionRows };
    })
    .sort((a, b) => {
      const totalA = sumRows(a.groupRows);
      const totalB = sumRows(b.groupRows);
      const deviationDiff =
        Math.abs(totalB.realizado - totalB.orcado) - Math.abs(totalA.realizado - totalA.orcado);
      if (deviationDiff !== 0) return deviationDiff;
      return a.departamento.localeCompare(b.departamento, 'pt-BR');
    });

  // Abertura: agrupada pelo mesmo ranking de maior desvio do resumo; dentro do grupo, em ordem cronológica de mês e, no mesmo mês, maior |Realizado| primeiro (igual à Planilha do dashboard).
  const groupRank = new Map(groupRows.map((g, i) => [g.grupoContabil, i]));
  const monthIndex = new Map(MONTHS.map((m, i) => [m.key, i]));
  lancamentos.sort((a, b) => {
    const rankDiff = (groupRank.get(a.grupoContabil) ?? 0) - (groupRank.get(b.grupoContabil) ?? 0);
    if (rankDiff !== 0) return rankDiff;
    const monthDiff = (monthIndex.get(a.mes) ?? 0) - (monthIndex.get(b.mes) ?? 0);
    if (monthDiff !== 0) return monthDiff;
    return Math.abs(b.realizado) - Math.abs(a.realizado);
  });

  return {
    key: area.key,
    label: area.label,
    sheetLabel: area.sheetLabel,
    groupRows,
    departments: departmentRows,
    lancamentos,
  };
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
  totalRow = false,
  boldRows: Set<number> = new Set()
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
    const isBold = isTotal || boldRows.has(i);
    const row = ws.addRow(rowValues);
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      cell.border = THIN_BORDER;
      if (isBold) cell.font = { bold: true };
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

const RECONCILIATION_TOLERANCE = 0.005;

const nearlyEqual = (a: number, b: number) => Math.abs(a - b) <= RECONCILIATION_TOLERANCE;

/**
 * Confere a integridade da base antes de montar o arquivo.
 * A exportação falha de forma explícita se qualquer departamento/descrição perder ou duplicar valor.
 */
export function validateDeviationExportData(data: DeviationExportData): void {
  for (const area of data.areas) {
    const areaTotals = sumRows(area.groupRows);
    const departmentTotals = area.departments.reduce(
      (acc, department) => {
        const totals = sumRows(department.groupRows);
        acc.orcado += totals.orcado;
        acc.realizado += totals.realizado;
        return acc;
      },
      { orcado: 0, realizado: 0 }
    );

    if (
      !nearlyEqual(areaTotals.orcado, departmentTotals.orcado) ||
      !nearlyEqual(areaTotals.realizado, departmentTotals.realizado)
    ) {
      throw new Error(`Falha de reconciliação na atividade "${area.label}": total diferente da soma dos departamentos.`);
    }

    for (const department of area.departments) {
      for (const group of department.groupRows) {
        const descriptions = department.descriptionRows.filter((row) => row.grupoContabil === group.grupoContabil);
        const descriptionTotals = sumRows(descriptions);

        if (
          !nearlyEqual(group.orcado, descriptionTotals.orcado) ||
          !nearlyEqual(group.realizado, descriptionTotals.realizado)
        ) {
          throw new Error(
            `Falha de reconciliação no departamento "${department.departamento}", grupo "${group.grupoContabil}".`
          );
        }
      }
    }
  }
}


/**
 * Monta o workbook da análise de custos sem efetuar download.
 *
 * Estrutura:
 * 1) "Resumo por Atividade": total de cada atividade/subárea e abertura por departamento;
 * 2) uma aba por departamento, detalhando Grupo Contábil -> Descrição Contábil.
 *
 * A base, exclusões e período são exatamente os mesmos usados pelo consolidado anterior.
 */
export function buildDeviationAnalysisWorkbook(
  accounts: AccountEntry[],
  cutoffMonth?: MonthKey | null
): { workbook: ExcelJS.Workbook; data: DeviationExportData } {
  const data = buildDeviationExportData(accounts, cutoffMonth);
  validateDeviationExportData(data);
  const wb = new ExcelJS.Workbook();
  const usedNames = new Set<string>();

  const summaryRows: (string | number)[][] = [];
  const summaryBoldRows = new Set<number>();

  for (const area of data.areas) {
    if (area.groupRows.length === 0) continue;

    const areaTotals = sumRows(area.groupRows);
    summaryBoldRows.add(summaryRows.length);
    summaryRows.push([
      area.label,
      'TOTAL DA ATIVIDADE',
      areaTotals.orcado,
      areaTotals.realizado,
      areaTotals.realizado - areaTotals.orcado,
      '',
    ]);

    for (const department of area.departments) {
      const totals = sumRows(department.groupRows);
      summaryRows.push([
        area.label,
        department.departamento,
        totals.orcado,
        totals.realizado,
        totals.realizado - totals.orcado,
        '',
      ]);
    }
  }

  addSheet(
    wb,
    sanitizeSheetName('Resumo Total por Atividade', usedNames),
    ['Atividade', 'Departamento', 'Total Orçado', 'Total Realizado', 'Diferença', 'Justificativa'],
    summaryRows,
    [2, 3, 4],
    false,
    summaryBoldRows
  );

  for (const area of data.areas) {
    for (const department of area.departments) {
      const rows: (string | number)[][] = [];
      const boldRows = new Set<number>();

      for (const group of department.groupRows) {
        boldRows.add(rows.length);
        rows.push([group.grupoContabil, '', group.orcado, group.realizado, group.diferenca, '']);

        for (const description of department.descriptionRows.filter(
          (row) => row.grupoContabil === group.grupoContabil
        )) {
          rows.push([
            '',
            `↳ ${description.descricaoContabil}`,
            description.orcado,
            description.realizado,
            description.diferenca,
            '',
          ]);
        }
      }

      const totals = sumRows(department.groupRows);
      rows.push(['TOTAL DO DEPARTAMENTO', '', totals.orcado, totals.realizado, totals.realizado - totals.orcado, '']);

      addSheet(
        wb,
        sanitizeSheetName(department.departamento, usedNames),
        ['Grupo Contábil', 'Descrição Contábil', 'Total Orçado', 'Total Realizado', 'Diferença', 'Justificativa'],
        rows,
        [2, 3, 4],
        true,
        boldRows
      );
    }
  }

  return { workbook: wb, data };
}

/**
 * Gera e baixa o Excel de análise de desvios de custos e despesas.
 *
 * O período continua sendo detectado automaticamente de Abr/26 até o último mês contínuo com
 * realizado. A seleção de período do dashboard não interfere no arquivo.
 */
export async function exportDeviationAnalysisWorkbook(
  accounts: AccountEntry[],
  cutoffMonth?: MonthKey | null,
  fileName?: string
): Promise<void> {
  const { workbook, data } = buildDeviationAnalysisWorkbook(accounts, cutoffMonth);
  const periodSuffix = data.cutoffMonth ? `ate_${data.cutoffMonth}` : 'consolidado';
  const resolvedFileName = fileName ?? `Analise_Desvios_Custos_${periodSuffix}.xlsx`;
  await downloadWorkbook(workbook, resolvedFileName);
}

export { monthLabel as deviationExportMonthLabel };
