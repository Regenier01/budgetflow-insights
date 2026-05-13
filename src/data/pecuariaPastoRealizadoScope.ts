import type { AccountEntry, MonthKey } from '@/types/budget';

/** Realizado de custos da pecuária (pasto): só CC e departamentos abaixo. Confinamento segue regra própria. */
export const PECUARIA_PASTO_REALIZADO_CC = 'RATEIO GADO GERAL';

const normalizeScopeKey = (value: string | undefined) =>
  String(value || '')
    .toUpperCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9]+/g, ' ')
    .trim();

/** Departamentos alinhados ao ERP + Codora (variantes com/sem acento e PECUÁRIA). */
const PASTO_REALIZADO_DEPT_KEYS = new Set([
  'BANDEIRANTES PECUARIA',
  'CANADA PECUARIA',
  'CENTRO COMERCIAL DE TOUROS',
  'COVOA PECUARIA',
  'GOTEJO PECUARIA',
  'JOIA PECUARIA',
  'PORTEIRAS PECUARIA',
  'UNIAO PECUARIA',
  'VERA CRUZ PECUARIA',
  'CODORA',
  'CODORA PECUARIA',
]);

const CONFINAMENTO_COST_CENTER_KEYS = [
  'RATEIO CONFINAMENTO',
  'TRANSPORTE DE GADO CONFINAMENTO',
  'TRANSPORTE DE INSUMOS CONFINAMENTO',
  'CONFINAMENTO - TRANSPORTE DE GADO',
  'CONFINAMENTO - TRANSPORTE DE INSUMOS',
  'MANUTENCAO SISTEMA IRRIGACAO - CUSTO CONFINAMENTO',
  'RECRIA GOTEJO CONFINAMENTO',
].map((cc) => normalizeScopeKey(cc));

export const pecuariaPastoRealizadoCcMatches = (centroCusto?: string) =>
  normalizeScopeKey(centroCusto) === normalizeScopeKey(PECUARIA_PASTO_REALIZADO_CC);

export const pecuariaPastoRealizadoDeptMatches = (departamento?: string) => {
  const k = normalizeScopeKey(departamento);
  if (!k) return false;
  return PASTO_REALIZADO_DEPT_KEYS.has(k);
};

export const isPecuariaConfinamentoCostRow = (centroCusto?: string, departamento?: string) => {
  if (normalizeScopeKey(departamento) === 'CONFINAMENTO') return true;
  const cck = normalizeScopeKey(centroCusto);
  return CONFINAMENTO_COST_CENTER_KEYS.some((allowed) => allowed === cck);
};

/** Soma realizado de custos pecuária: confinamento integral; pasto só CC rateio gado + dept permitidos. */
export function sumPecuariaCustosRealizadoForMonth(
  entry: Pick<AccountEntry, 'atividade' | 'tipo' | 'centroCusto' | 'departamento' | 'realizado'>,
  selectedMonth: MonthKey | 'all'
): number {
  if (entry.atividade !== 'PECUARIA') {
    if (selectedMonth === 'all') return Object.values(entry.realizado).reduce((s, v) => s + v, 0);
    return entry.realizado[selectedMonth] || 0;
  }
  if (entry.tipo !== 'C' && entry.tipo !== 'D') {
    if (selectedMonth === 'all') return Object.values(entry.realizado).reduce((s, v) => s + v, 0);
    return entry.realizado[selectedMonth] || 0;
  }
  if (isPecuariaConfinamentoCostRow(entry.centroCusto, entry.departamento)) {
    if (selectedMonth === 'all') return Object.values(entry.realizado).reduce((s, v) => s + v, 0);
    return entry.realizado[selectedMonth] || 0;
  }
  if (!pecuariaPastoRealizadoCcMatches(entry.centroCusto) || !pecuariaPastoRealizadoDeptMatches(entry.departamento)) {
    return 0;
  }
  if (selectedMonth === 'all') return Object.values(entry.realizado).reduce((s, v) => s + v, 0);
  return entry.realizado[selectedMonth] || 0;
}
