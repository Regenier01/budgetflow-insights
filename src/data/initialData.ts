import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "d4e1eea3-1291-4033-8c58-4e4ae1dcdd9a",
    "codigo": "1",
    "descricao": "1",
    "tipo": "D",
    "codigoPai": null,
    "nivel": 1,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "92be7635-ae67-4924-8a8a-e7bf135210da",
    "codigo": "1",
    "descricao": "1",
    "tipo": "D",
    "codigoPai": null,
    "nivel": 1,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "834482e3-9aab-41eb-ba82-831f3bcbb134",
    "codigo": "1.1",
    "descricao": "1.1",
    "tipo": "D",
    "codigoPai": "1",
    "nivel": 2,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "f4d2635e-fcd8-483f-b0cc-2cb589fbdf11",
    "codigo": "1.1",
    "descricao": "1.1",
    "tipo": "D",
    "codigoPai": "1",
    "nivel": 2,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "e93111fa-3735-4a5e-9eb1-a5bb671321e4",
    "codigo": "1.1.08",
    "descricao": "1.1.08",
    "tipo": "D",
    "codigoPai": "1.1",
    "nivel": 3,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "65e9b208-50d8-43f8-8adb-ca857243ab4b",
    "codigo": "1.1.08.02",
    "descricao": "1.1.08.02",
    "tipo": "D",
    "codigoPai": "1.1.08",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "fc80f65f-3738-47c2-bf94-9a8681a31db6",
    "codigo": "1.1.08.02.0003",
    "descricao": "GRAOS REIDRATADOS",
    "tipo": "D",
    "codigoPai": "1.1.08.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "1.1.08.02-OUTROS PRODUTOS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "39b5a9bb-d0cb-4187-82d4-05eab8d63f8c",
    "codigo": "1.1.55",
    "descricao": "1.1.55",
    "tipo": "D",
    "codigoPai": "1.1",
    "nivel": 3,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "767bbc76-8b4d-4d9b-960d-6f193efa9891",
    "codigo": "1.1.55.01",
    "descricao": "1.1.55.01",
    "tipo": "D",
    "codigoPai": "1.1.55",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "e8901d92-0c5c-4e43-a649-993350fa711f",
    "codigo": "1.1.55.01.0003",
    "descricao": "CUSTOS A APROPRIAR",
    "tipo": "D",
    "codigoPai": "1.1.55.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "1.1.55.01-DESPESAS ANTECIPADAS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "51499786-7d8e-4165-978b-5068a08ae30e",
    "codigo": "1.3",
    "descricao": "1.3",
    "tipo": "D",
    "codigoPai": "1",
    "nivel": 2,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "1a894dea-8c74-4a34-ae0a-5ce3ef3c59c5",
    "codigo": "1.3",
    "descricao": "1.3",
    "tipo": "D",
    "codigoPai": "1",
    "nivel": 2,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "b380ef97-5cf1-4fc4-a057-0541938df1ff",
    "codigo": "1.3.02",
    "descricao": "1.3.02",
    "tipo": "D",
    "codigoPai": "1.3",
    "nivel": 3,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "ad9efdc0-0598-4237-9587-f7c585b5782f",
    "codigo": "1.3.02",
    "descricao": "1.3.02",
    "tipo": "D",
    "codigoPai": "1.3",
    "nivel": 3,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "31136d85-4a66-4bf6-8730-5140856121c3",
    "codigo": "1.3.02.23",
    "descricao": "1.3.02.23",
    "tipo": "D",
    "codigoPai": "1.3.02",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "bf3fe92e-0f85-402d-bd30-cc32129d4ffa",
    "codigo": "1.3.02.23",
    "descricao": "1.3.02.23",
    "tipo": "D",
    "codigoPai": "1.3.02",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "bb323f82-503d-480f-85d9-db9d3de3293b",
    "codigo": "1.3.02.23.0001",
    "descricao": "MOVEIS",
    "tipo": "D",
    "codigoPai": "1.3.02.23",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "1.3.02.23-MOVEIS, UTENSILIOS E INSTALACOES",
    "nomeProduto": "PURIFICADOR DE AGUA SOFT PLUS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "75180a40-9082-4878-b239-1638a2ef5efa",
    "codigo": "1.3.02.23.0001",
    "descricao": "MOVEIS",
    "tipo": "D",
    "codigoPai": "1.3.02.23",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "1.3.02.23-MOVEIS, UTENSILIOS E INSTALACOES",
    "nomeProduto": "PURIFICADOR DE AGUA SOFT PLUS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "aafce605-12f2-4046-9456-83c75311604b",
    "codigo": "1.3.02.23.0002",
    "descricao": "EQUIPAMENTOS DE INFORMATICA",
    "tipo": "D",
    "codigoPai": "1.3.02.23",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "1.3.02.23-MOVEIS, UTENSILIOS E INSTALACOES",
    "nomeProduto": "TABLET",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8114f141-27d6-4014-9448-30d8116a1da3",
    "codigo": "1.3.02.24",
    "descricao": "1.3.02.24",
    "tipo": "D",
    "codigoPai": "1.3.02",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "135676c3-01ac-4517-bac5-591281dab517",
    "codigo": "1.3.02.24.0004",
    "descricao": "ONIBUS",
    "tipo": "D",
    "codigoPai": "1.3.02.24",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "1.3.02.24-VEICULOS",
    "nomeProduto": "M6985 - ÔNIBUS VOLKSWAGEN COMIL CAMPIONE R",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "15c9b262-e121-4b3b-86da-c7a85d4bd730",
    "codigo": "1.3.02.34",
    "descricao": "1.3.02.34",
    "tipo": "D",
    "codigoPai": "1.3.02",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "ced195c4-edad-4335-8d39-945d5974a992",
    "codigo": "1.3.02.34.0005",
    "descricao": "FERRAMENTARIA",
    "tipo": "D",
    "codigoPai": "1.3.02.34",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "1.3.02.34-OUTRAS IMOBILIZACOES",
    "nomeProduto": "FURADEIRA IMPACTO 5/8 1100W 220V ID11002",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "2c6de6c8-6301-4320-8c6a-4b7041a314d9",
    "codigo": "3",
    "descricao": "3",
    "tipo": "D",
    "codigoPai": null,
    "nivel": 1,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "79813271-124f-4b42-bc54-37a0a80beb3f",
    "codigo": "3",
    "descricao": "3",
    "tipo": "R",
    "codigoPai": null,
    "nivel": 1,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "d5ed2e8d-4697-489a-b12b-95dcc8025b22",
    "codigo": "3",
    "descricao": "3",
    "tipo": "R",
    "codigoPai": null,
    "nivel": 1,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "07db2e63-6da1-434a-8bb5-06d04a8b9771",
    "codigo": "3.1",
    "descricao": "3.1",
    "tipo": "R",
    "codigoPai": "3",
    "nivel": 2,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "fe9821d8-f57e-4b7a-81c7-cefa7e80a8cf",
    "codigo": "3.1",
    "descricao": "3.1",
    "tipo": "R",
    "codigoPai": "3",
    "nivel": 2,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "fa7a29eb-a46f-451e-b7d9-268a484338fe",
    "codigo": "3.1.01",
    "descricao": "3.1.01",
    "tipo": "R",
    "codigoPai": "3.1",
    "nivel": 3,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "426cd9b6-1766-487e-935e-e7117097136e",
    "codigo": "3.1.01.01",
    "descricao": "3.1.01.01",
    "tipo": "R",
    "codigoPai": "3.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "3cb6c0f3-37a0-4f16-958a-93c094244915",
    "codigo": "3.1.01.01.0001",
    "descricao": "VENDA DE BOVINOS",
    "tipo": "R",
    "codigoPai": "3.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.1.01.01-VENDA DE PRODUTOS ANIMAIS",
    "nomeProduto": "BOVINO MACHO 12 A 24 MESES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 240
    }
  },
  {
    "id": "129d207f-4818-424f-8067-cf9eabf6ab42",
    "codigo": "3.1.01.01.0001",
    "descricao": "VENDA DE BOVINOS",
    "tipo": "R",
    "codigoPai": "3.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.1.01.01-VENDA DE PRODUTOS ANIMAIS",
    "nomeProduto": "BOVINO MACHO 24 A 36 MESES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 70
    }
  },
  {
    "id": "18ea3a7d-d027-4305-87d5-b6dc21f8894b",
    "codigo": "3.1.02",
    "descricao": "3.1.02",
    "tipo": "R",
    "codigoPai": "3.1",
    "nivel": 3,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "3431a008-22f4-4356-9b39-0c81042c5257",
    "codigo": "3.1.02.03",
    "descricao": "3.1.02.03",
    "tipo": "R",
    "codigoPai": "3.1.02",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "709222b2-4a2c-4783-9551-eb6f15398b02",
    "codigo": "3.1.02.03.0001",
    "descricao": "VENDA DE LATEX",
    "tipo": "R",
    "codigoPai": "3.1.02.03",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.1.02.03-VENDA DE OUTROS PRODUTOS AGRICOLAS",
    "nomeProduto": "COAGULO VIRGEM A GRANEL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 360
    }
  },
  {
    "id": "8567b2a8-425d-402c-8ff2-1f53f4c7b4d1",
    "codigo": "3.1.02.03.0001",
    "descricao": "VENDA DE LATEX",
    "tipo": "R",
    "codigoPai": "3.1.02.03",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.1.02.03-VENDA DE OUTROS PRODUTOS AGRICOLAS",
    "nomeProduto": "CERNAMBY VIRGEM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "1a1bae02-b354-4bd5-92d6-f5f3a1fa460c",
    "codigo": "3.2",
    "descricao": "3.2",
    "tipo": "D",
    "codigoPai": "3",
    "nivel": 2,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "a9d973ba-801d-4f61-968b-10f5578d3841",
    "codigo": "3.2",
    "descricao": "3.2",
    "tipo": "D",
    "codigoPai": "3",
    "nivel": 2,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "e2bf562a-3997-4af4-a5ff-995d11357e13",
    "codigo": "3.2.01",
    "descricao": "3.2.01",
    "tipo": "D",
    "codigoPai": "3.2",
    "nivel": 3,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "bfdd2507-9ef4-4e30-b63c-f3e2de557b01",
    "codigo": "3.2.01.01",
    "descricao": "3.2.01.01",
    "tipo": "D",
    "codigoPai": "3.2.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "6acf0d76-95b2-46d6-9ca3-b72ad113b094",
    "codigo": "3.2.01.01.0001",
    "descricao": "ICMS",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "COAGULO VIRGEM A GRANEL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 360
    }
  },
  {
    "id": "4967739d-5635-4016-bfe6-6e8eecd1e1e2",
    "codigo": "3.2.01.01.0001",
    "descricao": "ICMS",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "CERNAMBY VIRGEM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "3b9e2808-f91f-4513-8735-576ea55b21bd",
    "codigo": "3.2.01.01.0001",
    "descricao": "ICMS",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "25ed3697-69ab-4d3e-b23b-005f99f6656e",
    "codigo": "3.2.01.01.0002",
    "descricao": "INSS",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "COAGULO VIRGEM A GRANEL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 360
    }
  },
  {
    "id": "f54b4cc5-9970-4414-b8d3-a0fec535afb6",
    "codigo": "3.2.01.01.0002",
    "descricao": "INSS",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "CERNAMBY VIRGEM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "03ac9acc-1d41-468b-ac92-e96865ae9662",
    "codigo": "3.2.01.01.0003",
    "descricao": "COFINS S/ FATURAMENTO",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "COAGULO VIRGEM A GRANEL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 360
    }
  },
  {
    "id": "8d02553c-ae71-4257-b032-8dbf41cdb758",
    "codigo": "3.2.01.01.0003",
    "descricao": "COFINS S/ FATURAMENTO",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "CERNAMBY VIRGEM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "154ba480-6f77-4ba1-b094-85996a41dada",
    "codigo": "3.2.01.01.0004",
    "descricao": "PIS S/ FATURAMENTO",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "COAGULO VIRGEM A GRANEL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 360
    }
  },
  {
    "id": "628fd373-a0f9-42d5-8070-72b45b0a30ae",
    "codigo": "3.2.01.01.0004",
    "descricao": "PIS S/ FATURAMENTO",
    "tipo": "D",
    "codigoPai": "3.2.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.2.01.01-IMPOSTOS SOBRE RECEITA BRUTA",
    "nomeProduto": "CERNAMBY VIRGEM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "15c409a7-be16-4a6f-8981-fe4fea93459d",
    "codigo": "3.2.03",
    "descricao": "3.2.03",
    "tipo": "D",
    "codigoPai": "3.2",
    "nivel": 3,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "595f8e77-081a-4e5e-a665-0eebb0a52918",
    "codigo": "3.2.03.01",
    "descricao": "3.2.03.01",
    "tipo": "D",
    "codigoPai": "3.2.03",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "af6bc38b-1835-4288-9701-015912f53f34",
    "codigo": "3.2.03.01.0003",
    "descricao": "OUTROS ABATIMENTOS",
    "tipo": "D",
    "codigoPai": "3.2.03.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.2.03.01-ABATIMENTOS S/ VENDAS",
    "nomeProduto": "BOVINO MACHO 24 A 36 MESES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "36f4d99e-e3d4-4b7d-8ffb-e17de72d1a65",
    "codigo": "3.2.03.01.0003",
    "descricao": "OUTROS ABATIMENTOS",
    "tipo": "D",
    "codigoPai": "3.2.03.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.2.03.01-ABATIMENTOS S/ VENDAS",
    "nomeProduto": "BOVINO MACHO 12 A 24 MESES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "7ad34685-3b29-45b3-b26c-e81da874ea9c",
    "codigo": "3.2.03.01.0003",
    "descricao": "OUTROS ABATIMENTOS",
    "tipo": "D",
    "codigoPai": "3.2.03.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.2.03.01-ABATIMENTOS S/ VENDAS",
    "nomeProduto": "OUTRAS DESPESAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "0f058f3c-6453-4b78-8a5c-b65c98e1208f",
    "codigo": "3.3",
    "descricao": "3.3",
    "tipo": "D",
    "codigoPai": "3",
    "nivel": 2,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "dd5f02c3-88b3-4b55-8fee-28e14e084ee6",
    "codigo": "3.3",
    "descricao": "3.3",
    "tipo": "D",
    "codigoPai": "3",
    "nivel": 2,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "0d2b2e59-5ff7-43af-b19f-375ab948a915",
    "codigo": "3.3.01",
    "descricao": "3.3.01",
    "tipo": "D",
    "codigoPai": "3.3",
    "nivel": 3,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "0779ff17-54ee-4713-aef0-d15afe7df4c8",
    "codigo": "3.3.01",
    "descricao": "3.3.01",
    "tipo": "D",
    "codigoPai": "3.3",
    "nivel": 3,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "f0499df2-d4fd-4817-95d0-7f7b9eac14ea",
    "codigo": "3.3.01.01",
    "descricao": "3.3.01.01",
    "tipo": "D",
    "codigoPai": "3.3.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "bc96b34f-0df5-4ee8-bc63-2d527f668b51",
    "codigo": "3.3.01.01.0001",
    "descricao": "PRODUTOS ANIMAIS",
    "tipo": "D",
    "codigoPai": "3.3.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.3.01.01-CUSTO DOS PRODUTOS PECUARIOS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c0fe7276-d628-4658-b7ec-b47d97ae3318",
    "codigo": "3.3.01.02",
    "descricao": "3.3.01.02",
    "tipo": "D",
    "codigoPai": "3.3.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "2793bb06-4676-4015-bb3e-2d109471cb15",
    "codigo": "3.3.01.02.0003",
    "descricao": "LATEX",
    "tipo": "D",
    "codigoPai": "3.3.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "3.3.01.02-CUSTO DOS PRODUTOS AGRICOLAS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 280
    }
  },
  {
    "id": "fedfd6e9-29d8-444a-b8ea-8911319d1e6e",
    "codigo": "3.3.01.02.0080",
    "descricao": "VJUSTO SERINGAL - DEPREC, EXAUST E AMORT",
    "tipo": "D",
    "codigoPai": "3.3.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.3.01.02-CUSTO DOS PRODUTOS AGRICOLAS",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "893fc0d0-4e01-496f-aba7-ebe4a8ec068a",
    "codigo": "3.4",
    "descricao": "3.4",
    "tipo": "D",
    "codigoPai": "3",
    "nivel": 2,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "f61af00c-ae62-45d9-9b1f-dee5023717c9",
    "codigo": "3.4",
    "descricao": "3.4",
    "tipo": "D",
    "codigoPai": "3",
    "nivel": 2,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "6ad1a8de-bdcc-4a88-a738-51b5d0321d54",
    "codigo": "3.4.01",
    "descricao": "3.4.01",
    "tipo": "D",
    "codigoPai": "3.4",
    "nivel": 3,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "e5eeccb8-c860-49c7-a6cb-a6db458a7b24",
    "codigo": "3.4.01.01",
    "descricao": "3.4.01.01",
    "tipo": "D",
    "codigoPai": "3.4.01",
    "nivel": 4,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "fcfb3c29-e889-4c14-9dd5-c83301ef4e53",
    "codigo": "3.4.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "D",
    "codigoPai": "3.4.01.01",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "GOVERNANCIA CORPORATIVA",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ASSIDUIDADE/VALOR",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "d3c6653a-b957-4941-8ab1-7e31d1993c94",
    "codigo": "3.4.01.10",
    "descricao": "3.4.01.10",
    "tipo": "D",
    "codigoPai": "3.4.01",
    "nivel": 4,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "ba9542d3-c50d-4085-ad20-b19099b9cc60",
    "codigo": "3.4.01.10.0061",
    "descricao": "RATEIO DESPESAS ADMINISTRATIVAS",
    "tipo": "D",
    "codigoPai": "3.4.01.10",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "CONTROLADORIA",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.4.01.10-OUTRAS DESPESAS ADMINISTRATIVAS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "6bd965dc-2863-4e44-aae7-46514e341beb",
    "codigo": "3.4.01.20",
    "descricao": "3.4.01.20",
    "tipo": "D",
    "codigoPai": "3.4.01",
    "nivel": 4,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "2d028462-7a72-4cee-aa50-4b4d8239266a",
    "codigo": "3.4.01.20.0020",
    "descricao": "PEDAGIOS",
    "tipo": "D",
    "codigoPai": "3.4.01.20",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "RATEIO INFORMACAO E TECNOLOGIA",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.01.20-OUTROS CUSTOS",
    "nomeProduto": "PEDAGIO",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "6cf118e1-0a71-4b98-9ace-7aaa00be49fb",
    "codigo": "3.4.03",
    "descricao": "3.4.03",
    "tipo": "D",
    "codigoPai": "3.4",
    "nivel": 3,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "a1618996-b1a4-4b20-8f72-912e91cefa3c",
    "codigo": "3.4.03.01",
    "descricao": "3.4.03.01",
    "tipo": "D",
    "codigoPai": "3.4.03",
    "nivel": 4,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "cf7aa84b-1b89-404d-a80d-9a67c25f9bdc",
    "codigo": "3.4.03.01.0006",
    "descricao": "IOF",
    "tipo": "D",
    "codigoPai": "3.4.03.01",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "RATEIO FINANCEIRO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.03.01-IMPOSTOS INDIRETOS",
    "nomeProduto": "IOF",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 500
    }
  },
  {
    "id": "5aea2b48-53c2-41cb-8cd4-b6193c6ad67e",
    "codigo": "3.4.03.02",
    "descricao": "3.4.03.02",
    "tipo": "D",
    "codigoPai": "3.4.03",
    "nivel": 4,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "dde04ef6-7264-4fe5-87cd-3ecb22e8d966",
    "codigo": "3.4.03.02.0005",
    "descricao": "TAXAS DIVERSAS",
    "tipo": "D",
    "codigoPai": "3.4.03.02",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "DIRETORIA",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.03.02-OUTRAS DESPESAS TRIBUTARIAS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 600
    }
  },
  {
    "id": "3757cfdf-c4f8-414b-951b-9e19c8bcb811",
    "codigo": "3.4.03.02.0007",
    "descricao": "PIS S/ OUTRAS RECEITAS",
    "tipo": "D",
    "codigoPai": "3.4.03.02",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "RATEIO DEPARTAMENTOS",
    "coligada": "2-PLANAGRI S.A.",
    "grupoContabilN9": "3.4.03.02-OUTRAS DESPESAS TRIBUTARIAS",
    "nomeProduto": "PIS SOBRE FATURAMENTO  039391",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 700
    }
  },
  {
    "id": "90b3b635-0cb7-4d3e-94f4-0aa595080b32",
    "codigo": "3.4.03.02.0007",
    "descricao": "PIS S/ OUTRAS RECEITAS",
    "tipo": "D",
    "codigoPai": "3.4.03.02",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ALMOXARIFADO",
    "centroCusto": "ALMOXARIFADO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.03.02-OUTRAS DESPESAS TRIBUTARIAS",
    "nomeProduto": "SUCATA DE PAPELAO",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 800
    }
  },
  {
    "id": "f806ccd6-90e2-43b3-9fa6-2fd789b6778c",
    "codigo": "3.4.03.02.0008",
    "descricao": "COFINS S/ OUTRAS RECEITAS",
    "tipo": "D",
    "codigoPai": "3.4.03.02",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ALMOXARIFADO",
    "centroCusto": "ALMOXARIFADO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.03.02-OUTRAS DESPESAS TRIBUTARIAS",
    "nomeProduto": "SUCATA DE FERRO",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 900
    }
  },
  {
    "id": "bdaa8efa-473d-42fb-9136-6507351b1203",
    "codigo": "3.4.03.02.0008",
    "descricao": "COFINS S/ OUTRAS RECEITAS",
    "tipo": "D",
    "codigoPai": "3.4.03.02",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "RATEIO DEPARTAMENTOS",
    "coligada": "2-PLANAGRI S.A.",
    "grupoContabilN9": "3.4.03.02-OUTRAS DESPESAS TRIBUTARIAS",
    "nomeProduto": "COFINS SOBRE FATURAMENTO  039393",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 1000
    }
  },
  {
    "id": "63a76f29-7ebb-4077-9743-e7708185305b",
    "codigo": "3.4.04",
    "descricao": "3.4.04",
    "tipo": "D",
    "codigoPai": "3.4",
    "nivel": 3,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "1a795f42-8fdd-4e4b-8e2a-5008ac8ef5cd",
    "codigo": "3.4.04",
    "descricao": "3.4.04",
    "tipo": "D",
    "codigoPai": "3.4",
    "nivel": 3,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "336820c7-5783-45ec-a5e0-da50af642722",
    "codigo": "3.4.04.01",
    "descricao": "3.4.04.01",
    "tipo": "D",
    "codigoPai": "3.4.04",
    "nivel": 4,
    "atividade": "DESP_ADM_TRIB",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "470867a2-f6e6-4b4e-aea8-f3ce595664ff",
    "codigo": "3.4.04.01.0004",
    "descricao": "JUROS DE MORA",
    "tipo": "D",
    "codigoPai": "3.4.04.01",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "SEM_DEPTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.04.01-DESPESAS FINANCEIRAS",
    "nomeProduto": "JUROS DE MORA  039483",
    "divisao": "SEM_DIVISAO",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "bf7eb84e-40d3-4d22-8a55-c23feab85df0",
    "codigo": "3.4.04.05",
    "descricao": "3.4.04.05",
    "tipo": "D",
    "codigoPai": "3.4.04",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "15a9bdf8-8a9c-40be-bf0a-78b7596bac5b",
    "codigo": "3.4.04.05.0001",
    "descricao": "JUROS ATIVOS",
    "tipo": "D",
    "codigoPai": "3.4.04.05",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "SEM_DEPTO",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.4.04.05-RECEITAS FINANCEIRAS",
    "nomeProduto": "JUROS ATIVOS",
    "divisao": "VERA CRUZ - SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "bae5cc81-285e-4af0-be2f-cf65eb7ce094",
    "codigo": "4",
    "descricao": "4",
    "tipo": "C",
    "codigoPai": null,
    "nivel": 1,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "1b1e62e1-87bf-44c5-a4b0-8440e2673865",
    "codigo": "4",
    "descricao": "4",
    "tipo": "C",
    "codigoPai": null,
    "nivel": 1,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "1cae7d2c-6ca6-48d0-9bbd-32c9fa511d62",
    "codigo": "4.1",
    "descricao": "4.1",
    "tipo": "C",
    "codigoPai": "4",
    "nivel": 2,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "6115c271-a99d-4fd4-834d-3a687022ff9c",
    "codigo": "4.1",
    "descricao": "4.1",
    "tipo": "C",
    "codigoPai": "4",
    "nivel": 2,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "81918259-2a2f-4ceb-a690-862d1a3ceb5f",
    "codigo": "4.1.01",
    "descricao": "4.1.01",
    "tipo": "C",
    "codigoPai": "4.1",
    "nivel": 3,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "71205e96-dc7b-4393-b989-5ae4cad794c2",
    "codigo": "4.1.01",
    "descricao": "4.1.01",
    "tipo": "C",
    "codigoPai": "4.1",
    "nivel": 3,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "79640696-0657-441d-b158-d791f9e77dd0",
    "codigo": "4.1.01.01",
    "descricao": "4.1.01.01",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "f61a631b-4b13-4ccc-a6f2-e50f77ff9161",
    "codigo": "4.1.01.01",
    "descricao": "4.1.01.01",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "6588c701-c45a-47ed-bb58-487de1c3c931",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "286ad1ad-d1d0-403d-8b2d-9f9c2325e96c",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DESCONTO - AVISO PREVIO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "cbbdedf3-aadb-48a5-bd16-1593460b030e",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FALTAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "ccc4cd71-5518-4ae2-81c0-e3b70a115736",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIARIA - VIAGEM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "c53e7e65-9050-4a07-a64c-c2152bb088ca",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - PERDIDO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "16318dc3-c9cd-403f-bc38-57cf7520ac56",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ATRASOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "42a66e2a-f066-4780-982e-a1181fba34f9",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DESCONTO BANCO DE HORAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "c813cd79-cd79-49c1-8086-eaf7d634f4df",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REMUNERACAO PAGO A MAIOR",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e2544271-5331-4c1e-b3bf-3bf92e2f025c",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO SALARIAL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c9ace534-c988-41ff-9038-c5d69831b3ca",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PERICULOSIDADE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "2107501f-a0ea-47fb-8bd5-4e9b63c68e2c",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PERICULOSIDADE (C)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0c179490-a815-43b6-9eb7-fea3ff8e2ae4",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "LIQUIDO - NEGATIVO RESCISAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "3f021605-e46e-4964-a820-3683758d6396",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO - GRATIFICACAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ee2947bd-5885-49bb-bfb8-a57047fe5d96",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PREMIO HORA EXTRA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "e8e0892a-dc6f-4fcf-873f-1baccd8bdf11",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO - COMISSAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "2f7f7d6d-ec3c-4edf-8e49-6672b550a521",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GRATIFICACAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "46917862-3e8b-46c7-a6a1-d45e2b872af1",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ASSIDUIDADE/VALOR",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "51b8a8e2-cb88-47ca-ac62-cd367328044a",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUDA DE CUSTO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "6b138fe5-da6a-4a5c-8cc6-69d9638e2a94",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO - HORA EXTRA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "99d50b19-e4ff-4044-b986-82ab0b98d3e5",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO D.S.R",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "25cc5f5e-3385-4a38-973d-97b0f3739491",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO ASSIDUIDADE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "c04c812f-16e7-4ff7-a909-a06a40526e04",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ADICIONAL NOTURNO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "0f76e463-0ddb-4b05-9c14-a29beecf9178",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ATESTADO MEDICO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "48601290-5845-4e72-b14d-0da8de535924",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO DSR HORA EXTRA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "625ce4dd-e046-42f0-a57b-7cecd7ed68ca",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO FALTAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "b96f4e9c-138d-4634-8c6c-15e52752d835",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PERICULOSIDADE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "adf10fcb-4344-4573-b3f8-8a6f80b43d88",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO FALTAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "8980266d-608d-468f-b5dd-de0805c599bd",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CONDOMINIO CAPELINHA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "127cd335-c6c8-49f3-8d63-c1865718c372",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ATRASOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "5b2b5ac8-e81f-432e-9f06-69d833791b80",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIARIA - VIAGEM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "db853b28-0e27-4795-adcc-e17c994c5c0d",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ADICIONAL NOTURNO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2b12b956-a6c4-473d-841c-bf16cd48b548",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ASSIDUIDADE/VALOR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "bb9b4485-9a7d-4d6f-8df5-5e8ca326188e",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GRATIFICACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "670f71f1-8e7d-44cf-94de-395e8ad08eb2",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "802473c6-37ef-4db5-874b-478b79a5a3aa",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CONDOMINIO CAPELINHA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e31a6a49-03b8-45f8-b146-fd7eec99cc25",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO D.S.R",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "49919bdb-95bd-4c62-a5fc-4a859e640f2a",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f7c6a6b4-35d8-4df7-b1ae-04b32e4dbf44",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA100%",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5f08bda4-d841-43fb-90fc-c7b7bfbb1082",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e9b71443-80b1-4558-971e-473af877b5bc",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "1d018cda-1d59-4784-84c9-8b4eda5bbab8",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "56b65a35-7cb6-426e-97de-1d0a32e3a824",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R S/ INTERVALO INTRAJORNADA INDENIZA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "376f9bc9-2478-477d-82d8-5a2755dfa065",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "INTERVALO INTRAJORNADA INDENIZADA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "5863a168-411f-489d-bcdb-2655c499669d",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA100%",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "62512f4f-0c38-4b1b-932f-e08cae3ce8f0",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CARGO DE CONFIANCA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "296bad87-db29-46b3-b8ba-4f984f64dd7b",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - COMISSOES",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "aed7ac55-a09d-4455-b448-2a673a4f47d1",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSICAO DSR COMISSAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "c2646ef0-0ee0-4f9d-88bc-ed5ca243ada9",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "COMISSAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "b36f77a2-b49b-4824-b08a-adf3c05a5620",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "COMISSAO - HORIMETRO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7532e037-3384-4673-a63a-c64f1efb5561",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CARGO DE CONFIANCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c157c89a-5058-47d0-a0be-10f21750bfb6",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "3d9f0679-6bff-4ae5-ad46-95adee9c0be9",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO DE FERIAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b7771661-567f-4b69-b118-5aca3d9eed1e",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "00931adf-418c-49d3-94f8-5bb8187c9e62",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO DE FERIAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "975f6b6e-854d-4eb0-a9a8-d9fde525d7b5",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FERIAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b38617b6-ff5b-4ba8-a02f-b9262099db20",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "ac3c663f-bf1d-4f55-bbc3-ea7a2236c3c8",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6b895a43-25a2-4ec7-9505-cea5b5e9f462",
    "codigo": "4.1.01.01.0007",
    "descricao": "INDENIZACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AVISO PREVIO - INDENIZADO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "45921f92-bf40-4c2b-885b-fecd15b008ee",
    "codigo": "4.1.01.01.0007",
    "descricao": "INDENIZACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PENSAO JUDICIAL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "4b2948a6-bf43-4b78-afb1-78a9ba6d6e66",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "LORATADINA 1MG XPE 100ML(GEN)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0f1861dc-11ab-4fac-9be4-51ee0a52d1f4",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIPIRONA 1G 10CPR PRATI DONA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "782fd5bb-472c-4b57-9d98-3ffbc16674d7",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PREDNISOLONA SOL 60 ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2238b8f3-d1ab-4922-897f-93b35d2aba8c",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PARACETAMOL GTS 15ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "958c6114-1c73-4a50-a846-d661d97cda43",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIPIRONA 1G C/10 COMP(GEN",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0d83446c-c6ec-4638-9001-9896c1e84d0f",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PARACETAMOL 750",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "aaa25032-7fe3-413f-a14d-fcf17dd63036",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CETOPROFENO LEGRAND GEN 150MG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "181fefb5-6eeb-47a4-8fca-d39defb7e665",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "MEDICAMENTOS FARMACIA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "d09cf174-df24-4489-ac2c-13956baa6ff8",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "TENOXICAN",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "1775329e-61f5-46bc-bf5a-9bfd024b652a",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CICLOBENZAPRINA 10MG C/10",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "37eca65d-05eb-4b91-8e98-af14007e58a3",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "MELOXICAM INICOX DP 15MG C/5 CP",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "fa24b34a-35d3-4b90-a9ba-52779b429f61",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "TYLENOL SINUS C/24 COMP REV",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "67d2c47c-1f28-4c02-ad40-193ebdfc86ab",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CEFALEXINA 500 MG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "40feadbf-e486-4bc0-a674-526b7bcb9c7b",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PARAFUSO 10X30 MA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ce6505c7-1cc1-44a3-b222-88cf3f7a03ff",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GOMA XANTANA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3988933b-9354-40ae-bdb7-7be8a1b6da63",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ALGODAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "7be3f713-2fcb-4bc2-824f-bda1e0e3b6fc",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ESPARADRAPO CREMER 2,5CMX4,5M",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "faa2ec5c-c720-4e0b-a6d4-049566ffd160",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAND-AID",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d989a0c6-f4dd-4242-90e3-c700433272ee",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SORO FISIOLOGICO 250ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "41061ba6-9c1c-4366-a362-0d1f3f6cea5f",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIPIRONA 1G C/10 COMP",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0b995d38-9fde-450f-a72f-46cc69a674b4",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FENAFLAN ICE MASSAGEADOR AEROS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "53ad81a2-b93b-4f0f-8d62-d73c1d5b6255",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CETOPROFENO 20MG GTS 20ML(GEN",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "568f0c9f-80b1-445a-87d6-5a40dee0c237",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "XEFO 8 MG 20 COMPRIMIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "304bf2d2-a347-40c7-afc9-9e566128672d",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "MIOFLEX A C/12 COMP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "07fc17f5-d682-48d6-83ac-30c11af8083e",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BIOFENAC SPRAY",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "7d6a75e8-5bc5-4a3d-83ba-4ab37e23f7cb",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "MEDICAMENTOS FARMACIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "146788e5-0ae8-4072-b92e-20adc7efe258",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ESPARADRAPO 10 X 4.5M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "3967d9f3-cfb6-4fa7-9f4d-1764ce893bf0",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CETOPROFENO 20MG GTS 20ML(GEN",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "6526929a-9a9f-43d5-8249-6293287e4abc",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SORO FISIOLOGICO 100ML (ARBORE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "a8804242-8e12-48df-98ee-363bcfbb2a72",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PREDNISOLONA 20MG C/10 COMP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "56c7cce6-4b11-40d1-8c88-b25287363fb6",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DERMA NUTRI OLEO CICATRIZANTE 100ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "17208232-51dc-4a08-80c6-47c07ad165b9",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CIPROFLOXACINO 500MG C/ 14 CPR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ebd48caa-376d-4c71-9689-4e93683def87",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PARACETAMOL 750MG 20CPR TEUTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5d1b4ee2-8667-4b29-bbb1-c0d850164e0c",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "COMPRESSA DE GAZE 5X7",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "41936e9a-7c90-4b29-8288-13d3c466cde4",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BELFAREN 50 MG 20 CPR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ac311122-b0ae-4867-89ec-94963999f9a6",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ATADURA 15CM X 1,80 CREMER",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "93c11508-1888-4396-bb8d-698387e13ff7",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 140
    }
  },
  {
    "id": "b6d06961-a34f-4426-8e6f-f92dfd3c3c16",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "67242289-151a-4f6b-840a-572571cb7abb",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e9bcc121-421a-4bf7-8c8b-368238513504",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "e0bc5a49-965d-4faf-b242-d7701b6105fc",
    "codigo": "4.1.01.01.0020",
    "descricao": "SALARIOS E ORDENADOS APRENDIZES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SALARIOS E ORDENADOS - MENOR APRENDIZ",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "027654bf-3a68-4581-bdc3-06b2f3def10d",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 140
    }
  },
  {
    "id": "2cbfc9fe-90ee-4253-888c-1578cb808c86",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "9c9f08cd-0f0d-4a04-adda-3e59f658cb6e",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "b08591eb-ab3c-45f8-aa65-d4221109e32e",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENCARGOS INSS 13 SALARIO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 220
    }
  },
  {
    "id": "0b6eaddb-4088-4b69-9b4c-6c917c56aa14",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO FERIAS ENCARGOS INSS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "2af01e56-38aa-4d1a-aaa5-25afdde94291",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS S/ FERIAS RESCISAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "b56f306f-40bf-431d-9d2b-3b65f68ed8ea",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "caa41a40-2361-42f5-9525-59b8b764ab49",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO FERIAS ENCARGOS INSS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "b3a86fe1-841e-4233-99a1-45deafbc69b2",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENCARGOS INSS 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "832db827-b969-40cc-970e-ddb75e1921d9",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS - I.N.S.S. (2,7%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "298f6f6b-d34c-4779-9ffe-aadb5376bce1",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9e99769d-ea32-4264-afa4-ece7d78dd8dd",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "11e512d4-4dd3-4fc4-b386-f27b7dde2529",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "ef2bced5-c7f4-444d-a2f8-2f10ca0b4f79",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8dd50ebe-98be-4093-b3bb-7eac54370b12",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROVISAO ENCARGOS FERIAS FGTS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "f39f099b-3b36-42e2-96f3-890b4af83264",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2bb2832b-002b-4233-ad35-f2c6c8be6d88",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENC FGTS 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "815ab179-287d-4829-94a8-5f49dd0cdb01",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "ee448fe4-0c9c-4cd4-84b0-373120f0e122",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "875b0796-d736-41af-b91e-0fe03b8987c4",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "7aa6e5a8-1c84-4447-8e6d-e18a4d3b6aa3",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "20553ffd-88b8-4e7e-aa73-f5c7abd3b08d",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENC FGTS 13 SALARIO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 180
    }
  },
  {
    "id": "4d2e61a6-ae59-4db5-9acc-661122e2b6f4",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "86185c0d-416a-44bc-b998-0ead96fb7735",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROVISAO ENCARGOS FERIAS FGTS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 220
    }
  },
  {
    "id": "4dde03b9-5303-4657-bf25-0bb7db6996bf",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 140
    }
  },
  {
    "id": "73561eec-b832-430a-bc70-e7621a6b1324",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ENCARGOS FGTS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "f3f40f8e-4527-4cf0-a624-02f1b22c1896",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ENCARGOS FGTS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "24f10993-9ff7-4e27-95cc-a9ed7d95f74b",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ENCARGOS FGTS  039251",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "cadb9217-e9ec-4882-ac36-85d78a7f9606",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ee353d09-ab13-4e90-86e1-67b44672c3d4",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "a63794cc-4a24-4c9d-b88d-d2ae7d377471",
    "codigo": "4.1.01.02",
    "descricao": "4.1.01.02",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "9190c300-b620-44fb-b62b-0878bf1b35a4",
    "codigo": "4.1.01.02",
    "descricao": "4.1.01.02",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "e3273091-7972-44e2-a115-00a4ff0a97c1",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "fece3e58-08d6-4593-b8bb-7f85099af10c",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 300
    }
  },
  {
    "id": "62acf880-b6a3-4972-90a3-7f956bec19e8",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE ACESSORIA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "939a0272-4c9b-46aa-bb1a-743e0a02a5fb",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "EXAMES OCUPACIONAIS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "4fb4be2e-d6ba-47ea-9144-7096fba740dc",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE PERICIA, AUDITORIA E ANALISE TECNICA - PRODUÇÃO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "7064faa5-0746-4a7b-ad4a-2100f3e80755",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE SEGURANCA EM INFORMARTICA, BACKUP E OUTROS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "2606b9d7-cd94-4aef-85c4-df4aebf2c9a5",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "ALCOOL ETILICO HIDRATADO CARBURANTE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b58074a4-410e-47ca-9da7-0f4443a473dc",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "XXX",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ffed6a73-b8fb-4488-a710-1568c1718321",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "d462ebfb-8069-4fad-856e-69c655742018",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS MANUTENCAO GERAL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "4f5d58e1-9e9d-4300-8185-3664054a2f9e",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE ASSISTENCIA SOCIAL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "5ea9cfba-4d42-4d7a-beb7-f1f95128cc60",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "9a2f341d-5db7-4125-8c0e-a040da97f642",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSTRUCOES E EDIFICACOES",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "995779a8-147f-4734-8b72-df29686e1776",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 310
    }
  },
  {
    "id": "50f47059-49e1-4def-b847-74ddba3ef805",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "EXAMES OCUPACIONAIS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "8120deb9-b093-4814-bf25-5f0740fd5068",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "83a89811-91f8-48be-acee-27fc440f32c9",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS MANUTENCAO GERAL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "650d854c-6a61-4b57-9147-d2e998995e0a",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "OLEO DIESEL S10 CLASSE B 8% BIODIESEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ac298e04-117d-4540-b0de-772753ecf8cc",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE DEDETIZACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "6656dc4e-edc8-45ce-811a-88c3338cee53",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9aee143d-1231-4aa5-9474-71b1ce401f1e",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSTRUCOES E EDIFICACOES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f6775db8-d470-451b-b397-4b46a3069b05",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE ACESSORIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "190d10b4-6e2a-4492-b59d-be0278f189fd",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE SEGURANCA EM INFORMARTICA, BACKUP E OUTROS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "58968ccd-cdc9-421a-acf6-a28da5aca695",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE MANUTENCAO DE CERCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e48c2faf-be00-4e44-b18c-084e8db9c53a",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "fab9743e-f029-4bec-8ddf-af794b552876",
    "codigo": "4.1.01.02.0009",
    "descricao": "HONORARIOS ESTAGIARIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "BOLSA COMPLEM. EDUCACIONAL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "298d7f65-f531-4cf6-a6cc-c77efb79030e",
    "codigo": "4.1.01.03",
    "descricao": "4.1.01.03",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "d109a09f-5b14-48f1-8089-9fd4d8e79122",
    "codigo": "4.1.01.03.0002",
    "descricao": "LOCACOES DE MAQUINAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.1.01.03",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.03-LOCACOES",
    "nomeProduto": "LOCACOES DE MAQUINAS 0001",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3005a7ec-5075-42d0-a4da-020010ededfb",
    "codigo": "4.1.01.04",
    "descricao": "4.1.01.04",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "5d34f810-7eb7-44d6-80c2-03f86bb51f1f",
    "codigo": "4.1.01.04",
    "descricao": "4.1.01.04",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "9d84fd79-0ad4-4197-be0e-2f367ad05343",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "3225d58a-6cf0-47b1-a8f7-9b3fdd6e3824",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESENGRIPANTE SPRAY 300 ml",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "9db83102-4de9-45c8-8c8f-ab8db5d47e74",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GASOLINA COMUM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "cb9ae751-c6b8-4fad-b359-c1fe4b229537",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GAS LIQUEFEITO PETROLEO (GLP) 13KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "1be80380-a389-4c93-ad46-8baa7d3ced9d",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO LUBRIF SAE 90 API GL-5",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "6dc39f70-9136-43af-b50d-df1a9130a499",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO LUBRIF SAE 30 API TC FR 500ML 2T",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f61a0337-79fc-431f-b197-0f3f95388f06",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 230
    }
  },
  {
    "id": "319d933a-3fa0-47ea-9af3-9f27423de549",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GRAXA LUBRIF SABAO LITIO NLGI-2 BALDE DE 20 KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4f8a2e41-fbb5-4cce-a386-8c27ee4da7bf",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GAS LIQUEFEITO PETROLEO (GLP) 13KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "79bf2fc8-d029-4993-a720-1ba86d141aea",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO LUBRIFICANTE 2T 8017H 500ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "69e87dff-7296-497e-9e96-07e639ebbd36",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "56559a82-3eba-4931-b36c-27e656563eec",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GRAXA LUBRIF SABAO LITIO NLGI-2 BALDE DE 20 KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b35493e3-c35e-4930-b46e-b40f6f1ddd3d",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESENGRIPANTE SPRAY 300 ml",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "44a13549-9f7e-49b4-8080-d0d65d72d1dd",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e6f758c4-498e-4559-8aef-d34b423770d6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "0c8f4268-d787-4013-abd7-b7e95cda0444",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA MANGOTE REFORCADA 1 1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "02d055df-1555-4e64-96c9-9aeb3afffe91",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA 3/4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "14e2eab3-8e19-497d-8caf-ba35f58a20d2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNC 16F 3/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "289f5fe7-c983-4627-b7e8-58d1da0cdde1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA INSULOK NYLON PRETA M4,8X300",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6d32faf2-86bd-4b7c-a098-cf9967f11f0b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 3/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "84f07869-d826-4aa9-8fe5-6c0e9cc9b59f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "147bf3c3-f395-4ef7-ac5b-0fee88ff8849",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO 3,5X35 PA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "25b56e2c-34a6-476c-97da-07f268f87485",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO ALLEN HC9966",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d5fc0877-af3f-4b38-8eeb-bb80cf024c47",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA   R219255",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "9f7ede7d-2ced-4a44-8903-b2b06ca5acef",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 3/4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "24cbc7da-b41f-4cee-b533-fc77243d4e86",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA INSULOK NYLON PRETA 7,6X450MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "03481bd4-69ad-4760-ae84-0edb876517e3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TAMBOR PLASTICO 30 LITROS SEM TAMPA PARA COLETA BORRACHA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9ab8a50d-9b31-45b9-b953-a5fb23f423ad",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA DE NYLON 05 06 08 MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "820c9b57-1e6a-4301-9193-df49d53a66cf",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO MADEIRA CHIPBOARD CABECA CHATA PHILIPS 4,5X45",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d82a7bf1-274a-455b-b9d7-8f221eebcc18",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CONJUNTO COROA 15Z-DESTR DUPLO EG-1939 0503060607",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3c416f7e-cb83-4f52-aa7b-58171336a8ff",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE EM BARRA MAMAE BEBE 100G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "42fc9053-3737-47b1-9e49-9d1ff9a82821",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LENCO UMEDECIDO MAMAE BEBE 50 UND",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "27986805-e169-4b70-9fd8-5e30234f5b1c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SHAMPOO MAMAE BEBE 200 ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "20bbe1e1-5ed5-415e-bf06-7454b0ada22d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CONDICIONADOR MAMAE BEBE 200 ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0a85e3cb-ea8b-42e4-94bf-be9f10f47fa8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO HIDRATANTE MAMAE BEBE 200 ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "cc838979-0185-49eb-affc-dd96785ca899",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGUA DE COLONIA MAMAE BEBE 100 ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9f0f5187-cfb7-4f4f-ab19-6a0dec39e424",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BOLSA MATERNIDADE MAMAE BEBE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0a19bfe7-1b55-447c-b7d7-2885088130f1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GRAMPO ELASTICO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f00721e3-9aed-42e0-b236-9b8cf0ebf316",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MANGUEIRA GASOLINA 5,0MM X 2,50",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a5d2cbe5-ae9f-4c3f-b5b6-f33f2673813d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REPARO CARBURADOR 0 66",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "087d1b0b-4658-4c8e-982e-7abbebe029dc",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA DE ENCOSTO 8X15X75X1,3MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ef3f3c81-dfe5-42e8-8c89-38fed61de2ea",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEX MA 08",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9d1baf3a-c28a-499e-9f55-be566f1da3b5",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TAMPA PARTIDA BRIGGS E STRATTON 594062",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d4581a11-0f72-487b-92da-236a5db81b09",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VELA DE IGNICAO NGK BPMR7A",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "653d50af-5fa7-4a4e-9589-10518b70e7ff",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FILTRO DE COMBUSTIVEL 98439682",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d1c8e956-5942-4807-af6c-076f356044ce",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TAMPA 87577690",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "df4ebdc5-506d-4090-ba62-95d971d769c6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "POLIA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a576a240-0d34-458b-9178-c7282be97dbc",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE 2 TELAS INOX 4 1/2X1/8X7/8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3cf5f425-d729-4efc-9919-615f6b0f29ca",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO 46 X 2,5MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "25d96f66-bf8c-41a5-92f6-d5560fc6fd45",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MANTA ASFALTICA ALUMINIZADA 150MMX10M",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "308f385b-5efe-439b-9a33-bfd37fe72369",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REBITE REPUXO (POP) ALUMINIO 4.0X22MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "46b092b1-7a42-4a20-a4af-ebe2bf06efb1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE 2 TELAS INOX 1.0MM 4.1/2X0,39X7/8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "49061ec1-e2c7-43d6-8602-0649d60082c3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO SOLDA 2,50MM AWS E 308-17",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e2d33926-0808-4621-8439-9792526ed5d5",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO 6MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "513f8098-5d73-4858-a658-3ba8a66ed135",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO AUTO BROCANTE CABECA FLANGEADA PHILIPS 4.2X13MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3dc0b875-9a4f-4a42-8b1a-5ba3136a505d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO 4MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "5038d272-ea3a-4036-9446-6ffded144c5a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO DORMER 7MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "6ae35d24-b2a1-4cd0-bd1b-a51aae97fbfc",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA ISOLANTE 18MM X 20M 3M",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c9dcca8a-e465-418e-9c08-f2b58a2bddf6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SEXT ROSCA SOBERBA 1/4X70 CISER",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "42c83e45-bb57-4cde-a1c1-12b551e0dc2c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE INOX EHT 7X5/64X7/8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "342c4223-65a2-4570-8f20-8ff30987ace7",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FILTRO OLEO LUBRIFICANTE TECFIL PSL339",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6a22aed6-5559-4025-8b75-ca225c7e3486",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FILTRO COMBUSTIVEL MOTOR MANN WK1060/1",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c0234e05-6f1e-4973-8495-107574e0c8da",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FILTRO DE COMBUSTIVEL MANN WK962/13",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "afab2704-0601-4d85-a0b9-1015b564ce38",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA 10 C/ ANEL BRANCA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "637957a5-87eb-43ba-9857-d69db0de5bab",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO CHIPBOARD CABECA CHATA 5,0X60",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "95887954-ad8c-458f-bc7c-f6156b5acb35",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO CHIP 5,0 X 35MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "92c3ba14-b9ae-42a6-9000-ed68d0dd8fe8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REBITE REPUXO (POP) ALUMINIO 6X30MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "09371307-246d-4f19-8aa0-72c102c1e9d6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE ACO INOX 4,1/2X0 40X7/8 TYROLIT",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9c6a0257-0899-4c58-9745-b6bb097cb2b2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORTA ELETRODO SOLDAGEM 500A",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2f118da8-eee2-49c2-b265-0cb03d76dda8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LENTE INCOLOR RETANGULAR PARA MASCARA DE SOLDA 105MMX115MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "dc9b3890-38a5-4186-b2cd-fa9bfb5d3974",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA AE 5/16",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d3ad70d6-f382-42ca-8391-3d3f68fb5671",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA 1/4 X 1,2",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0764c53b-f544-4d54-bff6-f0c24daf5221",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEX NC D 1/4",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9b030219-e7f8-4839-b2b8-55afd440c157",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FRANCES 1/4X5",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "5a3ee73c-d726-4762-b1dc-4a10b9e40c23",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO DORMER 4,5MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "62be9842-7da6-4459-9613-47d1fc1836f0",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO DORMER 06MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "1ecfcac3-79bc-467f-8ecf-55d155a24e42",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO DORMER 5,5MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "396a9d56-f329-4264-bbe2-0d18395ce41b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO SOLDA 3,25MM 48.04 ESAB",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "4e024f8a-c268-4602-8fa8-5bf188fc43d0",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO AUTO BROCANTE 5.5X1",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6c219624-ec15-4f3c-9c7f-97a2b0c843b4",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADESIVO COLA INSTANTANEA TEK BOND 793 100GR",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e4b19fc1-130e-4f42-9cda-dcfbf7945da3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO 03,5MM IRWIN",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ebb32377-fb77-4805-bcdb-72c5dfd19f39",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORRENTE ZINCADA ELO CURTO 5/16\" (8MM)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "541724e8-72b1-4249-8974-68911ffd3af2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA FIXACAO NYLON FU10",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "cf5039a1-18f8-4c32-85a9-d7ead91b22c9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO DORMER 05 MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "85d50b7f-832f-4521-841b-cbd8f41561db",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REBITE REPUXO (POP) ALUM 6X19MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0cb90f12-bf4a-4355-891a-a6d5aef923e5",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE DIAMANTADO SECO 110X22,2MM SPARTA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ee9001e6-c8ad-4653-8ad5-342fb546ccca",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO DIAGRAMA TACOGRAFO 125KM/H 24 HORAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "18b75692-ff6f-40e3-9a09-dc62e25b9b00",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FRANCES 3/8X7.1/2 ACO 5.8 POLIDO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6056e88f-f43d-4ba1-b774-66632b41cbbe",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DENTE CORRENTE MOTO SERRA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8c1b07c4-4eff-4d8d-97e4-82d3e922a71f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SEXTAVADO 10X30 ACO 8.8 FOSFATIZADO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "8fbd1456-d98e-4e3d-95bc-41bfc747fc60",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA 3/8L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "a420ecab-b0e6-4982-9e33-e7b120590231",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA D 3/8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ee189a15-66d8-4aa2-a42c-f69ec3f5c71a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA 5/8 POLIDA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a78e7294-946e-4d0a-ac46-62170b444f75",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CALIBRADOR AR E AGUA 06 A 50 LIBRAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c467e7f8-d67a-4288-b1ac-8663e55ce72b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXTAVADA 1/4",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "5685ea63-a4ad-4ae7-af05-6ded538c4440",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXTAVADA 5/8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f9884a0a-c679-4e0c-9d1b-71e66f553553",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXTAVADA 3/8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "814d1f34-b0ba-4927-8d2c-006fad5bd9dc",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SEXTAVADO 1/4X2 ACO 8.8 FOSFATIZADO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6ad7185c-5748-4cc9-a33f-c91246dd9a62",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA 5/16 POLIDA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f6a04c25-b0cf-463c-ae72-1793daf85003",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXTAVADA 10MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f556b0f2-4096-47d4-8479-aeb07ed28cdf",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA FUNIL 3/8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c227f482-bc15-421f-b0b1-4123702283c3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA INOX 304 5/16 UNF 24F 1M",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "897e301f-3e49-470d-a33a-7734ae777789",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LACRE SSB LOK  1,71MM ZAMAC CABO GALVANIZADO 20 CM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "00ae1226-d15c-407a-a071-e399a6222071",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIXA D'AGUA FOLHA GRANA 240",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "c59ca81d-52d8-4b6e-be59-68d6619e18bd",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MODULO BIFACIAL 545W CABO 1.3M MAXEON",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3aadfc06-c8f7-4f9e-afae-3cc77f7f4d9c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MB RUGGI 3SC8 123 110 1100W",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "1cfccb5a-d9d5-4321-b102-7eb27e8f63c6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNC 14F 7/16",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8677e550-7155-4d55-9e00-398061e33e07",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA 7/16",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d2084e9a-03aa-4dd4-8983-b28bca650240",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA 3/8 CAP00003",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "06a9a13d-9850-42d6-8cf7-b87e07d29582",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA AUTO TRAV MA 06",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "59648a76-f123-45d8-8066-4775bd6f3d7a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "26376-PARAFUSO 9/16 X 2 UNF P TIPO CRAVO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b9aabc77-338d-4945-b7cd-5c8930158b24",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X4.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "dd880a98-4e14-40bd-9e7f-b2b3d7b4f190",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA PARA PARAFUSO CASALE 7500113",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "41334f86-7766-45ef-8346-d7e8330e4858",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIXA D'AGUA FOLHA GRANA 220",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "df58e203-dcca-4d54-bd80-117d2eba57b4",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 16F 3/8X1M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "9989159c-6438-4022-97c3-1321d2d6ba35",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA PRESSAO MEDIA ACO MOLA 1/2 DIN 127",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d65d7bfd-cbd2-4e7d-9c9a-885fa8ef314b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIXA FERRO FOLHA GRANA 80",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "cdbd5203-f231-44af-9370-40b752fbd616",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIXA FERRO FOLHA GRANA 100",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "baa76709-3156-4c5c-a4cc-cf6a8611fe06",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "39a92e67-45ca-42d9-aa46-c1f58e89601a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PLUG FEMEA SOBR 2P 10A 250V BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "818dd116-94a1-42fd-a3e7-018622a141c7",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX PARLOCK ALTA 8.8 UNC 10F 3/4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e2e5343f-6e73-41d1-a04d-fc7365135bb2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA - 900035004",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d1572865-9e22-48d6-9f7a-96b78ce3d51f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PLUG MACHO SOBR 2P 10A 250V BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "34ee9a72-3f43-4915-840e-b4c38403efd3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PLUG MACHO SOBR 2P 20A 250V BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "3e61016f-550c-42dc-9863-89017a5b0b9c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA AE 5/16 2MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "3d81d23b-7a3d-4795-985f-ad57c45221c1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CURVA 90°  PTA/BSA SOLD IRRIGA - LF 50 CB",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "cbc22f84-bd5d-413b-ae9a-674869f10bc6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PLUG FEMEA SOBR 2P 20A 250V BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e13dd8ae-844d-47d8-8093-2fe945dec387",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNC 24F 3/16",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "1235cf9d-673a-40e1-a232-494c3c33a650",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELO FUSIVEL ALTA TENSAO 8K",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "1ff26bcb-926f-43d0-beec-4cd3e5a5fcc6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SX RT 8.8 UNF 24F 5/16X1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "db86cdf9-bcfe-4f8c-8720-159f0a589dab",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO DORMER 06MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "eda8f1c7-ada5-49ac-a5d6-95fba9ae9882",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d0d09c8b-4d67-4d1b-a98f-a2af9813ccf9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE 2 TELAS INOX 1.0MM 4.1/2X0,39X7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "cb8ad66d-a786-4118-9890-0e7e898e7412",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE INOX EHT 7X5/64X7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 70
    }
  },
  {
    "id": "dfa8ae51-58f8-4c60-9a33-02023bddd4b7",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COLA 3M 50 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "54b4cdc5-75cd-4063-90c2-d2e9c6729b2c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMATAO REDONDO 5,5X200MM STIHL 56057735506",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b4322dce-9032-40f5-876e-07a9f4331bbd",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "179914-PARAFUSO P/ VASO BUCHA S-10 75MM PAR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ab28b10a-94ef-4f9a-aa19-ca6028a8552a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TERMINAL ENCAIXE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "eab32141-b38d-4b13-8334-8cde2d053c1c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA ISOLANTE ALTA FUSAO 10MT 3M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "1f2fa125-0852-48e3-90a2-b40c41e8ed7a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 12F 9/16X4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "97bf4611-48f0-4b6b-9a58-0fa4defaf069",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 3/4X1M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "68bf3dc5-8c43-44b0-88c6-6e64056c3350",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA ISOLANTE PVC 0,18MM PT 19MMX20M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7c0b83dc-c45b-4bf8-8896-c299c400e43d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CONJ. PARAFUSO, ARRUELAS E PORCA BALDAN 54200100908",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "24dc9d01-d583-45bf-834f-c0c51435f449",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TERMINAL 222.02.04",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "bcd6b87b-6cbf-4f5d-8b79-ae1d3dbf8f18",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO 10MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4b5a5db7-c2b8-4716-8587-77509f58842b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 10F 3/4X4.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "9e65282e-65f2-4134-85f1-666e87032947",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FILTRO DE COMBUSTIVEL BOSCH 0986450704",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "bea598bd-0b36-4b0d-8230-bca3bb932032",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO DESBASTE 4.1/2X3/16X7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "092d3781-2b5d-467a-be4c-19d5cab57508",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO DESBASTE 7X1/4X7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e9196339-ff66-473a-aa19-5057e2eaa9c3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RETENTOR VEDACAO ARCA 6121BRG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "72e7ed9e-24d3-47f2-ac46-5af11a024a92",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REFLETOR LED 100W 127/220V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "fa9bd81e-9f66-4fca-bc9f-a55bb2a39207",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RETENTOR VEDACAO ARCA 6739BRG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "be1930e0-dbde-47b7-86a3-90b2aecd4e36",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO 46 X 2,5MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "edf75ee5-f73e-4608-aedc-68928dc36ff1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TERMINAL 1 FURO 1 COMPRESSAO 50MM2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e589ad7e-8bf1-4b55-82ad-7de215e2a9c5",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO 8MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b9a04c85-1dab-4ef5-ac90-13917f112edc",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA 3/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "2684d1bc-8f6b-40fe-aea9-0d7887a9ad16",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRENA IRWIN 5MT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "88ca40f2-cbd2-4000-a848-a139cce4b4ea",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 11F 5/8X7",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "7aeb6ad6-5285-45f8-b146-d4f784baac85",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SX RT 8.8 UNC 14F 7/16X1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "73288608-c909-4e41-8846-fb28d79ef564",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNF 14F 7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "31a1a5b6-bbd9-45f1-adf6-7ee7a1782dae",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "22220 E/C3 SKF ROLAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "364b631c-ebd6-4a77-991d-b43db61d604f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUJAO GALVANIZADO 2.1/2\"",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "186e14ec-7802-41b2-8829-9fb2f6140272",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADESIVO EPOXI 1KG SIKADUR-32",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "02f2c8e5-8aab-4352-bf5f-0686043db8ed",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAINEL LED QD SOBR 28X28 6500K 24W BIV PC",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5b3c45ac-1cc1-4a70-b0b8-c743e9fe79fe",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X11",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c2d9d8c5-bccb-4b45-bb99-2f3f080a4934",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO AL CC CIL 12.9 RT MA 1,75 M12X35",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "47e40db4-9fd6-4dec-984b-5605e8fbfd48",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CRUZETA CARDAN SPICER 5160X",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "42639200-0627-439c-892d-5dfafe7377e0",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RELE FOTOELETRICO 1000W",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "7fdb8892-13c0-442c-ad09-74c1ad6ea041",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SELO MECANICO 1 INPACOM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ca1434dd-4392-4d5b-b49a-71bc7aec95f6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f61d42f2-53a4-43dc-b0af-417d9452bb63",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA GALVANIZADA 2.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e7eb5234-61f7-4f3c-a4cf-7bb402a83a25",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PECAS, ACESSORIOS E MATERIAIS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "1d1c320a-61c6-4765-ac14-b4cbbde3ff42",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 10F 3/4X6",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "741f0226-dccb-40bf-bfb1-9282b2830e38",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X10",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "51061fb9-ba98-4226-b467-79f84fe36c82",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TERMINAL CARDAN 30MM AEMCO CC106",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "05e53606-62b8-450f-81ee-1da2328e6701",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAINEL LED LLUM SOB 24W 30X30 6500K",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "35264a37-0dc4-43bb-815c-ae83d2ee8b31",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA CARTER MF 0576101",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c3f3a79d-5de4-431e-aced-de2d3102c229",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "X4 SUPRA- /BB 5,0 L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "a456808b-e0b1-48d2-840b-10b6d425fd1a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BATERIA RECARREGAVEL DE LI-ION 9800MAH SD 18650 3.7V - 4,2V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "cbdffa87-58f0-4bd8-96e6-b2338830b808",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REFLETOR LED 300W 127/220V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "343a485c-d39f-4bc3-acb2-6a31d9154992",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORRENTE MOTOSSERRA 36 DENTES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "edb33cce-3725-4008-b279-b533fa02725a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLAMENTO ROLOS CONICOS SKF 32211 J2/Q",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5ddf03ca-4f70-4c53-b2a4-84e642c87cb1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 11F 5/8X4.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e63f371d-3e51-4f9e-860f-9ecc323d5fdd",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TERMINAL CARDAN FURO QUADRADO MENOR 30MM AEMCO CC251",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "995f3c3a-c7b3-4b85-9065-4a08de5aabb4",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "KIT CAIXA DE LIGACAO 63 W22",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "04db5258-b91b-49a1-bc64-06be10c17284",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "344CC59/1000 BARRA MACHO QUADRADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "085b45dd-14c5-475b-bc11-6cf291162317",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CABO FLEX 50MM AZUL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ea2d9408-b151-468b-b25b-42290b519c7e",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RESINA POLIESTER",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f4083518-7251-47b4-8ad7-2c4a10ad2f29",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROTOR BRONZE 134MM THEBE P-15",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "1648bfd3-90d9-4a2c-80e4-266b2b0ddc81",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORRENTE ROLO SIMPLES 5/8 ASA 50",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e8400176-6439-4a8b-9518-6916aeaf43b1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BATERIA AUTOMOTIVA 12V 180A",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "fd99fe6a-ff9d-408e-b4b5-73bf49b12e4e",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CABO FLEX 50MM PRETO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "dcb97c68-a302-4e87-911a-9d2e46697542",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PREGO COM CABECA LISO ACO POLIDO 17X21MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "2d765983-548d-41ce-8f23-bbcc2d8c85d6",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADESIVO PLASTICO CPVC FR 175G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6ba6aa78-bb0c-4231-b58a-3dfafda55d59",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PE PARA COCHO DE CIMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "7b3608aa-d414-45ae-aa4c-59cd867f8c4b",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COCHO DE CIMENTO MEIA MANILHA 1M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "2894457f-5b50-47d9-9e33-05301096dc47",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL PVC MARROM 25MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c7cce19c-e5bd-44c8-a990-583215c1f39a",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR PARA MAGUEIRA METAL 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "edef5045-7bca-42ef-b80e-2c41e25febf4",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CAP SOLDÁVEL 25MM PLASTUBOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "19ce324c-4622-4370-b820-f055850e4fea",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA PVC SOLDAVEL MARRON COM ROSCA LR 32MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2719a3d2-51a1-4942-8344-3086086acb43",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL 32MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "5ef87ae8-892b-45bc-be87-7ffbb631d1c9",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "THINNER 5 LITROS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "e858b1b6-1be0-492d-9365-263da146aab7",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA ESMALTE SINTETICO VERMELHO GOYA LT 3600ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "018944e8-3306-49a4-8ad5-28877a26e2a5",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA BASE D'AGUA AMARELO TERRA 20 LTS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "14bedc91-9f51-4e15-9ecb-ca1b57d10a50",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA PLASTICA PAREDE OCA 10X60",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "dc6301a2-2a0e-409a-8568-f233ec14af7c",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GRAMPO CERCA GERDAU 1 X 9 POLIDO 1KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "7aa0a546-3231-4572-b271-ed8d8e732e8c",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARESTE LONGA PARA CERCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4779188d-a872-47e3-8e16-93d169b3da0a",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA PVC SOLDAVEL MARRON COM ROSCA LR 50MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b36edf5d-3018-4592-a498-0e682d418ea6",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL PVC AZUL 50MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c8ecb521-c5cd-4c59-bdbb-73e37f8131ed",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA SPRAY PRETO FOSCO 400ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "862a1b9c-f08f-41f7-93bd-2025c19c10ab",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LASCA DE AMARU 2,20",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "934e30fe-cb8f-4f8a-89be-d477c96914c7",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TIJOLO COMUM MACICO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "6d23f812-c964-4b54-a17e-0277e1023928",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DOBRADICA QUADRADA 140X140MM NR 3",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "63aa1f70-6000-498b-83da-0cf819a5085d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CIMENTO  CP II-E-32 50KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "121cea6d-a4d1-4113-bf99-6fb2bde3d4e4",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BRITA 0 - TON",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "367b3aff-88d0-454c-9e3c-76316a891e24",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARAME LISO BELGO Z-700",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "da81635f-0216-4759-abe8-0658e15a0392",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "KIT COMPLETO P/ BANHEIRO C/ TAMPA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3b051a5e-94b2-4a31-82dd-842782a8fa5e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BRITA 00 - M3",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ca703fd6-51b3-4d2b-99ae-8073137f1122",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AREIA GROSSA - M3",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "0372a766-3de1-4a59-92fe-3740395eaa3f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BOIA METALICA ROSCA EXTERNA 1.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b1a70e67-f687-4115-b19b-2bbbc835d9c9",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LASCA DE ACAPU 14CMX2,20M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "01e05b5e-f28b-4b7e-b6db-61909dd99933",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA 1 C/ROSCA TIGRE BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "95c93f54-5ae1-4c56-b2cd-40cfcd5893ad",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DILUENTE PARA PU 900ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "32ec6a62-dafb-4cf0-9622-9e4136a11edf",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "UNIAO 1.1/2\" INTERNA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a3dc2874-8bcb-4990-9f05-ceda39fae14c",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PINCEL MEDIO CERDAS BRANCA CABO PLASTICO 1 1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "fc70f8fe-9998-464d-9a9a-c7fc381b142e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ENGATE FLEXIVEL PVC 1/2X60CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b299f471-531b-437a-976d-e25c300a677f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "UNIAO SOLDAVEL PVC MARROM 50MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "8d5b7da1-a82e-49ef-8ad7-c3c8f2de4f55",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PREGO COM CABECA LISO ACO POLIDO 18X24MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "6df947cc-cb56-41c0-8867-1417bc55fc42",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLO PARA RESINA LA 23 CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "aa5c0a6c-4035-4a2c-a6b2-9b01cf35ace5",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AREIA NATURAL GROSSA LAVADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "1d6c3abd-57e7-4e65-ad55-10e8d39d09b1",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA EPOXI BT 03 2880 ML + ENDURECEDOR PARA EPOXI 720 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "07acdc34-5996-4797-afb4-cb13f2d529ed",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "KIT PISCINA AZUL (1 GL TINTA PU + 1 UND CATAL + 1 LT DILUENTE PU 900ML)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "93eeea3d-0df6-4846-b681-191ed254819d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MADEIRA SERRADA 5,0X2,5CMX2M",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "92f13e74-9011-47f9-bb71-52505b6fac8e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR INTERNO 1\" ROSCA EXTERNA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a35f8df6-1b55-4d77-83d5-b7c95ae4b8b6",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR INTERNO 2 POL TIPO ROSCA EXTERNA PT",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "30b9d997-9a48-4e96-87c4-84e3a46e2520",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL LR 25MM X 1/2",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "53c063bf-23ab-4053-8ec9-459bdad7991f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO SOLDAVEL 25MM 6M - TIGRE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "149de54c-f6ed-4f0a-8a19-372bfc18061f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA REDUCAO SOLDAVEL PVC 50X25MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "06b95b97-241c-43a2-93ab-3123bd4b8790",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOELHO SOLDÁVEL 50MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "1337c439-6959-4165-943d-01bf29935821",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TORNEIRA JARDIM 1/2 E 3/4 HERC",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3127d0fa-5e60-43d6-8926-3a454defa28e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADESIVO PVC FRASCO 175G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8d26a4fa-ed17-4f25-8319-c2649b2ad355",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CHUVEIRO FRIO C/BRA S/REG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a098b5e2-a25d-4808-9233-6568bec5ec57",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO SOLDÁVEL 50MM MT",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7ca524de-c30c-4c1a-b038-ffe2dd6c91f6",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CAIXA DESCARGA 9LT ASTRA BRANCA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "1b0aa20a-d762-4c62-ba2c-f1f2540d23f2",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CIMENTO 50KG TODAS OBRAS TOCANTINS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "16a5b0d2-8073-4c31-a017-95c56850ecc8",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORTA VENEZIANA 60 ZEMA PLUS (GALVANIZADA) DIREITA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8e30d8d1-6d71-4f2d-9220-386b1a9616df",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORTA VENEZIANA 60 ZEMA PLUS (GALVANIZADA) ESQUERDA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "81ee095a-2b43-4094-ad10-03639ded7290",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRINCHA PLUMATEC 3/4 ''315",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "04ef7760-9f0f-493f-8336-0c637b7651b7",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PINCEL MEDIO CERDAS BRANCA CABO PLASTICO 3/4",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "686b1ac2-1a20-4c52-9102-30c88f00fa66",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXTAVADA 5/16",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d433379a-d173-4fc5-8527-ba819b51b28d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA SPRAY CHEMI 350 ML ALT. TEMP.",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2108b051-1c76-4d79-9ad5-506dbc2510a6",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA SPRAY USO GERAL 400ML/250 GRAMASPRETO BRI",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "4c384078-7645-4370-bfec-fc25ee423550",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA SPRAY ESMALTE SINT PRETO BRILHANTE 350 ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "678109c7-c9ad-4e40-abe8-7b7205d1cc28",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MANTA ASFALTICA ALUMINIZADA AUTO ADESIVA 30CM X 10MT",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c7aeb82c-eb60-45c2-a109-5348f822b12d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO 2.5 ESAB O.K 6013",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "08f831f0-4bb1-4136-8fa7-10c41fcc4688",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO 3.25 ESAB O.K 7018",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b07daf5a-08ee-46a5-be37-84594a4cf55d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA SPRAY PRETO PARA METAL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "51ef17c8-82b7-4017-a565-f9e41d88afcb",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GRAMPO CB ACO 3/8\"",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "55a7c342-e44d-425c-b2cf-91935d132406",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VIGOTA DE MADEIRA 3,5 MTS X 0,05 X 0,11 CM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "46fffcdd-3b91-45e8-92e0-28650c1c47cb",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VEDALIT  3,600",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "4b1bb45f-6438-4cc3-90bd-d32c64a86980",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO WELD 2,50 X46",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "73b8e37d-7d9c-433d-87ab-cc8fc16d5208",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FECHADURA ALIANCA INOX PREMIUM EXTERNA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a6c7c464-d5fd-4aaa-a96f-93f5ddc9e838",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO DE CONCRETO PS-1 DN 1000MM X 1M",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "dfb85596-fad3-403f-af92-74e031b1b765",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARAME RECOZIDO 14 - 1KG ARCELON MITTAL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "40df2900-23e5-40c2-93a3-8e4926eb67fa",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TIJOLO FURADO 6 FUROS 14X09X24 (NORMAL)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "755718f2-ac27-4e95-9f88-ea4c5740aaca",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR SOLDAVEL CURTO 32 X 1\" TIGRE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "bc335f5c-c1be-4597-821e-68f2be30b425",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOELHO 90° PVC MARROM SOLDAVEL 50MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f8f69e3c-0ab7-4c14-9f1a-4810c7ca5633",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOELHO 90° PVC AZUL 50MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "46da39e9-cec2-4083-9163-1b88b53f10ed",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VEDA ROSCA 18MMX50M TIGRE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b4521e22-2b4d-44f8-94f7-f9e4c70a95e2",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL PVC MARROM 50MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "01740d4c-4649-4603-b972-dd3240df6207",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9ec7da80-bf9b-4ce8-a00e-ec64705f9130",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISPLAY ACRILICO A4 PORTA FOLHA EXPOSITOR VERTICAL PAREDE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "39630251-27b2-4fed-b174-dd49d86fa7e9",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PASTA EXPOSITOR ACRILICO A4 TRIPLO VERTICAL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a152d733-f162-451d-932c-341dba63e147",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CARIMBO AUTOMATICO PERSONALIZADO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "96645ac9-ab33-4a40-bfe1-9eeede034992",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LACRE FIX 30 CM BRANCO COM CODIGO DE BARRAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "f47e2667-e8bd-43d4-b744-8741e00f1864",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL GRAMATURA 75G/M2 A4 (210X297MM)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "353b506f-4351-4746-931d-22c522f0d58b",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BASTAO MARCADOR VERMELHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "655eb50c-2c0e-4974-bca9-25da84721a24",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESTOPA MALHA COSTURADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 50
    }
  },
  {
    "id": "6ae9d4c0-6965-4ccc-88dc-a63b06ece2d6",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DETERGENTE LIQUIDO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b8bc0487-24e7-4a5e-aa36-0f170c81f8ac",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMPA ALUMINIO 500ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "618fa2c6-308a-49e2-8453-046a98aabc88",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGUA SANITARIA Q-BOA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ff280533-b324-4b4a-8e0d-091ca2699964",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2c1c28ee-6cc3-4af4-bd07-fc39ae9a049d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALCOOL ETILICO ITAJA 70 1L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "38d5e657-976b-4783-9827-d4b437c89966",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VEJA LIMPEZA PESADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4de533f7-ed3e-465d-a611-5905dc4fd3a2",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6087046e-48a7-4585-8c4c-ba8fd2035d13",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9650facb-8a3f-4ba6-871a-2e99de8176c3",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "4d590091-12e3-467b-bda2-c982f946f505",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMPA CONTATO SPRAY",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f22715e2-8874-41c0-b990-24c2070e4bda",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "dc294455-c522-45bf-99b7-8739c9923231",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2cd8bd94-e2bd-40c8-bdbb-57ded696434e",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 5L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "c9ba6279-bf9b-494f-b2b0-388fe8f17d31",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA PARA EMPACOTAMENTO TRANSPARENTE SCOTCH 3M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "624890ae-740c-4859-8bc7-c60eb25f613f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "cf76c4a8-7232-480f-af92-272c5fd0b209",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "37782a7e-9e0e-48ef-b3b8-977e0555cdd2",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "XXXX",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7ef471f6-6890-41df-84bf-f9ff80f0906a",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "6f782b03-3288-4158-b742-ef8872a34435",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESCOVA P LAVAR MULTIUSO CORPO MADEIRA CERDAS POLIPROPILENO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "10a9ebd7-4167-4b86-bc80-8acf674cb650",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORANTE VERMELHO RESIN",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "9d80039e-46b9-44bc-95a7-fdb4be95ddfa",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "9b5844f1-a7b2-414f-99a4-1b338b750bcd",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGUA SANITARIA 1L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "eb150b27-b2b4-4a7d-a514-849b2d3d493a",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "372d0676-d95b-48db-9d11-416f304804a7",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "0d330551-8089-4ae5-a6fe-7c8c9006fcba",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "c0052499-033a-4a64-a11f-336a6fadf9d1",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "e49eed81-f54b-4d04-8b7a-3506afd0c7d6",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "5f42e2c3-66cc-4cfc-ba21-3b29532268e3",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "794c3bef-ceb9-4cb8-9089-1c09c59278b8",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA BRILHUS MULTIUSO L4 P3",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "58457c63-91f1-4d97-99fb-e35084857836",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CERA LIQUIDA VERMELHA 750 ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "c2c65cb6-c2fc-47f7-afbd-cb90a3e03304",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5X1 MINUANO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "88e204a0-f9e2-43ec-be17-77bc644501e0",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO PARA LIXO 40 LT PLASFIL 100X1 PT",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a4d94448-4385-4b96-8b08-5bc31985c2a7",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DUREPOX",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "4a48e800-6caa-4b42-b824-ff0ee4d23d9a",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 5L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "9920adaa-305c-4739-99d0-684e63ed83c7",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA LIMPEZA PELO CONDOR V9",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7e07325c-912b-48f7-825c-9bc5a4529b22",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE LIQUIDO MAGIC",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "18fb0a4f-f105-4399-ac69-e30d562ae2b5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DETERGENTE LIQUIDO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "7e0ffd1e-5604-46fd-9f32-b6afb24b6628",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALCOOL 70% LT",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3a3118dd-d811-4860-a7db-e83b13aa7dd5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO P/ LIXO 30 LTS BOM LIXO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "4e7343f2-fcf0-4ab4-9028-d136bb2c0c17",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VEJA LIMPEZA PESADA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "55a1acc1-10db-4b1c-a20d-cfcbcd01577d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PANO CHÃO 68X48 LIMPAR LAR ATOALHADO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "68b8b81c-ba94-4840-8f42-9c74a562ebb3",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COPO DESCARTAVEL 200ML TRANSPARENTE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "b56ddba7-6675-459c-b38c-b5f29f35ea82",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO SCOTT 300 MT 3 DOBRAS( JOFEL)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b2c2eacf-abc2-4201-864b-ce4521b04def",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO BRANCO PARA LIMPEZA ALVEJADO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "cef19fe4-46bd-46ea-9be6-b9979495a04d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JARRA MEDIDORA 5L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e4bcd9f3-57fa-4188-b5f3-87a2c510c4ba",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO P/ LIXO 100LTS 100 X 1",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e0d26c73-aa72-48a5-a122-96a4390d843d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ORGANIZADOR",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "94a05c41-04b5-45b7-b7cb-6cecd87387fd",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE LIQUIDO DESENGRAXANTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b186dbd2-9d72-496b-8b7d-d2247dfd4dac",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "INSETICIDA AEROSOL BAYGON ACAO TOTAL 395ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5c1b90ec-cb01-4fbb-b44f-336ef7bac177",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALCOOL 70% LT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "7f815e2f-b6dc-4e81-9e15-402ee44fb89c",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO SCOTT 300 MT 3 DOBRAS( JOFEL)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "bf35d879-f887-47a0-9850-a9020656a102",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "fd458ec0-e27f-4f03-b685-d250af2fecbe",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COPO DESCARTAVEL 50ML TRANSPARENTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4c500cfc-48ca-42f6-b2df-02c5516830d5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CADEADO HASTE CURTA 35 MM PAPAIZ",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b9abe28b-69c2-4641-a2c1-c5b12b5dd1b7",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PURIFICADOR BOM AR LAVANDA 360ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e3d3742f-e02c-4f32-b761-875bd3b02196",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE LIQUIDO MAGIC",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "06ef1f11-7bcc-422f-a23c-cd73b230be17",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO P/ LIXO 30 LTS BOM LIXO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "8e6ab579-7e39-40bd-b0ff-754188776c17",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PANO CHÃO 68X48 LIMPAR LAR ATOALHADO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "04741724-d1a5-4f11-801e-53aa3f0739da",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PASTA DESENGRAXANTE TO BLACK 2KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "83252053-a7c7-4f73-a0f2-2ab84ac372f4",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA TIPO GARI 40CMX6CM 1,40MT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "3269a03b-93ea-43e2-97bd-6b0bdc5f726a",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PILHA AA DURACELL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "35343b22-d53b-4066-8d77-dd85c4af64c4",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL TOALHA 2D INTERFOLHADO 22X21CM 1000FL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c65e8e61-15fc-4167-b45b-666d794f3b38",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "EBULIDOR FERVEDOR AQUECEDOR INOX 2000W 220V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "57f6f842-cd88-49c5-b6a9-5dd4a3384b85",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "XXXX",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "606fe163-8acf-499e-a78a-5286800fe617",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COPO DESCARTAVEL 200ML TRANSPARENTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ccd29e24-c20a-4609-84ec-c6281537c3dc",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMA REDONDA 5,5X200",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "63b391ed-fbde-4455-b0bc-dd5641b876fe",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BITS PONTA PHILLIPS PH1 1\" IRWIN",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "19ab0855-67f1-429c-be9b-ea8456cd18e6",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PINO MACHO 2P+T 10 AMP",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8b1bc041-dc10-4db9-bb25-a42deec45ab7",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO DORMER 08 MM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "5d5cc570-5148-45f2-ae1b-624e984605f4",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GRAMPEADOR ALICATE S150 CIS 26/6 P/25 FL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d465423e-e531-4864-b7fb-964ec5bc8e99",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SERRA COPO 16MM - 5/8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b464155b-ae24-4cba-a630-355f429f4f45",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMA REDONDA 4.8X200",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "28b464d1-4a78-494a-a4ea-0f9ca1eceeed",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REFIL PARA FACA DE SANGRIA  18",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9d5b3365-dcab-410e-b056-a17c44724f0a",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMA CHATA MURCA 8 SEM CABO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "4f046b2f-74f9-4ec8-9d71-11d5abbedd1b",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRINCHA 2 1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "570702a3-8d5c-49ca-806d-aadc8478c0c8",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMA CHATA MURCA 8 SEM CABO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "af27128b-62ac-408d-9a0a-9e03c70cfac3",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CHAVE COMBINADA MAYLE 24",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "37d0836e-45c5-40a7-a164-05e55ef34eb7",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALICATE UNIVERSAL 8 POLEGADAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ac31bd69-68b7-477f-a53b-61f4980726ea",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CHAVE COMBINADA MAYLE 19",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f04bcc4f-0128-41f9-8515-4fb0ce960b96",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ENXADA LARGA 2.1/2 LIBRAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5f14fefa-d786-4fbf-b427-81f81f36e30d",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALMOTOLIA 500ML BICO FLEXIVEL VONDER",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b170c8f4-bd9f-4b81-9587-7f954c7bec58",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALICATE FAZENDEIRO 10.1/2 POL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c8d59578-4539-407b-9cef-25e283ac30c4",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MARTELO 27MM TRAMONTINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5236e036-563d-4b3c-9732-8fa02555ffe3",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MAÇARICO LANÇA CHAMAS A GAS 65 CM 2 REGISTROS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "83289c4e-951f-46df-81e3-834711239075",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LAMINA SEGUETA STARRET 14796",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "33054813-55d4-4058-9a1d-1268f02aee0c",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA CHATA PARA MADEIRA 1\"1/4 X 150MM TRAMONTINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c1e87d8b-d61a-43f3-bcdf-a3d8a285e590",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO QUADRADO 45,25 X 45,25 FEMEA L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "009580d7-69d1-49ff-81c1-374e2670abcf",
    "codigo": "4.1.01.05",
    "descricao": "4.1.01.05",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "38a4563a-6b04-4d46-8329-8e3e41de2155",
    "codigo": "4.1.01.05",
    "descricao": "4.1.01.05",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "592becac-968e-4af8-a9b0-d71dcdf446ec",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 21660
    }
  },
  {
    "id": "cbcf22d5-75ee-499f-8561-80c1a55bfdc8",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b89c3275-541a-44ed-8881-0b0dad2fabe8",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 15880
    }
  },
  {
    "id": "5c451ae4-bc42-4d52-8325-ea95ec9ef035",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4a45f5d9-07e2-4b04-9254-53a079504a81",
    "codigo": "4.1.01.06",
    "descricao": "4.1.01.06",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "dc601ce1-a78a-46cd-8f76-fcc1f495ebee",
    "codigo": "4.1.01.06",
    "descricao": "4.1.01.06",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "935976e7-9f87-4455-9337-7c901401e12c",
    "codigo": "4.1.01.06.0002",
    "descricao": "REFEICOES E ESTADIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM HOSPEDAGEM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "e703afe1-3a6a-4d6d-b441-4ee87d1d3307",
    "codigo": "4.1.01.06.0002",
    "descricao": "REFEICOES E ESTADIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM HOSPEDAGEM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "86adfa6d-e7bb-49ce-93fb-4b3fda8e1ce2",
    "codigo": "4.1.01.06.0003",
    "descricao": "QUILOMETRAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM QUILOMETRAGEM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d2cc78b2-91a0-4654-a9a7-dde2f25a75db",
    "codigo": "4.1.01.06.0010",
    "descricao": "OUTRAS DESPESAS DE VIAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "PEDAGIO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "b36cdf0b-13b7-4fed-8f2d-89df2fb59165",
    "codigo": "4.1.01.06.0010",
    "descricao": "OUTRAS DESPESAS DE VIAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "GASTOS COM TAXI",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "2ab710f1-e949-49fc-9e69-c33f8cf66c39",
    "codigo": "4.1.01.06.0010",
    "descricao": "OUTRAS DESPESAS DE VIAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "GASTOS COM TAXI",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "dafcc762-ab87-4a39-bf42-423e2146a35b",
    "codigo": "4.1.01.07",
    "descricao": "4.1.01.07",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "d7513aa8-e161-43a4-9588-20a784120467",
    "codigo": "4.1.01.07",
    "descricao": "4.1.01.07",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "bb00af1e-d5c8-4df6-bd78-652562760403",
    "codigo": "4.1.01.07.0001",
    "descricao": "ENERGIA ELETRICA",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "DESPESAS COM ENERGIA ELETRICA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "d825c2cf-85c9-4b62-8a7a-0adcdc1a96a5",
    "codigo": "4.1.01.07.0001",
    "descricao": "ENERGIA ELETRICA",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "DESPESAS COM ENERGIA ELETRICA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 50
    }
  },
  {
    "id": "bf4d8c6d-2046-4738-924c-5fa2d5c647ae",
    "codigo": "4.1.01.07.0003",
    "descricao": "CORREIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "CORREIOS 039431",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3acb9eba-d2fd-4cad-94be-019ab7618e90",
    "codigo": "4.1.01.11",
    "descricao": "4.1.01.11",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "81d35c80-f4e7-43a1-a8c6-3d8e7ad31c36",
    "codigo": "4.1.01.11",
    "descricao": "4.1.01.11",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "5e4b0745-4b85-4bd1-ae0e-a5685925d165",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BAGACO DE CANA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "11ebd7b5-2192-47df-9523-8cd729a7915f",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CASCA DE SOJA MOIDA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "1a7e1e79-0ae0-4474-85f3-306aeec56cf7",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FARELO DE ARROZ",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "2400dc47-d96e-4db2-adf4-bf99d43ef8c6",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TORTA DE ALGODAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "3d4ff6e5-bd51-4b4f-8e77-9c78a76bfaad",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "GERMEM DE MILHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "10b4bad5-b139-4260-8e98-fe619858485e",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "eb2e6120-923a-46f7-a592-d3c7ee540617",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA GARROTILHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "9712ba2c-e336-41fa-9b1d-85cbdb37c82f",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA STARVAC 12",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "2ba8b3fc-1292-4ba8-815e-93319b743d4b",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BOVI-SHIELD GOLD",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "3ba81dca-9513-4929-9df2-095ec6cf9787",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA RAIVACEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d9fc7b4f-55e5-431b-9155-01f254d52ba2",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BIOXAN 500 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ca256549-c595-4dc5-a6da-7c0d11748198",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PENCIVET PPU 50ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "bd1f3e3b-8874-4cc4-9ddf-ad25affe7722",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SECURECATTLE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f241cefb-be57-4290-bc7a-c205a403338a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TERRAMICINA MAIS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ea84918f-b6d4-44cf-b7b5-7036c06eed95",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ISACORT 10 ML ( CORTVET)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "73a93aa7-cd93-4b79-b2ca-700b63b85aa0",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BANAMINE INJ. 50ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "14ac6ced-3dbf-4b07-9662-5c6f3587b2aa",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA METAL 15 X 18MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "47e002bc-931f-4503-b495-3ff74cf6da83",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO ALLFLEX RASTREADO C/ BOTOM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a112b92b-8bac-417e-baca-0e99cb2d9089",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGEBENDAZOL 15% (AGENER)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7510b11c-a134-401c-b8ba-ed4a1c48d65d",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PE DE BRINCO P/ RASTREAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "68280c71-c31e-4d01-aaf9-b0ec3c7359bf",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "LUVA PARA PROCEDIMENTO CIRURGICO TAMANHO (P)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d8a6c302-b3bb-461b-99fd-3969f5cf175e",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FOLIAR N 1% + P205 30% + MG 1,5%",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "aaee15b0-37de-4c8c-bb54-21e5f8a9fe6b",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FORM 20.05.20",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "87029b56-dbdc-4a3c-b7e6-564eb69c9d08",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "REGULADOR ETHEPHON 720 G/L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "efb023b4-1fea-4796-b51b-8eb8499700f2",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA CLORIMURON-ETIL 250 G/KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 280
    }
  },
  {
    "id": "65e1f9d8-88c0-4269-bb14-1c219b872080",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "703ae8c3-16a8-428c-b93a-4e282a85e152",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA 2,4D DIMETILAMINA 806 G/L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "dadccca4-aa04-4c3e-921e-38cf1a8a3469",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 300
    }
  },
  {
    "id": "2cb4087b-516c-4fe5-8d73-5491cd0d4ebd",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FORMICIDA ISCA FIPRONIL 0,03 G/KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "4c40fcd9-3a35-4f87-8d74-03cdaffb2906",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA CLETODIM 240 G/L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 180
    }
  },
  {
    "id": "eb3fbffb-be17-4196-a420-8886f210b5ac",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "REGULADOR ETHEPHON 100 G/KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e5f0806f-200f-4c49-a1aa-f826eb2f6308",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "df38a66b-476b-4efa-bb23-ff45bd3f6e6f",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "452f021f-624e-457b-a352-d63a8ca84021",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA CLETODIM 240 G/L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "cfb0fdac-b463-455e-a87b-4aa7770f7dee",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA FLUROX + PICLORAN 80 + 80G/L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "4e9bc400-6d91-4a48-9423-a1cf71f60d10",
    "codigo": "4.1.01.21",
    "descricao": "4.1.01.21",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "72124b61-757d-41d6-97f9-b486b80efdf1",
    "codigo": "4.1.01.21",
    "descricao": "4.1.01.21",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "f57f7f34-a208-412f-9c96-b74c152ea879",
    "codigo": "4.1.01.21.0001",
    "descricao": "SEGUROS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "512005c4-4561-44f2-9d72-27ab4c226477",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE INCOLOR AGUIA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 660
    }
  },
  {
    "id": "475f8f83-b183-4129-9a1c-e28b7ea8e073",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 34",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "81098cc3-2f10-4ab2-8a6f-58790e2af0ef",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE CINZA AGUIA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 160
    }
  },
  {
    "id": "fb65a6b4-ece3-4ecf-ac74-dcafbd22f590",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BONE TIPO ARABE HELANCA COR AZUL ROYAL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 740
    }
  },
  {
    "id": "ed9d786c-477c-4304-991d-c16613717a97",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PERNEIRA SEG SINT 3 TALAS S VELCRO TAM G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 520
    }
  },
  {
    "id": "78c94e94-ddf0-4551-8fc6-1ba8d3008467",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MARMITA TERMICA SEM DIVISORIA 1,5L",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 760
    }
  },
  {
    "id": "adfc2966-f663-4166-81c4-b4804963338c",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAPA DE CHUVA PVC MANGAS LONGAS TAM EXG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 720
    }
  },
  {
    "id": "755a9536-646c-4d0f-9617-6e544f10e3f4",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GARRAFAO TERMICO 5L  6915",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 740
    }
  },
  {
    "id": "46e4f2eb-992d-406f-a793-e08a6ff4233a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 36",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "2bfa5248-a74b-4e2d-9e8c-64df0fb1fca0",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 36",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "623f5a42-e6bd-4a6b-ab11-b6ed5fedfea7",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA DE SEGURANCA OPERADOR DE MOTOSSERRA 5 DEDOS Nº 9,5",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d046d71c-75e4-4c4c-8068-fa75b3b2d059",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAPACETE SEGURANCA ACOPLADO PROTETOR AUDITIVO E TELA 6",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a077ffe9-5cd6-4159-8c29-cae58e5dd5ce",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAPACETE FECHADO Nº 58",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "eca42ea9-bb38-408a-b00a-da8091e9c061",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BLUSAO OPERADOR DE MOTOSSERRA TAM. XG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f146d231-bdf6-4d5e-956d-4cdc2df091b7",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 43",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 140
    }
  },
  {
    "id": "e56d2254-c4a9-40bf-9557-db6786bacd65",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 43",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "cd111f5d-3d58-4ff2-97c6-023e0cc6f48f",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA SEGURANCA PVC SEM FORRO 35CM",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 1620
    }
  },
  {
    "id": "d958a942-0073-4ed9-946a-b0f182a6fcf0",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE INCOLOR JAGUAR",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 740
    }
  },
  {
    "id": "a8b586ab-c35e-4172-bc87-edac0b4609d8",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROT NITRILIA CONTRA AGS MEC QUIM TAM 10",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 680
    }
  },
  {
    "id": "fdc494f6-b302-4f10-bbfe-b9f5c2034f91",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROT NITRILIA CONTRA AGS MEC QUIM TAM 9",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 980
    }
  },
  {
    "id": "ef44695d-dae6-405f-bbbc-1168b3cc595f",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 42",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "b7526ce6-3ce7-4dd5-940f-df6152b79b11",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 37",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "61cd2738-efe4-4e3e-b10c-d0102c96f745",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 41",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 180
    }
  },
  {
    "id": "485c5957-62e5-4462-9588-3d5717f9918f",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 39",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 140
    }
  },
  {
    "id": "1e58c641-82e5-4eaf-8b00-899463091fc5",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 40",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 260
    }
  },
  {
    "id": "f96a89a4-4533-45f2-9b05-4fe88c24bc9e",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROTECAO CONTRA AGENTES MECANICOS TAM 9",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 540
    }
  },
  {
    "id": "8b9b0af1-19f2-4cdd-984f-57866398fc93",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 39",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "21b6bd21-a1bd-4d25-9804-34983ed822f0",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA SEGURANCA VAQUETA 8/9",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "46ad5da6-d2e5-4285-bdd3-1d2b08fb5041",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PERNEIRA SEG SINT 3 TALAS C VELCRO TAM G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ff5e8220-6502-40c3-8ef1-4864297a8172",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 42",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "f9d04018-6774-46ca-88f0-835b881eed32",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 40",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 140
    }
  },
  {
    "id": "dc5ed45c-0445-4249-a049-f29a7dd277d0",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 38",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "d1776bd4-a1a3-4146-9b6d-ffc9803aa2c3",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 38",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "c4a66098-f61b-4e65-927c-e7ba7946cb35",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 41",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 180
    }
  },
  {
    "id": "410a5584-9756-4c37-a436-dff98ffd3250",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 39",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4d86252b-2b2c-462d-83c1-bf693cd9c7e5",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 39",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ae807c23-7447-476c-993c-fab41835da50",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 37",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "ad119d0f-ea4b-4329-9791-60d604ac7cc6",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 44",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "b41cd767-7cdb-45c6-bcf6-8ab3333f5c3e",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RECARGA PARA EXTINTOR PQS 8 KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "eaf4ba15-8fae-4901-bd67-10a17f90ba8e",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RECARGA PARA EXTINTOR ABC 6 KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e15c98b0-421f-40d2-9f56-36b3af704bc1",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CINTA ERGONOMICA LOMBAR PARA PROTECAO DE COLUNA TAM - M",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "bc06ec27-01e1-4f73-9084-e9664528af2f",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CINTA ERGONOMICA LOMBAR PARA PROTECAO DE COLUNA TAM - P",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "85e5a37a-7e1c-49e1-90ea-02d1edd95150",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROTECAO CONTRA AGENTES MECANICOS TAM 8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7a2cb345-1a81-44cc-b468-51b192e60a43",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROTECAO CONTRA AGENTES MECANICOS TAM 10",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 420
    }
  },
  {
    "id": "1bdbff1f-86e1-40aa-9962-4cbd5dcd045f",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE CZ KALIPSO CA 10346",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b87a214a-9aab-4371-ac52-51255233c4d6",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROT NITRILIA CONTRA AGS MEC QUIM TAM 8",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "bfe92ce5-943b-47bf-992b-77de943fad1a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RESPIRADOR PURIFICADOR DE AR TIPO PECA SEMIFACIAL FILTRANTE PARA PARTICULAS PFF2",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "79218468-bc2c-4da9-aa70-c659a4a33d5a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA SOBREPOR",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "49293ea1-65d5-4907-bf92-920fdc0f4924",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MOSQUETAO ACO OVAL TR ROSCA 23KN VICSA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "1d10d0e2-bd69-41c9-85ac-b520d8605cf6",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAPA DE CHUVA PVC MANGAS LONGAS TAM EXG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5dea7d95-b190-4486-a397-91e58b7d09a7",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 41",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ab056f44-6300-4005-8290-372503b3c853",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE CINZA AGUIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 50
    }
  },
  {
    "id": "4be7e732-adb9-4f74-b59b-08fdfbee7b8f",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE INCOLOR AGUIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "79a13fc2-7f7a-4700-ba33-23f2ca4cb602",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROTECAO CONTRA AGENTES MECANICOS TAM 10",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "9e75b899-0a16-405f-9d4e-5892c79100b0",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA SEGURANCA VAQUETA 8/9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 130
    }
  },
  {
    "id": "c4bd3c71-2968-4d34-94f0-0d925f2063f5",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO BRANCA NR 43",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "2ca69d8a-4858-4d53-8324-a2a066f84f85",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 34",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d2d18a12-69f5-43a7-9bc2-0753026eb524",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 39",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4bc4cc68-ab42-4c8a-8d40-ce4a6fcbb0ee",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SOLADO DE PNEU Nº39",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "cf6c0196-5c3b-4f45-bce0-d33f69367791",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BONE TIPO ARABE HELANCA COR AZUL ROYAL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b5758639-f95a-4e49-afb5-6ad22c82c76b",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PERNEIRA SEG SINT 3 TALAS S VELCRO TAM G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "de46483c-43ae-4caf-b93b-ca19b979fb24",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MARMITA TERMICA SEM DIVISORIA 1,5L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "78a138f9-6d13-4b7f-afc0-69ff7259f4eb",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 40",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "5f56ea21-6d1e-4d8b-b5df-97f0a58148b8",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GARRAFAO TERMICO 5L  6915",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "6dfd3fdf-89b5-4110-ad3b-b950d30310b0",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 40",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "34f9f1ea-3f2a-4567-bf66-6d3dd66fd3d7",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RESPIRADOR PURIF AR TIPO SEMIFACIAL FILTRANTE PARA PARTICULAS PFF1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "742cb3a2-1550-4567-81ae-fda5917faf79",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RESPIRADOR PURIFICADOR DE AR TIPO PECA SEMIFACIAL FILTRANTE PARA PARTICULAS PFF2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "1dfed982-b15f-44a7-8f88-3e31ef2c11a8",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 37",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "b8e3b59c-53c7-4915-911d-f8aa12720b22",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 35",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "cc229521-6cb0-43b0-b873-d28b5fb9e2f2",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 43",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "7793f912-2b0f-44e0-a7eb-5a0c392c9e26",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RECARGA PARA EXTINTOR PQS 8 KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f912b706-fb27-4a70-8283-e7310131f818",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RECARGA PARA EXTINTOR PQS 6 KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "ee765b9f-5de4-4cfe-ad5d-86e4794d4602",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROT NITRILIA CONTRA AGS MEC QUIM TAM 9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "cc59e1e5-35a5-4db4-a0f6-8e5b660b8c81",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO CURTO  PRETA FLEX NR 37",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "85557462-bbed-4b39-9045-8edfe0564039",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 43",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "a02e5ffb-e1ad-4dd4-8d9d-ee600c1acf30",
    "codigo": "4.1.01.21.0005",
    "descricao": "PEDAGIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PEDAGIO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "86e681ad-2459-4a2e-9666-063386dc5c97",
    "codigo": "4.1.01.21.0005",
    "descricao": "PEDAGIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PEDAGIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "86a43675-1836-4a7a-84bb-648bf8722263",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LANCHES E REFEIÇÕES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 50
    }
  },
  {
    "id": "b09afd81-b66b-4d07-9cfc-953c53588d6b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "ac18fd1b-fbd3-40af-b153-9a4e67228ba8",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO DEL VALE 1LT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4c792478-ec95-42f1-8948-8f2af58963a2",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO DE QUEIJO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "1dc08740-bcb7-4540-8320-f7396bebb564",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "COCA COLA 2 L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c08d564b-f107-49cb-9c7c-ff04f5a5ec98",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ENROLADINHO DOCE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c3c84cfa-e245-4858-9136-89fb37aa5679",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAOZINHO COM PATE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "e0f79c3f-fdd2-4b47-891a-6d278774f510",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "31a8b2b7-7677-42a1-98b5-a89ca142b98c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "bc8f55c7-c022-410f-bb17-7a5eb611652a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d6e4f643-4310-40dd-be87-d377611e7700",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "c6436138-ce5b-4e20-aa1d-fef1e4ba0063",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "ae50471d-22bc-46d3-bc7d-8fee7029ebe9",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "45441375-33be-4c3f-9c96-44fc7b875e86",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0077ff04-6ce2-4136-a9ed-14310c3ecc64",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8664222c-20ca-4381-b459-1a20158c1355",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "04aae447-cc9a-4bf4-8a60-318ec704e24e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f3ca4478-f2a8-4218-b024-1e17c755a820",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "0d583a2a-3ebe-407f-9200-c84704ba8d5a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "78fe5200-f483-4088-b095-d9b2f271e0a3",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "352c0c0e-f5df-461b-930a-d0db682148d8",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "8bcc01f5-0efc-4ad3-86be-ae711e7a2ef3",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7e2e5d6f-0f2d-47e7-891c-efe314806b9d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d8266f7a-af23-409c-95ec-9d302d4ffa7f",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "e2d9a004-b1b1-4ef7-88f4-2fd9b216ecae",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "90abf447-0576-4869-a47e-98374a63ef38",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f58919c5-4c64-49d6-ba31-96810d1acfe8",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6ea11b78-b8a0-4de1-81b8-5a9112422690",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CARTAO ALIMENTACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "b5cc5a74-4fb2-4cd3-ac93-ecba286645f0",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LANCHES E REFEIÇÕES",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 180
    }
  },
  {
    "id": "0282c066-db95-453b-a902-d1e2d5bd784f",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "9946bcd0-3854-4afc-9b08-eadf288388fb",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO 1L cada UN",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6c8a6eb2-4723-4fe8-9163-7b2c9fc507a1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO FRANCES",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "557982bc-c38a-4199-b213-e473bfddc97c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "cee36796-b967-4f15-92ab-cb60e77f6344",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO DE CACHORRO QUENTE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "19326917-0280-4796-a700-cbe159229f20",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO DE QUEIJO (ASSADO)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "a7dc3bd4-0a26-4fb6-a729-c3db57302f86",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PASTEL",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "921fe773-ca89-4abf-9a1d-44fe66870d3b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MINI PIZZA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7509a99b-82f5-4eba-846a-b82859756f59",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "b47418ed-d248-4100-b258-527852a6bc17",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "0d2086e6-3cf1-4a44-9da9-11f8aaf148a0",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 220
    }
  },
  {
    "id": "cf50c47d-3bdc-4525-93a7-4377c1efbc01",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "c79ef380-bd7a-427f-8ae2-e7e752421f4a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "0f35714a-537e-460f-852e-6ae8122b0408",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "77144aed-b6fd-42e5-8c37-f6b2c776be17",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "23838d73-7d54-493a-83fd-7be12911ecf1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "f9aab57b-3036-4293-a939-e6183e10ff05",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "281f3245-4239-4acd-b6df-24660aad2469",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "e9514c57-782c-464a-a6e8-0a454e925368",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "898fd4d0-5982-44f9-bb82-77acde5855f2",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "9bf8f68c-5988-4f3b-a2cc-5698555dc30e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "3e2d8cca-0db1-4683-a4f4-dd7002d6bb5a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "61486e69-1c3a-4013-9227-686c0b8eb2e1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "520dee55-6ca4-4a5d-8075-99e1392cfd37",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "c505f1aa-23de-4b2c-8808-af02b439f2f1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "72b0a72a-a853-4f82-8170-ca1b9fa4d662",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "ded0d436-f66d-4c47-9528-473066688589",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "751e528a-5ce7-483d-8b4f-b5fb5e023e50",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "2a96fb92-34d5-4139-9a93-ca018dbaf2c0",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO DE MILHO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "e3a38bf8-6ea9-409f-a408-46624c728153",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO COM MARGARINA",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 60
    }
  },
  {
    "id": "f65182e3-daed-47a3-9c10-7e92e42f970c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO KG",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "5a5d96c3-40e4-4f1c-a1dd-8941dec4b3e9",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CARTAO ALIMENTACAO",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 220
    }
  },
  {
    "id": "c1b86eaf-3e25-4b3a-977c-7d5818202623",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "76d9f1d9-1f63-432f-aa85-7977c1f8f97c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO DE MILHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "04fece2f-d48a-4295-bf4f-b50693a71ba7",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO COM MARGARINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d983ed27-3dfd-4737-b82a-eed8c28afee3",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6f3381ed-742a-4b34-943f-de425fac0cff",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA GOLA POLO G VERDE FLORESTA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "15d6fea2-b2ea-4b87-bae0-14687a509680",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA ELANCA F. VERDE MANGA LONGA (M)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5f265c70-af88-4c14-9128-4dc4d977bd5a",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CALCA ELANCA VERDE (M)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "5cc9eca9-bf92-4d32-9ef6-829b1ed774b5",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA ELANCA F. VERDE MANGA LONGA (P)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "3d063399-9d10-4bb7-a0bc-139b607ba8f9",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CALCA ELANCA VERDE (P)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "30b54bd3-8e55-4f0f-8869-7928032fa04e",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CALCA ELANCA VERDE (M)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 140
    }
  },
  {
    "id": "20f0249b-31e8-45bf-8995-1bd8d890ed35",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA ELANCA F. VERDE MANGA LONGA (M)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "29008766-8c89-491b-befe-cc4030253250",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA ELANCA F. VERDE MANGA LONGA (GG)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "6db7d9bd-a82b-4ca7-9e2d-9daec9c9c0a7",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CALCA ELANCA VERDE (G)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "4f2091ed-4981-4ec3-8b86-7797b7685738",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA ELANCA F. VERDE MANGA LONGA (G)",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 140
    }
  },
  {
    "id": "9dd12510-6ae2-470b-acc2-b3e0e517de5e",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA MODELO SOCIAL MASCULINA MANGA CURTA VERDE M",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "aff171b5-ad7e-477b-b126-ea0cb2957004",
    "codigo": "4.2",
    "descricao": "4.2",
    "tipo": "C",
    "codigoPai": "4",
    "nivel": 2,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "bd168f41-4f33-486d-80ea-cbe55ea180d7",
    "codigo": "4.2",
    "descricao": "4.2",
    "tipo": "C",
    "codigoPai": "4",
    "nivel": 2,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "ea998899-7d6a-460b-b88e-0b8fde7225e6",
    "codigo": "4.2.01",
    "descricao": "4.2.01",
    "tipo": "C",
    "codigoPai": "4.2",
    "nivel": 3,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "585b4a1b-5036-448d-8448-5d3c3439bfa2",
    "codigo": "4.2.01",
    "descricao": "4.2.01",
    "tipo": "C",
    "codigoPai": "4.2",
    "nivel": 3,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "e8bb136a-703d-4fd6-807a-fcc50ca92e56",
    "codigo": "4.2.01.02",
    "descricao": "4.2.01.02",
    "tipo": "C",
    "codigoPai": "4.2.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "900570bb-d5a6-4906-8e63-9863999eddaa",
    "codigo": "4.2.01.02",
    "descricao": "4.2.01.02",
    "tipo": "C",
    "codigoPai": "4.2.01",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "5dab80ad-05a8-41e7-84ab-e1a1967403e6",
    "codigo": "4.2.01.02.0001",
    "descricao": "RATEIO RECEBIDO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "47a17c57-b6db-45f9-ab9a-25a19485c6a2",
    "codigo": "4.2.01.02.0001",
    "descricao": "RATEIO RECEBIDO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "801c6875-294c-421e-b6a3-a7c77bce3bdc",
    "codigo": "4.2.01.02.0010",
    "descricao": "RATEIO CERQUEIROS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "344a519b-28c8-40dc-b194-841370840039",
    "codigo": "4.2.01.02.0017",
    "descricao": "RATEIO CONFRATERNIZACOES E EVENTOS COM C",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "d9cd3206-a6b3-45fb-b492-8545613393d5",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "b83a540b-095c-4da5-bb50-9c1254074b20",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "0d934e04-a797-414d-adb7-31b081d2f6a1",
    "codigo": "4.2.01.02.0019",
    "descricao": "RATEIO TRANSPORTE LEVES ADMINITRACAO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "254075da-fc56-49fa-9fd4-a6196d64d6e2",
    "codigo": "4.2.01.02.0020",
    "descricao": "RATEIO MOTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "0344ca64-3156-47d4-8825-56791e51ab00",
    "codigo": "4.2.01.02.0020",
    "descricao": "RATEIO MOTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 460
    }
  },
  {
    "id": "c75ab74d-2083-4b5e-8a84-1eeabb81f207",
    "codigo": "4.2.01.02.0021",
    "descricao": "RATEIO VEICULOS MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 180
    }
  },
  {
    "id": "ee61b3b3-86f9-40ee-87a8-021076aeb1fb",
    "codigo": "4.2.01.02.0021",
    "descricao": "RATEIO VEICULOS MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "09447924-6557-48cc-853f-c736058153c0",
    "codigo": "4.2.01.02.0024",
    "descricao": "RATEIO OFICINA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "05f701e3-daae-4d4b-a16e-e6ba3878a623",
    "codigo": "4.2.01.02.0027",
    "descricao": "PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "41766b00-c951-4539-b994-8c8bd1ac9aff",
    "codigo": "4.2.01.02.0033",
    "descricao": "RATEIO ROCADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "cd45dafe-520f-4179-9cac-d41223288048",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "34-OL LATEX TOCANTINS LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 220
    }
  },
  {
    "id": "9107dc07-4bf8-42b9-ad75-98cff06b512c",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f996a7b3-426e-44d8-9439-fb7fd958450b",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "561c96ad-7e70-49d4-a658-ed892cc1a896",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 180
    }
  },
  {
    "id": "8ae6e38a-f726-49f0-b3f0-ea88f5450395",
    "codigo": "4.2.01.02.0036",
    "descricao": "RATEIO TRATORES MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "2580cf75-5b9e-4a37-aed3-53de8506f109",
    "codigo": "4.2.01.02.0036",
    "descricao": "RATEIO TRATORES MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "7ad5be32-5f30-4b5d-815e-34739630833f",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30
    }
  },
  {
    "id": "683e20bc-acea-49d3-a596-634d84c60137",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 200
    }
  },
  {
    "id": "d58e2f5f-5683-4605-b973-f5f73d56f00d",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "4a7776ba-7d16-4769-86ae-944c1ce01ef2",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "065c1af2-60c6-4273-82e0-72b4247bc9c4",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "8fef11b5-f259-4bde-bc06-467040eb4bc0",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "1aa1a83d-2506-46cb-9bbf-fdb61ce1e319",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "64bb65d2-8717-4a3c-909a-cef7fe84a610",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "c3094aa2-1b94-493b-9752-b2b50fe17c23",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 40
    }
  },
  {
    "id": "fc1fb02a-3621-4048-a65f-f1040867209b",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4341e3c8-3d15-4a99-9ad4-6ec886a340d7",
    "codigo": "4.2.01.02.0046",
    "descricao": "RATEIO PA CARREGADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "d488105b-8ebb-4724-a44b-cc70afc5d2e2",
    "codigo": "4.2.01.02.0046",
    "descricao": "RATEIO PA CARREGADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "39786059-a71b-4b39-ac0f-393d4f24b231",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "885d5809-1359-49bb-a634-532e2221d973",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "f5cf9242-99f3-446f-bf7d-b1be05d30591",
    "codigo": "4.2.01.02.0051",
    "descricao": "RATEIO SUPERVISAO AGRICOLA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "1b7542c9-c44b-44c4-8a0c-24d2b42e08ef",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 580
    }
  },
  {
    "id": "14acbcab-1d0a-4983-b354-49be68d54f53",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 50
    }
  },
  {
    "id": "69e7cf9f-57e0-4744-9307-f06f552f502c",
    "codigo": "4.2.01.02.0053",
    "descricao": "RATEIO TRATO DE GADO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "19d34040-a2a5-4e64-8976-14b1e7d5ee03",
    "codigo": "4.2.01.02.0054",
    "descricao": "RATEIO MANUTENCAO PREDIAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "efecfdf8-a3e4-43a5-9bf6-84026ced14dc",
    "codigo": "4.2.01.02.0055",
    "descricao": "RATEIO CUSTO PESSOAL PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "9073a461-bc64-488c-a1a7-7dc9509e2098",
    "codigo": "4.2.01.02.0055",
    "descricao": "RATEIO CUSTO PESSOAL PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "d186663e-fd73-4270-866c-f3b0c7236302",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "VERA CRUZ - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 100
    }
  },
  {
    "id": "72d2240a-4101-46b5-b1de-66ebd0e8f4d2",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "f0d67cac-624b-4adf-b904-7d530eedf5a5",
    "codigo": "4.2.01.02.0065",
    "descricao": "RATEIO DESPESAS ADMINISTRATIVAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "PORTEIRAS - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "bddf0e5c-ba5e-4289-b1b0-75f9097de2df",
    "codigo": "4.2.01.02.0065",
    "descricao": "RATEIO DESPESAS ADMINISTRATIVAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10
    }
  },
  {
    "id": "4cd41b2f-2e54-4934-b784-4e4ca5a75afa",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "ESPLANADA SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "41659f97-0ede-4a11-99f5-d9a862e2fcee",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "COVOA - SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-02": 480
    }
  },
  {
    "id": "f1a344c2-39fe-43a6-be3e-d14db4905474",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  }
];