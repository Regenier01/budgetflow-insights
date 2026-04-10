import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "a5e5ed1d-f06a-4db8-9fc9-935c4b46dc3b",
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
    "id": "7d35b228-2a9c-4943-bcec-55639a933de6",
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
    "id": "3ade6d70-39d8-43c9-b683-a18a0122070b",
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
    "id": "e72ad964-57e5-4fd9-9b32-0d08c7e64d78",
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
    "id": "519582b0-d5c6-4eb2-b664-0cc5400b0170",
    "codigo": "3.4.03.01.0006",
    "descricao": "IOF",
    "tipo": "D",
    "codigoPai": "3.4.03.01",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "CONTROLDORIA",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.03.01-IMPOSTOS INDIRETOS",
    "nomeProduto": "IOF",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 300
    }
  },
  {
    "id": "125d21c3-8ed0-4d6c-acfd-729c9df7c309",
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
    "id": "fe9af94b-d8d9-4c2e-b151-c40d3e5f7182",
    "codigo": "3.4.03.02.0005",
    "descricao": "TAXAS DIVERSAS",
    "tipo": "D",
    "codigoPai": "3.4.03.02",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "RATEIO DESENVOLVIMENTO HUMANO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.03.02-OUTRAS DESPESAS TRIBUTARIAS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "ADMINISTRACAO",
    "orcado": {},
    "realizado": {
      "2026-02": 4100
    }
  },
  {
    "id": "e91da6d4-0348-4375-b6bd-2a5e338e76d4",
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
      "2026-02": 600
    }
  },
  {
    "id": "7fda45d2-c2d3-42b4-8320-82fa4bb784e4",
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
    "id": "8041d930-b11d-41b5-960c-c0f018a5fba4",
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
    "id": "78e19539-5ff6-49c6-8258-d42035cf3655",
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
    "id": "a4e34ce5-2edd-4bb6-a4a4-c5615907c24e",
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
    "id": "a485e442-68a7-4483-82d9-6f3e3fd96757",
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
    "id": "0ab6d142-cf86-43e4-9c14-39b9fdc655b3",
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
    "id": "bbf1b598-6b1b-4e29-bc6e-f6945ef0f0f2",
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
    "id": "9e5643d4-4e34-401f-9045-628add8f0d9d",
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
    "id": "5166bee1-1845-4c39-925a-5d902ff9843b",
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
      "2026-02": 3000
    }
  },
  {
    "id": "318bf268-be1f-499a-ae19-5759d26a1d76",
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
      "2026-02": 30000
    }
  },
  {
    "id": "62c75d82-4c86-4a25-a69d-6c7860df59b5",
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
    "id": "d4de2e68-8a20-4ddb-a4e0-1806c223bf77",
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
    "id": "c920dd80-1e33-4af1-982d-285eeafccb80",
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
      "2026-02": 320
    }
  }
];