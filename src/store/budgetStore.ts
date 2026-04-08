import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountEntry, UploadRecord, MonthKey, ExcelRow, AtividadeKey } from '@/types/budget';
import { ATIVIDADES } from '@/types/budget';

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

/** Derive month key (e.g. "2026-04") from a date value coming from Excel */
export function dateToMonthKey(raw: string | number | Date | undefined): MonthKey | null {
  if (!raw) return null;
  let d: Date;
  if (raw instanceof Date) {
    d = raw;
  } else if (typeof raw === 'number') {
    // Excel serial date: days since 1900-01-01 (with the 1900 bug)
    d = new Date((raw - 25569) * 86400000);
  } else {
    d = new Date(raw);
  }
  if (isNaN(d.getTime())) return null;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}` as MonthKey;
}

/** Map GRUPOCONTABIL or NOME_ORCAMENTO text to an AtividadeKey */
function mapAtividade(grupoContabil?: string, nomeOrcamento?: string): AtividadeKey {
  const text = (grupoContabil || nomeOrcamento || '').toUpperCase();
  if (text.includes('PECUA') || text.includes('GADO')) return 'PECUARIA';
  if (text.includes('SERING') || text.includes('LATEX') || text.includes('BORRACHA')) return 'SERINGAL';
  if (text.includes('AGRIC') || text.includes('SOJA') || text.includes('MILHO')) return 'AGRICOLA';
  if (text.includes('CANA')) return 'CANA';
  if (text.includes('ADM') || text.includes('TRIB')) return 'DESP_ADM_TRIB';
  if (text.includes('ENCARGO')) return 'ENCARGOS';
  return 'PECUARIA'; // fallback
}

/** Determine account type from CONTA_CONTABIL code based on chart of accounts */
function mapTipo(contaContabil: string): 'R' | 'D' | 'C' {
  if (contaContabil.startsWith('3.1') || contaContabil.startsWith('3.01')) return 'R';
  if (contaContabil.startsWith('3.3') || contaContabil.startsWith('3.03') || contaContabil.startsWith('4')) return 'C';
  return 'D';
}

interface BudgetState {
  accounts: AccountEntry[];
  uploads: UploadRecord[];
  setAccounts: (accounts: AccountEntry[]) => void;
  addUpload: (upload: UploadRecord) => void;
  updateRealizado: (codigo: string, month: MonthKey, value: number) => void;
  importExcelRows: (rows: ExcelRow[], fallbackMonth: MonthKey) => number;
}

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set, get) => ({
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
      importExcelRows: (rows, fallbackMonth) => {
        // Aggregate SALDO by CONTA_CONTABIL + month
        const aggregated = new Map<string, {
          saldo: Record<string, number>;
          descricao: string;
          departamento?: string;
          centroCusto?: string;
          coligada?: string;
          grupoContabil?: string;
          atividade: AtividadeKey;
          tipo: 'R' | 'D' | 'C';
        }>();

        let processed = 0;

        for (const row of rows) {
          const conta = String(row.CONTA_CONTABIL || '').trim();
          if (!conta) continue;

          const saldo = Number(row.SALDO ?? 0);
          if (isNaN(saldo)) continue;

          const monthKey = dateToMonthKey(row.DATA) || fallbackMonth;

          const existing = aggregated.get(conta);
          if (existing) {
            existing.saldo[monthKey] = (existing.saldo[monthKey] || 0) + saldo;
          } else {
            aggregated.set(conta, {
              saldo: { [monthKey]: saldo },
              descricao: String(row.DESCRICAO_CONTABIL || conta),
              departamento: row.NOMEDEPTO ? String(row.NOMEDEPTO) : undefined,
              centroCusto: row.NOMECUSTO ? String(row.NOMECUSTO) : undefined,
              coligada: row.COLIGADA ? String(row.COLIGADA) : undefined,
              grupoContabil: row.GRUPOCONTABIL ? String(row.GRUPOCONTABIL) : undefined,
              atividade: mapAtividade(row.GRUPOCONTABIL ? String(row.GRUPOCONTABIL) : undefined, row.NOME_ORCAMENTO ? String(row.NOME_ORCAMENTO) : undefined),
              tipo: mapTipo(conta),
            });
          }
          processed++;
        }

        // Merge into existing accounts
        const currentAccounts = [...get().accounts];
        for (const [conta, data] of aggregated) {
          const idx = currentAccounts.findIndex((a) => a.codigo === conta);
          if (idx >= 0) {
            // Merge realizado values
            const merged = { ...currentAccounts[idx].realizado };
            for (const [mk, val] of Object.entries(data.saldo)) {
              merged[mk] = val;
            }
            currentAccounts[idx] = {
              ...currentAccounts[idx],
              realizado: merged,
              departamento: data.departamento || currentAccounts[idx].departamento,
              centroCusto: data.centroCusto || currentAccounts[idx].centroCusto,
              coligada: data.coligada || currentAccounts[idx].coligada,
              grupoContabil: data.grupoContabil || currentAccounts[idx].grupoContabil,
            };
          } else {
            // Create new account entry
            currentAccounts.push({
              id: crypto.randomUUID(),
              codigo: conta,
              descricao: data.descricao,
              tipo: data.tipo,
              codigoPai: null,
              nivel: conta.split('.').length,
              atividade: data.atividade,
              departamento: data.departamento,
              centroCusto: data.centroCusto,
              coligada: data.coligada,
              grupoContabil: data.grupoContabil,
              orcado: {},
              realizado: data.saldo,
            });
          }
        }

        set({ accounts: currentAccounts });
        return processed;
      },
    }),
    { name: 'budget-store' }
  )
);
