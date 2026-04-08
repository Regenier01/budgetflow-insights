import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountEntry, UploadRecord, MonthKey } from '@/types/budget';

const demoData: AccountEntry[] = [
  {
    id: '1', codigo: '3', descricao: 'RECEITAS PECUÁRIA', tipo: 'R', codigoPai: null, nivel: 1, atividade: 'PECUARIA',
    orcado: { '2026-04': 300000, '2026-05': 320000, '2026-06': 280000 },
    realizado: { '2026-04': 290000, '2026-05': 335000 },
  },
  {
    id: '2', codigo: '3.1', descricao: 'Venda de Gado', tipo: 'R', codigoPai: '3', nivel: 2, atividade: 'PECUARIA',
    orcado: { '2026-04': 300000, '2026-05': 320000, '2026-06': 280000 },
    realizado: { '2026-04': 290000, '2026-05': 335000 },
  },
  {
    id: '3', codigo: '4', descricao: 'RECEITAS SERINGAL', tipo: 'R', codigoPai: null, nivel: 1, atividade: 'SERINGAL',
    orcado: { '2026-04': 100000, '2026-05': 110000, '2026-06': 105000 },
    realizado: { '2026-04': 98000, '2026-05': 112000 },
  },
  {
    id: '4', codigo: '5', descricao: 'RECEITAS AGRÍCOLA', tipo: 'R', codigoPai: null, nivel: 1, atividade: 'AGRICOLA',
    orcado: { '2026-04': 150000, '2026-05': 160000, '2026-06': 140000 },
    realizado: { '2026-04': 145000, '2026-05': 165000 },
  },
  {
    id: '5', codigo: '6', descricao: 'RECEITAS CANA', tipo: 'R', codigoPai: null, nivel: 1, atividade: 'CANA',
    orcado: { '2026-04': 200000, '2026-05': 210000, '2026-06': 190000 },
    realizado: { '2026-04': 195000, '2026-05': 215000 },
  },
  {
    id: '6', codigo: '7', descricao: 'DESPESAS ADM. E TRIBUTÁRIAS', tipo: 'D', codigoPai: null, nivel: 1, atividade: 'DESP_ADM_TRIB',
    orcado: { '2026-04': 80000, '2026-05': 82000, '2026-06': 78000 },
    realizado: { '2026-04': 79000, '2026-05': 84000 },
  },
  {
    id: '7', codigo: '8', descricao: 'ENCARGOS', tipo: 'D', codigoPai: null, nivel: 1, atividade: 'ENCARGOS',
    orcado: { '2026-04': 60000, '2026-05': 63000, '2026-06': 57000 },
    realizado: { '2026-04': 58000, '2026-05': 65000 },
  },
];

interface BudgetState {
  accounts: AccountEntry[];
  uploads: UploadRecord[];
  setAccounts: (accounts: AccountEntry[]) => void;
  addUpload: (upload: UploadRecord) => void;
  updateRealizado: (codigo: string, month: MonthKey, value: number) => void;
}

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set) => ({
      accounts: demoData,
      uploads: [],
      setAccounts: (accounts) => set({ accounts }),
      addUpload: (upload) => set((s) => ({ uploads: [...s.uploads, upload] })),
      updateRealizado: (codigo, month, value) =>
        set((s) => ({
          accounts: s.accounts.map((a) =>
            a.codigo === codigo
              ? { ...a, realizado: { ...a.realizado, [month]: value } }
              : a
          ),
        })),
    }),
    { name: 'budget-store' }
  )
);
