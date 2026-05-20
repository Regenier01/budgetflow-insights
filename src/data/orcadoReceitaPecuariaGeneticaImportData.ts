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

export const ORCADO_RECEITA_PECUARIA_GENETICA_IMPORT_BATCHES: OrcadoImportBatch[] = [
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
  }
];
