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

export const ORCADO_RECEITA_PECUARIA_IMPORT_BATCHES: OrcadoImportBatch[] = [
  {
    "fileName": "BANDEIRANTES - PECUARIA.xlsx",
    "departamento": "BANDEIRANTES - PECUARIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.01.01",
        "value": 640302.3236604603
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.01.01",
        "value": 679244.8676025011
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.01.01",
        "value": 829371.8695481136
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.01.01",
        "value": 459120.13366671
      }
    ]
  },
  {
    "fileName": "CENTRO COMERCIAL DE TOUROS.xlsx",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "atividade": "PECUARIA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.01.01",
        "value": 1138101.02
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.01.01",
        "value": 1899914.26875
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.01.01",
        "value": 1122211.3875
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.01.01",
        "value": 80827.72874999998
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.01.01",
        "value": 822615.5000000001
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.01.01",
        "value": 2473500.75
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.01.01",
        "value": 834808
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.01.01",
        "value": 515932.6725
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.01.01",
        "value": 860146.5
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.01.01",
        "value": 1672122.9000000004
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.01.01",
        "value": 1704798.2175
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.01.01",
        "value": 649802.7500000001
      }
    ]
  },
  {
    "fileName": "Confinamento.xlsx",
    "departamento": "Confinamento",
    "atividade": "PECUARIA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.01.01",
        "value": 450000
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.01.01",
        "value": 20092481.344736252
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.01.01",
        "value": 30291748.39828875
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.01.01",
        "value": 30847253.440814354
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.01.01",
        "value": 32011346.8289706
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.01.01",
        "value": 31488046.98584545
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.01.01",
        "value": 31090903.05552
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.01.01",
        "value": 32265080.690014068
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.01.01",
        "value": 32933547.64809084
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.01.01",
        "value": 31138023.926163003
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.01.01",
        "value": 26867814.054004002
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.01.01",
        "value": 26882676.21398334
      }
    ]
  },
  {
    "fileName": "JOIA - PECUARIA.xlsx",
    "departamento": "JOIA - PECUARIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.01.01",
        "value": 2225153.361756923
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.01.01",
        "value": 1938894.1606802274
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.01.01",
        "value": 6459670.894950001
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.01.01",
        "value": 6463244.116875
      }
    ]
  },
  {
    "fileName": "PORTEIRAS - PECUARIA.xlsx",
    "departamento": "PORTEIRAS - PECUARIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.01.01",
        "value": 0
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.01.01",
        "value": 642768.1871333941
      }
    ]
  }
];
