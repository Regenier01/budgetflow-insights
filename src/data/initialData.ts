import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "da273dc8-7a99-4387-a105-422f59f8da50",
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
    "id": "6802c5a9-f28a-4de0-bbc8-13b25370b68e",
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
    "id": "f0bca010-559f-47d2-ab2e-631169e41512",
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
    "id": "94d346fd-2a82-473b-8131-c1a427ed73b3",
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
    "id": "e2f6009b-36b9-47c4-a4f8-f794e9c1f843",
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
      "2026-04": 5000
    }
  },
  {
    "id": "dde2624d-b395-470d-b4b8-4750587a6bbc",
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
      "2026-04": 60000
    }
  },
  {
    "id": "562cebe7-8b99-4dfc-bd11-8d5068891fb6",
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
    "id": "d807f791-657b-4b55-be3d-f0ccd776a971",
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
    "id": "3ee1eb84-4da2-4671-b542-068795aedeb9",
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
    "id": "ddf20b18-7765-4863-93ac-f8719e9404a3",
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
    "id": "6daea1f3-3521-4c00-80d4-47a7d1c3cfa0",
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
      "2026-04": 1000
    }
  },
  {
    "id": "93333009-94d5-46bf-bc04-54af8509abaa",
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
      "2026-04": 4000
    }
  }
];
