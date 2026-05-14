/**
 * Coluna A do orçado pecuária (layout com código 1–8 referenciando GRUPO_CONTABIL N9).
 * Valores alinhados ao cubo / realizado (prefixo contábil antes do hífen).
 */
export const PECUARIA_ORCADO_GRUPO_CONTABIL_N9: Record<string, string> = {
  '1': '4.1.01.01-CUSTO DE PESSOAL',
  '2': '4.1.01.11-CUSTOS RURAIS',
  '3': '4.1.01.02-SERVICOS DE TERCEIROS',
  '4': '4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS',
  '5': '4.2.01.02-RATEIO DE CUSTOS',
  '6': '4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES',
  '7': '4.1.01.21-OUTROS CUSTOS OPERACIONAIS',
  '8': '4.1.01.06-DESPESAS DE VIAGENS',
};

const pecuariaOrcadoGrupoCodKey = (raw: unknown): string | null => {
  if (typeof raw === 'number' && Number.isFinite(raw)) {
    const n = Math.trunc(raw);
    if (n >= 1 && n <= 8 && Math.abs((raw as number) - n) < 1e-9) return String(n);
  }
  const s = String(raw ?? '').trim();
  if (!s) return null;
  if (/^[1-8]$/.test(s)) return s;
  return null;
};

export const resolvePecuariaOrcadoGrupoContabilN9 = (raw: unknown): string => {
  const n = pecuariaOrcadoGrupoCodKey(raw);
  if (!n) return '';
  return PECUARIA_ORCADO_GRUPO_CONTABIL_N9[n] || '';
};

/** Prefixo N9 (ex.: 4.1.01.11) a partir do rótulo mapeado na coluna A. */
export const extractGrupoN9FromPecuariaOrcadoLabel = (label: string): string => {
  const normalized = String(label || '').trim();
  if (!normalized) return '';
  const match = normalized.match(/^\d(?:\.\d{1,4}){2,}/);
  return match?.[0] || '';
};

const COL_A_KEYS = ['COD_GRUPO', 'CODIGO_GRUPO', 'GRUPO_CONTABIL_COD', '__EMPTY'] as const;
const COL_B_KEYS = ['CONTA_CONTABIL', 'CONTA', '__EMPTY_1'] as const;
const COL_C_KEYS = ['DESCRICAO_CONTABIL', 'DESCRICAO', '__EMPTY_2'] as const;

const firstCell = (row: Record<string, unknown>, keys: readonly string[]): unknown => {
  for (const k of keys) {
    if (!(k in row)) continue;
    const v = row[k];
    if (v !== undefined && v !== null && String(v).trim() !== '') return v;
  }
  return undefined;
};

/** Layout: A=código 1–8 (grupo), B=conta, C=descrição, D+=meses. */
export interface PecuariaOrcadoGranularRow {
  grupoN9: string;
  grupoContabilLabel: string;
  contaContabil: string;
  descricaoContabil: string;
}

export const tryParsePecuariaOrcadoGranularRow = (
  row: Record<string, unknown>
): PecuariaOrcadoGranularRow | null => {
  const label = resolvePecuariaOrcadoGrupoContabilN9(firstCell(row, COL_A_KEYS));
  if (!label) return null;
  const grupoN9 = extractGrupoN9FromPecuariaOrcadoLabel(label);
  if (!grupoN9) return null;

  const contaRaw = firstCell(row, COL_B_KEYS);
  const contaContabil = String(contaRaw ?? '').trim();
  if (!/^\d\.\d+\.\d+/.test(contaContabil)) return null;

  const descRaw = firstCell(row, COL_C_KEYS);
  const descricaoContabil = String(descRaw ?? '').trim();

  return { grupoN9, grupoContabilLabel: label, contaContabil, descricaoContabil };
};
