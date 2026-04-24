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
import { DEPARTMENT_MAPPING } from '@/data/departmentMapping';
import { COST_CENTER_MAPPING } from '@/data/costCenterMapping';
import { isEncargo, isDespesaFinanceira, isReceitaFinanceira } from '@/data/encargosAccounts';
import { isDespesaComVendasCode } from '@/data/despesasComVendasAccounts';
const LAST_UPLOADED_PERIOD_STORAGE_KEY = 'budgetflow:lastUploadedPeriod';
const validMonthKeys = new Set(MONTHS.map((month) => month.key));
type MappingValue = { divisao?: string; unidadeNegocio?: string };

const saveLastUploadedPeriod = (period: string) => {
  if (typeof window === 'undefined' || !validMonthKeys.has(period as MonthKey)) return;
  window.localStorage.setItem(LAST_UPLOADED_PERIOD_STORAGE_KEY, period);
};

export const getLastUploadedPeriod = (): MonthKey | null => {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(LAST_UPLOADED_PERIOD_STORAGE_KEY);
  return stored && validMonthKeys.has(stored as MonthKey) ? (stored as MonthKey) : null;
};

// Função auxiliar para normalizar strings de busca
const normalizeKey = (str: string) => 
  str.toUpperCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

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
  if (conta.startsWith('3.4.03.02')) return 'DESP_ADM_TRIB';

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

export function sumValuesByMonth(
  values: Record<string, number>,
  selectedMonth: MonthKey | 'all'
) {
  if (selectedMonth === 'all') {
    return Object.values(values).reduce((sum, v) => sum + v, 0);
  }
  return values[selectedMonth] || 0;
}

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
    isDespesaFinanceira(a.codigo)
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
    isReceitaFinanceira(a.codigo)
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
      isDespesaComVendasCode(a.codigo)
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
  return { orc, real, diff: orc - real };
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
  return { orc, real, diff: orc - real };
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
    atividade: AtividadeKey;
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
const uploadOrcadoBatchKey = (period: MonthKey, fileName: string) =>
  `${period}::${fileName.trim().toUpperCase()}`;
const uploadOrcadoScopeKey = (atividade: AtividadeKey, departamento: string) =>
  `${normalizeMatch(atividade)}::${normalizeLooseMatch(departamento)}`;

const getBatchFallbackPeriod = (rows: OrcadoGrupoMonthValue[]): MonthKey =>
  (rows.find((row) => validMonthKeys.has(row.month as MonthKey))?.month as MonthKey) || MONTHS[0].key;

const buildInitialImportedOrcadoBatches = (): BudgetState['importedOrcadoBatches'] =>
  ORCADO_IMPORT_BATCHES.map((batch) => {
    const period = getBatchFallbackPeriod(batch.rows);
    return {
      key: uploadOrcadoBatchKey(period, batch.fileName),
      fileName: batch.fileName,
      departamento: batch.departamento,
      atividade: batch.atividade,
      period,
      rows: batch.rows,
      importedAt: new Date(0).toISOString(),
    };
  });

const cloneAccountEntry = (account: AccountEntry): AccountEntry => ({
  ...account,
  orcado: { ...account.orcado },
  realizado: { ...account.realizado },
});

