import { create } from 'zustand';
import {
  MONTHS,
  type AccountEntry,
  type MonthKey,
  type AtividadeKey,
  type ExcelRow,
  type UploadRecord
} from '@/types/budget';
import { INITIAL_ACCOUNTS } from '@/data/initialData';
import { ORCADO_IMPORT_BATCHES, type OrcadoGrupoMonthValue } from '@/data/orcadoImportData';
import { ORCADO_RECEITA_PECUARIA_IMPORT_BATCHES } from '@/data/orcadoReceitaPecuariaImportData';
import { ORCADO_RECEITA_LATEX_IMPORT_BATCHES } from '@/data/orcadoReceitaLatexImportData';
import { ORCADO_RECEITA_AGRICOLA_IMPORT_BATCHES } from '@/data/orcadoReceitaAgricolaImportData';
import { ORCADO_RECEITA_CANA_IMPORT_BATCHES } from '@/data/orcadoReceitaCanaImportData';
import { DEPARTMENT_MAPPING } from '@/data/departmentMapping';
import { COST_CENTER_MAPPING } from '@/data/costCenterMapping';
import {
  isEncargo,
  isDespesaFinanceiraAccount,
  isReceitaFinanceiraAccount,
} from '@/data/encargosAccounts';
import { isDespesaComVendasCode } from '@/data/despesasComVendasAccounts';
import { isDespesasComVendasConsolidatedScopeDepartment } from '@/data/despesasComVendasDepartments';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import {
  tryParsePecuariaOrcadoBudgetRow,
  resolvePecuariaOrcadoGrupoDescricao,
  getPecuariaGrupoContabilN9DisplayLabel,
} from '@/data/pecuariaOrcadoGrupoContabilCodes';
import {
  getDespAdmGrupoContabilN9DisplayLabel,
  tryParseDespAdmOrcadoBudgetRow,
} from '@/data/despAdmOrcadoGrupoContabilCodes';
import {
  isReceitaPecuariaOrcadoBatch,
  isReceitaPecuariaOrcadoWorkbook,
  receitaPecuariaOrcadoScopeKey,
  resolveReceitaPecuariaOrcadoGrupoDescricao,
  tryParseReceitaPecuariaOrcadoBudgetRow,
} from '@/data/receitaPecuariaOrcado';
const LAST_UPLOADED_PERIOD_STORAGE_KEY = 'budgetflow:lastUploadedPeriod';
const validMonthKeys = new Set(MONTHS.map((month) => month.key));
type MappingValue = { divisao?: string; unidadeNegocio?: string };
type OrcadoImportAtividadeKey = AtividadeKey | 'OUTRAS_RECEITAS_EVENTUAIS';

const saveLastUploadedPeriod = (period: string) => {
  if (typeof window === 'undefined' || !validMonthKeys.has(period as MonthKey)) return;
  window.localStorage.setItem(LAST_UPLOADED_PERIOD_STORAGE_KEY, period);
};

export const getLastUploadedPeriod = (): MonthKey | null => {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(LAST_UPLOADED_PERIOD_STORAGE_KEY);
  return stored && validMonthKeys.has(stored as MonthKey) ? (stored as MonthKey) : null;
};

/** Ignora meses com realizado residual (ex.: seed) frente ao mês dominante. */
const REALIZADO_MONTH_MATERIALITY_RATIO = 0.02;

const latestRealizadoMonthFromAggregates = (accounts: AccountEntry[]): MonthKey | null => {
  const monthTotals = new Map<string, number>();
  for (const account of accounts) {
    for (const [month, v] of Object.entries(account.realizado)) {
      if (!validMonthKeys.has(month as MonthKey)) continue;
      monthTotals.set(month, (monthTotals.get(month) || 0) + Math.abs(Number(v) || 0));
    }
  }
  if (monthTotals.size === 0) return null;
  const maxSum = Math.max(...monthTotals.values());
  if (maxSum === 0) return null;
  const threshold = maxSum * REALIZADO_MONTH_MATERIALITY_RATIO;
  const candidates = [...monthTotals.entries()]
    .filter(([, t]) => t >= threshold)
    .map(([m]) => m as MonthKey)
    .sort();
  return candidates.length ? candidates[candidates.length - 1]! : null;
};

/**
 * Mês inicial do filtro: último período importado em realizado (quando houver lotes),
 * senão o último mês com volume material em realizado (evita vencer por ruído em meses futuros no seed).
 */
export const getDefaultRealizadoFilterMonth = (
  accounts: AccountEntry[],
  importedRealizadoBatches: { period: MonthKey; importedAt: string }[]
): MonthKey | null => {
  if (importedRealizadoBatches.length > 0) {
    const sorted = [...importedRealizadoBatches].sort(
      (a, b) => new Date(a.importedAt).getTime() - new Date(b.importedAt).getTime()
    );
    return sorted[sorted.length - 1]!.period;
  }
  return latestRealizadoMonthFromAggregates(accounts);
};

// Função auxiliar para normalizar strings de busca
const normalizeKey = (str: string) => 
  str.toUpperCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const isDespesaTributariaCode = (codigo: string | undefined) => {
  const normalized = String(codigo || '').trim();
  return normalized.startsWith('3.4.03.01') || normalized.startsWith('3.4.03.02');
};

export function mapDivisaoToAtividade(divisao: string | undefined): AtividadeKey | null {
  if (!divisao) return null;
  const norm = normalizeKey(divisao);

  if (norm.includes('PECUA') || norm.includes('GADO')) return 'PECUARIA';
  if (norm.includes('SERING') || norm.includes('LATEX') || norm.includes('BORRACHA')) return 'SERINGAL';
  if (norm.includes('AGRIC') || norm.includes('SOJA') || norm.includes('MILHO') || norm.includes('GRAO')) return 'AGRICOLA';
  if (norm.includes('CANA')) return 'CANA';
  if (norm.includes('ADM') || norm.includes('TRIB') || norm.includes('LOGISTICA') || norm.includes('ALMOXARIFADO')) return 'DESP_ADM_TRIB';
  if (norm.includes('ENCARGO')) return 'ENCARGOS';

  return null;
}

export function resolveAtividadeFromRow(row: ExcelRow): AtividadeKey {
  const conta = String(row.CONTA_CONTABIL || '').trim();
  const depto = String(row.NOMEDEPTO || '').trim().toUpperCase();
  const cc = String(row.NOMECUSTO || '').trim().toUpperCase();
  const divisao = String(row.DIVISAO || '').trim();

  // 1. Verificação de Encargos Financeiros (Prioridade Máxima)
  if (isEncargo(conta)) return 'ENCARGOS';

  // 2. Regras de conta contábil (Receitas)
  if (conta.startsWith('3.1.01.01')) return 'PECUARIA';
  if (conta === '3.1.02.03.0001') return 'SERINGAL';
  if (conta.startsWith('3.1.02.01')) return 'AGRICOLA';
  if (conta.startsWith('3.1.02.02')) return 'CANA';
  if (isDespesaTributariaCode(conta)) return 'DESP_ADM_TRIB';

  // 3. Tenta pelo Mapeamento de Departamento
  const deptInfo = (DEPARTMENT_MAPPING as Record<string, MappingValue>)[depto];
  if (deptInfo) {
    const mapped = mapDivisaoToAtividade(deptInfo.divisao);
    if (mapped && mapped !== 'DESP_ADM_TRIB') return mapped;
  }

  // 4. Tenta pelo Mapeamento de Centro de Custo
  const ccInfo = (COST_CENTER_MAPPING as Record<string, MappingValue>)[cc];
  if (ccInfo) {
    const mapped = mapDivisaoToAtividade(ccInfo.unidadeNegocio);
    if (mapped && mapped !== 'DESP_ADM_TRIB') return mapped;
  }

  // 5. Tenta pela Divisão do Excel
  const fromDivisao = mapDivisaoToAtividade(divisao);
  if (fromDivisao) return fromDivisao;

  // 6. Fallback para administrativo
  return 'DESP_ADM_TRIB';
}

