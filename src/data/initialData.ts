import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "10e5e511-a99c-44c1-8745-f0a86542aded",
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
    "id": "7a59594b-10b0-4a7f-a34c-9ec74dbd3519",
    "codigo": "4",
    "descricao": "4",
    "tipo": "C",
    "codigoPai": null,
    "nivel": 1,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "c433f243-0ace-45f4-8f83-7d775ae1c03d",
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
    "id": "866fb831-ec35-4dec-bd81-ce7c6412a1cf",
    "codigo": "4.1",
    "descricao": "4.1",
    "tipo": "C",
    "codigoPai": "4",
    "nivel": 2,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "be43ac1b-3a59-4592-80e6-5ed423eed199",
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
    "id": "800b7cc6-f5f4-4b64-ae1d-c1452258dd76",
    "codigo": "4.1.01",
    "descricao": "4.1.01",
    "tipo": "C",
    "codigoPai": "4.1",
    "nivel": 3,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "c16bf3af-3445-4637-b08b-5c01f5a6f0ae",
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
    "id": "07f7a7f6-9929-44cb-aa4a-56a2dc7dd4f2",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIARIA - VIAGEM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2187.63
    }
  },
  {
    "id": "2b5bff01-1266-48cb-aa62-9682a87f23bf",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6662
    }
  },
  {
    "id": "ca593e62-87d1-4dd1-a9de-1aa2dc88df3f",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CONDOMINIO CAPELINHA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -230
    }
  },
  {
    "id": "b2ad15cb-2f3d-4e7f-9b78-2e5b4113477c",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIARIA - VIAGEM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 287
    }
  },
  {
    "id": "0d9e3f27-4a57-48a7-ba7a-db451512eef8",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2999.61
    }
  },
  {
    "id": "35208c91-dfe5-4d56-8f3a-f84ca0a5cf43",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GRATIFICACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 916.58
    }
  },
  {
    "id": "4276b446-a7d8-4e48-8064-4e075cf0d52b",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1732.68
    }
  },
  {
    "id": "2b4f6a77-83e6-4f11-9262-b4c770295017",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ASSIDUIDADE/VALOR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 145
    }
  },
  {
    "id": "81037778-769a-4629-8992-5b6b1637ec80",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GRATIFICACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2089.09
    }
  },
  {
    "id": "ac8c482b-70f5-4a93-b26b-3e7bc7a1506e",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6358.03
    }
  },
  {
    "id": "6e6ad7d6-ee8f-4995-b5d3-5a242852f6f2",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CONDOMINIO CAPELINHA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -230
    }
  },
  {
    "id": "44e9dddd-7d58-45f4-8881-0b29989520e0",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FALTAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -57.76
    }
  },
  {
    "id": "e30916fb-4d86-4efb-b34c-636440237fc0",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIARIA - VIAGEM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 24654.32
    }
  },
  {
    "id": "2d45fb6f-d0f0-4121-9e0e-54f8fb23413a",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 60422.57
    }
  },
  {
    "id": "b0971a87-2dad-41a6-abb4-0501d45fcc8d",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DESCONTO - AVISO PREVIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -3205.68
    }
  },
  {
    "id": "db178615-109d-4904-b89a-dcbcfad02031",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GRATIFICACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14307.699999999999
    }
  },
  {
    "id": "f80382d3-5405-4055-8574-c56ede04ca82",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ADICIONAL NOTURNO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.53
    }
  },
  {
    "id": "216b9822-5fde-4d0d-ac9b-597adf4c927f",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PERICULOSIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 576.92
    }
  },
  {
    "id": "ca290950-d828-49c6-9b6e-6d1c4d3bf697",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIARIA - VIAGEM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10538.85
    }
  },
  {
    "id": "9a50a151-ad7d-4f80-bd19-52db6a0ae038",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SAIDA ANTECIPADA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -31.5
    }
  },
  {
    "id": "a470d845-fcac-40b5-b69a-01e8d225f082",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PERICULOSIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 576.92
    }
  },
  {
    "id": "d2ada9ed-cfbc-455c-a6e6-4d5ac738faef",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59176.92
    }
  },
  {
    "id": "7b22563e-581a-4b04-8a69-9003a4bb7731",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BONIFICACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 240.75
    }
  },
  {
    "id": "e59533bc-0d20-4f3e-9452-52ce9ad18a4d",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GRATIFICACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9786.54
    }
  },
  {
    "id": "c1fb00ba-35c0-4783-b15f-7250a9382aa5",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIARIA - VIAGEM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1185.54
    }
  },
  {
    "id": "3256dfbe-3c4f-4225-9dce-f57291ff8ad3",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GRATIFICACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2089.01
    }
  },
  {
    "id": "b8c64d87-c553-4665-abd8-529e9d9c7159",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7342.9
    }
  },
  {
    "id": "e04baf71-b3c6-4712-b8d0-2dc1f8ec7e06",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIAS TRABALHADOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 71696.26000000001
    }
  },
  {
    "id": "173f0db2-7f58-40ad-80c4-f09ad2bb8655",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ADICIONAL NOTURNO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 493.56
    }
  },
  {
    "id": "93ca61f7-f91c-4679-b854-d0c49a72e2fc",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "GRATIFICACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14579.62
    }
  },
  {
    "id": "6c5331ab-7c3d-44da-8299-3c98d83d94b3",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PERICULOSIDADE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3407.04
    }
  },
  {
    "id": "34a2a5fc-64e9-4c09-b5c3-b404b2ceeac4",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIARIA - VIAGEM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4560.72
    }
  },
  {
    "id": "31ec6e8f-bed7-43e6-80de-084d45b6ff7c",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SAIDA ANTECIPADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -169.79999999999998
    }
  },
  {
    "id": "0a60be49-691c-4bab-a536-6b27e3d87be1",
    "codigo": "4.1.01.01.0001",
    "descricao": "SALARIOS E ORDENADOS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ASSIDUIDADE/VALOR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1053.67
    }
  },
  {
    "id": "703c79d7-e3f4-4e60-a740-0ed43a049972",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 194.2
    }
  },
  {
    "id": "38f61927-1ce1-4880-9d66-d800d851f70b",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 953.72
    }
  },
  {
    "id": "ab19d0f8-6f0c-4052-a032-dee08038d520",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9960
    }
  },
  {
    "id": "7434bc39-83a7-41ce-b2b2-5cfa73b242cb",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2082.6
    }
  },
  {
    "id": "98e6aad5-4785-4e32-a561-4ba56bbc0062",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA100%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 935.79
    }
  },
  {
    "id": "471da63f-4369-4b52-97f9-c0c816b33247",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1640.3400000000001
    }
  },
  {
    "id": "aaeaafac-f704-4efb-9edc-05c682e737f1",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA100%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1029.96
    }
  },
  {
    "id": "9a96032c-16dd-445b-a371-f97a1d1922a3",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7330.92
    }
  },
  {
    "id": "eed562e6-38b4-4e19-a052-1ea35f2d0009",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1315.37
    }
  },
  {
    "id": "1d8b5c17-661b-4ef8-becd-c54df63ff2d0",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA100%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 142.7
    }
  },
  {
    "id": "ffa3c4de-9781-4578-a6e7-665d0c020a7b",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 280.39
    }
  },
  {
    "id": "0bf369c5-5b05-4f99-9972-172b82f57901",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 649.55
    }
  },
  {
    "id": "cf0e8334-979d-4663-99f8-8941a754916d",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 569.18
    }
  },
  {
    "id": "516db4b8-fba4-4b39-9f2e-e82ba415f92d",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 109.46
    }
  },
  {
    "id": "8abcce59-49da-4795-b3e6-6ce9916b0490",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 124.91
    }
  },
  {
    "id": "35a584b1-4666-4df9-a357-769643b6f041",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 240.92
    }
  },
  {
    "id": "ee389562-aab9-40fd-8c22-d82aae05bb77",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46.33
    }
  },
  {
    "id": "288a30e5-cb9c-4931-bbb6-7aa5c1cd4008",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - HORA EXTRA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2069.81
    }
  },
  {
    "id": "b582ffa9-73e0-43e5-8852-d27349dd1162",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA 50%",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9313.179999999998
    }
  },
  {
    "id": "85fe2905-62e9-4755-b98b-e73aeae055d0",
    "codigo": "4.1.01.01.0002",
    "descricao": "HORAS EXTRAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "HORA EXTRA100%",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1211.79
    }
  },
  {
    "id": "ead07c82-3a8d-46e5-a008-dea5c445c2e0",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CARGO DE CONFIANCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1586.53
    }
  },
  {
    "id": "e4915619-2bf2-44fe-997d-bfd922bde7ca",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CARGO DE CONFIANCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8398.470000000001
    }
  },
  {
    "id": "898f06dd-5d81-46be-b69a-28bee1b495d3",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPOSIÇÃO CARGO DE CONFIANÇA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1067.88
    }
  },
  {
    "id": "11cb6400-8db5-4bf8-b313-4af9bde4b9da",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "COMISSAO - HORIMETRO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 616.82
    }
  },
  {
    "id": "fcdc4dff-0228-4bb6-8fdb-34ec04a51df0",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "D.S.R. - COMISSOES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 102.8
    }
  },
  {
    "id": "54303f09-2f0a-4312-9af4-4e27cba1f5e0",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CARGO DE CONFIANCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5399.92
    }
  },
  {
    "id": "ca76f19f-7009-4c88-bfea-1e5a20ac657a",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CARGO DE CONFIANCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1331.79
    }
  },
  {
    "id": "8d611904-a0d2-4f3f-af7c-7637845594b0",
    "codigo": "4.1.01.01.0004",
    "descricao": "COMISSOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CARGO DE CONFIANCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7354.3
    }
  },
  {
    "id": "52a11a50-6747-460e-94ce-285f0c829c11",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1253.28
    }
  },
  {
    "id": "caeadd8d-967a-4170-a1ed-dfd5864e93ee",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10097.83
    }
  },
  {
    "id": "50eb1b2a-6014-418e-bee0-500de3f3392e",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11707.460000000001
    }
  },
  {
    "id": "4f551039-d9bc-46c9-b086-7952a6675100",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1318.33
    }
  },
  {
    "id": "7144ef45-df3f-46c4-8613-877540d1f657",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 374.9
    }
  },
  {
    "id": "4c240733-d676-47e3-a578-fb67c6bdbd16",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1326.82
    }
  },
  {
    "id": "6f5f0583-a460-4881-8473-55f32c9be682",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 382.55
    }
  },
  {
    "id": "8463d2da-ab78-4f95-8a04-2e57d3dba9c2",
    "codigo": "4.1.01.01.0005",
    "descricao": "FERIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16787.6
    }
  },
  {
    "id": "7fed8f13-20cf-43a0-8834-0160815ac82c",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 709.44
    }
  },
  {
    "id": "0a9a7320-85db-47af-afcd-1a4ccaefb1eb",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 306.52
    }
  },
  {
    "id": "1fe28972-34e0-4963-9b21-5e9552bc8896",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 285.31
    }
  },
  {
    "id": "5b73b637-0c3d-47e9-8840-0575ece62d25",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8499.42
    }
  },
  {
    "id": "b8eeb0ea-f91e-4d62-b154-2b1d8e0fa6d5",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 860.88
    }
  },
  {
    "id": "d5caa589-a474-40b9-838e-c08e272a35b4",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7498.08
    }
  },
  {
    "id": "7796d6ef-d733-42ff-8e22-153d882796c2",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 992.64
    }
  },
  {
    "id": "25f19aef-12ad-4181-8625-640f9dfdd338",
    "codigo": "4.1.01.01.0006",
    "descricao": "13o SALARIO",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10122.23
    }
  },
  {
    "id": "353142bf-83c5-46c3-a080-eaecd1d5b50e",
    "codigo": "4.1.01.01.0007",
    "descricao": "INDENIZACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5001.82
    }
  },
  {
    "id": "e54f86bf-11bb-4b1a-bdfe-c5f0c5430e22",
    "codigo": "4.1.01.01.0007",
    "descricao": "INDENIZACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AVISO PREVIO - INDENIZADO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3194.24
    }
  },
  {
    "id": "89ae8160-8150-4f1d-8ec6-21b2867924e8",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BIOFENAC SPRAY",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 41.81
    }
  },
  {
    "id": "7f31b5a1-466c-495b-97fd-a6ce3d4ddbc6",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "2-08-30 - PARAFUSO INTERFERENCIA 8X30MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 129.37
    }
  },
  {
    "id": "4a234fb0-7000-4868-b4b4-de3163614ddf",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "REPARO PARA SERINGA ROPPINER 30 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46.65
    }
  },
  {
    "id": "283c2c8d-a7bb-40cc-a244-415f08b9a8bc",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DIPIRONA 500MG 25X10CPR MARI",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10.9
    }
  },
  {
    "id": "c3e6f4a6-33e3-42e6-ae31-f1b77e866869",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "NAPROXENO 500MG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 25.9
    }
  },
  {
    "id": "6e825e8f-d74e-41fd-9d5a-0870e1848998",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "NEOCOFLAN 11.6MG AEROSOL 85ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32.9
    }
  },
  {
    "id": "473eb477-4db6-40b3-ae13-a5a53711e013",
    "codigo": "4.1.01.01.0008",
    "descricao": "ASSISTENCIA MEDICA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "LUVA PARA PROCEDIMENTO CIRURGICO TAMANHO (G)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 288
    }
  },
  {
    "id": "e146ab8d-9d4c-4449-90bf-1132d8d8157e",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 136.83
    }
  },
  {
    "id": "67aa5bd7-ed11-4b44-b38d-a5a0bd38fe80",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 151.03
    }
  },
  {
    "id": "834dcbdd-d174-497c-a755-4384bb63a2e2",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18.96
    }
  },
  {
    "id": "b27e201b-af64-47a6-938d-2d090f268504",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.020000000000001
    }
  },
  {
    "id": "291d8b75-dfab-40d0-a092-0cff3f612fcc",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.57
    }
  },
  {
    "id": "d5e22cb3-3c87-45e7-9b2a-ea6287d13115",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.42
    }
  },
  {
    "id": "4235f22c-6b30-4168-aff6-7454a50af923",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5.92
    }
  },
  {
    "id": "64750d5e-9bfb-4693-b4ba-c2f678b678c3",
    "codigo": "4.1.01.01.0009",
    "descricao": "SEGURO DE VIDA",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "SEGURO VIDA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 188.04999999999998
    }
  },
  {
    "id": "142bd26c-e486-4e97-ab5f-90497b530e1a",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 67.01
    }
  },
  {
    "id": "151cf6d3-cd53-4ba6-8e19-a5190a4815f1",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 241.23
    }
  },
  {
    "id": "79b354d4-6d93-4fd2-9854-55b2abf7bc65",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1675.24
    }
  },
  {
    "id": "96f58669-7665-4e67-8e51-72e2ad58c268",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 335.05
    }
  },
  {
    "id": "f96b194d-c77b-43c3-a5c4-ea1de709d59e",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 268.04
    }
  },
  {
    "id": "c0fbe0c9-945a-4405-a532-4031a3db5f35",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2378.84
    }
  },
  {
    "id": "cc0a4ccb-6337-4a57-8efb-8a1bb82fa5f5",
    "codigo": "4.1.01.01.0010",
    "descricao": "PLANO DE SAUDE",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PLANO PLAMHEG PAGA PELA EMPRESA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5380.910000000001
    }
  },
  {
    "id": "63bda1cc-7575-4bdc-ae81-823d9ac67917",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 93.08
    }
  },
  {
    "id": "af10b82b-d2ab-4b48-bfc6-7087ce230b78",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 25055
    }
  },
  {
    "id": "4d10a033-8450-43bf-ae9d-14d1a5c11f54",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2862.42
    }
  },
  {
    "id": "50cbc878-01c8-4883-a0d4-9e3a72478e08",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2123.78
    }
  },
  {
    "id": "1c55e794-06ba-4f2a-a9a8-874115e6ba1b",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO FERIAS ENCARGOS INSS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1289.14
    }
  },
  {
    "id": "8b316ed6-4a80-4300-9655-8e27c6e9f512",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENCARGOS INSS 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -9.3
    }
  },
  {
    "id": "2475e4f4-2ae7-498c-87a1-74b3707c51ad",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2410.12
    }
  },
  {
    "id": "726ea68c-4643-48f1-8f0d-1ae4060bfe26",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3321.6
    }
  },
  {
    "id": "bc726030-4f9e-4cb2-aa51-9f46af4f0543",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26710.350000000002
    }
  },
  {
    "id": "00091439-84c2-4f58-9e99-fd7a5d76b712",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENCARGOS INSS 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -13.28
    }
  },
  {
    "id": "701d2e49-0344-49dc-ac1b-bbfd23f870b8",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO FERIAS ENCARGOS INSS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -1237.83
    }
  },
  {
    "id": "8c631420-e02b-4563-ab0d-8174ddfe2b82",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1968.95
    }
  },
  {
    "id": "25735840-43af-4505-b2be-bab6ac9332b8",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS - I.N.S.S. (2,7%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -1026.32
    }
  },
  {
    "id": "bce8b135-6837-405d-a6d2-25151e00ce74",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 279.92
    }
  },
  {
    "id": "1acaf2c2-3506-4c2b-b4d5-fd4df783d318",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 353.42
    }
  },
  {
    "id": "6267ff4a-c2b2-4670-ac7f-92e40143c5f7",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 229.27
    }
  },
  {
    "id": "e6f0e563-c26b-436c-8277-da16e33ee6eb",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3359.08
    }
  },
  {
    "id": "2e4c0a3e-9510-47db-8519-15719390f9b4",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO FERIAS ENCARGOS INSS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  },
  {
    "id": "d8e26902-c93f-49f0-8428-2d6db35b1955",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 371.78
    }
  },
  {
    "id": "c23a7ba0-a075-4419-bcbc-b4e68268725e",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2913.23
    }
  },
  {
    "id": "bb8ec9a2-cd86-484f-80d2-6401a1d47c94",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 61.27
    }
  },
  {
    "id": "65ddb098-334e-47be-bc7d-84676f47c3af",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO FERIAS ENCARGOS INSS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -0.01
    }
  },
  {
    "id": "5572aee6-a849-4058-af6d-a551ef1e5ae8",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 242.77
    }
  },
  {
    "id": "ec48b9e0-2c3a-4208-8735-16e0317ab656",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENCARGOS INSS 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.01
    }
  },
  {
    "id": "809d6f91-7703-4dc5-977f-5cc889fecd04",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS - I.N.S.S. (2,7%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -1470.85
    }
  },
  {
    "id": "ba5c1d8c-ce2c-4d82-a2ff-534885b17c7b",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 374.17
    }
  },
  {
    "id": "16eafa10-0182-4b19-94c4-785705d7edb1",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 200.59
    }
  },
  {
    "id": "8dbcabac-3d6c-469d-a17c-68c1ffbea75a",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2407.09
    }
  },
  {
    "id": "0e202d66-45f2-4fe3-9160-b72fdce94adc",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50.62
    }
  },
  {
    "id": "b71c87fd-bbce-4467-ad05-138811102b92",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 80.46
    }
  },
  {
    "id": "3088477f-9afd-4f29-832f-b6faeff48324",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 105.72
    }
  },
  {
    "id": "8db68620-7db0-4d76-9822-051406f45134",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENCARGOS INSS 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -0.53
    }
  },
  {
    "id": "5145ddb7-11d2-42ab-88f4-56cf81931193",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1037.27
    }
  },
  {
    "id": "8447a1ee-c528-4343-afd8-68beb6601989",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -55.17
    }
  },
  {
    "id": "15876b58-ab0d-4545-af9a-cf6498f2b3e7",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENCARGOS INSS 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -0.01
    }
  },
  {
    "id": "d481665c-c42d-45ed-9c04-7db97f1e6513",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO FERIAS ENCARGOS INSS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -0.01
    }
  },
  {
    "id": "e8457f18-b821-4942-a7d5-b75197b09124",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 86.44
    }
  },
  {
    "id": "182b2de7-8828-4f5b-96fe-39b1d4e66d70",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 107.88
    }
  },
  {
    "id": "08bd9251-56b2-43c2-b692-8dbe347a963f",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -0.34
    }
  },
  {
    "id": "49feb8b5-6836-4b6e-abd3-22bae253fb4c",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 965.49
    }
  },
  {
    "id": "2ecd38eb-4949-45ec-a7b4-9ad017d9cc08",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "I.N.S.S. - FOLHA PAGAMENTO (5,2%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 31304.68
    }
  },
  {
    "id": "8428f6e3-4c95-46c6-a8ca-b215c9286f24",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - I.N.S.S. (2,7%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2854.4700000000003
    }
  },
  {
    "id": "57886780-f3a3-4a4c-ae56-763d4c70638d",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTE PROVISAO FERIAS ENCARGOS INSS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -20.169999999999845
    }
  },
  {
    "id": "76226bf1-8bd6-411d-b450-adc6d06f33b8",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENCARGOS INSS 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -64.97
    }
  },
  {
    "id": "e026b434-d581-4563-9578-58c514985daf",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4741.71
    }
  },
  {
    "id": "9b0edc24-4548-4ae9-9fa5-47808fe97a33",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO FERIAS - I.N.S.S. (2,7%)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -2142.27
    }
  },
  {
    "id": "30157ad0-1cfb-4d28-9396-80524c2d8f4f",
    "codigo": "4.1.01.01.0030",
    "descricao": "ENCARGOS INSS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "FAP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 705.9499999999999
    }
  },
  {
    "id": "91af7f49-0fa2-4753-9246-0f8b39cb736a",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 24.52
    }
  },
  {
    "id": "83c8d49f-1802-48ce-81e2-ba800abb277d",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30.6
    }
  },
  {
    "id": "65e0dcfc-624d-4432-8a93-a621cb7a1f2b",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 294.26
    }
  },
  {
    "id": "8ff750c1-e437-48f5-908f-ead61e7cf86d",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56.75
    }
  },
  {
    "id": "c76294f0-e1f1-40c5-bb43-a026c3b08d48",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 106.15
    }
  },
  {
    "id": "83add285-9b55-461c-9c61-fb60ccea250e",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 273.9
    }
  },
  {
    "id": "330b7e53-2e4d-4e81-a677-fcfc333c57df",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.82
    }
  },
  {
    "id": "a2a0c5b7-fe07-44e7-87c5-dd61e74a2ecd",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 29.99
    }
  },
  {
    "id": "cb4ad587-f07b-4755-9470-2d81c85d7026",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 682.86
    }
  },
  {
    "id": "9be97bbe-340b-4523-b9d4-035eebad7231",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 679.9599999999999
    }
  },
  {
    "id": "30895247-92ae-4197-af36-9b2a92378bf6",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -417.26
    }
  },
  {
    "id": "ddf988c2-e9b4-4ce0-8866-7aed3124638c",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENC FGTS 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -119.04
    }
  },
  {
    "id": "12093200-afbd-4a64-b200-07ca08cfd79a",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 936.6
    }
  },
  {
    "id": "70cf0e5c-b97a-4ceb-ad99-9566e862e0b6",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7560.9
    }
  },
  {
    "id": "bf298228-235f-4767-8f1c-3a50cb80844b",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 68.88
    }
  },
  {
    "id": "c0daf34d-5423-4786-a00a-9d7c5d2d93d1",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 105.47
    }
  },
  {
    "id": "447118a8-1fad-4ddb-b501-e6dde5bbf013",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENC FGTS 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -0.01
    }
  },
  {
    "id": "4f8be26e-b27b-4e0d-87e0-63ab50c4a04e",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROVISAO ENCARGOS FERIAS FGTS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -0.01
    }
  },
  {
    "id": "ad8775f4-f05b-4690-95d8-9df1cdb67138",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 826.44
    }
  },
  {
    "id": "62408063-771a-47e1-9425-8f967ce56214",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 79.42
    }
  },
  {
    "id": "ac983815-4a74-46f1-98b8-050e18c0aaa0",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 100.26
    }
  },
  {
    "id": "a001c32d-34f2-46f5-a2b0-1bb9ab11c254",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROVISAO ENCARGOS FERIAS FGTS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0
    }
  },
  {
    "id": "6e6f999b-97d9-4051-b3de-6b8df26f05fc",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 952.93
    }
  },
  {
    "id": "396816c5-6372-4e6d-bce7-cb62531d44ae",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -291.15
    }
  },
  {
    "id": "9ff91f24-0d49-4ee1-8da9-3403a8c2864e",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROVISAO ENCARGOS FERIAS FGTS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -345.46
    }
  },
  {
    "id": "b07f3354-2f99-437f-ade8-7113d4a4cdf5",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 807.8
    }
  },
  {
    "id": "bbb74111-bd61-4439-961e-a9ab9905ccc9",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 599.83
    }
  },
  {
    "id": "2564d8e1-0208-44de-9312-37392875c10e",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENC FGTS 13 SALARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.019999999999999997
    }
  },
  {
    "id": "0c811320-d282-4dd9-980d-bbfafb27f42a",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7107.77
    }
  },
  {
    "id": "a6dab8f6-65b0-4173-9854-4ba2d3f50de0",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROVISAO ENCARGOS FERIAS FGTS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 369.95
    }
  },
  {
    "id": "444a844a-815d-4b56-bc5c-d06caf349d4f",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ENCARGOS FGTS  039251",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 135.45999999999998
    }
  },
  {
    "id": "79ceb5e7-460d-44fb-a53a-e8721c849d6f",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "F.G.T.S. - FOLHA PAGAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8873.8
    }
  },
  {
    "id": "c9b7839c-709c-4c81-9a16-ec820f0190b9",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROVISAO ENCARGOS FERIAS FGTS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -3.580000000000041
    }
  },
  {
    "id": "01d8395d-056b-4b14-a6db-1d412a1a3153",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "DEDUCAO 13º REF A LIC MATERNIDADE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -607.74
    }
  },
  {
    "id": "b6477de3-fc7a-468d-b2cc-020f3d739908",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "AJUSTES PROV ENC FGTS 13 SALARIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": -73.66999999999999
    }
  },
  {
    "id": "86c98348-51c5-4a7c-a0eb-c52ccc0a5a55",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "PROVISAO 13 SALARIO - F.G.T.S.",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 809.78
    }
  },
  {
    "id": "f9908a7f-5300-467a-a9d0-82d1ed700508",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "BAIXA INSS ABONO FERIAS 2,7% FERIAS MES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1124.78
    }
  },
  {
    "id": "5cb70a5f-d5ab-4758-9a86-473cd5f879c2",
    "codigo": "4.1.01.01.0031",
    "descricao": "ENCARGOS FGTS",
    "tipo": "C",
    "codigoPai": "4.1.01.01",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.01-CUSTO DE PESSOAL",
    "nomeProduto": "ENCARGOS FGTS  039251",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2780
    }
  },
  {
    "id": "68158d9e-bc60-41a6-ad14-2c37fb8e73d5",
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
    "id": "b3b28155-b03c-463b-b529-499882692493",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 34135.46
    }
  },
  {
    "id": "1046a8c9-2214-4273-8399-a7c0c2bd9cad",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 39528.82
    }
  },
  {
    "id": "7bfd406c-b65d-4f97-b7fa-979b7855a09b",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19311.6
    }
  },
  {
    "id": "e108d7de-3a5a-460b-8a0c-b58b285f29c1",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1220.58
    }
  },
  {
    "id": "18ccbf18-ab38-4139-bd67-b1d30f5dc39a",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 626.7
    }
  },
  {
    "id": "1392e911-4b55-42d2-8ffc-ab51e2b68668",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE MANUTENCAO DE CERCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20322.550000000003
    }
  },
  {
    "id": "9cb9b218-5089-4253-8080-d7c994a674b2",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE PERICIA, AUDITORIA E ANALISE TECNICA - PRODUÇÃO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32090.640000000003
    }
  },
  {
    "id": "bf40ce97-fbdc-4613-ab9a-14e1099b1a24",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSTRUCOES E EDIFICACOES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9470
    }
  },
  {
    "id": "bca16cde-30f0-4a94-b10e-a9a3267c0534",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSTRUCOES E EDIFICACOES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30469.75
    }
  },
  {
    "id": "d0ec56e3-d1f2-4ea4-a637-78ba49321df0",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSTRUCOES E EDIFICACOES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1625
    }
  },
  {
    "id": "5d6dd12b-4517-4db4-9461-07dcc476ffd6",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12597.41
    }
  },
  {
    "id": "afcf419a-2caa-4452-beb4-f48620f5c9bd",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2440.91
    }
  },
  {
    "id": "ad1350cf-6bfa-40ee-b5aa-037daa7c6f13",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE REPRESENTACAO COMERCIAL / COMISSOES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8863.43
    }
  },
  {
    "id": "cf128137-0657-4b26-8ab6-a6f2b415b505",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 41828.34
    }
  },
  {
    "id": "5fc3086e-094f-486b-9e54-33707b2ad181",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "EXAMES OCUPACIONAIS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1142.75
    }
  },
  {
    "id": "6348499d-8238-4762-821c-4fb48214418f",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "EXAMES OCUPACIONAIS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 81.25
    }
  },
  {
    "id": "26fa68a3-c911-4742-b1d0-d3f63b89d2ff",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE SEGURANCA EM INFORMARTICA, BACKUP E OUTROS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 250
    }
  },
  {
    "id": "fe531954-8112-4b69-82b2-737fe02db7d8",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 81.68
    }
  },
  {
    "id": "a099ad34-6637-4eea-8f2e-1ab9e29ce91a",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40.84
    }
  },
  {
    "id": "928eca74-e435-4225-bbfd-cf61d4bdbb8c",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40.84
    }
  },
  {
    "id": "d3925adb-2a9f-4459-aac9-0eeb2b390a09",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40.84
    }
  },
  {
    "id": "6e6b64fb-b5e6-4a31-844e-44404baefc2a",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40.84
    }
  },
  {
    "id": "81965453-e807-4074-b153-da07830511e4",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40.84
    }
  },
  {
    "id": "32386afc-58c1-45a0-acb7-19b76bd41103",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS VETERINARIOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28712.18
    }
  },
  {
    "id": "71043d91-4a72-4ee9-970e-8f84207e5893",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE ACESSORIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1038.83
    }
  },
  {
    "id": "bcf3f733-2d1b-4ff5-8820-16138d47aab9",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE ACESSORIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 436.31
    }
  },
  {
    "id": "298477c9-d7b7-4229-863f-8f6e82a93c0f",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE ACESSORIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 244.13
    }
  },
  {
    "id": "0f808c20-f5c3-4da7-ac15-ea949fbde739",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE SEGURANCA EM INFORMARTICA, BACKUP E OUTROS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 500
    }
  },
  {
    "id": "fd04f910-6e35-49bc-b8ad-f92d6d021c70",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS MANUTENCAO GERAL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30
    }
  },
  {
    "id": "289e5b47-e009-4aaa-990c-38f075a226d5",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 290.22
    }
  },
  {
    "id": "23908488-c32d-4f55-987d-a7d492029acb",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE MANUTENCAO DE CERCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5635.57
    }
  },
  {
    "id": "723a278e-61fa-42d3-9456-569e38f70b1e",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE REPRESENTACAO COMERCIAL / COMISSOES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5039.35
    }
  },
  {
    "id": "c25c19d0-5144-4be1-a9ae-9838284e28a1",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "REGISTRO DEFINITIVO PA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 24675.3
    }
  },
  {
    "id": "686a64b8-5d77-465f-996c-58f0296f3bfd",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 34
    }
  },
  {
    "id": "fc32ab53-98a9-426c-ba15-69590d64b263",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE MANUTENCAO DE MOVEIS E UTENSILIOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1815
    }
  },
  {
    "id": "ba99b298-d28e-4236-8efb-9432aa40ade4",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE ASSISTENCIA SOCIAL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1479.67
    }
  },
  {
    "id": "b52feb8e-77c4-4c08-a819-4c3281df2cbb",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6599.57
    }
  },
  {
    "id": "032365c4-fb65-4ec1-a357-01efdd7d5ef0",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12458.45
    }
  },
  {
    "id": "21af4892-5033-4adb-a994-aa9ea93bde99",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE GADO",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE GADO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 117651.14999999998
    }
  },
  {
    "id": "06cfabec-6030-4c70-be2b-4d145ae8457b",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE INSUMOS",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE INSUMOS",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2309.68
    }
  },
  {
    "id": "c6749e27-aacf-4038-9058-31f5e73d8a8b",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE GADO",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE GADO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4018.41
    }
  },
  {
    "id": "9fecc1e4-ae93-4e20-894c-14c2944ba0b4",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "MANUTENCAO SISTEMA IRRIGACAO - CUSTO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2027-01": 1996.5
    }
  },
  {
    "id": "6189826c-5233-42af-b27f-3528b903c965",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 161451.57000000004
    }
  },
  {
    "id": "a53d1aa9-0c9d-460d-b809-421b72b9970d",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSULTORIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11864.75
    }
  },
  {
    "id": "a4d6f55f-d3cb-4009-a583-639ea20043ae",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS MANUTENCAO GERAL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1155.63
    }
  },
  {
    "id": "cc88bfc8-4042-4e38-bb1c-e257d70dafe2",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE DEDETIZACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1090
    }
  },
  {
    "id": "af1734fe-9fa3-40db-ad5f-74fda5fdf016",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE REPRESENTACAO COMERCIAL / COMISSOES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13274.91
    }
  },
  {
    "id": "3cab6ff6-f9f2-4ec1-a687-f87bb655a1e4",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE MANUTENCAO DE CERCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6043.9400000000005
    }
  },
  {
    "id": "fe5f7155-3354-4efb-b370-423150be1c6b",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE CONSTRUCOES E EDIFICACOES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28505
    }
  },
  {
    "id": "96136a7a-1380-4782-b2c8-77f1b85ef0df",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE MANUTENCAO DE MOVEIS E UTENSILIOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3248.85
    }
  },
  {
    "id": "aba9e370-27d1-4bbe-9b49-6432dca690b9",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13494.189999999999
    }
  },
  {
    "id": "57506521-3d2e-46ea-a4ea-d1a9acfe35bd",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE ACESSORIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1625.78
    }
  },
  {
    "id": "15addb5a-16fb-4056-8b8b-90e2f08ac949",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE SEGURANCA EM INFORMARTICA, BACKUP E OUTROS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15852.73
    }
  },
  {
    "id": "9bcbfa0c-23be-41b9-9dd3-0fe7dc8a5b5e",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE PERICIA, AUDITORIA E ANALISE TECNICA - PRODUÇÃO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26771.25
    }
  },
  {
    "id": "f410d210-5c1f-48ff-ba88-a6287700a1fc",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "EXAMES OCUPACIONAIS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 509.25
    }
  },
  {
    "id": "588cc898-b447-45fb-b948-b25ee7b77283",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 149.74
    }
  },
  {
    "id": "d874f504-7a9a-4cb6-9678-a6b98e55c489",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15869.76
    }
  },
  {
    "id": "27617bb1-18a8-4e2a-ba37-79a515ff0682",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5640.11
    }
  },
  {
    "id": "9bcbec83-168c-4801-92b0-ef708ac4fa67",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 126923.57
    }
  },
  {
    "id": "52099645-7729-424c-a6c3-0e51c84f27f3",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9804.48
    }
  },
  {
    "id": "a7a68e0a-0bff-4be3-9f37-ecf1ae284714",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20767.23
    }
  },
  {
    "id": "8f78fe1e-0466-4c9b-83e6-dc63d7f6b699",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE INSUMOS",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE INSUMOS",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 150545.08
    }
  },
  {
    "id": "d6f96112-0777-422c-88dc-87c7ce6ec025",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE GADO",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE GADO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 25057.89
    }
  },
  {
    "id": "44ff9d9a-a53c-4740-8bb3-6857fa367a86",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 17186.18
    }
  },
  {
    "id": "6eb5af6a-bcbc-4eec-9627-15f4ddc5f34f",
    "codigo": "4.1.01.02.0009",
    "descricao": "HONORARIOS ESTAGIARIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "BOLSA COMPLEM. EDUCACIONAL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3781.24
    }
  },
  {
    "id": "f2084bcd-f63d-4d28-a021-186df9e149af",
    "codigo": "4.1.01.02.0012",
    "descricao": "COMISSOES E CORRETAGENS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "COMISSOES 000006",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2286
    }
  },
  {
    "id": "7d21adf6-5115-45de-b96c-e973f17fb3e5",
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
    "id": "d11e0eae-4a32-41cd-bff6-12c57d392dd7",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESENGRIPANTE SPRAY 300 ml",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 95.28999999999999
    }
  },
  {
    "id": "fa3d242e-9eca-4ef0-809e-62407b2f0b40",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESENGRIPANTE SPRAY 300 ml",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.51
    }
  },
  {
    "id": "363fff6b-e9d7-48fb-beb8-6fb9e7e013fa",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GASOLINA COMUM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 74.73
    }
  },
  {
    "id": "39d50954-b301-4717-bbdc-7c852338f720",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO LUBRIF SAE 30 API TC FR 500ML 2T",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 51.2
    }
  },
  {
    "id": "756b58c1-cf8a-417b-8323-f1a21241bc2d",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GAS LIQUEFEITO PETROLEO (GLP) 13KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 105
    }
  },
  {
    "id": "418d0367-e90d-4a16-82e2-559b6c5b8564",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GAS LIQUEFEITO PETROLEO (GLP) 13KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 105
    }
  },
  {
    "id": "55f1fc8e-2a1e-41f3-a193-7177c6ebdd1e",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GASOLINA COMUM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1450.6
    }
  },
  {
    "id": "bc2143ef-5b54-4bee-b8bd-53ad765d617e",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GAS LIQUEFEITO PETROLEO (GLP) 13KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 262.5
    }
  },
  {
    "id": "46c2e4b7-6c96-4513-a232-21a183f095de",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GASOLINA COMUM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 612.49
    }
  },
  {
    "id": "dad51c1b-e8c1-434d-b0df-a125a4d579eb",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 723.98
    }
  },
  {
    "id": "a80a111f-399a-40b9-98f2-696717f4e623",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 992.11
    }
  },
  {
    "id": "1ebfc81b-7a07-49ae-82cd-e77703a89d56",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S10 CLASSE B 8% BIODIESEL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1308
    }
  },
  {
    "id": "a30c7024-8684-4e22-b798-315978bd2bb4",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3970.2
    }
  },
  {
    "id": "159380db-4c02-4def-8193-b9bc4dcfae52",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21447.199999999997
    }
  },
  {
    "id": "4a81f32b-3167-48c5-b7da-b4c36efa30d3",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GASOLINA COMUM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 310.25000000000006
    }
  },
  {
    "id": "516e9dc7-6dc8-4291-838f-f9fdf11e82ef",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESENGRIPANTE SPRAY 300 ml",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.22
    }
  },
  {
    "id": "378986ab-e5af-401b-a548-172972aa4ce1",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO LUBRIF SAE 30 API TC FR 500ML 2T",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 49.3
    }
  },
  {
    "id": "71719df4-8f31-4dac-b5a9-c0e6cbd2621e",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO LUBRIF SAE 15W40 API CI-4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30.18
    }
  },
  {
    "id": "4f978086-fc45-4ab8-bb18-ef378307473d",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50254.409999999996
    }
  },
  {
    "id": "e0fb01f3-447f-4d7a-a287-697ba64c0583",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2617.45
    }
  },
  {
    "id": "21590c9a-a270-4f5e-ae14-d487d3a19404",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO CHIP CAB CHATA 4,0X12 MDF",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.28
    }
  },
  {
    "id": "2b1a77e1-b42f-4dc9-a092-13275c514830",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA 1/4",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.45
    }
  },
  {
    "id": "6ee6f790-d847-4ee6-aca8-4a28bdf42c17",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEX NC D 1/4",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.45
    }
  },
  {
    "id": "c26db210-cf77-4505-a4d7-2e8a33e27e5c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA AC SEXT DPL ESP M18X1,50 CL10 D51 KOMATSU",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.45
    }
  },
  {
    "id": "b129bac2-bb13-407c-90ed-da527bddb2ab",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXT BICROMATIZADA CLASSE 6 M3 MA 0,5",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.68
    }
  },
  {
    "id": "7d59e709-c2bf-4c1f-bfad-9ed6436de8b3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO CHIP FHILIPS/CHATA 4,0X40",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.82
    }
  },
  {
    "id": "13451baa-9fa4-445a-97e3-365161a0e96c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA AUTO TRAV MA 08",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.9
    }
  },
  {
    "id": "d9a19d96-3d7b-4616-b316-f260485b33c9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA 5/16 POLIDA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.9
    }
  },
  {
    "id": "eddeedc7-c120-4d75-8b5b-10ec1cd276af",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "179914-PARAFUSO P/ VASO BUCHA S-10 75MM PAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.2
    }
  },
  {
    "id": "5c4fe144-61e8-47a6-92ce-d54f8f268b84",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SEXTAVADO ACO MA 6X20",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.82
    }
  },
  {
    "id": "7e6bf847-b1eb-49b1-9069-374abb3f42bf",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA AF 3/8 B 2MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.27
    }
  },
  {
    "id": "2490d841-fa09-4e25-8b15-76adf16e26ed",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO ALLEN SEM CABECA SEXTAVADO INTERNO 5/16 X 3/4 FIO 18",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.98
    }
  },
  {
    "id": "848e15c6-b3ea-40dc-a708-cdde5151f36b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TAMPA COM DIAFRAGMA PULVERIZADOR COSTAL JACTO 120527",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.72
    }
  },
  {
    "id": "506f63d7-c69e-456d-82e1-17b57f8b78f8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO 8X30",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.95
    }
  },
  {
    "id": "5df4086b-0dec-4227-9475-61b482e1921f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 3/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28.2
    }
  },
  {
    "id": "ec3f1a5a-af92-4e8f-8a5f-ce76037d8997",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXT TRAV  NC 3/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.17
    }
  },
  {
    "id": "79028ed6-f862-4674-877b-e09ec4d9c2f8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNC 16F 3/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4
    }
  },
  {
    "id": "142f01dc-65cf-4cff-9851-11dd66e03eda",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX PARLOCK ALTA 8.8 UNC 18F 5/16",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5
    }
  },
  {
    "id": "43fa2448-37c3-4340-980e-c0941f6d0d89",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 5/16",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6
    }
  },
  {
    "id": "d067c2e4-de1c-4bf0-9a64-68478240de27",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESCOVA DE ACO PINCEL ROCAST C 3/4",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.71
    }
  },
  {
    "id": "a01bdc69-4095-465d-9802-afeb89dc9b00",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "33047029-CENTRO DISTR. EMB.3/4 DISJ. PTA BR S/BAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.95
    }
  },
  {
    "id": "2e263c41-a998-42fd-a9e9-3f1ade18e473",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CAIXA DISJUNTOR 1 ELEMENTO BRANCO TAF",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.12
    }
  },
  {
    "id": "824d277e-095f-47c5-921a-3cec4d41223c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCAS SEXTAVADAS TRAVANTES 10MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.85
    }
  },
  {
    "id": "12a5c775-06d4-4669-b53b-0fad6de0f3cc",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX PARLOCK ALTA 8.8 UNC 16F 3/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "fe5b5869-eca0-4b73-8d0c-23b6f7980c3c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SEXTAVADO 10X30 ACO 8.8 FOSFATIZADO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.53
    }
  },
  {
    "id": "0f4dc90e-0bbc-4c83-a59a-39b80f52e181",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OXIGENIO INDUSTRIAL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10
    }
  },
  {
    "id": "abb1b930-a2fb-4ce6-bb8e-4080b845c2ac",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REPARO DA BOMBA JACTO 407088",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10.89
    }
  },
  {
    "id": "7331a967-069a-49aa-af6d-0f541b0109c9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALAVANCA JACTO 564021",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.34
    }
  },
  {
    "id": "af2a1784-b361-4199-b5a7-8b320b5b8aa3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FRANCES 3/8X7.1/2 ACO 5.8 POLIDO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.43
    }
  },
  {
    "id": "c056267f-e2aa-4cfb-9efa-bafa17af6152",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGULHA COMPLETA JACTO 944892",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.61
    }
  },
  {
    "id": "12fb9fba-6209-4668-8052-6efc4d168872",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BICO PARA BOMBA JACTO REGULAVEL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.61
    }
  },
  {
    "id": "be5621db-b253-4566-a060-aeb1ebbe35e4",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE 2 TELAS INOX 1.0MM 4.1/2X0,39X7/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.92
    }
  },
  {
    "id": "b2841834-d889-4484-8cfd-d780c2afe1f2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO DIAMANTE AZUL SERRA COM VIDEA 24 DENTES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14.7
    }
  },
  {
    "id": "98b30ef7-f017-4837-8c7f-fcba09596340",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA ISOLANTE 18MM X 20M 3M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.14
    }
  },
  {
    "id": "aa90cf82-e63c-4f9e-ac53-98c940ec748f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VALVULA BOMBA JP-150 JACTO 587378",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.34
    }
  },
  {
    "id": "06f4b6a6-2c0d-4e34-a0e5-639a24f641f6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VALVULA JACTO 534438",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.34
    }
  },
  {
    "id": "939390e7-3dec-47db-86d9-da4d5345f733",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BICO FINO 1/8 ACOPLADOR 4 GARRAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.74
    }
  },
  {
    "id": "567d17ba-327c-440e-8d0f-70d514ecd3f9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNC 16F 3/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.6
    }
  },
  {
    "id": "243dae60-3b79-42c0-bc02-3db0a66b9e5c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA CASTELO M18 PANTHER 920521822",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.78
    }
  },
  {
    "id": "b7dd1786-97f0-48b9-8d55-f4b679077011",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORPO REGULAGEM JACTO 346197",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.78
    }
  },
  {
    "id": "0fa2e348-eb8d-48cd-8a66-fed226d90f32",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FAIXA REFLETIVA LATERAL 50X305MM DIREITA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 17.45
    }
  },
  {
    "id": "2d2be8e8-2db1-4896-92ee-ef117de37e30",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FAIXA REFLETIVA LATERAL 50X305MM ESQUERDA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 17.45
    }
  },
  {
    "id": "ef9a41b9-36ac-4b2c-886b-b92832e60b66",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TAMPA JACTO 817395",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.05
    }
  },
  {
    "id": "9d984dd5-3106-4c6a-91df-d85b3d19f9af",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SX FL RP 10.9 MA 1,75 M12X100",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.52
    }
  },
  {
    "id": "5c1ce34c-563a-4f20-aa6e-16ef139adeb0",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PREGO 17X27",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.72
    }
  },
  {
    "id": "d84e344c-bf3f-4924-800b-65f25a624eea",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MANGUEIRA CRISTAL 3/4 TRANSPARENTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20.25
    }
  },
  {
    "id": "a9b63a00-be54-43e3-a634-204073e9d355",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPUMA EXPANSIVA 300ML KALA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21.09
    }
  },
  {
    "id": "bcdd5903-1f36-4461-8eb4-a27d0c5d32b3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO SOLDA 3,25MM AWS E 6013",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21.63
    }
  },
  {
    "id": "46b5746e-8f9d-46c6-82ba-5fac3ff5ba85",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOGO REPARO BOMBA JACTO 217133",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21.78
    }
  },
  {
    "id": "2f352a23-667b-4c32-ade8-6dcf3bc67d72",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TOMADA EXTERNA 2P+T 10A 250V BR C/ CAIXA SOBREPOR EXTERNA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.3
    }
  },
  {
    "id": "82dea514-45ed-464b-a9ed-c7ac02ddb490",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MANGUEIRA DO PULVERIZADOR JACTON",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 23.59
    }
  },
  {
    "id": "92e25fb5-a3c4-4039-8a28-fab043f12cb9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR SOLDAVEL CURTO 50MM X 1.1/2",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26.8
    }
  },
  {
    "id": "eceffde2-d63a-4aaf-b676-04d4402b13bc",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODOS DENVER 312 CROMO 3  25",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28.59
    }
  },
  {
    "id": "1a8fb561-f85a-4d45-8c06-66de2be6c497",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR 18F 5/16X5.1/2\"",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32.5
    }
  },
  {
    "id": "d6d0098f-99db-4727-beed-c69d16ac3a17",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALICATE UNIVERSAL 8  TRAMONTINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 35
    }
  },
  {
    "id": "94fc9ebe-f1d3-4232-8cf6-81466835a787",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "INTERRUPTOR INTERNO C/ 2 TOMADA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 36
    }
  },
  {
    "id": "f7310b92-b980-48ed-ad16-5c348adbc311",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA CONICA 9/16",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 37.8
    }
  },
  {
    "id": "1026a942-282a-433b-8d98-b8162d4e0214",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CINTA RESERVATORIO JACTO 997783",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 38.12
    }
  },
  {
    "id": "53112afb-d605-4d5d-8e44-aa8ef36124c6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA 3/4\" FERRO PL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 39
    }
  },
  {
    "id": "ef824bf7-d145-4f52-9872-5a12758e19ce",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 5/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 42
    }
  },
  {
    "id": "1b812152-2941-4201-9c8f-28b7aac5b436",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR 16F 3/8X6.1/2\"",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 53
    }
  },
  {
    "id": "ad6fa1fa-7c45-456e-9d0c-cd25afc63aed",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REGULADOR AUTOMATICO DE TENSAO AVR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59.89
    }
  },
  {
    "id": "56e47cbd-bd45-42a5-83bc-689c221c2c4d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO CRAVO REC 10.9 UNF 18F 9/16X2",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 67.63
    }
  },
  {
    "id": "92ebc5d4-83ab-4b24-97ac-fc2c01f85028",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CRUZETA CARDAM 30MM 042439",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 67.7
    }
  },
  {
    "id": "cccf8a6e-8fd9-4d9d-8f8a-b15d00364c74",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 69.6
    }
  },
  {
    "id": "6ff8fb01-693d-4d34-bb9b-1baeeeab8a64",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNC 11F 5/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 70
    }
  },
  {
    "id": "60cf783f-6872-4777-a963-5bf8d2c8c73a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA ZINCADA 3/4 UNC",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 70
    }
  },
  {
    "id": "8f18e6cf-0ac9-41f3-9821-4611dd7ee1fa",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 71.32
    }
  },
  {
    "id": "9a3d7b0f-6399-4cc8-9312-cc82ebee78d9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 3/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 75
    }
  },
  {
    "id": "7e72fddc-14a5-4829-9e03-7777d9c2db3f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TAMPA DA BOMBA 703140",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 75
    }
  },
  {
    "id": "562b4c19-58d1-41c4-93d8-88292dd4a787",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORTA ELETRODO SOLDAGEM 400A CARBOGRAFITE C1000",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 75.51
    }
  },
  {
    "id": "aeb97c10-713d-4a61-b196-70024bbc9c2f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 3/4X1M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 75.9
    }
  },
  {
    "id": "0b8526c9-cc30-4b77-93d8-2bb794084b25",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TERMINAL 1 FURO 1 COMPRESSAO 10MM2",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 79.2
    }
  },
  {
    "id": "10244bde-f32c-40ef-a475-388079e0d5c8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RACK DE 2 ELEMENTOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 80
    }
  },
  {
    "id": "504cebd8-11f2-4820-a7d1-19f39304f311",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA 1 X 1.1/2",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 85.35
    }
  },
  {
    "id": "0ea967f9-4717-4802-b765-32fabe093415",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO DORMER 10 MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 92.88
    }
  },
  {
    "id": "40e0fa93-3e07-43a1-a4d1-414f1918179a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 16F 3/8X1M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 632.4
    }
  },
  {
    "id": "adf2ec7d-e82b-4ce9-bc19-bf9fc342f145",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DIFUSOR AUTOMATICO GLADE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 99.64
    }
  },
  {
    "id": "b62943b6-2281-4d05-b53d-474d5b878471",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA CARDAN CC-14",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 110.17
    }
  },
  {
    "id": "bbb2d62e-3eaf-40db-ae82-04318df3c219",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CRUZETA CARDAN CC103/1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 113.61
    }
  },
  {
    "id": "09fd67c4-ce16-4234-ad54-4a8c96ac7c03",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CONE DA VALVULA MEPEL 969",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 113.85
    }
  },
  {
    "id": "dec754aa-462d-42a0-92e8-5fde22b3b6b4",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LENCOL SOLTEIRO C/ ELASTICO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 115.2
    }
  },
  {
    "id": "655d4bd8-80f2-458b-8799-3075ef0551d2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CABO ALUM DUPLEX 10MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 117.2
    }
  },
  {
    "id": "a0ef1df1-6e06-4d45-a52c-36e5f679994b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNC 16F 3/8",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 120
    }
  },
  {
    "id": "dcb919e2-7d99-4af5-942b-7f55abc88366",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORPO BOMBA CENTRIFUGA JACTO 703132",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 167.89
    }
  },
  {
    "id": "74ae00b0-5258-4251-a033-851417eb38bf",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 11F 5/8X1M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 169.5
    }
  },
  {
    "id": "83165eb3-5da6-462d-9bd0-8d1d1137dfe9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CABO FLEXIVEL 2,5 MM PRETO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 188
    }
  },
  {
    "id": "38803fad-28f8-494b-b4db-57543b1a6275",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESGUICHO MEPEL 1038-3",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 195.67
    }
  },
  {
    "id": "647f8e8a-3fdd-4778-9e79-e182150b4bec",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REFLETOR LED 100W 127/220V",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 212.4
    }
  },
  {
    "id": "536880de-6e2e-4130-b8b4-13e96e5f337a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LAMPADA LED 50W E27",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 218.4
    }
  },
  {
    "id": "db28e95b-eddf-42eb-9731-9ec7ed1d47ec",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORRENTE MOTO SERRA SIMPLES 3/8\" 42 DENTES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 640.69
    }
  },
  {
    "id": "577faea9-34f6-4d3b-b80d-ffac508859b7",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLAMENTO ESFERAS SKF 6206 2RS1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 257.16
    }
  },
  {
    "id": "fd9628a7-ed42-4ffc-b5ae-e9bf0b9ca051",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORRENTE MOTOSSERRA 36 DENTES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 333.78
    }
  },
  {
    "id": "2591dc80-9aeb-4786-a50d-6394e13dbfff",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LACO CAMPEIRO 12M CORDAVILLE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 368.28
    }
  },
  {
    "id": "872a0130-de7b-401b-8385-080010df2773",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LACO CAMPEIRO 12M CORDAVILLE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 369.62
    }
  },
  {
    "id": "1084b5b5-5dc5-42ce-8f13-6d483120b972",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO ANTIDESGASTE 8358 X 3,25",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 406.59
    }
  },
  {
    "id": "d7f9a208-ae3a-4190-93fe-044308f07c61",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REFLETOR LED 200W 127/220V",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 407.05
    }
  },
  {
    "id": "8dabb8ee-6344-4fe9-a2f1-c68d1102476c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 16F 3/8X1M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 427.5
    }
  },
  {
    "id": "c62da690-40f5-49e9-b12f-e29be4609662",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BATERIA AUTOMOTIVA 12V 60A",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 475
    }
  },
  {
    "id": "d161e87f-dace-4553-bb6a-4abae247406b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LENCOL CASAL C/ ELASTICO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 479.6
    }
  },
  {
    "id": "d0231236-02ad-4a83-b712-653dff9da5c8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABASTECEDOR JACTO 216226",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 526.35
    }
  },
  {
    "id": "690bc4ca-8918-4dd1-aebc-7db304466c9f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TURBINA JACTO 1157955",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 626.17
    }
  },
  {
    "id": "e04f6fba-8bbc-43d1-80bf-244e6ec900d1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VALVULA ESFERA REGISTRO 3 POL PN40",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 651.86
    }
  },
  {
    "id": "12327caa-6899-4ffa-93be-385caa949fe7",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 11F 5/8X1M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 734.8
    }
  },
  {
    "id": "e56aec75-6fbf-47ba-8a7d-065c314097c0",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VIROL PARA CAMA DE CASAL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 760
    }
  },
  {
    "id": "0c9c1334-e305-485e-a07a-8d1cbf8b2706",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO PVC IRR PN60 DN150 DEFOFO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 798.52
    }
  },
  {
    "id": "f38f2204-5ee5-4fb1-b138-404b9e6d1a41",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VALVULA REGULADORA 3 VIAS 206151",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1440
    }
  },
  {
    "id": "a3abe0b7-892a-45ee-a69a-e9817ce47146",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORDOALHA 7 FIOS ACO GALV SM 1/4",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1855
    }
  },
  {
    "id": "d4d5f78c-dbb5-4cfb-8e25-4b836facf65f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 3/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.4
    }
  },
  {
    "id": "f314c4cb-a6e0-4522-81fc-9d8da14ee539",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA LAT SEXT 1/4 13FIOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.57
    }
  },
  {
    "id": "97e0491f-7f44-495c-bc4d-19103c7eae14",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA INSULOK NYLON PRETA M3,5X280MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.44
    }
  },
  {
    "id": "3514658e-5c61-4b0f-a0c2-3e5d16fc9269",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA INSULOK NYLON PRETA 7,6X450MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 23.22
    }
  },
  {
    "id": "a7d42e9f-6986-4e11-b4e8-107e41ae2170",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SEXTAVADO 3/4 X 3",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1
    }
  },
  {
    "id": "aaca1430-a11f-486a-8584-9c682559750f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TEE L L 25MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.26
    }
  },
  {
    "id": "9e938bc3-aa47-489e-a7e6-a85cc1f5f694",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA INSULOK NYLON PRETA M4,8X300",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.0600000000000005
    }
  },
  {
    "id": "7ef96485-299a-4940-be96-cc8df79e5a48",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO CABECA FENDA RT 1/8X2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.43
    }
  },
  {
    "id": "a2040b6e-c5b4-4848-a0f6-1761a0cfbcf4",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SX 8.8 UNC 16F 3/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.6
    }
  },
  {
    "id": "9030b728-8350-4257-bd38-16e981bfa9ab",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXT FLANGE TORQUE M8 0202108801",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.9
    }
  },
  {
    "id": "a8823113-bcfd-4eb5-aea9-c30e2f4ebf1a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SOQUETE BAQUELITE COM RABICHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.94
    }
  },
  {
    "id": "afefd680-84b1-4996-a64c-b1bc228c4f2f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CURVA PVC 90° 3/4 CINZA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2
    }
  },
  {
    "id": "bdd1d771-dcbe-4fab-aff4-6129cb212ee7",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA 16MM TRAVANTE MA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2
    }
  },
  {
    "id": "b26641fe-a8a1-4f7f-a9b2-3ad6a0252967",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO COM PORCA MARCHESAN 0501047573",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.28
    }
  },
  {
    "id": "682d3948-c341-47e4-b0d7-396317dd5d19",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXT 5/8 008010008",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.85
    }
  },
  {
    "id": "e1936baa-300b-498d-be5b-715758807728",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR SOLDAVEL CURTO 50MM X 1.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.25
    }
  },
  {
    "id": "e1c46253-0d8b-4995-9d8c-ef1b2aeb2421",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRAVA DA SAIDA DE EMERGENCIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.8
    }
  },
  {
    "id": "e4b5b616-f9cb-4673-b796-2cf6c42d26c0",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PONTA BICO JACTO 005524-7",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5.23
    }
  },
  {
    "id": "9b472582-7541-41b8-b3b0-44def86b5a80",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPIGAO MACHO 1/4 ROSCA 1/4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5.27
    }
  },
  {
    "id": "e5d528e4-1bdf-48d3-addf-cf33c0a6201c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAP PVC TOP 1 BRANCO ACQUAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5.94
    }
  },
  {
    "id": "4568491d-f3bc-4e3a-902a-37d1c42cdfc0",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO  CHIP PHILIPS/CHATA 3,5X30",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.13
    }
  },
  {
    "id": "0a9a66f7-6174-4a06-b807-a772a6bef3b4",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LAMPADA LED TKL 20W 6500K E27 TASCHIBRA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14.62
    }
  },
  {
    "id": "94493204-ea9f-4898-8f1e-fa1c57966f25",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SOQUETE LAMPADA SIMPLES SEM RABICHO E27",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.56
    }
  },
  {
    "id": "0cda85ea-ed37-49e5-9b29-2bda92e45bfb",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CURVA 90°  PTA/BSA SOLD IRRIGA - LF 50 CB",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 24.21
    }
  },
  {
    "id": "55cf12df-c4c8-444e-9017-973ddabe10d0",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FRANCES 3/8 X 10''",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.27
    }
  },
  {
    "id": "844b62ef-134e-4043-9a25-570553e25d9b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA 3/16",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.88
    }
  },
  {
    "id": "746dac29-0a28-4146-9176-e64d620cebb1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA FECHADA CONDULETE TOP PVC 3/4\" CINZA TIGRE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.96
    }
  },
  {
    "id": "3250d14a-9ee4-447e-aea8-d6a12988dfe7",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 5/16X1M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10.02
    }
  },
  {
    "id": "aad40de3-d361-4072-9cc3-a59a7bf49989",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMATAO REDONDO 5,5X200MM STIHL 56057735506",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10.55
    }
  },
  {
    "id": "0fe447b7-9ef5-48a8-aec4-740f35b204eb",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PORCA SEXTAVADA 10MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.4
    }
  },
  {
    "id": "2a56e2f2-1db4-461b-8212-53988c353aba",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO SOLDA 3,25MM AWS E 6013",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 23.27
    }
  },
  {
    "id": "93d59d8b-4a13-4d1c-9a8a-e91deaf4054a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISJUNTOR UNIPOLAR 220V 10A",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12.28
    }
  },
  {
    "id": "ac67ef7f-7add-44f5-86f6-ccf42230cc91",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARRUELA LISA (I) 9/16\"",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.3
    }
  },
  {
    "id": "b8a93072-a904-48e4-940e-4543c71bcf7d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA PARA ROTULADOR 12MM X 0,47\"",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.33
    }
  },
  {
    "id": "308feecd-7b6d-48ad-ab11-c600930ddc0a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 16F 3/8X1M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46.739999999999995
    }
  },
  {
    "id": "2f423134-678f-4e79-b30a-9288f6e3286f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CAMARA AR 3.25-8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 17.35
    }
  },
  {
    "id": "b85f9f44-37bd-406b-a37b-4a8a9b7047eb",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "NIPLE DUPLO 3\" GALVANIZADO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18.62
    }
  },
  {
    "id": "0fc55582-ff0b-493c-8fd9-1316ccecb6e8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO FERRO 5/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18.88
    }
  },
  {
    "id": "c2ddc25c-2004-4382-9ffc-f0f6c0946055",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PRISIONEIRO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19
    }
  },
  {
    "id": "2aa714dc-d51c-4e47-8d2f-20887a887669",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA ISOLANTE PVC 0,18MM PT 19MMX20M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 62.42999999999999
    }
  },
  {
    "id": "89007ba3-869c-45e6-90af-ba8b655e3ba2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VENTILADOR 100 WEG 10016822",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.5
    }
  },
  {
    "id": "0e7a413d-1bfe-4c21-8ee5-a1a40da90395",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COLA PARABRISA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.69
    }
  },
  {
    "id": "6c1301d1-16d3-47ae-b0f6-b7a40cca3fc2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GRAMPO P/ CABO DE AÇO 3/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.8
    }
  },
  {
    "id": "c7c4830f-0f29-471f-9571-9fd3da939bef",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RETENTOR VEDACAO SABO 05093BRAGF",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 27.22
    }
  },
  {
    "id": "5cb6a18e-0040-40d1-ba70-33494b434e7a",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISJUNTOR TRIPOLAR 32A/220V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30.54
    }
  },
  {
    "id": "76c47d48-6998-475a-8acb-7a8bb8e1d219",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELET PVC TOP 1 BRANCO ACQUAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32.22
    }
  },
  {
    "id": "66afb5b6-8240-4e25-89f0-4e87a02702d6",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BOIA ELETRICA P/ CAIXA D'AGUA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.12
    }
  },
  {
    "id": "a1084797-5d83-488b-8e85-f93967c5ade3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLAMENTO 1209 C3",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.3
    }
  },
  {
    "id": "51ec580d-2f27-4eda-b676-89d7e905113c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "QUADRO DISTRIBUICAO DISJUNTORES PVC EXTERNO 6 ELEMENTOS S/ BARRAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 37.1
    }
  },
  {
    "id": "55980a03-c58e-4c41-b937-6b17b311fe4f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO CORTE INOX EHT 7X5/64X7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 233.92
    }
  },
  {
    "id": "39542b07-c82d-42a2-acf9-5da797fb8479",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO DESBASTE 7X1/4X7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 38.88
    }
  },
  {
    "id": "7cfb34e3-c53e-4ef4-b3d5-c66bb1d252f5",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA MANGOTE ACO CARBONO MSA FITA 32MM - 124 X 136",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 88.28
    }
  },
  {
    "id": "6d7654db-0127-46ea-98a3-d28fb3954577",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "22220 E/C3 SKF ROLAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 44.89
    }
  },
  {
    "id": "17fd9cf9-040f-41bf-ab07-4b1d975e85b2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADESIVO EPOXI 1KG SIKADUR-32",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46.28
    }
  },
  {
    "id": "15aab3f2-5607-4cad-a812-b01d5c17fb84",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CABO USB",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 47.02
    }
  },
  {
    "id": "9dba36c8-6def-4119-856a-3aaed8d2df98",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BROCA ACO RAPIDO DORMER 1/4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50.97
    }
  },
  {
    "id": "448c49ae-8f73-4604-bde5-44a3f392e5a9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAINEL LED LLUM SOB 24W 30X30 6500K",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 54.88
    }
  },
  {
    "id": "7a3489c1-d645-4a3a-b1d6-4939d1e74ed9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X4.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56.5
    }
  },
  {
    "id": "c5d34dfc-c3a1-42c3-9f4e-713d0e5026ee",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO DE SUBIDA 1\"",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56.6
    }
  },
  {
    "id": "0c0b8376-c34f-404f-baf8-2b3ad68f3905",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TOMADA SOBREPOR 3P+T 32A 380V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56.7
    }
  },
  {
    "id": "c9a8759a-a966-4bba-8ca6-1c4e645723b2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODUTO PVC CINZA 3/4 SEM ROSCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 72.31
    }
  },
  {
    "id": "3bedf855-4bcc-4c89-bed2-bb9ce5d70e57",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TAMPA DEFLETORA 100 WEG 10016835",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 77.4
    }
  },
  {
    "id": "bb64706a-d713-45e8-b316-cf3ccad9ebed",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISPENSER PARA COPO DESCARTAVEL 200ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 93.92
    }
  },
  {
    "id": "77df0c1a-d7e1-454d-8008-3c66e2e132c9",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RELE DE TEMPO 0 A 10MIN 220VCA COEL AE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 99
    }
  },
  {
    "id": "4bd77ec9-564b-4a25-9b1f-11d754f8b9ad",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TEE GALVANIZADO 1.1/2\"",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 101.32
    }
  },
  {
    "id": "9c86a014-4a8a-4010-98ef-72680c994a1e",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "NOTEBOOK",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 104.54
    }
  },
  {
    "id": "eb6919ee-7029-4ebd-a523-d3ef0f8371c7",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REFLETOR LED 300W 127/220V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 130.52
    }
  },
  {
    "id": "e772ef1e-1a38-49dc-a2d3-fb5049a254f2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "METALON 30X30 # 14X6000",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 137.2
    }
  },
  {
    "id": "60593fdd-c1c7-4d62-9d58-a6198dcc8ab3",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLAMENTO 6312 DDU",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 140.66
    }
  },
  {
    "id": "9c7914b5-d742-41e2-9ace-8cb96085454f",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FIO CABO 4X1 2MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 151.2
    }
  },
  {
    "id": "3bd43444-ea2d-4bcd-afdd-aec19a52110d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FIO CABO FLEX MT 10MM AZ LAMESA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 151.2
    }
  },
  {
    "id": "a54ce134-761e-4387-921f-80b6f917548d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LACO CAMPEIRO 10M CORDAVILLE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 455.46
    }
  },
  {
    "id": "92ad82c9-800e-489a-b8ec-c2cfc1c4785d",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA GALVANIZADA 2.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 154.96
    }
  },
  {
    "id": "81335b52-b16f-411f-b514-c1491c7f7080",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CARREGADOR DE CELULAR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 156
    }
  },
  {
    "id": "4002c496-c76e-4c6a-853c-4d5aaa983cc1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CABO FLEXIVEL 2,5 MM PRETO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 180.6
    }
  },
  {
    "id": "f3fedfc3-6682-45b3-885e-c0930a654319",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CABO FLEXIVEL 2,5 MM AZUL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 180.6
    }
  },
  {
    "id": "751aa16c-cd9c-4e35-8f37-38006b387cfe",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TAMPA TRASEIRA COMPLETA FIAT STRADA HARD WORKING 1.4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 216
    }
  },
  {
    "id": "6fb31af1-704f-4da5-a2d4-a753d9e44c31",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COTOVELO 90° GALVANIZADO 2.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 248
    }
  },
  {
    "id": "e5dd6e81-f66a-414d-a10e-d6d2c0ed79cb",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CANTONEIRA ABI SAE 1\"X1/4X6000",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 259.8
    }
  },
  {
    "id": "4e634777-231f-43e5-a07b-6b2000818625",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LAMPADA LED 70W E-27",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 272.48
    }
  },
  {
    "id": "243fdd1c-6b74-45b2-9fc7-8b7922d011cc",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROTOR BRONZE 134MM THEBE P-15",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 324
    }
  },
  {
    "id": "1d6792b6-9f93-4637-9994-b9ee6667144c",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LACO CAMPEIRO 12M CORDAVILLE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 339.04
    }
  },
  {
    "id": "84d7e2df-7357-4afd-839d-06f3a56d9bf8",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA DE SUCCAO LATAO P11 THEBE 01038",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 374.4
    }
  },
  {
    "id": "cc357143-2cdc-4a2a-9dad-455800bf7812",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BATERIA AUTOMOTIVA 12V 60A",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 475
    }
  },
  {
    "id": "c926d1be-4439-450e-8da3-22d68a2c78e2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CABO ELETRICO FLEXIVEL PP 4X6MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 784.8
    }
  },
  {
    "id": "74e7d428-ff85-4c51-8fd3-f117003325a4",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AP METALONS 2a 200X200",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 825.82
    }
  },
  {
    "id": "bdd19302-4502-41a9-81cf-305632c626d1",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LONA PLASTICA PRETA E BRANCA 18X50",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5200
    }
  },
  {
    "id": "37ecfb64-0bbe-4e4a-89bf-2c4d89882893",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "24245-S SUC DE TUBO DE CALDEIRA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7618.4
    }
  },
  {
    "id": "b2f0502a-792b-4e42-ae5d-23e0ca8157cd",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MANCO DE AMARU 2,80 X 18/20",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 340
    }
  },
  {
    "id": "4d4ecbf1-90c3-4aa7-858d-99efdfb05a68",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LASCA DE AMARU 2,20",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 930
    }
  },
  {
    "id": "dafa0e9f-0f1e-48ac-a67c-debe78fb1350",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BOIA METALICA ROSCA EXTERNA 1.1/2",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 309.2
    }
  },
  {
    "id": "292f93ad-f488-4944-9463-f8b8f9ea09d0",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA 4 MTS 25 X 3",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1600
    }
  },
  {
    "id": "3f96b11a-717f-402a-ba51-a6a3db878627",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLDANA DE PORCELANA 72X72 REF.2030",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32
    }
  },
  {
    "id": "3ce572a9-d482-4b27-b95e-ab53b694c8d6",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GRELHA QUAD INOX 15X15",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20
    }
  },
  {
    "id": "6e7cb456-1c9b-4972-9600-b7d7d112d8ba",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BRITA 0 - TON",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 102.05
    }
  },
  {
    "id": "e20e10ba-495f-4017-8d1a-7da2cf831d3e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AREIA NATURAL GROSSA LAVADA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 450
    }
  },
  {
    "id": "0e8abc2f-54e8-4b44-a267-dff871e7c410",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CIMENTO 50KG TODAS OBRAS TOCANTINS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 311.58
    }
  },
  {
    "id": "97c6ff23-4a13-4d37-8fec-329c57e4f568",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADESIVO PLAST P/ PVC 175G TIGRE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.25
    }
  },
  {
    "id": "54319070-8611-40b0-a53c-8a373f6564a4",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR INTERNO P/ MANGUEIRA ROSCA INT 1/2",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14.35
    }
  },
  {
    "id": "fc3d4bc2-9b7c-4a62-b9f5-857a75448b19",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PARAFUSO SEXTAVADO TELHA BRO 5,5X2 1/2\"",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20
    }
  },
  {
    "id": "ab7e7c56-54e0-4448-8c46-e3686b06644f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA PAREDE 6 C/ ANEL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.2
    }
  },
  {
    "id": "f178f80d-4e2b-4ef2-b4ea-03a9aaefd45a",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA P/TIJOLO FUR 06 C/ANEL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2
    }
  },
  {
    "id": "f5b48ca9-c2d6-40af-bde3-f8e59cc42b4d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADESIVO PLASTICO CPVC FR 175G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15
    }
  },
  {
    "id": "34bc59f3-7dc4-4dc7-93b6-93a1835fdb7f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO SOLDAVEL 25MM CLASSE A (BARRA) MAIS PVC",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 60
    }
  },
  {
    "id": "a277923b-d479-4072-a147-2c2c8504c2dd",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO DE ESGOTO 50MM \"A\"",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 100
    }
  },
  {
    "id": "d5efdfaa-e880-4d5c-b5b1-9613cbafcf0b",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TORNEIRA COZINHA PAREDE BICA MOVEL 3/4",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 135
    }
  },
  {
    "id": "6e437dbd-9cc6-477a-959f-947550816f5e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PIA PARA COZINHA DE FIBRA 1,50 X 50M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 175
    }
  },
  {
    "id": "b3f5815e-1517-4652-8bb8-ff35cf0ccb31",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TE SOLDAVEL 25MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2
    }
  },
  {
    "id": "a1139537-4280-46ef-8648-7e75dcaeba4e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REDUCAO SOLDAVEL PVC MR 40X25MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.6
    }
  },
  {
    "id": "714d0361-8b66-4ef3-8dfa-0ae72cb4f525",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOELHO SOLD 90 X 25MM KRONA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4
    }
  },
  {
    "id": "30b9725c-7ffe-499d-9acf-c9616f69d449",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VALVULA LAVAT/ TANQUE 7/8 BR KRONA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5.5
    }
  },
  {
    "id": "2946c55e-70dd-4ac0-a15d-739b1a80e511",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TORNEIRA PLÁSTICO P/ JARDIM C/BICO 1/2 PRETA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8
    }
  },
  {
    "id": "640e3b25-95d7-4d62-867a-45eb3a25b9b0",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SIFAO SANFONADO UNIV BLUKIT",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8
    }
  },
  {
    "id": "72312bcc-399b-4ace-a083-b617bd7d723f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TE SOLDAVEL 50MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "59b634c8-1046-4bd8-8247-d4189fbc5d9d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA VEDA ROSCA 18MM X 50M TIGRE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "78c37d27-7ce0-4bd3-9754-43ef0db410c8",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOELHO ESGOTO 50MMX90",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12.6
    }
  },
  {
    "id": "ef8325a2-9dda-42ea-a0f2-998fa189a6b3",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA LR B LATAO 25 X 1/2 KRONA FORTLEV",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12.6
    }
  },
  {
    "id": "bfd467e1-7a5f-4a4f-aa54-afd1726c446f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VIGOTA ANGELIM VERMELHO 11CMX5CMX4,5M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6900.5
    }
  },
  {
    "id": "16e3df6d-7ee5-4d45-9353-ea03828abf20",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TORNEIRA PVC LAVATORIO 1195 1/2 BCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 57.5
    }
  },
  {
    "id": "55dbc55b-dc6d-4644-aee2-72dae005a24f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LASCA DE AMARU 2,20",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3379
    }
  },
  {
    "id": "f4598956-0a3f-4483-94e9-962212289a78",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MANTA ASFALTICA ALUMINIZADA AUTO ADESIVA 30CM X 10MT",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59.99
    }
  },
  {
    "id": "27a6ff61-6496-40bd-a212-e3370ed48be9",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIXA MASSA FOLHA GRANA 060",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 75
    }
  },
  {
    "id": "ceda607a-5d61-47c2-839b-91671eeb9d63",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "THINNER 5 LITROS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 408
    }
  },
  {
    "id": "2ef51dca-bef2-4200-ad6b-4c76ec081556",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TINTA ESMALTE SINTETICO BRANCO GELO LT 3.600ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 90
    }
  },
  {
    "id": "ba22bcc8-759d-4048-90a2-e4127c816dd7",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ASSENTO SANITARIO ALMOFADADO OVAL BRANCO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 95
    }
  },
  {
    "id": "099d8363-63b3-432d-93e1-36bee5e7b843",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOELHO 90° PVC BRANCO ESGOTO 50MM NBR 5688",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6
    }
  },
  {
    "id": "1230d7d7-ca46-4284-9608-b0b1e74055dc",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARAME LISO BELGO Z-700",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1063.78
    }
  },
  {
    "id": "a7886d72-2877-4a38-b5ba-8ec67c112725",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOELHO 90° PVC MARROM SOLDAVEL 32MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 25
    }
  },
  {
    "id": "df361aa7-5663-4a41-8d7e-d64019a910c0",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CAIXA DE EMBUTIR PVC 4X2 RETANGULAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.24
    }
  },
  {
    "id": "0b5f35fc-3679-4983-abb2-bac0b7416c22",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PREGO 19X36",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 44.8
    }
  },
  {
    "id": "c737715f-ea07-40a8-b706-bc342d23e761",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REDUCAO ESGOTO 100MMX50MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12.8
    }
  },
  {
    "id": "03207a68-89ca-4a1c-b946-b1fa1d495da4",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRINCO DE PORTEIRA 3/4",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 80.34
    }
  },
  {
    "id": "f0103e40-070f-4fbd-bd77-b91544f5cb30",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CAIXA D'AGUA POLIETILENO 500L C/TAMPA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 223.33
    }
  },
  {
    "id": "40f87dbb-b829-4863-8443-003e7651783f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PINCEL ALL FLEX",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 39.43
    }
  },
  {
    "id": "953fc64c-bdf5-41f4-b1e1-def7e322abad",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VIGOTA ANGELIM VERMELHO 11CMX5CMX4,5M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 544.7
    }
  },
  {
    "id": "8a1d7d02-f620-4bb4-9004-68fee03ae26c",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA 3 MTS 15 X 3",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1106.4
    }
  },
  {
    "id": "beb8bdf8-e6be-4ecb-9664-5d558b74a523",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CAL HIDRATADO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1111.25
    }
  },
  {
    "id": "723b9c13-29fa-423c-91d0-ce1da06db481",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TELHA AMIANTO 3,66X1,10MX6MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1219.9
    }
  },
  {
    "id": "eeff3c7b-6b7e-4827-8128-3cb5df6ee46d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA 3 MTS 10 X 3",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1780.1
    }
  },
  {
    "id": "4a149710-e9c3-46e4-a16c-176eb5ce6a37",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO DE ESGOTO 150 MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 240
    }
  },
  {
    "id": "f960d8aa-7bba-4148-810f-c9c1003e79b6",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARAME RECOZIDO Nº 18",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 96
    }
  },
  {
    "id": "2eedc320-6f9d-46eb-bfa2-8a18b8cfe09b",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CAL HIDRATADO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 840.48
    }
  },
  {
    "id": "4d0a3475-0686-4e6a-a66f-4ca2a30ecc3d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA 2,20 MTS 10 X 3 CM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 975.84
    }
  },
  {
    "id": "4a98e6e2-6d0f-4857-a5c7-a86cc264b8f7",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DOBRADICA QUADRADA 140X140MM NR 3",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 309.92
    }
  },
  {
    "id": "5c2e4b3f-31e9-4833-9b53-e0da5dc8430a",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA 2,00 MT 3X10CM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 320
    }
  },
  {
    "id": "24fdebc2-a49f-4ebd-a9ff-1d4e91d98ce4",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA 2,50 MTS 3 X 10",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 541.53
    }
  },
  {
    "id": "252c74ff-2a09-46d9-b713-2760bd781854",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BARRA DE FERRO CA50 10MM 3/8 12 MTS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 780
    }
  },
  {
    "id": "1881b266-59a1-4ed5-98b2-7b34504ec8f2",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA 2,00 MT 3X15CM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1796.2
    }
  },
  {
    "id": "eeabd8ca-1813-43a1-aebe-7f0c223a85f2",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DOBRADICA QUADRADA 140X140MM NR 3",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 129.8
    }
  },
  {
    "id": "2d6c3724-2dfd-49c0-9722-9cd3ceaa5788",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PREGO COM CABECA LISO ACO POLIDO 19X36MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 29.16
    }
  },
  {
    "id": "7b5eee57-d86c-4be3-9a94-df76b8f4c772",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TELHA PLAN MOTA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 385
    }
  },
  {
    "id": "48d5b495-64aa-4549-aec9-96d63f26e1a4",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO PVC SOLDAVEL 25MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40.8
    }
  },
  {
    "id": "ae79ce07-4083-4b4f-bc30-c3a007e0611d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL PVC AZUL 50MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.9
    }
  },
  {
    "id": "24601037-9567-490f-b7f2-d9e0e4c1155b",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLO EM LA DE CARNEIRO 9CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 99.12
    }
  },
  {
    "id": "97bc34b7-80b3-4d60-874c-72141a9689e7",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BRITA 0 - TON",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1501.6399999999999
    }
  },
  {
    "id": "67fa0484-541f-4b7e-9137-5cc5081d27b9",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AREIA NATURAL GROSSA LAVADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3920
    }
  },
  {
    "id": "9a65380d-1b43-476a-b069-b6b4e9321f0a",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL PVC MARROM 32MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.9
    }
  },
  {
    "id": "2e467fd9-a237-45c7-a074-d78956d62d1e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL 32MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 17.88
    }
  },
  {
    "id": "f5bc3b14-4b6c-4393-b000-c92951a2e6f8",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR SOLDAVEL CURTO 32 X 1\" TIGRE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.299999999999999
    }
  },
  {
    "id": "3da8d84f-76ef-4f07-914b-518cd704de84",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA DE REDUCAO BB PN80 50X32 IRRIGA LF-VIQUA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 36.33
    }
  },
  {
    "id": "a0c2834e-44e0-4c3e-9912-cd0f43720018",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JOELHO 90° PVC AZUL 50MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.1
    }
  },
  {
    "id": "87ee864b-8491-4184-b816-01fc392a0238",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL PVC AZUL 32MMX1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.76
    }
  },
  {
    "id": "f9723f3a-446d-44a4-bbe6-f8cb530b91f9",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADESIVO PLASTICO CPVC FR 175G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 202.6
    }
  },
  {
    "id": "28957419-c61d-4bac-aed3-ea3d6efa9d60",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA CUMARU FERRO 5 MTS 14X4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3397.44
    }
  },
  {
    "id": "b17100ff-aea5-433c-b023-aa95911f00b5",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CIMENTO 50KG TODAS OBRAS TOCANTINS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10593.72
    }
  },
  {
    "id": "7dd50251-1acf-4737-bb2b-8841cad0002d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "MANCO DE AMARU 2,80 X 18/20",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 680
    }
  },
  {
    "id": "8c78fddd-840b-466e-9d1b-9a469eda35c0",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TABUA 4,5 MT 15 X 3 CUMARU",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2484.43
    }
  },
  {
    "id": "65c20e22-1bf7-4d14-8bc6-2037411cab9d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA SOLDAVEL PVC MARROM 50MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.68
    }
  },
  {
    "id": "974e8897-88d4-4ad6-8919-9ec8831649a5",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PREGO COM CABECA LISO ACO POLIDO 17X21MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 64.4
    }
  },
  {
    "id": "be51481b-7ca8-4cfc-9bf0-a70551b801e5",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA PVC SOLDAVEL MARRON COM ROSCA LR 50MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18.72
    }
  },
  {
    "id": "00394f28-a540-4d12-ad7c-fb89bb07192a",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO 50 SOLDAVEL PLASTUBOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 861
    }
  },
  {
    "id": "ab472bbc-8a63-4fb0-8083-9957e2d5b1b5",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO GALVANIZADO PARA AGUA 1.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 389.90000000000003
    }
  },
  {
    "id": "5e127d2b-4da1-4fcc-8d45-96926039e03d",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO GALVANIZADO PARA AGUA 3\"",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 630
    }
  },
  {
    "id": "f1a354d6-569e-491d-b1f1-9df7975bf74a",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA PLASTICA 6MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.19
    }
  },
  {
    "id": "2a50d5d3-0828-43ae-b228-1ec6e7f58507",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PRT-967P - SPDA- TAMPA PVC P/ CX INSP 300MM ADEEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.21
    }
  },
  {
    "id": "fb592aa9-f335-46b9-8f6a-df2219adff39",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ABRACADEIRA FECHADA CONDULETE TOP PVC 1 CINZA TIGRE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18.58
    }
  },
  {
    "id": "4920dbe0-fc63-4f2e-9671-d3904cb23409",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CURVA 45° ESGOTO PVC 100MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.52
    }
  },
  {
    "id": "c6115e78-31e5-4645-83dc-efa653fefeb2",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BUCHA P/TIJOLO C/ANEL N08 BRANCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.5
    }
  },
  {
    "id": "56e30ec2-f45e-4ce6-a711-42aa58a3e074",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VEDA ROSCA 18MMX50M TIGRE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.54
    }
  },
  {
    "id": "74879689-2592-4ca3-a9e6-fe2db13dbf93",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TELA REFORCADA PARA CONCRETO 4,2MM 2,45 X 6M 15 X 15 GERDAU",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1396.44
    }
  },
  {
    "id": "8a271018-bc24-4b52-89e7-b1c9a4589a87",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CONCRETO USINADO 25 MPA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16646
    }
  },
  {
    "id": "9aba0937-d3d5-44d7-ae31-a093176eabd0",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORANTE LIQUIDO XADREZ VERMELHO BISNAGA 50ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 653.04
    }
  },
  {
    "id": "aeff0006-6099-488e-8316-6f775a1cafb7",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ELETRODO 2 ESAB O.K 6013",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 44.95
    }
  },
  {
    "id": "ba9f77be-5a4b-4bee-97b7-5881c9a0560e",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "NIPEL GALVANIZADO 1.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59.97
    }
  },
  {
    "id": "c1c94ffc-4f22-4ec9-84ef-00e6ff2e9278",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA 1 C/ROSCA TIGRE BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21.09
    }
  },
  {
    "id": "e653811a-8d73-4cc9-80dc-3dce4d41ff4b",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PINCEL MEDIO CERDAS BRANCA CABO PLASTICO 1 1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.5
    }
  },
  {
    "id": "12780b32-20c7-4e8c-bb13-571ffcf2a1c5",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REGISTRO ESFERA PVC 32MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26.25
    }
  },
  {
    "id": "ad9e1756-cb58-4400-9e81-2adc7be2a112",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LUVA PVC SOLDAVEL MARRON COM ROSCA LR 32MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10.36
    }
  },
  {
    "id": "f7fd6c82-9cbb-422a-92cd-10242a9ae3df",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ADAPTADOR PARA MAGUEIRA METAL 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.55
    }
  },
  {
    "id": "11639bbf-cb71-4e0d-8694-019b660eb96c",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VERGALHAO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 202.4
    }
  },
  {
    "id": "02f89fa5-e0c0-43a2-ab77-dc3f2624fcc5",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO CALDEIRA 11/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1651
    }
  },
  {
    "id": "cb207cb1-ac00-4a32-b19e-2ea2eefb09a4",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TELHA CUMEEIRA CERAMICA REDONDA BRANCA  40X20CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 294
    }
  },
  {
    "id": "a02878d4-31fd-4086-84bd-5d457d72a4cd",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO CONCRETO 14X19X39CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 128.7
    }
  },
  {
    "id": "00e29460-c85e-43cc-bf86-5426ab98a511",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LASCA DE AMARU 2,20",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 279
    }
  },
  {
    "id": "790fb433-0054-4acc-b691-7c8dff57e437",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REGISTRO GAVETA METALICO 2.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 310
    }
  },
  {
    "id": "18547793-5072-4d81-a1b6-c1afc7a358db",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO PVC ROSCAVEL 1'' 4M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 146
    }
  },
  {
    "id": "19a9f5b3-8020-41eb-9dd5-05bf8b5f127b",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ARAME LISO BELGO Z-700",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 531.89
    }
  },
  {
    "id": "841f5111-48f2-4328-93d7-5309167dea38",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PREGO COM CABECA LISO ACO POLIDO 15X15MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14.43
    }
  },
  {
    "id": "23a119ac-e5fe-4293-bb03-5fb5ba964673",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TUBO PVC MR SN PBS 25MMX6M NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40
    }
  },
  {
    "id": "59ca3339-4051-4b67-9196-8771c7fdb516",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CANETA ESFEROGRAFICA 01 CRISTAL AZUL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40.5
    }
  },
  {
    "id": "ecaf9c94-4c30-46f7-9ff2-8b8e26df653d",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TESOURA SUPERCORT INOX 10\" TRAMONTINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 294
    }
  },
  {
    "id": "a2186559-e17e-4d08-9267-ab5bf39f5980",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL GRAMATURA 75G/M2 A4 (210X297MM)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.84
    }
  },
  {
    "id": "422f4149-573d-4c9f-973f-433ca354e79e",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BASTAO MARCADOR VERMELHO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26.28
    }
  },
  {
    "id": "4b688463-7735-4ab2-8916-7a4254cd174a",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA CREPE 48MM X 50M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 54
    }
  },
  {
    "id": "956742a1-29e3-4383-8bde-e798e02ba232",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO OS AGRICOLA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 98.07
    }
  },
  {
    "id": "bbd219ab-5f2c-402a-8211-8f900c55550c",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO RECIBO CANTINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 108.9
    }
  },
  {
    "id": "ebe66068-ece1-441b-9441-549830301353",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO RELATORIO DE VIAGEM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.87
    }
  },
  {
    "id": "fb818467-9dc4-43cb-b093-0e84b4f76134",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO CORRESPONDENCIA INTERNA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33
    }
  },
  {
    "id": "49f62167-5597-431b-bb69-8f2c8108ad89",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO OS VEICULOS LEVES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.3
    }
  },
  {
    "id": "459808d3-4fec-4ad5-bea4-422600c98a90",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO ABONO DE PONTO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 55
    }
  },
  {
    "id": "687ab70a-b316-4757-80dc-defcfbcbb897",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO ABASTECIMENTO FROTA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 58
    }
  },
  {
    "id": "1535feb2-b441-4220-8aae-209ec0fdeabf",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO RECIBO CANTINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 87.12
    }
  },
  {
    "id": "0508ef4d-2acf-4320-9aed-83d1cac64e70",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO OS AGRICOLA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 140.1
    }
  },
  {
    "id": "c3ab338c-a364-4cb5-be8d-f4b59062bbcc",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ENVELOPE GRANDE 24 X 34CM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 159.6
    }
  },
  {
    "id": "7c4160ee-520a-491d-a927-66081af3f3c1",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO DE SOLICITACAO COMPRAS 1 VIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.36
    }
  },
  {
    "id": "101ace32-10e0-43ac-944a-8e16c9a3f078",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO CONTROLE DE COLHEITA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 42.28
    }
  },
  {
    "id": "9ed3e547-9f57-4d93-ab26-40733c11cb91",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO OS AGRICOLA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 140.1
    }
  },
  {
    "id": "c3379fe9-8312-4476-b88d-61830c396f5b",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BASTAO MARCADOR VERMELHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 630.6999999999999
    }
  },
  {
    "id": "2b20df6a-675f-4b9a-84a3-f52029cce80f",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL GRAMATURA 75G/M2 A4 (210X297MM)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 65.94
    }
  },
  {
    "id": "182c101c-08c8-499b-a6df-c53d5a3913ca",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ENVELOPE MEDIO 20 X 28CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 84.7
    }
  },
  {
    "id": "be899652-b1c9-4e80-88f0-add5a2b2f75f",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ENVELOPE GRANDE 24 X 34CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 212.8
    }
  },
  {
    "id": "96b24e4c-d9a1-4484-8833-f0fa7feedfb5",
    "codigo": "4.1.01.04.0004",
    "descricao": "IMPRESSOS E MATERIAIS DE EXPEDIENTE",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "BLOCO OS AGRICOLA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 280.2
    }
  },
  {
    "id": "b1242e8b-575a-46a3-8c96-114611063f92",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26.400000000000002
    }
  },
  {
    "id": "0379e0c8-95f9-4db7-91a2-3e3600ae81ed",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 23.1
    }
  },
  {
    "id": "e67776cf-1c1d-4daa-af76-21ff8be53937",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.1
    }
  },
  {
    "id": "0a3bb952-915b-4f78-ae46-5079e5c56c9f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.1
    }
  },
  {
    "id": "d0b4a466-4222-4577-88ce-e6cbbea1082e",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.2
    }
  },
  {
    "id": "ae9032eb-35b3-4a04-a279-f9bd312a0aea",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.2
    }
  },
  {
    "id": "7d6d31e0-a0fa-4e8e-b3aa-6921a77a2bfc",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 60
    }
  },
  {
    "id": "b1f319fb-f601-4891-9265-a5953a9615e8",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 52.5
    }
  },
  {
    "id": "693e9001-3c25-48ca-8020-4b5bd919ee57",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.5
    }
  },
  {
    "id": "01ff44b1-6623-4470-b01a-4024069870bb",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.5
    }
  },
  {
    "id": "80acd82b-3df3-42e2-99a4-ae8512e7cb9a",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 67.19999999999999
    }
  },
  {
    "id": "bef8304e-6169-4aa7-bbdd-48ebe0991c86",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 58.8
    }
  },
  {
    "id": "ee7b530b-d758-4f8a-9e1e-289ab6f4507f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.8
    }
  },
  {
    "id": "66338244-1ca8-4fbc-919c-3dd57519c338",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.8
    }
  },
  {
    "id": "e3009170-0bbf-46c2-8153-c529b7985b0e",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 84
    }
  },
  {
    "id": "5fc6a6cf-381c-4c98-9e17-26d272c22ca6",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 84
    }
  },
  {
    "id": "70d6cd87-33d6-42ed-8c87-19d92b9cab9d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 73.5
    }
  },
  {
    "id": "583519ea-b300-46b3-b72b-dd4c371deb04",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 73.5
    }
  },
  {
    "id": "cea86b19-0786-46a4-871d-a636ba997828",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.5
    }
  },
  {
    "id": "c8006ebf-cfaa-4623-9beb-e08fc0b1b3c8",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.5
    }
  },
  {
    "id": "5ad2fa1e-ea0c-4b5d-a4f2-3c0983aa5574",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.5
    }
  },
  {
    "id": "24a50cc5-0f9e-4a61-8349-dede8ee36bd8",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.5
    }
  },
  {
    "id": "d82c3005-23c6-42b3-8a10-03149d732a0b",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 107.7
    }
  },
  {
    "id": "0b674117-4c93-473f-9ce2-b2fa79ddcd9e",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 100.80000000000001
    }
  },
  {
    "id": "3cdfac50-8f38-40fb-81df-83c7cf325c9b",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 122.7
    }
  },
  {
    "id": "3fc7f87f-8edd-48f6-9b78-fb71a264c74d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.2
    }
  },
  {
    "id": "ac0e0fe9-826b-4549-ab2a-c38ca145ac25",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.2
    }
  },
  {
    "id": "a4ec2df8-d15f-4e03-95a2-1e03638e3333",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.4
    }
  },
  {
    "id": "0b5942cd-1e0e-460a-9d6d-59436fb3f6b6",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 94.5
    }
  },
  {
    "id": "93aa9f15-9923-46a9-9f2f-69fabccdc1c4",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 457.2
    }
  },
  {
    "id": "671eda13-7cc0-4f04-a398-e1fe0e934e4a",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.5
    }
  },
  {
    "id": "2fbd1e73-ffe2-4e7f-a582-8edbe24b1d86",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.5
    }
  },
  {
    "id": "18b83986-ec5b-40da-a968-11e6949c3431",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.5
    }
  },
  {
    "id": "c7d59664-2aed-4dce-b0d9-6ee9ea946837",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.5
    }
  },
  {
    "id": "96d4fb83-8653-4db6-8c08-24683803d75d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5
    }
  },
  {
    "id": "530e9121-ded6-4adc-8278-8da8529235c3",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5
    }
  },
  {
    "id": "fa05cb33-bbb4-4ebb-863a-13b402dcf25d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5.6
    }
  },
  {
    "id": "cc2a3f86-2810-4a7f-a5c3-ce4d53d9a739",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5.6
    }
  },
  {
    "id": "a1ff128b-e462-4c65-9318-6be57093837b",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 109.4
    }
  },
  {
    "id": "effd6026-fe91-43d5-b4a9-0ff3d4072b31",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA PARA LIMPEZA DUPLA FACE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.7
    }
  },
  {
    "id": "fc5c9b97-1289-4b12-a417-c61337c99377",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7
    }
  },
  {
    "id": "b3be4bdd-bc03-4c61-afb1-3d4ee4a74a4d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7
    }
  },
  {
    "id": "854b3316-2d82-4c6b-b1e6-ee74b8ba9701",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7
    }
  },
  {
    "id": "65beae77-0a92-4a6a-89a1-ddf4c26902ef",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7
    }
  },
  {
    "id": "923b8529-e1c4-49b0-b549-8aee2bae4c80",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGUA SANITARIA Q-BOA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.37
    }
  },
  {
    "id": "bc093657-4ba1-4139-9b22-1f6bd6ce6952",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.4
    }
  },
  {
    "id": "740bf249-e05c-482e-b347-e70344325beb",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.4
    }
  },
  {
    "id": "221ca233-b400-451f-b6f3-bb6e9db1d10c",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "1cb8c3f7-9e4e-4cf0-990a-b61f07fedcf7",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "0b71de61-bd19-4190-a7eb-b1ea6daae842",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "86bfa7b4-f3db-4b67-8b19-f988837077d6",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "73eb7151-661e-4d75-ad20-8eceef2e5f3f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10
    }
  },
  {
    "id": "245cba96-d60c-4b28-95c8-9e0a3768e2a5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA LIMPEZA PELO CONDOR V9",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10.77
    }
  },
  {
    "id": "65a0e451-8f06-4fcd-bd81-caa00790cfe3",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.2
    }
  },
  {
    "id": "96640052-ea1b-4901-a188-110a36ae481f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMPA CONTATO SPRAY",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.27
    }
  },
  {
    "id": "8749bb84-c35d-4575-a643-c1fb0f3aa6f7",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CERA LIQUIDA VERMELHA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.98
    }
  },
  {
    "id": "17b666f0-53aa-4f7c-a8f5-ff0b0cfd49df",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14
    }
  },
  {
    "id": "30015709-b512-4ea2-b39e-ddb42266de6d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14
    }
  },
  {
    "id": "ab8462b9-436b-4ace-be13-433dfaca71dd",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESTOPA BRANCA PCT",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.36
    }
  },
  {
    "id": "f0193be4-c957-49f8-b9b8-3592a9b5ad53",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RODO MADEIRA BORRACHA SILICONE 50 CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.63
    }
  },
  {
    "id": "71ce7b17-8445-492e-8961-5d92308d65a5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.8
    }
  },
  {
    "id": "31f41fd6-3919-402c-9925-0a8e6bc20606",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA DE PALHA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 17.46
    }
  },
  {
    "id": "bd0ffa74-7284-4d60-9783-1fb6866cb440",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18
    }
  },
  {
    "id": "29d92741-b29e-4214-934b-99a5a7630c43",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18
    }
  },
  {
    "id": "1838f7a8-c5ee-4460-b075-85fe339fc318",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA PARA LIMPEZA DUPLA FACE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.2
    }
  },
  {
    "id": "c12b5061-b17a-460a-9525-0bf2f040246f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COADOR PARA LEITE COM TELA NYLON",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.97
    }
  },
  {
    "id": "692fbacd-e7bb-4e7a-b4ca-c7e3ba89f7e1",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA PARA VASO SANITARIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.04
    }
  },
  {
    "id": "2bc90852-ca70-4ca2-aaf9-c2a8d5acaf87",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DETERGENTE LIQUIDO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 24.4
    }
  },
  {
    "id": "f8ed9430-0a54-45ff-9660-5a6250195777",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CADEADO LT 35MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 29.63
    }
  },
  {
    "id": "8625ce0b-cf24-4339-8a04-2af52aa1b764",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGUA SANITARIA Q-BOA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 65.88
    }
  },
  {
    "id": "6f27e9aa-63ec-4c26-8936-1115bfc41270",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 5L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 42.2
    }
  },
  {
    "id": "1648f1eb-1a12-456c-81ce-e1ba49d97c21",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 43.4
    }
  },
  {
    "id": "13805063-6681-4e13-af5e-9a938981619e",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO P/ LIXO 30 LTS BOM LIXO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 48.1
    }
  },
  {
    "id": "99ecb288-f67e-4585-b45d-ee6c268726dd",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RODO MADEIRA 60 CM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 49.17
    }
  },
  {
    "id": "f3bc84df-69e0-4561-ab0e-8c70ba1756d6",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PANO DE CHAO MEGA PA NAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 54.45
    }
  },
  {
    "id": "8117283d-a0f8-4111-8eda-329889aa2ef3",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FITA PARA EMPACOTAMENTO TRANSPARENTE SCOTCH 3M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 62.25
    }
  },
  {
    "id": "6fc4bdd8-2d5c-4d73-a6d5-fedbbf9fa1f9",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGUA SANITARIA Q-BOA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 85.8
    }
  },
  {
    "id": "b81c3f88-be93-4453-bae4-37578569c987",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA TIPO GARI 60CMX1,40MT",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 89.46
    }
  },
  {
    "id": "ffc8aa49-1624-4ca5-8fe7-2ee75022c6e2",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALGICIDA MANUTENCAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 192
    }
  },
  {
    "id": "88741f63-204f-4291-b715-fe44cf30003e",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CLORO PARA PISCINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 197.5
    }
  },
  {
    "id": "c1ab5a85-de04-4aa8-9469-2981e1d2abb4",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COPO DESCARTAVEL 200ML TRANSPARENTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 210.5
    }
  },
  {
    "id": "08ff4920-65cc-4341-acb3-a3357aa61c86",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRAVESSEIRO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 252.8
    }
  },
  {
    "id": "115751d7-877f-4fee-94b3-3f73c4454c74",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FRONHA PARA TRAVESSEIRO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 270.36
    }
  },
  {
    "id": "0c013003-183f-49f6-8d7a-202207bfa85e",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TOALHA DE ROSTO BRANCA 30X45MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 308.5
    }
  },
  {
    "id": "7105e3d6-92ad-4e9c-87f4-f0ae8fc02c57",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COBERTOR MANTA MICROFIBRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 428.76
    }
  },
  {
    "id": "53a009c0-691a-489b-ab58-4122395175cb",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TOALHA DE BANHO BRANCA 90X150CM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 617.3
    }
  },
  {
    "id": "2b8f8acd-f4ae-4549-b133-9bd93fbc4d27",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA PARA LIMPEZA DUPLA FACE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10.899999999999999
    }
  },
  {
    "id": "93420ae5-743f-41db-837e-9e75151191e5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESTOPA MALHA COSTURADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21.11
    }
  },
  {
    "id": "d75336a6-09cb-4b4c-b3c4-cbdf629102ce",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DETERGENTE LIQUIDO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 61.50000000000001
    }
  },
  {
    "id": "13809354-0569-4a31-8be8-d4a39c8dd741",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMPA ALUMINIO 500ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.07
    }
  },
  {
    "id": "7626469c-175b-454c-928a-d733b118f63b",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGUA SANITARIA Q-BOA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.370000000000001
    }
  },
  {
    "id": "9f01592f-a184-44e4-85c3-666554964bc7",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COPO DESCARTAVEL 200ML TRANSPARENTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 254.62
    }
  },
  {
    "id": "8e601bc6-4d93-4abb-b0c5-3ebe71667e4d",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FLANELA LRJ 40X60 LIMPA LAR TEXTIL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14.32
    }
  },
  {
    "id": "04c02880-0ade-40eb-845c-950f1b49e7a2",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESTOPA BRANCA PCT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.3
    }
  },
  {
    "id": "7e8f58ba-f7b1-4474-9e89-558b9d52157f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 5L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 38.8
    }
  },
  {
    "id": "07171f1b-dbb6-4861-942d-1958f25ae0a7",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VEJA LIMPEZA PESADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.74
    }
  },
  {
    "id": "705ac539-8d15-4c69-9c36-8e69ebb0e551",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "COPO DESCARTAVEL 50ML TRANSPARENTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.8
    }
  },
  {
    "id": "ff846081-8f91-403c-a03d-68ccb310fec5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA LIMPEZA PELO CONDOR V9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.84
    }
  },
  {
    "id": "9f7fd834-0188-489a-8112-b8aa96b6aea1",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CHISPA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.95
    }
  },
  {
    "id": "27b09ce2-a2a1-4560-b2cb-db924e07bebb",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA DE PALHA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 41.400000000000006
    }
  },
  {
    "id": "a6879cd0-5313-484e-b965-bf4910cae41b",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO P/ LIXO 30 LTS BOM LIXO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 48
    }
  },
  {
    "id": "a73948db-2552-484e-80b4-00575f1eb2f5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PANO CHÃO 68X48 LIMPAR LAR ATOALHADO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 29.04
    }
  },
  {
    "id": "343c87aa-762d-4854-89e2-e5fd556c2f8f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "INSETICIDA AEROSOL BAYGON ACAO TOTAL 395ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15
    }
  },
  {
    "id": "b5876e72-0365-4780-a4ca-dc2002e02d91",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "RODO MADEIRA DUPLO 30CM C/CABO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.61
    }
  },
  {
    "id": "f4c94b12-ece1-4a38-a909-0f1c1f2b8def",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALCOOL 70% LT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.9
    }
  },
  {
    "id": "a731dd47-8c04-4032-a86e-b4f73e935241",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AGULHA PARA ALICATE BRINCADOR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.17
    }
  },
  {
    "id": "713e119d-5dfb-45e1-a396-0536e5b1ceb6",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PURIFICADOR BOM AR LAVANDA 360ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 64.2
    }
  },
  {
    "id": "0f9222ca-99af-443b-b7e8-dd629c2e5905",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE FIBRA P/ LIMPESA 10 X 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26.25
    }
  },
  {
    "id": "d89833f1-4493-48af-85ec-214d11db1e34",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO SCOTT 300 MT 3 DOBRAS( JOFEL)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 86.88
    }
  },
  {
    "id": "90fb053a-770c-4072-8cd1-f57666b36371",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPONJA DE LA DE ACO 8 X 1 60G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28.6
    }
  },
  {
    "id": "e378b77f-865a-4669-95c4-cd19691407be",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL TOALHA 2D INTERFOLHADO 22X21CM 1000FL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 88.5
    }
  },
  {
    "id": "3011c36a-7ba0-4b1c-9d26-eda7025b11ee",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "VASSOURA TIPO GARI 40CMX6CM 1,40MT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 204.16
    }
  },
  {
    "id": "96c38f37-cc5f-4dd4-8aec-f956b4339a96",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "POTE MULTI",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 55.98
    }
  },
  {
    "id": "c4eb5e0f-7841-4668-8f3f-f0f1c35394df",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESCARBONIZANTE SPRAY CAR 80 300 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56.62
    }
  },
  {
    "id": "4cd277e5-bd79-4a29-8ccd-1f253e5cba57",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABONETE 90GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 65
    }
  },
  {
    "id": "ca8e6161-42d3-4578-b6ad-87f081d09bc0",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PAPEL HIGIENICO 4 X 1 DUETO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 72.8
    }
  },
  {
    "id": "6fb89c6c-2dbb-4203-821e-8af2f259092f",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO PLASTICO LIXO 200L 100 X 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 77.21
    }
  },
  {
    "id": "f54f1df3-01fb-4512-9399-4aeb3edeae07",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CREME DENTAL 90G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 91
    }
  },
  {
    "id": "8851f0c4-69f0-44d1-b147-09dc87a39d5e",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DESINFETANTE 2 L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 91
    }
  },
  {
    "id": "e9f5f6fa-60a0-4cb0-aa95-e9e8a6274aa1",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "AMACIANTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 109.2
    }
  },
  {
    "id": "787ceb7a-c913-4ce7-b783-6f5ec1e09644",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM BARRA 5 X 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 117
    }
  },
  {
    "id": "a2d6dbb8-136e-462c-a4be-114615d0fe76",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SABAO EM PO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 117
    }
  },
  {
    "id": "99e96bb5-02db-4ccc-8fc3-2c253022dd68",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SACO P/ LIXO 100LTS 100 X 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 159.12
    }
  },
  {
    "id": "50f546bc-44b7-454d-8346-ffd5f6e93e36",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "EXTRATOR BRINCO FORMATO GANCHO ALLFLEX",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 42.72
    }
  },
  {
    "id": "61a5aa9c-4c76-416b-9580-fbdc75d1fb0d",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALICATE ALLFLEX PARA BRINCO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 108.19
    }
  },
  {
    "id": "326cfaff-18f7-4602-a7c8-4ea9f3f01e01",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LAMINA SEGUETA STARRET 14796",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 23.85
    }
  },
  {
    "id": "a8d461c4-aed9-4060-a290-3186980480c6",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMA CHATA MURCA 8 SEM CABO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50.6
    }
  },
  {
    "id": "fc2e867c-14ba-41ba-be10-fb6a6d721983",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ALICATE PARA ANEIS EXTERNO DE PONTA CURVA BELZER 219056BBR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 106.8
    }
  },
  {
    "id": "5698f74f-d99d-4706-adf5-a00c93bd20c3",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CHAVE INGLESA 12\"",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 90.4
    }
  },
  {
    "id": "c7ff34fd-6c8d-475c-91e8-e83761db2f90",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LONA PLASTICA 8 X 50 160 MICRAS POLICILO BRANCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2360
    }
  },
  {
    "id": "4e7e4b6d-7ae1-4f88-8126-95e80a26d3ea",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LONA PLASTICA 8 X 50 160 MICRAS POLICILO BRANCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 246.8
    }
  },
  {
    "id": "5cb1cdac-8a88-4371-92df-3138f15a584e",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LAMINA SEGUETA STARRET 14796",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 252.8
    }
  },
  {
    "id": "98697878-ee61-4770-b980-fc114a57394d",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LACO CAMPEIRO 15M CORDAVILLE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 195
    }
  },
  {
    "id": "e7dc9643-c28f-461f-a162-64f8b7f440b6",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LONA PLASTICA 8 X 50 200 MICRAS DUPLA FACE POLICILO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 155
    }
  },
  {
    "id": "15bf4a0f-54dd-4d43-99f6-2ae06c15f88b",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PINCEL TRINCHA 395 1 1/2\" ATLAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26
    }
  },
  {
    "id": "e1e40248-57b9-4c2f-b46b-01627cc45639",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLO LA NATURAL/POL 05 CM CB MOD 245 - P",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28
    }
  },
  {
    "id": "cd56f9a4-17da-42b4-9e31-8cd76ec6ba14",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ROLO LA ANTI GOTA 23CM ATLAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56
    }
  },
  {
    "id": "8bf1a283-449d-4327-8d69-97d8699c1f9b",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "DISCO SERRA CIRCULAR MADEIRA DIAMANTE AZUL 7 1/4\" ( 180MM) 24 DENTES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 53.4
    }
  },
  {
    "id": "dae3e7a9-1a5c-4407-b0b2-9a3f1c3a9b09",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ENXADA DUAS CARAS 2 LIBRAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 133.88
    }
  },
  {
    "id": "545be836-ab09-43e8-996a-8ff13672f859",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PA DE BICO 460/20 ACO CABO MADEIRA 71 CM TRAMONTINA 77460424",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 141.48
    }
  },
  {
    "id": "4c6a4d41-0ce0-4a11-bb2c-664be89b3940",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SUPORTE SERRA COPO 11MM - 7/16",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 83.3
    }
  },
  {
    "id": "fe169c2f-a57e-4802-b781-bf6850cd392a",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRENA 08 MT LUFKIN",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50
    }
  },
  {
    "id": "6490510d-8ff2-4d23-9940-80a0b1530cab",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LONA PLASTICA 8 X 50 160 MICRAS POLICILO BRANCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 86.8
    }
  },
  {
    "id": "dc8facf4-468b-40f3-b1a7-e7b856fc6535",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CORDA CORDAVILLE 20 MM TODA COR 440 MTS POR KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 25
    }
  },
  {
    "id": "35078958-6464-412e-940b-1b921fde9263",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "APLICADOR DE SILICONE TRAMONTINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50.43
    }
  },
  {
    "id": "7b22f9f7-837a-4c0e-b229-868153004af5",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FERRO PUA MATHIESON 7/16 X 12MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 45.69
    }
  },
  {
    "id": "8f938132-74bb-4b6d-be5a-0374892a9f40",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LIMA CHATA MURCA 8 SEM CABO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50.88
    }
  },
  {
    "id": "55010ab4-2351-4cb7-886d-f3b1b59b8489",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRINCHA 2 1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10
    }
  },
  {
    "id": "ea8c7d72-81a0-4ae7-a0b6-38146a31d4a9",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LAMINA SEGUETA STARRET 14796",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.91
    }
  },
  {
    "id": "ca79817b-4716-427e-89ca-78f83979b1d1",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PA DE BICO NR 6 SEM CABO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 57.7
    }
  },
  {
    "id": "6277a410-1cee-45d5-a155-1195e2d36044",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "EXTENSAO RIGIDA PARA BOMBA DE ENGRAXAR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.49
    }
  },
  {
    "id": "ffde76a3-8c91-4385-92f3-6a4ebd9d4676",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FOICE ROCADEIRA TRAMONTINA S/CABO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 110.94
    }
  },
  {
    "id": "be41d7c6-a2ab-4cde-9f2a-2434925f85b6",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ENXADA LARGA 2.1/2 LIBRAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 200.82
    }
  },
  {
    "id": "5bf64009-bc7b-47c9-bdb4-7fb95a25b02a",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "SOQUETE 1/2 ST13104SC",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.21
    }
  },
  {
    "id": "5c153664-87fc-46e2-9a79-5691da4a2016",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LONA PLASTICA 8 X 50 160 MICRAS POLICILO BRANCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 965.46
    }
  },
  {
    "id": "90568884-9738-4db7-a7a7-a5f11e1ad0ab",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "FRESA DE TOPO 1/4\" 4 CORTES ACO RAPIDO VONDER",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 83.51
    }
  },
  {
    "id": "66bcbbef-9b71-48b2-b06e-1fa36082fb2a",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESCOVA DE ACO CIRCULAR TRANCADA 4.1/2X1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 87.4
    }
  },
  {
    "id": "4853337e-9ba7-4376-9d8a-70adf70ae9b2",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "CHAVE CANHAO 10X245MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.76
    }
  },
  {
    "id": "4e06ecdc-e416-4708-bcbd-e14300d4f950",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "ESPICHADEIRA DE ARAME LISO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 163.96
    }
  },
  {
    "id": "2ead0d7a-060c-408d-8403-44a14c7addc1",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "EXTRATOR BRINCO FORMATO GANCHO ALLFLEX",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 43.44
    }
  },
  {
    "id": "3094e057-f229-4b9a-83c3-c71233cc47a1",
    "codigo": "4.1.01.04.0007",
    "descricao": "PNEUS E CAMARAS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "PNEU RECAPADO 750X16 MODELO AGRICOLA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 23.28
    }
  },
  {
    "id": "b49b4359-9b40-4cc3-ac66-0db4f1a0445d",
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
    "id": "4c87dd8f-b513-40c7-a9ca-93d88e17c682",
    "codigo": "4.1.01.05",
    "descricao": "4.1.01.05",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "f9153b0c-544a-4631-b679-df0c845f657c",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56457.44000000005
    }
  },
  {
    "id": "72e65521-d465-4c31-a859-e9ce2dd74e5d",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3328.71
    }
  },
  {
    "id": "6caec5fc-ed6c-4c47-a9e5-ff778b30b59e",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5536.550000000001
    }
  },
  {
    "id": "21710ef8-b480-4cf0-a743-f8ca371b065c",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.75
    }
  },
  {
    "id": "8615426e-1bd8-4e5c-a126-1d7073674c11",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1054.5300000000002
    }
  },
  {
    "id": "26987762-6f8d-4ef9-88a1-7f762eeeba73",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.86
    }
  },
  {
    "id": "a04ae9c8-b054-463d-bb33-2a69a2e7299b",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1074.07
    }
  },
  {
    "id": "008d1ac8-fd8c-4cc6-8e5b-edf091bc1407",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4360.209999999999
    }
  },
  {
    "id": "b3229168-759d-43e9-8b5b-ff71309de22c",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.09
    }
  },
  {
    "id": "a558350e-b4aa-4e96-811a-570f6bef975a",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1350.4599999999998
    }
  },
  {
    "id": "90694643-081a-4d7f-a5ed-2f51d34021b0",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.69
    }
  },
  {
    "id": "5969bd85-34b5-4915-a36a-350014a6377a",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 64.41
    }
  },
  {
    "id": "b744cab5-d409-47e4-b0ec-fa52b9a576f1",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.34
    }
  },
  {
    "id": "d3a63953-9411-4970-bdaa-84cc4a03e4eb",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9386.399999999992
    }
  },
  {
    "id": "7671c8b3-7d20-4126-9b60-1c70992218a3",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.29
    }
  },
  {
    "id": "b2c58805-fbd3-46ab-99ed-12eeb29792b4",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 45150.77000000003
    }
  },
  {
    "id": "45f811c6-b5a6-44a3-8b50-f9cbdd88fbe2",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 38993.65
    }
  },
  {
    "id": "2caeaa14-6e9a-4e60-9e69-1bd77b3d4ba7",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "GOTEJO",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-04": 7285.389999999999
    }
  },
  {
    "id": "2977c8cc-4f4f-4a35-9d2c-a4971437e612",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "DEPRECIACAO IMOBILIZADO CF 50.01.000044",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46919.43000000001
    }
  },
  {
    "id": "6f39e09a-671b-44bb-bdd1-744a0c2bf048",
    "codigo": "4.1.01.05.0001",
    "descricao": "DEPRECIACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.05",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14245.849999999999
    }
  },
  {
    "id": "0a50bdb2-395a-40e7-bea6-6f8eb3f0ee06",
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
    "id": "f5cc3613-ba89-468c-b3bb-b35a2adb7d0a",
    "codigo": "4.1.01.06.0002",
    "descricao": "REFEICOES E ESTADIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM HOSPEDAGEM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1957.52
    }
  },
  {
    "id": "d8efb9f0-f864-42c3-a6e2-6cceaff3b3e9",
    "codigo": "4.1.01.06.0002",
    "descricao": "REFEICOES E ESTADIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM HOSPEDAGEM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 579
    }
  },
  {
    "id": "bec77b4a-633c-45a6-ae27-310e66238fec",
    "codigo": "4.1.01.06.0002",
    "descricao": "REFEICOES E ESTADIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM HOSPEDAGEM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 180
    }
  },
  {
    "id": "af1de1cc-0e06-43fc-bade-2a25fad99ebf",
    "codigo": "4.1.01.06.0003",
    "descricao": "QUILOMETRAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM QUILOMETRAGEM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2935
    }
  },
  {
    "id": "6b1c7303-6c23-4e84-8113-57c67ad28176",
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
    "id": "8112ea5d-74a1-424c-80ac-adb798f0f536",
    "codigo": "4.1.01.07.0001",
    "descricao": "ENERGIA ELETRICA",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "DESPESAS COM ENERGIA ELETRICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4720.68
    }
  },
  {
    "id": "bf11205e-dd62-4048-8e9a-e9210c4b969c",
    "codigo": "4.1.01.07.0001",
    "descricao": "ENERGIA ELETRICA",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "DESPESAS COM ENERGIA ELETRICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 686.6600000000001
    }
  },
  {
    "id": "44486742-5bd6-4e67-b232-b9aee4019522",
    "codigo": "4.1.01.07.0001",
    "descricao": "ENERGIA ELETRICA",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "DESPESAS COM ENERGIA ELETRICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18679.109999999997
    }
  },
  {
    "id": "aa30fcb6-bd25-4c48-8cfb-7ea0cda65b7a",
    "codigo": "4.1.01.07.0001",
    "descricao": "ENERGIA ELETRICA",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "DESPESAS COM ENERGIA ELETRICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 374
    }
  },
  {
    "id": "ed73ef1b-5338-497a-aee2-1b6e9941553e",
    "codigo": "4.1.01.07.0001",
    "descricao": "ENERGIA ELETRICA",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "MANUTENCAO SISTEMA IRRIGACAO - CUSTO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "DESPESAS COM ENERGIA ELETRICA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2027-01": 145.3
    }
  },
  {
    "id": "bfe47bfc-07a6-43ff-a15a-7b6d8dcc3729",
    "codigo": "4.1.01.07.0001",
    "descricao": "ENERGIA ELETRICA",
    "tipo": "C",
    "codigoPai": "4.1.01.07",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.07-UTILIDADES E SERVICOS",
    "nomeProduto": "DESPESAS COM ENERGIA ELETRICA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1288.51
    }
  },
  {
    "id": "e81de580-9015-4d55-8878-8e3e809a323a",
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
    "id": "192b7019-84e3-48f9-8b0d-e957ccd8dca5",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN MULTIPLAN LAC -30KG REG.06267 00054 820",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 168677.25
    }
  },
  {
    "id": "fd9dec8d-12d7-4591-8055-c2649bde74d5",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN. MULTIPLAN BEZERRAO 30KG REG. 06267 00048",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14430.000000000002
    }
  },
  {
    "id": "337ca12b-ffba-406c-aac4-0aaeb53cad8f",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN MULTIPLAN LAC -30KG REG.06267 00054 820",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 43509.8
    }
  },
  {
    "id": "9c756b19-6407-43b9-aa67-35620b02a198",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RACAO EQUINOS TROPA 13 - REG. 06267 00003 010713",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1120.8
    }
  },
  {
    "id": "339289fb-6253-40af-8262-9cac522c65bd",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RACAO EQUINOS TROPA 13 - REG. 06267 00003 010713",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 463.68
    }
  },
  {
    "id": "113e00d9-b2ba-4f1d-8054-a79243bffcfc",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN. MULTIPLAN BEZERRAO 30KG REG. 06267 00048",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 25581.769999999997
    }
  },
  {
    "id": "64cc788a-5cb0-421c-a895-bb167ceef2a7",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN MULTIPLAN LAC -30KG REG.06267 00054 820",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16695
    }
  },
  {
    "id": "8363a987-714e-455c-8197-613b2fa8e3d6",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MINERAL P-80 REG. 06267 00035 030580",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 34697.92
    }
  },
  {
    "id": "cca448ca-3984-4570-a453-0619c5051b11",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN. MULTIPLAN BEZERRAO 30KG REG. 06267 00048",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 44356
    }
  },
  {
    "id": "ae9e8715-6d9b-4d65-b199-089d30e63f8a",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MINERAL MULTIPLAN LAC 920",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 73672.5
    }
  },
  {
    "id": "25eb5419-03bb-4a7a-ab59-10a53c2b055c",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN MULTIPLAN LAC -30KG REG.06267 00054 820",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4527.26
    }
  },
  {
    "id": "c318fc0e-d487-4a52-8520-959eeff19e32",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RACAO EQUINOS TROPA 13 - REG. 06267 00003 010713",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 815.0799999999999
    }
  },
  {
    "id": "01a3ae57-bb8a-4f88-9361-5f8f943d8580",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MINERAL P-80 REG. 06267 00035 030580",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 75.33
    }
  },
  {
    "id": "506158e9-6de9-4da6-856a-3aebb8f8bb1e",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RACAO EQUINOS TROPA 13 - REG. 06267 00003 010713",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 116.32
    }
  },
  {
    "id": "c5d08e2b-033e-4292-8387-77c546dc35e0",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN. MULTIPLAN BEZERRAO 30KG REG. 06267 00048",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 112499.86
    }
  },
  {
    "id": "9722e346-bf58-452f-8453-6390555e0470",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RACAO MINERAL PROTEICO ENGORDA 1125",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 156799.68
    }
  },
  {
    "id": "c527b133-1542-4237-914a-1dc7293a4314",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN. MULTIPLAN BEZERRAO 30KG REG. 06267 00048",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9841.6
    }
  },
  {
    "id": "e6e86ec7-65d9-40fb-8be8-4d5a07a13c3b",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RACAO EQUINOS TROPA 13 - REG. 06267 00003 010713",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 288.3
    }
  },
  {
    "id": "2e7b88e8-8e00-4441-a8a2-1ba1ee91c2df",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RECRIA GOTEJO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SUPLEMENTO MIN MULTIPLAN LAC -30KG REG.06267 00054 820",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40254.659999999996
    }
  },
  {
    "id": "350777a1-31bb-4522-9d98-f261d3a27be1",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BAGACO DE CANA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 61532.86
    }
  },
  {
    "id": "53265e22-9cca-46c8-bb87-650d47722f95",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CONCENTRADO CRESCIMENTO 9/18",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 198648.72
    }
  },
  {
    "id": "22031607-fe4d-4266-9011-832a21d8fc6d",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CASCA DE SOJA MOIDA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 198880.77
    }
  },
  {
    "id": "19624fbc-10f0-4956-b9dc-541d1be5a7ea",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FARELO DE MILHO DDGS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 387669.7
    }
  },
  {
    "id": "50bc2d10-d98d-4a13-a2b6-e0085f63b206",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CASCA DE SOJA PELETIZADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 419518.56
    }
  },
  {
    "id": "64d0cd2f-84ac-49a0-afe9-e40b12dacf02",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FARELO DE ARROZ",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 539529.57
    }
  },
  {
    "id": "c3d8d0c0-9b2d-42aa-9915-9e5d8262a7a1",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "GERMEM DE MILHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 628076.92
    }
  },
  {
    "id": "77539e81-40d6-473d-9736-55a1b50bfdf0",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RACAO BOVINOS CONFINAMENTO BEZERRO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 676996.32
    }
  },
  {
    "id": "6c30fa45-458a-4869-8717-1c0916b3980c",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RACAO EQUINOS TROPA 13 - REG. 06267 00003 010713",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 259.47
    }
  },
  {
    "id": "9f334c72-0444-447d-983d-6445d64ffe69",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BRUCELOSE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 150
    }
  },
  {
    "id": "7c106230-a39e-4913-96c6-01e2621101a1",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BOVI-SHIELD GOLD",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3594.5
    }
  },
  {
    "id": "a4dd3e2d-ae54-494b-b53f-6885d8990b96",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA RAIVACEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1407
    }
  },
  {
    "id": "7d7e6776-1ac3-48e7-abea-7be80a91f065",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BRUCELOSE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 308
    }
  },
  {
    "id": "a2a93990-2de6-4a61-8aa3-0e19b43bc4cb",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA CATTLE MASTER GOLD",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1156.25
    }
  },
  {
    "id": "be53449b-3786-4a71-b7bb-f3b1db64fe96",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA RAIVACEL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2730
    }
  },
  {
    "id": "b15e2057-c516-4fc5-9b86-12e496377b9a",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA STARVAC 12",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 370
    }
  },
  {
    "id": "7072188c-4c4b-4235-abab-55a77007dc99",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA RAIVACEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 382.5
    }
  },
  {
    "id": "5afb88f7-54ce-46ce-8b88-a32a0f65033b",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BOVI-SHIELD GOLD",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11808
    }
  },
  {
    "id": "016dc5c1-b725-44e6-aa59-0cbeababb6a7",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA STARVAC 12",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3841.2
    }
  },
  {
    "id": "c28de9dd-60d8-45c0-b7c5-e971d70993d6",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA RAIVACEL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 619.5
    }
  },
  {
    "id": "993be1e5-044b-477f-a07f-1ab9f7b157c5",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA STARVAC 12",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1560
    }
  },
  {
    "id": "2ac9c32e-f7ab-4374-9a84-c3a41efe0df6",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BOVILIS VISTA ONCE 10 DOSES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12783.6
    }
  },
  {
    "id": "99ce9f23-52a6-4d3f-9fbf-f5b2f8ee3c19",
    "codigo": "4.1.01.11.0002",
    "descricao": "VACINAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BOVI-SHIELD GOLD",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32048
    }
  },
  {
    "id": "07606b78-63b9-4db5-baa9-8bacca8d58ff",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "IODO 10%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 137.89
    }
  },
  {
    "id": "82bcfc6f-458c-459c-b3d0-4c5bb6a1855a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BOVILIS POLISTAR T",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2314
    }
  },
  {
    "id": "1222ff8a-61c5-40cb-ba45-829fc1ef46a7",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DECTOMAX 500 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2109.4700000000003
    }
  },
  {
    "id": "6bde2835-1b86-4ea9-be52-512b9ad4e76e",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RIPERCOL L 150F INJETAVEL 250 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 917.4000000000001
    }
  },
  {
    "id": "401adcb7-8997-4416-9075-2bbb8b5f168e",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "LARCIVIDA REPELENTE DE ALTA ADERENCIA BACTROVET 500ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 51.87
    }
  },
  {
    "id": "7edb1104-850f-48cc-9e1e-8a9e961db085",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA DESCARTAVEL 40 X 12MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18.4
    }
  },
  {
    "id": "ac5a0d64-7407-46b2-b9f4-decf58bfa9d1",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SERINGA DESCARTAVEL 10 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.08
    }
  },
  {
    "id": "6ea46323-6b24-4b89-80db-00c7db13e40f",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SERINGA DESCARTAVEL 20 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.94
    }
  },
  {
    "id": "0757e996-f873-4ca4-9936-8d2e6ce83135",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA METAL 15 X 18MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 637
    }
  },
  {
    "id": "e4b610e3-c70d-4cfc-a6b0-d3f301257d66",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BANAMINE INJ. 50ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 92.11
    }
  },
  {
    "id": "e7b2bafc-61fb-48c1-8604-6a6d5c206e45",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "MATABICHEIRA CYDENTAL 250ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 639.21
    }
  },
  {
    "id": "0d10b76b-4baf-40e8-bbd9-aab4f557ef4b",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BANAMINE INJ. 100ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 528.51
    }
  },
  {
    "id": "79582f59-fc72-483c-9660-b3888c6ff4da",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DRAXXIM 100 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3469.75
    }
  },
  {
    "id": "21603efb-17ef-419f-b118-c92354b710f1",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ISACORT 10 ML ( CORTVET)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20.46
    }
  },
  {
    "id": "8f453b08-6546-41d3-829a-3ce7f87c41a8",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SYMPEC ACQUA BALDE 2 KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 165.89
    }
  },
  {
    "id": "c6687f3c-c858-4028-b109-34151acfe02e",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO DE ANIMAIS PARA COMPRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3049.5
    }
  },
  {
    "id": "6d9c170d-b0f0-463a-aa16-34a3be4ed98c",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CYDECTIM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 792.36
    }
  },
  {
    "id": "975fafbb-eebb-4cf0-bfea-8ac598abe13d",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RIPERCOL L 150F INJETAVEL 250 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4221.799999999999
    }
  },
  {
    "id": "78e34d6f-37e5-41ec-97ad-b5292905ef23",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TOP LINE POUR-ON",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1728.8
    }
  },
  {
    "id": "ae17cd8a-08c5-4ecb-b1eb-daecdbe8f9ea",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DECTOMAX 500 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6708.45
    }
  },
  {
    "id": "a22819d5-9c12-452d-8fb2-11515dd2b5e9",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TOP LINE POUR-ON",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 432.2
    }
  },
  {
    "id": "03c90c0d-6aca-450b-9e31-4bb25afd3380",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO PARA IDENTIFICACAO ANIMAL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 82
    }
  },
  {
    "id": "68024c6d-b39b-4d56-8b13-7e7feb576632",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO DE ANIMAIS PARA COMPRA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 432
    }
  },
  {
    "id": "65e788f0-8416-40f4-97e9-ea400701f809",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DECTOMAX 500 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 767.32
    }
  },
  {
    "id": "4514c90d-9edb-4ba3-9a0f-b0f65693f515",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DRAXXIN KP 100 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1779.98
    }
  },
  {
    "id": "eb1a1c32-2e3e-4ae5-a9cc-e8fae6cdf969",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO TOP TAG 180",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 981.2
    }
  },
  {
    "id": "83550be7-11fd-406c-bd4e-4047700411e5",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "MATABICHEIRA CYDENTAL 250ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 43.38
    }
  },
  {
    "id": "28a328ff-2d5d-4fc0-9c5b-80ce68767daa",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ISACORT 10 ML ( CORTVET)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.9
    }
  },
  {
    "id": "8acbf34d-f435-422a-a245-754630260862",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PENCIVET PPU 50ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 55.98
    }
  },
  {
    "id": "efc2de70-88f0-457a-be29-0fa78b075473",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PE DE BRINCO P/ RASTREAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 135
    }
  },
  {
    "id": "0ec60712-6d5c-4028-b237-cfd035f1eccc",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RIPERCOL L 150F INJETAVEL 250 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 250.14
    }
  },
  {
    "id": "61bfb630-f9fc-48bb-9505-b99ef16c6932",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BOVILIS POLISTAR T",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10826.5
    }
  },
  {
    "id": "4532b260-4987-4287-a974-4dd9b2593c78",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ANESTESICO L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.15
    }
  },
  {
    "id": "a02c1c3e-401d-401e-97d0-8de0a13788e8",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TERRACOTRIL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 42.2
    }
  },
  {
    "id": "aea4c50e-ba61-4ee6-b36d-13b2b8d123c6",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VERRUTRAT 20 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46.86
    }
  },
  {
    "id": "ed0841da-33a7-4b2b-87af-974a087ab7d4",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VIDRO PARA SERINGA HOPNER 50ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46.92
    }
  },
  {
    "id": "3cf3ba21-8fc7-4c3b-a8aa-a81870d980f5",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DECTOMAX 50 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 74.42999999999999
    }
  },
  {
    "id": "2649bacb-ba14-4f12-83a3-f215d693f75c",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HEPATOXAN 100 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 67.17
    }
  },
  {
    "id": "f8953df8-4b75-4e9b-9484-34a63062462a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "POTENAY 50C",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.04
    }
  },
  {
    "id": "0e9811f5-342a-4d68-b9c7-04414f7801a7",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TERRAMICINA MAIS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.8
    }
  },
  {
    "id": "da3457c7-2240-415d-abda-8c238f647041",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PENCIVET PPU 50ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 89.4
    }
  },
  {
    "id": "02308f7a-9a8f-4008-988c-d3a295b694c2",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VIDRO PARA SERINGA HOPNER 30ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 36.85
    }
  },
  {
    "id": "bb08151b-950d-4911-bd1b-5f6c8ebad9b3",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "KINETOMAX 100 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 97.51
    }
  },
  {
    "id": "6757b1d7-1f6b-463f-a56a-b7e48d7633cc",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "IODO 10%",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 136.26
    }
  },
  {
    "id": "a0c12a20-65c3-4e9e-89d7-900689184919",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SERINGA DESCARTAVEL 10 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.86
    }
  },
  {
    "id": "8684da52-9749-4e8b-8f64-baed0927c1b2",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA DESCARTAVEL 40 X 12MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2
    }
  },
  {
    "id": "feb5adc4-4d61-4200-9e14-cb7140f1fe0d",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SERINGA DESCARTAVEL 20 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.24
    }
  },
  {
    "id": "348c3105-a604-4bf6-84a4-9c9f2e20a3f0",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "MATABICHEIRA CYDENTAL 250ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 484.96
    }
  },
  {
    "id": "42a89959-411b-4be8-8615-6fe3a308cc0a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HEPATOXAN 100 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 64.35
    }
  },
  {
    "id": "16b6c388-3443-49a5-b9d1-f51181a9fc22",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PENCIVET PPU 50ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 252.63
    }
  },
  {
    "id": "6be0173e-e14f-44df-a184-6669336e5a50",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DECTOMAX 500 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 191.9
    }
  },
  {
    "id": "61c9bc75-3ab1-4af6-a4f5-331d649295da",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BANAMINE INJ. 100ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2057.88
    }
  },
  {
    "id": "7c5bd76a-43be-4edb-8d12-cdbd2bacf70b",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "LUVA PARA PROCEDIMENTO CIRURGICO TAMANHO (M)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30
    }
  },
  {
    "id": "cfc3fec8-abcb-49cc-a326-95f5895619fa",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "REPARO PARA SERINGA HOPNER 50 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.39
    }
  },
  {
    "id": "e342b88c-6721-4a64-b904-1801738d3915",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BIOXAN 500 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20.23
    }
  },
  {
    "id": "272ff1e1-7ac4-4b55-a749-ea513a04291a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TERRACOTRIL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 43.16
    }
  },
  {
    "id": "330052bc-59e2-4003-8300-1b98b9dc6b6e",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA METAL 12 X 15MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 60.12
    }
  },
  {
    "id": "c53bff7e-cd12-4241-a868-06a94f1aea25",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BORGAL 50 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 270.9
    }
  },
  {
    "id": "64468318-766b-40a0-b513-fa587870858a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "EQVALAN",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 174.6
    }
  },
  {
    "id": "79ec0f14-3879-48f5-b14d-3ece36e10677",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SERINGA DESCARTAVEL 10 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 0.93
    }
  },
  {
    "id": "243059cc-47f0-431e-a63c-b5357a69b965",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SERINGA DESCARTAVEL 20 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.35
    }
  },
  {
    "id": "555b2db9-972c-4389-9877-9a7f2f602dbe",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA METAL 12 X 18MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20.4
    }
  },
  {
    "id": "0559e9ce-06f9-43b9-8d5f-7fe8c4038b8f",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "MATABICHEIRA CYDENTAL 250ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 60.8
    }
  },
  {
    "id": "165e7ea5-5897-45d2-922d-b1bb2f8a8349",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PE DE BRINCO P/ RASTREAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 132.75
    }
  },
  {
    "id": "51fa8cb4-723c-472b-b24e-252df1aec2ea",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO DE ANIMAIS PARA COMPRA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 990
    }
  },
  {
    "id": "a971c3fb-0a67-43d1-af3b-7ca39aecf21a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA METAL 15 X 18MM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.8
    }
  },
  {
    "id": "05e97ff9-0357-4a39-a1d3-4da3e6667786",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO DE ANIMAIS PARA COMPRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 872
    }
  },
  {
    "id": "58b0fe4e-7336-431b-93d2-117b11096757",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO TOP TAG 180",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 892
    }
  },
  {
    "id": "cf08802b-e5d3-48ae-bafe-5f2c46a8fb05",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RIPERCOL L 150F INJETAVEL 250 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 429.3
    }
  },
  {
    "id": "039659a4-9966-4183-bd40-11c44c960d08",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DECTOMAX 500 ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 958.65
    }
  },
  {
    "id": "1ec82cdf-8aca-4ad1-91e5-85671494999f",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VAMPIRICID TÓPICO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 58.99
    }
  },
  {
    "id": "99b9d0e7-c261-4e9e-9ebf-951cf44d1822",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SERINGA DESCARTAVEL 20 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 96
    }
  },
  {
    "id": "b45c8709-949e-4a23-ad21-2a6df5c4c24d",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA METAL 15 X 18MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 158.4
    }
  },
  {
    "id": "fd17faa4-3961-4fcb-a01f-3f4f5b5b5a30",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BLO-TROL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 60.01
    }
  },
  {
    "id": "2defe3c8-fb58-4623-a693-e4449572d5af",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "MONOVIM B-1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 440.67999999999995
    }
  },
  {
    "id": "dd5ac936-39c1-4963-b19f-da5a919b5d4c",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ISACORT 10 ML ( CORTVET)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 445.4
    }
  },
  {
    "id": "84900519-e248-45ec-9dd9-fae36a1d36eb",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ISACORT 10 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 830
    }
  },
  {
    "id": "d2172123-2286-4330-992c-5dd5ed58fb4c",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TERRAMICINA MAIS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1126.98
    }
  },
  {
    "id": "d5174ae8-587c-4338-a60b-0068837a46e4",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "POTENAY 50C",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 753.6
    }
  },
  {
    "id": "3f7ceeda-db10-4eb9-8c1b-d162b9ba1917",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PENCIVET PPU 50ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1477.1100000000001
    }
  },
  {
    "id": "3d44adac-9006-4c5d-a609-501180205f39",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGEBENDAZOL 15% (AGENER)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13884.24
    }
  },
  {
    "id": "a55f4146-c63d-4744-a51e-e5eeebd4867e",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO ALLFLEX RASTREADO C/ BOTOM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13046.399999999998
    }
  },
  {
    "id": "3fdfcdb6-5922-4e41-8f4f-90e05d6ed8de",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DRAXXIN KP 100 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32039.64
    }
  },
  {
    "id": "b06cbfd0-c2d0-4205-915c-2f078ba9bd6b",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ZUPREVO 250ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 55565.16
    }
  },
  {
    "id": "500e4388-cbfb-4445-b53d-7bbbd349d350",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BANAMINE INJ. 100ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32989.2
    }
  },
  {
    "id": "1c1ed406-8a08-4c07-b2bc-aaefa7123f2a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PE DE BRINCO P/ RASTREAMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1756.5
    }
  },
  {
    "id": "636200fc-43e3-41ab-9122-71d178d038a5",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "VACINA BOVILIS POLISTAR T",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12453.1
    }
  },
  {
    "id": "61c8d56c-caa7-4879-9336-2a6b7e1b3223",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "AGULHA DESCARTAVEL 40 X 12MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18
    }
  },
  {
    "id": "5380d136-a91a-4eda-8021-5c7d5530b7d5",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ANESTESICO L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 38.7
    }
  },
  {
    "id": "6d94efe0-cec5-49ce-9822-90a133b884e9",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "MATABICHEIRA CYDENTAL 250ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 255.04
    }
  },
  {
    "id": "0e2a906a-bdfb-45eb-93b4-e881fdc2d6fe",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "LARCIVIDA REPELENTE DE ALTA ADERENCIA BACTROVET 500ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 164.7
    }
  },
  {
    "id": "69015691-b37d-4699-bd15-b03aa3746d3b",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ANASEDAN ANESTESICO XILASINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 103.47
    }
  },
  {
    "id": "25c1e634-cc33-4045-a8bc-ec56aa920d4e",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "UNGUENTO 200 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15.99
    }
  },
  {
    "id": "0fe9ac56-d247-4607-8d7c-0d47a9134f43",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TERRAMICINA PO 100 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 42.72
    }
  },
  {
    "id": "0d9457e4-23f5-4126-8d26-49834b08af2a",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TERRACOTRIL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 109.55000000000001
    }
  },
  {
    "id": "0e698d5f-2bd6-4cd9-a481-ef2f8ed0ed77",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "TANICID  200G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30.74
    }
  },
  {
    "id": "386f98b2-f48f-4f00-905d-efd85096c3f0",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BIOXAN 500 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40.08
    }
  },
  {
    "id": "0939db75-df5d-4f06-9c43-48dd8f2d8c1c",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HEPATOXAN 100 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 353.70000000000005
    }
  },
  {
    "id": "94c9ba54-086b-4bf5-b748-39619ab936cd",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "KINETOMAX 100 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 588
    }
  },
  {
    "id": "ed3db34a-e92b-4792-9e56-8990136059c0",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "MONOVIM K",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 115.76
    }
  },
  {
    "id": "84940baa-a200-45ec-9b21-0fd2b5a2de60",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "D-500",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 130.2
    }
  },
  {
    "id": "1e05c836-0ffc-4401-a658-88525a320d86",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "MONOVIM B1 20 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 186.5
    }
  },
  {
    "id": "6d893ad6-f787-45de-82af-17223b2b5314",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RESFLOR GOLD",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1574.52
    }
  },
  {
    "id": "fdbde049-8c01-49d4-a5cf-8e2594cd83e1",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "DRAXXIM 100 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3469.75
    }
  },
  {
    "id": "c10dc6fa-2def-44c4-82a5-dc6cf3d2d351",
    "codigo": "4.1.01.11.0003",
    "descricao": "MEDICAMENTOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "BRINCO EXPERT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 635.25
    }
  },
  {
    "id": "a3a349c4-a534-419c-88b6-b19e7ce7fdc9",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN JEEP GUADALUPE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 108.63
    }
  },
  {
    "id": "f7cdccb4-1f84-4d4d-82be-753fd71a42fa",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN BOND CONFIANCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 137.96
    }
  },
  {
    "id": "4a275e68-5c5b-4637-a940-60d8b88e0e09",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN GANADEIRO EAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 208.4
    }
  },
  {
    "id": "003d3af7-dfd0-405f-a6a3-6273e89e5388",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN D50 ALO BRASIL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 216.84
    }
  },
  {
    "id": "c9a7f7fd-d4d1-4f9e-9ba1-c23b050fd7bc",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN GREGO CACHOEIRÃO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1815.2
    }
  },
  {
    "id": "8e57a3ca-766b-482f-af74-e66002f0801d",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN QUISCO DO MORRO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 828.9
    }
  },
  {
    "id": "dc707a4b-940d-4bc2-862b-5e7e9d080afe",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN 11 GOLEADOR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 957.6
    }
  },
  {
    "id": "4e1099b6-811f-45c7-a8a0-a511a3092003",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN GOVERNO DA AGRONOVA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1855.92
    }
  },
  {
    "id": "42d8482e-ae36-4799-8c63-38fe04dc4d26",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN REM NORTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1938.21
    }
  },
  {
    "id": "e0e79121-1835-45b7-9dd0-98305f9b023a",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CODIGO FIV JMP",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2032.8
    }
  },
  {
    "id": "45d939dc-b2d0-46c0-8bfd-f12f27d03923",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN DOMINATOR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2554.92
    }
  },
  {
    "id": "0e3dc538-5297-48bc-b42b-88ac0925d57c",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN REM CH LIDER",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3557
    }
  },
  {
    "id": "f4cabeb6-ec1e-40e1-9b6e-e3419fef48eb",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN JAMBU DA GAROUPA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4954.95
    }
  },
  {
    "id": "14dfbafa-5f42-4a42-81ab-5a88eac679b4",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN DOURO FM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 390.6
    }
  },
  {
    "id": "a9530233-9e6d-429d-b99b-8e82addc4956",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN PAINT CAPITAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 398.2
    }
  },
  {
    "id": "bbb09e04-26ed-4386-b46c-b5e7f8d078e1",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA SHOULDER AJ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 406.2
    }
  },
  {
    "id": "b03673d8-c46b-4999-befb-c07a8f6d2b4d",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN MACAUBA FM",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 416
    }
  },
  {
    "id": "4074335e-7dc1-4b36-9807-959c8a7edd84",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN PRO IBATE CGA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 417.6
    }
  },
  {
    "id": "29e69719-7cb3-4a4a-b14b-55774510ef98",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN COMMANDER (1550 DA LSA)",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 470
    }
  },
  {
    "id": "cc56d5ad-5255-4d42-aa6d-d4c3830bab72",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA MOGNO DA MATA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 476
    }
  },
  {
    "id": "e97c07e1-a499-439b-9a89-42fbb4f4838a",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA BRUTUS FS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 493.8
    }
  },
  {
    "id": "a515761e-c7a5-4144-907c-3b0fed870a6c",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN URCO MAFRA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 609.8
    }
  },
  {
    "id": "c45ba150-2823-46be-af90-6bc1a33026a2",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA ALABAMA M.SOL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 688.6
    }
  },
  {
    "id": "9fec8ebe-7797-493c-b23a-d67f783c1689",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA MORUMBI AJ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 726.4
    }
  },
  {
    "id": "80e8300c-4f26-4b73-8d75-95b0d9891b65",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN VINHATICO 3BA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 753.4
    }
  },
  {
    "id": "a66378fe-6995-4924-9fe2-6742f6eebbc9",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN IANQUE JCA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 784
    }
  },
  {
    "id": "c4464f5e-73df-4915-9094-919d90c60712",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN GOIAS NBV",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 800
    }
  },
  {
    "id": "90134c0a-154f-450b-9304-c9d512a78896",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN BERGAMO 3BA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 889.2
    }
  },
  {
    "id": "b54c0c2d-a221-44e7-bc99-494b0a759435",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN A5065 MATINHA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 970.2
    }
  },
  {
    "id": "25a51aa3-af32-4d0b-abd4-0d39798a15e6",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA BILBAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 987.6
    }
  },
  {
    "id": "884da839-f365-4af9-bb71-c9783ba88e82",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN GABARITO EAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1089
    }
  },
  {
    "id": "6318f7d6-1380-4175-94f8-52aaa4cd2d2e",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN TREM BALA EAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1110.72
    }
  },
  {
    "id": "896ee6ef-2ef0-4fe2-aeb4-c56991e0abbe",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN WIFI AJ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1165.2
    }
  },
  {
    "id": "e9119675-cfeb-480c-88ad-05bd68febf88",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA LA BOMBONERA AJ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1299
    }
  },
  {
    "id": "5cef0e99-53af-4d26-8129-1280129fe1ff",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA SHORT RIB AJ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1350
    }
  },
  {
    "id": "656064c9-4ac6-40fb-90ab-114089da6234",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA ROBUSTO JATA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1361.4
    }
  },
  {
    "id": "4826e061-91ba-4462-aa45-35581a6e8699",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN NIMBUS KA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1414.8
    }
  },
  {
    "id": "1a0ecc12-de0f-450a-b905-af1db0dade77",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN ALL IN",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1448.4
    }
  },
  {
    "id": "31a8dce5-c2ad-47f6-b5f3-4ada7adc7901",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA BAITACA DA BP",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1481.4
    }
  },
  {
    "id": "1598b387-de03-48e3-bc21-49c9088bddec",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA PAQUISTAO EGA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1481.4
    }
  },
  {
    "id": "6597b8fb-d982-4bb6-975e-f15678192106",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA SORRISO AJ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1681.8
    }
  },
  {
    "id": "ef39a362-0344-450b-9b45-92121186996d",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA QUORUM FI",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1800
    }
  },
  {
    "id": "4c017d6a-4e17-45f6-9a74-c6dc9e6be324",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN REM NOCAUTE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1815
    }
  },
  {
    "id": "64334f53-8724-4d1b-8d54-aebdf1490233",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN ALQUIMISTA DA EAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2019.5
    }
  },
  {
    "id": "876b3dd8-92cd-458a-872b-20b37c912d08",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN REM PASSAPORT",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2268.25
    }
  },
  {
    "id": "89234692-4b50-4e65-8592-5e6f79a379b8",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN THUNDER DA SANTA NICE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2450.88
    }
  },
  {
    "id": "6815fde6-731d-4ada-b683-406693722afd",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN VIKING DE NAVIRAÍ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2552.58
    }
  },
  {
    "id": "ea0bcfc8-fa9b-4628-be92-5ace994c913b",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN ERODES MAT",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2758.8
    }
  },
  {
    "id": "e2f8b317-4c90-4f49-8aac-7593bb81d455",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA COMENDADOR FS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2962.8
    }
  },
  {
    "id": "5b5cad8a-483b-4b78-b256-3039f8028bb8",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CFM ENCONTRO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3167
    }
  },
  {
    "id": "a1290918-f8ec-476f-8447-fa202166d3b6",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN JALAPAO AJ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3476.8
    }
  },
  {
    "id": "bd7d4263-9710-4063-ad3b-f483dfd23363",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN FEDERAL DA EAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3934.92
    }
  },
  {
    "id": "7cc900aa-f608-4e29-b195-9263df8cfc84",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN FERRARI DA EAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3939.6
    }
  },
  {
    "id": "d359b988-bbf4-4bff-9dd5-0d3cc9f087a8",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA CHEFE FS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3950.4
    }
  },
  {
    "id": "914d7660-fd00-4448-8cab-295f3afd987e",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN MURICI FSE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3950.4
    }
  },
  {
    "id": "9ca4c44c-7302-46b2-971d-09c0d1c718d7",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA TRUCK T013",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4444.2
    }
  },
  {
    "id": "a2fd3d10-46c4-4477-afae-3a47f34cff6f",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN CIA TESOURO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5172
    }
  },
  {
    "id": "49dd4dc6-e447-4083-9034-8ff6ecda839a",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN LANDROVER DA XARAES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20410.54
    }
  },
  {
    "id": "faa2f5ea-2a6b-4f5d-a590-9d809e92d272",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMEN A5270 DA NELORE OL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 850
    }
  },
  {
    "id": "e4170857-fa09-4a87-ab89-6bc785a642ce",
    "codigo": "4.1.01.11.0004",
    "descricao": "MATERIAIS DE INSEMINACAO",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "NITROGENIO LIQUIDO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 698.39
    }
  },
  {
    "id": "fbd7550f-417b-42e1-a292-d5e290715525",
    "codigo": "4.1.01.11.0015",
    "descricao": "SEMENTES E MUDAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMENTE DE MILHO HIBRIDO DKB 390 PRO3",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 110
    }
  },
  {
    "id": "4667ff4a-a4c1-4a24-8fb6-6b522f268087",
    "codigo": "4.1.01.11.0015",
    "descricao": "SEMENTES E MUDAS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SEMENTE MILHO AG 1051",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 240
    }
  },
  {
    "id": "29ddee9c-b4f6-4a6f-b0a0-fde6982cb000",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE FOLIAR QUIMIFOL PREMIUM 20L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1879.8
    }
  },
  {
    "id": "141dc24c-a655-436a-876a-cf021d6bdb87",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE FOLIAR QUIMIFOL PREMIUM 20L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1879.8
    }
  },
  {
    "id": "fd033c35-e036-4b2c-9386-2f1c43a1e813",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "GESSO AGRICOLA GRANEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14250
    }
  },
  {
    "id": "a95edbb6-ea3f-420d-ae2c-52012272d243",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 565.6
    }
  },
  {
    "id": "dbcf1f8f-1840-4be1-a387-2cf39686e53d",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA FLUROX + PICLORAN 80 + 80G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 60234.4
    }
  },
  {
    "id": "6b8bd5ab-9b62-406e-9fac-9978e407d08b",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA FLUROX + PICLORAN 80 + 80G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10629.6
    }
  },
  {
    "id": "969e9de6-3681-4283-9b32-438eaa1be21e",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 588.8
    }
  },
  {
    "id": "c3664c1d-df5c-478d-b74f-8e2b0758505d",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.050000000000004
    }
  },
  {
    "id": "ba75204d-356e-4e7d-9a9b-1c7e827b8e04",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA PIRIPROXIFEM 100 G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2657.6
    }
  },
  {
    "id": "8b47c2d2-d079-444e-8254-a79b68f84b54",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA BETA-CIFLUTRINA 12.5 G/L + IMIDACLOPRIDO 100 G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3148
    }
  },
  {
    "id": "447387a9-a0d8-40b8-a5e1-9678c989ae45",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA 2,4D DIMETILAMINA 806 G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5443.2
    }
  },
  {
    "id": "3fc72366-6ba6-4938-9ffb-f98c31aebfdc",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA MESOTRIONA 50 G/L + ATRAZINA 500 G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18589.2
    }
  },
  {
    "id": "1afee389-0724-409a-9517-d85fa6748a54",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA PICLORAM 405,18 G/L+TRICLOPIR -BUTOTILICO 240 G/L+FLUROXIPIR MEPTILICO 160 G/L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5400
    }
  },
  {
    "id": "ba183729-507f-42b4-b4ee-e32a11a24d90",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "RATICIDA GRANULADO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 80
    }
  },
  {
    "id": "d4f11d01-108e-4d45-a95c-b5cf679dc336",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA CLETODIM 240 G/L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1833.7
    }
  },
  {
    "id": "f92b6dc1-6355-451e-b293-063f71090e89",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2975.28
    }
  },
  {
    "id": "ac7113ee-cc55-4911-b7e1-86412a61dea1",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 214.65
    }
  },
  {
    "id": "c7b6c458-bef2-419d-b1ba-14feea6ed9e2",
    "codigo": "4.1.01.11.0021",
    "descricao": "PARCERIAS RURAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "PARCERIA DE AREAS AGRICOLAS CF 0001",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46781.56
    }
  },
  {
    "id": "4fb6449b-c98d-4adb-89ab-90e14069e351",
    "codigo": "4.1.01.13",
    "descricao": "4.1.01.13",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "PECUARIA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "98e1ba3b-b044-49ca-b3bf-b559d86431e1",
    "codigo": "4.1.01.13.0003",
    "descricao": "CONSUMO DE EMBALAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.13",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.13-CUSTOS INDUSTRIAIS",
    "nomeProduto": "SACOLA PLASTICA 20 X 35",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30
    }
  },
  {
    "id": "b2b0e231-ea0c-4cdd-a58b-e5fa81ed065c",
    "codigo": "4.1.01.13.0003",
    "descricao": "CONSUMO DE EMBALAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.13",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.13-CUSTOS INDUSTRIAIS",
    "nomeProduto": "SACOLA PLASTICA BOCA DE PALHACO 40X50",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 110
    }
  },
  {
    "id": "c569797f-2448-4136-9db1-c345b62240f9",
    "codigo": "4.1.01.13.0003",
    "descricao": "CONSUMO DE EMBALAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.13",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.13-CUSTOS INDUSTRIAIS",
    "nomeProduto": "PESO PARA SILO MAGNIVA BAG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1220.5
    }
  },
  {
    "id": "f3aa2267-21e8-4438-8ba9-450782211eae",
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
    "id": "74286f69-7824-4b61-b8f0-4921b804e114",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RECARGA PARA EXTINTOR ABC 6 KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 75
    }
  },
  {
    "id": "26ad362b-0d13-4e86-bccd-6dca8ad70c7c",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE CINZA AGUIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5.74
    }
  },
  {
    "id": "9c7418c2-41e8-419a-b473-5cd21b1b66c6",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA SEGURANCA VAQUETA 8/9",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 108.36
    }
  },
  {
    "id": "0c601260-71b8-4cd8-bbb2-6a5e96b6d90d",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MARMITA TERMICA SEM DIVISORIA 1,5L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59.68
    }
  },
  {
    "id": "99f5c981-a6a3-48ed-94a7-e64077a2dca9",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GARRAFAO TERMICO 5L  6915",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 39.94
    }
  },
  {
    "id": "45df6f47-8eca-4b15-b809-0dcf0ebf5cde",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PROTETOR AUVIDO TIPO CONCHA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 69.53
    }
  },
  {
    "id": "e41f14d3-605e-44bd-95cc-3afc1183f46a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 43",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 92.53
    }
  },
  {
    "id": "509c7186-3878-4bee-b036-0d35b0b3e75c",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE CINZA AGUIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.17
    }
  },
  {
    "id": "69ed17a8-d16d-4d91-9b7e-62a72df8f621",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA SEGURANCA VAQUETA 8/9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.98
    }
  },
  {
    "id": "e33a04e3-bd4f-4c4f-bdb9-3e457af2a016",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAPA BOIADERO C FORRO C TORNA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 62.62
    }
  },
  {
    "id": "b1b239c0-512e-449d-ad2f-25e8691e0b0c",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RECARGA PARA EXTINTOR PQS 4 KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 31.76
    }
  },
  {
    "id": "866a5080-b9b3-46c4-b3cd-9ff2c6105a36",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RECARGA PARA EXTINTOR PQS 8 KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 45
    }
  },
  {
    "id": "680906f7-f2d1-4c31-b88b-68a36761fe8a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RECARGA PARA EXTINTOR CO2 6 KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 120
    }
  },
  {
    "id": "5a09ac72-abd3-432a-8b6d-282f507d71ca",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 42",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 43.8
    }
  },
  {
    "id": "e9b872e5-3c83-4490-9377-e8671c8f1d39",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MARMITA TERMICA SEM DIVISORIA 1,5L",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 316.70000000000005
    }
  },
  {
    "id": "d65455b8-9c43-4cc6-9a00-2f0421a14879",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 42  CA 42672",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 84
    }
  },
  {
    "id": "7508f57e-fa78-4ab4-961c-327cffc33452",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GARRAFAO TERMICO 5L  6915",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 463.68
    }
  },
  {
    "id": "9f43231f-97d2-44c7-84d1-bbd6789e986a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE CINZA AGUIA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 17.94
    }
  },
  {
    "id": "1be7e328-bfe9-4138-a3e7-8509f4cd111a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE CZ KALIPSO CA 10346",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 58.879999999999995
    }
  },
  {
    "id": "3de8a903-7bb9-4ad4-9e33-7e2f564e9782",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE INCOLOR JAGUAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16.88
    }
  },
  {
    "id": "3952d3d4-c54f-4d17-9324-1f96b99b8a22",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROTECAO CONTRA AGENTES MECANICOS TAM 9",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 31.86
    }
  },
  {
    "id": "1d85e243-fd68-4ac1-8a10-359fb72d3496",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RESPIRADOR PURIFICADOR DE AR TIPO PECA SEMIFACIAL FILTRANTE PARA PARTICULAS PFF2",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 34.2
    }
  },
  {
    "id": "673c38df-c002-4677-bf22-adf3cb9f8948",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PERNEIRA SEG SINT 3 TALAS S VELCRO TAM G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20.29
    }
  },
  {
    "id": "ebc56a7d-7970-4df1-8223-4762c94212cd",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BONE TIPO ARABE HELANCA COR AZUL ROYAL",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 88.80000000000001
    }
  },
  {
    "id": "cd543ab0-858b-4aed-ad3b-cc1c5789378a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROT NITRILIA CONTRA AGS MEC QUIM TAM 9",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 104.69999999999999
    }
  },
  {
    "id": "849c0e4b-14d2-4f68-8f99-3e89757dc19d",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROTECAO CONTRA AGENTES MECANICOS TAM 10",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 108
    }
  },
  {
    "id": "4cb1c81b-d568-4a38-9614-0d77e3253a96",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA SEGURANCA VAQUETA 8/9",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 271.5
    }
  },
  {
    "id": "2c22aa47-6c8d-4099-a076-6aab1d817100",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RETENTOR FILTRO 5N11 3M EPI",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 147.60000000000002
    }
  },
  {
    "id": "4a2ee6bd-cc2a-4c9e-bd7a-c62b137597c4",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FILTRO MECANICO CLASSE P2 3M 5N11",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 149.39999999999998
    }
  },
  {
    "id": "7cf4150c-0a97-4303-9def-a56125609739",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CARTUCHO VAPOR ORGANICO 3MM 6001",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 51.04
    }
  },
  {
    "id": "353363fb-a528-49b4-b61b-677228b85a14",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RESPIRADOR PURIF AR TP SEMIFACIAL TAM M",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 114.28
    }
  },
  {
    "id": "1f501ff1-b178-47da-84f0-8980ae3b3d40",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PROTETOR AUVIDO TIPO CONCHA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 783.12
    }
  },
  {
    "id": "2e3145f5-bdd1-480e-973f-834392f7f663",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SOLADO DE PNEU Nº37",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 45.38
    }
  },
  {
    "id": "42e73e45-c336-4ce6-8f6d-8abd25423792",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 41 CA 42672",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 92.44
    }
  },
  {
    "id": "c2745032-90aa-4a31-8dcc-97d5b7710854",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CREME PROTETOR INDUSTRIAL BISNAGA 200G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.46
    }
  },
  {
    "id": "68d25675-82e1-44c7-80ad-d22d266d61bd",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SOLADO DE PNEU Nº40",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 90.76
    }
  },
  {
    "id": "74af1ee0-aa9f-4c6f-99f3-6e05fafc5f0a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RESPIRADOR PURIFICADOR DE AR TIPO PECA SEMIFACIAL FILTRANTE PARA PARTICULAS PFF2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.2
    }
  },
  {
    "id": "b6811958-eaee-4c65-8a5b-18f15b13a766",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE INCOLOR AGUIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21.349999999999998
    }
  },
  {
    "id": "83781793-386d-4509-b9fc-143066b4bba3",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RESPIRADOR PURIF AR TIPO SEMIFACIAL FILTRANTE PARA PARTICULAS PFF1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28.690000000000005
    }
  },
  {
    "id": "ea1c7c93-2679-44b2-b5d9-d423af8edcb4",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BONE TIPO ARABE HELANCA COR AZUL ROYAL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 35.46
    }
  },
  {
    "id": "5ee3adfd-fb36-4d7b-87d0-3b4327dd1f59",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROTECAO CONTRA AGENTES MECANICOS TAM 10",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.3
    }
  },
  {
    "id": "e9de4a9b-440e-4687-a525-03abd1edc119",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA SEGURANCA VAQUETA 8/9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 152.66000000000003
    }
  },
  {
    "id": "c256a416-ec06-42ff-943a-1a4d67b84e39",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MARMITA TERMICA SEM DIVISORIA 1,5L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32.58
    }
  },
  {
    "id": "30f13080-f453-4fe9-bbcb-ca8b265c577f",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GARRAFAO TERMICO 5L  6915",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 39.94
    }
  },
  {
    "id": "740f2514-3865-4343-b251-47548524ef29",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 38",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 42.96
    }
  },
  {
    "id": "8392d7be-f6b5-43e6-ba58-8b982664fa95",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 40",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 163.16
    }
  },
  {
    "id": "419f72f9-befa-4725-afa0-03e5635b6999",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 38",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 90.52
    }
  },
  {
    "id": "8ad268e2-45c3-4ffd-a13b-70f7951d124f",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MOSQUETAO ACO OVAL TR ROSCA 23KN VICSA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 102.10000000000001
    }
  },
  {
    "id": "bdedf472-3ce4-42fe-bac5-53860eaa0a72",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROT NITRILIA CONTRA AGS MEC QUIM TAM 9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 27.48
    }
  },
  {
    "id": "12edc2bb-d3b7-47da-8b06-becca063b023",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PERNEIRA SEG SINT 3 TALAS S VELCRO TAM G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 65.31
    }
  },
  {
    "id": "9aecb8eb-0f0d-483d-aba9-5babb3b27437",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PROTETOR AUVIDO TIPO CONCHA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 195.78000000000003
    }
  },
  {
    "id": "35c4b463-4f54-43a1-bc09-f9ed30ffa96b",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OCULOS SEGURANCA LENTE CINZA AGUIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14.350000000000001
    }
  },
  {
    "id": "15c6f8fe-866a-4ebe-90f4-58e972683a53",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROTECAO CONTRA AGENTES MECANICOS TAM 9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12.26
    }
  },
  {
    "id": "6deec60f-fdc1-4f29-9a85-1f071ee63bda",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PERNEIRA SEG SINT 3 TALAS C VELCRO TAM G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 51.26
    }
  },
  {
    "id": "1ccb8284-b944-40a2-85c5-39c34bb65eed",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SOLADO DE PNEU Nº41",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 45.38
    }
  },
  {
    "id": "a8d5c8a4-86b2-4c52-b665-3a31b541639e",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 38",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 86.83
    }
  },
  {
    "id": "bb60416f-e783-4497-9fba-25475c69a3f3",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 37",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 89.86
    }
  },
  {
    "id": "268c369c-1eed-459f-9ce6-dcf670d9ff21",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "AVENTAL DE SEGURANCA RASPA TIPO BARBEIRO G BRASCAMP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 107.99
    }
  },
  {
    "id": "25fd4b62-f4fd-40c6-94f3-7e386077d0f5",
    "codigo": "4.1.01.21.0003",
    "descricao": "CONTRIBUICOES E DOACOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "DOACOES CURSOS E FACULDADES FUNCIONARIOS 039409",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 282.27
    }
  },
  {
    "id": "513a8aa1-fa6d-4307-960b-ee87dc79c2dc",
    "codigo": "4.1.01.21.0004",
    "descricao": "CURSOS DE TREINAMENTO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CURSOS DE TREINAMENTO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56.25
    }
  },
  {
    "id": "3f65062e-fd98-46ff-ba1d-7889448a3ab1",
    "codigo": "4.1.01.21.0004",
    "descricao": "CURSOS DE TREINAMENTO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CURSOS DE TREINAMENTO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 56.25
    }
  },
  {
    "id": "b1d78c81-e943-4119-9930-0c3e76949e84",
    "codigo": "4.1.01.21.0005",
    "descricao": "PEDAGIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PEDAGIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.07
    }
  },
  {
    "id": "690cd8d0-78f7-4508-b450-50d6853cc7e7",
    "codigo": "4.1.01.21.0005",
    "descricao": "PEDAGIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PEDAGIO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 19.06
    }
  },
  {
    "id": "075a0e06-5f27-4d95-9d69-1b402c1d06d9",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO COM MARGARINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1603.2
    }
  },
  {
    "id": "f0811164-6112-42c8-8c06-638e4756322b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO FRANCES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 297.5
    }
  },
  {
    "id": "40d6675b-1b4b-4f19-866e-b3b60c66d6e7",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO MANDI",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1197
    }
  },
  {
    "id": "47a4ddbf-64ca-4ce9-a707-9e4ddcc5e40d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LANCHES E REFEIÇÕES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1091.05
    }
  },
  {
    "id": "dc6035d2-b555-4f90-bb80-f2ec6278bd54",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LANCHES E REFEIÇÕES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 512.3299999999999
    }
  },
  {
    "id": "a1925cfa-a4e5-4221-9bf0-b42824be9c98",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1192
    }
  },
  {
    "id": "d3a5bfa0-32f4-47d7-8ce4-499d7965a923",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 379.59999999999997
    }
  },
  {
    "id": "6f6f577a-942d-4a21-8b8a-514209733279",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 736.32
    }
  },
  {
    "id": "a3028935-df69-43b0-8432-c909be8baed3",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO DE MILHO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 117
    }
  },
  {
    "id": "ba70494e-7129-40c6-8798-6b65bcc6e202",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO COM MARGARINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 112
    }
  },
  {
    "id": "138eec61-751b-42a4-9cbc-83ece33e6b95",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.5
    }
  },
  {
    "id": "31a9ada9-5c26-43d7-9de8-21dfd9798b58",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.6
    }
  },
  {
    "id": "0e676c93-b089-4aa0-bc8b-8a305fe50722",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5
    }
  },
  {
    "id": "9e3d9086-13d6-41e2-998e-ca5553cb9c2d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.6
    }
  },
  {
    "id": "0d18d4bc-cf7c-4b2d-8b25-d69595ae0452",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10
    }
  },
  {
    "id": "dc49dec5-a3a3-4f68-8a78-2b4d457e9964",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11.4
    }
  },
  {
    "id": "9cd91f1b-6068-48c4-a1aa-3271e9792530",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 29.4
    }
  },
  {
    "id": "c599dd01-1425-4aba-90e3-57cca3dfd711",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 29.6
    }
  },
  {
    "id": "73489c7c-23f0-42e5-89fd-17a86065f161",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.6
    }
  },
  {
    "id": "b0d94f3f-21a1-463d-bdf4-978eda1e4c67",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 57
    }
  },
  {
    "id": "edd3a41b-e86b-49a6-9a21-ebcfc7664bc6",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.65
    }
  },
  {
    "id": "635e8913-1b02-43e4-9115-e0645be7dcab",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4
    }
  },
  {
    "id": "7105443a-6ecf-4d9c-9ca9-c0224c7b8da5",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.2
    }
  },
  {
    "id": "86cc452e-f7a3-434a-8479-f417ae66e6a0",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.35
    }
  },
  {
    "id": "8cee7f0b-73cd-4e4d-bff1-49b642261223",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.2
    }
  },
  {
    "id": "ca0c087e-b978-4882-88eb-becdb04c2aea",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.5
    }
  },
  {
    "id": "d5429854-a28a-431a-956f-f48398c8091e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.6
    }
  },
  {
    "id": "eafb67a2-7a63-443d-a943-19da1f333c31",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.6
    }
  },
  {
    "id": "8344734c-161c-4fb1-b389-32083396ce2d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.1
    }
  },
  {
    "id": "49c4bb69-545e-41ec-9644-bfae74d94784",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.2
    }
  },
  {
    "id": "e3db3213-616e-461f-9233-6dbce271a58b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.3
    }
  },
  {
    "id": "61c4c6fc-0966-4c29-b3c6-bddb4c293d00",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "0084555e-9608-4276-8e10-2d92b0bc0c9e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.2
    }
  },
  {
    "id": "cd62abc3-5e9c-4f92-8ca5-6d628e32cf3a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10
    }
  },
  {
    "id": "bbbbe382-91be-4cc3-b50b-34e0eef532ad",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.2
    }
  },
  {
    "id": "3b49fb5e-074c-49bb-a6ea-b1244984ac46",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20
    }
  },
  {
    "id": "00665157-333e-43a1-af76-c7b85a14f9d3",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.8
    }
  },
  {
    "id": "6e22167a-0a6e-479c-8270-b85da25aad50",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 58.8
    }
  },
  {
    "id": "e37e4e61-700b-4e45-9edc-ce18f74c6156",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59.2
    }
  },
  {
    "id": "27c606b1-400e-4ddb-a071-e6191572097c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 67.2
    }
  },
  {
    "id": "1c74ccdf-5f56-468a-9cfb-1b3db823f815",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 114
    }
  },
  {
    "id": "b03f8054-176c-4666-b757-e61c27a6a835",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.3
    }
  },
  {
    "id": "ec964692-b2c1-4d34-8410-57bfc52bf253",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8
    }
  },
  {
    "id": "f5320c89-e1e2-4b03-9fb1-b7a11847d6f0",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.4
    }
  },
  {
    "id": "a11dce51-baf5-4aca-a20d-2969759339ec",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.7
    }
  },
  {
    "id": "425bbf95-8bbb-4f23-87cb-bdf914416147",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.4
    }
  },
  {
    "id": "64413e69-1a59-4b43-bd71-bb525efe043b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3
    }
  },
  {
    "id": "ba307afc-f132-484a-9400-0e22ca6f2fa1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.2
    }
  },
  {
    "id": "06764c6f-33cb-4de4-b38b-c6a78662deed",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.2
    }
  },
  {
    "id": "5b8ae9d4-f6f2-423a-a96f-28e5fe324389",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.2
    }
  },
  {
    "id": "3259085f-5c8d-415c-9bd4-fad57c1a76c9",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.4
    }
  },
  {
    "id": "8ae3d6f4-251b-4fbe-a79b-e1dfcbc623af",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.6
    }
  },
  {
    "id": "417972d0-df0d-4925-b0da-721ed1a4b982",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.5
    }
  },
  {
    "id": "37fc9aab-2676-4119-82b1-dce50ed88754",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.6
    }
  },
  {
    "id": "734b1ee4-105f-4ce3-94ed-20fbe9396d66",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5
    }
  },
  {
    "id": "a497918a-6149-4d05-93a7-e092eca9a129",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.6
    }
  },
  {
    "id": "31991ba4-04e2-470d-8bc2-3680c3cfbce5",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10
    }
  },
  {
    "id": "5aebae83-5acf-48d6-8b07-5388eba22157",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 34.92
    }
  },
  {
    "id": "c3e4fc9a-2ca9-445b-ba64-1cba3746ed9b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 29.4
    }
  },
  {
    "id": "1960bce6-e4cb-45b1-8558-3a35b23db670",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 29.6
    }
  },
  {
    "id": "1335d82e-1b75-49e7-ad50-41777a68712c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.6
    }
  },
  {
    "id": "902f0507-d210-498d-b873-70f18ee2126a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 57
    }
  },
  {
    "id": "3dd59be6-31f0-4bc1-a52a-7cf38272b5c9",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.65
    }
  },
  {
    "id": "b7fbcf26-7015-469b-86ab-20168533b859",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4
    }
  },
  {
    "id": "998ce390-93e1-466d-ad00-4d77bd328817",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.2
    }
  },
  {
    "id": "b60c5a71-011c-4b55-876e-6492bd854680",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.35
    }
  },
  {
    "id": "791fbfaa-98dc-4d9f-a2b8-4c8c376c2620",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.2
    }
  },
  {
    "id": "ae7db435-c71f-47a5-97b1-d35537c35061",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.5
    }
  },
  {
    "id": "4bf453dc-e9b8-47b0-b81a-73f675b7810a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.6
    }
  },
  {
    "id": "8568789c-5dcb-4c42-a2b2-508e76285106",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1.6
    }
  },
  {
    "id": "669000ce-5bb0-4367-b2aa-9316b18ff4be",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.1
    }
  },
  {
    "id": "e2e6a3ef-2a6e-4df4-8596-a439f3c79c7e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.2
    }
  },
  {
    "id": "9f372502-fba7-4649-b855-d14473197b5d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.3
    }
  },
  {
    "id": "bc83efea-36f7-4c6e-bea9-7a3d7a579fc2",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18
    }
  },
  {
    "id": "1cc8aaa0-9b59-4784-937a-a80c951b679e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18.4
    }
  },
  {
    "id": "9f05c334-5e4f-4c41-ba33-205162733f2c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20
    }
  },
  {
    "id": "42ec0c1b-4bca-476c-9fc5-52dec2e9744d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 26.4
    }
  },
  {
    "id": "175acaf9-e85e-4100-90b0-4f115da27cee",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40
    }
  },
  {
    "id": "ecf25ff7-1649-45de-98f5-6954cc08e004",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 45.6
    }
  },
  {
    "id": "621a10d7-f444-4bd0-b407-d36b3caab632",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 117.6
    }
  },
  {
    "id": "36ce534b-b370-45f1-bfd5-a8b08c499dfd",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 118.4
    }
  },
  {
    "id": "c776af3f-79a4-4b70-b7a2-12dcdfa14a7a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 134.4
    }
  },
  {
    "id": "d23253e1-fded-4b45-8d97-c6bc54790f02",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 228
    }
  },
  {
    "id": "b508c266-545c-47ac-93a7-7fcde1db5444",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14.6
    }
  },
  {
    "id": "93b13e3c-6e29-4de2-a239-d868ca105386",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16
    }
  },
  {
    "id": "39a1abfe-1591-497f-bd19-57f77c7ed6b6",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12.8
    }
  },
  {
    "id": "d1d3f6f6-e53e-4389-9f23-2bd4faceb8eb",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.4
    }
  },
  {
    "id": "08576871-b8a7-48bc-a513-83461e1779e5",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.8
    }
  },
  {
    "id": "a7482e7b-6d05-44ba-9c31-8e12f65b1204",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6
    }
  },
  {
    "id": "60413dee-0f11-4565-8a99-a8fcd28615e4",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.4
    }
  },
  {
    "id": "b384a469-4cc1-4491-ac8f-481ae5c87ca1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.4
    }
  },
  {
    "id": "822c1b73-a342-4466-884f-0250e75a5f0d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.4
    }
  },
  {
    "id": "892a135c-d905-4d33-b474-d48b3a854114",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8.8
    }
  },
  {
    "id": "8ab17e5a-c085-4e36-bc1c-80f38fb1c2d7",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.2
    }
  },
  {
    "id": "ac2b4fc0-4cbb-4510-85f7-ae7ea59007db",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 94.5
    }
  },
  {
    "id": "bf891270-0c27-4a10-9d66-788f277b3d6e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 96.6
    }
  },
  {
    "id": "4ad156bb-76a1-4576-9ea9-d70bee97b5ad",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 105
    }
  },
  {
    "id": "0cbc983b-336a-4a4f-805c-b239cbe7f9fd",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 138.6
    }
  },
  {
    "id": "c75b4ec4-e759-436d-b06e-979407f9750e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 210
    }
  },
  {
    "id": "3f912209-576a-4834-8f7d-e78e5fd7011f",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 239.4
    }
  },
  {
    "id": "7fcbd942-78f3-450e-904f-03514c516146",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 617.4
    }
  },
  {
    "id": "92eb0f6d-3328-4366-aa5d-434c958c6370",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 621.6
    }
  },
  {
    "id": "0801d8e3-fd78-4265-b2b8-851889c1a487",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 705.6
    }
  },
  {
    "id": "6306706a-39ea-4d9f-a921-1fc5c3538b7e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1197
    }
  },
  {
    "id": "873dccda-2219-4e17-b39c-535c62af573f",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 76.65
    }
  },
  {
    "id": "eb623153-fc14-4d87-9af5-67d2172a1717",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 84
    }
  },
  {
    "id": "2bbc7752-2545-48be-8b86-58f40818fa4f",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 67.2
    }
  },
  {
    "id": "2f522acc-2bbf-4c2a-827d-9fd4a3a3350f",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 70.35
    }
  },
  {
    "id": "a2c796d0-6b87-4f90-be57-8da4d4ba2695",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 25.2
    }
  },
  {
    "id": "01a91fb7-d495-49ba-a399-0484b91e0930",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 31.5
    }
  },
  {
    "id": "d8b84ddf-3abf-4011-b898-4d1457dc36d1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.6
    }
  },
  {
    "id": "304a16fa-cb7f-4ac0-829b-6a9204aa8304",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 33.6
    }
  },
  {
    "id": "ca678288-f635-4efc-9291-3d4197b2ed1c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 44.1
    }
  },
  {
    "id": "52ad1529-4af1-4e08-b6b8-639e9e729d71",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 46.2
    }
  },
  {
    "id": "670b1b0d-2f95-48db-a63b-470f46e32000",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 48.3
    }
  },
  {
    "id": "6746fdf5-3b14-42e4-af61-7f3c6eeb8a6a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28.599999999999998
    }
  },
  {
    "id": "37f82b97-a25b-4857-9f08-f974d32bce30",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 35.9
    }
  },
  {
    "id": "3bacda6d-5526-4c10-86a6-6d5e4b7db5b5",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 38.400000000000006
    }
  },
  {
    "id": "59a6b9d7-80cc-4d92-840d-a0dea482b006",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 38.400000000000006
    }
  },
  {
    "id": "271591d9-5fb7-480f-9856-1763720a312a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50.300000000000004
    }
  },
  {
    "id": "e9d75864-b78d-43f6-b140-77954a22695b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 52.800000000000004
    }
  },
  {
    "id": "c679e9f5-7b5d-49ec-8c3f-76898f6ede9a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 55.199999999999996
    }
  },
  {
    "id": "787bb990-96e7-4abe-95c3-780536b7bce2",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9
    }
  },
  {
    "id": "49ddda4e-ec85-4671-a398-0026545a4409",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.2
    }
  },
  {
    "id": "35996c01-859a-449e-93c3-07b863e93ad6",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10
    }
  },
  {
    "id": "3e5485a5-117f-4f4f-84fc-c736c3209c70",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13.2
    }
  },
  {
    "id": "ad925790-0868-4a4d-a6fd-fa515b82fd26",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20
    }
  },
  {
    "id": "f4fbb2ab-1f99-4aed-bb8f-2f8ceaf3caca",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22.8
    }
  },
  {
    "id": "16a36eda-51dd-47d5-9460-6233f61f01be",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 58.8
    }
  },
  {
    "id": "668ad758-a1e4-4097-be58-06f1061ec939",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59.2
    }
  },
  {
    "id": "643dad50-c02e-4504-99ba-4fb7bf8ae532",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 67.2
    }
  },
  {
    "id": "ce1dd392-be34-434d-9e51-8ced36fb8b3b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 114
    }
  },
  {
    "id": "3c423174-97e9-405e-affe-aa6ab5adb496",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7.3
    }
  },
  {
    "id": "2597b18c-789b-43b1-ae9b-3c7681a5d9a3",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8
    }
  },
  {
    "id": "d73988b2-bc6a-41e7-bd5f-7614c4aed107",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.4
    }
  },
  {
    "id": "15bf2177-9f24-4927-9c53-a49d79ccfc61",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6.7
    }
  },
  {
    "id": "2fb85154-0a7e-4bfe-a926-37186e1a1d61",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2.4
    }
  },
  {
    "id": "856368f9-55e6-433d-b045-6b111f07aa91",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3
    }
  },
  {
    "id": "0ad50bed-f3e6-4f1d-bd7d-3716b9335e9b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.2
    }
  },
  {
    "id": "2b763c32-72e3-470a-bbef-9c7d4f4dbe8b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3.2
    }
  },
  {
    "id": "c36a00e0-d9b9-4aaf-aded-ea7a8ebe1e4a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.2
    }
  },
  {
    "id": "c8d54b47-5cbe-4abf-965e-a92a6447ff1d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.4
    }
  },
  {
    "id": "2eba0666-7b10-451f-8245-2b18a4205aec",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4.6
    }
  },
  {
    "id": "2bc15796-9f21-44b1-9864-367264616c12",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 107.3
    }
  },
  {
    "id": "ceedda5b-7c8f-42b6-989c-d08a82f0c975",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 110.39999999999999
    }
  },
  {
    "id": "d8b9cb20-bfa5-4439-9603-e4e9035c52ae",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 120
    }
  },
  {
    "id": "0f72068a-f6b7-475e-abe7-d48cb81c0952",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 158.39999999999998
    }
  },
  {
    "id": "2c6e84b8-0cd3-47d7-a932-f58c20ec18fc",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 238.6
    }
  },
  {
    "id": "627b4304-7216-4404-baaf-9563a1e009e0",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 707.5999999999999
    }
  },
  {
    "id": "a2fe289d-ca61-45d8-aad8-ad401e528861",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 794.4000000000001
    }
  },
  {
    "id": "e76533eb-a782-4faf-a424-81e9b7ec3a7c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1365
    }
  },
  {
    "id": "42d6bfd6-0ffa-4212-8a82-0293546d18e9",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 87.60000000000001
    }
  },
  {
    "id": "7a57af2c-2c52-4f37-a7e8-3ecdf4accc77",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 96
    }
  },
  {
    "id": "30d1420a-113e-4283-8b6d-d43f720c8af4",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 76.80000000000001
    }
  },
  {
    "id": "d3361fc8-9e0f-43ec-8711-a50f94707d1b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 80.39999999999999
    }
  },
  {
    "id": "cf92bff2-da0c-4b36-ad35-dc7b4a31416e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO KG",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 149.23
    }
  },
  {
    "id": "85113b40-d01f-4622-8e1e-a7eb9bff8d66",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LANCHES E REFEIÇÕES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 40
    }
  },
  {
    "id": "2f3d8bc0-272d-4077-aaef-36be58a6dc7f",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PASTEL DE CARNE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4
    }
  },
  {
    "id": "6aaca804-6ca6-4c7e-a5fe-3983a0563eb7",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SALGADO ASSADO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14
    }
  },
  {
    "id": "5cc83c96-bd36-4ed9-8069-7b7845ca8d6a",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO DE QUEIJO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18
    }
  },
  {
    "id": "828bd457-272c-45a8-a86b-d0c5911f6ef1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAOZINHO COM PATE",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21
    }
  },
  {
    "id": "38af6c99-3327-4902-aa85-374f32fdd3df",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LANCHES E REFEIÇÕES",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 18
    }
  },
  {
    "id": "943373d2-6320-4d3d-a3a9-5921fa82e375",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CARTAO ALIMENTACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1168
    }
  },
  {
    "id": "ac39977e-2d89-4596-93ad-ed3462fb3400",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CARTAO ALIMENTACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 292
    }
  },
  {
    "id": "efec3ef1-739f-4db9-835e-f9f588bf7430",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CARTAO ALIMENTACAO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2044
    }
  },
  {
    "id": "802e8fc2-807a-46a6-9476-9e2daec35dee",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE GADO",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE GADO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LANCHES E REFEIÇÕES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 371
    }
  },
  {
    "id": "723d695c-2467-4714-bf1e-99e9396b9cd9",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACUCAR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 436.88
    }
  },
  {
    "id": "72c34437-ec48-40d7-b9aa-703ad4905c49",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 895.5
    }
  },
  {
    "id": "8852a59e-55de-4207-9d27-9bc5088472c3",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO DE MILHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 780
    }
  },
  {
    "id": "a454169d-fc63-4260-a1d7-6e97a0be6c49",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PAO COM MARGARINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 888
    }
  },
  {
    "id": "2a03faae-8e74-4441-b834-ced549e666ee",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SARDINHA EM MOLHO DE TOMATE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 117
    }
  },
  {
    "id": "b8cfc4dc-d389-4dc9-ad8f-5fd42d3a08af",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SUCO ADOÇADO 140G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 119.6
    }
  },
  {
    "id": "763ea1e8-81c3-4d59-8bb5-3b25825fe085",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "MACARRAO 500 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 130
    }
  },
  {
    "id": "5b969223-dc35-4b22-a35d-664f287b2dfe",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LEITE EM PO INTEGRAL 200 GRAMAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 171.6
    }
  },
  {
    "id": "ece2e453-b5b8-4c18-bf6a-0bcf47dd4ab8",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "EXTRATO DE TOMATE 340G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 260
    }
  },
  {
    "id": "0a4969d8-edae-42df-8320-c4003f8b1ac8",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAFE MOIDO PCT 250 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 764.4
    }
  },
  {
    "id": "b2e6f945-d0ea-4aea-af0c-1a9fee53bb9c",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "OLEO DE SOJA 900ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 776.59
    }
  },
  {
    "id": "4d8b8a12-6dd2-471b-a6ad-8ee90f43593f",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FEIJAO TIPO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 873.6
    }
  },
  {
    "id": "8e279b0d-708f-47ce-ba7a-def6c683cf7b",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ARROZ PCT 5 KGS TIPO 1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1482
    }
  },
  {
    "id": "7c72b17d-b69d-4cd1-aa7a-3db543f77d0e",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAPIOCA 500 GR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 94.9
    }
  },
  {
    "id": "66f22da8-0189-48b4-82d0-f0c0c92b5677",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 400GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 104
    }
  },
  {
    "id": "3de9fd54-f36d-4260-ac77-aaac232d95d0",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FARINHA DE MANDIOCA 500 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 83.2
    }
  },
  {
    "id": "c68dfa7e-f381-4d93-bc27-b3235839d1d1",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA AGUA E SAL 400 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 87.1
    }
  },
  {
    "id": "7c8895f8-f434-4b05-981f-981c3af85ecc",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "SAL COMUM PARA CESTA BÁSICA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 31.2
    }
  },
  {
    "id": "4ee30980-a951-475e-bfcb-3588f8e69975",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TEMPERO COMPLETO 300G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 39
    }
  },
  {
    "id": "f2da66cf-9023-433a-affd-6473d999cbf7",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOLACHA DE DOCE 115GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 41.6
    }
  },
  {
    "id": "adad335e-6867-49fc-b1d8-42a2feb4ff7d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "FLOCAO DE MILHO 500 GR CUSCUZ",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 41.6
    }
  },
  {
    "id": "acf3176f-ca9c-4f6d-a628-7007a2445d62",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "ACHOCOLATADO EM PO 200G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 54.6
    }
  },
  {
    "id": "49538b14-4551-45d7-8d7f-a94eaf7dbc65",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GELATINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 57.2
    }
  },
  {
    "id": "affe493d-66a1-4f69-a100-64b8c9bff9b3",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "GOIABADA 300 G",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59.8
    }
  },
  {
    "id": "a94e0c98-dc81-423a-9108-56e641ceefd6",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LANCHES E REFEIÇÕES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 156
    }
  },
  {
    "id": "ac52ee4a-3d72-4ba8-9949-9077c5078b3d",
    "codigo": "4.1.01.21.0012",
    "descricao": "LANCHES E REFEICOES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CARTAO ALIMENTACAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2920
    }
  },
  {
    "id": "e1ce215e-8bb6-49af-b4e5-b7df8bd0174c",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1376.8600000000001
    }
  },
  {
    "id": "c018d904-bcc5-42ae-a09b-a47edaef94dc",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 23419.84
    }
  },
  {
    "id": "280b8dcf-6bc4-4555-a053-51a0562b6806",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 193.57
    }
  },
  {
    "id": "f3c09b81-5eaf-4760-9590-c5ed286f5895",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5257.99
    }
  },
  {
    "id": "73221f82-8457-4348-8bad-676141f8a3f7",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "REGISTRO DEFINITIVO PO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10495.17
    }
  },
  {
    "id": "aad00927-2836-4e1a-8d5d-ae207c4c22ce",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "REGISTRO PROVISORIO LA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 38.64
    }
  },
  {
    "id": "d47f04af-46b7-4f7a-af79-da02d1e60d15",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "REGISTRO PROVISORIO PO",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 57.95
    }
  },
  {
    "id": "1ef7131b-8d0d-4278-a0b4-4bf828238972",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "REGISTRO DEFINITIVO LA",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1446
    }
  },
  {
    "id": "5ec84d4b-fa4e-4b84-9a39-7f9ccfa0bdd0",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3000
    }
  },
  {
    "id": "a42e624b-3981-44ed-bf76-275ad6edae8c",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 384
    }
  },
  {
    "id": "b76a315d-04a2-4149-8ea6-d538bb7e534a",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 108.39
    }
  },
  {
    "id": "25ab357d-5a1a-4d31-8277-213dbd32734c",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": -2682.65
    }
  },
  {
    "id": "f068c0da-81cf-4cca-9720-6e23451d1d3e",
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
    "id": "8e19ef9f-50ab-42bb-bce1-179bc7f69625",
    "codigo": "4.2",
    "descricao": "4.2",
    "tipo": "C",
    "codigoPai": "4",
    "nivel": 2,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "a4f196cc-f388-4794-aa2e-30c6f2bfd0b2",
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
    "id": "79e893a2-c0bf-45a4-8b4b-aad6b01f8867",
    "codigo": "4.2.01",
    "descricao": "4.2.01",
    "tipo": "C",
    "codigoPai": "4.2",
    "nivel": 3,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "165f0061-8261-4504-9418-1836e77b106a",
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
    "id": "7e0261e3-37a4-4ee7-b3b4-ea713f92fb07",
    "codigo": "4.2.01.02",
    "descricao": "4.2.01.02",
    "tipo": "C",
    "codigoPai": "4.2.01",
    "nivel": 4,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "9b1e5200-b3fd-406d-a059-0b48eaacd2ba",
    "codigo": "4.2.01.02.0001",
    "descricao": "RATEIO RECEBIDO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 15979.14
    }
  },
  {
    "id": "ba84ff1b-3cf5-475c-a11d-6b5bc54824d7",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 61699.42
    }
  },
  {
    "id": "91c8977d-f977-42ab-93a3-2680b621c920",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4850
    }
  },
  {
    "id": "8e111728-af78-412b-bb9a-c49098bc16bf",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2013.12
    }
  },
  {
    "id": "e2cd1c2f-d8b2-439a-8bb1-718f6c6c84be",
    "codigo": "4.2.01.02.0010",
    "descricao": "RATEIO CERQUEIROS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 30599.49
    }
  },
  {
    "id": "798fe8d3-7f14-4f72-959e-30a178ddd363",
    "codigo": "4.2.01.02.0010",
    "descricao": "RATEIO CERQUEIROS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14528.84
    }
  },
  {
    "id": "bf61738c-9b3b-4607-b326-d6b5ab3133e1",
    "codigo": "4.2.01.02.0010",
    "descricao": "RATEIO CERQUEIROS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4002.45
    }
  },
  {
    "id": "01b331bc-18b5-4932-bb6b-ac3d041aaba0",
    "codigo": "4.2.01.02.0010",
    "descricao": "RATEIO CERQUEIROS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 11280.88
    }
  },
  {
    "id": "cdea057f-9355-4c96-bc50-cfa41f217acf",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 31.13
    }
  },
  {
    "id": "0d688fd6-c7b7-4959-86b0-9ef085d0e916",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 94.26
    }
  },
  {
    "id": "c599435f-3c5c-4eab-84df-a36deaf5dc01",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 31.13
    }
  },
  {
    "id": "597541aa-90bc-4722-9f2c-2263bb956e16",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 125.39
    }
  },
  {
    "id": "572f08cf-0488-4d3d-8969-d9c5b614069e",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 849.17
    }
  },
  {
    "id": "358d069c-378f-4cd9-9ec2-1fc341ffe2fa",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 817.17
    }
  },
  {
    "id": "67a399b7-7159-451d-97b0-962a86cfae31",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 125.39
    }
  },
  {
    "id": "81aacd0d-4248-4fba-be68-6932c0e6ec2d",
    "codigo": "4.2.01.02.0018",
    "descricao": "RATEIO MEDICINA E SEGURANCA DO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1294.36
    }
  },
  {
    "id": "21fc37ea-b722-4179-a7d4-c5d09e6b094e",
    "codigo": "4.2.01.02.0020",
    "descricao": "RATEIO MOTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 24.58
    }
  },
  {
    "id": "03b300cc-f712-49f9-a637-ba276b14a3e9",
    "codigo": "4.2.01.02.0020",
    "descricao": "RATEIO MOTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3785.37
    }
  },
  {
    "id": "fec24af9-dbcb-46e9-bb77-c0e2447b94ef",
    "codigo": "4.2.01.02.0021",
    "descricao": "RATEIO VEICULOS MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 267.88
    }
  },
  {
    "id": "f8b02da2-642d-49bd-84a7-df7164b0211b",
    "codigo": "4.2.01.02.0021",
    "descricao": "RATEIO VEICULOS MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10173.19
    }
  },
  {
    "id": "237ecb16-2823-45ed-91a0-ef806267db1e",
    "codigo": "4.2.01.02.0021",
    "descricao": "RATEIO VEICULOS MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7494.39
    }
  },
  {
    "id": "c8d882ef-e49e-4b16-82c1-cfb32dceff19",
    "codigo": "4.2.01.02.0024",
    "descricao": "RATEIO OFICINA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 433.98
    }
  },
  {
    "id": "bd7dc6a1-d2ae-414d-88e4-9b80b37461d0",
    "codigo": "4.2.01.02.0024",
    "descricao": "RATEIO OFICINA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2799.61
    }
  },
  {
    "id": "ede5cf8b-42c3-48aa-afec-649f75cf2122",
    "codigo": "4.2.01.02.0024",
    "descricao": "RATEIO OFICINA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10167.84
    }
  },
  {
    "id": "e797761b-e03a-4189-8886-653923ad1b4f",
    "codigo": "4.2.01.02.0027",
    "descricao": "PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2198.66
    }
  },
  {
    "id": "33480f9b-1d74-429c-b841-20a819b7fef0",
    "codigo": "4.2.01.02.0027",
    "descricao": "PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2198.66
    }
  },
  {
    "id": "40dcd366-7420-4375-b2a8-6df9dfcd38e6",
    "codigo": "4.2.01.02.0027",
    "descricao": "PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE INSUMOS",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE INSUMOS",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1008.41
    }
  },
  {
    "id": "e5753ed9-a924-48ea-8ce4-370ceb8e45f1",
    "codigo": "4.2.01.02.0027",
    "descricao": "PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5885.110000000001
    }
  },
  {
    "id": "1975cc47-2ba3-46d4-885b-a3ffdc8b0ffb",
    "codigo": "4.2.01.02.0028",
    "descricao": "RATEIO GRADES ARADORAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 77.52
    }
  },
  {
    "id": "71944396-5424-43c9-bfaf-f15df2102754",
    "codigo": "4.2.01.02.0030",
    "descricao": "RATEIO TRATORES PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4063.1
    }
  },
  {
    "id": "de592940-3e99-45ac-9485-1ada040a7501",
    "codigo": "4.2.01.02.0030",
    "descricao": "RATEIO TRATORES PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 37582.88
    }
  },
  {
    "id": "27f0e300-0987-4136-be77-6013b2497ce2",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1023.65
    }
  },
  {
    "id": "da5ca7e2-2fcc-42c2-ab65-9be3821412d8",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3142.9300000000003
    }
  },
  {
    "id": "370cd5a0-6d4c-40b4-89c8-a81bd5ec43cc",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 575.8
    }
  },
  {
    "id": "7247a6ce-4769-436b-96f7-afc523d84e77",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2263.2200000000003
    }
  },
  {
    "id": "c5fd7756-e8ef-450b-8ed9-cb92c6456766",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 647.77
    }
  },
  {
    "id": "2d215a78-8dcf-47a9-93f9-1a38d51c3722",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 36046.14
    }
  },
  {
    "id": "d7d28b5a-5284-48e4-abf8-43cf32937f06",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 31276.9
    }
  },
  {
    "id": "bbaedb9e-a534-4ed9-a840-a6351a9e3340",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8207.4
    }
  },
  {
    "id": "bfdc9e8e-f984-4b33-a29e-8e7f8e67271f",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 14196.65
    }
  },
  {
    "id": "0e5ce887-cd8d-4fab-a96d-04fecc000066",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1220.03
    }
  },
  {
    "id": "c3cfd8d1-b11a-4afd-80c4-01a5a40af002",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 13752.97
    }
  },
  {
    "id": "887055d6-2185-4a18-a84d-a6286f9b8ced",
    "codigo": "4.2.01.02.0036",
    "descricao": "RATEIO TRATORES MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 7267.879999999999
    }
  },
  {
    "id": "761a0406-21e6-449c-b3c4-3f88f5e6f2e5",
    "codigo": "4.2.01.02.0036",
    "descricao": "RATEIO TRATORES MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2795.35
    }
  },
  {
    "id": "fb91236d-ef4c-4fbd-99bc-964ebb8a0bd1",
    "codigo": "4.2.01.02.0036",
    "descricao": "RATEIO TRATORES MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 21021.1
    }
  },
  {
    "id": "d2a558f9-df98-4f6f-bb6c-431173e9420d",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 12761.810000000001
    }
  },
  {
    "id": "111df039-8ef3-42d2-b5c5-dc7ed05e262a",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28975.74
    }
  },
  {
    "id": "ca911f3e-c689-4e18-8b1a-536e9403e171",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 430.78999999999996
    }
  },
  {
    "id": "8c9ecafc-473b-4368-84e2-c19303018074",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1944.58
    }
  },
  {
    "id": "1a72d4da-78b1-4d16-b8ec-1cfd10f36f1b",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2340.8199999999997
    }
  },
  {
    "id": "ee50c41d-3e16-49cd-99d9-29e4b9b04f8f",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4595.04
    }
  },
  {
    "id": "f36d582f-73ad-4d8f-81ef-e1d4099220be",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 757.9
    }
  },
  {
    "id": "8d5b4f8a-c7ad-40b6-a765-841059e4799b",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1634.36
    }
  },
  {
    "id": "a25c820a-1abb-432e-bdd2-a282f0c0fea0",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 35686.05
    }
  },
  {
    "id": "2250c279-f8f5-424a-94d5-a9a79b85664b",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 971.05
    }
  },
  {
    "id": "0ec14df0-5c1c-4da9-95f3-772388cdd72f",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 20219.37
    }
  },
  {
    "id": "9d061d47-7bc8-4383-a323-c06527ba40a8",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE GADO",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE GADO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 59324.090000000004
    }
  },
  {
    "id": "ad770bbb-729a-4fc6-ab8a-cb3deaa8a05c",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2115.89
    }
  },
  {
    "id": "051c19c2-a5ca-408b-8731-720a32b5ac39",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 3397.38
    }
  },
  {
    "id": "08aaf957-bcce-4277-95f3-365057afca16",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 163.17
    }
  },
  {
    "id": "398814df-ec5e-40da-a7ea-5fe99ec01968",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 5996.18
    }
  },
  {
    "id": "01197d1d-7220-4df7-8955-43c20153838c",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 274.61
    }
  },
  {
    "id": "540c4ca1-248e-41ca-b719-c517c79f9bc1",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 127.34
    }
  },
  {
    "id": "a381e56a-0258-41f4-8dab-4dc456bb768f",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 772.06
    }
  },
  {
    "id": "765d45a4-d9ff-4b05-944a-5605bcc448ab",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO - TRANSPORTE DE GADO",
    "centroCusto": "CONFINAMENTO - TRANSPORTE DE GADO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9503.72
    }
  },
  {
    "id": "066be7ee-de55-4b0f-a2f1-66e7cc71980c",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 355.52
    }
  },
  {
    "id": "0fa51ea7-07f8-4765-a7da-200890815956",
    "codigo": "4.2.01.02.0040",
    "descricao": "RATEIO OFICIAL DE MANUTENCAO BANDEIRANTE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 2509.88
    }
  },
  {
    "id": "3d888b58-b8db-4225-84a4-18082b6a43e1",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28021.32
    }
  },
  {
    "id": "bec9322a-5dc3-4b3e-b069-b6d55acd5618",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8006.09
    }
  },
  {
    "id": "638d381f-5477-4801-be69-b65d6a6d2eed",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 50038.07
    }
  },
  {
    "id": "7135142c-6b34-460c-97e4-15d4ffcd941a",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8006.09
    }
  },
  {
    "id": "73572a8d-b99c-4489-8d80-f6dac1fbdf99",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 4003.05
    }
  },
  {
    "id": "b77d469b-0c09-411f-a4ee-162e444aeec7",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 28021.32
    }
  },
  {
    "id": "3b76d8cc-5ae3-49bd-a2a0-5708df25e568",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 6004.57
    }
  },
  {
    "id": "545a3fbe-1683-44ac-b3cf-0bb98897d8fc",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1000.76
    }
  },
  {
    "id": "49a9201f-2959-483d-b6f8-f6d504c46b55",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1000.76
    }
  },
  {
    "id": "3573ecd8-cf94-4a03-9a69-3565ab493910",
    "codigo": "4.2.01.02.0042",
    "descricao": "RATEIO SUPERVISAO PECUARIA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 62047.19
    }
  },
  {
    "id": "d2a42a9a-9717-40df-b3cf-a9c308d2bc30",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 775.98
    }
  },
  {
    "id": "79b94b7e-fdcd-430c-94b8-78b3aafeaaef",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 117.13
    }
  },
  {
    "id": "40560e78-adcf-4fbf-abc1-8ae6c4517bac",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1068.8
    }
  },
  {
    "id": "7c773736-4805-4d85-9b47-e4129237ad49",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CANADÁ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1947.27
    }
  },
  {
    "id": "aaf1a84c-7c36-43f6-959a-095e6ec90cd5",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 17569.37
    }
  },
  {
    "id": "ff654d21-0132-48e8-957d-940bd0e69a0e",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9999.9
    }
  },
  {
    "id": "16cad4d4-9c80-412d-a514-36978cb083f2",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1947.27
    }
  },
  {
    "id": "ecf217d3-4ca3-4ca3-a8ff-b1a7a2de171d",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1508.04
    }
  },
  {
    "id": "fc88f413-23c9-41bf-917a-051f4690c016",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "COVOA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 43.92
    }
  },
  {
    "id": "3561a75e-2e51-4dd2-8c9e-cc8d150a24b0",
    "codigo": "4.2.01.02.0044",
    "descricao": "RATEIO FABRICA RACAO E SAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 111433.73
    }
  },
  {
    "id": "aa294237-0e09-40eb-85cc-7bcabb6176c1",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 698.53
    }
  },
  {
    "id": "0c02a36a-a1cd-42bf-91c1-82c42d5aa32a",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 284.58
    }
  },
  {
    "id": "41657e18-cc4f-4ccd-af5b-22f15423969a",
    "codigo": "4.2.01.02.0046",
    "descricao": "RATEIO PA CARREGADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1320.2
    }
  },
  {
    "id": "71247829-ce9b-49b6-b622-ef49e509cdfd",
    "codigo": "4.2.01.02.0046",
    "descricao": "RATEIO PA CARREGADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 83413.09
    }
  },
  {
    "id": "cb1bb0aa-2f0b-410b-90e0-1700cd75610f",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 178.29
    }
  },
  {
    "id": "5fd48e3a-ab90-4c3b-b233-de5c8936218c",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 463.55
    }
  },
  {
    "id": "cd98184a-bb99-4f4c-9aa6-d103f1dcc1ad",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 206.81
    }
  },
  {
    "id": "896e42ab-abd7-471c-a0b9-e60bf2ad0ad4",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 22723.79
    }
  },
  {
    "id": "f539f396-817c-475b-bc4b-3613de0d3d53",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1600.21
    }
  },
  {
    "id": "bbffdfe7-b050-4777-a9ed-444d1f48671d",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 8774.5
    }
  },
  {
    "id": "0adb4c20-4704-46c0-ae9e-f214cc41b3c7",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 629.02
    }
  },
  {
    "id": "e2596820-24e2-4745-a143-efd93f809791",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 868.27
    }
  },
  {
    "id": "f495d02e-8711-4754-9045-8dbf9ee4616e",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1418.77
    }
  },
  {
    "id": "6410c0ee-4a65-42cd-ad7f-0e0dcaea7990",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "GOTEJO",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-04": 942.45
    }
  },
  {
    "id": "a3463f90-0ae9-4ad9-a13f-877e7b736311",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 16737.06
    }
  },
  {
    "id": "78e5331c-9ee9-43a0-8c0f-31b76d4fdbd9",
    "codigo": "4.2.01.02.0053",
    "descricao": "RATEIO TRATO DE GADO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 142255.76
    }
  },
  {
    "id": "22f37880-d2cb-4d43-8131-d0514cd1b9de",
    "codigo": "4.2.01.02.0054",
    "descricao": "RATEIO MANUTENCAO PREDIAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 10610.85
    }
  },
  {
    "id": "9130d7be-3b20-4235-a6a7-ae3f3823bd86",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.11
    }
  },
  {
    "id": "0be76ee3-3070-411c-9159-a3a0a8342cc4",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 9.11
    }
  },
  {
    "id": "a59ea36d-189a-4ea1-90d5-be7197bb7683",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 27.57
    }
  },
  {
    "id": "c77025aa-b49a-4726-afcb-77626a20129e",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 248.39
    }
  },
  {
    "id": "24538e7d-85ed-4bef-9f58-76c8c1165a2f",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 36.68
    }
  },
  {
    "id": "271f9942-8b86-4293-a760-ab66635ced04",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 239.03
    }
  },
  {
    "id": "a101d892-9f09-4d00-84b2-fc7e8d4a84a9",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 36.68
    }
  },
  {
    "id": "af7fbcc4-0ce5-4187-8767-5abf1045ce85",
    "codigo": "4.2.01.02.0064",
    "descricao": "RATEIO PROGRAMA DE INTEGRIDADE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 378.64
    }
  },
  {
    "id": "039fece8-9ccd-4a99-8de0-1fc029281ae5",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CODORA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 130.72
    }
  },
  {
    "id": "70d32b65-8338-475f-8613-7d1c47b7b0fe",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "PORTEIRAS - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32.449999999999996
    }
  },
  {
    "id": "e1170a4f-cbc2-4bc5-9daf-f0a67c37fda3",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "BANDEIRANTES - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 851.9300000000002
    }
  },
  {
    "id": "f545ff3d-fac4-48a6-91e8-e53a5eff68cf",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "VERA CRUZ - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 130.72
    }
  },
  {
    "id": "ff547983-9213-4fd4-97fd-0e7c049b1edf",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "JOIA - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 884.38
    }
  },
  {
    "id": "04ff1daa-6e50-4cfd-adf9-82d59f4c658e",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CENTRO COMERCIAL DE TOUROS",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 98.25000000000001
    }
  },
  {
    "id": "62321d44-c97f-4000-8267-ffd943439a89",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "UNIÃO - PECUÁRIA",
    "centroCusto": "RATEIO GADO GERAL",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUARIA",
    "orcado": {},
    "realizado": {
      "2026-04": 32.45
    }
  },
  {
    "id": "9aead029-ca0a-41e0-b76e-1718a46d7126",
    "codigo": "4.2.01.02.0066",
    "descricao": "RATEIO PROJETOS DESENVOLVIMENTO HUMANO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-04": 1344.12
    }
  }
];