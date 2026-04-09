import { create } from 'zustand';
import type { AccountEntry, MonthKey, AtividadeKey, ExcelRow, UploadRecord } from '@/types/budget';
import { INITIAL_ACCOUNTS } from '@/data/initialData';

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
  if (c.startsWith('3.1.02.02')) return 'CANA'; // Regra: 3.1.02.02 -> Receita de Cana
  if (c === '3.1.02.03.0001') return 'SERINGAL';
  
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
    const aOrc = Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
    const aReal = Object.values(a.realizado).reduce((sum, v) => sum + v, 0);

    if (a.tipo === 'R') {
      orc += aOrc;
      real += aReal;
    } else {
      orc -= aOrc;
      real -= aReal;
    }
  });

  return { orc, real, diff: real - orc };
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
    const aOrc = Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
    const aReal = Object.values(a.realizado).reduce((sum, v) => sum + v, 0);

    if (a.tipo === 'R') {
      orc += aOrc;
      real += aReal;
    } else {
      orc -= aOrc;
      real -= aReal;
    }
  });

  return { orc, real, diff: real - orc };
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
      
      // Aplicar regra de mapeamento por conta
      const mappedAtividade = mapAtividadeFromConta(conta);

      const existing = newAccounts.find(a => a.codigo === conta);
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