export function dateToMonthKey(raw: string | number | Date | undefined): MonthKey | null {
  if (!raw) return null;
  let d: Date;
  if (raw instanceof Date) d = raw;
  else if (typeof raw === 'number') d = new Date((raw - 25569) * 86400000);
  else d = new Date(raw);
  if (isNaN(d.getTime())) return null;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}` as MonthKey;
}

/**
 * Seleção de meses para filtros. Pode ser:
 * - 'all': literal indicando todos os meses;
 * - MonthKey: um único mês (compatibilidade);
 * - MonthKey[]: vários meses (vazio também significa "todos").
 */
export type MonthSelection = MonthKey | 'all' | readonly MonthKey[];

export function sumValuesByMonth(
  values: Record<string, number>,
  selectedMonth: MonthSelection
) {
  if (selectedMonth === 'all') {
    return Object.values(values).reduce((sum, v) => sum + v, 0);
  }
  if (Array.isArray(selectedMonth)) {
    if (selectedMonth.length === 0) {
      return Object.values(values).reduce((sum, v) => sum + v, 0);
    }
    return selectedMonth.reduce<number>(
      (sum, month) => sum + (values[month] || 0),
      0
    );
  }
  return values[selectedMonth as MonthKey] || 0;
}

/** Receita líquida: bruta menos o valor absoluto das deduções (evita somar deduções positivas como se fossem receita). */
export function receitaLiquidaFromBrutaEDeducoes(bruta: number, deducoes: number): number {
  return bruta - Math.abs(deducoes);
}

/** Orçado importado: grupo (`SYN::ORCADO::`), descrição pecuária/agrícola/seringal/adm (`PEC` / `AG` / `SER` / `ADM`). */
export const isSyntheticOrcadoImportEntry = (entry: Pick<AccountEntry, 'id'>) =>
  entry.id.includes('::ORCADO::') ||
  entry.id.includes('::ORCADOPEC::') ||
  entry.id.includes('::ORCADOAG::') ||
  entry.id.includes('::ORCADOSER::') ||
  entry.id.includes('::ORCADOADM::');

const rowValue = (value: unknown): string | undefined => {
  const parsed = String(value || '').trim();
  return parsed || undefined;
};

export function calculateGlobalTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;
  const leafAccounts = accounts.filter(a => 
    a.nivel === 5 && 
    a.atividade !== 'ENCARGOS' &&
    (
      a.grupoContabil === '4' ||
      (a.grupoContabil === '3' && a.atividade === 'DESP_ADM_TRIB') ||
      isDespesaComVendasCode(a.codigo)
    )
  );
  leafAccounts.forEach(a => {
    if (a.tipo === 'C' || a.tipo === 'D' || a.tipo === 'R') {
      orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
    }
  });
  return { orc, real, diff: orc - real };
}

export function calculateTotalsByDivisao(accounts: AccountEntry[], filterAtividade: AtividadeKey) {
  let orc = 0;
  let real = 0;
  const filtered = accounts.filter(a => 
    a.atividade === filterAtividade && 
    a.nivel === 5 &&
    (a.grupoContabil === '3' || a.grupoContabil === '4')
  );
  filtered.forEach(a => {
    if (a.tipo === 'C' || a.tipo === 'D') {
      orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
    }
  });
  return { orc, real, diff: orc - real };
}

// Função para calcular totais de Despesas Financeiras
export function calculateDespesasFinanceirasTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;
  const filtered = accounts.filter(a => 
    a.atividade === 'ENCARGOS' && 
    a.nivel === 5 &&
    isDespesaFinanceiraAccount(a)
  );
  filtered.forEach(a => {
    if (a.tipo === 'C' || a.tipo === 'D') {
      orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
    }
  });
  return { orc, real, diff: orc - real };
}

// Função para calcular totais de Receitas Financeiras
export function calculateReceitasFinanceirasTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;
  const filtered = accounts.filter(a => 
    a.atividade === 'ENCARGOS' && 
    a.nivel === 5 &&
    isReceitaFinanceiraAccount(a)
  );
  filtered.forEach(a => {
    if (a.tipo === 'C' || a.tipo === 'D') {
      orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
    }
  });
  return { orc, real, diff: orc - real };
}

// Função para calcular totais gerais de Encargos (Despesas + Receitas - valor bruto)
export function calculateEncargosTotals(accounts: AccountEntry[]) {
  const despesas = calculateDespesasFinanceirasTotals(accounts);
  const receitas = calculateReceitasFinanceirasTotals(accounts);

  return {
    despesas,
    receitas,
    total: {
      orc: despesas.orc + receitas.orc,
      real: despesas.real + receitas.real,
      diff: (despesas.orc + receitas.orc) - (despesas.real + receitas.real)
    }
  };
}

export function calculateDespesasComVendasTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;
  const filtered = accounts.filter(
    (a) =>
      a.nivel === 5 &&
      (a.tipo === 'C' || a.tipo === 'D') &&
      isDespesaComVendasCode(a.codigo) &&
      isDespesasComVendasConsolidatedScopeDepartment(a.departamento)
  );

  filtered.forEach((a) => {
    orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
    real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
  });

  return { orc, real, diff: orc - real };
}

// Função para calcular totais de Receitas por Atividade
export function calculateRevenueByAtividade(accounts: AccountEntry[], atividade: AtividadeKey) {
  let orc = 0;
  let real = 0;
  const filtered = accounts.filter(a =>
    a.atividade === atividade &&
    a.nivel === 5 &&
    a.tipo === 'R'
  );
  filtered.forEach(a => {
    orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
    real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
  });
  return { orc, real, diff: real - orc };
}

// Função para calcular totais consolidados de Receitas (todas as atividades)
export function calculateGlobalRevenueTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;
  const filtered = accounts.filter(a =>
    a.nivel === 5 &&
    a.tipo === 'R'
  );
  filtered.forEach(a => {
    orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
    real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
  });
  return { orc, real, diff: real - orc };
}

interface BudgetState {
  accounts: AccountEntry[];
  uploads: UploadRecord[];
  importedRealizadoBatches: {
    key: string;
    fileName: string;
    period: MonthKey;
    rows: ExcelRow[];
    importedAt: string;
  }[];
  importedOrcadoBatches: {
    key: string;
    fileName: string;
    departamento: string;
    atividade: OrcadoImportAtividadeKey;
    period: MonthKey;
    rows: OrcadoGrupoMonthValue[];
    importedAt: string;
  }[];
  setAccounts: (accounts: AccountEntry[]) => void;
  clearAllData: () => void;
  addUpload: (record: UploadRecord) => void;
  importExcelRows: (rows: ExcelRow[], fallbackPeriod: MonthKey, fileName: string) => number;
  importOrcadoExcelRows: (rows: ExcelRow[], fallbackPeriod: MonthKey, fileName: string) => number;
}

const uploadBatchKey = (period: MonthKey, fileName: string) =>
  `${period}::${fileName.trim().toUpperCase()}`;
const uploadOrcadoBatchKey = (
  period: MonthKey,
  fileName: string,
  atividade: OrcadoImportAtividadeKey,
  departamento: string
) =>
  `${period}::${fileName.trim().toUpperCase()}::${normalizeMatch(atividade)}::${normalizeLooseMatch(
    departamento
  )}`;
const uploadOrcadoScopeKey = (atividade: OrcadoImportAtividadeKey, departamento: string) =>
  `${normalizeMatch(atividade)}::${normalizeLooseMatch(departamento)}`;

const getBatchFallbackPeriod = (rows: OrcadoGrupoMonthValue[]): MonthKey =>
  (rows.find((row) => validMonthKeys.has(row.month as MonthKey))?.month as MonthKey) || MONTHS[0].key;

const buildInitialImportedOrcadoBatches = (): BudgetState['importedOrcadoBatches'] => {
  const seenReceitaPecuariaScopes = new Set<string>();
  const rawBatches = [
    ...ORCADO_IMPORT_BATCHES,
    ...ORCADO_RECEITA_PECUARIA_IMPORT_BATCHES,
    ...ORCADO_RECEITA_LATEX_IMPORT_BATCHES,
    ...ORCADO_RECEITA_CANA_IMPORT_BATCHES,
    ...ORCADO_RECEITA_AGRICOLA_IMPORT_BATCHES.map((batch) => ({
      ...batch,
      departamento: batch.cultura,
    })),
  ].filter((batch) => {
    if (!isReceitaPecuariaOrcadoBatch(batch)) return true;
    const scopeKey = receitaPecuariaOrcadoScopeKey(batch.departamento);
    if (seenReceitaPecuariaScopes.has(scopeKey)) return false;
    seenReceitaPecuariaScopes.add(scopeKey);
    return true;
  });

  return rawBatches.map((batch) => {
    const period = getBatchFallbackPeriod(batch.rows);
    return {
      key: uploadOrcadoBatchKey(period, batch.fileName, batch.atividade, batch.departamento),
      fileName: batch.fileName,
      departamento: batch.departamento,
      atividade: batch.atividade,
      period,
      rows: batch.rows,
      importedAt: new Date(0).toISOString(),
    };
  });
};

const cloneAccountEntry = (account: AccountEntry): AccountEntry => ({
  ...account,
  orcado: { ...account.orcado },
  realizado: { ...account.realizado },
  quantidade: account.quantidade ? { ...account.quantidade } : undefined,
});

/** Créditos de receita vêm negativos na planilha; consolidamos como valores positivos no app. */
export const normalizeReceitaRealizadoSigns = (accounts: AccountEntry[]): AccountEntry[] =>
  accounts.map((a) => {
    if (a.tipo !== 'R') return a;
    const nextReal: Record<string, number> = {};
    for (const [m, v] of Object.entries(a.realizado)) {
      nextReal[m] = Math.abs(Number(v) || 0);
    }
    return { ...a, realizado: nextReal };
  });

const realizadoDeltaForTipo = (tipo: AccountEntry['tipo'], saldo: number) =>
  tipo === 'R' ? Math.abs(saldo) : saldo;

const INITIAL_ACCOUNTS_TEMPLATE = INITIAL_ACCOUNTS.map(cloneAccountEntry);
const normalizeInitialAccountActivity = (account: AccountEntry): AccountEntry =>
  isDespesaTributariaCode(account.codigo) || isDespesaTributariaCode(account.grupoContabilN9)
    ? { ...account, atividade: 'DESP_ADM_TRIB' }
    : account;
const buildFreshInitialAccounts = () =>
  INITIAL_ACCOUNTS_TEMPLATE.map(cloneAccountEntry).map(normalizeInitialAccountActivity);
const normalizeMatch = (value: string | undefined) =>
  String(value || '')
    .toUpperCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const normalizeLooseMatch = (value: string | undefined) =>
  normalizeMatch(value).replace(/[^A-Z0-9]+/g, ' ').trim();

const GRUPO_CODE_PREFIX_PATTERN = /^\d(?:\.\d{1,4}){2,}/;

const parseNumeric = (value: unknown): number => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  const raw = String(value ?? '').trim();
  if (!raw) return 0;

  const cleaned = raw.replace(/[R$\s\u00A0]/g, '');
  const hasComma = cleaned.includes(',');
  const hasDot = cleaned.includes('.');
  let normalized = cleaned;
  const commaAsThousandsPattern = /^-?\d{1,3}(,\d{3})+$/;
  const dotAsThousandsPattern = /^-?\d{1,3}(\.\d{3})+$/;

  if (hasComma && hasDot) {
    // Uses the rightmost separator as decimal marker.
    if (cleaned.lastIndexOf(',') > cleaned.lastIndexOf('.')) {
      normalized = cleaned.replace(/\./g, '').replace(',', '.');
    } else {
      normalized = cleaned.replace(/,/g, '');
    }
  } else if (hasComma) {
    // If it does not match strict thousands grouping, treat comma as decimal separator.
    normalized = commaAsThousandsPattern.test(cleaned)
      ? cleaned.replace(/,/g, '')
      : cleaned.replace(',', '.');
  } else if (hasDot) {
    // If it does not match strict thousands grouping, treat dot as decimal separator.
    normalized = dotAsThousandsPattern.test(cleaned)
      ? cleaned.replace(/\./g, '')
      : cleaned;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const ORCADO_ATIVIDADE_ALIASES: Array<{ atividade: AtividadeKey; aliases: string[] }> = [
  { atividade: 'SERINGAL', aliases: ['SERINGAL', 'LATEX', 'BORRACHA'] },
  { atividade: 'PECUARIA', aliases: ['PECUARIA', 'GADO'] },
  { atividade: 'AGRICOLA', aliases: ['AGRICOLA', 'SOJA', 'MILHO', 'GRAOS', 'GRAO'] },
  { atividade: 'CANA', aliases: ['CANA'] },
  { atividade: 'DESP_ADM_TRIB', aliases: ['ADM', 'ADMINISTRAT', 'TRIBUT'] },
  { atividade: 'ENCARGOS', aliases: ['ENCARGO', 'FINANCEIR'] },
];

const normalizeDepartmentKey = (value?: string) =>
  normalizeMatch(value).replace(/\s+/g, ' ').trim();

const canonicalDepartmentKey = (value?: string) =>
  normalizeDepartmentKey(value)
    .replace(/^(DEPARTAMENTO|DEPTO)\s+/, '')
    .replace(/\bADMNISTRATIVA\b/g, 'ADMINISTRATIVA')
    // Treat both variants as the same department for agricola imports.
    .replace(/\bUNIDADE\s+RECEPCAO\s+DE\s+GRAOS\b/g, 'UNIDADE DE RECEPCAO DE GRAOS')
    .replace(/\bUNIDADE\s+DE\s+RECEPCAO\s+DE\s+GRAOS\b/g, 'UNIDADE DE RECEPCAO DE GRAOS')
    .trim();

const findDepartmentMappingByName = (departmentName?: string): MappingValue | null => {
  const target = canonicalDepartmentKey(departmentName);
  if (!target) return null;
  const entries = Object.entries(DEPARTMENT_MAPPING as Record<string, MappingValue>);
  const match = entries.find(([name]) => canonicalDepartmentKey(name) === target);
  return match ? match[1] : null;
};

const normalizeDepartmentToPecuaria = (departmentName: string): string => {
  const normalized = String(departmentName || '').trim();
  if (!normalized) return normalized;

  const directMap = findDepartmentMappingByName(normalized);
  const directAtividade = mapDivisaoToAtividade(directMap?.divisao);
  if (directAtividade === 'PECUARIA') return normalized;

  const candidate = normalized.replace(/SERINGAL/gi, 'PECUARIA');
  if (candidate === normalized) return normalized;

  const candidateMap = findDepartmentMappingByName(candidate);
  const candidateAtividade = mapDivisaoToAtividade(candidateMap?.divisao);
  return candidateAtividade === 'PECUARIA' ? candidate : normalized;
};

const parseOrcadoFileInfo = (fileName: string): { atividade: AtividadeKey; departamento: string } => {
  const baseName = fileName.replace(/\.(xlsx|xls|csv)$/i, '').trim();
  const normalized = normalizeMatch(baseName)
    .replace(/^ORCAMENTO\s+/, '')
    .replace(/^DEPARTAMENTO\s+/, '')
    .replace(/^DEPTO\s+/, '')
    .trim();
  const rawDepartamento = baseName
    .replace(/^ORCAMENTO\s+/i, '')
    .replace(/^DEPARTAMENTO\s+/i, '')
    .replace(/^DEPTO\s+/i, '')
    .trim();
  const normalizedWords = normalized.replace(/[^A-Z0-9]+/g, ' ').trim();
  const atividade =
    ORCADO_ATIVIDADE_ALIASES.find((item) =>
      item.aliases.some((alias) => {
        const normalizedAlias = normalizeMatch(alias);
        const aliasAsToken = new RegExp(`(^|\\s)${normalizedAlias}(\\s|$)`);
        return (
          normalized === normalizedAlias ||
          normalized.startsWith(`${normalizedAlias} `) ||
          normalized.endsWith(` ${normalizedAlias}`) ||
          aliasAsToken.test(normalizedWords)
        );
      })
    )?.atividade || 'DESP_ADM_TRIB';
  return { atividade, departamento: rawDepartamento || baseName };
};

const ORCADO_MONTH_HEADER_MAP: Record<string, MonthKey> = {
  'APR-26': '2026-04',
  'ABR-26': '2026-04',
  'APR/26': '2026-04',
  'ABR/26': '2026-04',
  'MAY-26': '2026-05',
  'MAI-26': '2026-05',
  'MAY/26': '2026-05',
  'MAI/26': '2026-05',
  'JUN-26': '2026-06',
  'JUN/26': '2026-06',
  'JUL-26': '2026-07',
  'JUL/26': '2026-07',
  'AUG-26': '2026-08',
  'AGO-26': '2026-08',
  'AUG/26': '2026-08',
  'AGO/26': '2026-08',
  'SEP-26': '2026-09',
  'SET-26': '2026-09',
  'SEP/26': '2026-09',
  'SET/26': '2026-09',
  'OCT-26': '2026-10',
  'OUT-26': '2026-10',
  'OCT/26': '2026-10',
  'OUT/26': '2026-10',
  'NOV-26': '2026-11',
  'NOV/26': '2026-11',
  'DEC-26': '2026-12',
  'DEZ-26': '2026-12',
  'DEC/26': '2026-12',
  'DEZ/26': '2026-12',
  'JAN-27': '2027-01',
  'JAN/27': '2027-01',
  'FEB-27': '2027-02',
  'FEV-27': '2027-02',
  'FEB/27': '2027-02',
  'FEV/27': '2027-02',
  'MAR-27': '2027-03',
  'MAR/27': '2027-03',
};

const MONTH_NUMBER_TO_KEY: Partial<Record<number, MonthKey>> = MONTHS.reduce(
  (acc, month) => {
    const monthNumber = Number(month.key.split('-')[1]);
    acc[monthNumber] = month.key;
    return acc;
  },
  {} as Partial<Record<number, MonthKey>>
);

const mapHeaderDateToMonthKey = (date: Date): MonthKey | null => {
  const exactKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}` as MonthKey;
  if (validMonthKeys.has(exactKey)) return exactKey;

  return MONTH_NUMBER_TO_KEY[date.getMonth() + 1] || null;
};

