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

  if (norm.includes('PECUA') || norm.includes('GADO')) return 'PECUARIA';
  if (norm.includes('SERING') || norm.includes('LATEX') || norm.includes('BORRACHA')) return 'SERINGAL';
  if (norm.includes('AGRIC') || norm.includes('SOJA') || norm.includes('MILHO') || norm.includes('GRAO')) return 'AGRICOLA';
  if (norm.includes('CANA')) return 'CANA';
  if (norm.includes('ADM') || norm.includes('TRIB') || norm.includes('LOGISTICA') || norm.includes('ALMOXARIFADO')) return 'DESP_ADM_TRIB';
  if (norm.includes('ENCARGO')) return 'ENCARGOS';

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
  
  // Regras de mapeamento por prefixo de conta contábil (Receitas)
  if (c.startsWith('3.1.02.01')) return 'AGRICOLA';
  if (c.startsWith('3.1.01.01')) return 'PECUARIA';
  if (c.startsWith('3.1.02.02')) return 'CANA';
  if (c.startsWith('3.1.02.03')) return 'SERINGAL';
  
  return null;
}

export function calculateGlobalTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;

  // Somamos apenas as folhas (leaf nodes) para evitar duplicidade
  const leafAccounts = accounts.filter(a => 
    !accounts.some(child => child.codigoPai === a.codigo)
  );

  leafAccounts.forEach(a => {
    // Consideramos apenas Custos (C) e Despesas (D) para o consolidado geral de gastos
    if (a.tipo === 'C' || a.tipo === 'D') {
      const aOrc = Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      const aReal = Object.values(a.realizado).reduce((sum, v) => sum + v, 0);

      orc += aOrc;
      real += aReal;
    }
  });

  return { orc, real, diff: orc - real };
}

export function calculateTotalsByDivisao(
  accounts: AccountEntry[],
  filterAtividade: AtividadeKey
) {
  let orc = 0;
  let real = 0;

  const filtered = accounts.filter(a => a.atividade === filterAtividade);
  
  const leafAccounts = filtered.filter(a => 
    !accounts.some(child => child.codigoPai === a.codigo)
  );

  leafAccounts.forEach(a => {
    if (a.tipo === 'C' || a.tipo === 'D') {
      const aOrc = Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      const aReal = Object.values(a.realizado).reduce((sum, v) => sum + v, 0);

      orc += aOrc;
      real += aReal;
    }
  });

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
      
      // Resolve atividade da linha
      const rowAtividade = resolveAtividadeFromRow(row);
      const mappedAtividade = mapAtividadeFromConta(conta) || rowAtividade;

      // Busca estrita: código + atividade
      // Isso evita que custos de 'Seringal' caiam em contas de 'Pecuária'
      let existing: AccountEntry | undefined;
      
      if (mappedAtividade) {
        existing = newAccounts.find(a => a.codigo === conta && a.atividade === mappedAtividade);
      }

      if (existing) {
        existing.realizado[month] = (existing.realizado[month] || 0) + saldo;
        count++;
      }
      // Se não encontrar uma conta específica para aquela atividade, ignoramos para evitar poluição
    });

    set({ accounts: newAccounts });
    return count;
  }
}));