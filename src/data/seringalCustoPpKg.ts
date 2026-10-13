/**
 * Custo por kg (seringal) por mês (MonthKey). Um mês por coluna — não somar meses no total.
 * Fonte: Diarias/CustoKg.xlsx
 * Regenerar: npm run seringal:custokg:import
 */
import type { MonthKey } from '@/types/budget';

export const SERINGAL_CUSTO_PKG_ORCADO: Partial<Record<MonthKey, number>> = {
  "2026-04": 3.166614056168694,
  "2026-05": 3.2388691094210893,
  "2026-06": 3.251380885641787,
  "2026-07": 3.720535417026103,
  "2026-08": 11.517619314631547,
  "2026-10": 9.450502158720033,
  "2026-11": 7.265561411536207,
  "2026-12": 3.9902937200553694,
  "2027-01": 3.636219675786996,
  "2027-02": 3.9893671015064887,
  "2027-03": 3.098242633090242
};

export const SERINGAL_CUSTO_PKG_REALIZADO: Partial<Record<MonthKey, number>> = {
  "2026-04": 2.6461576831247697,
  "2026-05": 2.9261391281684146,
  "2026-06": 3.4430057620262438,
  "2026-07": 4.175115647685298,
  "2026-08": 17.83318862600391,
  "2026-09": 36.02371308829935
};
