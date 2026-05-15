/**
 * Coluna A do orçado pecuária (layout com código 1–9 referenciando GRUPO_CONTABIL N9).
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
  '9': '4.1.01.03-LOCACOES',
};

const pecuariaOrcadoGrupoCodKey = (raw: unknown): string | null => {
  if (typeof raw === 'number' && Number.isFinite(raw)) {
    const n = Math.trunc(raw);
    if (n >= 1 && n <= 9 && Math.abs((raw as number) - n) < 1e-9) return String(n);
  }
  const s = String(raw ?? '').trim();
  if (!s) return null;
  if (/^[1-9]$/.test(s)) return s;
  return null;
};

export const resolvePecuariaOrcadoGrupoContabilN9 = (raw: unknown): string => {
  const n = pecuariaOrcadoGrupoCodKey(raw);
  if (!n) return '';
  return PECUARIA_ORCADO_GRUPO_CONTABIL_N9[n] || '';
};

/**
 * Prefixo de grupo contábil (4 níveis: 4.1.01.11) a partir de rótulo ou conta.
 * Evita tratar a conta inteira (ex.: 4.1.01.11.0001) como se fosse o N9.
 */
export const extractGrupoN9FourLevels = (raw: unknown): string => {
  const s = String(raw ?? '').trim();
  if (!s) return '';
  const head = s.split(/[-\s]/)[0]?.trim() ?? s;
  const match = head.match(/^\d(?:\.\d{1,4})+/);
  if (!match) return '';
  const parts = match[0].split('.');
  if (parts.length <= 4) return match[0];
  return parts.slice(0, 4).join('.');
};

/** Prefixo N9 (ex.: 4.1.01.11) a partir do rótulo mapeado na coluna A. */
export const extractGrupoN9FromPecuariaOrcadoLabel = (label: string): string => {
  const normalized = String(label || '').trim();
  if (!normalized) return '';
  return extractGrupoN9FourLevels(normalized);
};

/** Prefixo N9 (4 níveis) → rótulo completo como no cubo / print (ex.: 4.1.01.11-CUSTOS RURAIS). */
const PECUARIA_GRUPO_N9_PREFIX_TO_DISPLAY_LABEL: Record<string, string> = (() => {
  const out: Record<string, string> = {
    '4.1.01.03': '4.1.01.03-LOCACOES',
    '4.1.01.07': '4.1.01.07-UTILIDADES E SERVICOS',
  };
  for (const label of Object.values(PECUARIA_ORCADO_GRUPO_CONTABIL_N9)) {
    const prefix = extractGrupoN9FourLevels(label);
    if (prefix) out[prefix] = label;
  }
  return out;
})();

/**
 * Nome de exibição do grupo contábil (nível N9) na cascata pecuária: mesmo texto do cubo / planilha de referência.
 * `hint` pode ser o `grupoContabilN9` vindo do realizado quando o prefixo não estiver no mapa fixo.
 */
/** Descrição contábil para linhas só de grupo (col. B vazia): col. C, depois nome após o hífen em A. */
export function resolvePecuariaOrcadoGrupoDescricao(
  grupoContabilLabel: string,
  descricaoContabil?: string
): string {
  const fromColC = String(descricaoContabil ?? '').trim();
  if (fromColC) return fromColC;
  const label = String(grupoContabilLabel ?? '').trim();
  const dashIdx = label.indexOf('-');
  if (dashIdx >= 0) {
    const afterDash = label.slice(dashIdx + 1).trim();
    if (afterDash) return afterDash;
  }
  const n9 = extractGrupoN9FromPecuariaOrcadoLabel(label);
  if (n9) return getPecuariaGrupoContabilN9DisplayLabel(n9, label);
  return label;
}

export function getPecuariaGrupoContabilN9DisplayLabel(
  prefix: string,
  hint?: string | null
): string {
  const canonical = PECUARIA_GRUPO_N9_PREFIX_TO_DISPLAY_LABEL[prefix];
  if (canonical) return canonical;
  const h = String(hint ?? '').trim();
  if (h) {
    const head = (h.split(/[-\s]/)[0] || '').trim() || h;
    if (extractGrupoN9FourLevels(head) === prefix && h.includes('-')) {
      return h;
    }
  }
  return prefix;
}

