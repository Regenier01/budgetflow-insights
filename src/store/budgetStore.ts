import { create } from 'zustand';
import type { AccountEntry, MonthKey, AtividadeKey } from '@/types/budget';
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

export function getAccountCategory(descricao: string): string {
  const desc = descricao.toUpperCase();
  
  if (desc.includes('PESSOAL') || desc.includes('ENCARGO') || desc.includes('FOLHA') || desc.includes('SALARIO') || desc.includes('OUTROS BENEF') || desc.includes('BENEFICIO') || desc.includes('VANTAGEM')) {
    return 'Custo de Pessoal';
  }
  
  if (desc.includes('DEPRECIA') || desc.includes('AMORTIZA')) {
    return 'Depreciações';
  }

  if (desc.includes('MANUTEN') || desc.includes('REPARO')) {
    return 'Manutenção e Reparos';
  }

  if (desc.includes('COMBUSTIVEL') || desc.includes('LUBRIFICANTE') || desc.includes('GASOLINA') || desc.includes('OLEO DIESEL')) {
    return 'Combustíveis e Lubrificantes';
  }

  if (desc.includes('INSUMO') || desc.includes('ADUBO') || desc.includes('DEFENSIVO') || desc.includes('SEMENTE') || desc.includes('FERTILIZAN')) {
    return 'Insumos e Materiais';
  }

  if (desc.includes('SERVICO') || desc.includes('FRETE') || desc.includes('CONTRATO')) {
    return 'Serviços de Terceiros';
  }

  if (desc.includes('ENERGIA') || desc.includes('ELETRICA') || desc.includes('AGUA') || desc.includes('TELEFONE') || desc.includes('INTERNET')) {
    return 'Energia e Utilidades';
  }

  return 'Outros Custos';
}

export function calculateGlobalTotals(accounts: AccountEntry[]) {
  let orc = 0;
  let real = 0;

  // Para o Total Geral, somamos todas as contas que não têm filhos (folhas)
  // ou simplesmente todas as contas que possuem valores, já que os pais são vazios.
  // A abordagem de somar apenas "folhas" garante que não haverá duplicidade 
  // caso algum dia os pais passem a ter a soma dos filhos.
  const leafAccounts = accounts.filter(a => 
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

export function calculateTotalsByDivisao(
  accounts: AccountEntry[],
  filterAtividade: AtividadeKey
) {
  let orc = 0;
  let real = 0;

  // Filtramos todas as contas da atividade
  const filtered = accounts.filter(a => a.atividade === filterAtividade);
  
  // Somamos apenas as contas que são "folhas" na árvore gerencial,
  // ou seja, que não possuem filhos no conjunto total de contas.
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
  setAccounts: (accounts: AccountEntry[]) => void;
  clearAllData: () => void;
  updateRealizado: (codigo: string, month: MonthKey, value: number) => void;
}

export const useBudgetStore = create<BudgetState>((set) => ({
  accounts: INITIAL_ACCOUNTS,

  setAccounts: (accounts) => set({ accounts }),

  clearAllData: () => set({ accounts: [] }),

  updateRealizado: (codigo, month, value) =>
    set((s) => ({
      accounts: s.accounts.map((a) =>
        a.codigo === codigo
          ? { ...a, realizado: { ...a.realizado, [month]: value } }
          : a
      ),
    })),
}));

