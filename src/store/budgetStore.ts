import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountEntry, UploadRecord, MonthKey, ExcelRow, AtividadeKey } from '@/types/budget';
import { DEPARTMENT_MAPPING } from '@/data/departmentMapping';

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

export function mapAtividadeByDivisao(divisao?: string): AtividadeKey | null {
  if (!divisao) return null;

  const text = divisao.trim().toUpperCase();

  if (text.includes('PECUA') || text.includes('GADO')) return 'PECUARIA';
  if (text.includes('SERING') || text.includes('LATEX') || text.includes('BORRACHA')) return 'SERINGAL';
  if (text.includes('AGRIC') || text.includes('SOJA') || text.includes('MILHO')) return 'AGRICOLA';
  if (text.includes('CANA')) return 'CANA';
  if (text.includes('ADM') || text.includes('TRIB')) return 'DESP_ADM_TRIB';
  if (text.includes('ENCARGO')) return 'ENCARGOS';

  return null;
}

export function mapAtividade(row: ExcelRow): { atividade: AtividadeKey; divisao?: string; unidadeNegocio?: string } {
  const depto = row.NOMEDEPTO ? String(row.NOMEDEPTO).trim() : '';
  const mapping = DEPARTMENT_MAPPING[depto];

  if (mapping) {
    const divisao = mapping.divisao.trim().toUpperCase();
    const fromDivisao = mapAtividadeByDivisao(divisao);
    
    // Strict Seringal check: only if division is exactly SERINGAL
    if (divisao === 'SERINGAL') {
      return { atividade: 'SERINGAL', divisao: mapping.divisao, unidadeNegocio: mapping.unidadeNegocio };
    }

    return { 
      atividade: fromDivisao || 'PECUARIA', 
      divisao: mapping.divisao, 
      unidadeNegocio: mapping.unidadeNegocio 
    };
  }

  // Fallback if department is not found in mapping
  const currentDivisao = row.DIVISAO ? String(row.DIVISAO) : undefined;
  const fromDivisao = mapAtividadeByDivisao(currentDivisao);

  if (fromDivisao) {
    if (fromDivisao === 'SERINGAL') {
      // If not in mapping, we never allow Seringal as a safety measure
      return { atividade: 'PECUARIA', divisao: currentDivisao };
    }
    return { atividade: fromDivisao, divisao: currentDivisao };
  }

  return { atividade: 'PECUARIA', divisao: currentDivisao };
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

function mapTipo(contaContabil: string): 'R' | 'D' | 'C' {
  const conta = contaContabil.trim();

  if (conta.startsWith('3.1') || conta.startsWith('3.01')) return 'R';
  if (conta.startsWith('3.3') || conta.startsWith('3.03') || conta.startsWith('4')) return 'C';

  return 'D';
}

export function calculateGlobalTotals(accounts: AccountEntry[]) {
  // Filtramos apenas as contas que não possuem pai na lista (raízes reais) para evitar dupla contagem
  const rootAccounts = accounts.filter(a => {
    return !accounts.some(parent => parent.codigo === a.codigoPai);
  });

  let orc = 0;
  let real = 0;

  rootAccounts.forEach(a => {
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

  // Filtramos as contas pertencentes à atividade
  const filtered = accounts.filter(a => a.atividade === filterAtividade);
  
  // Filtramos apenas as contas que são "raízes" dentro do subconjunto da atividade
  // Isso evita somar o pai (grupo) e o filho (conta específica) simultaneamente
  const roots = filtered.filter(a => !filtered.some(p => p.codigo === a.codigoPai));

  roots.forEach(a => {
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

      addUpload: (upload) =>
        set((s) => ({
          uploads: [...s.uploads, upload],
        })),

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
        const aggregated = new Map<
          string,
          {
            saldo: Record<string, number>;
            descricao: string;
            departamento?: string;
            centroCusto?: string;
            coligada?: string;
            divisao?: string;
            unidadeNegocio?: string;
            grupoContabilN9?: string;
            nomeProduto?: string;
            atividade: AtividadeKey;
            tipo: 'R' | 'D' | 'C';
          }
        >();

        let processed = 0;

        for (const row of rows) {
          const conta = String(row.CONTA_CONTABIL || '').trim();
          if (!conta) continue;

          const saldo = Number(row.SALDO ?? 0);
          if (isNaN(saldo)) continue;

          const nomeProduto = row.NOMEPRODUTO ? String(row.NOMEPRODUTO).trim() : '';
          const aggKey = `${conta}|${nomeProduto}`;

          const monthKey = dateToMonthKey(row.DATA) || fallbackMonth;

          const existing = aggregated.get(aggKey);

          if (existing) {
            existing.saldo[monthKey] = (existing.saldo[monthKey] || 0) + saldo;
          } else {
            const depto = row.NOMEDEPTO ? String(row.NOMEDEPTO).trim() : '';
            const { atividade, divisao: mappedDivisao, unidadeNegocio } = mapAtividade(row);

            aggregated.set(aggKey, {
              saldo: { [monthKey]: saldo },
              descricao: String(row.DESCRICAO_CONTABIL || conta),
              departamento: depto || undefined,
              centroCusto: row.NOMECUSTO ? String(row.NOMECUSTO) : undefined,
              coligada: row.COLIGADA ? String(row.COLIGADA) : undefined,
              divisao: mappedDivisao || (row.DIVISAO ? String(row.DIVISAO) : undefined),
              unidadeNegocio,
              grupoContabilN9: row.GRUPOCONTABILN9 ? String(row.GRUPOCONTABILN9) : undefined,
              nomeProduto: nomeProduto || undefined,
              atividade,
              tipo: mapTipo(conta),
            });
          }

          processed++;
        }

        const currentAccounts = [...get().accounts];

        const ensureParentExists = (
          codigo: string,
          data: {
            atividade: AtividadeKey;
            tipo: 'R' | 'D' | 'C';
          }
        ) => {
          const parts = codigo.split('.');
          if (parts.length <= 1) return;

          const codigoPai = parts.slice(0, -1).join('.');
          const parentIdx = currentAccounts.findIndex((a) => a.codigo === codigoPai);

          if (parentIdx === -1) {
            currentAccounts.push({
              id: crypto.randomUUID(),
              codigo: codigoPai,
              descricao: codigoPai,
              tipo: data.tipo,
              codigoPai: codigoPai.includes('.')
                ? codigoPai.split('.').slice(0, -1).join('.')
                : null,
              nivel: parts.length - 1,
              atividade: data.atividade,
              orcado: {},
              realizado: {},
            });

            ensureParentExists(codigoPai, data);
          }
        };

        for (const [aggKey, data] of aggregated) {
          const [conta] = aggKey.split('|');
          const idx = currentAccounts.findIndex((a) => a.codigo === conta && a.nomeProduto === data.nomeProduto);

          const parts = conta.split('.');
          const codigoPai = parts.length > 1 ? parts.slice(0, -1).join('.') : null;

          ensureParentExists(conta, data);

          if (idx >= 0) {
            const mergedRealizado = { ...currentAccounts[idx].realizado };

            for (const [mk, val] of Object.entries(data.saldo)) {
              mergedRealizado[mk] = val;
            }

            currentAccounts[idx] = {
              ...currentAccounts[idx],
              realizado: mergedRealizado,
              tipo: data.tipo,
              atividade: data.atividade,
              codigoPai,
              nivel: parts.length,
              descricao:
                data.descricao !== conta
                  ? data.descricao
                  : currentAccounts[idx].descricao,
              departamento: data.departamento || currentAccounts[idx].departamento,
              centroCusto: data.centroCusto || currentAccounts[idx].centroCusto,
              coligada: data.coligada || currentAccounts[idx].coligada,
              grupoContabilN9:
                data.grupoContabilN9 || currentAccounts[idx].grupoContabilN9,
              nomeProduto: data.nomeProduto,
              divisao: data.divisao || currentAccounts[idx].divisao,
              unidadeNegocio: data.unidadeNegocio || currentAccounts[idx].unidadeNegocio,
            };
          } else {
            currentAccounts.push({
              id: crypto.randomUUID(),
              codigo: conta,
              descricao: data.descricao,
              tipo: data.tipo,
              codigoPai,
              nivel: parts.length,
              atividade: data.atividade,
              departamento: data.departamento,
              centroCusto: data.centroCusto,
              coligada: data.coligada,
              grupoContabilN9: data.grupoContabilN9,
              nomeProduto: data.nomeProduto,
              divisao: data.divisao,
              unidadeNegocio: data.unidadeNegocio,
              orcado: {},
              realizado: data.saldo,
            });
          }
        }

        currentAccounts.sort((a, b) =>
          a.codigo.localeCompare(b.codigo, undefined, { numeric: true })
        );

        set({ accounts: currentAccounts });

        return processed;
      },
    }),
    { name: 'budget-store' }
  )
);
