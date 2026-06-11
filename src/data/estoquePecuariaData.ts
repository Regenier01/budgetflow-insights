/**
 * Dados de estoque pecuária por mês (importados de Estoque/Estoque MM.YYYY.xlsx).
 * Fluxo independente do orçado/realizado.
 * Regenerar: npm run estoque:import
 */
import type { EstoquePecuariaSnapshot } from '@/types/estoque';

export const ESTOQUE_PECUARIA_SNAPSHOTS: EstoquePecuariaSnapshot[] = [
  {
    "fileName": "Estoque 05.2026.xlsx",
    "mesKey": "2026-05",
    "mesLabel": "maio/2026",
    "mesShort": "Mai",
    "departamentos": [
      {
        "departamento": "Fazenda Vera Cruz - Furnas",
        "quantidade": 1922
      },
      {
        "departamento": "Confinamento",
        "quantidade": 23041
      },
      {
        "departamento": "Fazenda Porteiras",
        "quantidade": 123
      },
      {
        "departamento": "Fazenda Codora",
        "quantidade": 919
      },
      {
        "departamento": "Fazenda Jóia Bonópolis",
        "quantidade": 10170
      },
      {
        "departamento": "Fazenda Covoá",
        "quantidade": 156
      },
      {
        "departamento": "Fazenda Bandeirantes",
        "quantidade": 7140
      },
      {
        "departamento": "Fazenda Jóia Mutunópolis",
        "quantidade": 5046
      },
      {
        "departamento": "Centro Comercial de Touros",
        "quantidade": 46
      },
      {
        "departamento": "Fazenda União",
        "quantidade": 549
      },
      {
        "departamento": "Fazenda Canandá",
        "quantidade": 1064
      },
      {
        "departamento": "Fazenda Aroeira",
        "quantidade": 254
      }
    ],
    "categorias": [
      {
        "categoria": "MATRIZES",
        "custoMedio": 2254.0009695275444
      },
      {
        "categoria": "REPRODUTORES",
        "custoMedio": 6728.866658516415
      },
      {
        "categoria": "BEZERROS ATÉ 1 ANO",
        "custoMedio": 3967.2589391046113
      },
      {
        "categoria": "BEZERRAS ATÉ 1 ANO",
        "custoMedio": 3543.104295047696
      },
      {
        "categoria": "BEZERROS DE 1 A 2 ANOS",
        "custoMedio": 4356.075894961236
      },
      {
        "categoria": "BEZERRAS DE 1 A 2 ANOS",
        "custoMedio": 3347.9099158386416
      },
      {
        "categoria": "NOVILHOS DE 24 A 36 MESES",
        "custoMedio": 4951.047338760845
      },
      {
        "categoria": "NOVILHAS DE 24 A 36 MESES",
        "custoMedio": 4027.2556238628295
      },
      {
        "categoria": "NOVILHOS + 36 MESES",
        "custoMedio": 8304.573519673473
      },
      {
        "categoria": "CONFINAMENTO",
        "custoMedio": 5284.67972864526
      }
    ],
    "insumos": [
      {
        "nome": "Palha de milho",
        "quantidadeKg": 30,
        "valorTotal": 2,
        "precoKg": 15
      },
      {
        "nome": "Grãos Reidratados",
        "quantidadeKg": 100,
        "valorTotal": 5,
        "precoKg": 20
      }
    ],
    "totalQuantidadeDepartamentos": 50430,
    "sourceFile": "Estoque 05.2026.xlsx"
  }
];
