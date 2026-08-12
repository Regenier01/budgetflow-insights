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
  },
  {
    "fileName": "Estoque 07.2026.xlsx",
    "mesKey": "2026-07",
    "mesLabel": "julho/2026",
    "mesShort": "Jul",
    "departamentos": [
      {
        "departamento": "Fazenda Vera Cruz - Furnas",
        "quantidade": 2332
      },
      {
        "departamento": "Confinamento",
        "quantidade": 19744
      },
      {
        "departamento": "Fazenda Porteiras",
        "quantidade": 75
      },
      {
        "departamento": "Fazenda Codora",
        "quantidade": 659
      },
      {
        "departamento": "Fazenda Jóia Bonópolis",
        "quantidade": 7114
      },
      {
        "departamento": "Fazenda Covoá",
        "quantidade": 160
      },
      {
        "departamento": "Fazenda Bandeirantes",
        "quantidade": 5359
      },
      {
        "departamento": "Fazenda Jóia Mutunópolis",
        "quantidade": 6227
      },
      {
        "departamento": "Centro Comercial de Touros",
        "quantidade": 181
      },
      {
        "departamento": "Fazenda União",
        "quantidade": 548
      },
      {
        "departamento": "Fazenda Canadá",
        "quantidade": 944
      },
      {
        "departamento": "Fazenda Aroeira",
        "quantidade": 254
      }
    ],
    "categorias": [
      {
        "categoria": "MATRIZES",
        "custoMedio": 2373.427327712773
      },
      {
        "categoria": "REPRODUTORES",
        "custoMedio": 7091.612078307114
      },
      {
        "categoria": "BEZERROS ATÉ 1 ANO",
        "custoMedio": 4272.387759741925
      },
      {
        "categoria": "BEZERRAS ATÉ 1 ANO",
        "custoMedio": 3821.0163884622807
      },
      {
        "categoria": "BEZERROS DE 1 A 2 ANOS",
        "custoMedio": 4560.626768963341
      },
      {
        "categoria": "BEZERRAS DE 1 A 2 ANOS",
        "custoMedio": 3184.7176940449317
      },
      {
        "categoria": "NOVILHOS DE 24 A 36 MESES",
        "custoMedio": 4999.646588965831
      },
      {
        "categoria": "NOVILHAS DE 24 A 36 MESES",
        "custoMedio": 4263.668142761453
      },
      {
        "categoria": "NOVILHOS + 36 MESES",
        "custoMedio": 8827.664926184663
      },
      {
        "categoria": "CONFINAMENTO",
        "custoMedio": 5623.6296794925265
      }
    ],
    "insumos": [
      {
        "nome": "Palha de milho",
        "quantidadeKg": 1528658,
        "valorTotal": 1128964.52,
        "precoKg": 0.738533092424859
      },
      {
        "nome": "Grãos Reidratados",
        "quantidadeKg": 8465313,
        "valorTotal": 6505767.26,
        "precoKg": 0.7685205803967319
      }
    ],
    "recria": [
      {
        "categoria": "MACHO RECRIA",
        "quantidade": 17411,
        "custoMedio": 4500.890523171334
      },
      {
        "categoria": "FEMEA RECRIA",
        "quantidade": 4560,
        "custoMedio": 3576.4245975512213
      }
    ],
    "totalQuantidadeDepartamentos": 43597,
    "sourceFile": "Estoque 07.2026.xlsx"
  }
];
