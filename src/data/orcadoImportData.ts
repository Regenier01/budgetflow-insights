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
  },
  {
    "fileName": "Orçamento Covoa Seringal.xlsx",
    "departamento": "COVOA SERINGAL",
    "atividade": "SERINGAL",
    "rows": [
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 255537.71016862232
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 274672.3562892641
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 253126.75592017124
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 275793.7549307741
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 210451.11295678097
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 162356.03173237157
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 233887.40285043773
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 206092.22191846283
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 223864.15857124177
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 270995.6219374277
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 321881.8344123594
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 350137.13256445725
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 12515.88
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 12515.88
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 12515.88
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 12515.88
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 12515.88
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 13029
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 13029
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 13029
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 13029
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 13029
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 13029
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 13029
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 7481.910000000001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 19886.31
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 25448.859999999997
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 17798.690000000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 12195.71
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 8419.51
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 11283.074999999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 8455.269999999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 12232.77
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 20675.41
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 14728.51
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 11545.57
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 48852.789006711384
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 54880.00413707879
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 56428.709470621296
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 61998.4025786213
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 57947.8619786213
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 53143.00344807848
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 54204.483140297474
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 85004.27768296847
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 68055.41487998747
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 52477.8726496147
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 58704.07712288154
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 51523.41135790356
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 20158.72934583774
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 6106.777427178949
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 6302.475274906531
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 6034.65096087134
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 5338.727564531253
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 4771.649999999999
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 5028.107324247328
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 16372.026858119323
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 5927.111469347964
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 6246.722670282756
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 6059.095133065066
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 6518.150421764223
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 19026.031000000003
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 19371.6785
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 19382.542
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 19382.542
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 19453.892
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 24427.566
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 19810.134
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 19010.144
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 19010.144
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 19366.869423999997
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 19616.869423999997
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 19768.905832
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 7760.799825
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 7884.016125
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 7959.8966055
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 7927.7566055
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 7927.7566055
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 7935.746999999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 7935.746999999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 7935.746999999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 7935.746999999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 14521.901806999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 8021.901807
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 8072.409045
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-03",
        "value": 0
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
  },
  {
    "fileName": "Orçamento Esplanada Seringal.xlsx",
    "departamento": "ESPLANADA SERINGAL",
    "atividade": "SERINGAL",
    "rows": [
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 153252.81098190183
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 161339.17124489983
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 153940.61159554066
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 148890.53576055868
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 113822.34546180481
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 83103.14136641816
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 152382.22519367552
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 117385.04951011586
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 132926.54736603505
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 173797.06307893532
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 192619.1175664533
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 215725.28057910566
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 18446.45
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 3385.1
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 8433.9
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 9360
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 7996.7
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 5606.8
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 22470.28
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 3301.605
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 3523.02
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 2850.42
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 4835.719999999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 9934.4
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 4527.42
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 36020.336015643334
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 36626.16197343773
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 37766.4354266249
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 40142.215720184904
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 37099.3967135849
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 38487.23064258178
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 39238.270642581774
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 56700.50368245778
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 47084.35237022178
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 38465.871724716024
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 38091.96118190471
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 39891.34593173671
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 8873.647129163004
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 3690.0490832020023
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 3419.9926699717876
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 3244.608467697612
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 2788.8844601491273
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 9540.08
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 2704.059211006672
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 8306.96579227545
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 3292.905746893063
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 3419.997437550456
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 3297.1016467694644
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 3597.782258759932
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 10946.35785
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 11047.65685
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 10943.28685
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 10905.62685
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 10905.62685
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 11635.280000000002
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 11635.280000000002
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 11532.879999999997
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 11532.879999999997
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 11864.78064
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 11864.78064
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 12053.08064
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 3758.6285599999997
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 3819.6913099999997
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 3819.6913099999997
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 3819.6913099999997
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 3819.69131
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 3873.556
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 3873.556
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 3873.556
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 3873.556
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 6509.128256
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 3909.128256
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 3965.577522
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-04",
        "value": 820.93
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-05",
        "value": 820.93
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-06",
        "value": 857.8718499999999
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-07",
        "value": 857.8718499999999
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-08",
        "value": 857.8718499999999
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-09",
        "value": 854.59
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-10",
        "value": 854.59
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-11",
        "value": 854.59
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-12",
        "value": 854.59
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-01",
        "value": 854.59
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-02",
        "value": 854.59
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-03",
        "value": 854.59
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-04",
        "value": 6785.61345
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-05",
        "value": 6785.61345
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-06",
        "value": 6785.61345
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-07",
        "value": 6785.61345
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-08",
        "value": 6785.61345
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-09",
        "value": 6759.64
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-10",
        "value": 6759.64
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-11",
        "value": 6759.64
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-12",
        "value": 6759.64
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-01",
        "value": 7036.78524
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-02",
        "value": 7036.78524
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-03",
        "value": 7036.78524
      }
    ]
  },
  {
    "fileName": "Orçamento Porteiras Seringal.xlsx",
    "departamento": "PORTEIRAS SERINGAL",
    "atividade": "SERINGAL",
    "rows": [
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 1278679.691159608
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 1325502.615173957
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 1298787.6696904793
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 1224098.0393694048
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 1194336.131980239
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 1377385.8250236525
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 1321532.6873170983
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 1412283.9021664239
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 1145461.7588378615
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 1256419.4443020409
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 1211086.5847834675
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 1381694.970686186
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 131848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 131848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 131848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 131848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 131848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 146848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 146848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 146848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 146848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 146848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 146848.37
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 146848.37
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 92790
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 104422.5
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 29267.5
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 28870
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 32876.8
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 15380
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 38928.3
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 467570.3
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 72240.5
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 124536.47
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 94854.1
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 78751.90000000001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 249594.37030072394
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 237622.66772072396
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 332428.4511817239
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 224284.57545072393
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 218483.07306519654
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 242858.13256534972
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 259440.6843019497
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 274129.07114760973
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 294277.77241836314
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 249076.15834715214
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 257587.3261032121
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 250728.96876249212
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 185825.72301766538
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 221015.3091429823
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 185568.3853762178
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 144164.23810578603
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 139854.7388455085
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 138173.77000000002
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 141270.0257241106
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 227647.23301452943
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 144479.6310254748
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 151981.1902264355
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 150836.64720407547
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 153636.9212755114
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 82166.90489
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 104308.26488999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 77605.38489
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 78122.42489
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 52598.044934
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 69390.54500000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 69739.73500000002
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 90460.99500000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 72494.70500000002
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 76903.743145
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 71732.98314499999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 93158.812095
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 40756.47962
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 45756.47962
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 45756.47962
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 40756.47962
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 163800.23442999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 36718.1195
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 36695.303
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 36894.41007
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 36917.22657
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 37451.355423
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 37229.431853
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 37507.784843
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-04",
        "value": 2598.49
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-05",
        "value": 2598.49
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-06",
        "value": 2598.49
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-07",
        "value": 2598.49
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-08",
        "value": 2598.49
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-09",
        "value": 2704
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-10",
        "value": 2814.8639999999996
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-11",
        "value": 2814.8639999999996
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-12",
        "value": 2814.8639999999996
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-01",
        "value": 2814.8639999999996
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-02",
        "value": 2704
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-03",
        "value": 2704
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-04",
        "value": 259.45
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-05",
        "value": 259.45
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-06",
        "value": 259.45
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-07",
        "value": 259.45
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-08",
        "value": 259.45
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-09",
        "value": 270
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-10",
        "value": 270
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-11",
        "value": 270
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-12",
        "value": 270
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-01",
        "value": 270
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-02",
        "value": 270
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-03",
        "value": 270
      }
    ]
  },
  {
    "fileName": "Orçamento Vera Cruz Seringal.xlsx",
    "departamento": "VERA CRUZ SERINGAL",
    "atividade": "SERINGAL",
    "rows": [
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 22628.445513381506
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 22667.944093553175
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 22453.913991306534
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 21134.968892017157
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 16883.183793259144
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 15073.47887136573
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 34590.14726723102
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 19905.26125522835
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 21304.32480081027
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 27482.342665075106
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 29484.296165596916
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 32408.13900522617
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 4465.62
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 4465.62
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 4465.62
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 4465.62
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 4465.62
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 4666.58
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 4666.58
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 4666.58
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 4666.58
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 4666.58
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 4666.58
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 4666.58
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 1105.05
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 855.05
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 2622.3300000000004
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 1264.41
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 355.04999999999995
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 6444.235000000001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 1092.26
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 16864.405
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 372.805
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 610
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 345.1995
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 1301.255
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 2862.747463258055
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 3020.2801931166555
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 1745.631324123972
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 3925.5525161239716
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 2350.480546123972
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 2500.7165838614974
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 3936.824313861497
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 5284.620749708015
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 2915.6892581715174
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 1913.2890518260162
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 1780.7918619615048
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 1944.2385195159804
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 858.5157354374255
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 809.6818748914565
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 809.9271499208398
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 778.8540582756273
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 683.4869495118841
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 705.9200000000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 1760.0578400453246
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 1670.6283878815316
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 852.7128018362123
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 468.3180334577256
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 817.1753225074483
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 882.6048595462162
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 1385.745
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 1385.745
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 1393.76525
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 1393.76525
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 1393.76525
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 1448.15
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 1577.75
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 1448.15
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 1448.15
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 1448.15
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 1448.15
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 1448.15
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 408.76765
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 420.2881
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 420.2881
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 420.0082
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 420.0082
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 420.37999999999994
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 420.38
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 420.38
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 420.38
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 426.2901499999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 426.2901499999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 426.2901499999999
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-04",
        "value": 101
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-05",
        "value": 101
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-06",
        "value": 105.54499999999999
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-07",
        "value": 105.54499999999999
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-08",
        "value": 105.54499999999999
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-09",
        "value": 105.54
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-10",
        "value": 105.54
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-11",
        "value": 105.54
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-12",
        "value": 105.54
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-01",
        "value": 105.54
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-02",
        "value": 105.54
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-03",
        "value": 105.54
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
  },
  {
    "fileName": "Pessoal.xlsx",
    "departamento": "PESSOAL",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 40628.823047916674
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 40628.823047916674
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 62240.38804791668
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 40628.823047916674
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 40628.823047916674
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 40628.823047916674
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 40628.823047916674
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 40628.823047916674
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 40628.823047916674
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 42674.02603870416
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 43220.99109041999
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 43795.30439472163
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 561.3278
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 561.89419
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 562.4888994999999
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 563.1133444750001
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 3435.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 2210.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 2210.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 2210.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 2210.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 4910.639999999999
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 2210.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 3110.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 2210.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 2290.672
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 2290.672
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 2290.672
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.07",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-04",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 155
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 840
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.03",
        "month": "2027-03",
        "value": 0
      }
    ]
  }
];
