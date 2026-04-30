import type { AtividadeKey, MonthKey } from '@/types/budget';

type OrcadoImportAtividadeKey = AtividadeKey;

export interface OrcadoGrupoMonthValue {
  grupoContabil: string;
  month: MonthKey;
  value: number;
}

export interface OrcadoReceitaAgricolaImportBatch {
  fileName: string;
  cultura: string;
  atividade: OrcadoImportAtividadeKey;
  rows: OrcadoGrupoMonthValue[];
}

export const ORCADO_RECEITA_AGRICOLA_IMPORT_BATCHES: OrcadoReceitaAgricolaImportBatch[] = [
  {
    "fileName": "Receita Girassol.xlsx",
    "cultura": "Girassol",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.01",
        "value": 201250
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.01",
        "value": 0
      }
    ]
  },
  {
    "fileName": "Receita Milho.xlsx",
    "cultura": "Milho",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.01",
        "value": 3919815.6799999997
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.01",
        "value": 0
      }
    ]
  },
  {
    "fileName": "Receita Soja.xlsx",
    "cultura": "Soja",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.01",
        "value": 5281490.97125
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.01",
        "value": 3359986.896
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.01",
        "value": 7903714.093488866
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.01",
        "value": 18462428.838246398
      }
    ]
  },
  {
    "fileName": "Receita Sorgo.xlsx",
    "cultura": "Sorgo",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.01",
        "value": 893784.2275999999
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.01",
        "value": 0
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.01",
        "value": 0
      }
    ]
  }
];
