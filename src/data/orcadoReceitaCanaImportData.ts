import type { AtividadeKey, MonthKey } from '@/types/budget';

type OrcadoImportAtividadeKey = AtividadeKey;

export interface OrcadoGrupoMonthValue {
  grupoContabil: string;
  month: MonthKey;
  value: number;
}

export interface OrcadoImportBatch {
  fileName: string;
  departamento: string;
  atividade: OrcadoImportAtividadeKey;
  rows: OrcadoGrupoMonthValue[];
}

export const ORCADO_RECEITA_CANA_IMPORT_BATCHES: OrcadoImportBatch[] = [
  {
    "fileName": "RECEITA CANA (TOTAL)",
    "departamento": "TOTAL CANA",
    "atividade": "CANA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.02",
        "value": 646877.4437471444
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.02",
        "value": 878729.4186617045
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.02",
        "value": 3382429.6412780248
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.02",
        "value": 3773868.0404844247
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.02",
        "value": 4096051.9536773846
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.02",
        "value": 1297267.3993516245
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.02",
        "value": 1063909.8921324245
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.02",
        "value": 43158.98958650459
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.02",
        "value": 29609.198844744595
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.02",
        "value": 34125.79575866459
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.02",
        "value": 64236.44185146458
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.02",
        "value": 100369.21716282457
      },
      {
        "month": "2026-04",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.2.01.01",
        "value": -2738.850893138875
      }
    ]
  }
];
