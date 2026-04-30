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

export const ORCADO_RECEITA_LATEX_IMPORT_BATCHES: OrcadoImportBatch[] = [
  {
    "fileName": "Bandeirantes Seringal.xlsx",
    "departamento": "Bandeirantes Seringal",
    "atividade": "SERINGAL",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.03",
        "value": 2390905.8879405814
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.03",
        "value": 2406288.1856652494
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.03",
        "value": 2315787.5715045184
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.03",
        "value": 1905909.0228794804
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.03",
        "value": 262090.6931133003
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.03",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.03",
        "value": 835412.9757665321
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.03",
        "value": 1318376.167153481
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.03",
        "value": 1696448.6879979554
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.03",
        "value": 2112055.931586819
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.03",
        "value": 1815169.2817608397
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.03",
        "value": 2541541.2672795025
      }
    ]
  },
  {
    "fileName": "Covoa Seringal.xlsx",
    "departamento": "Covoa Seringal",
    "atividade": "SERINGAL",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.03",
        "value": 822780.5348648184
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.03",
        "value": 828074.0327031019
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.03",
        "value": 796930.1285869515
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.03",
        "value": 655878.9508018618
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.03",
        "value": 289366.9891990357
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.03",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.03",
        "value": 135605.38013996754
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.03",
        "value": 423210.4051582151
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.03",
        "value": 610966.3362037846
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.03",
        "value": 677988.6263065393
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.03",
        "value": 582685.3869964718
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.03",
        "value": 815857.2160584748
      }
    ]
  },
  {
    "fileName": "Esplanada Seringal.xlsx",
    "departamento": "Esplanada Seringal",
    "atividade": "SERINGAL",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.03",
        "value": 508275.8304730364
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.03",
        "value": 511762.6061913227
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.03",
        "value": 491248.41841561865
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.03",
        "value": 398339.374762128
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.03",
        "value": 156921.49811052927
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.03",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.03",
        "value": 89321.95
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.03",
        "value": 245082.86
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.03",
        "value": 368755.87
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.03",
        "value": 412902.8
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.03",
        "value": 350127.48
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.03",
        "value": 503715.51
      }
    ]
  },
  {
    "fileName": "Impostos.xlsx",
    "departamento": "Impostos",
    "atividade": "SERINGAL",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.2.01.01",
        "value": -1156616.0105473883
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.2.01.01",
        "value": -1164090.4110802643
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.2.01.01",
        "value": -1120115.3268102615
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.2.01.01",
        "value": -920951.5544601574
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.2.01.01",
        "value": -282373.5020047591
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.2.01.01",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.2.01.01",
        "value": -377273.68707551114
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.2.01.01",
        "value": -642961.4991516585
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.2.01.01",
        "value": -845649.4603051408
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.2.01.01",
        "value": -1033131.4711682366
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.2.01.01",
        "value": -887183.1160960668
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.2.01.01",
        "value": -1244264.840053096
      }
    ]
  },
  {
    "fileName": "Porteiras Seringal.xlsx",
    "departamento": "Porteiras Seringal",
    "atividade": "SERINGAL",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.03",
        "value": 4351841.560091455
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.03",
        "value": 4379839.869378974
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.03",
        "value": 4215113.881666547
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.03",
        "value": 3469067.5770029915
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.03",
        "value": 1179360.4602475213
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.03",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.03",
        "value": 1580253.6360650458
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.03",
        "value": 2491839.3678596523
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.03",
        "value": 3206427.5216945997
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.03",
        "value": 3991959.3880498586
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.03",
        "value": 3430819.2064690324
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.03",
        "value": 4803721.989696507
      }
    ]
  },
  {
    "fileName": "Vera Cruz Seringal.xlsx",
    "departamento": "Vera Cruz Seringal",
    "atividade": "SERINGAL",
    "rows": [
      {
        "month": "2026-04",
        "grupoContabil": "3.1.02.03",
        "value": 95459.35011857131
      },
      {
        "month": "2026-05",
        "grupoContabil": "3.1.02.03",
        "value": 96073.50400540288
      },
      {
        "month": "2026-06",
        "grupoContabil": "3.1.02.03",
        "value": 92460.17490839008
      },
      {
        "month": "2026-07",
        "grupoContabil": "3.1.02.03",
        "value": 76095.35683811824
      },
      {
        "month": "2026-08",
        "grupoContabil": "3.1.02.03",
        "value": 25869.733889944655
      },
      {
        "month": "2026-09",
        "grupoContabil": "3.1.02.03",
        "value": 0
      },
      {
        "month": "2026-10",
        "grupoContabil": "3.1.02.03",
        "value": 38070.79657671951
      },
      {
        "month": "2026-11",
        "grupoContabil": "3.1.02.03",
        "value": 60080.023087075075
      },
      {
        "month": "2026-12",
        "grupoContabil": "3.1.02.03",
        "value": 77309.25276130988
      },
      {
        "month": "2027-01",
        "grupoContabil": "3.1.02.03",
        "value": 96248.9859058242
      },
      {
        "month": "2027-02",
        "grupoContabil": "3.1.02.03",
        "value": 82719.4962046404
      },
      {
        "month": "2027-03",
        "grupoContabil": "3.1.02.03",
        "value": 115821.16077279649
      }
    ]
  }
];
