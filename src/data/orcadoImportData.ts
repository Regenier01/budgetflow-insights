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
    "fileName": "Compras.xlsx",
    "departamento": "COMPRAS",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 36485.44
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 36485.44
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 65673.79
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 36485.44
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 36485.44
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 36485.44
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 36485.44
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 36485.44
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 36485.44
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 38309.71
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 38309.71
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 38309.71
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 5876.398154166665
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 5877.150554166667
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 5906.724054166666
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 5935.524254166667
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 12797.291654166667
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 10691.110354166667
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 5981.7759541666655
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 5870.358054166665
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 5870.358054166665
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 6459.26609
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 6036.20297
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 6013.61159
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
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 455
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 470
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 470
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 470
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 193.23000000000002
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 202
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 202
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 202
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
  },
  {
    "fileName": "Controladoria.xlsx",
    "departamento": "CONTROLADORIA",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 28246.0245
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 28246.0245
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 50733.904500000004
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 28246.0245
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 28246.0245
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 28246.0245
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 28246.0245
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 28246.0245
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 28246.0245
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 29658.325725
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 29658.325725
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 29658.325725
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 8195.6805
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 4760
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 4760
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
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 563.63
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 765
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 280
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 280
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
  },
  {
    "fileName": "Departamento Juridico.xlsx",
    "departamento": "DEPARTAMENTO JURIDICO",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 9700.846311111112
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 9700.846311111112
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 16158.686311111114
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 9700.846311111112
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 9700.846311111112
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 9700.846311111112
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 9700.846311111112
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 9700.846311111112
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 9700.846311111112
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 10131.457811111111
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 10131.457811111111
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 10131.457811111111
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 3142.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 3142.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 3142.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 3142.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 12172.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 3172.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 3272.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 5272.639999999999
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 3272.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 3293.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 3293.64
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 3293.64
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 2491.3333333333335
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 4175.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 2491.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 11551.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 1733.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 3170.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 2828.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 2417.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 2417.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 4617.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 1733.33
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 1733.33
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
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 140
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 120
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-04",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-05",
        "value": 2250
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-06",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-07",
        "value": 1400
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-09",
        "value": 1600
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-10",
        "value": 1100
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-11",
        "value": 900
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-12",
        "value": 900
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-01",
        "value": 900
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
      }
    ]
  },
  {
    "fileName": "Diretoria.xlsx",
    "departamento": "DIRETORIA",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 119407.96166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 119407.96166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 182664.87166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 119407.96166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 119407.96166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 119407.96166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 119407.96166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 119407.96166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 119407.96166576198
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 124781.32563943001
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 124781.32563943001
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 124781.32563943001
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 17224.7
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 4569.9
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 7390.82
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 6052.78
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 7702.78
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 4118.99
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 4157.03
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 7702.78
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 6052.78
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 6052.78
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 11289.16
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 4188.32
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 6209.13
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 6209.13
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
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 3110.91
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 3235.34
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 3235.34
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 3235.34
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 994.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 70.64
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 70.64
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 70.64
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 994.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 70.64
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 70.64
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 994.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 70.64
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 70.64
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 70.64
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 994.42
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-04",
        "value": 1043.33
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-06",
        "value": 1043.33
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-08",
        "value": 4371.33
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-10",
        "value": 1043.33
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-12",
        "value": 1043.33
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-02",
        "value": 1043.33
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-03",
        "value": 3328
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
  },
  {
    "fileName": "Fiscal.xlsx",
    "departamento": "FISCAL",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 22923.85
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 22923.85
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 41262.92999999999
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 22923.85
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 22923.85
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 22923.85
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 22923.85
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 22923.85
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 22923.85
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 24070.0425
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 24070.0425
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 24070.0425
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 10000
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 7718
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 8124
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 8124
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 8124
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 8124
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 8124
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 8124
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 8124
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 8124
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 8162.03
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 8162.03
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 8162.03
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
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 202.67
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 400
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-05",
        "value": 1500
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-07",
        "value": 1500
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-09",
        "value": 1500
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-11",
        "value": 1500
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-01",
        "value": 1500
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-03",
        "value": 1500
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
  },
  {
    "fileName": "Gestao Administrativa.xlsx",
    "departamento": "GESTAO ADMINISTRATIVA",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 36976.74
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 36976.74
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 66558.13
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 36976.74
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 36976.74
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 36976.74
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 23516.530000000002
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 22183.86
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 23608.95
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 36976.74
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 36976.74
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 36976.74
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 1084.88
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 990
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 990
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
  },
  {
    "fileName": "Governancia Corporativa.xlsx",
    "departamento": "GOVERNANCIA CORPORATIVA",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 4084.97
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 4084.97
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 7352.95
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 4084.97
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 4084.97
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 4084.97
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 4084.97
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 4084.97
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 4084.97
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 4289.22
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 4289.22
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 4289.22
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 47500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 37500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 47500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 37500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 37500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 53200
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 37500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 47500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 37500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 47500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 37500
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 37500
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 13239.729999999998
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 7834.73
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 7405.7699999999995
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 6897.7699999999995
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 7539.73
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 7755.7699999999995
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 13184.729999999998
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 7539.73
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 7405.7699999999995
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 6995.160000000001
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 7479.200000000002
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 7424.200000000002
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
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 507.18
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 530
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 530
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 530
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 385.13
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 369.93
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 369.93
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 385.13
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 385.13
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 385.13
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 369.93
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 369.93
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 385.13
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 369.93
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 369.93
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 385.13
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
        "value": 3500
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
        "value": 3500
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
  },
  {
    "fileName": "Marketing Interno.xlsx",
    "departamento": "MARKETING INTERNO",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 5784.8
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 5839.8
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 5549.9
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 200
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 30
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-04",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 100
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 810
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 710
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 10
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 10
      }
    ]
  },
  {
    "fileName": "Organizacao Predial.xlsx",
    "departamento": "ORGANIZACAO PREDIAL",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 19601.706000305556
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 19445.378502446667
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 28137.164502446667
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 19445.378502446667
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 19445.378502446667
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 19445.378502446667
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 19445.378502446667
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 19445.378502446667
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 19445.378502446667
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 20356.340467421673
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 20396.91640492167
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 20439.52113929667
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 135
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 3567.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 1632.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 1632.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 1632.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 1632.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 1632.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 1632.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 1632.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 1632.184
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 1680.2032
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 1680.2032
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 1680.2032
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
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 20
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 2265
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 2534
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 1805
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 2265
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 2355
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 2255
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 1805
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 1805
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 1805
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 1805
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 1805
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 1805
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
  },
  {
    "fileName": "Rateio Desenvolvimento Humano.xlsx",
    "departamento": "RATEIO DESENVOLVIMENTO HUMANO",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 102408.88672277778
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 102408.88672277778
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 223864.74572277776
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 102408.88672277778
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 102408.88672277778
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 102408.88672277778
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 102408.88672277778
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 102408.88672277778
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 102408.88672277778
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 111447.6668900375
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 108091.5998900375
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 114651.1853900375
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 982.6556
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 983.78838
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 984.977799
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 986.22668895
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 27257.3527
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 25337.3527
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 22837.3527
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 31837.3527
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 33287.3527
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 43737.3527
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 80837.35269999999
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 24637.3527
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 22837.3527
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 23090.692134999998
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 23095.68791425
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 23100.9334824625
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
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 950
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 2652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 1652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 1652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 1652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 1652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 1652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 1652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 1652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 652
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 652
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
      }
    ]
  },
  {
    "fileName": "Rateio Financeiro.xlsx",
    "departamento": "RATEIO FINANCEIRO",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 25671.42823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 25671.42823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 40454.20823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 25671.42823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 25671.42823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 25671.42823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 25671.42823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 25671.42823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 25671.42823155555
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 26814.437275888886
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 26814.437275888886
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 26814.437275888886
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 4605.8775000000005
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 4836.171375000001
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 4836.171375000001
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 4836.171375000001
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 3171
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 2421
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 2421
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 2421
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 2421
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 2521
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 3271
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 2721
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 2721
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 2635.2349999999997
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 2770.174575
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 2606.686430875
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
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 153.08
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 315.9
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 315.9
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
  },
  {
    "fileName": "Rateio Informacao e Tecnologia.xlsx",
    "departamento": "RATEIO INFORMACAO E TECNOLOGIA",
    "atividade": "DESP_ADM_TRIB",
    "rows": [
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-04",
        "value": 39391.35
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-05",
        "value": 39391.35
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-06",
        "value": 70904.43
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-07",
        "value": 39391.35
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-08",
        "value": 39391.35
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-09",
        "value": 39391.35
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-10",
        "value": 39391.35
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-11",
        "value": 39391.35
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2026-12",
        "value": 39391.35
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-01",
        "value": 41360.9175
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-02",
        "value": 41360.9175
      },
      {
        "grupoContabil": "3.4.01.01",
        "month": "2027-03",
        "value": 41360.9175
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-04",
        "value": 69618.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-05",
        "value": 34618.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-06",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-07",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-08",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-09",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-10",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-11",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2026-12",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-01",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-02",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.02",
        "month": "2027-03",
        "value": 32118.45
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-04",
        "value": 5877.93658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-05",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-06",
        "value": 8741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-07",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-08",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-09",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-10",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-11",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2026-12",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-01",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-02",
        "value": 5741.96658
      },
      {
        "grupoContabil": "3.4.01.10",
        "month": "2027-03",
        "value": 5741.96658
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
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-05",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-06",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-07",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-08",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-09",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-10",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-11",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2026-12",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-01",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-02",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.05",
        "month": "2027-03",
        "value": 1212.89
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-04",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-05",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-06",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-07",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-08",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-09",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-10",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-11",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2026-12",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-01",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-02",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.04",
        "month": "2027-03",
        "value": 639.42
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-04",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-05",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-06",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-07",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-08",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-09",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-10",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-11",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2026-12",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-01",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-02",
        "value": 300
      },
      {
        "grupoContabil": "3.4.01.06",
        "month": "2027-03",
        "value": 300
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
  },
  {
    "fileName": "BANDEIRANTES - PECUÁRIA.xlsx",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 205443.66292773574
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 209032.85229364404
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 220865.4955753287
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 214882.5823931013
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 235003.5538931013
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 237564.23937990054
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 213511.5777891233
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 293466.51490571315
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 372298.73953363043
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 346465.813487458
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 374187.83746072475
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 258556.56906894984
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 172137.92990000008
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 200814.94639999993
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 231929.4336
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 146133.5166
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 168283.07300000006
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 80902.1436
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 194762.94080000007
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 220549.93010000006
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 180787.2
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 212298.44900000002
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 210507.55
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 189281.609
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 82101
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 82100
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 22909.5405
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 35542.8465
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 52321.248
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 26906.0925
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 22522.212
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 62098.11299999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 45925.026000000005
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 92333.16749999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 230773.7355
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 126421.491
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 77204.7045
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 71499.1935
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 54362.3325
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 51666.447
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 29809.562999999995
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 38403.33000000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 49417.48349999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 52549.6545
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 48333.516
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 38724.75600000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 36664.005
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 29632.8585
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 35104.6395
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 41294.84099999999
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 163945.19006569998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 165979.528652525
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 231327.13740147508
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 215102.1775360875
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 155471.346678275
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 198932.93561872502
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 198754.37880095
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 177553.81318592498
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 205946.16284908753
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 142679.399285475
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 247915.66174995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 234175.543130675
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 65741.84400000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 94298.01000000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 83721.04499999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 83770.281
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 103808.43900000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 80745.89249999999
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 75706.365
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 69117.67799999999
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 53814.6105
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 96384.36149999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 83785.0125
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 59727.066
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
    "fileName": "CANADÁ - PECUÁRIA.xlsx",
    "departamento": "CANADÁ - PECUÁRIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 15630.977412990125
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 24036.91115068138
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 10438.090823747376
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 10188.715846902376
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 9833.520572455376
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 9054.650765133378
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 10661.932334070001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 15942.027317208
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 20301.934776424998
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 30793.423441675004
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 28365.829046925002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 34512.845452425005
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 3135
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 1375.3558500000001
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 1396.4230500000003
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 1393.2253500000004
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 1391.6160500000005
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 1384.6981500000004
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 1398.9206000000006
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 1401.2091500000006
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 1402.7871000000007
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 1402.7871000000007
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 1333.2005500000002
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 1333.2005500000002
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 1313.2410500000003
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 449.35
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 2271.0566999999996
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 877.0267
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 524.8617
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 345.12170000000003
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 940.2492
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 183.9409
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 289.4859
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 178.9667
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 178.9667
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 148.3691
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 178.9667
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 152.3192
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 19891.046375899998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 20979.604658724995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 35684.682819775
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 15074.309562337497
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 18577.575740974997
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 15887.644532625
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 24457.78052335
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 14385.362234325003
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 14673.161423137499
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 19760.119897875
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 16764.373309950002
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 21366.805585775
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 3702.67535
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 11904.54595
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 3556.2604
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 18963.374649999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-04",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-05",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-06",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-07",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-08",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-09",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-10",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-11",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-12",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-01",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-02",
        "value": 32369
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-03",
        "value": 32369
      }
    ]
  },
  {
    "fileName": "CENTRO COMERCIAL DE TOUROS.xlsx",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 62909.7525
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 32686.8255
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 3716.0235000000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 4847.969
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 194699.42300000004
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 145890.1815
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 199511.79150000005
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 144857.7165
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 93850.6375
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 75816.8385
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 85175.3135
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 77830.85250000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 10720.819999999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 8684.300000000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 28939.860000000004
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 23716.03
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 21223.079999999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 20962.61
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 22095.129999999994
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 25619.58
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 16187.939999999999
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 19834.23
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 20093.679999999997
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 20309.499999999996
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 17500
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 745.626
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 82.6875
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 162.4875
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 8807.925
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 2500
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 5763.3240000000005
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 3979.3925
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 94.24799999999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 1089.4064999999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 1991.703
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 6669.558000000001
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 786.9435000000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 844.2124999999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 664.4715
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 807.5760000000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 828.7125
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 1089.4799999999998
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 1891.7125
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 1164.66
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 652.995
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 200.99100000000004
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 4056.6775
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 917.4249999999997
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 954.3974999999998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 14145.063505899998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 17368.323293925
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 26755.674796575007
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 11982.819338737498
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 10005.716254175
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 10735.015625824999
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 25305.891282149998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 22356.973262725
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 9576.259302737499
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 16112.808163075
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 13283.565101150003
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 18928.571252975
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 1421.5739999999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 1185.7649999999999
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 4790.1525
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 3238.3889999999997
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 10706.807999999999
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 17207.1585
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 7920.486
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 2268.5879999999997
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 1971.4905
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 276.3285
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 175.9065
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
    "fileName": "CODORA.xlsx",
    "departamento": "CODORA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 24364.3703067588
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 35028.28980045112
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 16724.0666435504
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 18199.315382004752
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 16839.0146593941
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 13190.11713044595
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 13530.7955880072
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 26713.8596959008
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 27588.772898874995
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 31084.62111945
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 43739.374348025
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 34233.120646175004
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 21166.349599999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 20546.90495
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 28824.109599999996
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 19474.7663
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 18877.4652
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 13490.594700000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 21722.885249999996
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 21415.9583
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 21882.3
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 26637.31125
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 28098.158550000004
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 20453.69095
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 5244.7400499999985
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 5244.7400499999985
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 5244.74005
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 5244.7400499999985
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 5244.7400499999985
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 5244.7400499999985
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 5244.7400499999985
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 5244.7400499999985
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 5244.7400499999985
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 5244.74005
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 5244.74005
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 5244.74005
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 1434.3461
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 547.79945
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 741.95
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 436.79955
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 748.87835
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 600.3525000000001
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 529.63735
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 1305.40355
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 760.70775
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 1736.1839
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 709.04295
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 429.74580000000003
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 2281.57985
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 2034.2387999999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 1926.5411
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 4113.2036
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 3917.0466499999998
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 3892.7713
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 3398.3818
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 1801.3814499999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 2270.785
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 1903.5615500000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 1750.7721000000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 1523.4846
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 19164.763941299992
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 18057.614165325
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 28677.016901675
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 16493.1709679875
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 13224.978636075
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 18435.877100125
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 18806.171942949997
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 17812.845737525
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 32028.5292165875
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 32425.247861875006
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 36316.71608515001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 21536.709179675
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 2372.87105
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 6200.047699999999
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 1688.04075
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 7153.3907500000005
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 5864.383250000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 1913.2591499999999
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 6871.3766
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 11070.48965
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 5434
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 12647.958950000002
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 1334.3082499999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 2873.4574
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
    "fileName": "CONFINAMENTO - TRANSPORTE DE GADO.xlsx",
    "departamento": "CONFINAMENTO - TRANSPORTE DE GADO",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 255226.86666666667
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 152935
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 255115.13333333333
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 159918.3333333333
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 159289.83333333334
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 139666.66666666666
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 157125
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 157125
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 243200
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 228000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 114000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 121600
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 136800
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 243200
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 323000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 304000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 266000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 152000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 171000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 171000
      }
    ]
  },
  {
    "fileName": "CONFINAMENTO.xlsx",
    "departamento": "CONFINAMENTO",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 6254192.279097488
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 7970355.442591806
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 8701173.953018175
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 9048029.221315444
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 8968620.890272528
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 8083473.701702292
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 8271854.577660144
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 7943055.165328128
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 7290504.339155075
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 7508838.003669772
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 6078887.847662557
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 7274174.423660808
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 154445.94000000003
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 207242.01610000004
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 244857.818
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 240237.5478
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 202976.23570000002
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 204379.2183
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 215157.31270000004
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 204187.00769999996
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 191622
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 153003.32179999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 108745.3433
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 158573.91940000004
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 41442.210000000036
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 43355.38845000019
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 44021.26245000018
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 44963.10005000019
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 45305.87050000017
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 46108.06475000017
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 47123.062800000196
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 48216.895650000195
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 48216.895650000195
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 48216.89565000021
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 48216.89565000021
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 48216.89565000021
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 84407.90999999997
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 55181.74749999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 64530.56829999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 88948.62349999997
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 102408.9132
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 89788.90799999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 81438.58469999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 71628.78305000001
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 78366.83855
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 72521.16079999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 69897.333
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 79345.8886
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 46617.85
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 32055.437700000006
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 56725.06620000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 45538.2158
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 41790.27105
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 75268.00600000002
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 56946.06279999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 59184.3065
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 47815.4171
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 39009.432
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 47607.064999999995
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 41566.64105
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 401530.1653780632
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 397623.6234031281
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 495411.13508542575
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 358561.97476672725
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 417864.80705735896
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 421597.9534644775
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 438242.7260332542
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 478050.6910201668
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 626328.1561004163
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 932606.0096299645
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 401420.66435168224
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 501299.9377717018
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 135202.52000000002
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 164481.8087
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 119588.28474999999
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 202780.94375000003
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 286757.26914999995
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 315263.89730000007
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 250862.75225
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 361644.2890500001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 207693.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 81099.74345
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 136390.6203
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 218162.21515
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
    "fileName": "COVOA - PECUARIA.xlsx",
    "departamento": "COVOA - PECUARIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 1086.14645925
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 6121.089888775
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 1671.2282627250001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 1272.2002002375002
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 3307.2147432
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 1055.4787094500002
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 5414.851125750001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 993.666754825
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 1019.5105193875
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 3117.536480775
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 1013.9288221500001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 1027.761832275
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 259.17045
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 2235.9864999999995
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 36.575
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 1780.0516822999998
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 2404.70765955
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 3016.0308422000007
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 1726.33255525
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 1842.1311018000001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 1811.8748681000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 2092.7077481000006
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 1740.7908818500007
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 1859.8566369500004
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 1682.5429333499999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 1729.1624795000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 1788.8637094
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 1599.686
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 799.843
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 1614.22195
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 853.3261
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 6424.3674
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 17029.4663
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 8526.24905
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 19715.189449999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 17956.93515
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 58035.80970000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 45453.42450000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 5540.37055
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 17974
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 61272.20605
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 2900.6483
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 3668.4516000000003
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
    "fileName": "GOTEJO - PECUÁRIA.xlsx",
    "departamento": "GOTEJO - PECUÁRIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 15000
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 15000
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 31707.7855125
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 95413.1477
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 110092.09350000003
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 138154.784
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 142472.121
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 7000
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 2902.3539
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 3231.223081
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 3554.722779
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 3759.7502795000005
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 3724.4661709999996
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 5376.660821
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 5659.6076140000005
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 5127.1407770000005
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 3615.9407755
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 3614.2832310000003
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 3392.6728860000003
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 3945.9932909999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
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
    "fileName": "JOIA - PECUÁRIA.xlsx",
    "departamento": "JOIA - PECUÁRIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 389501.4809598646
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 425541.5990442329
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 306550.7886525392
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 251921.51746700873
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 265614.33265919617
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 339580.8992103536
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 501209.23992751277
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 756284.9274746209
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 1046126.909038957
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 1054799.6712483568
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 808094.9398073572
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 636017.707130857
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 158037.57585
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 165618.46564999997
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 202522.43164999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 128636.20825000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 125408.62125
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 130572.90675000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 139121.42474999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 171799.24354999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 266738.16235
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 282222.76335
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 282572.35764999996
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 161172.7744
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 61233.22000000004
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 63811.83000000003
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 62252.44000000003
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 55346.50000000001
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 56298.760000000046
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 59622.93999999996
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 55331.90000000007
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 55599.50000000004
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 51705.030000000035
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 53540.92000000004
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 67754.97000000002
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 67339.93000000004
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 14421.909149999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 36561.69715
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 4503.14535
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 10503.451749999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 8581.3519
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 7315.595650000001
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 31977.480700000004
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 26516.94815
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 13879.59595
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 15850.068849999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 20974.28905
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 13196.27045
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 27861.643700000004
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 20903.072299999996
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 21335.430599999992
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 26400.6083
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 30480.654049999994
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 26044.775350000004
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 22997.9211
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 25068.034750000006
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 27131.4186
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 28299.2688
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 26035.7152
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 22912.9208
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 300123.05165629997
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 350791.59265282494
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 399533.573651675
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 293149.2960254875
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 345574.980586075
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 335928.879865125
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 273142.71548795
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 298281.856250025
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 304214.2485690875
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 394410.66788937495
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 436788.24097015004
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 377381.79285967496
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 144210
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 146300
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 31350
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 47025
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 52250
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 83600
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 83600
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 151525
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 177650
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 156750
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 219450
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 88825
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-04",
        "value": 21175.4829
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-05",
        "value": 21175.4829
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-06",
        "value": 21213.5
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-07",
        "value": 21213.5
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-08",
        "value": 21213.5
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-09",
        "value": 21213.5
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-10",
        "value": 21213.5
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-11",
        "value": 21213.5
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-12",
        "value": 21473.7677
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-01",
        "value": 21473.7677
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-02",
        "value": 21473.7677
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-03",
        "value": 21175.4829
      }
    ]
  },
  {
    "fileName": "PORTEIRAS - PECUÁRIA.xlsx",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 1989.0201039494998
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 2968.35724141225
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 2029.3184933045002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 2791.1471834340005
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 2790.4075077385005
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 2789.6678320430005
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 1909.5158161860002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 1909.8650710880001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 2416.3529875
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 4924.7165475
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 4925.4436675
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 1858.044915
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 6767.6917
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 6329.2410500000005
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 7832.745250000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 3537.7325499999997
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 5669.8356
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 6570.7928
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 6434.786050000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 8053.61645
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 6688
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 6697.237799999999
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 6316.80555
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 6127.012649999999
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 997.6719500000002
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 998.3930000000003
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 994.4011000000004
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 992.3947000000003
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 983.7421000000004
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 975.7374
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 1027.3604000000003
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 1075.6080500000007
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 1075.6080500000007
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 907.55115
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 927.65695
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 998.1944500000002
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 795.50625
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 795.50625
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 795.50625
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 795.50625
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 795.50625
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 797.59625
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 797.0215000000001
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 797.0215000000001
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 797.0215000000001
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 796.8125
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 796.82295
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 796.82295
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 1212.9837499999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 1378.19825
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 1202.53375
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 1436.90635
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 1285.6844
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 2947.2553000000003
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 2413.6887500000003
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 4377.53635
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 1182.104
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 1325.7706
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 2011.7817499999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 1453.02025
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 3148.403324799999
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 4386.487940625
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 4479.217000625001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 2565.6065762124995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 3374.707914625
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 3638.0089296749998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 4310.75566915
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 4569.4058401249995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 3530.2155451125
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 2980.015575675
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 4725.01609595
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 5855.698106225
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 783.75
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 783.75
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
    "fileName": "UNIÃO - PECUÁRIA.xlsx",
    "departamento": "UNIÃO - PECUÁRIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 7967.040985207401
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 15527.653627243484
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 8213.755696324155
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 8210.947793132655
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 6533.003833350642
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 6321.195930159141
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 5904.737823825193
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 10296.405622612694
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 6654.410651735002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 11273.0703049745
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 10962.199528214001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 10958.883701414
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 13439.62
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 10389.119999999999
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 14638
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 9893.65
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 5592.92
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 9053.419999999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 10071.45
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 9327.16
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 8148.7
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 8722.23
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 10004.83
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 9911.52
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 70.16
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 77.54945
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 75.77295
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 74.8847
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 71.42574999999998
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 68.2176
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 68.2176
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 68.2176
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 24.7038
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 24.7038
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 35.989799999999995
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 36.1988
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 402.5
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 393.18125
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 393.18125
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 393.18125
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 365.75
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 395.27125
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 394.6965
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 394.6965
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 393.59925
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 394.4875
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 394.49795
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 394.49795
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 419.5
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 229.63875000000004
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 255.76375000000004
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 229.63875000000004
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 20.9
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 229.63875000000004
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 237.5285
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 237.52849999999998
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 235.49075
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 248.1875
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 248.1875
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 274.3125
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 5140.634442099999
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 4936.140152825001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 11231.684249175001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 8624.1290631375
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 5251.281427575
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 10544.807231425
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 11179.18701635
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 5008.263577025
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 6092.4894861375
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 6401.562509175001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 4972.812601350001
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 6730.871804775
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-04",
        "value": 43080.91
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-05",
        "value": 46781.56
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-06",
        "value": 46781.56
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-07",
        "value": 46781.56
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-08",
        "value": 46781.560000000005
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-09",
        "value": 46781.560000000005
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-10",
        "value": 46781.56
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-11",
        "value": 46781.56
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2026-12",
        "value": 43080.91
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-01",
        "value": 43080.91
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-02",
        "value": 43080.91
      },
      {
        "grupoContabil": "4.1.01.03",
        "month": "2027-03",
        "value": 43080.91
      }
    ]
  },
  {
    "fileName": "VERA CRUZ - PECUÁRIA.xlsx",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 31106.291957447604
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 26076.1490851084
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 17960.4384417572
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 16952.112533651605
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 15943.786625546005
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 14935.460717440403
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 15955.917501641603
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 36902.791392688
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 45386.60022
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 55218.426011999996
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 60805.034395999995
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 62280.572988
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 17673.34305
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 18683.032500000005
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 21574.463900000002
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 22097.72675
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 18638.672250000003
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 13954.8673
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 16744.48435
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 15544.239150000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 20048.325
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 28940.4181
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 30403.961499999994
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 16285.959250000002
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 8918.165849999958
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 9212.552799999956
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 9445.556449999955
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 9664.327199999954
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 9708.582949999955
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 9795.328399999957
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 10895.295399999959
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 10215.846849999954
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 9953.625
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 8688.746549999994
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 8798.471549999997
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 8932.053899999963
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 1968.7695499999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 1920.1874999999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 2063.0181
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 1920.1874999999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 1956.0937
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 1914.6698999999999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 1981.4558499999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 2161.4152999999997
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 2022.0749999999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 2031.6994499999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 1980.3167999999998
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 1941.7353999999998
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 3653.2991
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 1016.1789
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 1159.60515
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 923.2783999999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 1806.1153
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 1081.98255
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 1260.6357500000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 2105.7585999999997
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 1413.885
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 1211.573
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 1596.5614500000001
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 1128.6731499999999
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 34860.556425899995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 35305.175258725
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 41046.954019775
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 30690.632812337495
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 26753.154140974995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 23063.722232624998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 40858.11502335
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 36798.490884324994
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 39822.1314231375
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 36492.691247874995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 34389.18655995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 57460.718935774996
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 19497.9862
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 41171.94455
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 18875.417
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 9169.728699999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 20672.4826
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 7813.632200000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 9454.58525
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 48853.321549999986
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 16908.1
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 608.3258499999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 2923.46065
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 6953.367300000001
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
    "fileName": "AROEIRA - SOJA.xlsx",
    "departamento": "AROEIRA - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 3127.4427499999997
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 260602.52999999997
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 197612.11619
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 48776.8035042
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 48290.26473999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 104264.69348499998
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 6027.628199999999
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 5540
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 5540
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
        "value": 259086.51141899996
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 3822
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 1277
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 1112
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 4224
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 3888
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 5050
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 432.4
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 33951.50093698154
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 28023.612808451056
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 32769.53564315306
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 25178.8229832054
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 28692.09931287354
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 36892.450274879295
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 30062.49306757906
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 46238.258131405
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 39517.45394414518
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 39163.94713745153
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 31746.87580543138
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 28818.871517678257
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 184
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 1321
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 138
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 3100
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 941.8
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 679.8
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 3439
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 2500
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 33073.9584
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 43084.11545
      }
    ]
  },
  {
    "fileName": "CANADÁ - SOJA.xlsx",
    "departamento": "CANADÁ - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 15624.255749999997
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 636642
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 665290.8899999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 30065.41845
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 974864.4289200001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 436070.45649959997
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 219143.84817
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 426542.71251
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 30113.166599999993
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 0
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 6200
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 1440
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 3336.5
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 5950
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 13080.529999999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 6400
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 1388570
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 66062.36899399318
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 56261.65336328263
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 61433.449377516954
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 50162.22089456427
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 52052.9839291079
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 54832.34222503824
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 80729.5595645911
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 209900.9225678798
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 85107.49063538619
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 87008.1994301575
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 200373.230105597
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 173284.5157468546
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 62910.5
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 57285
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 6609
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 693
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 15500
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 4709
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 3399
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 17196
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 27056
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 9080
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 297637.5
      }
    ]
  },
  {
    "fileName": "JÓIA - SOJA.xlsx",
    "departamento": "JÓIA - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 8187.0999999999985
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 548772
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 15754.26
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 481710.716
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 228622.31567999997
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 114831.23599999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 308832.908
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 15779.279999999999
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 1099.56
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 7397.45
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 1436.25
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 4022.37
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 242.71
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 197.78
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 95440.5
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 51685.82
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 80382.49
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 56907.04
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 63815.36
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 9291.31
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 70072.75
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 107958.49
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 107313.57
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 74003.76999999999
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 53540.16
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 106426.76000000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 24285
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 24285
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 24285
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 24285
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 23727
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 24285
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 24285
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 206430.6
      }
    ]
  },
  {
    "fileName": "LAGUNA - GIRASSOL.xlsx",
    "departamento": "LAGUNA - GIRASSOL",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 70717.5
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 13481.9
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 3000
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 17500
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 21245.75
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 3000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 15224.999999999998
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 0
      }
    ]
  },
  {
    "fileName": "LAGUNA - MILHO.xlsx",
    "departamento": "LAGUNA - MILHO",
    "atividade": "AGRICOLA",
    "rows": [
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
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 382941.3331875
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 16555.147500000003
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 35013.700424999995
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 71248.66433243747
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 51878.652061877605
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 63470.624046271616
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 46010.45491415814
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 29604.15234363205
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 33206.78171699697
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 157356.36084189595
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 64161.04
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 0
      }
    ]
  },
  {
    "fileName": "LAGUNA - SOJA.xlsx",
    "departamento": "LAGUNA - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
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
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 4515.863
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 173537.1
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 69003.98999999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 147610.67816
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 310023.0100825
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 151925.5925704
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 137226.892275
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 131431.77112000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 8703.5784
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 10000
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 49311.07
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 31345.11829865621
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 35370.455636816405
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 58823.228713407414
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 76098.4314792372
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 87569.70341544808
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 192218.3118954416
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 207126.2815506524
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 230994.48819956626
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 133944.8921870268
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 129947.69171291386
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 117795.87151656517
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 764965.7583044993
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 46042.920000000006
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 248016.00912
      }
    ]
  },
  {
    "fileName": "LAGUNA - SORGO.xlsx",
    "departamento": "LAGUNA - SORGO",
    "atividade": "AGRICOLA",
    "rows": [
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
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 44048.642400000004
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 4048.1856000000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 2234.628
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 133090.20875000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 65940.841
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 27433.037462123066
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 19958.257176801282
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 14045.953496000002
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 50336.770872
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 4714.6125999999995
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 10211.011003509388
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 12751.282378336971
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 59618.71864194797
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 97047.61536890393
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 37168.58977005885
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 54559.723
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 0
      }
    ]
  },
  {
    "fileName": "LAVRINHA - MILHO.xlsx",
    "departamento": "LAVRINHA - MILHO",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 396074.31625000003
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 50949
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 203995.80000000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 11192.5
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 34746.034999999996
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 0
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 1162.43
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 90769.08601557526
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 118962.56543198116
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 109202.03825185992
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 106403.71467995744
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 105673.62949350844
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 91165.06518262958
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 3276.2940000000003
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 209.22
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 116882.08796047235
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 0
      }
    ]
  },
  {
    "fileName": "LAVRINHA - SOJA.xlsx",
    "departamento": "LAVRINHA - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 2724.125
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 261419.52250000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 55240.0343
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 43951.93
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 43510.520000000004
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 5250.3
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 0
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 1250
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 750
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 140
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 185
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 110
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 137162.69868039095
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 96082.0806097898
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 88784.8082052134
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 89809.0702863823
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 97028.27831179553
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 7386.718
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 23310
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 85309.04999999999
      }
    ]
  },
  {
    "fileName": "MONTE CARMELO - SOJA.xlsx",
    "departamento": "MONTE CARMELO - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 7405.791499999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 244428.84
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 473266.54
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 446280.35658
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 148597.78293319995
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 114351.45603999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 246899.02980999998
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 14273.437199999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 4669.51
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 4669.51
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 1203
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 3003
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 5647
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 22880
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 6075
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 1729.6
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 325987.7
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 26941.194651052334
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 26498.93897710569
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 51470.17762848281
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 31777.084633189843
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 30948.611939601396
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 41796.270127723576
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 111137.9365203877
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 51424.519807821256
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 44788.02889757438
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 101324.59211653193
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 87525.68718768134
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 397.44000000000005
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 24747.120000000003
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 2853.36
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 298.08000000000004
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 6696
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 2034.18
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 1468.26
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 7428.240000000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 11687.76
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 3922.5600000000004
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 276053.11392000003
      }
    ]
  },
  {
    "fileName": "SANTA MARIA - SOJA.xlsx",
    "departamento": "SANTA MARIA - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 3926.12675
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 129582.18000000001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 250898.83000000002
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 216463.58928000001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 110749.3372514
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 60622.59658
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 130891.73324500001
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 7566.9594
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 1260.7677
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 1260.7677
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 324.81
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 831.25
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 2100
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 4529.97
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 1200
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 1729.6
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 200033.19449999998
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 12606.720052387185
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 14063.933340820658
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": -342.27
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 12215.555223641068
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 16554.305982276976
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 16639.469222926225
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 22017.243557814443
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 52415.43439419217
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 25874.083888846548
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 22349.302357539378
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 24352.36222639926
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 72128.87824393586
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 198.72000000000003
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 12373.560000000001
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 1426.68
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 149.04000000000002
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 3348
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 1017.09
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 734.13
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 3714.1200000000003
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 5843.88
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 1961.2800000000002
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 63805.56000000001
      }
    ]
  },
  {
    "fileName": "UNIDADE RECEPÇÃO DE GRAOS.xlsx",
    "departamento": "UNIDADE RECEPÇÃO DE GRAOS",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 40674.8056
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 22931.362480000003
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 48865.041600000004
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 16118.3776
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 19550.7
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 21272.3576
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 20103.813599999998
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 19447.584
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 33863.4907
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 37501.08350000001
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 43671.4068
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 5000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 8500
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 5000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 5000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 5000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 5000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 5000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 5000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 5000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 5150
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 8650
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 5150
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
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 17294.028800000004
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 1902.0288000000003
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 1902.0288000000003
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 1590.0288000000003
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 21386.028800000004
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 21386.028800000004
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 1486.0288000000003
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 1642.0288
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 1642.0288
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 1694.0288
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 17294.0288
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 27694.0288
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 65000
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.06",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-04",
        "value": 17680
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-05",
        "value": 10400
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-06",
        "value": 7800
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-07",
        "value": 5200
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-08",
        "value": 2080
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-09",
        "value": 2600
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-10",
        "value": 2080
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-11",
        "value": 2080
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2026-12",
        "value": 2080
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-01",
        "value": 2080
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-02",
        "value": 17680
      },
      {
        "grupoContabil": "4.1.01.07",
        "month": "2027-03",
        "value": 33280
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 364
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 364
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 364
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 8522.069599999999
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 7582.8448
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 9446.6784
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 7317.1464
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 8620.4736
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 7345.216
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 8547.82
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 7192.668
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 10293.82
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 8709.82
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 7818.7688
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 7566.9145
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 5385
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 385
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 385
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 385
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 385
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 385
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 385
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 385
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 7335
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 12835
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 6635
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 7135
      }
    ]
  },
  {
    "fileName": "UNIÃO - SOJA.xlsx",
    "departamento": "UNIÃO - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 7003.798999999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 298226.28
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 134843.94
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 424007.37544
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 190174.50357919995
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 98234.40484
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 209040.45052
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 26488.391600000003
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 0
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
        "value": 564326.40748
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 706.32
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 7348.02
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 4117.817
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 2010.0610000000001
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 110
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 65739.53683126875
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 78719.97998324795
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 84311.71798877278
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 87980.67477806128
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 78430.38800684336
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 74544.19784089498
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 87767.9514438817
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 202741.2828738151
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 92279.43028698541
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 95480.17302451399
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 162969.38979552276
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 140895.31066229442
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 95439.5442
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 1680
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 206
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 3000
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 1500
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 1077.13
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 0
      }
    ]
  },
  {
    "fileName": "VALE DO IMBÉ - SOJA.xlsx",
    "departamento": "VALE DO IMBÉ - SOJA",
    "atividade": "AGRICOLA",
    "rows": [
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-04",
        "value": 13301.239749999999
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-08",
        "value": 439008.66
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-09",
        "value": 669352.71
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-11",
        "value": 792524.44836
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2026-12",
        "value": 237422.6400868
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-01",
        "value": 210598.98145999998
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-02",
        "value": 495539.60641999997
      },
      {
        "grupoContabil": "4.1.01.11",
        "month": "2027-03",
        "value": 25635.937799999996
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-11",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2026-12",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-01",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-02",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.01",
        "month": "2027-03",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-04",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-05",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-06",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-07",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-08",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-09",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-10",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-11",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2026-12",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-01",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-02",
        "value": 4093.49
      },
      {
        "grupoContabil": "4.1.01.05",
        "month": "2027-03",
        "value": 4093.49
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
        "value": 706514.9737309999
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-04",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-08",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-10",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-11",
        "value": 2993
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2026-12",
        "value": 3021
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-01",
        "value": 10384.74
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-02",
        "value": 13377.74
      },
      {
        "grupoContabil": "4.1.01.04",
        "month": "2027-03",
        "value": 10384.74
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-04",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-05",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-06",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-07",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-08",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-09",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-10",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-11",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2026-12",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-01",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-02",
        "value": 490.25
      },
      {
        "grupoContabil": "4.1.01.21",
        "month": "2027-03",
        "value": 490.25
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-04",
        "value": 109435.07523316734
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-05",
        "value": 140511.2687621831
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-06",
        "value": 131661.57787950913
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-07",
        "value": 112795.78964252131
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-08",
        "value": 117807.80534718557
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-09",
        "value": 125196.46205321005
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-10",
        "value": 133932.72792098043
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-11",
        "value": 173806.02481654275
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2026-12",
        "value": 146817.66088774748
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-01",
        "value": 165759.5326696816
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-02",
        "value": 160961.76021506157
      },
      {
        "grupoContabil": "4.2.01.02",
        "month": "2027-03",
        "value": 308256.5893198657
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-04",
        "value": 63500
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-05",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-06",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-07",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-08",
        "value": 4904
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-09",
        "value": 0
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-10",
        "value": 5302
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-11",
        "value": 15487
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2026-12",
        "value": 3200
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-01",
        "value": 5800
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-02",
        "value": 5200
      },
      {
        "grupoContabil": "4.1.01.02",
        "month": "2027-03",
        "value": 355706.5930855139
      }
    ]
  }
];
