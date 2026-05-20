import type { OrcadoGrupoMonthValue } from '@/data/orcadoImportData';
import { RECEITA_PECUARIA_GRUPO_PREFIX } from '@/data/receitaPecuariaOrcado';
import {
  canonicalReceitaPecuariaDepartmentKey,
  isReceitaPecuariaOrcadoBatch,
} from '@/data/receitaPecuariaOrcado';
import { extractGrupoN9FourLevels } from '@/data/pecuariaOrcadoGrupoContabilCodes';

/** Departamentos cuja receita orçada/realizada pertence ao card Receitas Genética (não ao card Receitas). */
export const RECEITA_PECUARIA_GENETICA_DEPARTMENTS = ['CENTRO COMERCIAL DE TOUROS'] as const;

const GENETICA_DEPARTMENT_KEYS = new Set(
  RECEITA_PECUARIA_GENETICA_DEPARTMENTS.map((dept) => canonicalReceitaPecuariaDepartmentKey(dept))
);

export const isReceitaPecuariaGeneticaDepartment = (departamento?: string) =>
  GENETICA_DEPARTMENT_KEYS.has(canonicalReceitaPecuariaDepartmentKey(departamento));

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
  return (
    isReceitaPecuariaOrcadoBatch(batch) &&
    isReceitaPecuariaGeneticaDepartment(batch.departamento)
  );
}

export function isReceitaPecuariaRegularOrcadoBatch(batch: {
  atividade: string;
  departamento?: string;
  rows: OrcadoGrupoMonthValue[];
}): boolean {
  return (
    isReceitaPecuariaOrcadoBatch(batch) &&
    !isReceitaPecuariaGeneticaDepartment(batch.departamento)
  );
}

export const matchesReceitaPecuariaGeneticaGrupo = (grupoContabil: string) => {
  const prefix = extractGrupoN9FourLevels(grupoContabil);
  return prefix.startsWith(RECEITA_PECUARIA_GRUPO_PREFIX);
};
