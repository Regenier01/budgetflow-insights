/**
 * Layout de orçado Despesas Administrativas (centro de custo = nome do arquivo):
 * GRUPO_CONTABIL (col. A) / CONTA / Descrição + meses, sem nível produto.
 *
 * Na desp. adm. a conta (col. B) pode pertencer a outro subgrupo contábil
 * (ex.: Plano de Saúde 3.4.02.01.0010 dentro do grupo 3.4.01.01 Custo de Pessoal).
 * O agrupamento em cascata segue sempre a coluna A.
 */
import {
  tryParsePecuariaOrcadoBudgetRow,
  extractGrupoN9FourLevels,
  extractGrupoN9FromPecuariaOrcadoLabel,
  resolvePecuariaOrcadoGrupoDescricao,
  type PecuariaOrcadoGranularRow,
} from '@/data/pecuariaOrcadoGrupoContabilCodes';

export {
  extractGrupoN9FourLevels,
  extractGrupoN9FromPecuariaOrcadoLabel as extractGrupoN9FromDespAdmOrcadoLabel,
  resolvePecuariaOrcadoGrupoDescricao as resolveDespAdmOrcadoGrupoDescricao,
};

/** Rótulos N9 de despesas administrativas (cubo / realizado), prefixo 3.4.xx. */
const DESP_ADM_GRUPO_N9_PREFIX_TO_DISPLAY_LABEL: Record<string, string> = {
  '3.4.01.01': '3.4.01.01-CUSTO DE PESSOAL',
  '3.4.01.02': '3.4.01.02-SERVICOS DE TERCEIROS',
  '3.4.01.04': '3.4.01.04-MANUTENCAO E CONSERVACAO DE BENS',
  '3.4.01.05': '3.4.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES',
  '3.4.01.06': '3.4.01.06-DESPESAS DE VIAGENS',
  '3.4.01.07': '3.4.01.07-UTILIDADES E SERVICOS',
  '3.4.01.10': '3.4.01.10-OUTRAS DESPESAS ADMINISTRATIVAS',
  '3.4.03.01': '3.4.03.01-IMPOSTOS INDIRETOS',
  '3.4.03.02': '3.4.03.02-OUTRAS DESPESAS TRIBUTARIAS',
  '3.4.04.01': '3.4.04.01-DESPESAS FINANCEIRAS',
};

export function getDespAdmGrupoContabilN9DisplayLabel(
  prefix: string,
  hint?: string | null
): string {
  const canonical = DESP_ADM_GRUPO_N9_PREFIX_TO_DISPLAY_LABEL[prefix];
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

/** Igual ao layout pecuária, mas o N9 do grupo vem sempre da coluna A (não da conta). */
export const tryParseDespAdmOrcadoBudgetRow = (
  row: Record<string, unknown>
): PecuariaOrcadoGranularRow | null => {
  const parsed = tryParsePecuariaOrcadoBudgetRow(row);
  if (!parsed || parsed.scope !== 'descricao') return parsed;

  const colA = row.GRUPO_CONTABIL ?? row.GRUPOCONTABIL ?? row.__EMPTY ?? row.__EMPTY_0;
  const grupoContabilLabel = String(colA ?? parsed.grupoContabilLabel).trim();
  const grupoN9FromLabel = extractGrupoN9FromPecuariaOrcadoLabel(grupoContabilLabel);
  if (!grupoN9FromLabel) return parsed;

  return {
    ...parsed,
    grupoN9: grupoN9FromLabel,
    grupoContabilLabel: grupoContabilLabel || parsed.grupoContabilLabel,
  };
};
