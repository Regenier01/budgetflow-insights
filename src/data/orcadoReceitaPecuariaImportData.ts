import type { AtividadeKey, MonthKey } from '@/types/budget';

type OrcadoImportAtividadeKey = AtividadeKey;

export interface OrcadoGrupoMonthValue {
  grupoContabil: string;
  month: MonthKey;
  value: number;
  descricaoContabil?: string;
  pecuariaOrcadoScope?: 'grupo' | 'descricao';
  contaContabil?: string;
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
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-04",
        "value": 640302.3236604603,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-05",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-06",
        "value": 679244.8676025011,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-07",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-08",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-09",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-10",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-11",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-12",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-01",
        "value": 829371.8695481136,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-02",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-03",
        "value": 459120.13366671,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      }
    ]
  },
  {
    "fileName": "CENTRO COMERCIAL DE TOUROS.xlsx",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-04",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-05",
        "value": 1425000,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-06",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-07",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-08",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-09",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-10",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-11",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-12",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-01",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-02",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-03",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE MATRIZES",
        "contaContabil": "3.1.01.01.0002"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-04",
        "value": 1138101.02,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-05",
        "value": 474914.26875,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-06",
        "value": 1122211.3875,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-07",
        "value": 80827.72874999998,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-08",
        "value": 822615.5000000001,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-09",
        "value": 2473500.75,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-10",
        "value": 834808,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-11",
        "value": 515932.6725,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-12",
        "value": 860146.5,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-01",
        "value": 1672122.9000000004,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-02",
        "value": 1704798.2175,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-03",
        "value": 649802.7500000001,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE TOUROS REPRODUTORES",
        "contaContabil": "3.1.01.01.0003"
      }
    ]
  },
  {
    "fileName": "Confinamento.xlsx",
    "departamento": "Confinamento",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-04",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-05",
        "value": 19642481.344736252,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-06",
        "value": 29841748.39828875,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-07",
        "value": 30217253.440814354,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-08",
        "value": 31381346.8289706,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-09",
        "value": 31488046.98584545,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-10",
        "value": 31090903.05552,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-11",
        "value": 32265080.690014068,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-12",
        "value": 32933547.64809084,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-01",
        "value": 31138023.926163003,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-02",
        "value": 26867814.054004002,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-03",
        "value": 26882676.21398334,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-04",
        "value": 450000,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-05",
        "value": 450000,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-06",
        "value": 450000,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-07",
        "value": 630000,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-08",
        "value": 630000,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-09",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-10",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-11",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2026-12",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2027-01",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2027-02",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE ESTERCO ANIMAL",
        "month": "2027-03",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE ESTERCO ANIMAL",
        "contaContabil": "3.1.01.01.0016"
      }
    ]
  },
  {
    "fileName": "JOIA - PECUARIA.xlsx",
    "departamento": "JOIA - PECUARIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-04",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-05",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-06",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-07",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-08",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-09",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-10",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-11",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-12",
        "value": 2225153.361756923,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-01",
        "value": 1938894.1606802274,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-02",
        "value": 6459670.894950001,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-03",
        "value": 6463244.116875,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      }
    ]
  },
  {
    "fileName": "PORTEIRAS - PECUARIA.xlsx",
    "departamento": "PORTEIRAS - PECUARIA",
    "atividade": "PECUARIA",
    "rows": [
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-04",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-05",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-06",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-07",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-08",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-09",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-10",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-11",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2026-12",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-01",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-02",
        "value": 0,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      },
      {
        "grupoContabil": "3.1.01.01-VENDA DE BOVINOS",
        "month": "2027-03",
        "value": 642768.1871333941,
        "pecuariaOrcadoScope": "descricao",
        "descricaoContabil": "VENDA DE BOVINOS",
        "contaContabil": "3.1.01.01.0001"
      }
    ]
  }
];
