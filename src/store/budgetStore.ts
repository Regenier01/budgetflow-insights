import { create } from 'zustand';
import type { AccountEntry, MonthKey, AtividadeKey, ExcelRow, UploadRecord } from '@/types/budget';
import { INITIAL_ACCOUNTS } from '@/data/initialData';
import { DEPARTMENT_MAPPING } from '@/data/departmentMapping';

/**
 * Maps a DIVISAO string from Excel to an AtividadeKey.
 * Uses normalized comparison to handle accents and casing.
 */
export function mapDivisaoToAtividade(divisao: string | undefined): AtividadeKey | null {
  if (!divisao) return null;
  const norm = divisao.toUpperCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // remove accents

  if (norm === 'PECUARIA') return 'PECUARIA';
  if (norm === 'SERINGAL') return 'SERINGAL';
  if (norm === 'AGRICOLA') return 'AGRICOLA';
  if (norm === 'CANA') return 'CANA';
  if (norm === 'ADMINISTRACAO' || norm === 'ADMINISTRAÇÃO') return 'DESP_ADM_TRIB';
  if (norm === 'LOGISTICA') return 'DESP_ADM_TRIB';
  if (norm === 'ALMOXARIFADO') return 'DESP_ADM_TRIB';

  return null;
}

/**
 * Resolves the AtividadeKey for an Excel row using DIVISAO and NOMEDEPTO fields.
 */
export function resolveAtividadeFromRow(row: ExcelRow): AtividadeKey | null {
  // 1. Try DIVISAO directly
  const fromDivisao = mapDivisaoToAtividade(row.DIVISAO);
  if (fromDivisao) return fromDivisao;

  // 2. Try NOMEDEPTO via department mapping
  const depto = String(row.NOMEDEPTO || '').trim();
  if (depto && DEPARTMENT_MAPPING[depto]) {
    const mapped = mapDivisaoToAtividade(DEPARTMENT_MAPPING[depto].divisao);
    if (mapped) return mapped;
  }

  return null;
}

export function dateToMonthKey(raw: string | number | Date | undefined): MonthKey | null {
  if (!raw) return null;
  let d: Date;

  if (raw instanceof Date) {
    d = raw;
  } else if (typeof raw === 'number') {
    d = new Date((raw - 25569) * 86400000);
  } else {
    d = new Date(raw);
  }

  if (isNaN(d.getTime())) return null;

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}` as MonthKey;
}

export function mapAtividadeFromConta(conta: string): AtividadeKey | null {
  const c = String(conta || '').trim();
  
  // Regras de mapeamento por prefixo de conta contábil
  if (c.startsWith('3.1.02.01')) return 'AGRICOLA';
  if (c.startsWith('3.1.01.01')) return 'PECUARIA';
  if (c.startsWith('3.1.02.02')) return 'CANA';
  if (c.startsWith('3.1.02.03')) return 'SERINGAL'; // Regra: 3.1.02.03 -> Receita de Seringal
  
  return null;
}

export function calculateGlobalTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;

  const leafAccounts = accounts.filter(a => 
    !accounts.some(child => child.codigoPai === a.codigo) &&
    !a.codigo.startsWith('3.1.01.01')
  );

  leafAccounts.forEach(a => {
    // Soma apenas contas que pertencem ao GRUPO_CONTABIL 4 (Custos ou com código 4.)
    if (a.tipo === 'C' || a.codigo.startsWith('4.')) {
      const aOrc = Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      const aReal = Object.values(a.realizado).reduce((sum, v) => sum + v, 0);

      orc += aOrc;
      real += aReal;
    }
  });

  // Para despesas/custos, a diferença positiva é boa (orçado > realizado)
  return { orc, real, diff: orc - real };
}

export function calculateTotalsByDivisao(
  accounts: AccountEntry[],
  filterAtividade: AtividadeKey
) {
  let orc = 0;
  let real = 0;

  const filtered = accounts.filter(a => 
    a.atividade === filterAtividade && 
    !a.codigo.startsWith('3.1.01.01')
  );
  
  const leafAccounts = filtered.filter(a => 
    !accounts.some(child => child.codigoPai === a.codigo)
  );

  leafAccounts.forEach(a => {
    // Soma apenas contas que pertencem ao GRUPO_CONTABIL 4 (Custos ou com código 4.)
    if (a.tipo === 'C' || a.codigo.startsWith('4.')) {
      const aOrc = Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      const aReal = Object.values(a.realizado).reduce((sum, v) => sum + v, 0);

      orc += aOrc;
      real += aReal;
    }
  });

  // Para despesas/custos, a diferença positiva é boa (orçado > realizado)
  return { orc, real, diff: orc - real };
}

interface BudgetState {
  accounts: AccountEntry[];
  uploads: UploadRecord[];
  setAccounts: (accounts: AccountEntry[]) => void;
  clearAllData: () => void;
  addUpload: (record: UploadRecord) => void;
  updateRealizado: (codigo: string, month: MonthKey, value: number) => void;
  importExcelRows: (rows: ExcelRow[], fallbackPeriod: MonthKey) => number;
}

export const useBudgetStore = create<BudgetState>((set, get) => ({
  accounts: INITIAL_ACCOUNTS,
  uploads: [],

  setAccounts: (accounts) => set({ accounts }),

  clearAllData: () => set({ accounts: [], uploads: [] }),

  addUpload: (record) => set((s) => ({ uploads: [...s.uploads, record] })),

  updateRealizado: (codigo, month, value) =>
    set((s) => ({
      accounts: s.accounts.map((a) =>
        a.codigo === codigo
          ? { ...a, realizado: { ...a.realizado, [month]: value } }
          : a
      ),
    })),

  importExcelRows: (rows, fallbackPeriod) => {
    const { accounts } = get();
    const newAccounts = [...accounts];
    let count = 0;

    rows.forEach(row => {
      const conta = String(row.CONTA_CONTABIL || '').trim();
      if (!conta) return;

      const saldo = typeof row.SALDO === 'number' ? row.SALDO : 0;
      const month = dateToMonthKey(row.DATA) || fallbackPeriod;
      
      // Resolve atividade from row's DIVISAO/NOMEDEPTO
      const rowAtividade = resolveAtividadeFromRow(row);
      
      // Aplicar regra de mapeamento por conta
      const mappedAtividade = mapAtividadeFromConta(conta) || rowAtividade;

      // Find matching account: prefer match by codigo + atividade, fallback to codigo only
      let existing: AccountEntry | undefined;
      
      if (mappedAtividade) {
        existing = newAccounts.find(a => a.codigo === conta && a.atividade === mappedAtividade);
      }
      
      if (!existing && rowAtividade) {
        existing = newAccounts.find(a => a.codigo === conta && a.atividade === rowAtividade);
      }
      
      if (!existing) {
        // Fallback: match by codigo only (for unique codes)
        const matches = newAccounts.filter(a => a.codigo === conta);
        if (matches.length === 1) {
          existing = matches[0];
        }
        // If multiple matches and no atividade resolved, skip to avoid cross-contamination
      }

      if (existing) {
        existing.realizado[month] = (existing.realizado[month] || 0) + saldo;
        if (mappedAtividade) existing.atividade = mappedAtividade;
        count++;
      }
    });

    set({ accounts: newAccounts });
    return count;
  }
}));