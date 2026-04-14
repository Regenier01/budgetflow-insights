import { create } from 'zustand';
import type { AccountEntry, MonthKey, AtividadeKey, ExcelRow, UploadRecord } from '@/types/budget';
import { INITIAL_ACCOUNTS } from '@/data/initialData';
import { DEPARTMENT_MAPPING } from '@/data/departmentMapping';
import { COST_CENTER_MAPPING } from '@/data/costCenterMapping';
import { isEncargo, isDespesaFinanceira, isReceitaFinanceira } from '@/data/encargosAccounts';

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
  const deptInfo = (DEPARTMENT_MAPPING as any)[depto];
  if (deptInfo) {
    const mapped = mapDivisaoToAtividade(deptInfo.divisao);
    if (mapped && mapped !== 'DESP_ADM_TRIB') return mapped;
  }

  // 4. Tenta pelo Mapeamento de Centro de Custo
  const ccInfo = (COST_CENTER_MAPPING as any)[cc];
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
    (a.grupoContabil === '4' || (a.grupoContabil === '3' && a.atividade === 'DESP_ADM_TRIB'))
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

    set({ accounts: newAccounts });
    return count;
  }
}));