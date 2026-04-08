import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountEntry, UploadRecord, MonthKey, ExcelRow, AtividadeKey } from '@/types/budget';
import { ATIVIDADES } from '@/types/budget';

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
  
  return 'PECUARIA';
}

function mapTipo(contaContabil: string): 'R' | 'D' | 'C' {
  const conta = contaContabil.trim();
  if (conta.startsWith('4.') || conta.startsWith('4')) return 'C';
  if (conta.startsWith('3.1') || conta.startsWith('3.01')) return 'R';
  if (conta.startsWith('3.3') || conta.startsWith('3.03')) return 'C';
  return 'D';
}

interface BudgetState {
  accounts: AccountEntry[];
  uploads: UploadRecord[];
  setAccounts: (accounts: AccountEntry[]) => void;
  addUpload: (upload: UploadRecord) => void;
  clearAllData: () => void;
  updateRealizado: (codigo: string, month: MonthKey, value: number) => void;
  importExcelRows: (rows: ExcelRow[], fallbackMonth: MonthKey) => number;
}

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set, get) => ({
      accounts: [],
      uploads: [],
      setAccounts: (accounts) => set({ accounts }),
      addUpload: (upload) => set((s) => ({ uploads: [...s.uploads, upload] })),
      clearAllData: () => set({ accounts: [], uploads: [] }),
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