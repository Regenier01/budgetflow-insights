import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "2428e800-d365-447e-8ec1-df5222fcbd06",
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
    "id": "bb05c26f-98ba-41e8-9622-4660b2e45410",
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
    "id": "2e91a48a-5270-48c0-8113-e9831b8b38b1",
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
    "id": "10a470eb-2ed3-48aa-8292-2aeda800dcbf",
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
    "id": "fdb9f393-d5d9-424e-b217-9a37760477e4",
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
    "id": "9b747d61-46af-4fa0-95b4-79245a2e4f6c",
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
    "id": "a4a23e84-db98-49af-852d-cf16b10a7edc",
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
    "id": "7ec3da03-7bfe-4474-81db-80763eb6d360",
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
    "id": "e7bc74e5-82e9-430d-99cf-0ecbe98376f8",
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
    "id": "c029ab55-0fa0-46c7-87bd-68f303f19572",
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
    "id": "6765af37-8d19-49b3-911f-49df41cbaada",
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
    "id": "6261a827-af92-473d-b4eb-3a35ceb8399e",
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
    "id": "725fe8e1-ecf6-46d3-b0a8-75f615f86e99",
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
    "id": "d0dadc42-5899-44f1-9ea6-d59623f0d550",
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
    "id": "08562a28-ef4c-4409-87ab-3476bf3635ef",
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
    "id": "bcf7df64-d151-40b6-935b-14460f670d94",
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
    "id": "43b6372d-c4e2-4f9b-9d37-b21bf13be555",
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
    "id": "3174b587-867a-46c1-8799-bdfbd5d55572",
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
    "id": "cfb4868a-7b3e-4442-aec8-11d5d13c5faf",
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
    "id": "400e4b60-c7e8-48e4-8801-89e047daee74",
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
    "id": "9da94706-8596-4c6f-85d1-fe793e885572",
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
    "id": "6ad6d617-2f15-419f-ba76-cc95fa04d628",
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
    "id": "c1c52bb7-c82e-4be9-a38e-25ecd91261b8",
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
    "id": "989f19f0-782f-40ef-bd79-e912a0e005c3",
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
    "id": "48a2f6d0-804e-4be3-9697-67a1ba880aab",
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
    "id": "0e0318c0-0435-4528-90a6-745635c419d7",
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
    "id": "9df0aebc-2121-4259-a41e-0e23392646f2",
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
    "id": "35700c89-cb52-427c-b5e1-1aeda7f127df",
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
    "id": "13c7bc03-fd46-4cdb-829e-b5e7f3e766f3",
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
    "id": "37eace43-b9a7-4f08-8a4c-f2a3d2857842",
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
    "id": "1c8f5f40-3bd6-4017-b56b-e8b364885d2b",
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
    "id": "11866260-cfef-491a-b744-f79b0240de3f",
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
    "id": "18482033-f03e-42b9-affb-a210ea3432fb",
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
    "id": "736fe31d-73c5-4b76-9343-67452fb6b092",
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
    "id": "8f436846-85cd-4764-89e6-207914b5fec0",
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
    "id": "322c4714-4952-4c3d-9e2a-0fac695e40d8",
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
    "id": "3263c4e5-bc24-4702-a341-913bdb53b05f",
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
    "id": "4c2748e3-26fd-4507-a241-c0447022b596",
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
    "id": "c067bc8a-5223-4fe2-828d-8951bb779dd6",
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
    "id": "ec41c8a9-ccd7-4dc7-b86d-01613e151d61",
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
    "id": "d09d7f94-2728-44fa-87ac-68618ffe2222",
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
    "id": "f375d343-465f-45ba-b881-c85dd73be8fb",
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
    "id": "0c299376-8d5f-407d-93fa-5b2daec13a92",
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
    "id": "e3ee76b5-040b-42d4-97f8-664226026382",
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
    "id": "95734435-3e09-4297-bcff-6e015aefe686",
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
    "id": "2326ab7a-753b-46b6-b0ce-91c32be13e04",
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
    "id": "72d107a9-8eab-4c80-8aeb-6657aee8d307",
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
    "id": "161b47c0-cdd4-482e-99fc-b9fd8ec57517",
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
    "id": "dbb15c69-b556-4d39-8fe1-b7cd0c690268",
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
    "id": "5398cd07-0daa-4ef4-9e43-989c5fce7dbc",
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
    "id": "05ac6636-9687-40ab-88bf-f3469739c23d",
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
    "id": "ad7ffe92-fd72-4ee9-b80d-f6506e8fe348",
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
    "id": "3ff0dd0f-b68f-4305-93dd-0d59891d2977",
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
    "id": "57029a16-a65a-4b1a-bdd2-52b0764baaa7",
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
    "id": "193c0a17-03e5-4b91-8509-87adc0f846b4",
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
    "id": "3facb2d8-1e03-4c27-9427-b32ea8449cb5",
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
    "id": "8767a6fb-b969-4fa6-8042-63198862590b",
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
    "id": "35d14181-97e8-4517-b0c5-8d37a0960ae6",
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
    "id": "8810f1dc-c519-4b72-909f-6252cb224d2e",
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
    "id": "ce52bd8f-c59a-47b9-9105-569607c3db38",
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
    "id": "77d4a5c7-4bf4-4e80-9bfb-94e738ae14fc",
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
    "id": "c10cf8cf-ef53-44a3-9558-5f4dcd0971a6",
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
    "id": "4e353a16-2929-4a68-813d-6837ff870ae4",
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
    "id": "c047a254-5de2-4927-a33a-b8a3a7233ad2",
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
    "id": "2af2e352-7c75-47c4-82f8-00d53946290b",
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
    "id": "12aa0cbe-be5d-41a1-9e07-3657b4bf444b",
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
    "id": "401552f3-39be-4bca-954e-0d135b6f477c",
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
    "id": "d7c86aef-cd37-4413-8be7-5b1fe65b7571",
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
    "id": "626503de-8726-4360-9077-461857377317",
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
    "id": "acec2344-b048-4b10-9bac-85748c11dfe0",
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
    "id": "73c23713-2f14-48ea-beca-811046d2edee",
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
    "id": "43bba99a-b582-4d5b-85eb-d04899c6df8a",
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
    "id": "01d52579-e928-4ed6-b367-e4ec3e5db2d4",
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
    "id": "a1de197b-464d-48b1-abee-716e184fe6b8",
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
    "id": "fcc30b38-f098-47f9-bdef-408b9f7c191d",
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
    "id": "980fb265-6212-4221-a893-ca24b3156345",
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
    "id": "7a66dd75-b5c9-438a-b627-593b8922745c",
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
    "id": "987d36c9-1660-488a-a187-d57c63f0d4f3",
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
    "id": "0c299ff3-0a7f-41a2-9504-0ee92a93f7b1",
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
    "id": "e36b9b53-890d-41b4-adc9-cb908c4f173a",
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
    "id": "8163f05f-5934-4c29-98fe-9cf1032f178c",
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
    "id": "8ed7a6ed-7103-40f5-91c9-6011f32bbc0f",
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
    "id": "48756f54-e3f2-465b-b2ef-4d4cc4558da7",
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
    "id": "add88e49-99a3-4f4f-bb5f-4a5b3a276160",
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
    "id": "8a8c8f86-8fe8-4d34-8d77-bb3463b73cc9",
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
    "id": "0eb0ec3a-2f41-4ab4-ba7c-d33b8a8fe4e7",
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
    "id": "c4a7c8ba-449a-4c28-885a-f5e3efadd868",
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
    "id": "7fed776a-2d36-407b-bcfb-1dffc92233eb",
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
    "id": "b1495286-c26f-41f9-bd65-81329ce0145b",
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
    "id": "03eb5cad-ab11-4742-91d8-5f47027e4689",
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
    "id": "645e9738-0d5f-482c-b385-3f8e3410272d",
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
    "id": "f7a6ab38-2095-431f-8741-6d132806950e",
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
    "id": "44955383-5af0-48ac-8a79-3a20dce19906",
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
    "id": "779b8b11-4136-48f8-befd-5d867016d31f",
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
    "id": "fba5def4-5257-49d1-bbd3-840c25f11fe1",
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
    "id": "245770e6-aec3-441f-a1b5-764bd87a5388",
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
    "id": "9de895ba-ac1b-47c8-bfa0-3f80ba71ddd2",
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
    "id": "a762abdb-a9a8-4176-919f-dab26e972dbf",
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
    "id": "ece0d30e-b29f-49c6-9747-56d114bae86b",
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
    "id": "32830c6c-ff27-45bc-bce0-f57d6b954faf",
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
    "id": "b8ceebaa-5770-4d19-a232-7c1429c79336",
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
    "id": "6af7e0bb-b67d-447c-9297-0a0e6f966eb7",
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
    "id": "5fa8f49d-180d-412a-bff5-bfd7feac9d2c",
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
    "id": "8338bb4a-ec38-4989-a010-6d95ee0099cf",
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
    "id": "a3023a8d-81aa-4ab2-a94a-367a9fd2c8be",
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
    "id": "06964c7e-3558-4b51-ba46-3c34b40805cb",
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
    "id": "e7283f4d-b5f2-4a09-ba8c-e164bc187348",
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
    "id": "1e64c2b5-14ed-406d-a42f-88d96ef1b717",
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
    "id": "e4b1de97-a244-452f-a96d-f3947467e0f2",
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
    "id": "ccbc5b84-67ad-4ab3-a5dd-706a3c283d65",
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
    "id": "07727687-a0f0-4100-90e4-70770075b3f3",
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
    "id": "d57b25a9-22df-4b53-8aa8-366ace895214",
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
    "id": "5e707e0e-bd3c-4e03-a057-8e29e2a5618b",
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
    "id": "764473e1-0356-420b-a9a2-52ca86f96ab6",
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
    "id": "15c44385-d46b-4011-9116-4a64fca4e62c",
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
    "id": "b65abd03-0ff5-46b2-b09e-394fdbc56a79",
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
    "id": "6baad607-094d-48eb-b773-279ca359a128",
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
    "id": "182492cf-3aa1-46d7-b474-829fcfdebaf6",
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
    "id": "875b74e6-f55e-41ed-b561-0e6f87ce0a2a",
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
    "id": "88c89ba2-1625-415b-b0a0-e863784f4b5a",
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
    "id": "c3737fff-22ec-4084-ab7d-5fc67c24d1d1",
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
    "id": "ab3e97b6-200b-49cf-aa84-d3a8ed40b7ea",
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
    "id": "e3f6b575-869b-4e7d-9346-6cb1432b8d25",
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
    "id": "0af100b0-1695-40de-a871-ceffb01e7d98",
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
    "id": "677ff6ae-984f-43e4-ac35-72985c62cb9a",
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
    "id": "87459eb4-6ff7-4fa1-9f46-2f674d2764ae",
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
    "id": "29e2765b-8f2d-4402-a5b9-f0edc24f9ebe",
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
    "id": "fbe85e35-617b-4453-b728-8ec535447a71",
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
    "id": "6ff69f08-94fd-4813-be06-dc930effd657",
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
    "id": "d1b9234e-5080-4e1a-8406-7596c9ea1e3d",
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
    "id": "da4d0d11-dfd2-4d71-9717-ed8df60c0568",
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
    "id": "8080db4e-5603-4986-a5f5-b0060ac876fd",
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
    "id": "c6607bf7-2dfb-44a7-8739-5ffea96dc00b",
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
    "id": "8c967735-0358-4bb4-bbfb-487f01d30dcd",
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
    "id": "99dd4e48-73a4-4d11-be77-9613775f10dc",
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
    "id": "a40b10de-c87f-42f6-8cf6-20903628626e",
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
    "id": "601c883e-9051-44a7-8005-a23de70c6bf8",
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
    "id": "cfa48182-bc20-47ba-9ba1-ea24d5a76cd8",
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
    "id": "00df36cf-c888-4ce6-bd06-b3dee41a3477",
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
    "id": "3b2f2923-9d21-4698-9ed6-94cae4f4237a",
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
    "id": "d4a3735d-6de2-4f10-999c-eaeac238f60c",
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
    "id": "6b6c2070-349b-4f4f-a9ce-1c083afd6f23",
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
    "id": "ec8d927c-9688-47b5-a53f-d58d05b4ac94",
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
    "id": "2863f75a-291a-494a-95a5-9e3de4c8ac9f",
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
    "id": "4afae9b4-e076-434a-a07c-b499a27bc591",
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
    "id": "500ff1c0-3b1c-47aa-b0a5-8b045cd4c7fd",
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
    "id": "9be320e1-14eb-44f9-a26c-3a154734d76b",
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
    "id": "a3fb72f4-2c9c-4306-a631-78bf1b20b0a4",
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
    "id": "a38a59ce-d7e2-41d1-a541-22409fa56707",
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
    "id": "c769889b-e62b-4c78-ab2a-50c6a27c2890",
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
    "id": "3c17d8a3-f2e2-481e-904a-c44749b85c4b",
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
    "id": "44e54afd-2378-43d4-876b-e77169e4e1f9",
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
    "id": "0b296353-4524-4ce3-9150-0e845b18a046",
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
    "id": "8d84bc1c-fc75-40c9-bf74-c3cf2d65c743",
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
    "id": "62e0c633-3c21-4ee3-b06a-f5466d88a4ed",
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
    "id": "7c9f5f0e-4c72-49cd-83cc-6f5e98bde151",
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
    "id": "0fc387d9-aa99-43a4-9a51-6e75629cf478",
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
    "id": "51e01918-6b33-4e2b-a3ee-544a1d96458e",
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
    "id": "21e869c9-7fbd-47b9-8185-b79e71930c9e",
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
    "id": "fac469b2-6dbe-4a72-9a37-bb0528ff43b8",
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
    "id": "bc371953-0ff3-4839-ae70-e365721c3e34",
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
    "id": "8769994f-e1d7-4783-a593-3c6f600ce9bd",
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
    "id": "7a05f26c-bf2f-4dfa-ba03-2ef69a6997a1",
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
    "id": "5bcbfb2b-52f8-431f-aec6-6ada8b61f209",
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
    "id": "a91b39ab-6039-46ae-a272-972f003de890",
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
    "id": "1d31d9fd-c4e2-4201-8004-0449de7bbd83",
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
    "id": "8637a623-b955-4d51-bdff-8df8c7667a0d",
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
    "id": "e5d31509-1dc4-4855-a9b5-e4347fca9b91",
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
    "id": "363582a8-27ba-4320-ae69-00eb51bd65fe",
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
    "id": "bd6a6b6b-65fe-4dff-843a-57710cd4e932",
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
    "id": "d0d924e8-b927-41bf-a487-1c9ecceb38af",
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
    "id": "1bacb0b7-9df8-4869-a3e6-5c9217c76003",
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
    "id": "b19eb692-f1e7-4edf-a31b-7128c0cf65cf",
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
    "id": "98eb92c0-fcbf-449c-8b65-8f222f3e5a5f",
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
    "id": "9f635042-e2fb-46b6-8587-6fb3740058a9",
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
    "id": "1b9e4fef-7595-4ce1-b93b-1a97934807f6",
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
    "id": "af1f564c-8f3c-4bc2-8bf1-6a5b7a8c003c",
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
    "id": "baaad34b-ee2a-4aa6-ad98-aeb90f897094",
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
    "id": "ca91b1d8-ffe9-4760-bb5a-7f2da4a5046e",
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
    "id": "cafbadd0-616b-4255-9d73-634f50063ca4",
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
    "id": "e4fb9779-e887-43fc-91b7-4ee5293d47bb",
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
    "id": "408f66ed-0950-45f7-afa7-ccc882443095",
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
    "id": "50a8a3d6-222e-400c-b666-13af47b4172b",
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
    "id": "a6c19197-d9b1-482b-9823-2805e484d48b",
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
    "id": "a943c448-ca43-4743-8834-3afb812f4adb",
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
    "id": "b3054cc3-0658-492b-836b-1186726866fa",
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
    "id": "dd0796b1-708c-46e3-ab5d-f20cd8c291e7",
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
    "id": "2f7250c0-ff64-4196-b8b3-a3994ac36d32",
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
    "id": "ece808ed-535c-44c6-89ea-38d3fb67db0a",
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
    "id": "39dffb90-1dbd-4275-877e-af03b8e5d29c",
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
    "id": "e903bfd4-2586-42ed-8d0f-1d09a049813b",
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
    "id": "afdd67c6-fd8c-462c-9e3d-c6b9978c8fb8",
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
    "id": "67de6589-b881-4bc1-a8ed-146133500a94",
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
    "id": "eb46adcf-1257-42a4-94e2-c741a2a6473c",
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
    "id": "68e8f7dc-ef86-44b5-ab5f-a6aa7ad4e2d5",
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
    "id": "f37c7d75-21b9-477f-a3bb-f00279a2e8f2",
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
    "id": "8c013806-1375-4a96-a1d4-a719d97a140a",
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
    "id": "fa050c0e-9b62-41b3-a6a1-4784fdd1b7bc",
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
    "id": "2cb8e1aa-d321-45ea-9cf3-24cef2205110",
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
    "id": "518aa227-ffc2-4978-b67c-5279673dde12",
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
    "id": "9e012cf4-ca88-4bac-af01-f26794fd355a",
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
    "id": "86d3d92c-0817-4580-be53-16ec799371c9",
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
    "id": "f872b8d0-08b1-4e22-b99f-320c370a99d2",
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
    "id": "a49c0b4e-64a3-4bdc-bcf9-089bbdd4d70d",
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
    "id": "565329d3-fdbf-4fd8-9ee1-a2cb3d65630f",
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
    "id": "5a563d15-ed6d-4e25-8bc4-330dc0fc9d95",
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
    "id": "35474f1b-46d5-446f-96cb-9243e6983af8",
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
    "id": "16a9b300-9b4d-438c-9ceb-e8b8d6bb77b1",
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
    "id": "61b67e5e-1894-4a77-bcc7-375819013fb4",
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
    "id": "9ad8ae75-c0a4-4b86-9648-16d1390bafe3",
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
    "id": "e0ac7147-82dd-4f99-946f-145de44630b9",
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
    "id": "c98ed459-f49d-4f04-b6a7-8af68d6fbeb5",
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
    "id": "edda17b1-b3a8-496a-a81f-9a85ff140be2",
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
    "id": "5ebd895e-e101-4a94-8dc7-09c440f979db",
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
    "id": "147b650e-df4d-4e0f-bbe9-381d54735972",
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
    "id": "517d8f1d-1bc6-4622-a5a7-9967492c0a95",
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
    "id": "9f3c6e65-c647-435a-b7de-eedf6d2f12bf",
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
    "id": "9ee745ee-9fdd-4c0b-9e1b-07d2b395e173",
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
    "id": "08fb2bf8-b5df-48e6-9e7a-f8fb45ed843d",
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
    "id": "62da56a6-3ae2-434b-9499-0225f7105d6b",
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
    "id": "9f14c1c3-457d-4a96-a794-f125fe266f3f",
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
    "id": "93feb428-02db-47e4-97bb-430f60525bf8",
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
    "id": "6cb7bdee-99a5-4167-a00c-420fa4cc9255",
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
    "id": "378205ee-5b4f-4643-b10d-03c9637b6086",
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
    "id": "e2922924-f953-490b-8fb0-7becf7cd7d5c",
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
    "id": "6d99919e-7762-4572-9d69-8d47c5f80181",
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
    "id": "c9b53e78-3a69-403f-877f-c2ecda85592d",
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
    "id": "67375091-8a09-4ff0-9297-71f48235afe4",
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
    "id": "bfea0c29-53b1-4a81-9244-5eae055a8dda",
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
    "id": "5e857843-ccb0-47ff-a942-a0dbffd45b5d",
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
    "id": "7420af4e-4abb-45d8-bdbf-8fa8ba4df36f",
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
    "id": "b84ef415-e90d-4547-b278-cf64823e96b3",
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
    "id": "b474009d-b862-49ff-a494-7fdfd7b018de",
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
    "id": "e79928e5-21bf-4f48-a249-ed7dfcdd656d",
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
    "id": "a84b39c2-60f0-4941-8a15-853932640d7a",
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
    "id": "32a7248e-96fe-4ea6-a196-e2ee4933b212",
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
    "id": "5269df06-5e57-431b-975d-e4f96a535f1c",
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
    "id": "b9aa175e-468f-4a16-ae1f-0f308713c4ae",
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
    "id": "df052100-892e-41b0-b7b4-f7e26517615d",
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
    "id": "6d4c08d6-9ebe-4c67-86a3-a93124e0e1bf",
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
    "id": "4e7f4556-f149-4db9-baed-4d68527f7a9d",
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
    "id": "68ce0929-aeac-4d3d-9aff-85d30b9a0639",
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
    "id": "2ac88ba7-24e9-4a3d-8fa2-13b63171ff8a",
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
    "id": "7285505c-ce00-4f6d-8726-e2f216266223",
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
    "id": "658501d9-c2be-4f3f-b726-5f83e735c49d",
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
    "id": "1757bbe7-d5d9-4fcb-aa3d-826db1704342",
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
    "id": "4327fd86-b281-43a8-97d3-2a294a7d2dba",
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
    "id": "29a62189-5acf-4b96-b25f-edb883d9dcdf",
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
    "id": "32c05b74-63ce-4f61-8747-14abd9608dd1",
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
    "id": "a074b62c-0080-4a59-b437-8ff30dd4ba5a",
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
    "id": "aa2cf0ba-00b5-457e-b01e-dd8d5a935661",
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
    "id": "484f3350-3a88-48af-9b98-5a8be7f71de2",
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
    "id": "22abeaf7-2032-472f-ad58-8e6df14f9150",
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
    "id": "5478bb7a-066a-4612-bab4-9c8c8b09ad18",
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
    "id": "48243b5e-3f20-4aa9-a442-46bc34932032",
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
    "id": "174db538-d32b-4555-8ba6-e68dbf3e1f85",
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
    "id": "8bf8f70f-0659-4699-baae-8dde182af45a",
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
    "id": "c23b57d6-278e-4f46-b352-7937daba626b",
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
    "id": "81edbc0b-461b-4feb-92fe-8252fb8ffc4d",
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
    "id": "43c4dcd3-34b6-4db2-9d93-25253b2cae5f",
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
    "id": "8001f543-2fc8-43d7-a687-3a0c0f448105",
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
    "id": "dcfd8dfa-9158-48e0-89d8-abf415329952",
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
    "id": "52e9d312-82a6-4c10-96a8-ef0df28d1ad5",
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
    "id": "9c385cd2-5462-49bf-a875-6ea2f52653be",
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
    "id": "13ed8f55-a63d-4667-985f-12930976aacf",
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
    "id": "18e34bf3-78f5-49d9-ba14-6ca504300762",
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
    "id": "5eea341c-b560-4c3d-8785-9be1171848e7",
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
    "id": "4f74ab36-ece2-4693-b8dd-d459f399cbb2",
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
    "id": "18efe50e-4451-4280-b03b-c985b434f20d",
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
    "id": "e6da2546-3e4d-4318-8350-1f947080d076",
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
    "id": "dc5ed5c2-fe7c-4b1f-92c9-b8b3cb248aed",
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
    "id": "511e6d25-8160-41bf-bd39-324661025e35",
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
    "id": "17c566ee-5a63-4399-b1a4-4875f676edb5",
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
    "id": "417e1425-930f-4164-9ca8-036e95b96662",
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
    "id": "d22af451-fffa-4cc5-ab61-2a8a21bf9d92",
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
    "id": "2fcd8529-0a72-45c9-916f-2df68899a8ba",
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
    "id": "c497f9ef-efc0-426f-a99d-a18ebe75dd04",
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
    "id": "559646c6-e853-49dc-af39-5edabcac1550",
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
    "id": "025bb1e9-695c-4896-ab45-bdbe9031901f",
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
    "id": "1ff36ab7-880c-4a78-8c84-0bcd71a00200",
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
    "id": "aaa263e7-272b-43f4-b231-0bb330afa304",
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
    "id": "8dd7647a-6ed5-4220-a87f-1d64473c6468",
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
    "id": "fd3866c3-6abc-4ee6-b6f2-968b29bf9cd3",
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
    "id": "87d6efea-0cde-4c9f-81e1-e23569523699",
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
    "id": "24f917f6-403a-473b-8b64-a433d00a1c18",
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
    "id": "90a8757f-5245-4a96-bc4e-cc71a39be2a6",
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
    "id": "c70b0b2f-297f-446f-857c-bf923d53686f",
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
    "id": "69bc9e16-b869-49af-9a9e-3d6b827c1357",
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
    "id": "1e4d2a75-9a1e-499e-b138-50dd29084df0",
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
    "id": "e18e6ed1-09f7-461b-9418-ddc59af012e0",
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
    "id": "56afccdd-bbe5-40d9-969e-5c0ae5a6540d",
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
    "id": "e6fa22fb-0f54-428e-b227-6a9b334eb2ad",
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
    "id": "a308df78-8a0d-4f67-a977-c2869aa855f0",
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
    "id": "e882a064-023a-41de-8a94-4b7c23ca9785",
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
    "id": "5819b2e7-6664-4b81-ac55-bd748c0b49a5",
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
    "id": "282a834b-47f7-4882-8315-9ee69f160d36",
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
    "id": "c680b657-30a9-46ce-985a-b4e945358653",
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
    "id": "27fed598-5b56-4f02-ac88-cca1e940c353",
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
    "id": "4325b63a-67e6-4f70-b163-027fe5e4f2c7",
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
    "id": "9515a340-a727-4cc6-bcc4-5ef8221f462b",
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
    "id": "64b48435-481e-4f75-97e3-5c4ddb0955cc",
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
    "id": "81e5160e-3dcf-42d1-9a44-97ca3db0d77e",
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
    "id": "be8a668d-1ac1-46cb-b729-410511a70610",
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
    "id": "ff23942a-648f-4140-b278-8eea3765cb39",
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
    "id": "9eb47250-3187-4a93-9ad7-7a71f26a5b86",
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
    "id": "149d087c-9f1e-409e-8d89-42d0899da412",
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
    "id": "e1c71e94-ae5a-4ebb-8d21-548fe15ec2cd",
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
    "id": "11f9670c-a5a5-4eea-9382-15505f06d35c",
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
    "id": "59b45349-3770-426d-8485-4cd266fc9fcc",
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
    "id": "9ea254b8-8266-4dfa-8b61-ac9ac22b5ccd",
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
    "id": "0dcfa9dc-071b-4f9c-a18c-63dde628e048",
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
    "id": "f2544c95-a5ca-4ac5-8af3-188739bc45f1",
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
    "id": "54e3ca14-33e5-4681-8581-2d39de039991",
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
    "id": "ca38ac2b-abe5-4a24-a0df-9359b9344034",
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
    "id": "82f57b6e-32ff-4a91-b4fc-b7762d63a20b",
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
    "id": "35ad63c7-e310-41af-947e-b8cbc9f230df",
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
    "id": "363984ad-c480-4170-a742-814f5ffd86c1",
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
    "id": "eb3aaa6a-b2e3-4b67-821e-769cf02c62ab",
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
    "id": "210c5634-1b74-4967-89ca-572f65a606f4",
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
    "id": "a4b3ad29-d28e-43db-8477-a5afb07219c3",
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
    "id": "11a4bd70-5f98-4919-bd32-18e94bfbea20",
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
    "id": "792515b2-0ea5-4c50-ae03-bb742538f7ed",
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
    "id": "635d37d9-1239-4094-963f-62454d6ac9cb",
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
    "id": "9fe801a9-276c-4d6a-80ca-017e766098dd",
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
    "id": "00c1db5b-1db8-4cac-985c-1312c4b85756",
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
    "id": "2158a7e2-6065-4610-bc9e-d059174aba24",
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
    "id": "7102856e-7047-4a6c-a11b-16ec6b98beca",
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
    "id": "4107382b-4ee2-4b28-ae74-a7c9300d01a3",
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
    "id": "7c3afc61-27cf-4a07-aa2f-591707b4cc95",
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
    "id": "45d8ee51-7405-49e3-838e-a7dee3e88667",
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
    "id": "81cd9428-55ba-41da-a8d7-8468269697fc",
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
    "id": "25227ea0-2103-4bf3-af43-75ca33fb3dec",
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
    "id": "6c02b40e-6eaf-4baa-9b6c-b4c0f24a6671",
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
    "id": "4f1b7596-0958-4ab5-83ed-98656c29194b",
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
    "id": "9e8dd25a-a608-42c9-9965-dc28d1359bed",
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
    "id": "fba2fe95-834d-4b07-9dfd-aba88c0fbdb8",
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
    "id": "cc92aa74-eb5f-4a39-87b2-815f356779e6",
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
    "id": "7a225a27-22e4-4030-abf2-af313381d6c0",
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
    "id": "5a11b82e-d733-4014-8fab-a530f49ac37e",
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
    "id": "4968a8cb-00d5-4444-ae0f-9db5aaa998a7",
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
    "id": "3d826d78-bccf-448f-b2d7-9c5fa39a1ad9",
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
    "id": "9674a384-1e35-460e-81fd-e4885495b893",
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
    "id": "93c8ffc0-51c9-4acb-9c3b-9693de2719d0",
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
    "id": "7382df71-0aff-42d4-972e-d7531493ca52",
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
    "id": "6c890f7c-c18b-4c45-9116-dfadbabc9851",
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
    "id": "45efd268-f4ee-4e53-8b6a-218bdaae5cd5",
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
    "id": "0bc779ed-f600-4e97-a128-50ca4a4cf954",
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
    "id": "ed3eff72-47da-4a56-9147-f514084ac4b8",
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
    "id": "8daf73ba-84de-45ef-9f2b-8f27c179fd6e",
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
    "id": "1ba1f7a6-c0d4-4a24-84fb-a5065bc3699b",
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
    "id": "9f4f3d5b-7fe1-4a2f-8636-375de8f27d5f",
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
    "id": "d654f5fa-7215-4dd6-bcc8-4a2403763b2d",
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
    "id": "edbc93f6-bc62-4d56-b0d1-e81988cb549b",
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
    "id": "603d937b-86ef-4590-aca0-5920a5ea09f7",
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
    "id": "493bffc1-6075-4641-bd4b-6f28300f21ad",
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
    "id": "b1c48188-f2c7-4275-a2e4-3017cec3a1bc",
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
    "id": "053b0ab1-dac4-4086-b480-96b6b4cfae69",
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
    "id": "09470695-f093-4fc8-88f1-daaf1cfb4676",
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
    "id": "840ca69e-a2fa-4840-9121-8a3cb93ae464",
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
    "id": "6f8dbea5-f745-4361-8c0d-f6332ecbc2f8",
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
    "id": "912449d2-99a9-448b-9ffc-ca1e142c1636",
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
    "id": "9822f32b-5c9d-4ae3-a545-2bab1f9d23b3",
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
    "id": "2e7447f4-01f9-4069-ba24-6b3470ec9540",
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
    "id": "27f6549b-49a5-4bed-8947-6688ddbbeac1",
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
    "id": "b662f4f8-782f-4f38-80d7-c8d77d575288",
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
    "id": "583e3d30-3fd2-41c2-9887-b29dbf61c70d",
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
    "id": "9987d3ee-f3d9-4c7c-a185-5dd28245d0f4",
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
    "id": "94a5c92c-d4d9-426b-b71c-0771eaed7d43",
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
    "id": "e9c717b9-3bc3-439f-baca-0ffc5fea5688",
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
    "id": "5d4cb3f6-234f-4bb7-ae82-826600966d56",
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
    "id": "b78aec27-8a31-4751-9f25-06a6fadab667",
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
    "id": "19a787d1-58b8-4698-8264-ffa5e1edac05",
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
    "id": "13bede98-1b1c-4a0d-bb25-9ef8647dc30a",
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
    "id": "5c80fac6-76e0-4dec-9f8e-dc8ad4bde953",
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
    "id": "7e7b75b4-97a3-4c87-8539-fee53f4c251c",
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
    "id": "04be026c-ff6f-4e7c-93df-0769735809a1",
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
    "id": "32583063-5c15-4e86-93dd-5e0c5f535f17",
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
    "id": "99401b25-c3bd-45e9-b65b-f9bb26aa03a4",
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
    "id": "6a07a35f-1a03-4beb-b6f5-eda874a8f96f",
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
    "id": "07ce1acf-bcb0-49ff-813e-071dc31ed2bf",
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
    "id": "c3e72a85-e5d7-4162-a2ae-7b5961cb6eab",
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
    "id": "05e7d4f1-92cd-411b-8056-bc1bf59acdc3",
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
    "id": "a5543793-e189-4cb3-b5fc-5216fa78fb46",
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
    "id": "aa5af0c4-f86b-44b3-b2bc-473d0e268775",
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
    "id": "15d438e2-9f3c-4f27-ac25-0aba5fef816f",
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
    "id": "eba1dcac-02e4-4171-be4f-54cf7f5beba1",
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
    "id": "2b417a42-c8b0-48e2-a9f3-983517be237f",
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
    "id": "6cc6068e-8b42-4b55-9ba0-dba90c2d521b",
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
    "id": "80697e62-5758-48b6-953b-2e0b9245c553",
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
    "id": "8a0fa721-7124-4290-b8ac-02ef5c93579a",
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
    "id": "577eb944-6d61-4bd5-985d-2e22f285f98a",
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
    "id": "66c72cde-7e61-4fbc-a4bc-53cf7cf2f79b",
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
    "id": "8b762356-addd-483b-8d2a-4c71cb4b2ada",
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
    "id": "a2bf5e04-a560-42d0-9b75-41b57af10314",
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
    "id": "97731c63-a280-4fd2-8114-f43842f1fc2b",
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
    "id": "68b84671-e366-40de-9e00-e3869a018d52",
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
    "id": "35f5c55a-f157-4c39-a198-772cccfd26a3",
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
    "id": "352d006c-1526-439f-b7ba-72e567143dbf",
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
    "id": "b508bd81-56e8-4b86-9dce-dbb46506273f",
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
    "id": "74ba0a26-3fb4-4c40-9643-bd96aedbacc4",
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
    "id": "fd16e016-ea57-484d-8130-6ff9f8cffe1e",
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
    "id": "becf7f88-06c9-48f3-9329-d87fb4f36554",
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
    "id": "17bc61c0-6254-434e-8f5e-8f7dbdba63c6",
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
    "id": "eabe600c-4d46-4aee-888e-9270f5e0beed",
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
    "id": "f8ee177a-0985-4e96-aab9-de08e68c4be8",
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
    "id": "4d4f8388-f796-49c4-8acc-cd2e91997701",
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
    "id": "e9687fa2-2ae8-4f3c-8acb-39655303ec5a",
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
    "id": "6d2b261e-58fc-466d-8f7f-77cab975f219",
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
    "id": "c4b0b9b3-35d0-471a-adac-9cdc84fb734f",
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
    "id": "327a6b94-fdf8-41d0-8d79-4e023d4cd7d4",
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
    "id": "8f1d3cd9-13c3-4bf0-b95e-990fcd2dfa1e",
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
    "id": "a6be93ba-9748-4e74-9f7d-6a988171f5ec",
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
    "id": "0a2449c8-4e19-4fca-9fe7-2c804110ec1a",
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
    "id": "dc54b6a0-42cb-40db-b501-88bee8fd8df1",
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
    "id": "feda18b7-ff55-4a20-804e-c026975e5e11",
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
    "id": "2a99bb82-e088-40e3-872b-98cf6450ff02",
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
    "id": "71189cc7-0fad-4ee1-ae08-bf4fd09de278",
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
    "id": "4d2a03f1-528e-4b89-9aa6-78df2cf98087",
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
    "id": "a65a8f9c-652b-4d01-96a9-9d53a348d062",
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
    "id": "c02b4dac-43a2-489b-a827-fcf1d22585c6",
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
    "id": "9b293b2d-f63f-4cfc-9d12-650c1a7c0832",
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
    "id": "57a3743e-8d68-45cb-96a1-bf32a03aa148",
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
    "id": "6d448d05-6025-4866-ac33-b8936caa4ef9",
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
    "id": "b8e87868-b9c2-4247-bd38-68d84f6e5cb2",
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
    "id": "c9d59b09-bb36-4b40-865d-ad85a5d3c91c",
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
    "id": "a0a3c529-6c6d-4b28-bdfd-99e6f8b40c19",
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
    "id": "14badde8-628a-4c56-bde0-f9f3676d3351",
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
    "id": "cb73c9c2-6ca7-4628-971d-cf2466c7250d",
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
    "id": "6f742eaf-7609-4df2-babf-224b29383a52",
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
    "id": "3471b6db-c18c-4509-a346-71af441581e1",
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
    "id": "f15ba11d-88f5-45aa-81e4-62f1c88ee84d",
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
    "id": "ee69736d-416b-4ba7-8f37-2ab2b3bfb692",
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
    "id": "4a11a058-037a-41b2-9d09-40730d2922c0",
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
    "id": "4035010d-dec4-4e22-a2b3-3a54c36036bd",
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
    "id": "dcdfb295-f8b3-47d7-973a-d1a2a8e15a60",
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
    "id": "693588c2-f68c-45ee-bb35-6577d2cbba6d",
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
    "id": "87798ddb-f5e2-4e4d-9388-9f74e7a8d284",
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
    "id": "fc4eeb73-8b7b-43fa-9b03-3da287310915",
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
    "id": "9528e38f-a1a7-4716-8e98-0fa44bd2af7a",
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
    "id": "f22efbd9-21ea-445b-8d35-7aed81980bf8",
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
    "id": "be5fbc1d-8bac-4f43-b9d5-f24935922746",
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
    "id": "f82b63a4-54ca-45f6-b900-3a21f6fc3f41",
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
    "id": "fb58ee9c-b463-4b5b-9049-8337fce9c9a1",
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
    "id": "0c7829a2-afea-4266-b00f-4bc3f7e60a24",
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
    "id": "6f316e19-41a7-45a3-ba3a-cd736e8d47b8",
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
    "id": "0b91fe41-8265-4f87-a5cf-ba927e8a5e40",
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
    "id": "cf364adf-0f06-4aee-b0f9-e0de81707d4a",
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
    "id": "eaa37a82-f026-45f3-8d52-aaef0e46573d",
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
    "id": "c3d8e8fd-feb0-43e8-affe-e907fdc38245",
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
    "id": "92d96f29-236d-4b2d-bb4a-e5c5b4597f2a",
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
    "id": "ed64db7a-8f91-498f-89a4-ae9aa113dfee",
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
    "id": "c2c0fc3c-dafc-41c6-aa89-3eb54326572f",
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
    "id": "577d68dc-8c13-44d1-8a86-cc8e3d5f9abd",
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
    "id": "ff82e8f7-a212-4d2a-85f8-a383326aad9f",
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
    "id": "610f6229-9e2c-401d-b946-9b03936d2ba2",
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
    "id": "617a8acf-dec6-48c4-aa43-614dcd85c1d7",
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
    "id": "df88bad3-33c2-4fd8-8aee-a0bf0f851531",
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
    "id": "47f655d2-10e3-482d-bd6d-6415753e1082",
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
    "id": "593d59f0-1d7b-4bd9-9f68-97d0145cc61c",
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
    "id": "919924e6-0a99-4184-9047-0aa0e0e2705b",
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
    "id": "2ade442b-938f-4ced-949c-ea7066da681f",
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
    "id": "6fd3af5d-0095-4ce0-b422-cacc675118cb",
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
    "id": "eaa99b83-b3b8-41c1-9e20-3e9b2fe6ee4a",
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
    "id": "8e4acecf-1fa4-4e4c-9fe7-946a52889736",
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
    "id": "fa2e5cb8-729f-4c02-a0f6-03b2347cb314",
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
    "id": "432d593e-02fc-4bb1-8deb-95b5579772d3",
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
    "id": "a23ea48d-60e7-42a9-ad70-d47d345507fc",
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
    "id": "60345079-f148-4b0d-a0a4-f93b85c2b28b",
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
    "id": "28f5c2bc-8c21-4b7f-9be2-398b9b310295",
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
    "id": "f38a86a4-bff5-4071-bb53-6b46e2f567de",
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
    "id": "9d2300f0-9584-4ba3-a1f0-8dba22b7c8a5",
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
    "id": "714132cc-3445-4cc8-861a-07ffb3ded255",
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
    "id": "fa0edf44-7e7f-4bac-ae0b-c31b0ef74bb8",
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
    "id": "4ba8f926-efff-4111-af3e-0ac22f064d99",
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
    "id": "0962d432-9ffc-4a10-a7f5-8328f36e81be",
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
    "id": "918fd41e-6de3-4744-9de8-dc8978922b49",
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
    "id": "7ea66250-d37c-4f82-afab-7485adb424ce",
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
    "id": "f4c6de1e-fad3-4d49-935c-dfbc95b6e1fe",
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
    "id": "be5e8f7f-36b7-49c9-b33a-940fcc985db8",
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
    "id": "2061b2fc-00de-4438-b595-65427c9c6238",
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
    "id": "4f827e69-3099-4c3e-a516-35e370ae1002",
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
    "id": "8ed2751e-7ce1-4bfb-83fc-9004de7e8481",
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
    "id": "adab217a-8c8f-433c-be32-de33f953962b",
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
    "id": "155d1eab-464d-4eac-91f9-19709a95847d",
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
    "id": "02c01c4e-1f8c-4553-92b3-7c9323a51cb8",
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
    "id": "94a76612-9326-47ec-99cb-608e63a98c0a",
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
    "id": "008dba4d-ad72-4303-9771-3d0085009c8c",
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
    "id": "52e027dc-b5ea-44df-8349-5c5398a43147",
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
    "id": "00ec5ada-2b7f-4877-a53b-d330ec47ee32",
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
    "id": "7f6f4d46-9c1b-4ca0-8d43-b5e1192c0f21",
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
    "id": "d38a7d27-01a7-43a1-9ed5-fe3e9b358848",
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
    "id": "184ec0d5-00f7-47e8-a89a-33e94477371a",
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
    "id": "007274f8-8e6f-407f-a733-46d47f205838",
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
    "id": "4ed443dc-57db-457e-b163-3d55805e6027",
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
    "id": "c4410f90-3cf3-426e-ba49-a0a92e711d95",
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
    "id": "7c1f0fad-e9b1-4bd6-88e4-d11229d9070e",
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
    "id": "775937c0-63c8-45e7-ba43-7de44df13a05",
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
    "id": "791976a2-f698-4efc-bc5d-4b399d3112ac",
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
    "id": "2c9e5569-3141-43fb-a1ba-e73ad960c897",
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
    "id": "3622e19e-a02c-4360-a36c-6dc5829e16be",
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
    "id": "a489a2ce-1904-4037-ab7f-105d2c5ee99b",
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
    "id": "3cd9aae3-ca0a-413d-bed3-c29cbcce1f1e",
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
    "id": "a2a8a98d-812a-4ff9-83c8-2985a269a01b",
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
    "id": "f088afa3-cba7-4627-9578-8b975de5dbe0",
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
    "id": "604f00da-2ca0-4528-a83b-c6d005c93582",
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
    "id": "4d9702f8-891f-4c0f-897e-68df3181acda",
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
    "id": "8bf04300-abee-4224-9264-cefe1403e74d",
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
    "id": "61bccecb-0104-45ad-a2da-0b0b3c0d23c0",
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
    "id": "e7bbbf92-bd04-408d-b972-a21110dba00a",
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
    "id": "5094ebcb-5847-4345-85de-0477629898ad",
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
    "id": "29542516-9281-491a-b0df-958ab3a9222d",
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
    "id": "109bd4fd-5e39-4a50-a977-0bf7e1bdf6da",
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
    "id": "21922d31-ffdb-4192-90c7-3be8569c17c3",
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
    "id": "0165ed7d-094d-4c09-b217-b921c6c9cad3",
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
    "id": "a7578f18-47f8-4065-86ad-6212793e6728",
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
    "id": "ae405ca0-97da-42fb-91e4-2f9c662aae0b",
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
    "id": "46bd3d22-8a1b-40b6-8395-785941b4e0ad",
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
    "id": "c33ca817-7a7c-4848-b731-2acfbec77d23",
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
    "id": "d4a714c8-b88c-4e44-93b8-7f2cdbbf4a0f",
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
    "id": "b7b801eb-e4a2-4c66-8cc8-ee7bbe402738",
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
    "id": "477f4018-63d6-4584-a6b3-bef7a057af38",
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
    "id": "054c4c16-8353-426a-9f71-36e46404c4f0",
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
    "id": "12879546-bf2e-44cc-b966-fd3d7b540363",
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
    "id": "e5a94953-79e7-4770-a759-d3a1b7ebb193",
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
    "id": "30aadc41-420b-4178-a424-0656d6b4b2c2",
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
    "id": "c966f24b-7cbd-4af9-a3c9-7167b3a1212f",
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
    "id": "a2bbee6f-1c7f-4f96-8bb1-f57e8b138559",
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
    "id": "9fc0ae7d-b69c-44d4-a988-c5a24b268047",
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
    "id": "34ec2cbe-6551-4c1c-9a6c-4b94a739e975",
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
    "id": "dd393f65-747a-46a8-9ab4-385f13133510",
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
    "id": "b7ebe66c-2264-481c-abb6-8d302f0dc5ff",
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
    "id": "13104c9d-8557-4fa0-974e-83cf55161825",
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
    "id": "3416083a-67b8-45fa-8ddd-0b75034a57cd",
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
    "id": "a23acb48-0029-4b9e-b8b8-ca4e608e6758",
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
    "id": "61fa7bd7-0f8a-4835-980c-903b017a54ea",
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
    "id": "4edbe896-9d12-44fa-b20f-4c785276f556",
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
    "id": "ca00d1d2-6fe5-4ba6-9c6e-baa4a53ca7ab",
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
    "id": "1de774d8-12ae-40c1-82eb-77a8dbcd5ac2",
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
    "id": "27148bd6-affa-463e-a954-165b4bd42e64",
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
    "id": "50f120cd-98d7-4157-96d9-d308b8619b60",
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
    "id": "91e71fce-8de8-4a11-aeb8-d2d7a81fd964",
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
    "id": "3e006022-4f0d-4596-87da-5a2ef75efeee",
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
    "id": "baf53dae-d55a-4eac-ba06-c6e56662679b",
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
    "id": "fe67525d-a06d-430d-94eb-20576b29b22c",
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
    "id": "e7018d77-5fdc-438c-91ab-ae0cfc985f81",
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
    "id": "c92082e7-827d-4370-abf4-d1f8b6760114",
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
    "id": "71a336b8-61c6-4713-b95e-177aece11ec1",
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
    "id": "4af22fe6-d36e-42af-b68a-71e9d90f053e",
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
    "id": "cce4936b-f5f4-4626-b763-2141d45c5f92",
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
    "id": "82b7f6ce-6dd9-429e-914e-54f7647c88a6",
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
    "id": "a1a4595f-9168-4731-9e4f-dac1aa7912cb",
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
    "id": "5c4a7c14-d375-448b-9b9c-cf7d71b95070",
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
    "id": "7b752061-31c0-4355-91d5-765a620be7d6",
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
    "id": "841fc897-0dfe-4b83-b15c-d1c932a842ce",
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
    "id": "bb1d7e19-465f-4a51-98b5-dd5ec71f712a",
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
    "id": "500cb2dc-2973-446a-ab57-dc11692fb31a",
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
    "id": "6c161929-ccdd-423a-beb3-0ee052bc22df",
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
    "id": "6917e827-df06-458c-8bb8-a6412e8ce753",
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
    "id": "eabd043a-1bdb-4a44-b214-d8429a30dcab",
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
    "id": "1ea7cad7-715d-47a3-a932-d6b134a5160d",
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
    "id": "aa1572b6-e014-441d-9573-c4df455f9600",
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
    "id": "4a76ef99-58eb-47e8-ad65-12a08d438619",
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
    "id": "f9051c8c-1c6c-430e-91c2-baef31dda720",
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
    "id": "df120570-2df5-4ada-96fd-4b1f9f043d8e",
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
    "id": "c65f53f7-b541-4a6f-80f0-73d877658238",
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
    "id": "1493036e-33e6-46f2-9eb0-aa119a9c0943",
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
    "id": "9d135296-0cc7-41f7-a41c-f22e524a2111",
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
    "id": "a77e204f-0c5f-4bab-8346-98572e66cdab",
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
    "id": "e6c745b6-8c20-4f68-aec7-09bc2fbdeda1",
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
    "id": "5c115884-d7cf-4eac-9d2b-fcd6946a4558",
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
    "id": "35e09d3a-7af1-4b9e-9fb3-2d25fefa64ab",
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
    "id": "aa19dda6-6a28-4099-9778-5cfcbf5b3193",
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
    "id": "b1cad96b-255a-47ce-a2b5-69f1116e0835",
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
    "id": "c10ae309-d09f-4c3a-b0ba-d86407da1086",
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
    "id": "a2ae1a91-7d1e-4a48-b710-8da740f34bc6",
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
    "id": "7c2e8ffb-7ec6-41c7-9a65-a338ca5ea51f",
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
    "id": "ab76a762-c7a7-4c72-b930-69b6b1912d10",
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
    "id": "af506cb7-cde3-4d6d-8b69-3033cba611d1",
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
    "id": "8847aa51-17bb-44ad-af8b-29bd35b00c40",
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
    "id": "1540d040-aa56-4665-8efe-313941ecf117",
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
    "id": "9f1b3dc6-de58-4d81-ac4e-005563afba34",
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
    "id": "db997593-9b52-4d0e-b47c-33dd5cbfc8d3",
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
    "id": "c446dcbc-25c8-4995-97ad-c657b50e58f2",
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
    "id": "1a2fade6-64dc-48ca-97ee-d0b77904421f",
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
    "id": "f86e2bbc-ea55-4498-81ca-6eeedbc86869",
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
    "id": "f093874c-ecea-4382-b662-4393efa6a957",
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
    "id": "d601ed57-103e-41d5-b7c9-eb7ef3d6a6ee",
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
    "id": "43deff68-75a7-41f2-8250-41f3dd8e61ea",
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
    "id": "900309ff-401e-4864-a1f3-67019504d25e",
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
    "id": "529e6ae4-b92a-433d-94ed-9751461f8f64",
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
    "id": "1b8e648b-16d0-4c04-88e1-3f8cf621ef30",
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
    "id": "2990cf04-03e2-454b-a6f2-32e5ae9420b2",
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
    "id": "fc8cb550-c929-49bf-8e9c-8f4fa490d492",
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
    "id": "5e470783-baa1-4abf-a921-8c6c2acdb259",
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
    "id": "846f909e-bfed-4c4c-a787-e1a0169e4622",
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
    "id": "acd57d7c-30af-4127-a0db-edd187a01360",
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
    "id": "991a1be2-ca21-4341-ab1e-4eac1d653422",
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
    "id": "b24353fd-c9d1-4d6b-814c-4d44572ac116",
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
    "id": "ca474b4b-9dca-4201-96b3-236a89ede8ce",
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
    "id": "00dc8d7d-32fd-4e86-ab54-373945945c18",
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
    "id": "a0235273-4a54-4d2d-8a49-f63d95f7d8d1",
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
    "id": "8a977060-bdc9-4f82-b098-e8ab2792a266",
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
    "id": "43bc2996-7227-4aa4-8951-8551eb1d0df5",
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
    "id": "bce1e9ed-5596-4325-bbbb-56023f1bbc99",
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
    "id": "0229300b-4354-4ed2-975f-443105f90690",
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
    "id": "8c111c0f-8052-4077-a376-8fad03ad13ea",
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
    "id": "aa617565-8fd4-48df-b420-2cf7b1662420",
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
    "id": "4479fe19-c4dd-44ed-8cd5-aeb1812ebfa3",
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
    "id": "b71596c9-711e-4634-967c-d237867bdce0",
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
    "id": "2e830e1b-53b9-40e0-a07f-0b9812859819",
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
    "id": "97c99311-48db-4487-b34d-5462a28b4d7b",
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
    "id": "de1698b3-e1b4-4bc2-8212-3e30bccb5641",
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
    "id": "bcec72bf-79b3-4e77-bb57-0f85062351d0",
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
    "id": "2fc62833-b672-4d00-ac64-2a7262bfb5c0",
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
    "id": "88982b6c-af67-4840-a68c-bc87845ad2b7",
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
    "id": "edec2224-38fb-4cf4-8383-2619ae8df78d",
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
    "id": "a4d6dc07-4572-49be-9dc2-ae13fd4f8fed",
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
    "id": "3dba9637-46d5-4875-99e1-97ea72014f53",
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
    "id": "36386995-b1c2-43fd-af66-996ebdc9ca2c",
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
    "id": "f9a0d4d5-9836-41e6-b4d3-e0eb9693c674",
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
    "id": "37d91838-dbb9-417d-8143-984be76d9435",
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
    "id": "c760d89e-b6fb-4e8e-a3ac-a90d8dd7cc47",
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
    "id": "e92d8f7a-b0fb-4095-ac21-fcd4958ba55d",
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
    "id": "e6990a58-9bc8-4d30-a4fc-7dff535ce7ed",
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
    "id": "712eae1a-fab9-4a58-9b6d-0c3697caab9c",
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
    "id": "fcac5715-fdc0-4ef7-9bf8-510b551d816e",
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
    "id": "be560a7d-7e77-407c-a6be-9d9514c7811d",
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
    "id": "f61b63ea-8f60-4f90-83ed-97b78a285956",
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
    "id": "3634c5cf-d79a-444d-b06c-13c1fd108b8c",
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
    "id": "07c2695a-d87e-463f-b455-f4da447180e1",
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
    "id": "c3cf15f7-0a00-4510-a6b6-f2665c8bff5b",
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
    "id": "9178f8a6-8ad9-4770-95b8-d0d0619914a8",
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
    "id": "16b293ac-77e3-4262-9f20-bc17233f23a5",
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
    "id": "a9019469-79f4-4a40-98a0-a3a12213bc43",
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
    "id": "f05d3827-39ba-4656-b321-176c03e9ec97",
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
    "id": "f23eda9a-026c-447c-9321-06aa976b2a00",
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
    "id": "ce4d59c3-33e4-40c2-b442-e8a0418872fa",
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
    "id": "60da8e51-4cb5-4f78-8a1b-79cb95b6c018",
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
    "id": "6dbf6e82-8d24-456d-86cc-9640b3877895",
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
    "id": "a639a032-75c4-4cfe-8c85-9d70dfb21d29",
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
    "id": "d098d43d-6bc7-47d5-817c-1e21885a69c7",
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
    "id": "86cce6b9-7f7e-41c5-8852-0322e9636c6a",
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
    "id": "86f5be99-90f9-43bc-84fe-e5867bbe11ac",
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
    "id": "89d1cc51-f8f1-4fe8-94e3-1d6b8d5cc81c",
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
    "id": "bfad73a0-5905-4ecc-9d0b-adec2c08ad26",
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
    "id": "5b441705-72c7-4f6f-b083-d0ed687d3e1c",
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
    "id": "588693d3-494c-43eb-b554-6cad3baa1838",
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
    "id": "5223a659-28bc-478c-b520-d05f52413aa6",
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
    "id": "d438f6bb-fc86-446e-9bad-69ed5bc67bc4",
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
    "id": "fbe4c92d-8785-44ed-a906-03c67dbd0e59",
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
    "id": "0d07b2fd-dca7-49ce-96aa-eaad8e437c46",
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
    "id": "9548ac37-eedd-4d8f-af8e-e48857ac0b57",
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
    "id": "e6469bf7-80a7-43f1-b46b-3aeab938fa3d",
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
    "id": "b5f33107-a538-4c8d-b894-37fe8c4a297d",
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
    "id": "0835c47d-0b51-46e7-a8a2-b24c2427a107",
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
    "id": "7b28f33a-7edd-4e72-8f1f-cf0ad2797bf5",
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
    "id": "7f4abe84-40a1-498a-93f8-7f2167143520",
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
    "id": "6f989505-1fc8-4b99-bd76-eb2df1e59581",
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
    "id": "a7c1eb0b-91fe-4bf4-8c0a-13923fb30ecf",
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
    "id": "03334446-4481-4d02-855f-bbe6883b2425",
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
    "id": "f0f12bb1-b60b-4689-be41-7c078c9cfa20",
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
    "id": "b59f566b-b79b-4e40-ad7f-b4a8891c3e69",
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
    "id": "4f0f2dcb-64c8-4f41-a274-5a1109ec9859",
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
    "id": "71d99278-7529-4d2f-ab69-26dae0a05765",
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
    "id": "a29d899a-5134-4613-a1b3-e5a56f3dda6a",
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
    "id": "3856629b-8cf3-4bfd-9eb2-086b02116cb1",
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
    "id": "d287eaeb-5313-4e22-9583-d934ee3d4dc9",
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
    "id": "25885e59-94d4-4766-8101-bbfb4f112897",
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
    "id": "50878be3-ee51-4c31-86ca-51c68b3545d1",
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
    "id": "070a59d6-46b1-4288-b3f6-9266e77946b7",
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
    "id": "032f77d0-64ed-4489-a8f4-ec63df65076b",
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
    "id": "cf30027b-4ad6-4901-b6ec-da5c7fde7baf",
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
    "id": "055aa691-1b94-43f0-b55f-58b1dd576eec",
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
    "id": "7cecccbf-3bd4-4091-96c8-7c32f89c02d9",
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
    "id": "99a978a2-0cc7-4ec6-8355-8a8de749cf2d",
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
    "id": "34554acb-c2bf-4755-9aab-1bf08041ef86",
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
    "id": "d8c83cbe-77c5-4a88-9693-93208cfbcfbf",
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
    "id": "83e20dac-d3a9-42bc-b5d7-77296c4f47b7",
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
    "id": "b04728e4-e74e-4a33-9b2e-95c3ba57cf53",
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
    "id": "db0020e8-9fb1-4c85-82c0-0534404954d1",
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
    "id": "9a0da063-3a50-4d89-9e7b-531644b83a6d",
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
    "id": "79f18a97-2c7b-4d44-a809-ae5cb6d1e3e0",
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
    "id": "c484b7c9-46fe-498c-a136-84ee59338e41",
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
    "id": "a7e745ae-8167-4913-9fda-70255a5c71e5",
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
    "id": "5eb56da2-4a4d-4906-9b56-1361def5096f",
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
    "id": "f8920754-fb2c-45fb-bf1d-47677fce62d3",
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
    "id": "c6283a4a-e28e-466b-ac6d-fc64106732b9",
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
    "id": "6f4936dc-198d-49a7-b7df-e5e4d321ae4c",
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
    "id": "2a156735-4b1a-4795-bd46-c03247e53d69",
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
    "id": "dcef0a15-c173-494e-856c-be44156afecd",
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
    "id": "eaef77e4-9651-4bd5-bbfb-eba944ccabe3",
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
    "id": "f36f2a60-1fdf-4b8e-9f35-984b52bd876b",
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
    "id": "fc4816b8-e7ce-4ee2-ab0e-2eedfe4cae66",
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
    "id": "d5a0a93d-2568-4f52-a1d4-ea838846dc3c",
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
    "id": "00910ac9-e2fd-4638-a6a9-85bb24de7e68",
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
    "id": "82f9841a-7805-439a-b4f9-5872c4b32c9c",
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
    "id": "6608eae1-5e2d-45ef-8760-bc975fc2d244",
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
    "id": "49050391-e245-46a8-a9b5-2a5023ca8f73",
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
    "id": "3ade6e1f-6bac-4e9d-90f2-be76faf81752",
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
    "id": "b5a4a1bd-0a68-4f22-a809-23c8968210d3",
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
    "id": "8dd5ef76-73e4-4d76-a96d-2e9191ad1181",
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
    "id": "da010fb8-2447-4fd9-8f54-70d72074731e",
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
    "id": "e4d5b34c-51a0-499f-a8a9-c7f59ea0613e",
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
    "id": "8182f5d9-f7fe-4bc0-a506-880686ae62b9",
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
    "id": "a037f01b-24ea-4864-a362-866f3a0e399b",
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
    "id": "8592e1ca-9212-4d32-88d1-7a2803d8d017",
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
    "id": "7e24927f-f061-42b2-afd9-ab71ab1b3568",
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
    "id": "026addc2-9d63-40d3-a2b5-7a2bc61c77dd",
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
    "id": "a6c38893-730d-4076-b27d-800e820dbbf7",
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
    "id": "e24d03a5-a463-4f87-9a62-694e958ea983",
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
    "id": "ca0bedc4-dd97-4223-b795-9eeaa0f5d9e0",
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
    "id": "c8cc690a-ec0b-479c-8844-e3ba791e2614",
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
    "id": "4a070869-29de-4b38-8c26-d0b16da93de6",
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
    "id": "5167fdad-0fa7-4514-b3e6-cddf01b53bc3",
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
    "id": "eee32f2a-fee0-4249-8f34-b82c60675997",
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
    "id": "a57f460d-fcc7-4ef9-b96e-57d8382f04ac",
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
    "id": "a411e546-94a7-45a8-9cb7-285983dfa6f0",
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
    "id": "a2899684-6719-4b4c-b221-f0ef8e5cddf0",
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
    "id": "fdd84cc6-67b9-4bc2-862c-7344cdf5e7fb",
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
    "id": "a8faea3e-1ba4-4582-be4e-ea927e1642ce",
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
    "id": "39eba5d7-a231-41ae-b291-383ec92f767d",
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
    "id": "e6404d3a-c44e-41bc-b4c6-72235bd51597",
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
    "id": "d7dfb76c-7922-4a8c-a051-6ac56f855501",
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
    "id": "6e927cd9-9e78-449d-8474-96d3afba312c",
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
    "id": "83a80432-5f5b-423f-8736-17bab923053d",
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
    "id": "b127a481-b318-40b6-ac81-2d93a08b3112",
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
    "id": "563c2fe3-28e9-4718-aa2e-6cd177abf8e3",
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
    "id": "f81ce604-3bf6-4fd5-978d-25396a479219",
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
    "id": "7d1b559f-698c-4cff-87e9-07a39e53b5be",
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
    "id": "0e8afd92-cd48-4b08-bb44-f01873be3dd2",
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
    "id": "202fe5ed-988c-442e-8720-6af61856892a",
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
    "id": "230780e9-25e9-4e62-9859-3571110df055",
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
    "id": "3365ce86-3557-4c85-b627-5f298dab0d22",
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
    "id": "869d186b-c85b-40f2-aa03-77eac72cce93",
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
    "id": "dffc662c-dafa-47eb-8fc2-dc65447c5c28",
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
    "id": "711dca3e-827a-4b02-8ba7-d82563cc1c71",
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
    "id": "ce4a0c85-80d8-43d6-a295-1fdb86546dd4",
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
    "id": "e9a7121c-4e6d-4594-8945-1f2c00ae4669",
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
    "id": "4f21ad9a-3f85-493c-8fa9-4294348cdade",
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
    "id": "f055801a-1caf-46fb-a04a-a688f8d0e5e4",
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
    "id": "b51d62b9-e723-4f07-9a3e-8e41fd922fa1",
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
    "id": "01adf739-7d06-4461-bae3-11958efdcaef",
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
    "id": "aab7c090-0b4a-492d-bb60-3ddc24b4caf7",
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
    "id": "967d1115-5ad7-460a-8e09-095aefdd6f1b",
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
    "id": "a4e5c5ca-2c31-46c9-86a0-b3320b734f0e",
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
    "id": "2f8c5499-660c-473a-a4c5-c3fcd426aafa",
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
    "id": "3ec6e856-5ee0-454a-a845-9d19435a6266",
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
    "id": "4e830ccb-c8e3-4cf2-b838-7495103a8db9",
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
    "id": "ec2776f6-d51c-4e15-8728-bea83696bc35",
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
    "id": "e7d939c2-09c0-4e0b-a5b5-be204bb8bc42",
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
    "id": "0a158050-db32-4f7f-b117-743572a4a0f7",
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
    "id": "07f53c19-2ca8-4547-bf50-6930f1d66df4",
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
    "id": "7dd1e6f8-059a-486c-b99a-aec907985fa6",
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
    "id": "964b6cf1-0661-4784-9b9b-e4e8c630e469",
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
    "id": "63457af9-4fa4-4d76-81fc-048c74b59efe",
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
    "id": "c680b273-25f9-4e6c-8862-b6b1fd549af9",
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
    "id": "e36d2e2b-cdc7-4dfa-b2fa-2b5d932df60b",
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
    "id": "73c9212d-e2d9-4aed-83f8-b3cc12413397",
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
    "id": "a64af18b-68e1-4b29-8c97-bb6f3832a07d",
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
    "id": "f73ba442-f4b6-4507-9cba-606f9c84adb8",
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
    "id": "7f30b8db-d6b6-4aae-8928-c1eaab922c61",
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
    "id": "aeb572aa-2b37-4691-ab70-12e2b9ea1488",
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
    "id": "9abbf2a1-d188-462e-b665-8e3611a8e9a6",
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
    "id": "8229d22c-c8be-4fe8-8040-8872228d143f",
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
    "id": "ab9bcf6b-7b41-4ae3-9444-4a0608f0d319",
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
    "id": "de98aa1d-8fba-4ef6-9a3e-6fb460d8ea0d",
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
    "id": "90c3e8e8-7000-4992-b1d6-2c8583394178",
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
    "id": "0b512ff5-4fa6-4aa0-8e02-cfc213e7d869",
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
    "id": "f231fe96-a693-48f4-a4c3-d337f5288e85",
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
    "id": "fbd33764-fd1b-4b71-910d-69b11733b869",
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
    "id": "9444cc10-4b8c-40b8-aace-57c7e2d7ad44",
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
    "id": "c5a45a2b-1786-4abc-b51c-597687260933",
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
    "id": "56db9d62-245d-46a3-8ffd-04746ddb42f3",
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
    "id": "c05143ab-ca1f-4a28-bfe4-b8467ec3eb02",
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
    "id": "8e8ddf35-8e71-4019-ae01-f3f82d2d04a4",
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
    "id": "af5f68e0-a8d2-498d-b6ba-163c57822a7a",
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
    "id": "5244c481-a046-44f3-bdf2-a72840ff78d3",
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
    "id": "a0f146b3-8caa-4e12-9bfd-e5452683b84b",
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
    "id": "a6e8ebc4-53ae-43d4-bfdb-725b83774ba2",
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
    "id": "16622384-938a-4665-bddf-b0710a8393bd",
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
    "id": "b0b19e52-a64d-4e17-9400-d3d3d3606ddb",
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
    "id": "36de28ea-32dc-4bf4-966f-36765384e76c",
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
    "id": "b9249b23-5683-4f3c-aea2-8903fc52541e",
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
    "id": "aab30450-11fd-47cf-9376-67f1378f1a49",
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
    "id": "fed00b85-0cb9-4a9d-8fb0-2d788e554cf9",
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
    "id": "67e3e520-2d55-4ea6-93c3-b466b13c9666",
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
    "id": "23808f77-f83a-4c17-9376-3db248448772",
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
    "id": "a98c1fe4-dc50-44cb-89c7-a1b73e2fe898",
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
    "id": "7d315ecd-dd92-4b93-bb49-5400508e29f6",
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
    "id": "222fba29-aaa4-4d0b-80d4-fb3f1a7d02cc",
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
    "id": "8808971f-dadf-41c4-964c-4d4a135ff169",
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
    "id": "a252cc3e-669d-46b3-8ebb-d785710ea21f",
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
    "id": "a34bfe7d-60bd-4c0f-a491-5cf2e9031e8e",
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
    "id": "eaa14e23-9382-4445-b294-7a94492829cb",
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
    "id": "2a45c557-94b9-487f-9103-194044c0c1f0",
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
    "id": "312166a8-1bc1-4d57-aba7-b6b7d46f6a36",
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
    "id": "9ac73f30-95d6-43d4-bb3c-f67965e1fa8f",
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
    "id": "9b18fca6-ac61-4d88-9e09-73b6339db82f",
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
    "id": "34ae1d1f-2dcd-4173-a20b-a273e4a1fece",
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
    "id": "0ba76c6a-a023-4b64-b492-0b08ebd6dfa8",
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
    "id": "18b1e1ec-095d-473c-a5bb-5b08215c4b32",
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
    "id": "b4c2d5b9-003b-489f-949e-5b780bb6a497",
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
    "id": "d28b4973-6356-495a-8066-54b111e78a0a",
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
    "id": "74f6b1bc-9754-4719-a896-55abb1b15450",
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
    "id": "421e4d9e-5fa9-418e-9f46-968bd2b2bdf0",
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
    "id": "099c98b1-4729-4b68-8f48-9fdaec43cbdb",
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
    "id": "df5267d2-ecb4-4a39-982d-d5ecdf45c68c",
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
    "id": "e16ef6d0-6b46-410a-84ae-17d7ead140a0",
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
    "id": "8898779d-8288-4527-a65d-0adb4a4483f4",
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
    "id": "302b3a2a-712c-42de-85b2-1c8ff6351812",
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
    "id": "d451dc21-fceb-4cbe-9cd3-7fd070f0c12c",
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
    "id": "85f8f1fe-ef4b-4bf0-be30-caf8e23e272e",
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
    "id": "23d00c31-9497-4c80-a687-d1af92b13fc2",
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
    "id": "bcc4340b-9062-4932-9b09-84a99cabde7b",
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
    "id": "a62564d3-d588-4687-997a-e786d83f1986",
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
    "id": "7c84c7f8-2ea3-479b-a064-396811cf9664",
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
    "id": "61b589c5-6615-4f7f-94b8-7dbcbe1e09e1",
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
    "id": "58c4067c-1e5c-446d-bd85-cc4b1ca753c6",
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
    "id": "fd10611d-f0a9-4978-9c50-5ebe5441323a",
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
    "id": "13268712-81c8-430f-a084-7905ec86ea19",
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
    "id": "2838dda2-10be-4e98-8b6c-79fa69f9337a",
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
    "id": "9240796d-d9ef-4286-b1bd-0b518c2849d2",
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
    "id": "232b99af-4810-4684-af1a-28d983aa7359",
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
    "id": "303fce7e-bc70-4be0-ba6d-93267efda21c",
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
    "id": "2a4d63b8-18a8-4359-97a2-5a9d52fef352",
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
    "id": "dbef52fa-ffde-44d0-ae2a-d4fcdd6aca46",
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
    "id": "f0d97d77-2f0b-4e0b-8a95-b1f1dde25a0f",
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
    "id": "28c6dad9-33a2-4e81-80ce-105ad6e0d10a",
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
    "id": "7232b7be-7fca-4b19-bad0-64c129dbc804",
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
    "id": "5788bcc8-ab2c-42f6-952c-6d9e1f23eadc",
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
    "id": "4c368c17-23b6-4e84-9bd3-f44178d24744",
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
    "id": "46924610-1a19-4d83-94b1-7ab134acd583",
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
    "id": "c2b7b42f-f8bb-4b86-a7ff-4c432ab8a998",
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
    "id": "87d0ff8b-2841-40a6-a0b5-ff1ff2eed4bf",
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
    "id": "4070f2e9-7e54-4a73-9eb2-fec34b6bbe10",
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
    "id": "b2fa513e-4241-4d3e-868d-020028798284",
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
    "id": "cff4a164-120a-416a-be8b-bfd17e5a8fa1",
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
    "id": "417aeda7-5bd9-425e-a679-b1b4e97caa46",
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
    "id": "87128bdd-7288-43ec-80c8-09c1c9d208d3",
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
    "id": "9fa0d10a-34d0-4aa3-82f3-aa28cf9588b6",
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
    "id": "44304624-0010-434a-a22e-4541ce8d9549",
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
    "id": "3dd75189-d21c-4bbd-bee3-2b21cb58f356",
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
    "id": "8960d0b2-5c25-473a-8cce-dc2c883b2929",
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
    "id": "99ac83ec-2f5e-466f-956b-5e7bdb465c09",
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
    "id": "dfffb571-3e63-4a01-85a2-f0f8d72fa566",
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
    "id": "752a631b-e96b-442d-aea7-437e1d1529b1",
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
    "id": "aeb2eea1-cafe-4c6e-9df6-db9e30a5925a",
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
    "id": "64ffa8f9-6ef6-406d-b3a5-1d7609ad8490",
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
    "id": "0d3f1bd4-fc59-4c02-9db4-d768caafb307",
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
    "id": "484e9139-8730-4f52-bff8-4767169324a2",
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
    "id": "9294ee38-db10-4c1b-a330-230b3edee6b1",
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
    "id": "a97694ed-7856-4127-a090-eb30082eb191",
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
    "id": "c2a87043-3b73-4350-bb51-a4ef26171f55",
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
    "id": "1d891bc6-235c-49f7-bd23-591633576031",
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
    "id": "2f44e5c6-af65-4e42-bda9-b60215725291",
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
    "id": "b95b3d05-4c54-4d11-ae4f-c3ee61b1b4d3",
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
    "id": "17ee7754-781d-49b2-88d1-d96b1048ba13",
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
    "id": "74362296-c888-4eb4-b2a5-99f7d2912625",
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
    "id": "2476ae0b-c5fd-42ba-a113-ae07bed041ca",
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
    "id": "658bdacd-a175-47d2-ab3b-04859da0a56f",
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
    "id": "aac36be1-230f-49e7-b041-cd055067df13",
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
    "id": "8104d31d-b69e-4abf-b9be-7e000201db9e",
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
    "id": "14ae43ad-268c-4dd5-8e16-ff5fdb089255",
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
    "id": "24b3bcb1-67d4-466d-a501-b97db822b173",
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
    "id": "317ee390-9ad8-4f2d-be35-e9584b7f5469",
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
    "id": "b74dcf02-f63b-4bb9-9e24-c5fa0ce234b3",
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
    "id": "4b7b8ba2-8093-4544-a3f3-4c1d55cdcc7d",
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
    "id": "46e145b9-0a66-49e1-b92b-624365d1c326",
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
    "id": "b410d850-82e2-451f-9479-32f37fc8da3e",
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
    "id": "4112bde9-9d6f-406c-895d-6ae787297811",
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
    "id": "5d9c718a-ead3-4f3b-ba6e-7d7836cf9a2d",
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
    "id": "f79190de-b0db-4a73-ac15-d46e06658b0b",
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
    "id": "300ab473-e244-472f-8c8c-f5dfd5d45d5a",
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
    "id": "485ed35b-d1bc-47e4-911c-9ef4724fa037",
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
    "id": "37faca1f-85a1-4295-86c0-b26117e9c5a2",
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
    "id": "c63d4630-bafb-45ba-b84b-d4380ef77583",
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
    "id": "db4156b7-6ca0-4fab-bf7e-3aa3e176a70a",
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
    "id": "ac875d3d-7cd4-4dfa-a3cb-f828a18a3e66",
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
    "id": "6ce50626-b926-4574-ab1a-a85409dcfa8c",
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
    "id": "0a8f8ba8-a653-4605-b6d5-b47415f3fd11",
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
    "id": "35a7dd28-fa7b-4a96-9e82-424d12f8cca3",
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
    "id": "e045b718-ea3f-4c82-8ac1-5a2798bf30ce",
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
    "id": "de0b013f-90ef-4d35-b78e-b3501292ff57",
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
    "id": "de0adf96-bc3b-4f23-9cf0-6e166daa1e72",
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
    "id": "4854679b-952b-4954-a337-297ad4cce329",
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
    "id": "03050497-b65f-432a-8705-21a03bebe335",
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
    "id": "d6170c99-b56b-4ce4-b7ea-d0e304727a19",
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
    "id": "4ffdd5d2-eee3-4015-9124-111aa64269da",
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