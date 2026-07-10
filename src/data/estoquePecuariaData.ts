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
    "recria": [],
    "totalQuantidadeDepartamentos": 50430,
    "sourceFile": "Estoque 05.2026.xlsx"
  },
  {
    "fileName": "Estoque 06.2026.xlsx",
    "mesKey": "2026-06",
    "mesLabel": "junho/2026",
    "mesShort": "Jun",
    "departamentos": [
      {
        "departamento": "Fazenda Vera Cruz - Furnas",
        "quantidade": 2186
      },
      {
        "departamento": "Confinamento",
        "quantidade": 21040
      },
      {
        "departamento": "Fazenda Porteiras",
        "quantidade": 76
      },
      {
        "departamento": "Fazenda Codora",
        "quantidade": 919
      },
      {
        "departamento": "Fazenda Jóia Bonópolis",
        "quantidade": 8200
      },
      {
        "departamento": "Fazenda Covoá",
        "quantidade": 69
      },
      {
        "departamento": "Fazenda Bandeirantes",
        "quantidade": 5535
      },
      {
        "departamento": "Fazenda Jóia Mutunópolis",
        "quantidade": 6348
      },
      {
        "departamento": "Centro Comercial de Touros",
        "quantidade": 114
      },
      {
        "departamento": "Fazenda União",
        "quantidade": 548
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
        "custoMedio": 2342.695074243104
      },
      {
        "categoria": "REPRODUTORES",
        "custoMedio": 6791.016231237853
      },
      {
        "categoria": "BEZERROS ATÉ 1 ANO",
        "custoMedio": 4149.987670102078
      },
      {
        "categoria": "BEZERRAS ATÉ 1 ANO",
        "custoMedio": 3700.091919137893
      },
      {
        "categoria": "BEZERROS DE 1 A 2 ANOS",
        "custoMedio": 4461.2614486615
      },
      {
        "categoria": "BEZERRAS DE 1 A 2 ANOS",
        "custoMedio": 3084.4939370192583
      },
      {
        "categoria": "NOVILHOS DE 24 A 36 MESES",
        "custoMedio": 4648.720725227565
      },
      {
        "categoria": "NOVILHAS DE 24 A 36 MESES",
        "custoMedio": 4116.374042859708
      },
      {
        "categoria": "NOVILHOS + 36 MESES",
        "custoMedio": 8498.902033646209
      },
      {
        "categoria": "CONFINAMENTO",
        "custoMedio": 5439.295614470939
      }
    ],
    "insumos": [
      {
        "nome": "Palha de milho",
        "quantidadeKg": 1562320,
        "valorTotal": 843652.8,
        "precoKg": 0.54
      },
      {
        "nome": "Grãos Reidratados",
        "quantidadeKg": 7556561,
        "valorTotal": 4458370.99,
        "precoKg": 0.5900000000000001
      }
    ],
    "recria": [
      {
        "categoria": "MACHO RECRIA",
        "quantidade": 18399,
        "custoMedio": 4391.762748173994
      },
      {
        "categoria": "FEMEA RECRIA",
        "quantidade": 4866,
        "custoMedio": 2996.5954727296535
      }
    ],
    "totalQuantidadeDepartamentos": 46353,
    "sourceFile": "Estoque 06.2026.xlsx"
  }
];
