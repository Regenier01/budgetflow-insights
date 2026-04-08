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
    id: '3', codigo: '4', descricao: 'CUSTOS OPERACIONAIS', tipo: 'C', codigoPai: null, nivel: 1, atividade: 'AGRICOLA',
    orcado: { '2026-04': 100000, '2026-05': 110000, '2026-06': 105000 },
    realizado: { '2026-04': 98000, '2026-05': 112000 },
  },
  {
    id: '6', codigo: '3.4.01', descricao: 'DESPESAS ADMINISTRATIVAS', tipo: 'D', codigoPai: null, nivel: 1, atividade: 'DESP_ADM_TRIB',
    orcado: { '2026-04': 80000, '2026-05': 82000, '2026-06': 78000 },
    realizado: { '2026-04': 79000, '2026-05': 84000 },
  },
];

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

function mapAtividade(contaContabil: string, grupoContabil?: string, nomeOrcamento?: string): AtividadeKey {
  const conta = contaContabil.trim();
  const grupo = (grupoContabil || '').trim();
  const orcText = (nomeOrcamento || '').toUpperCase();
  
  // Regra prioritária: Tudo que comece com 3.4.01 é Despesas Administrativas
  if (conta.startsWith('3.4.01') || grupo.startsWith('3.4.01')) {
    return 'DESP_ADM_TRIB';
  }

  const text = grupo.toUpperCase();
  if (text.includes('PECUA') || orcText.includes('PECUA') || text.includes('GADO')) return 'PECUARIA';
  if (text.includes('SERING') || orcText.includes('SERING') || text.includes('LATEX')) return 'SERINGAL';
  if (text.includes('AGRIC') || orcText.includes('AGRIC') || text.includes('SOJA')) return 'AGRICOLA';
  if (text.includes('CANA') || orcText.includes('CANA')) return 'CANA';
  if (text.includes('ADM') || orcText.includes('ADM') || text.includes('TRIB')) return 'DESP_ADM_TRIB';
  if (text.includes('ENCARGO') || orcText.includes('ENCARGO')) return 'ENCARGOS';
  
  return 'PECUARIA'; // fallback
}

function mapTipo(contaContabil: string): 'R' | 'D' | 'C' {
  const conta = contaContabil.trim();
  
  // Regra: Tudo o que for 4. será custos
  if (conta.startsWith('4.') || conta.startsWith('4')) return 'C';
  
  // Receitas
  if (conta.startsWith('3.1') || conta.startsWith('3.01')) return 'R';
  
  // Outros custos
  if (conta.startsWith('3.3') || conta.startsWith('3.03')) return 'C';
  
  return 'D'; // Despesas por padrão (inclui 3.4.01)
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
          const grupoContabil = row.GRUPOCONTABIL ? String(row.GRUPOCONTABIL) : undefined;
          const nomeOrcamento = row.NOME_ORCAMENTO ? String(row.NOME_ORCAMENTO) : undefined;

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
              grupoContabil: grupoContabil,
              atividade: mapAtividade(conta, grupoContabil, nomeOrcamento),
              tipo: mapTipo(conta),
            });
          }
          processed++;
        }

        const currentAccounts = [...get().accounts];
        for (const [conta, data] of aggregated) {
          const idx = currentAccounts.findIndex((a) => a.codigo === conta);
          if (idx >= 0) {
            const merged = { ...currentAccounts[idx].realizado };
            for (const [mk, val] of Object.entries(data.saldo)) {
              merged[mk] = val;
            }
            currentAccounts[idx] = {
              ...currentAccounts[idx],
              realizado: merged,
              tipo: data.tipo,
              atividade: data.atividade,
              departamento: data.departamento || currentAccounts[idx].departamento,
              centroCusto: data.centroCusto || currentAccounts[idx].centroCusto,
              coligada: data.coligada || currentAccounts[idx].coligada,
              grupoContabil: data.grupoContabil || currentAccounts[idx].grupoContabil,
            };
          } else {
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