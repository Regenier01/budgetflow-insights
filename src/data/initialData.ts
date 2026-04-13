import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "9b794a13-1802-4837-b9c4-c25fc6c2c06d",
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
    "id": "269b86c8-37fe-4dc0-843f-851e1cacfde5",
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
    "id": "57e3c329-21a5-4fa0-984c-f8c714c20585",
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
    "id": "52d7d45a-c89e-4c44-9a1e-c6bdbbe60b84",
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
    "id": "5b7b4c0e-eeac-47fd-9e2e-ea639479eff0",
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
    "id": "d70e3727-f93c-4fa9-9671-70fa9a251bac",
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
    "id": "4f00085d-520d-4542-bcfc-0788b2b74b1c",
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
      "2026-02": 0
    }
  },
  {
    "id": "15ec1a80-6d52-4fab-b97c-3d61cd9171b4",
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
    "id": "7e5e97e8-be55-4321-aa22-a94da1404cf5",
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
    "id": "50d001ca-4312-4bf4-85ed-5007bc1038a0",
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
      "2026-02": 0
    }
  },
  {
    "id": "70a50233-ac7b-43e1-a4a6-c764e3a80120",
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
    "id": "e295ab32-e6ea-402e-8502-46dc48d43046",
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
    "id": "a05132ab-642b-48e6-bb5d-eec143a9d8f9",
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
    "id": "2f30809c-bcb5-461c-ad9c-fbebc71f4116",
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
    "id": "7a42ac73-6fe6-4588-8f6d-e0493d3a1087",
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
    "id": "08cdbfb2-1f3f-49e4-95d3-5ac89b627f95",
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
    "id": "0e5d58bc-fd71-4c23-b91e-1a38dc7397b0",
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
      "2026-02": 0
    }
  },
  {
    "id": "22d33165-aeab-4462-a1eb-1098d9c87b28",
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
      "2026-02": 0
    }
  },
  {
    "id": "be87b730-f69e-4dc8-bbfa-54f52f715433",
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
      "2026-02": 0
    }
  },
  {
    "id": "3a5e966b-da2f-437f-8b00-28b476db2523",
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
    "id": "5ebce995-e3f6-4872-8d24-b81aefbd8df7",
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
      "2026-02": 0
    }
  },
  {
    "id": "72353e54-23a7-49fe-a89e-b1f43115e983",
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
    "id": "a1c6b017-7cea-4730-b59a-5e67379c7862",
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
      "2026-02": 0
    }
  },
  {
    "id": "66e3b53b-4317-415e-aad7-444b5fd6e5ee",
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
    "id": "16827a0d-7119-44bc-9152-dfa8845b02d3",
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
    "id": "e9a9fe4d-9c44-48d5-8931-286249221be7",
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
    "id": "9d414e34-0a6d-42fb-a01c-bc90f2217d57",
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
    "id": "6664b92c-dd37-4c8a-89e8-d32b80047d0c",
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
    "id": "82b34006-dfa3-4fdb-bc0f-92c9e26fb8d6",
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
    "id": "acc75daa-35fe-43f5-887d-c10c45bd0081",
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
    "id": "4d094893-5d04-47ad-87bd-c44773cc3b0d",
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
      "2026-02": 0
    }
  },
  {
    "id": "a28d46a5-6f41-4d5d-b47d-a57cab1c3fd7",
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
      "2026-02": 0
    }
  },
  {
    "id": "233d4928-ab0f-406e-a31b-406d41449d51",
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
    "id": "b44dc5fe-e640-402e-95d2-69f708775b84",
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
    "id": "39af076a-e572-4f5f-97ff-2fb94d874aae",
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
      "2026-02": 0
    }
  },
  {
    "id": "47bf8764-79b4-479e-b9ee-d8c75e9f82f3",
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
      "2026-02": 0
    }
  },
  {
    "id": "c4d6ea98-4c0a-4f93-ba0e-e73db0d74f48",
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
    "id": "a0c9af22-b031-435a-bf22-24099346674d",
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
    "id": "4ea1f6e6-5b4f-430f-869d-b5da728dd8cf",
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
    "id": "1e464302-647e-44c1-bc67-1b4fe64e6104",
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
    "id": "a05781ea-b77b-4c13-9824-4b33e5264731",
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
      "2026-02": 0
    }
  },
  {
    "id": "3c7971c1-c7f8-4172-8531-386af3e3f5fe",
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
      "2026-02": 0
    }
  },
  {
    "id": "6baa555f-842f-476d-b965-e882159be8ee",
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
      "2026-02": 0
    }
  },
  {
    "id": "2b4c3864-0431-4103-afa2-382371d90dfe",
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
      "2026-02": 0
    }
  },
  {
    "id": "dffe423d-e742-437b-b0a4-45de4aceea3e",
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
      "2026-02": 0
    }
  },
  {
    "id": "ebb33079-e5a7-47a0-b619-0137e69fb287",
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
      "2026-02": 0
    }
  },
  {
    "id": "9e61543c-0102-4734-8115-90098ad19606",
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
      "2026-02": 0
    }
  },
  {
    "id": "b98f48f6-8040-4f8f-a6a7-5b4e477c2194",
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
      "2026-02": 0
    }
  },
  {
    "id": "1b48b666-bb1e-4850-a8dd-c2fdca149c11",
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
      "2026-02": 0
    }
  },
  {
    "id": "772647f0-9398-4189-8d79-6d748f09055a",
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
    "id": "c732e1f2-e4f9-4a68-81ae-7d2852e28948",
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
    "id": "289555be-3bb3-4495-9b9a-b782e8857a67",
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
      "2026-02": 0
    }
  },
  {
    "id": "95b13159-5d40-499e-bf45-28f07641af3e",
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
      "2026-02": 0
    }
  },
  {
    "id": "722f5665-1cb8-4ce9-ac3d-abe92898d133",
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
      "2026-02": 0
    }
  },
  {
    "id": "4b1b22a3-2b1e-415e-9c71-d258e742805c",
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
    "id": "826e0a27-e3cd-4e8f-943e-524b44c8df8f",
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
    "id": "68798dd1-662c-4edc-833d-e61034066878",
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
    "id": "42a73485-b3aa-4f6a-ae8e-d0a28166fa49",
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
    "id": "b066a626-4f4f-42ad-aa2c-32cac1f62be0",
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
    "id": "6a6e3d3b-6534-4ef8-8e73-184c93e84553",
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
      "2026-02": 0
    }
  },
  {
    "id": "de4b3f7a-9e5a-4e7c-b6ca-fa42f4d5e10b",
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
    "id": "bf704ade-f9d4-4a26-9c46-5538890a8bd1",
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
      "2026-02": 0
    }
  },
  {
    "id": "1ac6e89b-0ca1-4038-a1e3-1c2da069c5c9",
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
      "2026-02": 0
    }
  },
  {
    "id": "9f23de3e-2d0d-427e-93f0-299db950d133",
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
    "id": "ec9b9642-b1e3-44ea-9acd-52da4c92e02a",
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
    "id": "9cde0d3d-ba16-4a73-a153-6edf79a72b56",
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
    "id": "7476250b-e44d-4ae3-950b-479fe0b21ec8",
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
    "id": "21af4f42-3a4c-48a9-96f2-fb22053c2212",
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
      "2026-02": 0
    }
  },
  {
    "id": "164e143c-bbec-4177-8c34-00461deb992a",
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
    "id": "6b2ff933-7c41-4071-8e7e-597854c0e26c",
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
      "2026-02": 0
    }
  },
  {
    "id": "cfceafac-fbe4-40cb-9a73-394181c8e8a0",
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
    "id": "3e4b27ef-bb0f-476d-ba1d-12d794579f47",
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
      "2026-02": 0
    }
  },
  {
    "id": "47300a97-1390-4717-aa56-831a69e226ef",
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
    "id": "57031d7e-6b67-4df5-bd6e-0cf7df1088ab",
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
    "id": "2efaba2d-146e-4dca-a9fa-f4a726f4bd21",
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
      "2026-02": 0
    }
  },
  {
    "id": "11c007bc-0b50-4096-a486-5d26d23cb29d",
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
    "id": "cdcf9dac-5754-4188-a53a-e0c5bc0348fa",
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
      "2026-02": 0
    }
  },
  {
    "id": "e41c4096-6b9f-4757-8e47-c9724823c7f8",
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
      "2026-02": 0
    }
  },
  {
    "id": "cf59ab3d-6788-44bd-bc45-795a6cc360ec",
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
      "2026-02": 0
    }
  },
  {
    "id": "54298425-1b08-4dd0-b615-191ca4a02958",
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
      "2026-02": 0
    }
  },
  {
    "id": "aa19437f-fa06-4a23-9673-4c5d06d8f0b1",
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
      "2026-02": 0
    }
  },
  {
    "id": "10051e82-215d-40a1-aa53-963ba582d905",
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
    "id": "d6981ca0-9313-441a-9438-6147756ebc63",
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
    "id": "ddae1a5b-e1d3-4686-8424-0405209cca96",
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
    "id": "3c94beee-beb3-417f-814b-d552b3dde5cf",
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
      "2026-02": 0
    }
  },
  {
    "id": "acf2a9a9-6610-4abf-930b-89356f06ef33",
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
    "id": "da9ed03a-2a1c-41db-a576-f3f3f32298b6",
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
      "2026-02": 0
    }
  },
  {
    "id": "30c09db2-e52c-4c3f-bad0-10e81a151d51",
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
    "id": "9e2536ff-7e8c-471f-a9b9-8f4085d791a2",
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
    "id": "75a8e7ad-2ced-4dff-a927-600071e9608f",
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
    "id": "76cea128-e0b0-4110-b254-a76326943a3f",
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
    "id": "86133549-3d76-41fe-ba75-cc7fc12c2b00",
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
    "id": "c49a9b45-b055-4770-9474-22101effb8ac",
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
    "id": "27a1ab16-ce86-425a-9c8e-da9a7cc77fd4",
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
    "id": "a4972002-3374-4833-9495-d392ece5d8e9",
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
    "id": "a470df3b-f9aa-415c-9442-220ff0bf522b",
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
      "2026-02": 0
    }
  },
  {
    "id": "89019480-320c-400f-bcef-a8043b1c4eba",
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
      "2026-02": 0
    }
  },
  {
    "id": "21308555-c9d4-47a6-ab8c-efdb03d86b02",
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
      "2026-02": 0
    }
  },
  {
    "id": "c4936ab9-7575-4cfd-8045-a109c1301d60",
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
      "2026-02": 0
    }
  },
  {
    "id": "1fd5d532-10f4-4bab-945e-d6a7e6e2c3dd",
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
      "2026-02": 0
    }
  },
  {
    "id": "1b109f05-6489-46c7-8882-3c097471ec37",
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
      "2026-02": 0
    }
  },
  {
    "id": "91da45cb-835a-44e8-a7e9-6f94beb1eab5",
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
      "2026-02": 0
    }
  },
  {
    "id": "bdd7f0b6-81cb-46a5-beac-19664ea7a9f7",
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
      "2026-02": 0
    }
  },
  {
    "id": "9fa9a931-3663-4940-a396-4a1d890892d2",
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
      "2026-02": 0
    }
  },
  {
    "id": "aed1a2b7-de3b-443f-8447-b118bf549eed",
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
      "2026-02": 0
    }
  },
  {
    "id": "0b423ea9-f594-425b-ab47-97ce2c5ed94c",
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
      "2026-02": 0
    }
  },
  {
    "id": "8ef0f835-e841-4937-b598-cc729b0c8d6a",
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
      "2026-02": 0
    }
  },
  {
    "id": "553ffc26-b495-462c-86e1-38b513ba216a",
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
      "2026-02": 0
    }
  },
  {
    "id": "f0ee5953-deaa-434a-846a-18bc24b4ca64",
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
      "2026-02": 0
    }
  },
  {
    "id": "d8ec0798-37b6-4bcb-8524-9c97c200b3ba",
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
      "2026-02": 0
    }
  },
  {
    "id": "d4155279-9922-461b-b633-fb65a4bba2db",
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
      "2026-02": 0
    }
  },
  {
    "id": "d2df883e-91c5-4db3-a9b6-288667aebff8",
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
      "2026-02": 0
    }
  },
  {
    "id": "6bd52145-2a64-45fa-9c2d-fd512b2abe5f",
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
      "2026-02": 0
    }
  },
  {
    "id": "6a5f1871-6d0e-4106-baf0-3b7cbd8c9f18",
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
      "2026-02": 0
    }
  },
  {
    "id": "ea8f5db5-4d8e-4512-b7cf-962174aadea4",
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
      "2026-02": 0
    }
  },
  {
    "id": "6bfd1e2d-6d4e-4de5-a722-18b9d5d205e8",
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
      "2026-02": 0
    }
  },
  {
    "id": "52eba213-dd37-44c9-970b-51d580de7082",
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
      "2026-02": 0
    }
  },
  {
    "id": "da10518e-9480-4290-ab6a-9ccceffd033a",
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
      "2026-02": 0
    }
  },
  {
    "id": "58118428-5441-46fc-8da7-abb36d9b18c7",
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
      "2026-02": 0
    }
  },
  {
    "id": "a68ed62c-8d80-4b97-9036-63a5568dfa25",
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
      "2026-02": 0
    }
  },
  {
    "id": "647de92d-65c9-4cef-bbe6-c4b75a3c5daa",
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
      "2026-02": 0
    }
  },
  {
    "id": "d9c36fef-1222-48b6-8a18-69864ada3368",
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
      "2026-02": 0
    }
  },
  {
    "id": "39843859-7c3d-4cf0-9fc6-90a89219851f",
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
      "2026-02": 0
    }
  },
  {
    "id": "98fe862b-073c-4be1-8954-bdbbb4f09df3",
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
      "2026-02": 0
    }
  },
  {
    "id": "5023031d-a770-42f9-aed8-8ce7fed64329",
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
      "2026-02": 0
    }
  },
  {
    "id": "32ad73b5-8af5-4b92-a04d-1ce04e1f2a43",
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
      "2026-02": 0
    }
  },
  {
    "id": "c1140b10-2cdd-4c76-bbf8-b8e632ae39ca",
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
      "2026-02": 0
    }
  },
  {
    "id": "c08e1630-8843-4717-a58f-6837be62272c",
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
      "2026-02": 0
    }
  },
  {
    "id": "610d8478-f28a-4e6a-afec-afb5dc362fb1",
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
      "2026-02": 0
    }
  },
  {
    "id": "dfc33c51-4cb0-4ec2-b459-2b8dd66edc91",
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
      "2026-02": 0
    }
  },
  {
    "id": "4e3078d8-57ec-4ad3-a908-0dea3d8b7616",
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
      "2026-02": 0
    }
  },
  {
    "id": "e121aeed-e640-4552-99f0-d1e91fa2b00b",
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
      "2026-02": 0
    }
  },
  {
    "id": "8db03585-798d-4b57-92a8-33e134364c48",
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
      "2026-02": 0
    }
  },
  {
    "id": "9d276be1-a34c-4930-90ff-bf23712e1be6",
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
      "2026-02": 0
    }
  },
  {
    "id": "aab267d3-4cda-4907-b2ac-9780c7110736",
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
      "2026-02": 0
    }
  },
  {
    "id": "f7b3cde1-fa95-4289-998d-987eeceebbf8",
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
      "2026-02": 0
    }
  },
  {
    "id": "5a500455-98da-43c6-8b49-cff565abf4ca",
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
      "2026-02": 0
    }
  },
  {
    "id": "7a591cd7-5bf6-481a-9d6b-ffb0dfd6f9ee",
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
      "2026-02": 0
    }
  },
  {
    "id": "baa8a5b0-3758-40d6-b6c8-e64a85233aa4",
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
      "2026-02": 0
    }
  },
  {
    "id": "15f2303f-bbee-4f3f-802c-c44829d639ae",
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
      "2026-02": 0
    }
  },
  {
    "id": "e5ea52e6-d70a-4029-ab04-49f3e5ab8c5d",
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
      "2026-02": 0
    }
  },
  {
    "id": "edfc9512-3ff1-44b8-bd25-1c8ed370853c",
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
      "2026-02": 0
    }
  },
  {
    "id": "e27499b4-edd2-4746-a790-eebb85e4790b",
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
      "2026-02": 0
    }
  },
  {
    "id": "7611f401-6c94-4379-a8ef-2d130bc9cc01",
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
      "2026-02": 0
    }
  },
  {
    "id": "ec6fa6f5-82ec-4b93-858a-0fac476c60a8",
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
      "2026-02": 0
    }
  },
  {
    "id": "47998769-63ec-482a-85b1-68751f6a27ba",
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
      "2026-02": 0
    }
  },
  {
    "id": "73886ba0-1ac2-4af2-bce7-84a493b653ab",
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
      "2026-02": 0
    }
  },
  {
    "id": "a8d4b6c7-96ec-4092-b361-818652a5a45d",
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
      "2026-02": 0
    }
  },
  {
    "id": "aa2c5d61-167c-4aa0-9b03-a633ed02c838",
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
      "2026-02": 0
    }
  },
  {
    "id": "536872b1-a1ec-42c6-9b36-30801c59cb1b",
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
      "2026-02": 0
    }
  },
  {
    "id": "0e29a148-7ca9-4539-ad25-9703580537d2",
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
      "2026-02": 0
    }
  },
  {
    "id": "fb2bc47f-1228-4b43-a126-b582629abd7d",
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
      "2026-02": 0
    }
  },
  {
    "id": "20960b13-2124-4ef1-8aab-b7ffc352fef4",
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
      "2026-02": 0
    }
  },
  {
    "id": "e460652b-3c56-42b7-8486-5214c4a379da",
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
      "2026-02": 0
    }
  },
  {
    "id": "be3cc9ab-1faf-4667-a17d-03bf0c2ee7b8",
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
      "2026-02": 0
    }
  },
  {
    "id": "f532caba-aa0c-42dd-b02f-272a27f6316b",
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
      "2026-02": 0
    }
  },
  {
    "id": "7ec3f527-bc5c-4780-b9fb-25c2e33a919a",
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
      "2026-02": 0
    }
  },
  {
    "id": "8d89eddd-069d-4351-a969-b6ba1873f218",
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
      "2026-02": 0
    }
  },
  {
    "id": "6bb801c1-d072-4d23-bf61-e4ce5d92d3f0",
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
      "2026-02": 0
    }
  },
  {
    "id": "d7796e32-df42-493f-b479-cfd13d5d514e",
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
      "2026-02": 0
    }
  },
  {
    "id": "b95db8f7-f9bf-4d0e-8195-104d2fe3fe40",
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
      "2026-02": 0
    }
  },
  {
    "id": "993de1bb-ebb5-4423-a49b-eb68e4935973",
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
      "2026-02": 0
    }
  },
  {
    "id": "a255b30d-8834-45ad-b982-21e5a1df8f07",
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
      "2026-02": 0
    }
  },
  {
    "id": "a9db8fb2-ed5e-4549-94dc-6aff3242b061",
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
      "2026-02": 0
    }
  },
  {
    "id": "06f6178e-7a56-44ad-9210-f0768f97ba03",
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
      "2026-02": 0
    }
  },
  {
    "id": "86491005-8742-4136-8103-b23005d7e5a3",
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
      "2026-02": 0
    }
  },
  {
    "id": "58eeb994-68de-4430-b813-c23d4e09e49e",
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
      "2026-02": 0
    }
  },
  {
    "id": "4a9c5198-77f0-4a18-9213-c55d170ecdd2",
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
      "2026-02": 0
    }
  },
  {
    "id": "06b509c8-e0a7-4e58-97dd-d2f3948c8aa0",
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
      "2026-02": 0
    }
  },
  {
    "id": "cdc3468d-4f99-4ea0-8ede-f03dec33ac85",
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
      "2026-02": 0
    }
  },
  {
    "id": "bde8702a-40f0-4d7b-9454-a7a3f3709b71",
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
      "2026-02": 0
    }
  },
  {
    "id": "cdcf4aba-cf7e-4908-a24b-5ff86d25ffc4",
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
      "2026-02": 0
    }
  },
  {
    "id": "048806ce-f1d1-4a13-a2ae-891678ba0fe6",
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
      "2026-02": 0
    }
  },
  {
    "id": "a80fe570-9e68-4f26-99a9-e13feaaf909d",
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
      "2026-02": 0
    }
  },
  {
    "id": "b8347993-8392-46ee-b4f7-46ef717eb896",
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
      "2026-02": 0
    }
  },
  {
    "id": "6d535c6b-77f1-4a5a-bdeb-a80c59f4e28f",
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
      "2026-02": 0
    }
  },
  {
    "id": "fd6cdc9d-2609-48d4-a184-3e8d4d888fdb",
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
      "2026-02": 0
    }
  },
  {
    "id": "db1d3e76-f8f6-484a-a24d-89ee6f61656b",
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
      "2026-02": 0
    }
  },
  {
    "id": "61b905dc-2a2c-48f6-9a68-22d8fe62de3d",
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
      "2026-02": 0
    }
  },
  {
    "id": "806d1599-3a01-48bc-97cf-6cef125c90dc",
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
      "2026-02": 0
    }
  },
  {
    "id": "89d79571-98fe-411a-8d07-e587169d5373",
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
      "2026-02": 0
    }
  },
  {
    "id": "8a649bc4-d660-4b06-9769-e020f3b94969",
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
      "2026-02": 0
    }
  },
  {
    "id": "f327f384-0bf0-4643-8f7c-5cd5b118c53e",
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
      "2026-02": 0
    }
  },
  {
    "id": "7ecf5cc1-c1a7-4977-b44f-265357ac8fb4",
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
      "2026-02": 0
    }
  },
  {
    "id": "44232c8a-d86b-4ecd-9d3e-08a40f0e7972",
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
      "2026-02": 0
    }
  },
  {
    "id": "2cdc6b24-508a-4960-b9a3-7f1ac311ef64",
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
      "2026-02": 0
    }
  },
  {
    "id": "66301874-41d0-46e3-a746-378ab8e773d2",
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
      "2026-02": 0
    }
  },
  {
    "id": "ee5025ba-6d7e-4b3f-9794-7aaf4e60739e",
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
      "2026-02": 0
    }
  },
  {
    "id": "b718aac0-664a-485d-a391-4f93f93ec058",
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
      "2026-02": 0
    }
  },
  {
    "id": "73484600-1612-41fd-8bb1-ee94496877eb",
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
      "2026-02": 0
    }
  },
  {
    "id": "f36d3a40-d9b8-4edd-a11d-8870b7bd4794",
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
      "2026-02": 0
    }
  },
  {
    "id": "9cfd0c30-5b84-49d4-8db3-7a4383d06e9d",
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
      "2026-02": 0
    }
  },
  {
    "id": "f14af9ef-dbfd-4a0b-ba70-9d5ee19b1d28",
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
      "2026-02": 0
    }
  },
  {
    "id": "1fff6c18-4a7e-423e-82bc-0ec6a253d725",
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
      "2026-02": 0
    }
  },
  {
    "id": "c434ff1b-47f4-4343-9bda-6b59ad42eb60",
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
      "2026-02": 0
    }
  },
  {
    "id": "d4b63722-026e-42d7-a8f8-40fdac5293dc",
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
      "2026-02": 0
    }
  },
  {
    "id": "33ac1ebf-2b58-44c6-833a-8f6f7db89979",
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
      "2026-02": 0
    }
  },
  {
    "id": "17179fb9-0dc2-41c5-9586-0fa8ea7fc113",
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
      "2026-02": 0
    }
  },
  {
    "id": "04cbc1c3-4ea1-4d4c-84ec-a59f1e96da9e",
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
      "2026-02": 0
    }
  },
  {
    "id": "bc5c31fe-97ab-46ce-8f4b-39c5ca4b6b7a",
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
      "2026-02": 0
    }
  },
  {
    "id": "8a3cf8bc-4b57-4eaf-90c6-988e2cd53a86",
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
      "2026-02": 0
    }
  },
  {
    "id": "02aad4c3-9652-4ba1-8eb1-138c9a191113",
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
      "2026-02": 0
    }
  },
  {
    "id": "1251b546-a772-436a-93ea-cc434596656a",
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
      "2026-02": 0
    }
  },
  {
    "id": "cd2da7a8-d58c-4d4c-8420-c924e89a37cf",
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
      "2026-02": 0
    }
  },
  {
    "id": "af9bbff6-43e3-4e09-9511-72f9d60daafb",
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
      "2026-02": 0
    }
  },
  {
    "id": "193ecce1-a53c-4fa9-9442-2e654a17a9b1",
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
      "2026-02": 0
    }
  },
  {
    "id": "140f1eb7-a1f3-4c2f-81dd-e90a5f72777e",
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
      "2026-02": 0
    }
  },
  {
    "id": "103f8a3f-d5be-4259-90a4-23de921a62a9",
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
      "2026-02": 0
    }
  },
  {
    "id": "a55df170-f66f-48c1-b7a5-135069554866",
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
      "2026-02": 0
    }
  },
  {
    "id": "2698d8e2-668c-4e79-8692-1ac962591b77",
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
      "2026-02": 0
    }
  },
  {
    "id": "0080753c-e7c6-487b-bea3-884eabb80a5f",
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
      "2026-02": 0
    }
  },
  {
    "id": "3bb50dae-d7ad-464f-a4f9-2983081ae233",
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
      "2026-02": 0
    }
  },
  {
    "id": "1bc7f93b-4c26-4eaf-a907-dcf82d285f48",
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
      "2026-02": 0
    }
  },
  {
    "id": "1beecfe4-63da-45dd-be22-2705dce1de81",
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
      "2026-02": 0
    }
  },
  {
    "id": "067a5791-80c4-4da2-bb7e-81899bf31638",
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
      "2026-02": 0
    }
  },
  {
    "id": "ef2b9998-c1f8-434b-938b-c67ee6812aa0",
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
      "2026-02": 0
    }
  },
  {
    "id": "ea4cc339-c24d-4269-9b29-acca902b7f4c",
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
      "2026-02": 0
    }
  },
  {
    "id": "9864dfe3-17e3-4e6b-b344-505bb9d65bea",
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
      "2026-02": 0
    }
  },
  {
    "id": "8801e944-db15-4ee1-886a-425078b8d10f",
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
      "2026-02": 0
    }
  },
  {
    "id": "ad68c7a4-e54f-4f9e-a6c5-56e8fb3ed522",
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
      "2026-02": 0
    }
  },
  {
    "id": "56a3236b-b628-401c-a301-d413937e1fc7",
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
      "2026-02": 0
    }
  },
  {
    "id": "4c229eb4-20ef-4857-8f93-290eaddcd5ea",
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
      "2026-02": 0
    }
  },
  {
    "id": "27fc7c4b-2cf7-49bf-8c2d-94d4e7902c2e",
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
      "2026-02": 0
    }
  },
  {
    "id": "d7e714ee-4034-44dc-97e7-9c643cfeb4b3",
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
      "2026-02": 0
    }
  },
  {
    "id": "fda16a4e-1617-4d3f-9f8d-0f243ed494dd",
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
      "2026-02": 0
    }
  },
  {
    "id": "cd3a30e0-714c-4876-a092-1e42b10e5dcc",
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
    "id": "4df67954-fee6-4a76-86cd-1898d1635741",
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
    "id": "63667c0e-6992-4416-a395-27c8feb3c8fe",
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
      "2026-02": 0
    }
  },
  {
    "id": "96372953-0a1b-4a75-8195-d129043473f5",
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
      "2026-02": 0
    }
  },
  {
    "id": "71b5be49-cb89-4d21-95b8-cded39ecb314",
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
      "2026-02": 0
    }
  },
  {
    "id": "a3e7534e-5871-48f7-8050-cdafabf42261",
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
      "2026-02": 0
    }
  },
  {
    "id": "e72e6d29-4215-4fca-928f-dddef6561747",
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
      "2026-02": 0
    }
  },
  {
    "id": "9ab25b4a-3db7-4de5-8409-99344e5e7681",
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
      "2026-02": 0
    }
  },
  {
    "id": "00e20a3f-8630-4263-ad07-9ec53e23feb2",
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
      "2026-02": 0
    }
  },
  {
    "id": "6171521d-4ce2-4397-9348-ddaf2c1e3973",
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
      "2026-02": 0
    }
  },
  {
    "id": "35515db9-4004-4e01-b216-195621a998a8",
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
      "2026-02": 0
    }
  },
  {
    "id": "05689815-9952-472a-a5d3-797513863f24",
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
      "2026-02": 0
    }
  },
  {
    "id": "c6cf9952-5452-464a-acef-71f9d58898e3",
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
      "2026-02": 0
    }
  },
  {
    "id": "b38eded4-207c-45c1-844a-548fc39e3aa9",
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
      "2026-02": 0
    }
  },
  {
    "id": "b37c4b1e-4078-4d3e-b1bb-fcbffbf105af",
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
      "2026-02": 0
    }
  },
  {
    "id": "06fab74b-2d8b-45f3-8016-1f6afa44ee65",
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
      "2026-02": 0
    }
  },
  {
    "id": "e91c9338-e723-446b-b5a3-3522f845809f",
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
      "2026-02": 0
    }
  },
  {
    "id": "5fa284be-6c30-4d1c-afc4-16e70f0b634d",
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
      "2026-02": 0
    }
  },
  {
    "id": "cda6d435-be8b-4c86-ae24-93bd4895cdd6",
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
      "2026-02": 0
    }
  },
  {
    "id": "b67b5a2a-a967-42cb-8bde-6cb51233ae8a",
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
      "2026-02": 0
    }
  },
  {
    "id": "8d9f343f-2595-4913-942f-d574c3d99d29",
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
      "2026-02": 0
    }
  },
  {
    "id": "2e0981e4-ec42-49c5-9967-2f7dce358a30",
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
      "2026-02": 0
    }
  },
  {
    "id": "8fb26bd9-0afc-4210-8174-f1b038bb8c59",
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
      "2026-02": 0
    }
  },
  {
    "id": "6a04baf3-f7bf-495b-8eaa-2b85484fe704",
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
      "2026-02": 0
    }
  },
  {
    "id": "eafd415d-88e6-45a4-bb7c-d40295f4dc7f",
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
      "2026-02": 0
    }
  },
  {
    "id": "ff4f12a9-6042-4077-a17c-f0a5f0089f6b",
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
      "2026-02": 0
    }
  },
  {
    "id": "01eb5308-2bab-49db-a409-7431e25404cf",
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
      "2026-02": 0
    }
  },
  {
    "id": "8d8a3101-628b-4fce-8f01-7cbb2d2ac4d2",
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
      "2026-02": 0
    }
  },
  {
    "id": "b0611fb9-2ce8-4c83-a1a7-8aced797b085",
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
    "id": "a8e864fe-9c67-416c-aaec-e38161d7483a",
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
      "2026-02": 0
    }
  },
  {
    "id": "02c28cf2-be80-488e-8cc6-742724973474",
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
    "id": "8d4e8cd0-558e-4115-840d-e39396932760",
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
    "id": "c65775b7-5359-416f-b370-316719c9a1c0",
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
      "2026-02": 0
    }
  },
  {
    "id": "d36247c0-7026-4d82-917d-f0ca4ab61b3c",
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
      "2026-02": 0
    }
  },
  {
    "id": "7fd8b743-6f51-4aea-92f8-40ac4cf26983",
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
      "2026-02": 0
    }
  },
  {
    "id": "51a2e37d-544f-4c3e-b6e0-4126c238c893",
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
      "2026-02": 0
    }
  },
  {
    "id": "76683c81-7ddd-49f1-941f-044356fca570",
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
      "2026-02": 0
    }
  },
  {
    "id": "a4a5a9f6-aa3c-4573-adca-769ac3d8e383",
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
      "2026-02": 0
    }
  },
  {
    "id": "a56e3aef-b63d-4948-9d22-628da662b8fc",
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
      "2026-02": 0
    }
  },
  {
    "id": "52bde81b-b64b-4a53-bfb1-291b09406bd0",
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
      "2026-02": 0
    }
  },
  {
    "id": "9e5997a5-76fa-45d4-af8f-59db1b3962e0",
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
      "2026-02": 0
    }
  },
  {
    "id": "bdb09710-1791-4f4a-abae-44ee7c7ec19d",
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
      "2026-02": 0
    }
  },
  {
    "id": "d00c7d3d-7852-4529-892b-bff59599bd2e",
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
      "2026-02": 0
    }
  },
  {
    "id": "74b0524c-5e81-4479-a0c1-0029a9a2396a",
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
      "2026-02": 0
    }
  },
  {
    "id": "56425952-4b09-4b6b-a132-e5bdf466e5fa",
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
      "2026-02": 0
    }
  },
  {
    "id": "920a4f3d-c796-404e-b199-6a3306f76de9",
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
      "2026-02": 0
    }
  },
  {
    "id": "eddbea21-3153-4132-9c07-8c9257aab7ef",
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
      "2026-02": 0
    }
  },
  {
    "id": "f5cb9c7d-16af-4415-92e0-846b5d2c5fbb",
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
      "2026-02": 0
    }
  },
  {
    "id": "eddcb91d-376d-4c26-9b55-cef9a6d20584",
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
      "2026-02": 0
    }
  },
  {
    "id": "9d418797-72a8-49b0-b645-a51f1b27533e",
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
      "2026-02": 0
    }
  },
  {
    "id": "69d07980-dbd2-47ce-9b00-1d37294be4a6",
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
      "2026-02": 0
    }
  },
  {
    "id": "18ac99e6-3dbb-4e87-9f83-d253469d641a",
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
      "2026-02": 0
    }
  },
  {
    "id": "fe22f720-326b-4bb8-be98-1848ee88e7a3",
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
      "2026-02": 0
    }
  },
  {
    "id": "049bf226-b216-4e98-b6ef-6ec073fdc5cf",
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
      "2026-02": 0
    }
  },
  {
    "id": "3b920a5a-d7c2-42ff-bb5e-00d10a8dd1a2",
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
      "2026-02": 0
    }
  },
  {
    "id": "da5f5815-4bc4-4de1-92fa-437c539d96f8",
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
      "2026-02": 0
    }
  },
  {
    "id": "dac6a5dc-d817-4288-bc51-4f533a2771ed",
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
      "2026-02": 0
    }
  },
  {
    "id": "39230cc5-745b-43e5-ba58-05ba55772750",
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
      "2026-02": 0
    }
  },
  {
    "id": "254ec164-3531-44f7-8cc2-25a2d2554935",
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
      "2026-02": 0
    }
  },
  {
    "id": "897d0810-a111-473d-ad61-929771bdb71b",
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
      "2026-02": 0
    }
  },
  {
    "id": "3075a78f-b432-4f1a-bc12-2f7a8376b2e5",
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
      "2026-02": 0
    }
  },
  {
    "id": "c48c5656-b5f3-49bf-93ea-ed7095de2248",
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
      "2026-02": 0
    }
  },
  {
    "id": "7c5bc91e-22c3-4de4-9559-77242e81eee6",
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
      "2026-02": 0
    }
  },
  {
    "id": "779fe840-bd17-4bc6-acf0-ebc30df6039e",
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
      "2026-02": 0
    }
  },
  {
    "id": "b322d4cf-d078-4b25-bb90-7e0ba916aa8a",
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
      "2026-02": 0
    }
  },
  {
    "id": "5ddccdd1-2a06-4aba-98e1-6951aa596ab1",
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
      "2026-02": 0
    }
  },
  {
    "id": "604661ba-c296-44dc-94c3-c9e9c20679c2",
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
      "2026-02": 0
    }
  },
  {
    "id": "951cbdda-ddc2-4b94-aca6-b02bf9aa8729",
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
      "2026-02": 0
    }
  },
  {
    "id": "8488ecf1-52c8-4e5b-b856-17ffcef5f0e1",
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
      "2026-02": 0
    }
  },
  {
    "id": "cde2c8b5-32c3-40d1-a804-2ebd9562eb8f",
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
      "2026-02": 0
    }
  },
  {
    "id": "860d85af-eead-47aa-95e9-2b9c4b902dba",
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
      "2026-02": 0
    }
  },
  {
    "id": "84898880-cda3-453f-bbb7-1f0cbe7bafac",
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
      "2026-02": 0
    }
  },
  {
    "id": "121f579f-47ef-49c2-aed0-ac035fa6c200",
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
      "2026-02": 0
    }
  },
  {
    "id": "7354f2b3-8686-4764-9697-c3d2eb99ec23",
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
      "2026-02": 0
    }
  },
  {
    "id": "70709466-60dd-42ad-a26e-082dfc234093",
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
      "2026-02": 0
    }
  },
  {
    "id": "200e81d3-da86-4d19-9e54-095d417b2e3f",
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
      "2026-02": 0
    }
  },
  {
    "id": "b858bda4-3c70-4852-931d-671868b534f8",
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
      "2026-02": 0
    }
  },
  {
    "id": "dc92d36a-b4e4-408d-92b4-c1cbec1717ca",
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
      "2026-02": 0
    }
  },
  {
    "id": "fdc7c5ee-36e5-4192-9659-5ecf445e12c5",
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
      "2026-02": 0
    }
  },
  {
    "id": "85457867-ce8f-488b-943b-21ed2dd4cb04",
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
      "2026-02": 0
    }
  },
  {
    "id": "a7bda2e4-444e-46d6-8d0e-a3cc676b9885",
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
      "2026-02": 0
    }
  },
  {
    "id": "96d777d1-7a23-42a4-8fdf-4269cd3c8c08",
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
      "2026-02": 0
    }
  },
  {
    "id": "4dd0a69b-5690-430f-a1f6-bef39ec8827f",
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
      "2026-02": 0
    }
  },
  {
    "id": "5b97b228-f800-4b78-887d-a9bd46eced8e",
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
      "2026-02": 0
    }
  },
  {
    "id": "06fe62d6-38be-4f43-8939-5a754f0dda96",
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
      "2026-02": 0
    }
  },
  {
    "id": "315f5507-66f7-4fb5-8816-da7efe959027",
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
      "2026-02": 0
    }
  },
  {
    "id": "ef7b49f8-7afd-4837-9f6b-dbac54846f0b",
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
      "2026-02": 0
    }
  },
  {
    "id": "18763e9c-5e5f-42fe-aaaa-0f323c5c1d11",
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
      "2026-02": 0
    }
  },
  {
    "id": "81f150a1-4d01-449e-8df3-77a61ea287b9",
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
      "2026-02": 0
    }
  },
  {
    "id": "eba1e6ba-6f67-4721-b3d2-d33033c70161",
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
      "2026-02": 0
    }
  },
  {
    "id": "0ff42652-ea1a-4df6-ac8c-149536a26f16",
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
      "2026-02": 0
    }
  },
  {
    "id": "a8743fed-b180-4c99-9b2c-b64ea1f281d8",
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
      "2026-02": 0
    }
  },
  {
    "id": "c93b65c8-a6ad-4d08-ba1c-a7aca673ec5c",
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
      "2026-02": 0
    }
  },
  {
    "id": "6483a393-564b-4f35-85a8-461ead0e1969",
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
      "2026-02": 0
    }
  },
  {
    "id": "13376f26-c219-4819-ae9e-7473481703ac",
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
      "2026-02": 0
    }
  },
  {
    "id": "2285e53c-6e12-46e4-b10a-184a1ceb9ca8",
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
      "2026-02": 0
    }
  },
  {
    "id": "1f23874c-20e4-4986-8705-00a0647b2847",
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
      "2026-02": 0
    }
  },
  {
    "id": "bc523f4c-64fa-4887-a5af-bbdf4bac1724",
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
      "2026-02": 0
    }
  },
  {
    "id": "91b43b09-d3e4-49da-a9b8-3f1cbb888aec",
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
      "2026-02": 0
    }
  },
  {
    "id": "ac54ab47-fd3e-4050-a21f-a55cfe3f3870",
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
      "2026-02": 0
    }
  },
  {
    "id": "f4406ab2-ee9b-4729-a804-7bd599172876",
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
      "2026-02": 0
    }
  },
  {
    "id": "8dd74a72-8d5b-4a56-abe3-2afb7eb7e2da",
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
      "2026-02": 0
    }
  },
  {
    "id": "8dc85afb-74f5-4685-865e-a6c5bf0dccd0",
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
      "2026-02": 0
    }
  },
  {
    "id": "0c99e6f1-6978-4b50-ac72-754f75f54e0e",
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
      "2026-02": 0
    }
  },
  {
    "id": "42499033-ade7-44a6-9599-d0084b06036e",
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
      "2026-02": 0
    }
  },
  {
    "id": "1d31f4c5-b8c0-4d6f-8fd9-b85f86953dab",
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
      "2026-02": 0
    }
  },
  {
    "id": "b145d4c7-119d-41b6-a8cb-242c46f516dd",
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
      "2026-02": 0
    }
  },
  {
    "id": "4a018c1a-f4cf-44e6-8d44-56fc5d303d3c",
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
      "2026-02": 0
    }
  },
  {
    "id": "60a2283e-dcd0-4f22-be94-dea7ce630595",
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
      "2026-02": 0
    }
  },
  {
    "id": "7386f75e-ddf2-40ec-a8c0-caab757762a6",
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
      "2026-02": 0
    }
  },
  {
    "id": "a33fcfbd-b874-4840-8e4a-7f0d52bc3308",
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
      "2026-02": 0
    }
  },
  {
    "id": "50c55399-ade0-446f-bc15-8764a145a5ff",
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
      "2026-02": 0
    }
  },
  {
    "id": "8f0e80a4-3d81-44db-b3fd-2e365978edbb",
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
      "2026-02": 0
    }
  },
  {
    "id": "634c265e-0be1-4168-9812-fdfa5a44dc09",
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
      "2026-02": 0
    }
  },
  {
    "id": "4bf8a900-f31d-41ab-afd9-0dd0a9798a27",
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
      "2026-02": 0
    }
  },
  {
    "id": "583e6010-8783-4cb4-96ec-c133a76e3537",
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
      "2026-02": 0
    }
  },
  {
    "id": "b6170de3-9aef-4101-af13-edaa0e6c1e4e",
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
      "2026-02": 0
    }
  },
  {
    "id": "092a2c3d-207a-4aea-b5b7-f2d64c4ceb48",
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
      "2026-02": 0
    }
  },
  {
    "id": "45fad546-987a-4805-ac5c-25aa368fbc2f",
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
      "2026-02": 0
    }
  },
  {
    "id": "86acf2f3-1721-41d0-aa30-e1100aa17f8e",
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
      "2026-02": 0
    }
  },
  {
    "id": "d09d2930-5943-46b2-980b-17c28f5f1379",
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
      "2026-02": 0
    }
  },
  {
    "id": "75e35429-1c3c-4d1f-b71e-6826498e26e2",
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
      "2026-02": 0
    }
  },
  {
    "id": "06eb66e1-3d26-4281-96f8-865f7ae4f4fa",
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
      "2026-02": 0
    }
  },
  {
    "id": "5340b434-a2bf-4968-8225-312bc53863bc",
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
      "2026-02": 0
    }
  },
  {
    "id": "8eb22cf4-9171-42a3-b14c-696b3aa94cbe",
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
      "2026-02": 0
    }
  },
  {
    "id": "ec6826fe-1126-41d8-959b-154410ad0e85",
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
      "2026-02": 0
    }
  },
  {
    "id": "dfb8c66f-24f7-4a62-8a83-0ff26c4317cd",
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
      "2026-02": 0
    }
  },
  {
    "id": "0f8558ea-77bf-4963-972f-37f65b407022",
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
      "2026-02": 0
    }
  },
  {
    "id": "fdfead79-4cd9-4f6f-b251-d3786e309dfe",
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
      "2026-02": 0
    }
  },
  {
    "id": "f6feaf6a-4be9-4fe1-8f9b-15d9621883ff",
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
      "2026-02": 0
    }
  },
  {
    "id": "27df318a-58f7-460a-9f1f-847c5a60fb3d",
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
      "2026-02": 0
    }
  },
  {
    "id": "345c0c71-2492-448a-a02a-b438c34a6a24",
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
      "2026-02": 0
    }
  },
  {
    "id": "274245d9-2f10-4457-bba0-205c1b6b9413",
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
      "2026-02": 0
    }
  },
  {
    "id": "bb390c10-83c4-486d-a2ab-1b2ae82f0016",
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
      "2026-02": 0
    }
  },
  {
    "id": "dbb12d26-a61d-4406-b637-efc04d331118",
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
      "2026-02": 0
    }
  },
  {
    "id": "f7940d28-56db-4c6f-b4bc-3617074eb084",
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
      "2026-02": 0
    }
  },
  {
    "id": "55e2e537-1bb2-4bc2-a575-c99015006b99",
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
      "2026-02": 0
    }
  },
  {
    "id": "6f334ad4-fc80-42cb-b03c-79e25a62a981",
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
      "2026-02": 0
    }
  },
  {
    "id": "2b1c2786-a0b4-4424-a6c7-6e4514224b23",
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
      "2026-02": 0
    }
  },
  {
    "id": "50e73509-f667-4752-8e25-94f370908757",
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
      "2026-02": 0
    }
  },
  {
    "id": "400086e1-a1b6-40bb-9580-bfc1a81224db",
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
      "2026-02": 0
    }
  },
  {
    "id": "d9bc5661-e8cc-4ea0-b26b-98d4dc4c8e2b",
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
      "2026-02": 0
    }
  },
  {
    "id": "0d0e114e-2899-4be1-afc7-086740d22a0b",
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
      "2026-02": 0
    }
  },
  {
    "id": "100faca9-8bbf-4fed-b868-000f6c59cecf",
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
      "2026-02": 0
    }
  },
  {
    "id": "a757c1fe-ebe9-454d-8e2c-46dca07a2726",
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
      "2026-02": 0
    }
  },
  {
    "id": "5f16037a-f003-4a39-b4a4-a70e6bde78f3",
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
      "2026-02": 0
    }
  },
  {
    "id": "c1f275f1-f2b6-48f2-8531-f7b9068074c6",
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
      "2026-02": 0
    }
  },
  {
    "id": "ed84a610-d1c0-4309-b720-3d99c0453b3d",
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
      "2026-02": 0
    }
  },
  {
    "id": "4b3a149f-d351-4361-9db9-047d66cbe379",
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
      "2026-02": 0
    }
  },
  {
    "id": "55268aec-7368-4958-aab5-d70c2c7d78f3",
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
      "2026-02": 0
    }
  },
  {
    "id": "714b44b1-6d6f-4128-9d30-6748391211bd",
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
      "2026-02": 0
    }
  },
  {
    "id": "e5951e08-09c1-4493-b5ed-6f2476a4c1ae",
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
      "2026-02": 0
    }
  },
  {
    "id": "b86bc7fc-a271-4971-ac91-862f612e106e",
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
      "2026-02": 0
    }
  },
  {
    "id": "574c2401-f76a-4007-9ee7-f191b3f57eef",
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
      "2026-02": 0
    }
  },
  {
    "id": "6c3c752e-1654-490c-b0fb-1c22d9ef4864",
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
      "2026-02": 0
    }
  },
  {
    "id": "42af8413-a617-4ef4-869c-f550100b7bbd",
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
      "2026-02": 0
    }
  },
  {
    "id": "7314f4fe-d56d-445e-a484-6539187821d6",
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
      "2026-02": 0
    }
  },
  {
    "id": "af60a3ab-17e9-456f-9e40-6e5d44a5b945",
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
      "2026-02": 0
    }
  },
  {
    "id": "47bb06fa-152d-40ba-b37c-5d9b7fdbbeb3",
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
      "2026-02": 0
    }
  },
  {
    "id": "c1322bde-075f-409d-9cc5-724e5daa1b09",
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
      "2026-02": 0
    }
  },
  {
    "id": "507e61ba-0af7-4f27-b693-f481314ace11",
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
      "2026-02": 0
    }
  },
  {
    "id": "ab5233c3-7fb7-470f-89e6-f138d26489ec",
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
      "2026-02": 0
    }
  },
  {
    "id": "414fce24-1e95-49e1-b595-a78bab3d1111",
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
      "2026-02": 0
    }
  },
  {
    "id": "b7347348-559b-475f-b83d-0ad7842e2715",
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
      "2026-02": 0
    }
  },
  {
    "id": "ca2129fc-a69f-4a43-b979-6330b23bc94d",
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
      "2026-02": 0
    }
  },
  {
    "id": "bf25a226-961c-4d8c-9af2-4954e6886f73",
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
      "2026-02": 0
    }
  },
  {
    "id": "90892d9a-d890-42ce-b71d-822ebfb18b9d",
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
      "2026-02": 0
    }
  },
  {
    "id": "c97538c2-2c06-4945-beb6-914bc08fd622",
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
      "2026-02": 0
    }
  },
  {
    "id": "42af211c-a978-4a55-b7f5-0bb875d435b7",
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
      "2026-02": 0
    }
  },
  {
    "id": "f6fb9a51-f34c-4980-80a4-d7812b611c27",
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
      "2026-02": 0
    }
  },
  {
    "id": "e04e2f88-0419-4e81-a101-f80842a57a7e",
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
      "2026-02": 0
    }
  },
  {
    "id": "cc202dcf-e93b-4d41-a501-d3d05ceed7eb",
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
      "2026-02": 0
    }
  },
  {
    "id": "a88bbb12-bb9b-4d82-8495-d6f1ef392059",
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
      "2026-02": 0
    }
  },
  {
    "id": "0fa471c0-170b-4396-9190-ac63cc35f962",
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
      "2026-02": 0
    }
  },
  {
    "id": "685b8ae0-d68e-440a-82c3-3f533adfb3ed",
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
      "2026-02": 0
    }
  },
  {
    "id": "6cce811d-b7ea-4060-97ae-c035db23b5a9",
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
      "2026-02": 0
    }
  },
  {
    "id": "167c601d-378a-44df-aea4-7e99942eed9a",
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
      "2026-02": 0
    }
  },
  {
    "id": "7fd5ab97-54d7-4147-ba84-8640c88f6d5b",
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
      "2026-02": 0
    }
  },
  {
    "id": "a75940e2-3251-4ee0-8172-9b4e0b2cdbda",
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
      "2026-02": 0
    }
  },
  {
    "id": "398396a8-0eaf-40fb-822d-2520b8232bac",
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
      "2026-02": 0
    }
  },
  {
    "id": "f1b7fa27-1cf1-4802-9bfd-09b7c3047a06",
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
      "2026-02": 0
    }
  },
  {
    "id": "d8fe9f7b-31eb-479c-99d9-905ef4b6eac3",
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
      "2026-02": 0
    }
  },
  {
    "id": "8c5bfdac-0fbb-47ea-a446-acad60a31287",
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
      "2026-02": 0
    }
  },
  {
    "id": "f780752a-026c-428d-af12-2f3841347711",
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
      "2026-02": 0
    }
  },
  {
    "id": "a75e3a5d-e473-4871-ac27-04cfc4660921",
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
      "2026-02": 0
    }
  },
  {
    "id": "b8f7aaf1-3e89-4970-9b92-753becdec47f",
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
      "2026-02": 0
    }
  },
  {
    "id": "597bb8e2-c36e-45ca-a60a-c1b34be285fd",
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
      "2026-02": 0
    }
  },
  {
    "id": "2e720d1a-6d3c-4d43-8c24-f4efab215691",
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
      "2026-02": 0
    }
  },
  {
    "id": "0af4ef8e-f4bf-4b52-8f3f-0490d40a9d50",
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
      "2026-02": 0
    }
  },
  {
    "id": "3244afbb-2bbe-4e51-a978-7ec806eefe7e",
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
      "2026-02": 0
    }
  },
  {
    "id": "8bb9b443-48fe-43da-aab5-534b62b42544",
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
      "2026-02": 0
    }
  },
  {
    "id": "f1c4ea2e-4dd8-42ea-8b0a-bd04b1232f41",
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
      "2026-02": 0
    }
  },
  {
    "id": "e9ecef02-8fd5-437d-b8bd-da4423096b85",
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
      "2026-02": 0
    }
  },
  {
    "id": "25eb3b02-c9c8-4f1b-8ddd-990d9501b935",
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
      "2026-02": 0
    }
  },
  {
    "id": "aaa15c2f-8771-4ad7-a22c-933069a19e70",
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
      "2026-02": 0
    }
  },
  {
    "id": "a29a90ff-bd9e-4891-9347-a96e2d7c1824",
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
      "2026-02": 0
    }
  },
  {
    "id": "b4b3652a-3822-42ca-a337-fc20fb446fe1",
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
      "2026-02": 0
    }
  },
  {
    "id": "e4af2023-3cb0-4aec-a659-7484602da4ca",
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
      "2026-02": 0
    }
  },
  {
    "id": "107fa286-be94-4f70-af7e-fd7d6eecc9e8",
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
      "2026-02": 0
    }
  },
  {
    "id": "e686ad65-9eb5-438a-b906-6bbcec2657b3",
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
      "2026-02": 0
    }
  },
  {
    "id": "babd94fa-09fe-40e0-9f15-0176fb79b25c",
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
      "2026-02": 0
    }
  },
  {
    "id": "2f61a459-e549-41a2-8047-c6710f8c97f7",
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
      "2026-02": 0
    }
  },
  {
    "id": "d8f43233-5be2-4481-833d-3436f7a4d1df",
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
      "2026-02": 0
    }
  },
  {
    "id": "fef2dba8-f31d-451c-84d3-884e12e43c81",
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
      "2026-02": 0
    }
  },
  {
    "id": "54bdb330-784e-4964-aeea-0b6a0c9b57ca",
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
      "2026-02": 0
    }
  },
  {
    "id": "5b8d4185-c3c4-4ec5-b84b-b1b5d149cfae",
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
      "2026-02": 0
    }
  },
  {
    "id": "822f1889-61cf-4db2-83c4-0c94a1eb0595",
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
      "2026-02": 0
    }
  },
  {
    "id": "68b4d187-a3fc-42d5-bae3-9f8bf2c72a09",
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
      "2026-02": 0
    }
  },
  {
    "id": "e269eba6-caf5-4ffe-84b3-0ee3c9a25b21",
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
      "2026-02": 0
    }
  },
  {
    "id": "6dddfdf1-516c-4c11-9242-ec0fe54fd2b1",
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
      "2026-02": 0
    }
  },
  {
    "id": "9653d16d-68d1-43ad-8ed0-1d92e9f026dc",
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
      "2026-02": 0
    }
  },
  {
    "id": "b6cb6fa0-8969-4f97-82c2-e603734e41b5",
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
      "2026-02": 0
    }
  },
  {
    "id": "ec0f3977-7792-4c46-af1e-95c7d5c35c9c",
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
      "2026-02": 0
    }
  },
  {
    "id": "1e6c7edd-b66c-4eb1-95cd-2dc21f64075d",
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
      "2026-02": 0
    }
  },
  {
    "id": "7278415b-c6ba-409d-a37f-4c49c7db8ef5",
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
      "2026-02": 0
    }
  },
  {
    "id": "fb957021-070e-4714-8a97-3e07af14cf43",
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
      "2026-02": 0
    }
  },
  {
    "id": "835307eb-7620-4bb3-8e51-9f912824295a",
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
      "2026-02": 0
    }
  },
  {
    "id": "477aa233-265d-4710-8981-77f8a9097d65",
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
      "2026-02": 0
    }
  },
  {
    "id": "07fc1cdf-df7e-42f4-9499-99e33c1ccdb6",
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
      "2026-02": 0
    }
  },
  {
    "id": "bb660655-f6ed-46a0-bf12-984683aec54d",
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
      "2026-02": 0
    }
  },
  {
    "id": "401f5024-e710-4e58-a844-a577cf8ead42",
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
      "2026-02": 0
    }
  },
  {
    "id": "e54a9d1c-228e-44d1-ac11-93c7eb712485",
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
      "2026-02": 0
    }
  },
  {
    "id": "caa9dcb5-d535-430f-b4f3-738b2b7370a0",
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
      "2026-02": 0
    }
  },
  {
    "id": "bd2db23a-fcec-4c21-b244-710f20e81a72",
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
      "2026-02": 0
    }
  },
  {
    "id": "d279633b-30ba-46c2-bcd9-bf781299f45b",
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
      "2026-02": 0
    }
  },
  {
    "id": "081e3b4b-836a-42b2-9509-a7665ad28e0a",
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
      "2026-02": 0
    }
  },
  {
    "id": "f343d0ba-6afa-4efc-8c95-d5e64c85c6f7",
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
      "2026-02": 0
    }
  },
  {
    "id": "c619a0fa-a15e-4bae-b32c-fc181aef7e5c",
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
      "2026-02": 0
    }
  },
  {
    "id": "397353b7-42ae-4614-8ea2-e4722bc426d6",
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
      "2026-02": 0
    }
  },
  {
    "id": "79db2df2-f6c6-4202-8475-026aadf9d19b",
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
      "2026-02": 0
    }
  },
  {
    "id": "9e409db4-7340-4861-9556-16737e90afdc",
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
      "2026-02": 0
    }
  },
  {
    "id": "51a3e260-b8de-4839-aa1c-ecb95e396573",
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
      "2026-02": 0
    }
  },
  {
    "id": "874efbc8-23db-4272-bfb6-185272df2a2f",
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
      "2026-02": 0
    }
  },
  {
    "id": "40f352a0-4b70-4401-b9a8-d72eacac49fd",
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
      "2026-02": 0
    }
  },
  {
    "id": "e256ed02-af24-475c-a507-dd7925aa2794",
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
      "2026-02": 0
    }
  },
  {
    "id": "c162af44-0a2a-4104-9830-88e9b97ea06e",
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
      "2026-02": 0
    }
  },
  {
    "id": "34aec1f6-88ed-42cb-a7ac-99aff4cedf18",
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
      "2026-02": 0
    }
  },
  {
    "id": "d80bd3b2-6254-4a5b-802a-69090aa3c807",
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
      "2026-02": 0
    }
  },
  {
    "id": "8a6dd0ac-e66d-4fa9-95c2-c82b2cf48256",
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
      "2026-02": 0
    }
  },
  {
    "id": "32251e8b-4638-45d7-b6ea-8bb1d7fd98bd",
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
      "2026-02": 0
    }
  },
  {
    "id": "3788802d-5f15-49e6-b015-bfbe03d43d84",
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
      "2026-02": 0
    }
  },
  {
    "id": "eb2522e9-3e1d-4c22-9400-e76c42676555",
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
      "2026-02": 0
    }
  },
  {
    "id": "d387f419-7083-4a52-b9fe-bdaa6e0e52d1",
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
      "2026-02": 0
    }
  },
  {
    "id": "8a7f431c-ad82-44cc-9332-55f649a90a31",
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
      "2026-02": 0
    }
  },
  {
    "id": "670aed40-21a9-44fa-a445-283edb46b6cf",
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
      "2026-02": 0
    }
  },
  {
    "id": "2b53bd1f-1919-4a1f-9970-69ab4827e130",
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
      "2026-02": 0
    }
  },
  {
    "id": "e2b2339c-3a81-4910-99a6-2006b43d8c16",
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
      "2026-02": 0
    }
  },
  {
    "id": "dcbaef6d-4d2c-4b28-bc32-5a8e15bfe194",
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
      "2026-02": 0
    }
  },
  {
    "id": "6cf37942-42ba-43f4-9607-e0b2194a3c00",
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
      "2026-02": 0
    }
  },
  {
    "id": "ad6f32ca-8008-4d59-a7b3-b70e5a3106ab",
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
      "2026-02": 0
    }
  },
  {
    "id": "028d2455-6752-4378-a0d8-1a912433c94e",
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
      "2026-02": 0
    }
  },
  {
    "id": "0ca25f78-b487-4196-967e-d29631db0d0b",
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
      "2026-02": 0
    }
  },
  {
    "id": "93c7e9b3-3cf7-4a92-b7e0-73722e39dfda",
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
      "2026-02": 0
    }
  },
  {
    "id": "568a53f6-595f-44fc-8e44-50c882715aed",
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
      "2026-02": 0
    }
  },
  {
    "id": "1e747056-8383-4355-9b80-dc833cf9fe49",
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
      "2026-02": 0
    }
  },
  {
    "id": "5d7f2135-172a-4567-ae06-0ee151f2b990",
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
      "2026-02": 0
    }
  },
  {
    "id": "cba0f74d-e219-4edb-bc54-082832260b02",
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
      "2026-02": 0
    }
  },
  {
    "id": "11d1e7e9-18de-4265-b3ee-d37b93ee05dc",
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
      "2026-02": 0
    }
  },
  {
    "id": "03881b1f-3712-474c-9711-e2b4a820e152",
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
      "2026-02": 0
    }
  },
  {
    "id": "5fdf19ba-2035-4a09-aed4-67f7eef59852",
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
      "2026-02": 0
    }
  },
  {
    "id": "cc949d92-70bd-4354-be71-24d237a976d8",
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
      "2026-02": 0
    }
  },
  {
    "id": "5fd51eeb-3c6c-404c-a051-0a9549ad5345",
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
      "2026-02": 0
    }
  },
  {
    "id": "d3edaeb0-ade3-4a4b-8911-3796d52da43b",
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
      "2026-02": 0
    }
  },
  {
    "id": "209321c1-446b-46f3-9f5e-4bd4343611af",
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
      "2026-02": 0
    }
  },
  {
    "id": "856226dd-a5c2-47a3-81f6-e986fb230436",
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
      "2026-02": 0
    }
  },
  {
    "id": "4f1ec4bb-39f2-413a-b621-b8d872322555",
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
      "2026-02": 0
    }
  },
  {
    "id": "891913e1-32b9-4327-b99c-d1d43a7153ab",
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
      "2026-02": 0
    }
  },
  {
    "id": "210b3bf7-3ee8-400f-93d9-e291ccfc5afe",
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
      "2026-02": 0
    }
  },
  {
    "id": "b8cfc294-fa34-4891-ac35-e3d789a829c4",
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
      "2026-02": 0
    }
  },
  {
    "id": "57d0c312-405d-431d-9ffc-560c762c9364",
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
      "2026-02": 0
    }
  },
  {
    "id": "180bfb86-2840-4c01-99e5-6fe617c77567",
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
      "2026-02": 0
    }
  },
  {
    "id": "9f927fb7-f3b6-4491-af70-6502308c7949",
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
      "2026-02": 0
    }
  },
  {
    "id": "e1d924ad-aac2-45ce-a2c3-a64226b2e059",
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
      "2026-02": 0
    }
  },
  {
    "id": "0091342e-577c-47ae-8088-a88ce1adfacc",
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
      "2026-02": 0
    }
  },
  {
    "id": "164f6895-fc0e-495e-88b1-5fdf3b608ba2",
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
      "2026-02": 0
    }
  },
  {
    "id": "b7ec6fae-ca5d-4eb7-af92-22e4d44de3e5",
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
      "2026-02": 0
    }
  },
  {
    "id": "5b768cee-e69f-4587-894a-af7cdaed9df1",
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
      "2026-02": 0
    }
  },
  {
    "id": "ebdc955b-3541-468d-9bf3-2f4bf3a38632",
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
      "2026-02": 0
    }
  },
  {
    "id": "3da7d58d-9a0c-445d-8874-009cb35cef7c",
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
      "2026-02": 0
    }
  },
  {
    "id": "45ce20b8-2b7b-44f4-8210-c62346d81a60",
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
      "2026-02": 0
    }
  },
  {
    "id": "6d8d1c69-072f-42c7-8184-92ca9da93845",
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
      "2026-02": 0
    }
  },
  {
    "id": "9e791ca1-cc99-4b15-a162-99ac7e8a55c9",
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
      "2026-02": 0
    }
  },
  {
    "id": "cd859329-0f5d-4e55-a7fa-91d164d35413",
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
      "2026-02": 0
    }
  },
  {
    "id": "a2291788-25fa-412b-bdfc-33cdf423464b",
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
      "2026-02": 0
    }
  },
  {
    "id": "cda42ed6-3d03-4f4b-bec9-89b99b2180ae",
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
      "2026-02": 0
    }
  },
  {
    "id": "10d0c339-0602-4b65-949e-68e69ae89be9",
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
      "2026-02": 0
    }
  },
  {
    "id": "01dd046c-8a52-454a-8f95-8a438ef5354d",
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
      "2026-02": 0
    }
  },
  {
    "id": "00458c30-2158-443b-b711-d66365e002ed",
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
      "2026-02": 0
    }
  },
  {
    "id": "5cabc523-0dfb-4e86-9576-7c8035f71cc2",
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
      "2026-02": 0
    }
  },
  {
    "id": "deb4b258-0813-4afc-a340-534f70f04c8e",
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
      "2026-02": 0
    }
  },
  {
    "id": "910bd9a0-266a-46de-b554-25bd89a45950",
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
      "2026-02": 0
    }
  },
  {
    "id": "adce0e26-20dd-4d8a-b3fd-264f48eddc7b",
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
      "2026-02": 0
    }
  },
  {
    "id": "7030ad14-44e9-45a5-841f-28156477c03d",
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
      "2026-02": 0
    }
  },
  {
    "id": "5162d435-f373-4ee8-aca3-9926905f1465",
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
      "2026-02": 0
    }
  },
  {
    "id": "977cbd04-6899-465d-9b41-f17ce17b14ab",
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
      "2026-02": 0
    }
  },
  {
    "id": "b9b7b206-07f8-41ab-a7b3-3b3af7cb4b12",
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
      "2026-02": 0
    }
  },
  {
    "id": "e84d8fc7-66ae-46ba-b12d-7f3f28d3253f",
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
      "2026-02": 0
    }
  },
  {
    "id": "b78e9217-42a2-4e49-884a-a79edf21074b",
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
      "2026-02": 0
    }
  },
  {
    "id": "21ec3241-218e-40e9-941e-47d2fa8d5267",
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
      "2026-02": 0
    }
  },
  {
    "id": "418878c9-f563-4a86-91a2-e3b0e94622f7",
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
      "2026-02": 0
    }
  },
  {
    "id": "d2278c35-9422-44e6-a580-010f4a30a7b4",
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
      "2026-02": 0
    }
  },
  {
    "id": "3fae75c9-82be-4dfe-a9fa-4f0f750f79f5",
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
      "2026-02": 0
    }
  },
  {
    "id": "0653cbc1-e52b-4ecd-a090-84417f1ba35d",
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
      "2026-02": 0
    }
  },
  {
    "id": "18e0e208-bd0a-4629-b728-09d4b5ca674e",
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
      "2026-02": 0
    }
  },
  {
    "id": "1fc3e479-37c9-4d24-8356-e696c91f4008",
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
      "2026-02": 0
    }
  },
  {
    "id": "1b900792-cf06-48e9-92e0-b1bbab6cbd8b",
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
      "2026-02": 0
    }
  },
  {
    "id": "dd3bc347-b2ed-44c6-816e-8fcad74d0500",
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
      "2026-02": 0
    }
  },
  {
    "id": "b8a93111-ca89-432e-b128-4ba3f9bdfd8c",
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
      "2026-02": 0
    }
  },
  {
    "id": "9114fa16-6b79-49be-99eb-7a2d3545f779",
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
      "2026-02": 0
    }
  },
  {
    "id": "fcaea484-439b-4d0b-a489-1c60b2745706",
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
      "2026-02": 0
    }
  },
  {
    "id": "5d878af0-8e58-4f24-932e-0b2912967d02",
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
      "2026-02": 0
    }
  },
  {
    "id": "6d013e3c-b108-4556-bd7a-900b9628e4b1",
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
      "2026-02": 0
    }
  },
  {
    "id": "1f447c4a-542d-4672-86df-1bb8f1311795",
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
      "2026-02": 0
    }
  },
  {
    "id": "27320903-b8f7-43ef-abf8-b0091f6059af",
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
      "2026-02": 0
    }
  },
  {
    "id": "3395997a-6087-4610-981e-022c2a34320f",
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
      "2026-02": 0
    }
  },
  {
    "id": "d7768ca0-1a4d-4282-b6cd-958e3961933a",
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
      "2026-02": 0
    }
  },
  {
    "id": "ad22525b-121d-4b9b-9c51-db65b39669df",
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
      "2026-02": 0
    }
  },
  {
    "id": "c3e6dc87-0bd8-4c2d-849c-fefa38957e18",
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
      "2026-02": 0
    }
  },
  {
    "id": "4e5ae9d8-c90e-4be2-88c0-abf45c62e1d8",
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
      "2026-02": 0
    }
  },
  {
    "id": "2ef65750-9d2e-463c-9118-7b434ef94b24",
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
      "2026-02": 0
    }
  },
  {
    "id": "95bb4097-e630-413a-add9-2e9e0e71f42a",
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
      "2026-02": 0
    }
  },
  {
    "id": "779e7e66-ef03-4d64-a5a5-2366a4f7ad9e",
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
      "2026-02": 0
    }
  },
  {
    "id": "95266cbd-9a41-4a60-b22c-1eba7964d373",
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
      "2026-02": 0
    }
  },
  {
    "id": "9a22229d-b475-49b5-89fc-bcfcbf01d659",
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
      "2026-02": 0
    }
  },
  {
    "id": "30fc5228-252b-417f-b554-9c02753f6653",
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
      "2026-02": 0
    }
  },
  {
    "id": "0ccdd683-13b2-4e45-bdee-477ec4938411",
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
      "2026-02": 0
    }
  },
  {
    "id": "73b215aa-2fd3-4578-ad08-8fd9432ab156",
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
      "2026-02": 0
    }
  },
  {
    "id": "a27542a3-b89a-43d3-8709-9005b32f0d79",
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
      "2026-02": 0
    }
  },
  {
    "id": "a9861421-700c-44b5-9c6e-ac8d8e800ec7",
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
      "2026-02": 0
    }
  },
  {
    "id": "77df97b2-b762-43cd-9c0b-25a7ac89b66e",
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
      "2026-02": 0
    }
  },
  {
    "id": "e101e763-2265-442c-a813-81dbdaf90b68",
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
      "2026-02": 0
    }
  },
  {
    "id": "45bbae5c-1285-43df-8cea-c71d186c402c",
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
      "2026-02": 0
    }
  },
  {
    "id": "5fd11995-a1f6-424e-99e5-088d03ef601f",
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
      "2026-02": 0
    }
  },
  {
    "id": "d9927053-7451-415d-9f8c-b8cf7a3356e0",
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
      "2026-02": 0
    }
  },
  {
    "id": "a08b7900-78dd-4f03-aabf-1c9964ab9407",
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
      "2026-02": 0
    }
  },
  {
    "id": "8e72ff7d-c1df-4ecb-b986-d53f06a1754b",
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
      "2026-02": 0
    }
  },
  {
    "id": "10dda02b-5087-43dc-a220-4330c8357bfa",
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
      "2026-02": 0
    }
  },
  {
    "id": "7bd89b1f-9505-4f37-a63f-fa9c15011cf5",
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
      "2026-02": 0
    }
  },
  {
    "id": "fd2e47af-53a7-4ec4-b33a-089d8699e708",
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
      "2026-02": 0
    }
  },
  {
    "id": "e5ce898c-d246-4620-9b21-2db4e390846e",
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
      "2026-02": 0
    }
  },
  {
    "id": "63778c82-4731-40be-b73b-c073aea44dff",
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
      "2026-02": 0
    }
  },
  {
    "id": "407e358e-64e0-4f6e-837e-7e5ce3a570c2",
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
      "2026-02": 0
    }
  },
  {
    "id": "7dd42ac7-f18e-42a8-807e-15329566e05f",
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
      "2026-02": 0
    }
  },
  {
    "id": "30f50a45-b9b4-4d3f-8e06-048a504bc100",
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
      "2026-02": 0
    }
  },
  {
    "id": "e4e7de04-ec0b-4ee4-ad0b-d7b33b52fcbd",
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
      "2026-02": 0
    }
  },
  {
    "id": "bbf54d8c-4543-4cde-a244-fb4622c246ff",
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
      "2026-02": 0
    }
  },
  {
    "id": "be71d28a-85a6-4cc7-a31d-9eaf35911a6e",
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
      "2026-02": 0
    }
  },
  {
    "id": "b9d8042e-52e1-4128-811c-737d2a51a673",
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
      "2026-02": 0
    }
  },
  {
    "id": "7bdf09e0-5c68-4a05-b4d8-b01889606e15",
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
      "2026-02": 0
    }
  },
  {
    "id": "23a4b6f3-5d04-4823-a88b-75c7c742ed7d",
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
      "2026-02": 0
    }
  },
  {
    "id": "d9ecb563-abe2-4b60-bd5a-f19cb71245f6",
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
      "2026-02": 0
    }
  },
  {
    "id": "7d08ba29-e46a-4945-9483-afcb08ff7cec",
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
      "2026-02": 0
    }
  },
  {
    "id": "dd222060-5068-47ff-badf-c351a03d5ec5",
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
      "2026-02": 0
    }
  },
  {
    "id": "a40e4b65-5e38-4402-b8af-6712ec0f36cb",
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
      "2026-02": 0
    }
  },
  {
    "id": "946ad16a-9a8c-47f4-b560-4bbaa04df986",
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
      "2026-02": 0
    }
  },
  {
    "id": "307b34dc-dd46-49e0-be23-35bf97a3696c",
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
      "2026-02": 0
    }
  },
  {
    "id": "b7946295-d56d-43e6-b574-097709867fc8",
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
      "2026-02": 0
    }
  },
  {
    "id": "9a90179a-e3e1-4cfc-9b10-e599b48b86de",
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
      "2026-02": 0
    }
  },
  {
    "id": "4206e478-bbd7-4cf3-b019-3f097a18aa7a",
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
      "2026-02": 0
    }
  },
  {
    "id": "0ae43be2-85fa-4b94-b8d8-45ea5d74fbed",
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
      "2026-02": 0
    }
  },
  {
    "id": "cdc3283c-40df-4b17-8afd-c06becf6fe83",
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
      "2026-02": 0
    }
  },
  {
    "id": "0907e0be-8638-4951-ba2a-d6dab7c97d46",
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
      "2026-02": 0
    }
  },
  {
    "id": "fadaea7a-e29b-4d0b-8989-373c671e09bd",
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
      "2026-02": 0
    }
  },
  {
    "id": "2352d548-2485-4a29-82b0-bc180b0d99b5",
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
      "2026-02": 0
    }
  },
  {
    "id": "19dbf7e9-b31f-4156-9e1b-e2f35604d7a7",
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
      "2026-02": 0
    }
  },
  {
    "id": "37beceed-e17b-486e-8385-43085ebed4e7",
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
      "2026-02": 0
    }
  },
  {
    "id": "d830472c-a9b6-43b3-acf7-36228fb6da7c",
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
      "2026-02": 0
    }
  },
  {
    "id": "344eb788-5106-4d7f-97d3-baeade6709f2",
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
      "2026-02": 0
    }
  },
  {
    "id": "3ab9d192-894b-4953-acac-f9871c986dab",
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
      "2026-02": 0
    }
  },
  {
    "id": "95edcee4-ae96-476e-b40f-96d5f337480c",
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
      "2026-02": 0
    }
  },
  {
    "id": "054d6eed-fa22-4b68-9811-74db370f2779",
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
      "2026-02": 0
    }
  },
  {
    "id": "716e0b39-167c-408c-88d4-d7f3f430ec8c",
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
      "2026-02": 0
    }
  },
  {
    "id": "525947c9-0e1c-469a-a111-7a87b84280dc",
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
      "2026-02": 0
    }
  },
  {
    "id": "2ecc3b5c-2ea7-4745-8ab2-11ddc1026026",
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
      "2026-02": 0
    }
  },
  {
    "id": "58358fc0-8195-4df0-84eb-56f47d0296bc",
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
      "2026-02": 0
    }
  },
  {
    "id": "fdd75c59-3b31-4c77-8e76-801fd3a33ac9",
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
      "2026-02": 0
    }
  },
  {
    "id": "e8c22fcd-0f62-4e9e-90a4-0b776dc202e6",
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
      "2026-02": 0
    }
  },
  {
    "id": "374667ac-298c-4e65-9531-12b6b1ae4770",
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
      "2026-02": 0
    }
  },
  {
    "id": "6866ffac-2f1d-4d6a-b71d-d83e289ad42f",
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
      "2026-02": 0
    }
  },
  {
    "id": "ce077c5c-dfcc-4b01-8890-3c348a1222b8",
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
      "2026-02": 0
    }
  },
  {
    "id": "5a95d0cf-d57f-4179-a000-6a8f1650a382",
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
      "2026-02": 0
    }
  },
  {
    "id": "a701aa19-c3ae-4254-88d4-e5ec1313a2f5",
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
      "2026-02": 0
    }
  },
  {
    "id": "4da3904a-87c2-45a7-923f-cd17b261e2a3",
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
      "2026-02": 0
    }
  },
  {
    "id": "5a29014d-be9d-4d3a-ac1b-327de666b35b",
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
      "2026-02": 0
    }
  },
  {
    "id": "7ce9e524-980e-4f6b-9b89-43258b48f6f6",
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
      "2026-02": 0
    }
  },
  {
    "id": "e59cb44f-ceaa-4dbe-82bf-2c3bec23d31f",
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
      "2026-02": 0
    }
  },
  {
    "id": "2b51061b-ea91-4e68-9615-d16f2d46a571",
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
      "2026-02": 0
    }
  },
  {
    "id": "4d20462e-d5b4-41b6-a0dc-0d26f8c5eb6e",
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
      "2026-02": 0
    }
  },
  {
    "id": "be4d1294-a0fd-4ceb-b70c-6c1a9645f5f5",
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
      "2026-02": 0
    }
  },
  {
    "id": "99927aa7-1e89-451f-8eaa-ad0607b60b30",
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
      "2026-02": 0
    }
  },
  {
    "id": "9a5c1d07-2b24-426c-b3fa-29aaa6d37d1e",
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
      "2026-02": 0
    }
  },
  {
    "id": "dc8d9470-83ae-435c-a3b6-2f7e85e17a63",
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
      "2026-02": 0
    }
  },
  {
    "id": "83105fe5-dee0-4fcc-994d-d9a989c9d4ae",
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
      "2026-02": 0
    }
  },
  {
    "id": "e8fdde2b-1327-4282-add5-0169893d3723",
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
      "2026-02": 0
    }
  },
  {
    "id": "4bce654e-d9f3-43be-b294-a3afe336ba6a",
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
      "2026-02": 0
    }
  },
  {
    "id": "40e61405-7861-45f4-9f65-83fe8c7a17e6",
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
      "2026-02": 0
    }
  },
  {
    "id": "d1a82cda-6ca2-4d96-8b98-4642352f2153",
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
      "2026-02": 0
    }
  },
  {
    "id": "aceaf55f-44c0-42e8-950f-7b2871aad3e6",
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
    "id": "c4ac51d0-5152-4813-8154-be511d4fd145",
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
    "id": "0a4012ed-0dab-4531-a242-3b8bd80a5872",
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
      "2026-02": 0
    }
  },
  {
    "id": "8352c162-ea99-4d4a-a339-f52f59e6eed9",
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
      "2026-02": 0
    }
  },
  {
    "id": "41083848-96bc-45d1-9cda-6053c094b15c",
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
      "2026-02": 0
    }
  },
  {
    "id": "2bdc2a9d-fcfd-4ea4-8c51-fa773e7712ab",
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
      "2026-02": 0
    }
  },
  {
    "id": "abefd80d-0206-4cfc-9e47-159f6d346ffe",
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
    "id": "5568f59f-ff6f-4170-a28c-609173ff6422",
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
    "id": "034063e3-0130-4693-8fcc-4bfd935e2cf6",
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
      "2026-02": 0
    }
  },
  {
    "id": "edd9a1a1-52b8-4f18-a98d-86af6fac7925",
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
      "2026-02": 0
    }
  },
  {
    "id": "e1fc92c8-9f8f-402a-ae8d-7bc0f5e37489",
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
      "2026-02": 0
    }
  },
  {
    "id": "d1f7af84-25ae-4c70-b8e6-ac24c0f2855f",
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
      "2026-02": 0
    }
  },
  {
    "id": "01bb4680-270a-4560-bc56-2c7474b48ce6",
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
      "2026-02": 0
    }
  },
  {
    "id": "8f3e3d01-5a6c-401a-a8b0-a78282d5921a",
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
      "2026-02": 0
    }
  },
  {
    "id": "10256412-cf9f-43b7-a72e-b726cf938349",
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
    "id": "10832374-3890-49ff-977b-f271317f40a2",
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
    "id": "1e5682a1-a461-4dd9-b949-b366da29b0ee",
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
      "2026-02": 0
    }
  },
  {
    "id": "d5a413c9-8c3b-4198-967f-a7c2836ed554",
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
      "2026-02": 0
    }
  },
  {
    "id": "491b13e3-d4a1-468c-aec5-7f4f67017adb",
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
      "2026-02": 0
    }
  },
  {
    "id": "ed041d63-758e-4ac3-ab7c-24cf75d7db91",
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
    "id": "8cd135fb-30f3-4f13-adbd-422381509c61",
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
    "id": "890ead48-f77a-47a2-ac04-2465cf372e95",
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
      "2026-02": 0
    }
  },
  {
    "id": "ec650592-546d-44ea-aaed-0d917384e5fe",
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
      "2026-02": 0
    }
  },
  {
    "id": "8b014237-3454-471d-95f1-829677a68ec0",
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
      "2026-02": 0
    }
  },
  {
    "id": "aae24e3c-de57-4ff8-b6c8-88b4eafc28a3",
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
      "2026-02": 0
    }
  },
  {
    "id": "77958a9f-71e3-4769-ae08-70f2afcef15f",
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
      "2026-02": 0
    }
  },
  {
    "id": "4855cd54-c78e-429b-8570-e61afeb206ee",
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
      "2026-02": 0
    }
  },
  {
    "id": "f4640ecb-4f13-410e-963c-9dd00150b8e0",
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
      "2026-02": 0
    }
  },
  {
    "id": "7e2c06f1-c8bf-4991-8be6-d742e8f71ba6",
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
      "2026-02": 0
    }
  },
  {
    "id": "c75d4484-ebb7-4f31-900d-3abb98e74e9e",
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
      "2026-02": 0
    }
  },
  {
    "id": "bcd5fb3e-7294-429d-b31c-0f818bc69c48",
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
      "2026-02": 0
    }
  },
  {
    "id": "c486b881-9162-4c3e-b701-8699aa44cd5f",
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
      "2026-02": 0
    }
  },
  {
    "id": "d848b199-9469-43b2-a6b4-0c4d067f52a2",
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
      "2026-02": 0
    }
  },
  {
    "id": "ee48a638-152b-4857-972b-534b0ad12041",
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
      "2026-02": 0
    }
  },
  {
    "id": "b2f36c2e-07d2-4f25-af08-8a8fa9a957c1",
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
      "2026-02": 0
    }
  },
  {
    "id": "92ac78f4-a66e-4666-9044-0ce4fe3a3b51",
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
      "2026-02": 0
    }
  },
  {
    "id": "3a86091e-9e09-4382-8547-df5b290789a0",
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
      "2026-02": 0
    }
  },
  {
    "id": "b2197cb2-31d7-4ac5-b931-911af2501420",
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
      "2026-02": 0
    }
  },
  {
    "id": "d2ab36b3-9cf2-4ecf-ba66-675dbdd43040",
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
      "2026-02": 0
    }
  },
  {
    "id": "a2f4b363-3d88-49e8-9945-a0d288a6a5c5",
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
      "2026-02": 0
    }
  },
  {
    "id": "f1d490ad-1c79-42e0-8602-100df3f80587",
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
      "2026-02": 0
    }
  },
  {
    "id": "3082355c-d027-4edc-a975-6d663e0d29fe",
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
      "2026-02": 0
    }
  },
  {
    "id": "8629e752-8ac1-4c12-ae5b-bc92647914c4",
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
      "2026-02": 0
    }
  },
  {
    "id": "bd4f5a32-15c1-4329-96cb-1d096ef1dea0",
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
      "2026-02": 0
    }
  },
  {
    "id": "5031709d-47d8-46ed-b8b4-7cd17f3e38c8",
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
      "2026-02": 0
    }
  },
  {
    "id": "0e00dd1a-bdb7-4134-9116-fe89d716ef82",
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
      "2026-02": 0
    }
  },
  {
    "id": "695dd6b5-8261-4ad7-9a6a-5f89c1069987",
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
      "2026-02": 0
    }
  },
  {
    "id": "c58d3fb3-0578-45b0-9f46-4b0880ca713b",
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
      "2026-02": 0
    }
  },
  {
    "id": "1e7a98ca-b3e3-4e73-9958-2e962e50941d",
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
      "2026-02": 0
    }
  },
  {
    "id": "ca2fed1e-f799-49f9-95b6-163edeadce80",
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
      "2026-02": 0
    }
  },
  {
    "id": "aa781178-f038-4bb9-a80a-697d398eba4a",
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
      "2026-02": 0
    }
  },
  {
    "id": "61920b03-4983-4d6b-b9ec-8602b4c2fe74",
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
      "2026-02": 0
    }
  },
  {
    "id": "1c66eb8d-42fb-46cc-9570-aa63ce48cc46",
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
      "2026-02": 0
    }
  },
  {
    "id": "5f868e7c-580f-47b0-b062-8568b6e49555",
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
      "2026-02": 0
    }
  },
  {
    "id": "18a6bf69-8c7a-4f5e-8636-7b82d79c5839",
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
      "2026-02": 0
    }
  },
  {
    "id": "a56f6fc0-f4ae-4d67-aaae-fb9dd5f4e16b",
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
      "2026-02": 0
    }
  },
  {
    "id": "c7bce10c-e933-479e-ab1b-be7072ea6ec1",
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
    "id": "74d24690-c06e-4ad8-ae97-acb170a19fe8",
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
    "id": "57f813ca-29ab-4153-9108-2b2b3eaa0ba2",
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
      "2026-02": 0
    }
  },
  {
    "id": "4d7e32dc-641f-4f5e-8430-54c27ffc963a",
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
      "2026-02": 0
    }
  },
  {
    "id": "5b51ee73-0b37-419e-9a86-e1f3dac530e5",
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
      "2026-02": 0
    }
  },
  {
    "id": "23f0c22d-178e-491d-a018-3b9332156f31",
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
      "2026-02": 0
    }
  },
  {
    "id": "f6a80fd7-78c3-4790-9e52-7af4a839dfec",
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
      "2026-02": 0
    }
  },
  {
    "id": "8e95c164-d751-4870-8946-b286abfb3057",
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
      "2026-02": 0
    }
  },
  {
    "id": "fb5a974d-2ce8-4c99-9a35-e86c477b9db0",
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
      "2026-02": 0
    }
  },
  {
    "id": "74b19a67-9634-4c2d-86e3-f6aea704e41e",
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
      "2026-02": 0
    }
  },
  {
    "id": "a8d2ae02-3126-4977-8c22-66101d819e5b",
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
      "2026-02": 0
    }
  },
  {
    "id": "4852d42f-265b-4c96-9d8e-9ef33914fc54",
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
      "2026-02": 0
    }
  },
  {
    "id": "bdb6c426-009f-475d-a70c-713e0af2e258",
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
      "2026-02": 0
    }
  },
  {
    "id": "f9f8f566-3bac-4596-8310-38b05190b8f2",
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
      "2026-02": 0
    }
  },
  {
    "id": "5e21899a-64a9-4465-ab81-8ff6eed369a1",
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
      "2026-02": 0
    }
  },
  {
    "id": "c493d59c-fc1c-43c0-88e8-44a17800f925",
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
      "2026-02": 0
    }
  },
  {
    "id": "b713c194-9908-4cb2-9436-37036653e99c",
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
      "2026-02": 0
    }
  },
  {
    "id": "7700629f-4955-43af-8268-5173cb1fb050",
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
      "2026-02": 0
    }
  },
  {
    "id": "17b4ea38-5c21-4eab-bf47-32655e28af59",
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
      "2026-02": 0
    }
  },
  {
    "id": "18407c81-d091-4c0f-a219-9eb1f7f8f411",
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
      "2026-02": 0
    }
  },
  {
    "id": "8c8861c1-4bbd-4a10-b10d-cbe88afeb18f",
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
      "2026-02": 0
    }
  },
  {
    "id": "5fec32d5-cf8e-495e-b65f-5392449016e6",
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
      "2026-02": 0
    }
  },
  {
    "id": "e916e240-950b-4804-8574-0c6e489769b5",
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
      "2026-02": 0
    }
  },
  {
    "id": "5a6e3fa1-c153-4cb1-b20d-b407f3219b6e",
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
      "2026-02": 0
    }
  },
  {
    "id": "f3ed111e-fa87-4525-9cb4-34edf0a05edd",
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
      "2026-02": 0
    }
  },
  {
    "id": "0024e61e-0e0a-495d-9dd6-7c9374fe3c99",
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
      "2026-02": 0
    }
  },
  {
    "id": "65b2aca2-e606-4b3d-ba82-95cc7144b6c9",
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
      "2026-02": 0
    }
  },
  {
    "id": "81bb03e4-67a1-4883-a6f0-b16ed443a813",
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
      "2026-02": 0
    }
  },
  {
    "id": "e84d3902-523a-4fdc-83e2-d83e65b5f1ea",
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
      "2026-02": 0
    }
  },
  {
    "id": "5937dee7-86c3-4da1-8669-5328f2a72899",
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
      "2026-02": 0
    }
  },
  {
    "id": "edc00057-0155-4679-ae3b-ccb96cd66c9e",
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
      "2026-02": 0
    }
  },
  {
    "id": "38ad310e-d862-4f97-ae73-8768cf59eed5",
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
      "2026-02": 0
    }
  },
  {
    "id": "9da30bb0-e65c-45ec-bd10-430e7d0f5cff",
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
      "2026-02": 0
    }
  },
  {
    "id": "0779b34d-06a0-4e8d-92bf-f88b16b94861",
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
      "2026-02": 0
    }
  },
  {
    "id": "6f4dddc2-f6b7-40e3-acf6-9df6a04750ee",
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
      "2026-02": 0
    }
  },
  {
    "id": "c0c4d889-6d84-4182-819b-167fe679bfa1",
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
      "2026-02": 0
    }
  },
  {
    "id": "b2c3749c-6e50-4862-b821-dd2892d92fa9",
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
      "2026-02": 0
    }
  },
  {
    "id": "5fa7fd75-74c2-43ff-b8dd-a6ce310de6f6",
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
      "2026-02": 0
    }
  },
  {
    "id": "77cf5008-ac82-4324-9d83-dbf625ae395d",
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
      "2026-02": 0
    }
  },
  {
    "id": "9a06533c-5b56-4939-a8d3-e4a34cc94e4b",
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
      "2026-02": 0
    }
  },
  {
    "id": "4c9cc233-3eb8-4b31-80f7-f094265e0c6e",
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
      "2026-02": 0
    }
  },
  {
    "id": "b2159ecc-4844-4c22-a2aa-ed29ae98f4d3",
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
      "2026-02": 0
    }
  },
  {
    "id": "cf6ea796-e667-4b6c-a681-e492814d5dcd",
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
      "2026-02": 0
    }
  },
  {
    "id": "df1a0020-41e5-4562-8299-245b3fb1d133",
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
      "2026-02": 0
    }
  },
  {
    "id": "3bfe0d2f-0938-4072-9984-a0a09b771f8e",
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
      "2026-02": 0
    }
  },
  {
    "id": "67d5a4f4-4059-4a02-9e62-9fa88953e9e6",
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
      "2026-02": 0
    }
  },
  {
    "id": "79510532-e0e4-4e34-8767-0b3e7897f661",
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
      "2026-02": 0
    }
  },
  {
    "id": "f4579394-e9fa-4bca-a6f2-02b50824c62a",
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
      "2026-02": 0
    }
  },
  {
    "id": "76e80a74-61c4-496e-84e2-9421ff776245",
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
      "2026-02": 0
    }
  },
  {
    "id": "977232bf-c483-4bc2-b7e3-ff1e2b8f6bc1",
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
      "2026-02": 0
    }
  },
  {
    "id": "08855c2c-275e-4952-9b3b-5bd9bc0f808c",
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
      "2026-02": 0
    }
  },
  {
    "id": "0255436f-019f-46c3-8a4a-7b7d3fa47ed1",
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
      "2026-02": 0
    }
  },
  {
    "id": "9fad5499-d870-456f-9af0-a4ee611414bb",
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
      "2026-02": 0
    }
  },
  {
    "id": "63935ecd-67ec-4f14-9855-a1507b9ac672",
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
      "2026-02": 0
    }
  },
  {
    "id": "281d3230-a212-4e5b-9624-6f7cf22d9978",
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
      "2026-02": 0
    }
  },
  {
    "id": "37351d77-1eda-4346-9b18-bb59b80824a9",
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
      "2026-02": 0
    }
  },
  {
    "id": "c163f74f-4e38-4561-a426-4ac9a561b77b",
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
      "2026-02": 0
    }
  },
  {
    "id": "a4fa2062-0c59-4f8a-b713-43a2ebaced40",
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
      "2026-02": 0
    }
  },
  {
    "id": "57c66924-227a-4e36-9284-a64bb8f96e15",
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
      "2026-02": 0
    }
  },
  {
    "id": "41728c4b-5774-4453-a535-beb4fb358338",
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
      "2026-02": 0
    }
  },
  {
    "id": "6e7ec1b1-6029-418b-aa80-f37ad48ed42e",
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
      "2026-02": 0
    }
  },
  {
    "id": "5b9171c9-21a8-4efa-bcb5-8167c9401cbb",
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
      "2026-02": 0
    }
  },
  {
    "id": "0e3c198b-40be-4972-a24a-d0a85207634c",
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
      "2026-02": 0
    }
  },
  {
    "id": "2994fc60-1e50-47fb-aede-c992609b058d",
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
      "2026-02": 0
    }
  },
  {
    "id": "2c1e0edc-84eb-470d-80e7-d4b2f7a0ce1f",
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
      "2026-02": 0
    }
  },
  {
    "id": "3d9a3e96-f735-4e44-88f2-3cb34eb2d849",
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
      "2026-02": 0
    }
  },
  {
    "id": "727a525b-9e3d-4ea3-8218-ebf296a00e99",
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
      "2026-02": 0
    }
  },
  {
    "id": "11c50808-31e2-4047-adc3-e63f4189df35",
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
      "2026-02": 0
    }
  },
  {
    "id": "cc3fc73c-230c-4279-b33c-b4f20a29ab71",
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
      "2026-02": 0
    }
  },
  {
    "id": "70273fe5-cbc3-4cb8-8529-acc999002288",
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
      "2026-02": 0
    }
  },
  {
    "id": "d089e707-7eb2-4359-90c2-13ef9ea8031c",
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
      "2026-02": 0
    }
  },
  {
    "id": "b05260cf-b434-4666-978e-ba418bb32cf9",
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
      "2026-02": 0
    }
  },
  {
    "id": "b5a3f54a-43f7-4452-b4ba-b0a247b88bf3",
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
      "2026-02": 0
    }
  },
  {
    "id": "e4f95a2b-ba0e-4c68-804f-fd32966858ab",
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
      "2026-02": 0
    }
  },
  {
    "id": "72517f27-b264-49da-b554-c55142f65621",
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
      "2026-02": 0
    }
  },
  {
    "id": "b8574578-7b49-4e23-ac41-bd14ebfe1bbd",
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
      "2026-02": 0
    }
  },
  {
    "id": "f7afa711-1d9b-4c38-93ba-50d1a26cfced",
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
      "2026-02": 0
    }
  },
  {
    "id": "c7539686-9568-4972-a63d-0b688d815c87",
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
      "2026-02": 0
    }
  },
  {
    "id": "22f2dbd7-fd02-4452-8d74-ad8e7305f9ae",
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
      "2026-02": 0
    }
  },
  {
    "id": "947f21da-f2f9-4959-a233-0babee2e274e",
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
      "2026-02": 0
    }
  },
  {
    "id": "59172db1-ed1b-429f-ad3f-08b8f8da2a4a",
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
      "2026-02": 0
    }
  },
  {
    "id": "62f61c30-a0b0-4535-a8cc-4c76a0f16053",
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
      "2026-02": 0
    }
  },
  {
    "id": "28a001e7-9d47-41dc-8b80-bcd77ae30f72",
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
      "2026-02": 0
    }
  },
  {
    "id": "81f50007-afdc-4107-bdca-10290dd5034b",
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
      "2026-02": 0
    }
  },
  {
    "id": "77d5cd20-0242-4615-ad82-1172caa68536",
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
      "2026-02": 0
    }
  },
  {
    "id": "de0e043d-1e43-4405-bc32-74175f9f0864",
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
      "2026-02": 0
    }
  },
  {
    "id": "bc758bfd-0948-4238-a27e-d3924fbb0367",
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
      "2026-02": 0
    }
  },
  {
    "id": "7b8ebe0a-9e56-4fc5-95da-601e169a0604",
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
      "2026-02": 0
    }
  },
  {
    "id": "3b474685-5619-4616-893a-0fab24173036",
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
      "2026-02": 0
    }
  },
  {
    "id": "3b150892-e43a-48d3-90b7-ba25bd5d7fa0",
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
      "2026-02": 0
    }
  },
  {
    "id": "5de0303f-5c98-49e4-9335-7ac8abba91b7",
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
      "2026-02": 0
    }
  },
  {
    "id": "b1041ce0-19bc-4466-82d4-e275df098d40",
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
      "2026-02": 0
    }
  },
  {
    "id": "b31d8e05-ab3e-4e84-b56d-a60802d8d043",
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
      "2026-02": 0
    }
  },
  {
    "id": "2817d08c-f72b-4dfb-95ee-afcd04939152",
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
      "2026-02": 0
    }
  },
  {
    "id": "9c5a8934-2cdf-4127-9335-c27fc8914c57",
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
      "2026-02": 0
    }
  },
  {
    "id": "d373c303-a294-41d5-9889-271f8d9dbb63",
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
      "2026-02": 0
    }
  },
  {
    "id": "44fa99fe-9ab1-41ea-9742-ab64f51577b4",
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
      "2026-02": 0
    }
  },
  {
    "id": "95e8edc9-ac9b-4e45-a316-ed5b18237ba0",
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
      "2026-02": 0
    }
  },
  {
    "id": "27eefb0e-94c0-41ee-9678-40b56b778964",
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
      "2026-02": 0
    }
  },
  {
    "id": "1d88f6df-80af-4958-9358-0ef0c569b463",
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
      "2026-02": 0
    }
  },
  {
    "id": "c509746b-934b-4ff3-ae44-413120cf7d65",
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
      "2026-02": 0
    }
  },
  {
    "id": "04ec1fa4-1353-4228-bf33-42bc1bedc847",
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
      "2026-02": 0
    }
  },
  {
    "id": "36a0d4ed-90c2-4db1-b504-078d3501146f",
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
      "2026-02": 0
    }
  },
  {
    "id": "523951cf-9142-43b1-a741-791216b9154b",
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
      "2026-02": 0
    }
  },
  {
    "id": "1c12c32b-dabb-4e0f-816a-a3e862e0a440",
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
      "2026-02": 0
    }
  },
  {
    "id": "f0bcb58c-0804-437d-b274-5dec9e9270f9",
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
      "2026-02": 0
    }
  },
  {
    "id": "ad475ca1-e634-47b9-870c-4ca5afcc8568",
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
      "2026-02": 0
    }
  },
  {
    "id": "647e7da9-97a3-4798-b060-3b865c17f5a2",
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
      "2026-02": 0
    }
  },
  {
    "id": "c8a2c3e4-af2c-4734-9d43-7feb0bcba012",
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
      "2026-02": 0
    }
  },
  {
    "id": "d9e47795-6094-4d78-8d64-12948f7de587",
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
      "2026-02": 0
    }
  },
  {
    "id": "37e084d7-70b0-440b-b93b-f1e738be1459",
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
      "2026-02": 0
    }
  },
  {
    "id": "20af62c6-bc00-4bbd-b617-e4c067ee0fff",
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
      "2026-02": 0
    }
  },
  {
    "id": "e63ff425-fdfa-43df-9367-ef9a11e5a4a1",
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
      "2026-02": 0
    }
  },
  {
    "id": "5df6fbad-ab1b-4414-9fab-758b9bbf01c6",
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
      "2026-02": 0
    }
  },
  {
    "id": "a530068d-7af6-4a86-9276-f6df5a243f14",
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
      "2026-02": 0
    }
  },
  {
    "id": "aaaff2b8-c83e-4b48-a2db-0133b9d139ac",
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
      "2026-02": 0
    }
  },
  {
    "id": "21f980de-da6f-4bb4-b9bc-9e8d1834d510",
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
      "2026-02": 0
    }
  },
  {
    "id": "9bb56bd0-9a24-46e7-a7f8-07cc9cc03dbf",
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
      "2026-02": 0
    }
  },
  {
    "id": "b472092c-74cd-4c6b-b9bf-f6397cf5312a",
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
      "2026-02": 0
    }
  },
  {
    "id": "5e773b09-21ba-472c-8c87-a5969748f8e5",
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
      "2026-02": 0
    }
  },
  {
    "id": "6a5d45f1-f8a4-4fb2-8964-8f839dd6cbb7",
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
      "2026-02": 0
    }
  },
  {
    "id": "de97f6f4-77af-4be6-a46f-df7b73bb7bbb",
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
      "2026-02": 0
    }
  },
  {
    "id": "c3c23509-43be-4a06-bd48-c2afc1d90828",
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
      "2026-02": 0
    }
  },
  {
    "id": "90d89738-0023-4d72-b02e-8f91776530ba",
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
      "2026-02": 0
    }
  },
  {
    "id": "2cbfb48a-5e0b-46c5-a66e-e056a3b05368",
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
      "2026-02": 0
    }
  },
  {
    "id": "45b5c78f-dfcf-413d-887b-b39729c4c6f0",
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
      "2026-02": 0
    }
  },
  {
    "id": "9b76c3ab-7bc1-4be4-8b1c-2df57330f769",
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
      "2026-02": 0
    }
  },
  {
    "id": "6f88df6d-988d-423e-82d4-5fbb131e4d95",
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
      "2026-02": 0
    }
  },
  {
    "id": "26f5a606-314b-4acf-9ea0-64f546809ebb",
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
      "2026-02": 0
    }
  },
  {
    "id": "0bf59a02-5199-4684-89a9-9f7c552770bd",
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
      "2026-02": 0
    }
  },
  {
    "id": "fb267695-86f1-4311-bd11-c1949bef5c72",
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
      "2026-02": 0
    }
  },
  {
    "id": "1c3cf97c-f9ae-4f51-8cb9-b205879fa170",
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
      "2026-02": 0
    }
  },
  {
    "id": "6a2ed244-771e-4bcb-821e-dab2cd2754fd",
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
      "2026-02": 0
    }
  },
  {
    "id": "91c70419-7a1d-4121-8f98-a4d8a2a4eb9c",
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
      "2026-02": 0
    }
  },
  {
    "id": "5b1b9bbf-679e-4ab1-8cdd-ebf8c2aaa3a3",
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
      "2026-02": 0
    }
  },
  {
    "id": "b7337c29-0361-49b5-aeed-7a412fd38da8",
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
      "2026-02": 0
    }
  },
  {
    "id": "bdb00936-ee9e-453e-a307-2251b034d0cd",
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
      "2026-02": 0
    }
  },
  {
    "id": "321036c3-482d-4a9b-aa98-3e7ac1e2f6c1",
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
      "2026-02": 0
    }
  },
  {
    "id": "60df2a07-49b0-4d41-82c3-629640138d65",
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
      "2026-02": 0
    }
  },
  {
    "id": "6fccda41-abfa-438b-844f-021b0437a001",
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
      "2026-02": 0
    }
  },
  {
    "id": "1ba75c66-558e-400e-be2e-18cd5d35299f",
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
      "2026-02": 0
    }
  },
  {
    "id": "299b8e62-35c6-49c2-b629-c942b199e77a",
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
      "2026-02": 0
    }
  },
  {
    "id": "737729a6-d37c-4b0a-a23d-4339872a57ff",
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
      "2026-02": 0
    }
  },
  {
    "id": "56097db4-384d-4368-987e-461dc8cf7c34",
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
      "2026-02": 0
    }
  },
  {
    "id": "344ad9e3-683e-4819-b2cb-645430362559",
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
      "2026-02": 0
    }
  },
  {
    "id": "502ae532-b6da-4829-847c-bb64c3fcdaec",
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
      "2026-02": 0
    }
  },
  {
    "id": "8637d0f8-fd7e-4707-a446-59e5ba82abf4",
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
      "2026-02": 0
    }
  },
  {
    "id": "1b661ac5-1300-4d48-95c8-b95f17cf6f6a",
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
      "2026-02": 0
    }
  },
  {
    "id": "72c4bd80-6791-409f-a014-9f8adc36dc4b",
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
      "2026-02": 0
    }
  },
  {
    "id": "561dcbda-88a7-4edf-95dc-11675948316c",
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
      "2026-02": 0
    }
  },
  {
    "id": "8cabba11-17b2-4a4a-a63d-2668d598d9b5",
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
      "2026-02": 0
    }
  },
  {
    "id": "62d6441c-fd5c-4934-8e56-d0a68f3ebeea",
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
      "2026-02": 0
    }
  },
  {
    "id": "bf0bacb3-7eeb-4ff7-813d-c86e530994af",
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
      "2026-02": 0
    }
  },
  {
    "id": "3872352b-004a-4e7e-a1ed-66de85a4bf40",
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
      "2026-02": 0
    }
  },
  {
    "id": "6da0d799-3503-416e-ac8b-b97fdefbe67f",
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
      "2026-02": 0
    }
  },
  {
    "id": "79b6d3fe-5406-4ae5-882e-ba7fa02cafe1",
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
      "2026-02": 0
    }
  },
  {
    "id": "e4d0d042-1c37-405b-aa32-c05ce9b3c916",
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
    "id": "8f48d94d-2cee-4386-a538-b715f9a47c0d",
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
    "id": "8cb691d2-72b2-4c48-89ea-2c56b5b1c12c",
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
    "id": "969eb460-85af-4672-a392-86b573524a20",
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
    "id": "49a8f3ef-a497-49be-918e-f71ec0158bb8",
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
    "id": "fdae4c7f-be1b-4240-a667-acf5a918e67f",
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
    "id": "f6f1ef69-f5ea-47d3-b417-6daa06e68b20",
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
      "2026-02": 0
    }
  },
  {
    "id": "33f66680-1816-4b7e-9776-2cfa0073c6c8",
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
      "2026-02": 0
    }
  },
  {
    "id": "c3802ce8-3d1b-437c-b8ef-b7e0c15f6c57",
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
      "2026-02": 0
    }
  },
  {
    "id": "08134827-f126-466e-8bb6-8a60e4d132ae",
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
      "2026-02": 0
    }
  },
  {
    "id": "8a5dc1be-307c-4843-8805-9a971119ad9a",
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
      "2026-02": 0
    }
  },
  {
    "id": "89b7678e-5907-4259-8519-53119d096ef5",
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
      "2026-02": 0
    }
  },
  {
    "id": "2fe52075-8367-48a5-820b-5e271c6b2ea8",
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
      "2026-02": 0
    }
  },
  {
    "id": "2973e8bc-4e71-415b-9190-2221979cb932",
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
      "2026-02": 0
    }
  },
  {
    "id": "442e1a6f-a9b5-4763-aa9c-674810aad2ab",
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
      "2026-02": 0
    }
  },
  {
    "id": "0a2eddcd-19f3-4ec6-b438-77c0b36ba49c",
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
      "2026-02": 0
    }
  },
  {
    "id": "c9d4fb45-5bfb-49de-8448-84f7883ba049",
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
      "2026-02": 0
    }
  },
  {
    "id": "ef43bf52-3f2d-4d11-95f8-79e76fa87461",
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
      "2026-02": 0
    }
  },
  {
    "id": "8080e174-9c60-45cc-aca5-a369962b4343",
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
      "2026-02": 0
    }
  },
  {
    "id": "0fb4a38d-6826-4fb1-afa0-66f2d60706cf",
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
      "2026-02": 0
    }
  },
  {
    "id": "91541f22-da48-4b90-904e-8f579487bf0a",
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
      "2026-02": 0
    }
  },
  {
    "id": "5c80a405-d58d-4a5c-ac95-5912c99fcd4d",
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
      "2026-02": 0
    }
  },
  {
    "id": "4e74ea23-a3b2-496a-ad04-b53905e1b05a",
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
      "2026-02": 0
    }
  },
  {
    "id": "3eeb543d-0391-455e-830d-28b0ec778aaa",
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
      "2026-02": 0
    }
  },
  {
    "id": "18f104c9-d3d6-49e5-826a-0f6c367721e3",
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
      "2026-02": 0
    }
  },
  {
    "id": "cff109ea-6423-4e4a-972d-08aa9be1f227",
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
      "2026-02": 0
    }
  },
  {
    "id": "bd30711b-21bf-4701-9051-71cb2ef6d0e6",
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
      "2026-02": 0
    }
  },
  {
    "id": "15b41edb-ce81-488c-89ad-2ec76a923fb7",
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
      "2026-02": 0
    }
  },
  {
    "id": "350ca303-fd21-4a74-9174-d19afa3ae256",
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
      "2026-02": 0
    }
  },
  {
    "id": "6e9a09ce-a002-4fc5-9fbb-e1725ccc84c5",
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
      "2026-02": 0
    }
  },
  {
    "id": "e4bb3ead-6fbb-47fe-a587-83f33e2c8429",
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
      "2026-02": 0
    }
  },
  {
    "id": "8dd80dc7-0131-4d54-b33d-eed8a0bec012",
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
      "2026-02": 0
    }
  },
  {
    "id": "312c85c2-f5c1-4dbe-8f68-427272fd0916",
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
      "2026-02": 0
    }
  },
  {
    "id": "9f091a98-fa43-4c9a-b290-be254a961215",
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
      "2026-02": 0
    }
  },
  {
    "id": "223f4ba4-d48b-4676-a953-c6ef343f4241",
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
      "2026-02": 0
    }
  },
  {
    "id": "9bfb3909-b1cd-4fc8-aa97-b13ffcd90ca2",
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
      "2026-02": 0
    }
  },
  {
    "id": "97ff82bb-44a4-4966-a7d6-2e93b6085c44",
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
      "2026-02": 0
    }
  },
  {
    "id": "a15be13d-ea9c-4c92-bb0f-94b127000c73",
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
      "2026-02": 0
    }
  },
  {
    "id": "939045a8-0572-4f78-a004-18279bc3a633",
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
      "2026-02": 0
    }
  },
  {
    "id": "b4048173-e0d0-414f-975a-98ea55c7ad2c",
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
      "2026-02": 0
    }
  },
  {
    "id": "5fd9e11f-96e3-4e8e-bca1-564b9c4c6898",
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
      "2026-02": 0
    }
  },
  {
    "id": "672b9ac8-d51e-43ec-a1c4-dc27e86606f1",
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
      "2026-02": 0
    }
  },
  {
    "id": "334838a2-cb87-4c24-8c8b-9bb58b45dc7d",
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
      "2026-02": 0
    }
  },
  {
    "id": "a6e70579-2e3c-425a-b581-a93bdcbd277f",
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
      "2026-02": 0
    }
  },
  {
    "id": "22b828e0-5b2b-427e-858f-bd062a7cb556",
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
      "2026-02": 0
    }
  },
  {
    "id": "d354309d-ee0d-4595-bbfc-b874ae499328",
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
      "2026-02": 0
    }
  },
  {
    "id": "02931292-3561-4600-9827-552cb4ff2d76",
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
      "2026-02": 0
    }
  },
  {
    "id": "a037edf0-9139-4313-9f50-32f0134603b3",
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
      "2026-02": 0
    }
  },
  {
    "id": "bf7ac290-134d-46b4-bc1d-d1dc2e5f2d5c",
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
      "2026-02": 0
    }
  },
  {
    "id": "349ecc28-d118-4a5c-a958-6f946e84a00b",
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
      "2026-02": 0
    }
  },
  {
    "id": "8d9cdda5-915a-49c3-b6d8-631a792cddfa",
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
      "2026-02": 0
    }
  },
  {
    "id": "311665ce-b064-4f67-985b-c5e161c77b25",
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
      "2026-02": 0
    }
  },
  {
    "id": "1284df1c-0706-4e93-8ff1-ab6c59688a2b",
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
      "2026-02": 0
    }
  },
  {
    "id": "3edc3f71-943f-432b-8d40-24e83c633004",
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
      "2026-02": 0
    }
  }
];