const COL_A_KEYS = [
  'GRUPO_CONTABIL',
  'GRUPOCONTABIL',
  'COD_GRUPO',
  'CODIGO_GRUPO',
  'GRUPO_CONTABIL_COD',
  '__EMPTY',
  '__EMPTY_0',
] as const;
const COL_B_KEYS = ['CONTA_CONTABIL', 'CONTA', '__EMPTY_1'] as const;
const COL_C_KEYS = [
  'DESCRICAO C. CONTABIL',
  'DESCRICAO C CONTABIL',
  'DESCRICAO C. CONTÁBIL',
  'DESCRICAO C CONTÁBIL',
  'DESCRICAO_C_CONTABIL',
  'DESCRICAO_CONTABIL',
  'DESCRICAO',
  '__EMPTY_2',
] as const;

const normalizeOrcadoHeaderKey = (value: string) =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/\s+/g, ' ')
    .trim();

const firstCell = (row: Record<string, unknown>, keys: readonly string[]): unknown => {
  for (const k of keys) {
    if (!(k in row)) continue;
    const v = row[k];
    if (v !== undefined && v !== null && String(v).trim() !== '') return v;
  }
  const normalizedPatterns = keys.map(normalizeOrcadoHeaderKey);
  for (const [k, v] of Object.entries(row)) {
    if (v === undefined || v === null || String(v).trim() === '') continue;
    if (normalizedPatterns.includes(normalizeOrcadoHeaderKey(k))) return v;
  }
  return undefined;
};

/** Layout: A=código 1–9 ou rótulo N9-texto, B=conta (opcional), C=descrição, D+=meses. */
export interface PecuariaOrcadoGranularRow {
  grupoN9: string;
  grupoContabilLabel: string;
  contaContabil: string;
  descricaoContabil: string;
  /** Sem conta contábil na planilha: valor consolidado só no grupo. */
  scope: 'grupo' | 'descricao';
}

const grupoLabelFromColA = (raw: unknown): string => {
  const mapped = resolvePecuariaOrcadoGrupoContabilN9(raw);
  if (mapped) return mapped;
  const s = String(raw ?? '').trim();
  return s;
};

/**
 * Interpreta uma linha do orçado custo pecuária (col. A–C + colunas de meses).
 * Conta vazia: retorna scope `grupo` (valor não pode ser descartado).
 */
export const tryParsePecuariaOrcadoBudgetRow = (
  row: Record<string, unknown>
): PecuariaOrcadoGranularRow | null => {
  const colA = firstCell(row, COL_A_KEYS);
  if (colA === undefined || colA === null || String(colA).trim() === '') return null;

  const grupoContabilLabel = grupoLabelFromColA(colA);
  let grupoN9 = extractGrupoN9FromPecuariaOrcadoLabel(grupoContabilLabel);
  if (!grupoN9) return null;

  const contaRaw = firstCell(row, COL_B_KEYS);
  const contaContabil = String(contaRaw ?? '').trim();
  const descRaw = firstCell(row, COL_C_KEYS);
  const descricaoContabil = String(descRaw ?? '').trim();

  const hasConta = /^\d\.\d+\.\d+/.test(contaContabil);
  if (!hasConta) {
    return {
      grupoN9,
      grupoContabilLabel,
      contaContabil: '',
      descricaoContabil,
      scope: 'grupo',
    };
  }

  const fromConta = extractGrupoN9FourLevels(contaContabil);
  if (fromConta) grupoN9 = fromConta;

  return {
    grupoN9,
    grupoContabilLabel,
    contaContabil,
    descricaoContabil: descricaoContabil || contaContabil,
    scope: 'descricao',
  };
};

/** @deprecated use tryParsePecuariaOrcadoBudgetRow */
export const tryParsePecuariaOrcadoGranularRow = (
  row: Record<string, unknown>
): PecuariaOrcadoGranularRow | null => {
  const parsed = tryParsePecuariaOrcadoBudgetRow(row);
  if (!parsed || parsed.scope !== 'descricao') return null;
  return parsed;
};
