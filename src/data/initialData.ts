import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "a5861fcf-46c1-43ac-888e-73c8a46952a8",
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
    "id": "bff5f710-b54f-4012-bff0-07ccb38d2790",
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
    "id": "43d5dfb7-5e2b-457e-88a2-6599d48cc0cf",
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
    "id": "e3a9bfee-2188-4de4-8ca8-5af3098bd4db",
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
    "id": "2c6b0c16-b06c-4b06-9467-b132a5d104b1",
    "codigo": "3.4.01.10.0060",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "D",
    "codigoPai": "3.4.01.10",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "PESSOAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.4.01.10-OUTRAS DESPESAS ADMINISTRATIVAS",
    "nomeProduto": "XXXX",
    "divisao": "ADMINISTRAÇÃO",
    "unidadeNegocio": "ADMINISTRAÇÃO",
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  },
  {
    "id": "2ae12617-41cc-4563-ac03-d74cb1840d32",
    "codigo": "3.4.01.10.0060",
    "descricao": "SALARIOS",
    "tipo": "D",
    "codigoPai": "3.4.01.10",
    "nivel": 5,
    "atividade": "DESP_ADM_TRIB",
    "departamento": "ADMINISTRACAO",
    "centroCusto": "CONTROLADORIA",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.4.01.10-OUTRAS DESPESAS ADMINISTRATIVAS",
    "nomeProduto": "SAL",
    "divisao": "ADMINISTRAÇÃO",
    "unidadeNegocio": "ADMINISTRAÇÃO",
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  },
  {
    "id": "5ae0feb9-20a7-4bf4-bce6-1c883a6b124c",
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
    "id": "2134e111-88f7-4faa-896a-775c4c5302a9",
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
    "id": "a439c7a8-3b53-4176-8dc9-cc8652ba31fb",
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
    "id": "5a55edc5-6e44-44c9-9565-696acca91f7a",
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
    "id": "5c76f2d0-9dee-4801-b405-028a54febdd9",
    "codigo": "4.1.01.01.0001",
    "descricao": "GRAOS REIDRATADOS",
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
    "unidadeNegocio": "CONFINAMENTO",
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  },
  {
    "id": "55cc5d8a-30cc-4a50-b2e8-1fca66253179",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "XXXX",
    "divisao": "SERINGAL",
    "unidadeNegocio": "BANDEIRANTES - SERINGAL",
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  }
];
