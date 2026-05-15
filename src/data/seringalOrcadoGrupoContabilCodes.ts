/**
 * Layout de orçado custo seringal (Fazenda - Seringal): mesma estrutura da pecuária/agrícola
 * (GRUPO_CONTABIL / CONTA_CONTABIL / Descrição C. Contábil + meses), sem nível produto.
 */
export {
  tryParsePecuariaOrcadoBudgetRow as tryParseSeringalOrcadoBudgetRow,
  extractGrupoN9FourLevels,
  extractGrupoN9FromPecuariaOrcadoLabel as extractGrupoN9FromSeringalOrcadoLabel,
  getPecuariaGrupoContabilN9DisplayLabel as getSeringalGrupoContabilN9DisplayLabel,
  resolvePecuariaOrcadoGrupoDescricao as resolveSeringalOrcadoGrupoDescricao,
} from '@/data/pecuariaOrcadoGrupoContabilCodes';