const parseMonthFromHeader = (header: unknown): MonthKey | null => {
  if (header instanceof Date && !Number.isNaN(header.getTime())) {
    return mapHeaderDateToMonthKey(header);
  }
  if (typeof header === 'number' && Number.isFinite(header)) {
    const date = new Date((header - 25569) * 86400000);
    if (!Number.isNaN(date.getTime())) {
      return mapHeaderDateToMonthKey(date);
    }
  }
  const normalized = normalizeMatch(String(header || ''));
  const variants = [
    normalized,
    normalized.replace(/\s+/g, '-'),
    normalized.replace(/\s+/g, '/'),
    normalized.replace(/-/g, '/'),
    normalized.replace(/\//g, '-'),
  ];

  for (const variant of variants) {
    const month = ORCADO_MONTH_HEADER_MAP[variant];
    if (month) return month;
  }
  return null;
};

const parseGrupoContabilFromRow = (row: Record<string, unknown>): string => {
  const pickGrupoCode = (rawValue: unknown): string => {
    const value = String(rawValue || '').trim();
    if (!value) return '';
    const candidate = value.split('-')[0]?.trim() || value;
    const extracted = extractGrupoCode(candidate);
    return GRUPO_CODE_PREFIX_PATTERN.test(extracted) ? extracted : '';
  };

  const directKeys = [
    'GRUPO_CONTABIL',
    'GRUPOCONTABIL',
    'GRUPO CONTABIL',
    'GRUPO_CONTABIL_N9',
    'GRUPOCONTABILN9',
    'CONTA_CONTABIL',
    'CONTA CONTABIL',
    'CONTA',
    'GRUPO',
  ];
  for (const key of directKeys) {
    const code = pickGrupoCode(row[key]);
    if (code) return code;
  }

  // Fallback for spreadsheets where the first column header is empty/unnamed.
  const looseKeys = ['__EMPTY', '__EMPTY_0', 'Unnamed: 0', 'UNNAMED: 0', 'CONTA_CONTABIL'];
  for (const key of looseKeys) {
    const code = pickGrupoCode(row[key]);
    if (code) return code;
  }

  for (const value of Object.values(row)) {
    const code = pickGrupoCode(value);
    if (code) return code;
  }
  return '';
};

const extractGrupoCode = (value: string | undefined): string => {
  const normalized = String(value || '').trim();
  if (!normalized) return '';
  const match = normalized.match(/^\d(?:\.\d{1,4}){2,}/);
  return match?.[0] || '';
};

const resolveOrcadoGrupoContabilN9Label = (row: OrcadoGrupoMonthValue): string => {
  const raw = String(row.grupoContabil || '').trim();
  const prefix = extractGrupoCode(raw);
  if (!prefix) return raw;
  if (raw.includes('-')) return raw;
  if (prefix.startsWith('3.1.01')) return raw;
  if (row.despAdmOrcadoScope !== undefined) {
    return getDespAdmGrupoContabilN9DisplayLabel(prefix, raw);
  }
  return getPecuariaGrupoContabilN9DisplayLabel(prefix, raw);
};

const accountMatchesGrupoContabil = (account: AccountEntry, grupoCode: string): boolean => {
  if (!grupoCode) return false;
  const accountGrupoN9Code = extractGrupoCode(account.grupoContabilN9);
  if (accountGrupoN9Code === grupoCode) return true;

  // Fallback for entries where only account code is populated.
  return account.codigo === grupoCode || account.codigo.startsWith(`${grupoCode}.`);
};

type PecuariaOrcadoAggBucket = {
  value: number;
  scope: 'grupo' | 'descricao';
  descricaoContabil: string;
  contaContabil?: string;
  grupoContabilLabel?: string;
};

const aggregatePecuariaCustosOrcadoRows = (
  rows: ExcelRow[],
  fallbackPeriod: MonthKey
): { entries: OrcadoGrupoMonthValue[]; atividadeFromRows: AtividadeKey | null; departamentoFromRows: string | null } => {
  const grouped = new Map<string, PecuariaOrcadoAggBucket>();

  rows.forEach((row) => {
    const rawRow = row as Record<string, unknown>;
    const parsed = tryParsePecuariaOrcadoBudgetRow(rawRow);
    if (!parsed) return;

    const descMatchKey =
      parsed.scope === 'grupo'
        ? '__GRUPO__'
        : normalizeMatch(parsed.descricaoContabil || parsed.contaContabil);
    const descLabel =
      parsed.scope === 'grupo'
        ? resolvePecuariaOrcadoGrupoDescricao(parsed.grupoContabilLabel, parsed.descricaoContabil)
        : (parsed.descricaoContabil || parsed.contaContabil).trim() || parsed.contaContabil;

    const bump = (month: MonthKey, amount: number) => {
      const k = `${parsed.grupoN9}|${parsed.scope}|${descMatchKey}|${month}`;
      const prev = grouped.get(k);
      if (prev) {
        prev.value += amount;
      } else {
        grouped.set(k, {
          value: amount,
          scope: parsed.scope,
          descricaoContabil: descLabel,
          contaContabil: parsed.scope === 'descricao' ? parsed.contaContabil : undefined,
        });
      }
    };

    let hasPivotMonth = false;
    Object.entries(rawRow).forEach(([header, cellValue]) => {
      const month = parseMonthFromHeader(header);
      if (!month) return;
      hasPivotMonth = true;
      bump(month, parseNumeric(cellValue));
    });

    if (!hasPivotMonth) {
      const month = dateToMonthKey(row.DATA) || fallbackPeriod;
      bump(month, parseNumeric(row.SALDO));
    }
  });

  const entries: OrcadoGrupoMonthValue[] = Array.from(grouped.entries()).map(([key, bucket]) => {
    const [, , , month] = key.split('|');
    return {
      grupoContabil: key.split('|')[0]!,
      month: month as MonthKey,
      value: bucket.value,
      pecuariaOrcadoScope: bucket.scope,
      descricaoContabil: bucket.descricaoContabil,
      contaContabil: bucket.contaContabil,
    };
  });

  return { entries, atividadeFromRows: 'PECUARIA', departamentoFromRows: null };
};

const aggregateReceitaPecuariaOrcadoRows = (
  rows: ExcelRow[],
  fallbackPeriod: MonthKey
): { entries: OrcadoGrupoMonthValue[]; atividadeFromRows: AtividadeKey | null; departamentoFromRows: string | null } => {
  const grouped = new Map<string, PecuariaOrcadoAggBucket>();

  rows.forEach((row) => {
    const rawRow = row as Record<string, unknown>;
    const parsed = tryParseReceitaPecuariaOrcadoBudgetRow(rawRow);
    if (!parsed) return;

    const descMatchKey =
      parsed.scope === 'grupo'
        ? '__GRUPO__'
        : normalizeMatch(parsed.descricaoContabil || parsed.contaContabil);
    const descLabel =
      parsed.scope === 'grupo'
        ? resolveReceitaPecuariaOrcadoGrupoDescricao(parsed.grupoContabilLabel, parsed.descricaoContabil)
        : (parsed.descricaoContabil || parsed.contaContabil).trim() || parsed.contaContabil;
    const grupoStored =
      parsed.grupoContabilLabel.includes('-') ? parsed.grupoContabilLabel : parsed.grupoN9;

    const bump = (month: MonthKey, amount: number) => {
      const k = `${parsed.grupoN9}|${parsed.scope}|${descMatchKey}|${month}`;
      const prev = grouped.get(k);
      if (prev) {
        prev.value += amount;
        if (!prev.grupoContabilLabel && parsed.grupoContabilLabel.includes('-')) {
          prev.grupoContabilLabel = parsed.grupoContabilLabel;
        }
      } else {
        grouped.set(k, {
          value: amount,
          scope: parsed.scope,
          descricaoContabil: descLabel,
          contaContabil: parsed.scope === 'descricao' ? parsed.contaContabil : undefined,
          grupoContabilLabel: grupoStored,
        });
      }
    };

    let hasPivotMonth = false;
    Object.entries(rawRow).forEach(([header, cellValue]) => {
      const month = parseMonthFromHeader(header);
      if (!month) return;
      hasPivotMonth = true;
      bump(month, parseNumeric(cellValue));
    });

    if (!hasPivotMonth) {
      const month = dateToMonthKey(row.DATA) || fallbackPeriod;
      bump(month, parseNumeric(row.SALDO));
    }
  });

  const entries: OrcadoGrupoMonthValue[] = Array.from(grouped.entries()).map(([key, bucket]) => {
    const parts = key.split('|');
    const month = parts[3] as MonthKey;
    return {
      grupoContabil: bucket.grupoContabilLabel || parts[0]!,
      month,
      value: bucket.value,
      pecuariaOrcadoScope: bucket.scope,
      descricaoContabil: bucket.descricaoContabil,
      contaContabil: bucket.contaContabil,
    };
  });

  return { entries, atividadeFromRows: 'PECUARIA', departamentoFromRows: null };
};

const AGRICOLA_CUSTOS_CULTURE_FILE_PATTERN = /^[^-]+-\s*[^-]+$/;

const isAgricolaCustosCascadeFileName = (fileName: string): boolean => {
  const department = fileName
    .replace(/\.(xlsx|xls|csv)$/i, '')
    .replace(/^ORCAMENTO\s+/i, '')
    .replace(/^ORÇAMENTO\s+/i, '')
    .trim();
  const normalized = normalizeMatch(department);
  if (normalized.includes('RECEPCAO') && normalized.includes('GRAO')) return false;
  if (normalized.includes('PECUARIA')) return false;
  if (normalized.includes('SERINGAL')) return false;
  return AGRICOLA_CUSTOS_CULTURE_FILE_PATTERN.test(department);
};

/** "FAZENDA - SERINGAL" ou "FAZENDA SERINGAL" (ex.: Bandeirantes Seringal). */
const SERINGAL_CUSTOS_FILE_PATTERN = /^[^-]+\s*(?:-\s*)?SERINGAL$/i;

const isSeringalCustosCascadeFileName = (fileName: string): boolean => {
  const department = fileName
    .replace(/\.(xlsx|xls|csv)$/i, '')
    .replace(/^ORCAMENTO\s+/i, '')
    .replace(/^ORÇAMENTO\s+/i, '')
    .trim();
  const normalized = normalizeMatch(department).replace(/\s+/g, ' ').trim();
  return SERINGAL_CUSTOS_FILE_PATTERN.test(normalized);
};

const isDespAdmCustosCascadeFileName = (fileName: string): boolean => {
  const { atividade, departamento } = parseOrcadoFileInfo(fileName);
  if (atividade !== 'DESP_ADM_TRIB') return false;
  return !normalizeMatch(departamento).includes('TRIBUT');
};

const aggregateAgricolaCustosOrcadoRows = (
  rows: ExcelRow[],
  fallbackPeriod: MonthKey
): { entries: OrcadoGrupoMonthValue[]; atividadeFromRows: AtividadeKey | null; departamentoFromRows: string | null } => {
  const grouped = new Map<string, PecuariaOrcadoAggBucket>();

  rows.forEach((row) => {
    const rawRow = row as Record<string, unknown>;
    const parsed = tryParsePecuariaOrcadoBudgetRow(rawRow);
    if (!parsed) return;

    const descMatchKey =
      parsed.scope === 'grupo'
        ? '__GRUPO__'
        : normalizeMatch(parsed.descricaoContabil || parsed.contaContabil);
    const descLabel =
      parsed.scope === 'grupo'
        ? resolvePecuariaOrcadoGrupoDescricao(parsed.grupoContabilLabel, parsed.descricaoContabil)
        : (parsed.descricaoContabil || parsed.contaContabil).trim() || parsed.contaContabil;

    const bump = (month: MonthKey, amount: number) => {
      const k = `${parsed.grupoN9}|${parsed.scope}|${descMatchKey}|${month}`;
      const prev = grouped.get(k);
      if (prev) {
        prev.value += amount;
      } else {
        grouped.set(k, {
          value: amount,
          scope: parsed.scope,
          descricaoContabil: descLabel,
          contaContabil: parsed.scope === 'descricao' ? parsed.contaContabil : undefined,
        });
      }
    };

    let hasPivotMonth = false;
    Object.entries(rawRow).forEach(([header, cellValue]) => {
      const month = parseMonthFromHeader(header);
      if (!month) return;
      hasPivotMonth = true;
      bump(month, parseNumeric(cellValue));
    });

    if (!hasPivotMonth) {
      const month = dateToMonthKey(row.DATA) || fallbackPeriod;
      bump(month, parseNumeric(row.SALDO));
    }
  });

  const entries: OrcadoGrupoMonthValue[] = Array.from(grouped.entries()).map(([key, bucket]) => {
    const [, , , month] = key.split('|');
    return {
      grupoContabil: key.split('|')[0]!,
      month: month as MonthKey,
      value: bucket.value,
      agricolaOrcadoScope: bucket.scope,
      descricaoContabil: bucket.descricaoContabil,
      contaContabil: bucket.contaContabil,
    };
  });

  return { entries, atividadeFromRows: 'AGRICOLA', departamentoFromRows: null };
};

const aggregateSeringalCustosOrcadoRows = (
  rows: ExcelRow[],
  fallbackPeriod: MonthKey
): { entries: OrcadoGrupoMonthValue[]; atividadeFromRows: AtividadeKey | null; departamentoFromRows: string | null } => {
  const grouped = new Map<string, PecuariaOrcadoAggBucket>();

  rows.forEach((row) => {
    const rawRow = row as Record<string, unknown>;
    const parsed = tryParsePecuariaOrcadoBudgetRow(rawRow);
    if (!parsed) return;

    const descMatchKey =
      parsed.scope === 'grupo'
        ? '__GRUPO__'
        : normalizeMatch(parsed.descricaoContabil || parsed.contaContabil);
    const descLabel =
      parsed.scope === 'grupo'
        ? resolvePecuariaOrcadoGrupoDescricao(parsed.grupoContabilLabel, parsed.descricaoContabil)
        : (parsed.descricaoContabil || parsed.contaContabil).trim() || parsed.contaContabil;

    const bump = (month: MonthKey, amount: number) => {
      const k = `${parsed.grupoN9}|${parsed.scope}|${descMatchKey}|${month}`;
      const prev = grouped.get(k);
      if (prev) {
        prev.value += amount;
      } else {
        grouped.set(k, {
          value: amount,
          scope: parsed.scope,
          descricaoContabil: descLabel,
          contaContabil: parsed.scope === 'descricao' ? parsed.contaContabil : undefined,
        });
      }
    };

    let hasPivotMonth = false;
    Object.entries(rawRow).forEach(([header, cellValue]) => {
      const month = parseMonthFromHeader(header);
      if (!month) return;
      hasPivotMonth = true;
      bump(month, parseNumeric(cellValue));
    });

    if (!hasPivotMonth) {
      const month = dateToMonthKey(row.DATA) || fallbackPeriod;
      bump(month, parseNumeric(row.SALDO));
    }
  });

  const entries: OrcadoGrupoMonthValue[] = Array.from(grouped.entries()).map(([key, bucket]) => {
    const [, , , month] = key.split('|');
    return {
      grupoContabil: key.split('|')[0]!,
      month: month as MonthKey,
      value: bucket.value,
      seringalOrcadoScope: bucket.scope,
      descricaoContabil: bucket.descricaoContabil,
      contaContabil: bucket.contaContabil,
    };
  });

  return { entries, atividadeFromRows: 'SERINGAL', departamentoFromRows: null };
};

const aggregateDespAdmCustosOrcadoRows = (
  rows: ExcelRow[],
  fallbackPeriod: MonthKey
): { entries: OrcadoGrupoMonthValue[]; atividadeFromRows: AtividadeKey | null; departamentoFromRows: string | null } => {
  const grouped = new Map<string, PecuariaOrcadoAggBucket>();

  rows.forEach((row) => {
    const rawRow = row as Record<string, unknown>;
    const parsed = tryParseDespAdmOrcadoBudgetRow(rawRow);
    if (!parsed) return;

    const descMatchKey =
      parsed.scope === 'grupo'
        ? '__GRUPO__'
        : normalizeMatch(parsed.descricaoContabil || parsed.contaContabil);
    const descLabel =
      parsed.scope === 'grupo'
        ? resolvePecuariaOrcadoGrupoDescricao(parsed.grupoContabilLabel, parsed.descricaoContabil)
        : (parsed.descricaoContabil || parsed.contaContabil).trim() || parsed.contaContabil;

    const bump = (month: MonthKey, amount: number) => {
      const k = `${parsed.grupoN9}|${parsed.scope}|${descMatchKey}|${month}`;
      const prev = grouped.get(k);
      if (prev) {
        prev.value += amount;
      } else {
        grouped.set(k, {
          value: amount,
          scope: parsed.scope,
          descricaoContabil: descLabel,
          contaContabil: parsed.scope === 'descricao' ? parsed.contaContabil : undefined,
          grupoContabilLabel: parsed.grupoContabilLabel,
        });
      }
    };

    let hasPivotMonth = false;
    Object.entries(rawRow).forEach(([header, cellValue]) => {
      const month = parseMonthFromHeader(header);
      if (!month) return;
      hasPivotMonth = true;
      bump(month, parseNumeric(cellValue));
    });

    if (!hasPivotMonth) {
      const month = dateToMonthKey(row.DATA) || fallbackPeriod;
      bump(month, parseNumeric(row.SALDO));
    }
  });

  const entries: OrcadoGrupoMonthValue[] = Array.from(grouped.entries()).map(([key, bucket]) => {
    const [, , , month] = key.split('|');
    const grupoN9 = key.split('|')[0]!;
    return {
      grupoContabil: bucket.grupoContabilLabel || grupoN9,
      month: month as MonthKey,
      value: bucket.value,
      despAdmOrcadoScope: bucket.scope,
      descricaoContabil: bucket.descricaoContabil,
      contaContabil: bucket.contaContabil,
    };
  });

  return { entries, atividadeFromRows: 'DESP_ADM_TRIB', departamentoFromRows: null };
};

const isDespAdmCustosOrcadoWorkbook = (rows: ExcelRow[], fileName: string): boolean => {
  if (!isDespAdmCustosCascadeFileName(fileName)) return false;
  return rows.some((row) => tryParseDespAdmOrcadoBudgetRow(row as Record<string, unknown>) !== null);
};

const isAgricolaCustosOrcadoWorkbook = (rows: ExcelRow[], fileName: string): boolean => {
  if (!isAgricolaCustosCascadeFileName(fileName)) return false;
  return rows.some((row) => tryParsePecuariaOrcadoBudgetRow(row as Record<string, unknown>) !== null);
};

const isSeringalCustosOrcadoWorkbook = (rows: ExcelRow[], fileName: string): boolean => {
  if (!isSeringalCustosCascadeFileName(fileName)) return false;
  return rows.some((row) => tryParsePecuariaOrcadoBudgetRow(row as Record<string, unknown>) !== null);
};

const isPecuariaCustosOrcadoWorkbook = (rows: ExcelRow[], fileName: string): boolean => {
  if (isReceitaPecuariaOrcadoWorkbook(rows)) return false;
  if (isAgricolaCustosCascadeFileName(fileName)) return false;
  if (isSeringalCustosCascadeFileName(fileName)) return false;
  if (isDespAdmCustosCascadeFileName(fileName)) return false;
  if (rows.some((row) => tryParsePecuariaOrcadoBudgetRow(row as Record<string, unknown>) !== null)) {
    return true;
  }
  const base = fileName.replace(/\.(xlsx|xls|csv)$/i, '').trim();
  if (!normalizeMatch(base).includes('PECUARIA')) return false;
  return rows.length > 0 && rows.every((r) => !String(r?.NOMEDEPTO || '').trim());
};

const aggregateOrcadoRows = (
  rows: ExcelRow[],
  fallbackPeriod: MonthKey,
  fileName = ''
): { entries: OrcadoGrupoMonthValue[]; atividadeFromRows: AtividadeKey | null; departamentoFromRows: string | null } => {
  if (isReceitaPecuariaOrcadoWorkbook(rows)) {
    return aggregateReceitaPecuariaOrcadoRows(rows, fallbackPeriod);
  }
  if (isAgricolaCustosOrcadoWorkbook(rows, fileName)) {
    return aggregateAgricolaCustosOrcadoRows(rows, fallbackPeriod);
  }
  if (isSeringalCustosOrcadoWorkbook(rows, fileName)) {
    return aggregateSeringalCustosOrcadoRows(rows, fallbackPeriod);
  }
  if (isDespAdmCustosOrcadoWorkbook(rows, fileName)) {
    return aggregateDespAdmCustosOrcadoRows(rows, fallbackPeriod);
  }
  if (isPecuariaCustosOrcadoWorkbook(rows, fileName)) {
    return aggregatePecuariaCustosOrcadoRows(rows, fallbackPeriod);
  }

  const grouped = new Map<string, number>();
  const atividadeCounts: Partial<Record<AtividadeKey, number>> = {};
  const departamentoCounts = new Map<string, number>();

  rows.forEach((row) => {
    const rawRow = row as Record<string, unknown>;
    const grupoContabil = parseGrupoContabilFromRow(rawRow);
    if (!grupoContabil) return;

    let hasPivotMonth = false;
    Object.entries(rawRow).forEach(([header, cellValue]) => {
      const month = parseMonthFromHeader(header);
      if (!month) return;
      hasPivotMonth = true;
      const key = `${grupoContabil}::${month}`;
      grouped.set(key, (grouped.get(key) || 0) + parseNumeric(cellValue));
    });

    if (!hasPivotMonth) {
      const month = dateToMonthKey(row.DATA) || fallbackPeriod;
      const value = parseNumeric(row.SALDO);
      const key = `${grupoContabil}::${month}`;
      grouped.set(key, (grouped.get(key) || 0) + value);
    }

    const atividade = resolveAtividadeFromRow(row);
    atividadeCounts[atividade] = (atividadeCounts[atividade] || 0) + 1;

    const dept = normalizeMatch(rowValue(row.NOMEDEPTO));
    if (dept) {
      departamentoCounts.set(dept, (departamentoCounts.get(dept) || 0) + 1);
    }
  });

  const atividadeFromRows = (Object.entries(atividadeCounts).sort((a, b) => b[1]! - a[1]!)[0]?.[0] ||
    null) as AtividadeKey | null;
  const departamentoFromRows =
    Array.from(departamentoCounts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || null;

  const entries: OrcadoGrupoMonthValue[] = Array.from(grouped.entries()).map(([key, value]) => {
    const [grupoContabil, month] = key.split('::');
    return { grupoContabil, month: month as MonthKey, value };
  });

  return { entries, atividadeFromRows, departamentoFromRows };
};

const applyRowsToAccounts = (baseAccounts: AccountEntry[], rows: ExcelRow[], fallbackPeriod: MonthKey) => {
  const newAccounts = baseAccounts.map(cloneAccountEntry);
  let count = 0;

  rows.forEach(row => {
    const conta = String(row.CONTA_CONTABIL || '').trim();
    if (!conta) return;
    const saldo = typeof row.SALDO === 'number' ? row.SALDO : 0;
    const rowQuantidade = typeof row.QUANTIDADE === 'number' ? row.QUANTIDADE : 0;
    const month = dateToMonthKey(row.DATA) || fallbackPeriod;
    const rowAtividade = resolveAtividadeFromRow(row);
    const rowDept = rowValue(row.NOMEDEPTO);
    const rowCC = rowValue(row.NOMECUSTO);
    const rowGrupo = rowValue(row.GRUPOCONTABIL);
    const rowGrupoN9 = rowValue(row.GRUPOCONTABILN9);
    const rowProduto = rowValue(row.NOMEPRODUTO);
    const rowDivisao = rowValue(row.DIVISAO);
    const rowUnidadeNegocio = rowValue(row.UNIDADE_DE_NEGOCIO);
    const rowColigada = rowValue(row.COLIGADA);
    const rowDescricao = rowValue(row.DESCRICAO_CONTABIL);

    const existing = newAccounts.find(
      (a) =>
        a.codigo === conta &&
        a.atividade === rowAtividade &&
        (a.departamento || '') === (rowDept || '') &&
        (a.centroCusto || '') === (rowCC || '') &&
        (a.grupoContabil || '') === (rowGrupo || '') &&
        (a.grupoContabilN9 || '') === (rowGrupoN9 || '') &&
        (a.nomeProduto || '') === (rowProduto || '')
    );

    if (existing) {
      const delta = realizadoDeltaForTipo(existing.tipo, saldo);
      existing.realizado[month] = (existing.realizado[month] || 0) + delta;
      if (rowQuantidade !== 0) {
        if (!existing.quantidade) existing.quantidade = {};
        existing.quantidade[month] = (existing.quantidade[month] || 0) + rowQuantidade;
      }
      if (!existing.departamento) existing.departamento = rowDept;
      if (!existing.centroCusto) existing.centroCusto = rowCC;
      if (!existing.grupoContabil) existing.grupoContabil = rowGrupo;
      if (!existing.grupoContabilN9) existing.grupoContabilN9 = rowGrupoN9;
      if (!existing.nomeProduto) existing.nomeProduto = rowProduto;
      if (!existing.divisao) existing.divisao = rowDivisao;
      if (!existing.unidadeNegocio) existing.unidadeNegocio = rowUnidadeNegocio;
      if (!existing.coligada) existing.coligada = rowColigada;
      count++;
      return;
    }

    const base = newAccounts.find(a => a.codigo === conta && a.atividade === rowAtividade && a.nivel === 5);
    if (!base) return;

    const newEntry: AccountEntry = {
      ...base,
      id: `${base.id}-${count}-${newAccounts.length}`,
      descricao: rowDescricao || base.descricao,
      departamento: rowDept,
      centroCusto: rowCC,
      grupoContabil: rowGrupo,
      grupoContabilN9: rowGrupoN9,
      nomeProduto: rowProduto,
      divisao: rowDivisao,
      unidadeNegocio: rowUnidadeNegocio,
      coligada: rowColigada,
      orcado: {},
      realizado: { [month]: realizadoDeltaForTipo(base.tipo, saldo) },
      ...(rowQuantidade !== 0 ? { quantidade: { [month]: rowQuantidade } } : {}),
    };

    newAccounts.push(newEntry);
    count++;
  });

  return { accounts: newAccounts, count };
};

/** Nível 5 sintético para ancorar orçado quando o realizado não traz linhas desse grupo. */
const syntheticLeafCodigoForOrcado = (normalizedGrupo: string): string => {
  const parts = normalizedGrupo.split('.').filter(Boolean);
  if (parts.length >= 5) return parts.slice(0, 5).join('.');
  const out = [...parts];
  let k = 9001;
  while (out.length < 5) {
    out.push(String(k));
    k += 1;
  }
  return out.join('.');
};

const inferTipoFromConta = (codigoConta: string): AccountEntry['tipo'] => {
  const c = String(codigoConta || '').trim();
  if (c.startsWith('3.1') || c.startsWith('3.01')) return 'R';
  if (c.startsWith('4.')) return 'C';
  return 'D';
};

const grupoContabilFilterDigit = (normalizedGrupo: string): string => {
  if (normalizedGrupo.startsWith('4.')) return '4';
  if (normalizedGrupo.startsWith('3.')) return '3';
  const first = normalizedGrupo.split('.')[0];
  return first === '4' ? '4' : first === '3' ? '3' : '4';
};

const ensureSyntheticParentChain = (
  accounts: AccountEntry[],
  leafCodigo: string,
  atividade: AtividadeKey,
  tipo: AccountEntry['tipo']
) => {
  const parts = leafCodigo.split('.').filter(Boolean);
  for (let depth = 1; depth < parts.length; depth += 1) {
    const codigo = parts.slice(0, depth).join('.');
    const exists = accounts.some((a) => a.codigo === codigo && a.atividade === atividade);
    if (exists) continue;
    const codigoPai = depth > 1 ? parts.slice(0, depth - 1).join('.') : null;
    accounts.push({
      id: `SYN::PARENT::${atividade}::${codigo}`,
      codigo,
      descricao: codigo,
      tipo,
      codigoPai,
      nivel: depth,
      atividade,
      orcado: {},
      realizado: {},
    });
  }
};

const getOrCreateStandaloneOrcadoAnchor = (
  nextAccounts: AccountEntry[],
  ctx: {
    normalizedGrupo: string;
    grupoContabilN9Label: string;
    atividade: OrcadoImportAtividadeKey;
    departamento: string;
    isOutrasReceitasImport: boolean;
    descricaoOverride?: string;
  }
): AccountEntry => {
  const { normalizedGrupo, grupoContabilN9Label, atividade, departamento, isOutrasReceitasImport, descricaoOverride } =
    ctx;
  const atividadeKey = isOutrasReceitasImport ? 'OUTRAS_RECEITAS' : atividade;
  const id = `SYN::ORCADO::${atividadeKey}::${normalizeLooseMatch(departamento)}::${normalizedGrupo}`;
  const existing = nextAccounts.find((a) => a.id === id);
  if (existing) return existing;

  const resolvedAtividade: AtividadeKey = isOutrasReceitasImport ? 'PECUARIA' : atividade;
  const leafCodigo = syntheticLeafCodigoForOrcado(normalizedGrupo);
  const tipo = inferTipoFromConta(leafCodigo);
  ensureSyntheticParentChain(nextAccounts, leafCodigo, resolvedAtividade, tipo);

  const codigoPai = leafCodigo.includes('.') ? leafCodigo.split('.').slice(0, -1).join('.') : null;
  const leaf: AccountEntry = {
    id,
    codigo: leafCodigo,
    descricao: descricaoOverride?.trim() || `Orçado — grupo ${normalizedGrupo}`,
    tipo,
    codigoPai,
    nivel: 5,
    atividade: resolvedAtividade,
    departamento,
    centroCusto: departamento,
    grupoContabil: grupoContabilFilterDigit(normalizedGrupo),
    grupoContabilN9: grupoContabilN9Label,
    orcado: {},
    realizado: {},
  };
  nextAccounts.push(leaf);
  return leaf;
};

const applyOrcadoRowsToAccounts = (
  baseAccounts: AccountEntry[],
  rows: OrcadoGrupoMonthValue[],
  atividade: OrcadoImportAtividadeKey,
  departamento: string
) => {
  const nextAccounts = baseAccounts.map(cloneAccountEntry);
  let count = 0;
  const replaceReceitaPecuariaOrcado = isReceitaPecuariaOrcadoBatch({ atividade, rows });
  const isOutrasReceitasImport = atividade === 'OUTRAS_RECEITAS_EVENTUAIS';
  const normalizedImportedDept = normalizeLooseMatch(departamento);
  const isAdministrativeImport = atividade === 'DESP_ADM_TRIB';
  const isTributaryOnlyImport =
    isAdministrativeImport &&
    normalizedImportedDept.includes('TRIBUT');
  const shouldScopeByDepartment = !isTributaryOnlyImport;
  const hasRateioHint = (value?: string) => normalizeMatch(value).includes('RATEIO');
  const realizedTotal = (account: AccountEntry) =>
    Object.values(account.realizado).reduce((sum, value) => sum + value, 0);
  const compareCandidatePriority = (a: AccountEntry, b: AccountEntry) => {
    const aRateio = hasRateioHint(a.centroCusto) || hasRateioHint(a.descricao);
    const bRateio = hasRateioHint(b.centroCusto) || hasRateioHint(b.descricao);
    if (aRateio !== bRateio) return aRateio ? -1 : 1;

    const aReal = realizedTotal(a);
    const bReal = realizedTotal(b);
    if (aReal !== bReal) return bReal - aReal;

    const byCode = a.codigo.localeCompare(b.codigo);
    if (byCode !== 0) return byCode;
    return a.id.localeCompare(b.id);
  };

  rows.forEach((row) => {
    const normalizedGrupo = extractGrupoCode(row.grupoContabil);
    if (!normalizedGrupo) return;
    const grupoContabilN9Label = resolveOrcadoGrupoContabilN9Label(row);

    const cascadeScope =
      row.pecuariaOrcadoScope ??
      row.agricolaOrcadoScope ??
      row.seringalOrcadoScope ??
      row.despAdmOrcadoScope;

    if (cascadeScope === 'grupo') {
      const anchor = getOrCreateStandaloneOrcadoAnchor(nextAccounts, {
        normalizedGrupo,
        grupoContabilN9Label,
        atividade,
        departamento,
        isOutrasReceitasImport,
        descricaoOverride: row.descricaoContabil,
      });
      anchor.orcado[row.month] = (anchor.orcado[row.month] || 0) + row.value;
      count++;
      return;
    }

    if (cascadeScope === 'descricao') {
      const descLoose = normalizeLooseMatch(row.descricaoContabil || row.contaContabil || 'ITEM');
      const descIdPrefix = row.despAdmOrcadoScope
        ? 'SYN::ORCADOADM::'
        : row.seringalOrcadoScope
          ? 'SYN::ORCADOSER::'
          : row.agricolaOrcadoScope
            ? 'SYN::ORCADOAG::'
            : 'SYN::ORCADOPEC::';
      const id = `${descIdPrefix}${normalizeLooseMatch(departamento)}::${normalizedGrupo}::${descLoose}`;
      let anchor = nextAccounts.find((a) => a.id === id);
      if (!anchor) {
        const conta = (row.contaContabil || '').trim();
        const leafCodigo =
          conta && /^\d\.\d+\.\d+/.test(conta) ? conta : syntheticLeafCodigoForOrcado(normalizedGrupo);
        const resolvedAct: AtividadeKey = isOutrasReceitasImport ? 'PECUARIA' : (atividade as AtividadeKey);
        const tipo = inferTipoFromConta(leafCodigo);
        ensureSyntheticParentChain(nextAccounts, leafCodigo, resolvedAct, tipo);
        const codigoPai = leafCodigo.includes('.') ? leafCodigo.split('.').slice(0, -1).join('.') : null;
        anchor = {
          id,
          codigo: leafCodigo,
          descricao: (row.descricaoContabil || conta || 'Orçado').trim(),
          tipo,
          codigoPai,
          nivel: 5,
          atividade: resolvedAct,
          departamento,
          centroCusto: departamento,
          grupoContabil: grupoContabilFilterDigit(normalizedGrupo),
          grupoContabilN9: grupoContabilN9Label,
          orcado: {},
          realizado: {},
        };
        nextAccounts.push(anchor);
      } else if (
        grupoContabilN9Label.includes('-') &&
        !String(anchor.grupoContabilN9 || '').includes('-')
      ) {
        anchor.grupoContabilN9 = grupoContabilN9Label;
      }
      anchor.orcado[row.month] = (anchor.orcado[row.month] || 0) + row.value;
      count++;
      return;
    }

    const strictCandidates = nextAccounts.filter(
      (account) =>
        account.nivel === 5 &&
        (
          isOutrasReceitasImport
            ? isOutrasReceitasEventuaisCode(account.codigo)
            : account.atividade === atividade
        ) &&
        accountMatchesGrupoContabil(account, normalizedGrupo) &&
        (() => {
          if (!shouldScopeByDepartment) return true;
          const accountScope = normalizeLooseMatch(
            isAdministrativeImport ? account.centroCusto : account.departamento
          );
          if (!normalizedImportedDept) return true;
          if (isAdministrativeImport) {
            return accountScope === normalizedImportedDept;
          }
          return accountScope === normalizedImportedDept;
        })()
    );
    const sameActivityCandidates =
      strictCandidates.length > 0
        ? strictCandidates
        : nextAccounts.filter(
            (account) =>
              account.nivel === 5 &&
              (
                isOutrasReceitasImport
                  ? isOutrasReceitasEventuaisCode(account.codigo)
                  : account.atividade === atividade
              ) &&
              accountMatchesGrupoContabil(account, normalizedGrupo)
          );
    const departmentCandidates =
      sameActivityCandidates.length > 0
        ? sameActivityCandidates
        : nextAccounts.filter(
            (account) =>
              account.nivel === 5 &&
              accountMatchesGrupoContabil(account, normalizedGrupo) &&
              (() => {
                if (!shouldScopeByDepartment) return true;
                const accountScope = normalizeLooseMatch(
                  isAdministrativeImport ? account.centroCusto : account.departamento
                );
                if (!normalizedImportedDept) return false;
                if (isAdministrativeImport) {
                  return accountScope === normalizedImportedDept;
                }
                return accountScope === normalizedImportedDept;
              })()
          );
    const scopedCandidates =
      departmentCandidates.length > 0
        ? departmentCandidates
        : nextAccounts.filter(
            (account) =>
              account.nivel === 5 &&
              accountMatchesGrupoContabil(account, normalizedGrupo)
          );
    let anchorCandidates: AccountEntry[];
    if (scopedCandidates.length === 0) {
      anchorCandidates = [
        getOrCreateStandaloneOrcadoAnchor(nextAccounts, {
          normalizedGrupo,
          atividade,
          departamento,
          isOutrasReceitasImport,
        }),
      ];
    } else {
      anchorCandidates = scopedCandidates;
      if (normalizedImportedDept && strictCandidates.length === 0) {
        // If this group has no existing line for the imported scope,
        // clone the best candidate and pin it to the imported department/cost center.
        // This also handles regressions where the base data no longer has this group
        // for the imported activity (e.g. SERINGAL), by creating a scoped synthetic anchor.
        const basePool = sameActivityCandidates.length > 0 ? sameActivityCandidates : scopedCandidates;
        const baseCandidate = [...basePool].sort(compareCandidatePriority)[0];
        const syntheticAnchor: AccountEntry = {
          ...baseCandidate,
          id: `${baseCandidate.id}::ORCADO::${normalizedImportedDept}::${normalizedGrupo}`,
          atividade: isOutrasReceitasImport ? baseCandidate.atividade : atividade,
          departamento: isAdministrativeImport ? baseCandidate.departamento : departamento,
          // For non-administrative budget imports, keep the synthetic line scoped to the
          // imported department to avoid inheriting an unrelated cost center (e.g. Confinamento).
          centroCusto: isAdministrativeImport ? departamento : departamento,
          orcado: { ...baseCandidate.orcado },
          // Synthetic lines are created to anchor imported budget scopes only.
          // Realized values must come exclusively from realized imports to avoid
          // leaking amounts from a different department/culture.
          realizado: {},
        };
        nextAccounts.push(syntheticAnchor);
        anchorCandidates = [syntheticAnchor];
      }
    }

    // Regra: o valor orcado deve refletir o total do grupo contabil da planilha,
    // sem rateio entre contas.
    const orderedCandidates = [...anchorCandidates].sort(compareCandidatePriority);

    const anchorAccount = orderedCandidates[0];
    if (replaceReceitaPecuariaOrcado) {
      anchorAccount.orcado[row.month] = row.value;
    } else {
      anchorAccount.orcado[row.month] = (anchorAccount.orcado[row.month] || 0) + row.value;
    }

    count++;
  });

  return { accounts: nextAccounts, count };
};

const buildAccountsWithImportedOrcado = (
  baseAccounts: AccountEntry[],
  importedOrcadoBatches: BudgetState['importedOrcadoBatches']
) => {
  const rebuiltAccounts = baseAccounts.map(cloneAccountEntry);
  importedOrcadoBatches.forEach((batch) => {
    const result = applyOrcadoRowsToAccounts(
      rebuiltAccounts,
      batch.rows,
      batch.atividade,
      batch.departamento
    );
    rebuiltAccounts.length = 0;
    rebuiltAccounts.push(...result.accounts);
  });
  return rebuiltAccounts;
};

export const useBudgetStore = create<BudgetState>((set, get) => ({
  accounts: normalizeReceitaRealizadoSigns(
    buildAccountsWithImportedOrcado(
      buildFreshInitialAccounts(),
      buildInitialImportedOrcadoBatches()
    )
  ),
  uploads: [],
  importedRealizadoBatches: [],
  importedOrcadoBatches: buildInitialImportedOrcadoBatches(),
  setAccounts: (accounts) => set({ accounts: normalizeReceitaRealizadoSigns(accounts) }),
  clearAllData: () =>
    set(() => {
      const importedOrcadoBatches: BudgetState['importedOrcadoBatches'] = [];
      return {
        accounts: normalizeReceitaRealizadoSigns(
          buildAccountsWithImportedOrcado(buildFreshInitialAccounts(), importedOrcadoBatches)
        ),
        uploads: [],
        importedRealizadoBatches: [],
        importedOrcadoBatches,
      };
    }),
  addUpload: (record) =>
    set((s) => {
      saveLastUploadedPeriod(record.period);
      return { uploads: [...s.uploads, record] };
    }),
  importExcelRows: (rows, fallbackPeriod, fileName) => {
    const { importedRealizadoBatches, importedOrcadoBatches } = get();
    const currentKey = uploadBatchKey(fallbackPeriod, fileName);
    const withoutCurrent = importedRealizadoBatches.filter((batch) => batch.key !== currentKey);
    const nextBatches = [
      ...withoutCurrent,
      {
        key: currentKey,
        fileName,
        period: fallbackPeriod,
        rows,
        importedAt: new Date().toISOString(),
      },
    ];

    const rebuiltAccounts = buildFreshInitialAccounts();
    let currentBatchCount = 0;

    nextBatches.forEach((batch) => {
      const result = applyRowsToAccounts(rebuiltAccounts, batch.rows, batch.period);
      rebuiltAccounts.length = 0;
      rebuiltAccounts.push(...result.accounts);
      if (batch.key === currentKey) {
        currentBatchCount = result.count;
      }
    });

    importedOrcadoBatches.forEach((batch) => {
      const result = applyOrcadoRowsToAccounts(
        rebuiltAccounts,
        batch.rows,
        batch.atividade,
        batch.departamento
      );
      rebuiltAccounts.length = 0;
      rebuiltAccounts.push(...result.accounts);
    });

    set({ accounts: normalizeReceitaRealizadoSigns(rebuiltAccounts), importedRealizadoBatches: nextBatches });
    return currentBatchCount;
  },
  importOrcadoExcelRows: (rows, fallbackPeriod, fileName) => {
    const {
      importedRealizadoBatches,
      importedOrcadoBatches,
    } = get();
    const fileInfo = parseOrcadoFileInfo(fileName);
    const pecuariaCustosWorkbook = isPecuariaCustosOrcadoWorkbook(rows, fileName);
    const agricolaCustosWorkbook = isAgricolaCustosOrcadoWorkbook(rows, fileName);
    const seringalCustosWorkbook = isSeringalCustosOrcadoWorkbook(rows, fileName);
    const despAdmCustosWorkbook = isDespAdmCustosOrcadoWorkbook(rows, fileName);
    const aggregated = aggregateOrcadoRows(rows, fallbackPeriod, fileName);
    const mappingAtividade =
      mapDivisaoToAtividade(findDepartmentMappingByName(fileInfo.departamento)?.divisao) || null;
    const isReceitaPecuariaImport = isReceitaPecuariaOrcadoWorkbook(rows);
    const resolvedAtividade = isReceitaPecuariaImport
      ? 'PECUARIA'
      : mappingAtividade ||
        (fileInfo.atividade !== 'DESP_ADM_TRIB' ? fileInfo.atividade : aggregated.atividadeFromRows || fileInfo.atividade);
    const resolvedDepartamento =
      resolvedAtividade === 'PECUARIA'
        ? normalizeDepartmentToPecuaria(fileInfo.departamento)
        : fileInfo.departamento;
    const normalizedResolvedDepartamento = normalizeDepartmentKey(resolvedDepartamento);
    const canonicalResolvedDepartamento = canonicalDepartmentKey(resolvedDepartamento);
    const rowDepartments = Array.from(
      new Set(
        rows
          .map((row) => normalizeDepartmentKey(rowValue(row.NOMEDEPTO)))
          .filter((dept) => Boolean(dept))
      )
    );
    const effectiveRowDepartments =
      resolvedAtividade === 'PECUARIA'
        ? Array.from(new Set(rowDepartments.map((dept) => normalizeDepartmentKey(normalizeDepartmentToPecuaria(dept)))))
        : rowDepartments;
    const canonicalRowDepartments = Array.from(
      new Set(effectiveRowDepartments.map((dept) => canonicalDepartmentKey(dept)).filter((dept) => Boolean(dept)))
    );

    if (
      !pecuariaCustosWorkbook &&
      !agricolaCustosWorkbook &&
      !seringalCustosWorkbook &&
      !despAdmCustosWorkbook &&
      !isReceitaPecuariaImport
    ) {
      if (effectiveRowDepartments.length === 0) {
        throw new Error(
          `Importacao do orcado "${fileName}" invalida: coluna NOMEDEPTO ausente ou vazia.`
        );
      }
      const strictMatch =
        effectiveRowDepartments.length === 1 && effectiveRowDepartments[0] === normalizedResolvedDepartamento;
      const canonicalMatch =
        canonicalRowDepartments.length === 1 && canonicalRowDepartments[0] === canonicalResolvedDepartamento;
      if (!strictMatch && !canonicalMatch) {
        throw new Error(
          `Importacao do orcado "${fileName}" invalida: NOMEDEPTO deve corresponder ao nome do arquivo.`
        );
      }
    }

    const currentReceitaPecuariaScopeKey = receitaPecuariaOrcadoScopeKey(resolvedDepartamento);
    const currentScopeKey = uploadOrcadoScopeKey(resolvedAtividade, resolvedDepartamento);
    const currentKey = uploadOrcadoBatchKey(
      fallbackPeriod,
      fileName,
      resolvedAtividade,
      resolvedDepartamento
    );

    const nextBatch = {
      key: currentKey,
      fileName,
      departamento: resolvedDepartamento,
      atividade: resolvedAtividade,
      period: fallbackPeriod,
      rows: aggregated.entries,
      importedAt: new Date().toISOString(),
    };

    const nextOrcadoBatches = [
      ...importedOrcadoBatches.filter((batch) => {
        if (batch.key === currentKey) return false;
        if (isReceitaPecuariaImport && isReceitaPecuariaOrcadoBatch(batch)) {
          return receitaPecuariaOrcadoScopeKey(batch.departamento) !== currentReceitaPecuariaScopeKey;
        }
        const batchScopeKey = uploadOrcadoScopeKey(batch.atividade, batch.departamento);
        return batchScopeKey !== currentScopeKey;
      }),
      nextBatch,
    ];

    const rebuiltAccounts = buildFreshInitialAccounts();
    importedRealizadoBatches.forEach((batch) => {
      const result = applyRowsToAccounts(rebuiltAccounts, batch.rows, batch.period);
      rebuiltAccounts.length = 0;
      rebuiltAccounts.push(...result.accounts);
    });

    let currentBatchCount = 0;
    nextOrcadoBatches.forEach((batch) => {
      const result = applyOrcadoRowsToAccounts(
        rebuiltAccounts,
        batch.rows,
        batch.atividade,
        batch.departamento
      );
      rebuiltAccounts.length = 0;
      rebuiltAccounts.push(...result.accounts);
      if (batch.key === currentKey) {
        currentBatchCount = result.count;
      }
    });

    set({ accounts: normalizeReceitaRealizadoSigns(rebuiltAccounts), importedOrcadoBatches: nextOrcadoBatches });
    return currentBatchCount;
  },
}));
