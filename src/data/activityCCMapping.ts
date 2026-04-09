import type { AtividadeKey } from '@/types/budget';

export const ACTIVITY_CC_MAPPING: Record<AtividadeKey, string[]> = {
  "DESP_ADM_TRIB": [
    "CONTROLADORIA",
    "PESSOAL"
  ],
  "PECUARIA": [
    "RATEIO CONFINAMENTO"
  ],
  "SERINGAL": [
    "RATEIO SERINGAL"
  ]
};
