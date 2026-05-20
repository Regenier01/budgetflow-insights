import type { OrcadoGrupoMonthValue } from '@/data/orcadoImportData';
import { RECEITA_PECUARIA_GRUPO_PREFIX } from '@/data/receitaPecuariaOrcado';
import {
  canonicalReceitaPecuariaDepartmentKey,
  isReceitaPecuariaOrcadoBatch,
} from '@/data/receitaPecuariaOrcado';
import { extractGrupoN9FourLevels } from '@/data/pecuariaOrcadoGrupoContabilCodes';

/** Departamento integral em Receitas Genética (+ custos na abertura Custos Genética). */
export const RECEITA_PECUARIA_GENETICA_DEPARTMENTS = ['CENTRO COMERCIAL DE TOUROS'] as const;

/** Contas de receita que pertencem ao card / abertura Receitas Genética (qualquer departamento). */
export const RECEITA_PECUARIA_GENETICA_CONTAS = [
  '3.1.01.01.0002',
  '3.1.01.01.0019',
  '3.1.01.01.0017',
] as const;

export const RECEITA_PECUARIA_GENETICA_DESCRICOES = [
  'VENDA DE MATRIZES',
  'VENDA DE EMBRIÃO',
  'VENDA DE SEMEM BOVINO',
] as const;

const GENETICA_DEPARTMENT_KEYS = new Set(
  RECEITA_PECUARIA_GENETICA_DEPARTMENTS.map((dept) => canonicalReceitaPecuariaDepartmentKey(dept))
);

const normalizeConta = (codigo?: string) => String(codigo ?? '').trim();

const GENETICA_CONTA_KEYS = new Set(
  RECEITA_PECUARIA_GENETICA_CONTAS.map((conta) => normalizeConta(conta))
);

const normalizeDescricaoKey = (value?: string) => canonicalReceitaPecuariaDepartmentKey(value);

const GENETICA_DESCRICAO_KEYS = new Set(
  RECEITA_PECUARIA_GENETICA_DESCRICOES.map((desc) => normalizeDescricaoKey(desc))
);

export const isReceitaPecuariaGeneticaDepartment = (departamento?: string) =>
  GENETICA_DEPARTMENT_KEYS.has(canonicalReceitaPecuariaDepartmentKey(departamento));

export const isReceitaPecuariaGeneticaConta = (codigo?: string) =>
  GENETICA_CONTA_KEYS.has(normalizeConta(codigo));

export const isReceitaPecuariaGeneticaDescricao = (descricao?: string) =>
  GENETICA_DESCRICAO_KEYS.has(normalizeDescricaoKey(descricao));

export type ReceitaPecuariaGeneticaEntrySlice = {
  codigo?: string;
  descricao?: string;
  departamento?: string;
  tipo?: string;
};

/** Receitas (R) na visão Genética: CENTRO COMERCIAL DE TOUROS inteiro + contas 0002/0019/0017 em qualquer dept. */
export const isReceitaPecuariaGeneticaReceitaEntry = (entry: ReceitaPecuariaGeneticaEntrySlice) => {
  if (entry.tipo && entry.tipo !== 'R') return false;
  if (isReceitaPecuariaGeneticaDepartment(entry.departamento)) return true;
  if (isReceitaPecuariaGeneticaConta(entry.codigo)) return true;
  if (isReceitaPecuariaGeneticaDescricao(entry.descricao)) return true;
  return false;
};

/** Deduções alinhadas ao departamento CENTRO COMERCIAL DE TOUROS. */
export const isReceitaPecuariaGeneticaDeducaoEntry = (entry: ReceitaPecuariaGeneticaEntrySlice) =>
  isReceitaPecuariaGeneticaDepartment(entry.departamento);

/** Custos/despesas na abertura Custos Genética. */
export const isReceitaPecuariaGeneticaCustosEntry = (entry: ReceitaPecuariaGeneticaEntrySlice) =>
  isReceitaPecuariaGeneticaDepartment(entry.departamento);

export const isReceitaPecuariaGeneticaOrcadoRow = (
  row: OrcadoGrupoMonthValue,
  departamento?: string
) => {
  if (departamento && isReceitaPecuariaGeneticaDepartment(departamento)) return true;
  if (row.contaContabil && isReceitaPecuariaGeneticaConta(row.contaContabil)) return true;
  if (row.descricaoContabil && isReceitaPecuariaGeneticaDescricao(row.descricaoContabil)) return true;
  return false;
};

export const isReceitaPecuariaGeneticaFileName = (fileName: string) => {
  const stem = fileName
    .replace(/\.(xlsx|xls)$/i, '')
    .replace(/^ORCAMENTO\s+/i, '')
    .replace(/^ORÇAMENTO\s+/i, '')
    .trim();
  return isReceitaPecuariaGeneticaDepartment(stem);
};

export const receitaPecuariaGeneticaOrcadoScopeKey = (departamento: string) =>
  `RECEITA_PECUARIA_GENETICA::${canonicalReceitaPecuariaDepartmentKey(departamento)}`;

export function isReceitaPecuariaGeneticaOrcadoBatch(batch: {
  atividade: string;
  departamento?: string;
  rows: OrcadoGrupoMonthValue[];
}): boolean {
  if (!isReceitaPecuariaOrcadoBatch(batch)) return false;
  if (batch.rows.length === 0) return false;
  if (isReceitaPecuariaGeneticaDepartment(batch.departamento)) return true;
  return batch.rows.every((row) => isReceitaPecuariaGeneticaOrcadoRow(row, batch.departamento));
}

export function isReceitaPecuariaRegularOrcadoBatch(batch: {
  atividade: string;
  departamento?: string;
  rows: OrcadoGrupoMonthValue[];
}): boolean {
  return isReceitaPecuariaOrcadoBatch(batch) && !isReceitaPecuariaGeneticaOrcadoBatch(batch);
}

export const matchesReceitaPecuariaGeneticaGrupo = (grupoContabil: string) => {
  const prefix = extractGrupoN9FourLevels(grupoContabil);
  return prefix.startsWith(RECEITA_PECUARIA_GRUPO_PREFIX);
};
