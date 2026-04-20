import type { AtividadeKey, MonthKey } from '@/types/budget';

export interface OrcadoGrupoMonthValue {
  grupoContabil: string;
  month: MonthKey;
  value: number;
}

export interface OrcadoImportBatch {
  fileName: string;
  departamento: string;
  atividade: AtividadeKey;
  rows: OrcadoGrupoMonthValue[];
}

export const ORCADO_IMPORT_BATCHES: OrcadoImportBatch[] = [
  {
    "fileName": "Orçamento Bandeirantes Seringal.xlsx",
    "departamento": "BANDEIRANTES SERINGAL",
    "atividade": "SERINGAL",
    "rows": [
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 724852.1322768652
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 785265.0894083283
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 725014.5430336293
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 728569.1231332476
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 488836.2897228446
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 901549.0261795853
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 786768.9312721639
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 832695.5330038962
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 634800.7499603245
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 864755.6146537164
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 674694.4250996772
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 771261.8454241747
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 129522.38
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 44677.85999999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 22234
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 29805.36
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 15272.41
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 1704.8
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 1335.6000000000001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 14723.119999999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 398506.43
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 43840.31999999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 39519.020000000004
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 26799.719999999998
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 25792.219999999998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 152157.37796468614
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 156428.74296864413
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 167911.43057124695
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 173549.33635124692
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 168786.89777124694
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 170801.76631447292
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 167306.20096685292
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 236255.2326863429
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 200873.6188588729
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 152428.51381348423
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 153117.95453740825
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 161352.89919790826
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 66573.90983009565
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 16604.163939972364
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 16570.945065867258
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 15764.790428363458
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 47313.706447266806
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 12358.176
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 13982.385282192316
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 69797.11395739675
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 15656.410269441474
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 19131.19012136713
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 16031.917840092816
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 17502.03039735391
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 48005.79955
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 46435.79955
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 47813.904795
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 47813.904795
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 48813.904795
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 48005.145
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 48653.145
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 49005.145
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 49005.145
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 46889.390544999995
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 37847.077991
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 51842.438035
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 51323.53521
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 34823.22521
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 26115.50111
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 18151.261110000003
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 17679.53111
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 18906.5166
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 17919.436410000002
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 17603.68029
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 17909.421990000003
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 30596.357676
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 20193.584796
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 18449.143512000002
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-04",
        "value": 4079.43
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-05",
        "value": 4079.43
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-06",
        "value": 4160.34
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-07",
        "value": 4079.43
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-08",
        "value": 4079.43
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-09",
        "value": 4151.07
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-10",
        "value": 4151.07
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-11",
        "value": 4151.07
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-12",
        "value": 4151.07
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-01",
        "value": 4151.07
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-02",
        "value": 4151.07
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-03",
        "value": 4151.07
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-03",
        "value": 0
      }
    ]
  }
];
