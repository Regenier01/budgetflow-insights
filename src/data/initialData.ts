import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "5e00f84c-91aa-4e09-bd2d-64d40c591522",
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
    "id": "ffb63094-bf07-4b70-b7d4-b1c0cb7c78bd",
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
    "id": "3a00f912-49e0-44d9-9e02-6b089c0b89f2",
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
    "id": "301c1651-f19c-4946-89d2-deed70376725",
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
    "id": "6d9046cf-29a8-4e62-8673-3c0e3c3679b8",
    "codigo": "3.1.01.01.0003",
    "descricao": "VENDA DE TOUROS REPRODUTORES",
    "tipo": "R",
    "codigoPai": "3.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COMERCIALIZACAO DE TOUROS",
    "centroCusto": "COMERCIALIZA€AO DE TOUROS",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabilN9": "3.1.01.01-VENDA DE PRODUTOS ANIMAIS",
    "nomeProduto": "TOUROS",
    "divisao": "PECUÁRIA",
    "unidadeNegocio": null,
    "isInvalidMapping": false,
    "orcado": {},
    "realizado": {
      "2026-02": -28000
    }
  },
  {
    "id": "seringal-root-id",
    "codigo": "3.1.02.03",
    "descricao": "RECEITAS DE SERINGAL",
    "tipo": "R",
    "codigoPai": "3.1.02",
    "nivel": 4,
    "atividade": "SERINGAL",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "seringal-receita-id",
    "codigo": "3.1.02.03.0001",
    "descricao": "VENDA DE BORRACHA",
    "tipo": "R",
    "codigoPai": "3.1.02.03",
    "nivel": 5,
    "atividade": "SERINGAL",
    "departamento": "BANDEIRANTES SERINGAL",
    "centroCusto": "RATEIO SERINGAL",
    "coligada": "18-OL LATEX LTDA",
    "grupoContabilN9": "3.1.02.03-VENDA DE PRODUTOS VEGETAIS",
    "nomeProduto": "BORRACHA",
    "divisao": "SERINGAL",
    "unidadeNegocio": "VERA CRUZ - SERINGAL",
    "isInvalidMapping": false,
    "orcado": {},
    "realizado": {
      "2026-04": 15000
    }
  },
  {
    "id": "895b9cb8-ae18-493d-8baa-e65d4a1cbb36",
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
    "id": "892557e1-c95d-41e2-a7ec-0f505b5cc904",
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
    "id": "135be50f-a78d-4d56-bd59-515d27281069",
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
    "id": "282fcf09-18fd-4373-8063-1583e3ef9378",
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
    "id": "5fdd41f0-a055-46fa-bcd8-07dfafb0f8ef",
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
    "id": "c3e4b203-33f6-4650-8f04-b25555210b3a",
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
    "id": "afe45afe-a7a9-48a8-b048-870328044ee8",
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
    "id": "dddee887-dbdd-4e15-b659-e7a75c97f7ff",
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
    "id": "be7b1b28-726c-4a68-9349-e2703da726e9",
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
    "id": "560b3469-3565-4f0f-9252-7979cafaca31",
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
    "id": "e957fdb9-38ae-4e19-8472-5bbe81dc2cba",
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