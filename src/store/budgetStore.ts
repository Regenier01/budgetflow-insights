import { create } from 'zustand';
import type { AccountEntry, MonthKey, AtividadeKey, ExcelRow, UploadRecord } from '@/types/budget';
import { INITIAL_ACCOUNTS } from '@/data/initialData';
import { DEPARTMENT_MAPPING } from '@/data/departmentMapping';

export function mapDivisaoToAtividade(divisao: string | undefined): AtividadeKey | null {
  if (!divisao) return null;
  const norm = divisao.toUpperCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (norm.includes('PECUA') || norm.includes('GADO')) return 'PECUARIA';
  if (norm.includes('SERING') || norm.includes('LATEX') || norm.includes('BORRACHA')) return 'SERINGAL';
  if (norm.includes('AGRIC') || norm.includes('SOJA') || norm.includes('MILHO') || norm.includes('GRAO')) return 'AGRICOLA';
  if (norm.includes('CANA')) return 'CANA';
  if (norm.includes('ADM') || norm.includes('TRIB') || norm.includes('LOGISTICA') || norm.includes('ALMOXARIFADO')) return 'DESP_ADM_TRIB';
  if (norm.includes('ENCARGO')) return 'ENCARGOS';

  return null;
}

export function resolveAtividadeFromRow(row: ExcelRow): AtividadeKey {
  // 1. Regras de conta contábil
  const conta = String(row.CONTA_CONTABIL || '').trim();
  if (conta.startsWith('3.1.01.01')) return 'PECUARIA';
  if (conta === '3.1.02.03.0001') return 'SERINGAL';
  if (conta.startsWith('3.1.02.01')) return 'AGRICOLA';
  if (conta.startsWith('3.1.02.02')) return 'CANA';

  // 2. Try DIVISAO directly
  const fromDivisao = mapDivisaoToAtividade(row.DIVISAO);
  if (fromDivisao) return fromDivisao;

  // 3. Try NOMEDEPTO via department mapping
  const depto = String(row.NOMEDEPTO || '').trim();
  if (depto && (DEPARTMENT_MAPPING as any)[depto]) {
    const mapped = mapDivisaoToAtividade((DEPARTMENT_MAPPING as any)[depto].divisao);
    if (mapped) return mapped;
  }

  return 'DESP_ADM_TRIB'; // Fallback para administrativo em vez de Pecuária
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

export function calculateGlobalTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;
  const leafAccounts = accounts.filter(a => !accounts.some(child => child.codigoPai === a.codigo && child.atividade === a.atividade));
  leafAccounts.forEach(a => {
    if (a.tipo === 'C' || a.tipo === 'D') {
      orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
    }
  });
  return { orc, real, diff: orc - real };
}

export function calculateTotalsByDivisao(accounts: AccountEntry[], filterAtividade: AtividadeKey) {
  let orc = 0;
  let real = 0;
  const filtered = accounts.filter(a => a.atividade === filterAtividade);
  const leafAccounts = filtered.filter(a => !accounts.some(child => child.codigoPai === a.codigo && child.atividade === a.atividade));
  leafAccounts.forEach(a => {
    if (a.tipo === 'C' || a.tipo === 'D') {
      orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
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
  importExcelRows: (rows: ExcelRow[], fallbackPeriod: MonthKey) => number;
}

export const useBudgetStore = create<BudgetState>((set, get) => ({
  accounts: INITIAL_ACCOUNTS,
  uploads: [],
  setAccounts: (accounts) => set({ accounts }),
  clearAllData: () => set({ accounts: [], uploads: [] }),
  addUpload: (record) => set((s) => ({ uploads: [...s.uploads, record] })),
  importExcelRows: (rows, fallbackPeriod) => {
    const { accounts } = get();
    const newAccounts = [...accounts];
    let count = 0;

    rows.forEach(row => {
      const conta = String(row.CONTA_CONTABIL || '').trim();
      if (!conta) return;
      const saldo = typeof row.SALDO === 'number' ? row.SALDO : 0;
      const month = dateToMonthKey(row.DATA) || fallbackPeriod;
      const rowAtividade = resolveAtividadeFromRow(row);

      // Busca estrita por CÓDIGO + ATIVIDADE
      const existing = newAccounts.find(a => a.codigo === conta && a.atividade === rowAtividade);

      if (existing) {
        existing.realizado[month] = (existing.realizado[month] || 0) + saldo;
        count++;
      }
    });

    set({ accounts: newAccounts });
    return count;
  }
}));