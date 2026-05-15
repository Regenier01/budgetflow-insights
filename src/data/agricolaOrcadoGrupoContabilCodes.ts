/**
 * Layout de orçado custo agrícola (Fazenda - Cultura): mesma estrutura da pecuária
 * (GRUPO_CONTABIL / CONTA_CONTABIL / Descrição C. Contábil + meses), sem nível produto.
 */
export {
  tryParsePecuariaOrcadoBudgetRow as tryParseAgricolaOrcadoBudgetRow,
  extractGrupoN9FourLevels,
  extractGrupoN9FromPecuariaOrcadoLabel as extractGrupoN9FromAgricolaOrcadoLabel,
  getPecuariaGrupoContabilN9DisplayLabel as getAgricolaGrupoContabilN9DisplayLabel,
  resolvePecuariaOrcadoGrupoDescricao as resolveAgricolaOrcadoGrupoDescricao,
} from '@/data/pecuariaOrcadoGrupoContabilCodes';
