import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountEntry, UploadRecord, MonthKey, ExcelRow, AtividadeKey, CulturaKey } from '@/types/budget';

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

const DEPTOS_AGRICOLA = [
  'CANADÁ - SOJA',
  'JÓIA - SOJA',
  'LAGUNA - MILHO',
  'LAGUNA - SOJA',
  'LAGUNA - SORGO',
  'LAVRINHA SLN - MILHO',
  'LAVRINHA SLN - SOJA',
  'UNIÃO - SOJA',
  'VALE DO IMBÉ - GERGELIM',
  'VALE DO IMBÉ - SORGO',
  'VALE DO IMBÉ - SOJA',
  'VERA CRUZ GOTEJO - SOJA',
  'AROEIRA - SOJA',
  'MONTE CARMELO - SOJA',
  'SANTA MARIA - SOJA',
  'LAGUNA - GIRASSOL'
];

// New list for SerINGAL departments
const DEPTOS_SERINGAL = [
  'BANDEIRANTES SERINGAL',
  'ESPLANADA SERINGAL',
  'COVOÁ SERINGAL',
  'PORTEIRAS SERINGAL',
  'VERA CRUZ SERINGAL'
];

function mapAtividade(
  contaContabil: string, 
  divisao?: string, 
  grupoContabil?: string, 
  nomeOrcamento?: string,
  nomeDepto?: string
): AtividadeKey {
  const depto = (nomeDepto || '').toUpperCase().trim();
  const div = (divisao || '').toUpperCase().trim();
  const grupo = (grupoContabil || '').trim().toUpperCase();
  const orcText = (nomeOrcamento || '').toUpperCase();
  
  // TRAVA 1: Despesas Administrativas
  if (depto.includes('ADMINISTRA')) return 'DESP_ADM_TRIB';

  // TRAVA 2: Agrícola
  if (DEPTOS_AGRICOLA.some(d => depto === d.toUpperCase())) {
    return 'AGRICOLA';
  }

  // TRAVA 3: SerINGAL (new)
  if (DEPTOS_SERINGAL.some(d => depto === d.toUpperCase())) {
    return 'SERINGAL';
  }

  // TRAVA 4: Pecuária
  const deptoPecuaria = [
    'CONFINAMENTO', 
    'JÓIA PECUÁRIA', 
    'BANDEIRANTES PECUÁRIA', 
    'CENTRO COMERCIAL', 
    'VERA CRUZ FURNAS', 
    'UNIÃO PECUÁRIA', 
    'GOTEJO PECUÁRIA', 
    'COVOÁ PECUÁRIA', 
    'CANADÁ PECUÁRIA', 
    'PORTEIRAS PECUÁRIA', 
    'CODORA', 
    'LAGUNA PECUÁRIA'
  ];
  
  if (deptoPecuaria.some(d => depto === d || depto.includes(d))) {
    return 'PECUARIA';
  }

  // Outras atividades baseadas na DIVISAO
  if (div.includes('SERING') || div.includes('LATEX')) return 'SERINGAL';
  if (div.includes('AGRIC') || div.includes('SOJA')) return 'AGRICOLA';
  if (div.includes('CANA')) return 'CANA';
  if (div.includes('ENCARGO')) return 'ENCARGOS';

  const combinedText = `${grupo} ${orcText}`;
  if (combinedText.includes('SERING') || combinedText.includes('LATEX')) return 'SERINGAL';
  if (combinedText.includes('AGRIC') || combinedText.includes('SOJA')) return 'AGRICOLA';
  if (combinedText.includes('CANA')) return 'CANA';
  if (combinedText.includes('ENCARGO')) return 'ENCARGOS';
  
  if (div.includes('PECUA') || div.includes('GADO')) return 'PECUARIA';
  
  return 'PECUARIA';
}

function mapCultura(nomeDepto?: string): CulturaKey | undefined {
  const depto = (nomeDepto || '').toUpperCase();
  if (depto.includes('SOJA')) return 'SOJA';
  if (depto.includes('MILHO')) return 'MILHO';
  if (depto.includes('SORGO')) return 'SORGO';
  if (depto.includes('GERGELIM')) return 'GERGELIM';
  if (depto.includes('GIRASSOL')) return 'GIRASSOL';
  return undefined;
}