const INITIAL_ACCOUNTS_TEMPLATE = INITIAL_ACCOUNTS.map(cloneAccountEntry);
const buildFreshInitialAccounts = () => INITIAL_ACCOUNTS_TEMPLATE.map(cloneAccountEntry);
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
    .trim();

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
  const atividade =
    ORCADO_ATIVIDADE_ALIASES.find((item) =>
      item.aliases.some((alias) => normalized.includes(normalizeMatch(alias)))
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

const parseMonthFromHeader = (header: unknown): MonthKey | null => {
  if (header instanceof Date && !Number.isNaN(header.getTime())) {
    const key = `${header.getFullYear()}-${String(header.getMonth() + 1).padStart(2, '0')}` as MonthKey;
    return validMonthKeys.has(key) ? key : null;
  }
  if (typeof header === 'number' && Number.isFinite(header)) {
    const date = new Date((header - 25569) * 86400000);
    if (!Number.isNaN(date.getTime())) {
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}` as MonthKey;
      return validMonthKeys.has(key) ? key : null;
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

const accountMatchesGrupoContabil = (account: AccountEntry, grupoCode: string): boolean => {
  if (!grupoCode) return false;
  const accountGrupoN9Code = extractGrupoCode(account.grupoContabilN9);
  if (accountGrupoN9Code === grupoCode) return true;

  // Fallback for entries where only account code is populated.
  return account.codigo === grupoCode || account.codigo.startsWith(`${grupoCode}.`);
};

const aggregateOrcadoRows = (
  rows: ExcelRow[],
  fallbackPeriod: MonthKey
): { entries: OrcadoGrupoMonthValue[]; atividadeFromRows: AtividadeKey | null; departamentoFromRows: string | null } => {
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
      existing.realizado[month] = (existing.realizado[month] || 0) + saldo;
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
      realizado: { [month]: saldo },
    };

    newAccounts.push(newEntry);
    count++;
  });

  return { accounts: newAccounts, count };
};

const applyOrcadoRowsToAccounts = (
  baseAccounts: AccountEntry[],
  rows: OrcadoGrupoMonthValue[],
  atividade: AtividadeKey,
  departamento: string
) => {
  const nextAccounts = baseAccounts.map(cloneAccountEntry);
  let count = 0;
  const normalizedImportedDept = normalizeLooseMatch(departamento);
  const isAdministrativeImport = atividade === 'DESP_ADM_TRIB';
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

    const strictCandidates = nextAccounts.filter(
      (account) =>
        account.nivel === 5 &&
        account.atividade === atividade &&
        accountMatchesGrupoContabil(account, normalizedGrupo) &&
        (() => {
          const accountScope = normalizeLooseMatch(
            isAdministrativeImport ? account.centroCusto : account.departamento
          );
          if (!normalizedImportedDept) return true;
          if (isAdministrativeImport) {
            return accountScope === normalizedImportedDept;
          }
          return (
            accountScope === normalizedImportedDept ||
            accountScope.includes(normalizedImportedDept) ||
            normalizedImportedDept.includes(accountScope)
          );
        })()
    );
    const sameActivityCandidates =
      strictCandidates.length > 0
        ? strictCandidates
        : nextAccounts.filter(
            (account) =>
              account.nivel === 5 &&
              account.atividade === atividade &&
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
                const accountScope = normalizeLooseMatch(
                  isAdministrativeImport ? account.centroCusto : account.departamento
                );
                if (!normalizedImportedDept) return false;
                if (isAdministrativeImport) {
                  return accountScope === normalizedImportedDept;
                }
                return (
                  accountScope === normalizedImportedDept ||
                  accountScope.includes(normalizedImportedDept) ||
                  normalizedImportedDept.includes(accountScope)
                );
              })()
          );
    const scopedCandidates =
      departmentCandidates.length > 0
        ? departmentCandidates
        : nextAccounts.filter(
            (account) => account.nivel === 5 && accountMatchesGrupoContabil(account, normalizedGrupo)
          );
    if (scopedCandidates.length === 0) return;

    let anchorCandidates = scopedCandidates;
    if (normalizedImportedDept && strictCandidates.length === 0 && sameActivityCandidates.length > 0) {
      // If this group has no existing line for the imported scope,
      // clone the best same-activity candidate and pin it to the imported department/cost center.
      const baseCandidate = [...sameActivityCandidates].sort(compareCandidatePriority)[0];
      const syntheticAnchor: AccountEntry = {
        ...baseCandidate,
        id: `${baseCandidate.id}::ORCADO::${normalizedImportedDept}::${normalizedGrupo}`,
        departamento: isAdministrativeImport ? baseCandidate.departamento : departamento,
        // For non-administrative budget imports, keep the synthetic line scoped to the
        // imported department to avoid inheriting an unrelated cost center (e.g. Confinamento).
        centroCusto: isAdministrativeImport ? departamento : departamento,
        orcado: { ...baseCandidate.orcado },
        realizado: { ...baseCandidate.realizado },
      };
      nextAccounts.push(syntheticAnchor);
      anchorCandidates = [syntheticAnchor];
    }

    // Regra: o valor orcado deve refletir o total do grupo contabil da planilha,
    // sem rateio entre contas.
    const orderedCandidates = [...anchorCandidates].sort(compareCandidatePriority);

    const anchorAccount = orderedCandidates[0];
    anchorAccount.orcado[row.month] = row.value;

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
  accounts: buildAccountsWithImportedOrcado(
    buildFreshInitialAccounts(),
    buildInitialImportedOrcadoBatches()
  ),
  uploads: [],
  importedRealizadoBatches: [],
  importedOrcadoBatches: buildInitialImportedOrcadoBatches(),
  setAccounts: (accounts) => set({ accounts }),
  clearAllData: () =>
    set(() => {
      const importedOrcadoBatches: BudgetState['importedOrcadoBatches'] = [];
      return {
        accounts: buildAccountsWithImportedOrcado(buildFreshInitialAccounts(), importedOrcadoBatches),
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

    set({ accounts: rebuiltAccounts, importedRealizadoBatches: nextBatches });
    return currentBatchCount;
  },
  importOrcadoExcelRows: (rows, fallbackPeriod, fileName) => {
    const {
      importedRealizadoBatches,
      importedOrcadoBatches,
    } = get();
    const fileInfo = parseOrcadoFileInfo(fileName);
    const aggregated = aggregateOrcadoRows(rows, fallbackPeriod);
    const resolvedAtividade =
      fileInfo.atividade !== 'DESP_ADM_TRIB' ? fileInfo.atividade : (aggregated.atividadeFromRows || fileInfo.atividade);
    const resolvedDepartamento = fileInfo.departamento;
    const normalizedResolvedDepartamento = normalizeDepartmentKey(resolvedDepartamento);
    const canonicalResolvedDepartamento = canonicalDepartmentKey(resolvedDepartamento);
    const rowDepartments = Array.from(
      new Set(
        rows
          .map((row) => normalizeDepartmentKey(rowValue(row.NOMEDEPTO)))
          .filter((dept) => Boolean(dept))
      )
    );
    const canonicalRowDepartments = Array.from(
      new Set(rowDepartments.map((dept) => canonicalDepartmentKey(dept)).filter((dept) => Boolean(dept)))
    );

    if (rowDepartments.length === 0) {
      throw new Error(
        `Importacao do orcado "${fileName}" invalida: coluna NOMEDEPTO ausente ou vazia.`
      );
    }
    const strictMatch = rowDepartments.length === 1 && rowDepartments[0] === normalizedResolvedDepartamento;
    const canonicalMatch =
      canonicalRowDepartments.length === 1 && canonicalRowDepartments[0] === canonicalResolvedDepartamento;
    if (!strictMatch && !canonicalMatch) {
      throw new Error(
        `Importacao do orcado "${fileName}" invalida: NOMEDEPTO deve corresponder ao nome do arquivo.`
      );
    }

    const currentKey = uploadOrcadoBatchKey(fallbackPeriod, fileName);
    const currentScopeKey = uploadOrcadoScopeKey(resolvedAtividade, resolvedDepartamento);

    console.log('[Orçado] Import:', {
      fileName,
      atividade: resolvedAtividade,
      departamento: resolvedDepartamento,
      excelRows: rows.length,
      aggregatedEntries: aggregated.entries.length,
      sampleEntries: aggregated.entries.slice(0, 3),
    });

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

    const totalOrcadoApplied = rebuiltAccounts
      .filter((a) => a.nivel === 5)
      .reduce((sum, a) => sum + Object.values(a.orcado).reduce((s, v) => s + v, 0), 0);
    console.log('[Orçado] Resultado:', {
      currentBatchCount,
      totalAccounts: rebuiltAccounts.length,
      totalOrcadoApplied,
    });

    set({ accounts: rebuiltAccounts, importedOrcadoBatches: nextOrcadoBatches });
    return currentBatchCount;
  }
}));
