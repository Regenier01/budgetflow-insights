/**
 * Valores de diária confinamento por mês (MonthKey).
 * Fonte: Diarias/Diarias.xlsx
 * Regenerar: npm run diarias:import
 */
import type { MonthKey } from '@/types/budget';

export const CONFINAMENTO_DIARIA_ORCADO: Partial<Record<MonthKey, number>> = {
  "2026-04": 19.465996292886878,
  "2026-05": 18.802001518618944,
  "2026-06": 18.64045169524536,
  "2026-07": 18.27382630581223,
  "2026-08": 18.413471612420903,
  "2026-09": 18.886700304728418,
  "2026-10": 18.45990120726397,
  "2026-11": 18.904826127566366,
  "2026-12": 19.560093063538538,
  "2027-01": 20.103059310579606,
  "2027-02": 18.474975252719137,
  "2027-03": 18.720674738543327
};

export const CONFINAMENTO_DIARIA_REALIZADO: Partial<Record<MonthKey, number>> = {
  "2026-04": 12.569965922191114
};