function mapTipo(contaContabil: string): 'R' | 'D' | 'C' {
  const conta = contaContabil.trim();
  if (conta.startsWith('3.1') || conta.startsWith('3.01')) return 'R';
  if (conta.startsWith('3.3') || conta.startsWith('3.03') || conta.startsWith('4')) return 'C';
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
          divisao?: string;
          grupoContabil?: string;
          atividade: AtividadeKey;
          cultura?: CulturaKey;
          tipo: 'R' | 'D' | 'C';
        }>();

        let processed = 0;

        for (const row of rows) {
          const conta = String(row.CONTA_CONTABIL || '').trim();
          if (!conta) continue;

          const saldo = Number(row.SALDO ?? 0);
          const monthKey = dateToMonthKey(row.DATA) || fallbackMonth;
          
          const divisao = row.DIVISAO ? String(row.DIVISAO) : undefined;
          const grupoContabil = row.GRUPOCONTABIL ? String(row.GRUPOCONTABIL) : undefined;
          const nomeOrcamento = row.NOME_ORCAMENTO ? String(row.NOME_ORCAMENTO) : undefined;
          const nomeDepto = row.NOMEDEPTO ? String(row.NOMEDEPTO) : undefined;

          const existing = aggregated.get(conta);
          if (existing) {
            existing.saldo[monthKey] = (existing.saldo[monthKey] || 0) + saldo;
          } else {
            aggregated.set(conta, {
              saldo: { [monthKey]: saldo },
              descricao: String(row.DESCRICAO_CONTABIL || conta),
              departamento: nomeDepto,
              centroCusto: row.NOMECUSTO ? String(row.NOMECUSTO) : undefined,
              coligada: row.COLIGADA ? String(row.COLIGADA) : undefined,
              divisao: divisao,
              grupoContabil: grupoContabil,
              atividade: mapAtividade(conta, divisao, grupoContabil, nomeOrcamento, nomeDepto),
              cultura: mapCultura(nomeDepto),
              tipo: mapTipo(conta),
            });
          }
          processed++;
        }

        const currentAccounts = [...get().accounts];

        // Função auxiliar para garantir que os pais existam na lista
        const ensureParentExists = (codigo: string, data: any) => {
          const parts = codigo.split('.');
          if (parts.length <= 1) return;

          const codigoPai = parts.slice(0, -1).join('.');
          const parentIdx = currentAccounts.findIndex(a => a.codigo === codigoPai);

          if (parentIdx === -1) {
            // Cria conta pai "fantasma" se não existir, para manter a árvore
            currentAccounts.push({
              id: crypto.randomUUID(),
              codigo: codigoPai,
              descricao: `Grupo ${codigoPai}`,
              tipo: data.tipo,
              codigoPai: codigoPai.includes('.') ? codigoPai.split('.').slice(0, -1).join('.') : null,
              nivel: parts.length - 1,
              atividade: data.atividade,
              orcado: {},
              realizado: {},
            });
            // Recursividade para garantir o avô, etc.
            ensureParentExists(codigoPai, data);
          }
        };

        for (const [conta, data] of aggregated) {
          const idx = currentAccounts.findIndex((a) => a.codigo === conta);
          const parts = conta.split('.');
          const codigoPai = parts.length > 1 ? parts.slice(0, -1).join('.') : null;

          // Garante que a hierarquia de pais exista
          ensureParentExists(conta, data);

          if (idx >= 0) {
            // Atualiza realizado (mescla com o que já existe para outros meses)
            const mergedRealizado = { ...currentAccounts[idx].realizado };
            for (const [mk, val] of Object.entries(data.saldo)) {
              mergedRealizado[mk] = val;
            }

            currentAccounts[idx] = {
              ...currentAccounts[idx],
              realizado: mergedRealizado,
              tipo: data.tipo,
              atividade: data.atividade,
              cultura: data.cultura || currentAccounts[idx].cultura,
              codigoPai: codigoPai,
              nivel: parts.length,
              descricao: data.descricao !== conta ? data.descricao : currentAccounts[idx].descricao,
            };
          } else {
            // Adiciona nova conta
            currentAccounts.push({
              id: crypto.randomUUID(),
              codigo: conta,
              descricao: data.descricao,
              tipo: data.tipo,
              codigoPai: codigoPai,
              nivel: parts.length,
              atividade: data.atividade,
              cultura: data.cultura,
              orcado: {},
              realizado: data.saldo,
            });
          }
        }

        // Ordena as contas por código para garantir que a árvore seja renderizada corretamente
        currentAccounts.sort((a, b) => a.codigo.localeCompare(b.codigo, undefined, { numeric: true }));

        set({ accounts: currentAccounts });
        return processed;
      },
    }),
    { name: 'budget-store' }
  )
);