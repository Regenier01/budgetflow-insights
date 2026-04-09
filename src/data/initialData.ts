import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "8a7f8ca6-7a20-47bb-a054-d84eed2cc1e6",
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
    "id": "ed19f9da-ea22-4007-9c3f-3dfb32911834",
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
    "id": "9df59282-b984-40d5-95cd-f485a6372756",
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
    "id": "9ce0f57c-6da3-4111-a9b9-eef968134923",
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
    "id": "507958b9-e25e-47d0-9853-ff4fb991a2f6",
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
    "isInvalidMapping": false,
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  },
  {
    "id": "db433446-3ba6-4939-80ab-a12ad4751fa2",
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
    "isInvalidMapping": false,
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  },
  {
    "id": "48defb7d-8139-482f-9390-6246a8974bef",
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
    "id": "9d09de04-32d3-4adf-8618-1ac946a61f1a",
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
    "id": "c6594328-dafe-4f0d-8d25-febafeca8b0d",
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
    "id": "63991fc4-290c-4058-8f24-1ff714dd1e97",
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
    "id": "49918c24-e48f-4691-af56-5ee5ae91d50e",
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
    "isInvalidMapping": false,
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  },
  {
    "id": "a17188aa-96fc-429f-aa8e-00e4a2dd2bd6",
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
    "unidadeNegocio": "VERA CRUZ - SERINGAL",
    "isInvalidMapping": true,
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  }
];
