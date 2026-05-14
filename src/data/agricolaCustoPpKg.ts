/**
 * Custo por kg (agrícola) por mês (MonthKey). Um mês por coluna — não somar meses no total.
 * Preencher quando houver fonte consolidada (equivalente ao seringal / CustoKg.xlsx).
 */
import type { MonthKey } from '@/types/budget';

export const AGRICOLA_CUSTO_PKG_ORCADO: Partial<Record<MonthKey, number>> = {};

export const AGRICOLA_CUSTO_PKG_REALIZADO: Partial<Record<MonthKey, number>> = {};
