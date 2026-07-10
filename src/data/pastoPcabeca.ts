/**
 * P/Cabeça pasto por mês (MonthKey). Um mês por coluna — não somar meses no total.
 * Fonte: Diarias/CustoPcabeça.xlsx
 * Regenerar: npm run pcabeca:import
 */
import type { MonthKey } from '@/types/budget';

export const PASTO_PCABECA_ORCADO: Partial<Record<MonthKey, number>> = {
  "2026-04": 101.18309774183265,
  "2026-05": 122.48280436130125,
  "2026-06": 139.40073548576092,
  "2026-07": 114.61967098614527,
  "2026-08": 131.94940575778762,
  "2026-09": 119.73891760999278,
  "2026-10": 117.30036320287502,
  "2026-11": 115.94337104252838,
  "2026-12": 118.1916884992694,
  "2027-01": 106.89497596392508,
  "2027-02": 105.40076600605842,
  "2027-03": 94.99934378013994
};

export const PASTO_PCABECA_REALIZADO: Partial<Record<MonthKey, number>> = {
  "2026-04": 109.16935630099728,
  "2026-05": 97.91825185293366,
  "2026-06": 133.66864852052305
};
