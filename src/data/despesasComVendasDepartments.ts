const normalizeDepartamento = (value?: string) =>
  (value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim();

export const DESPESAS_VENDAS_PECUARIA_DEPARTMENTS = [
  'COMERCIALIZACAO DE TOUROS',
  'SUPERVISAO PECUARIA',
] as const;

export const DESPESAS_VENDAS_AGRICOLA_DEPARTMENTS = ['COMERCIALIZACAO DE SEMENTES'] as const;

export const isDespesasVendasPecuariaDepartment = (departamento?: string) =>
  DESPESAS_VENDAS_PECUARIA_DEPARTMENTS.some(
    (item) => normalizeDepartamento(item) === normalizeDepartamento(departamento)
  );

export const isDespesasVendasAgricolaDepartment = (departamento?: string) =>
  DESPESAS_VENDAS_AGRICOLA_DEPARTMENTS.some(
    (item) => normalizeDepartamento(item) === normalizeDepartamento(departamento)
  );

/** Mesmo escopo do total na página Despesas com Vendas (Pecuária + Agrícola) e do card no resumo global. */
export const isDespesasComVendasConsolidatedScopeDepartment = (departamento?: string) =>
  isDespesasVendasPecuariaDepartment(departamento) ||
  isDespesasVendasAgricolaDepartment(departamento);
