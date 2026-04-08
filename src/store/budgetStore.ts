import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountEntry, UploadRecord, MonthKey } from '@/types/budget';

// Demo data for preview
const demoData: AccountEntry[] = [
  {
    id: '1', codigo: '3', descricao: 'RECEITAS', tipo: 'R', codigoPai: null, nivel: 1,
    orcado: { '2026-04': 500000, '2026-05': 520000, '2026-06': 480000 },
    realizado: { '2026-04': 485000, '2026-05': 535000 },
  },
  {
    id: '2', codigo: '3.1', descricao: 'Receita Operacional', tipo: 'R', codigoPai: '3', nivel: 2,
    orcado: { '2026-04': 400000, '2026-05': 420000, '2026-06': 380000 },
    realizado: { '2026-04': 395000, '2026-05': 430000 },
  },
  {
    id: '3', codigo: '3.1.1', descricao: 'Vendas de Produtos', tipo: 'R', codigoPai: '3.1', nivel: 3,
    orcado: { '2026-04': 300000, '2026-05': 320000, '2026-06': 280000 },
    realizado: { '2026-04': 290000, '2026-05': 335000 },
  },
  {
    id: '4', codigo: '3.1.2', descricao: 'Prestação de Serviços', tipo: 'R', codigoPai: '3.1', nivel: 3,
    orcado: { '2026-04': 100000, '2026-05': 100000, '2026-06': 100000 },
    realizado: { '2026-04': 105000, '2026-05': 95000 },
  },
  {
    id: '5', codigo: '3.2', descricao: 'Outras Receitas', tipo: 'R', codigoPai: '3', nivel: 2,
    orcado: { '2026-04': 100000, '2026-05': 100000, '2026-06': 100000 },
    realizado: { '2026-04': 90000, '2026-05': 105000 },
  },
  {
    id: '6', codigo: '4', descricao: 'CUSTOS', tipo: 'C', codigoPai: null, nivel: 1,
    orcado: { '2026-04': 200000, '2026-05': 210000, '2026-06': 195000 },
    realizado: { '2026-04': 215000, '2026-05': 205000 },
  },
  {
    id: '7', codigo: '4.1', descricao: 'Custo dos Produtos Vendidos', tipo: 'C', codigoPai: '4', nivel: 2,
    orcado: { '2026-04': 150000, '2026-05': 160000, '2026-06': 145000 },
    realizado: { '2026-04': 162000, '2026-05': 155000 },
  },
  {
    id: '8', codigo: '4.2', descricao: 'Custo dos Serviços', tipo: 'C', codigoPai: '4', nivel: 2,
    orcado: { '2026-04': 50000, '2026-05': 50000, '2026-06': 50000 },
    realizado: { '2026-04': 53000, '2026-05': 50000 },
  },
  {
    id: '9', codigo: '5', descricao: 'DESPESAS', tipo: 'D', codigoPai: null, nivel: 1,
    orcado: { '2026-04': 180000, '2026-05': 185000, '2026-06': 175000 },
    realizado: { '2026-04': 178000, '2026-05': 190000 },
  },
  {
    id: '10', codigo: '5.1', descricao: 'Despesas Administrativas', tipo: 'D', codigoPai: '5', nivel: 2,
    orcado: { '2026-04': 80000, '2026-05': 82000, '2026-06': 78000 },
    realizado: { '2026-04': 79000, '2026-05': 84000 },
  },
  {
    id: '11', codigo: '5.2', descricao: 'Despesas Comerciais', tipo: 'D', codigoPai: '5', nivel: 2,
    orcado: { '2026-04': 60000, '2026-05': 63000, '2026-06': 57000 },
    realizado: { '2026-04': 58000, '2026-05': 65000 },
  },
  {
    id: '12', codigo: '5.3', descricao: 'Despesas Financeiras', tipo: 'D', codigoPai: '5', nivel: 2,
    orcado: { '2026-04': 40000, '2026-05': 40000, '2026-06': 40000 },
    realizado: { '2026-04': 41000, '2026-05': 41000 },
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
