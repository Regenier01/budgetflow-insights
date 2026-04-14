import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = [
  {
    "id": "ddbacccf-e81a-445d-ab5d-97be501aaf73",
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
    "id": "b81e3610-41ce-4ccc-ac2f-c20b984bd91b",
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
    "id": "58f5cf99-0a2a-40b6-8b4d-1bc778ce9c18",
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
    "id": "982a6d1a-7107-4f36-8870-d30b524a4c16",
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
    "id": "52c6e6f8-1214-4100-940b-615efdbd8b64",
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
    "id": "54fa3a73-90b5-4b37-afe2-05e0cdcce31f",
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
    "id": "e4eb7432-0690-4f2a-adfa-425764da5cb5",
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
    "id": "2ad2ab30-c648-4605-82a1-92e43db104e2",
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
      "2026-02": 2797.38
    }
  },
  {
    "id": "e9986acb-f0a7-4a2c-ac60-945f8cb6ba42",
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
    "nomeProduto": "REPOSICAO FALTAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 192.53
    }
  },
  {
    "id": "08596023-acd4-41bd-855d-1b195f3d0702",
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
    "nomeProduto": "ATRASOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": -414.39
    }
  },
  {
    "id": "4a3c099f-2088-441d-adf7-f350d8b58714",
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
      "2026-02": 3139.74
    }
  },
  {
    "id": "5a0e02a8-2531-4a60-8858-fac725757fc6",
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
      "2026-02": 642.68
    }
  },
  {
    "id": "bdf373fa-5cd3-42d2-8daa-47042ea7d9a1",
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
      "2026-02": 855.5
    }
  },
  {
    "id": "44bda769-19e2-4a92-8361-d02495d526e5",
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
      "2026-02": 9432.64
    }
  },
  {
    "id": "b2aed4c0-5eca-4934-b2b9-02436a1c779b",
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
      "2026-02": 54420.62
    }
  },
  {
    "id": "490199ec-1f97-4263-b9f1-f4da3bdb5e6e",
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
    "nomeProduto": "CONDOMINIO CAPELINHA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": -460
    }
  },
  {
    "id": "5cac57ea-db0e-44e7-b90a-d8b13d9778c5",
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
    "nomeProduto": "REPOSICAO D.S.R",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 192.53
    }
  },
  {
    "id": "19a9d71f-7328-4905-8864-e96985a14093",
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
      "2026-02": 596.18
    }
  },
  {
    "id": "be1babe6-a427-4fdb-85a1-24e2de43348b",
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
      "2026-02": 221.8
    }
  },
  {
    "id": "11ef92e6-e942-408e-afe0-fb0161df6eaa",
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
      "2026-02": 2951.38
    }
  },
  {
    "id": "86384fcc-d69b-4504-9649-66a7090aceae",
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
      "2026-02": 5827.58
    }
  },
  {
    "id": "abda3b0a-f205-4dc3-8d07-99283099e40b",
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
      "2026-02": 9416.97
    }
  },
  {
    "id": "5dace237-8734-43ea-81e9-108d5910b751",
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
    "nomeProduto": "AJUSTE PROVISAO DE FERIAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1082.37
    }
  },
  {
    "id": "8006c39e-95f2-406a-9354-67ab4edb1e58",
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
      "2026-02": 7827.59
    }
  },
  {
    "id": "f5533801-1a83-4f32-8afe-2b2c7fd48360",
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
    "nomeProduto": "MIOFLEX A C/12 COMP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 26.8
    }
  },
  {
    "id": "e3edee65-4e97-42cc-97d8-36e7d12e1223",
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
    "nomeProduto": "BIOFENAC SPRAY",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 42.67
    }
  },
  {
    "id": "b47b2454-e789-4746-9389-c3a992215cfa",
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
    "nomeProduto": "MEDICAMENTOS FARMACIA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 510.25
    }
  },
  {
    "id": "18c08217-957e-4d31-8483-328cb8e7a845",
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
    "nomeProduto": "ESPARADRAPO 10 X 4.5M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 12.71
    }
  },
  {
    "id": "3d73991a-400a-4b6d-9a4a-3de6d3ed9c70",
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
    "nomeProduto": "CETOPROFENO 20MG GTS 20ML(GEN",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 22.56
    }
  },
  {
    "id": "8f00a320-9a78-43db-88ab-8be9ed2e78e7",
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
    "nomeProduto": "SORO FISIOLOGICO 100ML (ARBORE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 23.35
    }
  },
  {
    "id": "fd375cf0-bfc2-4521-9c78-2c25a7d28e3e",
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
    "nomeProduto": "PREDNISOLONA 20MG C/10 COMP",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 27.24
    }
  },
  {
    "id": "f2139d79-56e2-4b84-93f2-2f9f37717e9e",
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
    "nomeProduto": "DERMA NUTRI OLEO CICATRIZANTE 100ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 27.48
    }
  },
  {
    "id": "4badd036-6599-48ee-8366-7903daa34591",
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
    "nomeProduto": "CIPROFLOXACINO 500MG C/ 14 CPR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 45.12
    }
  },
  {
    "id": "1104879d-faee-4c91-8b89-502e1e16718f",
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
    "nomeProduto": "PARACETAMOL 750MG 20CPR TEUTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 65.65
    }
  },
  {
    "id": "9a959e97-d680-4ed7-8c14-59a5ac37828b",
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
    "nomeProduto": "COMPRESSA DE GAZE 5X7",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 65.9
    }
  },
  {
    "id": "1cbad3d5-cfe7-49f2-af26-201cc04626b9",
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
    "nomeProduto": "BELFAREN 50 MG 20 CPR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 76.92
    }
  },
  {
    "id": "8607fab9-5036-4609-a5e6-5c3bde43dabe",
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
    "nomeProduto": "ATADURA 15CM X 1,80 CREMER",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 164.31
    }
  },
  {
    "id": "87b65e2e-0a8f-408d-8222-5a623421f3e9",
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
      "2026-02": 171.71
    }
  },
  {
    "id": "a11affaa-67d8-4dbe-940f-c12124284c1c",
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
      "2026-02": 3873.16
    }
  },
  {
    "id": "70755fb8-939b-4d4a-9a3d-191921463e44",
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
      "2026-02": 21694.379999999997
    }
  },
  {
    "id": "59886309-2fe7-401f-882c-ddbe636d4d06",
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
      "2026-02": -1378.8600000000001
    }
  },
  {
    "id": "c1088302-0692-415c-8ae2-bab255464a80",
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
      "2026-02": -0.009999999999999998
    }
  },
  {
    "id": "c9a377d3-336f-4348-b563-71d8f525702f",
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
      "2026-02": -341.84000000000003
    }
  },
  {
    "id": "5904edfc-51a2-4eb3-bc9d-c4b27a831d50",
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
      "2026-02": 2207.39
    }
  },
  {
    "id": "083ab8d4-74fb-4868-92eb-a1e1097f8839",
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
      "2026-02": 3441.62
    }
  },
  {
    "id": "d36d609b-1cce-4b31-8f69-a1e11fcf4b7f",
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
      "2026-02": 571.24
    }
  },
  {
    "id": "a2af079a-ef97-454c-bad5-f47097c93965",
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
      "2026-02": 5890.67
    }
  },
  {
    "id": "b749d3b7-9c4e-4ec7-94eb-90274a5a9cfa",
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
      "2026-02": -168.2
    }
  },
  {
    "id": "1b73b993-99c5-4b93-b3df-d1d4fbed1e31",
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
      "2026-02": -96.98
    }
  },
  {
    "id": "7f901715-a379-49c2-90f2-59c1a7508fa1",
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
      "2026-02": -0.02
    }
  },
  {
    "id": "6838f478-9512-4288-a23d-0b4025345cca",
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
      "2026-02": 753.35
    }
  },
  {
    "id": "a8b2a7a7-7341-4689-9ae2-cca03fe50be8",
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
      "2026-02": 626.21
    }
  },
  {
    "id": "52e588bb-2df5-4550-b4e2-73d99b383358",
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
    "nomeProduto": "ENCARGOS FGTS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 140.35
    }
  },
  {
    "id": "5306fe95-cb87-481b-b658-b5c2f3a3f372",
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
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": -159.62
    }
  },
  {
    "id": "c9ad022d-2d0f-4d42-b18f-e8a85ec25438",
    "codigo": "4.1.01.02",
    "descricao": "4.1.01.02",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "1d56f808-c975-4133-9ca2-661649071a4f",
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
    "id": "16aa4146-edc9-4e77-aa1d-5e10762fac22",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE TERCEIROS PJ -",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 450
    }
  },
  {
    "id": "35e74e06-d20d-478a-be5f-4ec46af0bd0d",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2930
    }
  },
  {
    "id": "b1cb7521-0272-463e-8f3c-247a1b001615",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE PERICIA, AUDITORIA E ANALISE TECNICA - PRODUÇÃO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3165.36
    }
  },
  {
    "id": "207da2d8-6d61-4c1a-8880-96f031aaeeae",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4165.42
    }
  },
  {
    "id": "28dca34d-605e-4460-8a20-56578ad30f90",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T30 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2477",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICO DE TRANSPORTE E LOCACAO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4165.42
    }
  },
  {
    "id": "2aa5432b-2c8f-4f59-94e8-211ff01c1dc7",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE APOIO AGRICOLA",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 24728.6
    }
  },
  {
    "id": "892ef682-e42e-41e4-94d7-3338b9c02e12",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE APOIO AGRICOLA",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 111900.62
    }
  },
  {
    "id": "750e911c-269a-4374-9f54-5d8ce659f896",
    "codigo": "4.1.01.02.0002",
    "descricao": "SERVICOS DE TERCEIROS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "SERVICOS DE APOIO AGRICOLA",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 42386.05
    }
  },
  {
    "id": "e8c85075-f3d6-4e91-baf3-4cef06e8cbf2",
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
      "2026-02": 56024.23
    }
  },
  {
    "id": "b3fdd8c2-6c56-4e49-8771-98b466635809",
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
      "2026-02": 81.25
    }
  },
  {
    "id": "2acfd8ed-774b-48ff-9616-98a96b2b0d4a",
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
      "2026-02": 444.67
    }
  },
  {
    "id": "72520ad0-f03e-475d-8d09-429764c0e8ee",
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
      "2026-02": 15275.720000000001
    }
  },
  {
    "id": "2e7e6802-c747-4dc7-99f3-f1b62bf0f6fb",
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
    "nomeProduto": "OLEO DIESEL S10 CLASSE B 8% BIODIESEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1166.8400000000001
    }
  },
  {
    "id": "977f45a2-6beb-4678-b591-4dfef1f79f18",
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
      "2026-02": 1090
    }
  },
  {
    "id": "00fd5cc5-673c-4beb-8481-3785e1b394ec",
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
      "2026-02": 6854.34
    }
  },
  {
    "id": "52ca63df-b1dc-4189-b3d1-1f94fc1951f7",
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
      "2026-02": 10640
    }
  },
  {
    "id": "c665641a-5fb0-460a-8dcb-09d106750186",
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
      "2026-02": 15780
    }
  },
  {
    "id": "5844c5a6-5f6f-475f-8729-c5ce8f096790",
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
      "2026-02": 15852.73
    }
  },
  {
    "id": "ba8bac31-4c03-4004-9f40-7cc0084514c4",
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
      "2026-02": 16398.52
    }
  },
  {
    "id": "96bedd80-ed93-433e-ada5-3cc0e9433b82",
    "codigo": "4.1.01.02.0004",
    "descricao": "FRETES E CARRETOS PJ",
    "tipo": "C",
    "codigoPai": "4.1.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.02-SERVICOS DE TERCEIROS",
    "nomeProduto": "FRETES E CARRETOS PJ 000013",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 50155.100000000006
    }
  },
  {
    "id": "13ace70d-b86e-43e4-9559-c819fc80c660",
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
      "2026-02": 3781.24
    }
  },
  {
    "id": "f78757be-ef5f-48ff-9266-7934b091b3fa",
    "codigo": "4.1.01.04",
    "descricao": "4.1.01.04",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "3eda1de0-e366-4c49-b5f1-0684df303eee",
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
    "id": "611e5539-408d-47ec-8541-b7a724bae2d8",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 14825.25
    }
  },
  {
    "id": "3a1e9d93-1b9d-4d55-88ec-e1985877f119",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1145.94
    }
  },
  {
    "id": "b1ba9054-a679-4283-a91d-84c632c9c621",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "GASOLINA COMUM",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 238.8
    }
  },
  {
    "id": "165eae2a-461c-4143-8da8-0f9b5c43071f",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 627.3
    }
  },
  {
    "id": "8bccff96-0fc0-4f85-b305-1e4451ed817f",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 612
    }
  },
  {
    "id": "10e87eb6-979c-45ae-99d5-3698129547ac",
    "codigo": "4.1.01.04.0001",
    "descricao": "COMBUSTIVEIS E LUBRIFICANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "OLEO DIESEL S500 CLASSE B 8% BIODIESEL",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1652.4
    }
  },
  {
    "id": "c68b7096-6a0f-4084-9385-9b0256556f57",
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
      "2026-02": 30.07
    }
  },
  {
    "id": "c8dc2df1-099f-4752-90f9-21469eb536e4",
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
      "2026-02": 1690.18
    }
  },
  {
    "id": "5b058e58-0ad5-4691-b3bd-591d438d1eae",
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
    "nomeProduto": "GAS LIQUEFEITO PETROLEO (GLP) 13KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 209.94
    }
  },
  {
    "id": "ac6086d4-f7e5-48e2-93a5-01cd8d2c8cc0",
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
    "nomeProduto": "OLEO LUBRIF SAE 90 API GL-5",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 340
    }
  },
  {
    "id": "a40ee085-39b8-4d81-b4a8-a85281823be6",
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
      "2026-02": 9.86
    }
  },
  {
    "id": "9ccc73ad-0e9b-4882-a731-6fad6f9b265c",
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
      "2026-02": 15525.999999999998
    }
  },
  {
    "id": "b97cca3f-d32a-4fde-acee-f6304ab3afd8",
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
    "nomeProduto": "GRAXA LUBRIF SABAO LITIO NLGI-2 BALDE DE 20 KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 426.6
    }
  },
  {
    "id": "94321c3a-d161-445f-9816-deca66edc9c6",
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
      "2026-02": 79.85
    }
  },
  {
    "id": "b1c4fc0a-010f-422e-b9df-843bed294c1b",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REFLETOR LED 200W 127/220V",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 260
    }
  },
  {
    "id": "45a2763c-9397-4303-8635-3d1165118ee2",
    "codigo": "4.1.01.04.0002",
    "descricao": "PECAS, ACESSORIOS E MATERIAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "REFLETOR TR LED 50W 6500K BRANCO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 290
    }
  },
  {
    "id": "c26df8c3-a9f7-49e3-8913-afaf4532adfc",
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
    "nomeProduto": "ABRACADEIRA MANGOTE REFORCADA 1 1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 13.61
    }
  },
  {
    "id": "2f50abac-4dac-4506-aa7d-2de1a9fb2c7a",
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
    "nomeProduto": "PORCA 3/4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 0.62
    }
  },
  {
    "id": "54dea5f4-5261-43ce-9f76-b53738361683",
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
      "2026-02": 2.24
    }
  },
  {
    "id": "3aa374ea-8948-40f2-ae11-3a08f1566c4f",
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
      "2026-02": 1.4
    }
  },
  {
    "id": "bbe26105-e288-48d4-9a04-4afa7edb6531",
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
      "2026-02": 27.3
    }
  },
  {
    "id": "15b44a65-eb5c-48ac-8926-b116764194ac",
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
    "nomeProduto": "BUCHA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 0.82
    }
  },
  {
    "id": "e467f5fb-e34e-4035-9ee3-faf2d5b0d2a8",
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
    "nomeProduto": "PARAFUSO 3,5X35 PA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1.27
    }
  },
  {
    "id": "8108e4dd-a925-4caf-8471-7d57c8670ade",
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
    "nomeProduto": "PARAFUSO ALLEN HC9966",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1.27
    }
  },
  {
    "id": "bd6bdc65-ba8a-48d4-b402-c5c44cc9c568",
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
    "nomeProduto": "BUCHA   R219255",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1.27
    }
  },
  {
    "id": "75c1ee78-06b5-4c1e-9014-c6be2546d760",
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
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 3/4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 8.55
    }
  },
  {
    "id": "cb6885a3-1d81-4fdb-bbf7-d9d95fd5b580",
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
      "2026-02": 8.4
    }
  },
  {
    "id": "92b642cc-bc06-43c9-899d-867fead918bd",
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
      "2026-02": 2.26
    }
  },
  {
    "id": "bbbb476b-ff31-4f34-a4bc-3c38ce05896b",
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
    "nomeProduto": "BUCHA PARA PARAFUSO CASALE 7500113",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 2.27
    }
  },
  {
    "id": "e0867df0-3cd1-4a7d-b43c-197f9c11a570",
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
    "nomeProduto": "LIXA D'AGUA FOLHA GRANA 220",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 2.7
    }
  },
  {
    "id": "f1ab3278-5c16-4867-96d6-58283cf48f53",
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
      "2026-02": 22.68
    }
  },
  {
    "id": "7eaf6bb2-1196-4394-8f7e-437398191fc7",
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
    "nomeProduto": "ARRUELA PRESSAO MEDIA ACO MOLA 1/2 DIN 127",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 3.8
    }
  },
  {
    "id": "bd5dc33a-546e-4334-bfc5-bee704512e41",
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
    "nomeProduto": "LIXA FERRO FOLHA GRANA 80",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 4.14
    }
  },
  {
    "id": "d34e4e75-59e6-497b-bcad-c96ab4ae3d97",
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
    "nomeProduto": "LIXA FERRO FOLHA GRANA 100",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 4.4
    }
  },
  {
    "id": "bb50a4e8-0216-4903-b924-39936ff0ead1",
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
    "nomeProduto": "ARRUELA LISA SAE 1020 POL 7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 4.96
    }
  },
  {
    "id": "cc631463-a816-4e40-af9a-28ddde0167ca",
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
    "nomeProduto": "PLUG FEMEA SOBR 2P 10A 250V BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 5.04
    }
  },
  {
    "id": "8cd97a26-dee6-401e-bc5e-46dceb5cc969",
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
    "nomeProduto": "PORCA SX PARLOCK ALTA 8.8 UNC 10F 3/4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 41.72
    }
  },
  {
    "id": "f9a6c91c-8577-4d79-8ffd-a43a697fb18f",
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
    "nomeProduto": "BUCHA - 900035004",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 6
    }
  },
  {
    "id": "5f238ba0-df2d-48e2-a9bb-0c949f4a6d7d",
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
    "nomeProduto": "PLUG MACHO SOBR 2P 10A 250V BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 6.58
    }
  },
  {
    "id": "e7de4a61-caea-4b94-87ee-993c277bf76a",
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
    "nomeProduto": "PLUG MACHO SOBR 2P 20A 250V BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 6.95
    }
  },
  {
    "id": "5653177f-a1fd-41ce-b920-033b07faf8c8",
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
    "nomeProduto": "ARRUELA LISA AE 5/16 2MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 7.5
    }
  },
  {
    "id": "b599121f-9cfb-475e-9582-d088cba7c325",
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
      "2026-02": 8.07
    }
  },
  {
    "id": "06d20208-8382-4218-987a-3e79d197d9ba",
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
    "nomeProduto": "PLUG FEMEA SOBR 2P 20A 250V BR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 8.2
    }
  },
  {
    "id": "784ec456-61e7-40ba-827d-cc2dc254be54",
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
    "nomeProduto": "PORCA SX 8.8 UNC 24F 3/16",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 8.46
    }
  },
  {
    "id": "eca4abe5-2a06-480d-a4bd-130306092066",
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
    "nomeProduto": "ELO FUSIVEL ALTA TENSAO 8K",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 8.9
    }
  },
  {
    "id": "49423047-e2ad-4485-8a5c-1bd60feaaf06",
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
    "nomeProduto": "PARAFUSO SX RT 8.8 UNF 24F 5/16X1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 8.95
    }
  },
  {
    "id": "2ec36485-3ce9-42a0-90c2-7b75b36cb93b",
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
    "nomeProduto": "BROCA ACO DORMER 06MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 9.44
    }
  },
  {
    "id": "36346f1d-ad48-49cc-aa0d-64170136d3b7",
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
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X9",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 10.26
    }
  },
  {
    "id": "34d0b7af-e8b9-467e-889d-7edf9b2a28cf",
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
    "nomeProduto": "DISCO CORTE 2 TELAS INOX 1.0MM 4.1/2X0,39X7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 34.03
    }
  },
  {
    "id": "8d658284-3d17-4021-995b-890808c0bd52",
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
      "2026-02": 487.48999999999995
    }
  },
  {
    "id": "c8b12afc-aa08-4e4e-8723-a5f6bc596128",
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
    "nomeProduto": "COLA 3M 50 GRS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 11.1
    }
  },
  {
    "id": "0e447308-8ad8-4010-b715-f09883106e15",
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
      "2026-02": 11.99
    }
  },
  {
    "id": "e000e4c9-77de-4369-81f6-a7b2b71c5928",
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
    "nomeProduto": "179914-PARAFUSO P/ VASO BUCHA S-10 75MM PAR",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 12
    }
  },
  {
    "id": "c829edde-6347-4ec3-8e36-14ad3d82d61b",
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
    "nomeProduto": "TERMINAL ENCAIXE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 12.25
    }
  },
  {
    "id": "47d89e4e-2631-49e8-a3b4-f23cb14d475b",
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
    "nomeProduto": "FITA ISOLANTE ALTA FUSAO 10MT 3M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 14.7
    }
  },
  {
    "id": "2818fdce-2cdd-4b32-a477-a01c7ae69981",
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
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 12F 9/16X4",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 16.2
    }
  },
  {
    "id": "970ada22-0f1e-4e15-a17c-3bb7d062cacc",
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
    "nomeProduto": "BARRA ROSCADA SAE 1020 UNC 3/4X1M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 55.800000000000004
    }
  },
  {
    "id": "c538ea7f-cc61-422b-914f-4066ce3d9c41",
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
      "2026-02": 66.16
    }
  },
  {
    "id": "a4e97876-acc0-4a9e-89f8-f635b8c213d3",
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
    "nomeProduto": "CONJ. PARAFUSO, ARRUELAS E PORCA BALDAN 54200100908",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 19.97
    }
  },
  {
    "id": "f54cc1f9-8f25-4de4-841d-0980533e7b54",
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
    "nomeProduto": "TERMINAL 222.02.04",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20.42
    }
  },
  {
    "id": "e70235a4-7ce1-4146-b752-406fd4994d96",
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
    "nomeProduto": "BROCA ACO RAPIDO 10MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 21.69
    }
  },
  {
    "id": "f0d1a52d-72eb-49b3-b146-f96ef67cf536",
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
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 10F 3/4X4.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 22.25
    }
  },
  {
    "id": "6db00540-1174-4544-9af8-a3ab3a01b3ef",
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
    "nomeProduto": "FILTRO DE COMBUSTIVEL BOSCH 0986450704",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 22.64
    }
  },
  {
    "id": "07ddea6a-528d-4f30-90e7-239b7d9d59ec",
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
    "nomeProduto": "DISCO DESBASTE 4.1/2X3/16X7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 24.15
    }
  },
  {
    "id": "8ffb6d36-a1e4-4fe3-b905-020fd3b4c432",
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
      "2026-02": 25.92
    }
  },
  {
    "id": "68fa3e51-f2a3-48bf-822f-669ee7a69110",
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
    "nomeProduto": "RETENTOR VEDACAO ARCA 6121BRG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 27.22
    }
  },
  {
    "id": "2a4c96a3-40c2-4fbd-82a7-0c0b1776b508",
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
    "nomeProduto": "REFLETOR LED 100W 127/220V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30.84
    }
  },
  {
    "id": "6639d47b-eee6-45af-8238-998234811ce7",
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
    "nomeProduto": "RETENTOR VEDACAO ARCA 6739BRG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 30.86
    }
  },
  {
    "id": "82a63c2f-1cc1-45a3-9c94-3e08b8a11c5d",
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
    "nomeProduto": "ELETRODO 46 X 2,5MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 31.1
    }
  },
  {
    "id": "d195004e-8c5a-4919-a19b-ece64e915aed",
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
    "nomeProduto": "TERMINAL 1 FURO 1 COMPRESSAO 50MM2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 31.76
    }
  },
  {
    "id": "8e4041cc-d375-4687-bd8b-01c98530fe53",
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
    "nomeProduto": "BROCA ACO RAPIDO 8MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 32.49
    }
  },
  {
    "id": "cad147cf-0998-4236-9492-032f3ef1c00a",
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
    "nomeProduto": "ARRUELA 3/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 32.67
    }
  },
  {
    "id": "504d0864-a084-42f3-990d-c308f5bdfbdb",
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
    "nomeProduto": "TRENA IRWIN 5MT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 34.56
    }
  },
  {
    "id": "b59a5383-6730-42a8-8909-c64b8f0ed4c3",
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
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 11F 5/8X7",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 34.8
    }
  },
  {
    "id": "543e94ea-6d6f-40b9-8475-81cbb465c972",
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
    "nomeProduto": "PARAFUSO SX RT 8.8 UNC 14F 7/16X1",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 36.09
    }
  },
  {
    "id": "979d0a72-267c-4cdc-b30e-e393b0bb7ae3",
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
    "nomeProduto": "PORCA SX 8.8 UNF 14F 7/8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 39.6
    }
  },
  {
    "id": "8cf81937-05e3-4d7d-ae9c-b575067abeee",
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
      "2026-02": 209.14
    }
  },
  {
    "id": "eb4692e0-210b-4942-9589-e09fbc61d5e6",
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
    "nomeProduto": "BUJAO GALVANIZADO 2.1/2\"",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 46.19
    }
  },
  {
    "id": "2e0bd63d-4e8f-433c-9963-23264b2f18cd",
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
      "2026-02": 46.28
    }
  },
  {
    "id": "84ae52ed-be52-449a-be74-4fff85d0b349",
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
    "nomeProduto": "PAINEL LED QD SOBR 28X28 6500K 24W BIV PC",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 51.8
    }
  },
  {
    "id": "43c7d562-95b2-4a6f-8f5f-b17c365f3ec6",
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
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X11",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 64.75
    }
  },
  {
    "id": "70f21d94-9779-4a0e-ac8e-b5482844d8e5",
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
    "nomeProduto": "PARAFUSO AL CC CIL 12.9 RT MA 1,75 M12X35",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 67.32
    }
  },
  {
    "id": "6a1a4e99-4a09-4b00-83fc-56f816f38d82",
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
    "nomeProduto": "CRUZETA CARDAN SPICER 5160X",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 68.97
    }
  },
  {
    "id": "bc18be94-fbd2-462a-ac15-ffaa9c4e9f9f",
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
    "nomeProduto": "RELE FOTOELETRICO 1000W",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 70.05
    }
  },
  {
    "id": "5ea1a4cf-b90e-456e-904d-8ee816a73467",
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
    "nomeProduto": "SELO MECANICO 1 INPACOM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 85.5
    }
  },
  {
    "id": "d6601a30-a603-4af6-89ce-0fad521202e2",
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
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X8",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 87
    }
  },
  {
    "id": "545ac81a-7776-4c8c-9b56-822f81157136",
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
      "2026-02": 87.58
    }
  },
  {
    "id": "b828cb04-ae57-4b08-b911-ecc6bd2df262",
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
    "nomeProduto": "PECAS, ACESSORIOS E MATERIAIS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 89
    }
  },
  {
    "id": "b9510149-2a39-4d27-ae8d-e74352232849",
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
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 10F 3/4X6",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 95.84
    }
  },
  {
    "id": "6788ff56-5d7d-40b7-b097-25d5279039a2",
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
    "nomeProduto": "PARAFUSO FR RT 8.8 UNC 16F 3/8X10",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 99.5
    }
  },
  {
    "id": "04a1feaf-2d27-4b2c-bf24-c6df4d22de26",
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
    "nomeProduto": "TERMINAL CARDAN 30MM AEMCO CC106",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 101.64
    }
  },
  {
    "id": "cc50cc9e-aecb-46fa-940b-88cc6aa8a172",
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
      "2026-02": 109.76
    }
  },
  {
    "id": "4a8d99f8-68fb-4a5f-b9e1-3d60d2269643",
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
    "nomeProduto": "PORCA CARTER MF 0576101",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 111.93
    }
  },
  {
    "id": "eb7a9e4e-d875-413f-a37e-e6ac5dc66964",
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
    "nomeProduto": "X4 SUPRA- /BB 5,0 L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 115
    }
  },
  {
    "id": "2662deed-a033-43d2-a335-2111ce6b125f",
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
    "nomeProduto": "BATERIA RECARREGAVEL DE LI-ION 9800MAH SD 18650 3.7V - 4,2V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 239.44
    }
  },
  {
    "id": "742830db-2f8b-456c-b87d-56998ebfe18e",
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
      "2026-02": 130.52
    }
  },
  {
    "id": "f98d3b17-89d9-4993-a468-c99c2fb258ca",
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
    "nomeProduto": "CORRENTE MOTOSSERRA 36 DENTES",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 133.2
    }
  },
  {
    "id": "ccd1bbb7-874b-48a9-96b7-8f04850ec963",
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
    "nomeProduto": "ROLAMENTO ROLOS CONICOS SKF 32211 J2/Q",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 150.96
    }
  },
  {
    "id": "5ac910dc-e05c-4c24-9857-3c55b355f7f9",
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
    "nomeProduto": "PARAFUSO SX RP 8.8 UNC 11F 5/8X4.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 156.52
    }
  },
  {
    "id": "458adad7-4d8e-4414-be2b-bec8e648a491",
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
    "nomeProduto": "TERMINAL CARDAN FURO QUADRADO MENOR 30MM AEMCO CC251",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 226.67
    }
  },
  {
    "id": "84da2d70-3dbc-477e-836b-818957f79412",
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
    "nomeProduto": "KIT CAIXA DE LIGACAO 63 W22",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 275.4
    }
  },
  {
    "id": "b32436b5-859a-4d44-ba0c-35bf859cd9e9",
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
    "nomeProduto": "344CC59/1000 BARRA MACHO QUADRADA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 302.2
    }
  },
  {
    "id": "c2766c05-6782-4219-8150-17dbd84099a4",
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
    "nomeProduto": "CABO FLEX 50MM AZUL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 528.12
    }
  },
  {
    "id": "f0ef44f9-52c7-472a-9117-51a5ce540b42",
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
    "nomeProduto": "RESINA POLIESTER",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 600
    }
  },
  {
    "id": "e2ac6165-d047-405f-9556-208b3ebe4587",
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
      "2026-02": 900
    }
  },
  {
    "id": "8232e755-c6b6-4846-a3ba-eee4bc6ea849",
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
    "nomeProduto": "CORRENTE ROLO SIMPLES 5/8 ASA 50",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1127.85
    }
  },
  {
    "id": "c23c94f0-93c7-4872-92b3-66a754862a6f",
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
    "nomeProduto": "BATERIA AUTOMOTIVA 12V 180A",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1179.57
    }
  },
  {
    "id": "1a5be1ec-9618-41ba-abfb-91e0f1cbdfe1",
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
    "nomeProduto": "CABO FLEX 50MM PRETO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1584.36
    }
  },
  {
    "id": "3e6f5ac5-0fed-4607-aeed-56c8bd3b6fab",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRENA 5 METROS LUFKIN L516CMED",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 18
    }
  },
  {
    "id": "b4c2a02a-1f7b-40fe-8acd-c99a3f79069f",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRENA 5 METROS LUFKIN L516CMED",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 18
    }
  },
  {
    "id": "cf3b81d0-b251-4733-afce-718e400807c8",
    "codigo": "4.1.01.04.0003",
    "descricao": "MATERIAIS PARA MANUTENCAO E REFORMA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "TRENA 5 METROS LUFKIN L516CMED",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 18
    }
  },
  {
    "id": "f43d695f-65d6-42ad-aef5-24ea773c7c5f",
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
      "2026-02": 33.6
    }
  },
  {
    "id": "9f85d854-6a0f-407c-94d1-317856ba9e4b",
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
      "2026-02": 138.02
    }
  },
  {
    "id": "89975146-9a61-4c3c-9981-437a6dd3f95d",
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
    "nomeProduto": "PE PARA COCHO DE CIMENTO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 263.41
    }
  },
  {
    "id": "30528d76-8d67-401a-83b0-9d7bfd21604a",
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
    "nomeProduto": "COCHO DE CIMENTO MEIA MANILHA 1M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 360
    }
  },
  {
    "id": "ac150eb2-bec9-4e08-a0c8-82655c0b3f5d",
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
    "nomeProduto": "LUVA SOLDAVEL PVC MARROM 25MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1.9
    }
  },
  {
    "id": "17b88683-37de-4bee-866f-969d67167ee6",
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
      "2026-02": 455.48
    }
  },
  {
    "id": "110d725b-61fa-4699-ada6-bb10438c7233",
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
    "nomeProduto": "CAP SOLDÁVEL 25MM PLASTUBOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 84.96
    }
  },
  {
    "id": "4f342499-bdd9-4917-b0ec-3ae4138e7451",
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
      "2026-02": 15.51
    }
  },
  {
    "id": "70b295a3-b2d1-44e4-b787-fc463e76fc77",
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
      "2026-02": 2.9800000000000004
    }
  },
  {
    "id": "f9a2b924-8f91-4027-9f11-842241048851",
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
    "nomeProduto": "THINNER 5 LITROS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 214.9
    }
  },
  {
    "id": "3c98a633-f137-48a0-a488-3a8fc1aeed9d",
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
    "nomeProduto": "TINTA ESMALTE SINTETICO VERMELHO GOYA LT 3600ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 340
    }
  },
  {
    "id": "5372e830-c24b-4b6d-a9bc-78536d91b42c",
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
    "nomeProduto": "TINTA BASE D'AGUA AMARELO TERRA 20 LTS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 370
    }
  },
  {
    "id": "4d588024-1255-4dc0-bed9-9350fe607e54",
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
    "nomeProduto": "BUCHA PLASTICA PAREDE OCA 10X60",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 4.2
    }
  },
  {
    "id": "5ba13f68-3cf5-46b3-9e95-9146dffb1e27",
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
    "nomeProduto": "GRAMPO CERCA GERDAU 1 X 9 POLIDO 1KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 31.62
    }
  },
  {
    "id": "b8bc274b-482c-4cb8-a0b5-3879f8777cbb",
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
    "nomeProduto": "ARESTE LONGA PARA CERCA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 36.84
    }
  },
  {
    "id": "4371d626-32de-4918-ad39-069b9b076d2f",
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
      "2026-02": 18.72
    }
  },
  {
    "id": "2390a31a-435d-48bf-8b16-41171713fc73",
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
      "2026-02": 3.56
    }
  },
  {
    "id": "0b2464f4-5f89-41be-b849-f0b4315029ed",
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
    "nomeProduto": "TINTA SPRAY PRETO FOSCO 400ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 28.76
    }
  },
  {
    "id": "ddf04f40-1cb0-4b3a-965b-bbd6727566e6",
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
      "2026-02": 186
    }
  },
  {
    "id": "58018080-7491-426e-bba2-b18b31c2ff19",
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
    "nomeProduto": "TIJOLO COMUM MACICO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 80
    }
  },
  {
    "id": "3983625f-4b25-4318-abe5-5f5ada0537ea",
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
    "nomeProduto": "DOBRADICA QUADRADA 140X140MM NR 3",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 92.14
    }
  },
  {
    "id": "2a056c32-100c-467c-b542-1c5c0e89b1ab",
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
    "nomeProduto": "CIMENTO  CP II-E-32 50KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 738.36
    }
  },
  {
    "id": "10a32be6-a6f3-4c0b-99f8-9a0fe881fa83",
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
      "2026-02": 1286.5
    }
  },
  {
    "id": "15f9b3c6-e3b0-4ef0-bab6-9221006ce80a",
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
      "2026-02": 491.29
    }
  },
  {
    "id": "2333a503-d620-40fd-9368-9a47ef1d7c76",
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
    "nomeProduto": "KIT COMPLETO P/ BANHEIRO C/ TAMPA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1066.72
    }
  },
  {
    "id": "f6e487d2-212a-4578-9538-918b4b6e8d6d",
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
    "nomeProduto": "BRITA 00 - M3",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 2850
    }
  },
  {
    "id": "788330cc-e847-4467-ad03-041c9708a228",
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
    "nomeProduto": "AREIA GROSSA - M3",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 3000
    }
  },
  {
    "id": "b51b6b80-7153-4d48-9286-e8340330cdcc",
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
    "nomeProduto": "BOIA METALICA ROSCA EXTERNA 1.1/2",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 524.25
    }
  },
  {
    "id": "b2c5af6c-4de9-4c03-9907-a989f009202c",
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
    "nomeProduto": "LASCA DE ACAPU 14CMX2,20M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 4145.66
    }
  },
  {
    "id": "46376182-28d1-4464-994c-5bb04c9314bb",
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
      "2026-02": 7.03
    }
  },
  {
    "id": "71e67440-a899-4dbb-b97e-7b7fa6ed2b59",
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
    "nomeProduto": "DILUENTE PARA PU 900ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "8de1825c-2d14-4ce3-a420-8872549fddc5",
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
    "nomeProduto": "UNIAO 1.1/2\" INTERNA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 4.010000000000002
    }
  },
  {
    "id": "d72461a8-445f-48c2-885e-b3b4287489a0",
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
      "2026-02": 4.5
    }
  },
  {
    "id": "bdf28b11-d5d5-49d3-ad63-23c5d3c88f6f",
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
    "nomeProduto": "ENGATE FLEXIVEL PVC 1/2X60CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 34.32
    }
  },
  {
    "id": "8d08630c-e253-4ac6-835f-1fe28dae92a0",
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
    "nomeProduto": "UNIAO SOLDAVEL PVC MARROM 50MM NBR 5648",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 36.59
    }
  },
  {
    "id": "9f7242ba-1d84-494c-88d5-047c4247f898",
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
    "nomeProduto": "PREGO COM CABECA LISO ACO POLIDO 18X24MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 11.15
    }
  },
  {
    "id": "413a3fe1-c975-40fe-8425-e132a3bf80e6",
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
    "nomeProduto": "ROLO PARA RESINA LA 23 CM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 120
    }
  },
  {
    "id": "3c3493c9-c9bd-4540-9f38-b2f6fddd278d",
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
      "2026-02": 900.1200000000001
    }
  },
  {
    "id": "864aef12-33e9-4a78-8a23-415b651ac1e3",
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
    "nomeProduto": "TINTA EPOXI BT 03 2880 ML + ENDURECEDOR PARA EPOXI 720 ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 900
    }
  },
  {
    "id": "f8c61350-d9f7-42e3-bba1-31ddd5bc0866",
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
    "nomeProduto": "KIT PISCINA AZUL (1 GL TINTA PU + 1 UND CATAL + 1 LT DILUENTE PU 900ML)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1050
    }
  },
  {
    "id": "50ab94ef-0ff3-459b-b092-943edfe15d8e",
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
      "2026-02": -5.12
    }
  },
  {
    "id": "c8b5b10a-6633-4405-8396-7432cfc407ab",
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
    "nomeProduto": "JOELHO 90° PVC MARROM SOLDAVEL 50MM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 2.06
    }
  },
  {
    "id": "52c4c05d-0d9b-48fd-8c6a-20301bd6d71a",
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
      "2026-02": 6.55
    }
  },
  {
    "id": "96671b74-6075-4501-8294-54229c41f9bd",
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
      "2026-02": 5.03
    }
  },
  {
    "id": "eccd54e9-5604-476d-a18a-aa2c0e7cc61e",
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
      "2026-02": 5.36
    }
  },
  {
    "id": "9f625313-3a34-4911-bf02-d14903df88da",
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
      "2026-02": 65.94
    }
  },
  {
    "id": "a4f6940a-94a5-47dd-8484-bf75f657dd3d",
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
      "2026-02": 165
    }
  },
  {
    "id": "8885452f-19db-4e2d-96e3-de3701d096a5",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JARRA MEDIDORA 5L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 81.68
    }
  },
  {
    "id": "8edb2c26-28d6-4ed2-bb61-9d9af15ad3be",
    "codigo": "4.1.01.04.0005",
    "descricao": "MATERIAIS DE CONSERVACAO E LIMPEZA",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "JARRA MEDIDORA 5L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 81.68
    }
  },
  {
    "id": "752b6a2f-b6b3-47eb-9904-3eb21ed20ad7",
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
      "2026-02": 31.96
    }
  },
  {
    "id": "8bd8033f-659b-4c5b-9254-24bce5d3e9e6",
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
      "2026-02": 14.760000000000002
    }
  },
  {
    "id": "10bd46af-c45d-4001-a0f4-066f8fa24274",
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
      "2026-02": 2.69
    }
  },
  {
    "id": "28f3d6b0-3ea5-47f8-9eb1-a2f333e6317a",
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
      "2026-02": 5.58
    }
  },
  {
    "id": "f0a5d3d1-37c8-4b2a-851a-de4445aee94e",
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
      "2026-02": 24.2
    }
  },
  {
    "id": "72a9fe68-29bb-4da0-a973-c947257ef199",
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
    "nomeProduto": "ALCOOL ETILICO ITAJA 70 1L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 14.580000000000002
    }
  },
  {
    "id": "790a7b59-0d11-4429-b2fc-5bf86cfe553e",
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
      "2026-02": 4.87
    }
  },
  {
    "id": "82d45f78-5099-4446-92e1-047fc6c824c0",
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
      "2026-02": 55
    }
  },
  {
    "id": "51430da0-8ee0-4661-ac17-05b79db7bf93",
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
      "2026-02": 61.6
    }
  },
  {
    "id": "bd95355e-8fc8-4bab-a629-b024af17a12e",
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
    "nomeProduto": "LIMPA CONTATO SPRAY",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 9.94
    }
  },
  {
    "id": "4a1c9ece-93dc-4838-93d4-32de39a881a4",
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
      "2026-02": 77
    }
  },
  {
    "id": "fa116dfb-2497-448c-b6cb-1025b14897d3",
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
      "2026-02": 77
    }
  },
  {
    "id": "cb65082d-74a0-43fa-98ca-a8674276d3e6",
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
      "2026-02": 43.4
    }
  },
  {
    "id": "affa4949-9612-4b20-ba3e-202107a314bd",
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
    "nomeProduto": "FITA PARA EMPACOTAMENTO TRANSPARENTE SCOTCH 3M",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 23.78
    }
  },
  {
    "id": "95275436-1b06-4a85-9d3a-dd0d03eca91c",
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
      "2026-02": 92.39999999999999
    }
  },
  {
    "id": "2127c101-8c42-4648-8d3e-96f624f07dcd",
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
      "2026-02": 92.39999999999999
    }
  },
  {
    "id": "8988f6a0-509c-4aca-8a25-82d49883848e",
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
    "nomeProduto": "SABONETE LIQUIDO DESENGRAXANTE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 12.76
    }
  },
  {
    "id": "6d69ec15-ea75-4e90-b524-a463d5228c42",
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
      "2026-02": 15
    }
  },
  {
    "id": "6afa8bbb-a22a-4032-94b0-257883c45683",
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
      "2026-02": 15.51
    }
  },
  {
    "id": "eb399b42-8c9e-458f-81c4-cb93bba3f05e",
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
      "2026-02": 43.75
    }
  },
  {
    "id": "7b309c6c-2da1-4413-9335-0f23fdd10660",
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
      "2026-02": 129.79999999999998
    }
  },
  {
    "id": "f5444127-dcd5-46f9-bbb4-d88eb67ca247",
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
      "2026-02": 17.92
    }
  },
  {
    "id": "da4800ec-1d43-4cc8-b21b-9389ada73b53",
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
    "nomeProduto": "CADEADO HASTE CURTA 35 MM PAPAIZ",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 61.739999999999995
    }
  },
  {
    "id": "22553215-824c-47ae-80f7-ef54147b61f4",
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
      "2026-02": 21.48
    }
  },
  {
    "id": "a9eb5af3-8ead-4ea3-bcf2-d4062ee9a441",
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
    "nomeProduto": "SABONETE LIQUIDO MAGIC",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 22.05
    }
  },
  {
    "id": "82e51e85-90de-4cfe-b478-d867327094d4",
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
      "2026-02": 23.4
    }
  },
  {
    "id": "a36fb473-730f-4507-ae48-a1c70dacee8b",
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
      "2026-02": 23.94
    }
  },
  {
    "id": "043db8a3-96a9-416d-ba29-933a2c05d185",
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
    "nomeProduto": "PASTA DESENGRAXANTE TO BLACK 2KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 27.42
    }
  },
  {
    "id": "e2ba37fd-6141-4e44-a49e-13ead3bdeac5",
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
      "2026-02": 34.43
    }
  },
  {
    "id": "b5661420-a62f-42d5-a0f3-ba95ee3ecdd4",
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
    "nomeProduto": "PILHA AA DURACELL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 38.1
    }
  },
  {
    "id": "157f3d2e-c36b-419b-82fd-ceeb8f1728e3",
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
      "2026-02": 45.54
    }
  },
  {
    "id": "9d5ca21a-a53c-46be-9f2e-4feac8d39f2b",
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
    "nomeProduto": "EBULIDOR FERVEDOR AQUECEDOR INOX 2000W 220V",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 48.97
    }
  },
  {
    "id": "ca7e4bd5-6802-4cf7-8126-7ac3d6a9646b",
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
    "nomeProduto": "XXXX",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 105.65
    }
  },
  {
    "id": "35b2e2f6-f1d4-4655-b127-27617c93a1e6",
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
      "2026-02": 111.8
    }
  },
  {
    "id": "a09b5f3d-725a-4d4d-9609-3c08e0da50f9",
    "codigo": "4.1.01.04.0006",
    "descricao": "FERRAMENTAS DE TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.04",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS",
    "nomeProduto": "LONA PLASTICA 8 X 50 200 MICRAS DUPLA FACE POLICILO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 775
    }
  },
  {
    "id": "3bd04dd3-02a8-484c-ab1d-a214e5b0b411",
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
      "2026-02": 50
    }
  },
  {
    "id": "12ab5dfa-a6a4-4e20-994a-057e7352af6d",
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
      "2026-02": 50.56
    }
  },
  {
    "id": "30d60f56-632b-4176-850a-a9ab194c3329",
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
    "nomeProduto": "CHAVE COMBINADA MAYLE 24",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 38.56
    }
  },
  {
    "id": "982921fa-5777-473a-b82f-ba09cc3d945b",
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
    "nomeProduto": "ALICATE UNIVERSAL 8 POLEGADAS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 79.72
    }
  },
  {
    "id": "e7497dfb-f615-4504-b88d-855e67daff91",
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
    "nomeProduto": "CHAVE COMBINADA MAYLE 19",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 24.54
    }
  },
  {
    "id": "03436603-63f4-4356-aa6a-7fa10e43534f",
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
      "2026-02": 111.6
    }
  },
  {
    "id": "e5f24172-fd7b-4b5d-b6d8-980f48c78041",
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
    "nomeProduto": "ALMOTOLIA 500ML BICO FLEXIVEL VONDER",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 13.69
    }
  },
  {
    "id": "b1391083-2659-4873-b438-69a9a2d145a2",
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
    "nomeProduto": "ALICATE FAZENDEIRO 10.1/2 POL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 69
    }
  },
  {
    "id": "a06b1789-218a-4a11-a0b0-af672329e9b2",
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
    "nomeProduto": "MARTELO 27MM TRAMONTINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 47.82
    }
  },
  {
    "id": "48a79a42-4b1f-49e7-8e45-5f84c859b928",
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
    "nomeProduto": "MAÇARICO LANÇA CHAMAS A GAS 65 CM 2 REGISTROS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 61.8
    }
  },
  {
    "id": "b248f523-1d97-48c4-9981-b058d56d3944",
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
      "2026-02": 7.51
    }
  },
  {
    "id": "1f47128b-d3c6-4e68-ab44-3305b84b620f",
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
    "nomeProduto": "BROCA CHATA PARA MADEIRA 1\"1/4 X 150MM TRAMONTINA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 79.9
    }
  },
  {
    "id": "908c2f05-05fa-4231-80ac-af4aa1df107b",
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
    "nomeProduto": "TUBO QUADRADO 45,25 X 45,25 FEMEA L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 297
    }
  },
  {
    "id": "01e19428-c480-4c8f-98bc-0cd149cd4378",
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
    "id": "01229e85-e027-4f02-bac8-412b698f785f",
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
      "2026-02": 47036.44
    }
  },
  {
    "id": "85157d50-0041-4f8a-936a-75b38baf5e99",
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
      "2026-02": 1.89
    }
  },
  {
    "id": "bc2da7f8-6f4e-431d-9b25-f4083202c8d9",
    "codigo": "4.1.01.06",
    "descricao": "4.1.01.06",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "220eca9a-6b88-4964-a92e-579d00129941",
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
    "id": "cb5d5024-463b-411e-a0ee-55a443ccafda",
    "codigo": "4.1.01.06.0002",
    "descricao": "REFEICOES E ESTADIAS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM HOSPEDAGEM",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 275
    }
  },
  {
    "id": "bb48c129-224e-4b1f-9bcd-27529c4f7211",
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
      "2026-02": 1550
    }
  },
  {
    "id": "90f6836f-efe4-456f-a72b-5d7578f342bc",
    "codigo": "4.1.01.06.0003",
    "descricao": "QUILOMETRAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "DESPESAS COM QUILOMETRAGEM",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 2340.78
    }
  },
  {
    "id": "54f745d7-10d6-4a8f-831a-46ab68d8b33b",
    "codigo": "4.1.01.06.0010",
    "descricao": "OUTRAS DESPESAS DE VIAGENS",
    "tipo": "C",
    "codigoPai": "4.1.01.06",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.06-DESPESAS DE VIAGENS",
    "nomeProduto": "GASTOS COM TAXI",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 2670
    }
  },
  {
    "id": "00c793b2-9355-4a14-b802-92fd9d092b08",
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
    "id": "aff5e3d5-de53-4117-aabe-7a6ee448557a",
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
      "2026-02": 7545.230000000001
    }
  },
  {
    "id": "a19e2e0d-575c-4798-8b20-346f27eaf580",
    "codigo": "4.1.01.11",
    "descricao": "4.1.01.11",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "74e076b7-5f48-497a-b04a-941a96fa2e7f",
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
    "id": "e80f238a-7199-4dee-9c08-8bc99e3577dc",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SULFATO DE MAGNESIO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 420
    }
  },
  {
    "id": "43dd6b4b-24d9-4e42-acac-b7b54f3adffc",
    "codigo": "4.1.01.11.0001",
    "descricao": "ALIMENTACAO ANIMAL",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "SULFATO DE MAGNESIO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 328.8
    }
  },
  {
    "id": "67c9f87a-172a-4e0c-bd86-dc17b36e69d1",
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
      "2026-02": 5310.91
    }
  },
  {
    "id": "48248d77-d321-499e-87db-eb24ab48bdc0",
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
      "2026-02": 7765.8
    }
  },
  {
    "id": "050b5f68-7ee7-4b39-9384-a94e77bc5393",
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
      "2026-02": 31158.45
    }
  },
  {
    "id": "54ab9e81-f0ec-44ad-ac0e-873922ae7015",
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
    "nomeProduto": "TORTA DE ALGODAO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 37023.57
    }
  },
  {
    "id": "05cc8b43-ea32-4236-950d-01318a98ac33",
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
      "2026-02": 37488.3
    }
  },
  {
    "id": "1cb58ab0-3eef-4087-b5f9-db81814c6348",
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
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1071421.98
    }
  },
  {
    "id": "674d2c69-066b-462c-8102-34219b052945",
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
    "nomeProduto": "VACINA GARROTILHO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 123
    }
  },
  {
    "id": "4f233d3d-f45d-482f-b8e3-f50946fb9796",
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
      "2026-02": 2191
    }
  },
  {
    "id": "e454b294-b96d-4aec-945e-75896c77a25a",
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
      "2026-02": 9761.5
    }
  },
  {
    "id": "63a5a01c-b91a-4f93-914f-620a160e766d",
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
    "nomeProduto": "VACINA RAIVACEL",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 279
    }
  },
  {
    "id": "1d8ab2c6-56dc-46b6-9c62-2a879878cd64",
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
      "2026-02": 40.08
    }
  },
  {
    "id": "38ff327c-f880-4b63-bfce-eb326302c706",
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
      "2026-02": 14
    }
  },
  {
    "id": "bc204462-4b00-4de4-878d-51db437ccf73",
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
    "nomeProduto": "SECURECATTLE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 13716
    }
  },
  {
    "id": "f890698a-b184-4c4f-bc00-61d6ab14c601",
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
      "2026-02": 318.12
    }
  },
  {
    "id": "7426a60d-625f-4f66-a48d-ba92e8e06627",
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
      "2026-02": 106.56
    }
  },
  {
    "id": "d10a1ae4-fc34-4110-960e-f72a49fcaaa3",
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
    "nomeProduto": "BANAMINE INJ. 50ML",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1151.28
    }
  },
  {
    "id": "b0e23dc7-7e85-4498-828a-b33c3f5d7b9c",
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
      "2026-02": 44.98
    }
  },
  {
    "id": "32a18773-3297-40a0-92e0-602378d1216b",
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
      "2026-02": 2054.3999999999996
    }
  },
  {
    "id": "5264f655-5b26-426c-8176-f7f0c75799aa",
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
      "2026-02": 2531.88
    }
  },
  {
    "id": "3b7a23d9-5e19-4cd0-aa3a-22ef97202c87",
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
      "2026-02": 464
    }
  },
  {
    "id": "dadda86f-2af6-4ed0-9fa0-d85139075537",
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
    "nomeProduto": "LUVA PARA PROCEDIMENTO CIRURGICO TAMANHO (P)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 19
    }
  },
  {
    "id": "e5fead28-0bb3-416e-be23-9f4f926c5a27",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FOLIAR K2O 10% + Mg 1% + S 12,5% + B 1,5% + Cu 1,5% + Mn 14% + Zn 3,5%",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 985.32
    }
  },
  {
    "id": "1f1427c8-aadc-4719-bf45-9ee30acc0f2e",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FOLIAR K2O 10% + Mg 1% + S 12,5% + B 1,5% + Cu 1,5% + Mn 14% + Zn 3,5%",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8539.44
    }
  },
  {
    "id": "3326f2fe-158a-4fd7-9725-71cb1e4bd559",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE FOLIAR QUIMIFOL PREMIUM 20L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2084.4
    }
  },
  {
    "id": "45682313-e632-4b3a-b3d5-856e58a70da3",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FOLIAR NIPHOKAM NEWS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1823.8
    }
  },
  {
    "id": "8ce47376-ef9a-4731-acc4-6aba7077f473",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE FOLIAR QUIMIFOL PREMIUM 20L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 231.6
    }
  },
  {
    "id": "5620b274-71bc-4402-9b2c-4ec5eef969b3",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE FOLIAR QUIMIFOL PREMIUM 20L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 324.24
    }
  },
  {
    "id": "beded06f-c485-448d-abb0-8efdf19dd543",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FOLIAR K2O 10% + Mg 1% + S 12,5% + B 1,5% + Cu 1,5% + Mn 14% + Zn 3,5%",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 656.88
    }
  },
  {
    "id": "32811d7c-578b-4a8c-ac76-cf38d5323da3",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FOLIAR NIPHOKAM NEWS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 497.4
    }
  },
  {
    "id": "92d26d4d-74e9-4b8c-a42e-bf2d906bc804",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE FOLIAR QUIMIFOL PREMIUM 20L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 602.16
    }
  },
  {
    "id": "35bf491d-ae44-4dba-aad4-23825d8b9148",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE FOLIAR QUIMIFOL PREMIUM 20L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 370.56
    }
  },
  {
    "id": "1d031adc-66be-451b-bf77-73e4748f82ec",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FOLIAR QUIMIFOL CERRADO 20L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 147.9
    }
  },
  {
    "id": "fca8749d-f65f-4edc-9128-0b361ba33f19",
    "codigo": "4.1.01.11.0017",
    "descricao": "FERTILIZANTES",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - GIRASSOL",
    "centroCusto": "F9T30 GIRASSOL GRAO GIRASSOL GRAO 02/2026 Ciclo:2491",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FERTILIZANTE (ADUBO) FOLIAR QUIMIFOL BORO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 387.29
    }
  },
  {
    "id": "181e1c45-bb4a-4fcb-af8c-429440d3ef6f",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T20 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2488",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 373.25
    }
  },
  {
    "id": "f18e7349-b75f-4bd4-825e-42d32d0f05af",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T20 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2488",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA METOLACLORO 960 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1650.89
    }
  },
  {
    "id": "8bcd3017-af53-4b90-a921-ba13218411e3",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CLORFENAPIR",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 562.68
    }
  },
  {
    "id": "c1775c5c-00cb-4c66-9ea9-d4957c45d74b",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ISOCICLOSERAM + LAMBDA-CIALOTRINA 100 G/L + 150 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2449.2
    }
  },
  {
    "id": "0c995726-9d2c-4fa2-8f93-7941bc4ac63a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 16.52
    }
  },
  {
    "id": "d8ad77dc-4e72-49f0-806e-0cf8443ce91a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 944.8399999999999
    }
  },
  {
    "id": "a1aaee0a-f13e-45b3-9ca0-fc0026da8f62",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA CLOROTALONIL 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1243.38
    }
  },
  {
    "id": "45492f76-ae3a-4025-b4a7-002e6b7fde9d",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA METOMIL 215 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1395.93
    }
  },
  {
    "id": "204900fc-611c-4838-86bd-78be2ce76bac",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACEFATO 970 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2253.18
    }
  },
  {
    "id": "89a5bd55-f175-4d5e-b579-d617bb813664",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA MEFENTRIFLUCONAZOL 133,30 G/L + PIRACLOSTROBINA 177,8 G/L + FLUXAPIROXADE 88,9 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3800
    }
  },
  {
    "id": "a0d88324-f9ad-4fde-8d38-a90d39a107c3",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA CLETODIM 240 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 157.57
    }
  },
  {
    "id": "010eb2eb-ed46-4636-a3a9-20af20b7af08",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2925.3
    }
  },
  {
    "id": "a9b84032-4f80-4771-b40e-b1e4e5f1e233",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 509.6
    }
  },
  {
    "id": "6a6b5f1e-8597-4f06-a4e8-495f55ba644f",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA CLORPIRIFOS 480 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 12445.6
    }
  },
  {
    "id": "afaebad4-bf89-41c8-9470-fed24518a159",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA MANCOZEBE 750 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4774.7
    }
  },
  {
    "id": "4abe378f-eba4-4cf2-b016-9a5088c98c46",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA CIPROCONAZOL 80 G/L + PICOXISTROBINA 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8188.5
    }
  },
  {
    "id": "655227ef-5f25-42dc-a7d3-2c162a393f27",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INOCULANTE CONCENTRADO LIQUIDO",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3052.8
    }
  },
  {
    "id": "1b1cb53b-8428-41dc-8157-daff468bb38a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 490.75
    }
  },
  {
    "id": "c41a052e-23e0-43bd-b565-1083db082980",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACEFATO 970 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 239.25
    }
  },
  {
    "id": "02eb13fb-d9d3-4ed6-9391-69dcfe90d5c0",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA TEBUCONAZOL 90 G/L + TRIFLOXISTROBINA 75 G/L + OXICLORETO DE COBRE 420 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 495
    }
  },
  {
    "id": "7a640032-0fda-4e51-aa1e-2374ca84e1c7",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA LUFENURON 100 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2184
    }
  },
  {
    "id": "f25e99e7-d2f3-41d9-bd8e-cee8deecfefa",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA CLORANTRANILIPROLE 100 G/L + LAMBDA-CIALOTRINA 50 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8177.6
    }
  },
  {
    "id": "35640b81-cbe2-4a56-aa39-f768a9a26704",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CLORFENAPIR",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 9910.8
    }
  },
  {
    "id": "a28abbe2-4259-48fc-8494-666303c8a435",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA BIFENTRINA 180 G/L + ZETA-CIPERMETRINA 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 14595
    }
  },
  {
    "id": "ec6b607f-69ed-4254-b71b-cbc053b338d6",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA MANCOZEBE 750 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 23369.85
    }
  },
  {
    "id": "f2ae56cc-138d-4429-9c4c-28e19c7b8ec2",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA IMPIRFLUXAM 60 G/L + TEBUCONAZOL 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 23088.8
    }
  },
  {
    "id": "a1f717bc-293a-4750-8128-709f6cfc230a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA EBIFENTRINA 50 G/L + IMIDACLOPRIDO 250 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1089.14
    }
  },
  {
    "id": "fd411d64-8432-46e4-b10b-4a839b4c5d3b",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1834.56
    }
  },
  {
    "id": "6fa3c8dc-966d-46d3-a4ef-8c4e836d7b71",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA PIRIPROXIFEM 100 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2181.75
    }
  },
  {
    "id": "d095860a-649f-402a-bcea-a60f34f4b0eb",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ACARICIDA PROFENOFOS 400 G/L + CIPERMETRINA 40 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4949.72
    }
  },
  {
    "id": "2f1cdd99-1f48-4f3c-a47f-e170b80f43c5",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CLORFENAPIR",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6640.64
    }
  },
  {
    "id": "85dfed6a-8356-44c6-b2a9-2be0e0485274",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACETAMIPRIDO 250 G/KG + BIFENTRINA 250 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8539.82
    }
  },
  {
    "id": "9b4b57eb-f246-49fc-8c00-eb3c085bc120",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA TEBUCONAZOL 90 G/L + TRIFLOXISTROBINA 75 G/L + OXICLORETO DE COBRE 420 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 23760
    }
  },
  {
    "id": "33d7859b-b2d5-4363-a166-6b9bae616a4b",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 572.8
    }
  },
  {
    "id": "cd09918c-4ef5-4c30-a0a3-8906063f607a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA DIBROM DIQUATE 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 5340
    }
  },
  {
    "id": "085994d9-a145-459b-8497-62cca2fe280d",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA CLETODIM 240 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2791.24
    }
  },
  {
    "id": "65d9a28c-bde2-4bef-9a62-0a3d0c77145c",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 7097.22
    }
  },
  {
    "id": "958a7095-14f0-4e19-a78d-c67ea0615fb2",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA PIRIPROXIFEM 100 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 7679.76
    }
  },
  {
    "id": "b3003ae4-5233-4e01-88d8-ef052caf8eee",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 9172.8
    }
  },
  {
    "id": "39adfc81-c80b-4cbd-a1b9-be98701c8140",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA CLORPIRIFOS 480 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 17741.600000000002
    }
  },
  {
    "id": "1a475efa-357d-47e6-af3e-107812cacfcf",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ACARICIDA PROFENOFOS 400 G/L + CIPERMETRINA 40 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6400.5
    }
  },
  {
    "id": "5b33d735-36e4-414c-8423-0939daed0812",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACETAMIPRIDO 250 G/KG + BIFENTRINA 250 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 25746.92
    }
  },
  {
    "id": "57c1ae60-d919-4b50-9d41-c47b20ebdda7",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA TEBUCONAZOL 90 G/L + TRIFLOXISTROBINA 75 G/L + OXICLORETO DE COBRE 420 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 68211
    }
  },
  {
    "id": "9cce71c4-488b-4f1a-b563-0b6fdf1a7a53",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 86.94
    }
  },
  {
    "id": "f0ef6f1a-cf4c-4eda-8511-26f8b2ef61c5",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA CLETODIM 240 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 157.57
    }
  },
  {
    "id": "e25c403a-0cba-4048-a2d3-c6c748197823",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 505.57000000000005
    }
  },
  {
    "id": "6089557f-8e60-4187-a8f6-5481372e1fcd",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA METOMIL 215 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 318.24
    }
  },
  {
    "id": "9fb71034-553d-4534-9bd9-d37b5fc233cf",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA ATRAZINA 500 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 418.8
    }
  },
  {
    "id": "bf6f37fa-4452-488f-9dfe-9e8ac920b130",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA PIRIPROXIFEM 100 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3578.07
    }
  },
  {
    "id": "0ed02062-b9b2-4ef6-8bd7-88448146a5d9",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACETAMIPRIDO 250 G/KG + BIFENTRINA 250 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 19628.84
    }
  },
  {
    "id": "151e8262-d860-480c-b828-76a367200924",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ACARICIDA PROFENOFOS 400 G/L + CIPERMETRINA 40 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 21804.37
    }
  },
  {
    "id": "6ea15fc6-1806-4f87-9a79-7dc53709ff78",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA TEBUCONAZOL 90 G/L + TRIFLOXISTROBINA 75 G/L + OXICLORETO DE COBRE 420 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 40590
    }
  },
  {
    "id": "7b4b5f86-ebe6-44b7-afe5-d91f1086c903",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1233.42
    }
  },
  {
    "id": "ff2b31aa-e966-4590-a69a-603666b85ac3",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA PIRIPROXIFEM 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 918.75
    }
  },
  {
    "id": "97511d9d-c2de-41d3-bb36-ff48b57aea3a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA PIRIPROXIFEM 100 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1250.87
    }
  },
  {
    "id": "c66919a2-f04d-4fa3-b3e9-8665e1fd0356",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACETAMIPRIDO 250 G/KG + BIFENTRINA 250 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 10451.72
    }
  },
  {
    "id": "9bc1b756-cd86-4371-aeb0-a7658fcbc726",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ACARICIDA PROFENOFOS 400 G/L + CIPERMETRINA 40 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 11734.25
    }
  },
  {
    "id": "045761c7-db34-44d7-9471-bc206e0f0a47",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA TEBUCONAZOL 90 G/L + TRIFLOXISTROBINA 75 G/L + OXICLORETO DE COBRE 420 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 21780
    }
  },
  {
    "id": "7b95b5c5-334c-40b4-9161-2f322e703d7b",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 275.31
    }
  },
  {
    "id": "c4caf319-92d5-455f-bed8-e9ddca9c4e2b",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA FLUMIOXAZINA 500 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 824.22
    }
  },
  {
    "id": "e273aa26-6d41-4cac-89eb-09f4866aceb4",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA GLUFOSINATO SAL DE AMONIO 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3850.4399999999996
    }
  },
  {
    "id": "0608bb1e-637b-4859-ab97-6f3751865f9b",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6569.539999999999
    }
  },
  {
    "id": "953b6666-5ad2-44df-9e92-ccc0d375a21b",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA DIBROM DIQUATE 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6338.64
    }
  },
  {
    "id": "86affb0b-1819-4c7b-bb63-a8b1d22320de",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T30 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2477",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA DIBROM DIQUATE 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1625.51
    }
  },
  {
    "id": "5b941fdc-35a2-427d-8e8a-25c53ad24247",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 507.15
    }
  },
  {
    "id": "537648bd-f23c-4d18-893c-13e96ba7bf6f",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1233.42
    }
  },
  {
    "id": "3d3d3fe7-3a20-4180-88a9-fec3c70fc89a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA MANCOZEBE 750 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 49003.5
    }
  },
  {
    "id": "22a2edd6-8a99-414e-a880-ba2e209a7050",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CLORFENAPIR",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 48767.200000000004
    }
  },
  {
    "id": "12fda6f8-9a45-41e2-9d92-ae910bc59449",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA BIFENTRINA 180 G/L + ZETA-CIPERMETRINA 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 44410.5
    }
  },
  {
    "id": "91d9fb73-7fbb-4938-98e7-073f6a038877",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA IMPIRFLUXAM 60 G/L + TEBUCONAZOL 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 100807.35
    }
  },
  {
    "id": "d0d7c567-73fc-4581-a1e0-fb269a1624d9",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA METOMIL 215 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4841.58
    }
  },
  {
    "id": "c63a5a06-8e77-4e2f-9148-68623d2f0cc1",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8281
    }
  },
  {
    "id": "0569726e-b2a5-4f2a-99b3-85c5699f09ca",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA MANCOZEBE 750 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 16460.15
    }
  },
  {
    "id": "028f23de-12ee-40c9-8c11-6cb1cd6f6562",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA BIFENTRINA 180 G/L + ZETA-CIPERMETRINA 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 9174
    }
  },
  {
    "id": "50294b7d-24f2-4750-8f14-386df975ed32",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA BIXAFEM 125 G/L + PROTIOCONAZOL 175 G/L + TRIFLOXISTROBINA 150 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 28789.2
    }
  },
  {
    "id": "e263ff69-8a8f-4bee-bc46-a9277ebc7893",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T30 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2477",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 114.57
    }
  },
  {
    "id": "d93cc3ed-c71f-4480-875d-52da243dc44f",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T30 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2477",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CLORFENAPIR",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4681.5
    }
  },
  {
    "id": "3345f94f-5736-418a-9037-4a5e15fba462",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T30 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2477",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACETAMIPRIDO 250 G/KG + BIFENTRINA 250 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4772.1
    }
  },
  {
    "id": "9aa94345-6d8e-4d3b-89fc-20b04bfc704f",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T30 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2477",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA CIPROCONAZOL 80 G/L + PICOXISTROBINA 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 7955.25
    }
  },
  {
    "id": "660747e1-e5a2-4198-97a6-2b0e0809330f",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE ESTER METILICO 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 112
    }
  },
  {
    "id": "d1cef082-7d37-4129-be8b-6ed99a967832",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA BIFENTRINA 180 G/L + ZETA-CIPERMETRINA 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2835.6
    }
  },
  {
    "id": "2a47a68e-66d0-4119-bbfa-779e352a9922",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA BIFENTRINA 180 G/L + ZETA-CIPERMETRINA 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1334.4
    }
  },
  {
    "id": "860161b9-922a-4653-be8d-85bf95e02840",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T20 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2488",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4304.24
    }
  },
  {
    "id": "f9b76ae4-7201-4a71-badd-4a3ee7d5bffe",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T20 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2488",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA FLUMIOXAZINA 500 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 331.42
    }
  },
  {
    "id": "9836c31d-bf42-41a6-97f9-673fe805f46a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T20 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2488",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACETAMIPRIDO 250 G/KG + BIFENTRINA 250 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1784.44
    }
  },
  {
    "id": "bbf891cc-ae14-4342-b43f-0e0a7fe22a84",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T20 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2488",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA GLUFOSINATO SAL DE AMONIO 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1800.24
    }
  },
  {
    "id": "47f764c2-d626-4458-833f-6e0986247b8c",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA PIRIPROXIFEM 100 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1570.86
    }
  },
  {
    "id": "83d72149-b71f-4c2c-8947-8f60a460bc06",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA LAMBDA-CIALOTRINA 106 G/L + TIAMETOXAM 141 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6435.72
    }
  },
  {
    "id": "e3a1fd04-603b-4687-a13c-da71d40ed5fb",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "CLORFENAPIR",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8975.24
    }
  },
  {
    "id": "b06c23ed-2f4b-4bd1-9e6d-26c1640f96d0",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA IMPIRFLUXAM 60 G/L + TEBUCONAZOL 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 22470.35
    }
  },
  {
    "id": "e4284a1f-25c5-48ea-ad55-ad2412d7bd3c",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA METOMIL 215 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 4152.45
    }
  },
  {
    "id": "d603788e-4c86-4904-95d1-6fb3c6df3e2d",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA LAMBDA-CIALOTRINA 106 G/L + TIAMETOXAM 141 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6078.18
    }
  },
  {
    "id": "96b4f91a-4316-4807-a6ff-6a375052f368",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA BIXAFEM 125 G/L + PROTIOCONAZOL 175 G/L + TRIFLOXISTROBINA 150 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 20545.02
    }
  },
  {
    "id": "6850eb4a-e7ac-414f-8a39-145f5ebe001a",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA MEFENTRIFLUCONAZOL 133,30 G/L + PIRACLOSTROBINA 177,8 G/L + FLUXAPIROXADE 88,9 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 950
    }
  },
  {
    "id": "aee7794c-ccc9-4aa0-8617-78756656ded5",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA EBIFENTRINA 50 G/L + IMIDACLOPRIDO 250 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6000
    }
  },
  {
    "id": "df20cde3-394c-4575-9722-5363e3008f3c",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA CLORPIRIFOS 480 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 7017.2
    }
  },
  {
    "id": "9815ab2c-7d10-42ba-980a-086278be23a2",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - GIRASSOL",
    "centroCusto": "F9T30 GIRASSOL GRAO GIRASSOL GRAO 02/2026 Ciclo:2491",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA GLUFOSINATO SAL DE AMONIO 200 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1354.33
    }
  },
  {
    "id": "3910c5c9-01c7-440e-a2fd-d27753e03e11",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - GIRASSOL",
    "centroCusto": "F9T30 GIRASSOL GRAO GIRASSOL GRAO 02/2026 Ciclo:2491",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA SAL DE AMONIO DE GLIFOSATO 792,5 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2651.81
    }
  },
  {
    "id": "c2c83471-4445-4112-9175-db62638d96a6",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA CLOROTALONIL 720 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8070.24
    }
  },
  {
    "id": "c8400369-a866-47bb-8ff9-fc4abe009845",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "FUNGICIDA DIFENOCONAZOL 250 G/L + CIPROCONAZOL 150 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 15871.27
    }
  },
  {
    "id": "ed260886-8082-4d87-b943-b69589c927b0",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "INSETICIDA ACETAMIPRIDO 250 G/KG + BIFENTRINA 250 G/KG",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1911.9
    }
  },
  {
    "id": "4bcd4cb7-312d-457b-8d36-0acf3bac92c0",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - GIRASSOL",
    "centroCusto": "F9T30 GIRASSOL GRAO GIRASSOL GRAO 02/2026 Ciclo:2491",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "ADJUVANTE OLEO MINERAL 428G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 186.73
    }
  },
  {
    "id": "2e80ccfb-cb60-4c05-8d7a-aebb156832f4",
    "codigo": "4.1.01.11.0019",
    "descricao": "HERBICIDAS E DEFENSIVOS",
    "tipo": "C",
    "codigoPai": "4.1.01.11",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - GIRASSOL",
    "centroCusto": "F9T30 GIRASSOL GRAO GIRASSOL GRAO 02/2026 Ciclo:2491",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.11-CUSTOS RURAIS",
    "nomeProduto": "HERBICIDA FLUMIOXAZINA 500 G/L",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 332.44
    }
  },
  {
    "id": "f1560bcf-c21a-40ba-b5ae-0288a52023b7",
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
      "2026-02": 71.55
    }
  },
  {
    "id": "31f8f71e-eef9-470f-8474-4b82a9144b30",
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
      "2026-02": 609.84
    }
  },
  {
    "id": "58da98d7-38df-42a3-8a21-e9ce5bb8c01a",
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
      "2026-02": 358.93
    }
  },
  {
    "id": "f875896f-3b7d-4aed-b696-b2bf979676e7",
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
    "nomeProduto": "HERBICIDA FLUROX + PICLORAN 80 + 80G/L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 1589.7599999999998
    }
  },
  {
    "id": "14db793c-c1d9-4d90-a0af-6c35da77dcf2",
    "codigo": "4.1.01.21",
    "descricao": "4.1.01.21",
    "tipo": "C",
    "codigoPai": "4.1.01",
    "nivel": 4,
    "atividade": "AGRICOLA",
    "orcado": {},
    "realizado": {}
  },
  {
    "id": "f44b4598-041e-4cad-a467-372f0a91ce19",
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
    "id": "060edfb8-f82f-40cc-aeba-fada139c2196",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "RESPIRADOR PURIFICADOR DE AR TIPO PECA SEMIFACIAL FILTRANTE PARA PARTICULAS PFF2",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3.4
    }
  },
  {
    "id": "3d8cef55-1718-4128-9b5d-13f5f15a3d90",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "LUVA PROT NITRILIA CONTRA AGS MEC QUIM TAM 9",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 40.56
    }
  },
  {
    "id": "651bd8fe-66b8-4601-835a-b4399483485a",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 41",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 36.28
    }
  },
  {
    "id": "74e1686f-30f6-47e7-9908-511daa3f6af9",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CARTUCHO VAPOR ORGANICO 3MM 6001",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 79.5
    }
  },
  {
    "id": "d997e2e6-6a62-4c1f-89a2-85efb68edef9",
    "codigo": "4.1.01.21.0002",
    "descricao": "EQUIPAMENTOS DE SEGURANCA NO TRABALHO",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 40",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 108.25
    }
  },
  {
    "id": "6b0549d3-331c-483c-8227-71e07d9303bf",
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
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 39",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 38.08
    }
  },
  {
    "id": "7470bd50-42ff-4de3-86fe-cfcc373e4428",
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
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 39",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 182.78
    }
  },
  {
    "id": "7f4afffa-c0dc-4a09-992a-66e584a24d80",
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
      "2026-02": 81.68
    }
  },
  {
    "id": "70973aaa-2440-4b28-9469-04a56179451f",
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
    "nomeProduto": "CAPA DE CHUVA PVC MANGAS LONGAS TAM EXG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 31.79
    }
  },
  {
    "id": "61a94e3f-a18e-4e32-a5d7-e73971443aac",
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
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 41",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 91.23
    }
  },
  {
    "id": "8650a104-bdda-4206-843c-9cada1dcc780",
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
      "2026-02": 14.25
    }
  },
  {
    "id": "47ddaee0-1b10-4b6b-9f2f-adec0ed0ac82",
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
      "2026-02": 3.25
    }
  },
  {
    "id": "3b388929-343a-44a1-b925-9e5b511b4898",
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
      "2026-02": 26.64
    }
  },
  {
    "id": "79e9d535-8b81-46df-bd98-081b53157533",
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
      "2026-02": 126.09
    }
  },
  {
    "id": "3ad9db5c-981f-4e24-81c8-f503ce4a6e3b",
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
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO BRANCA NR 43",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 21.99
    }
  },
  {
    "id": "ff9a4385-a2d5-4590-8e82-1aa06feccb9f",
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
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 34",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 87.12
    }
  },
  {
    "id": "2ace88d8-92bc-463d-a8a4-386d664498db",
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
    "nomeProduto": "BOTINA SEGURANCA BLATT PT S BIQUEIRA NR 39",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": -87.41
    }
  },
  {
    "id": "76fea643-195a-4362-a64f-f303331a34ef",
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
    "nomeProduto": "BOTINA SOLADO DE PNEU Nº39",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": -45.36
    }
  },
  {
    "id": "2c8cf4ef-0aa9-4014-a935-a171003da162",
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
      "2026-02": 11.61
    }
  },
  {
    "id": "432bc99f-5d01-49e8-8e51-d349eebb91b4",
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
      "2026-02": 37.989999999999995
    }
  },
  {
    "id": "340c12f9-ed22-4492-98e8-e79e322b8303",
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
      "2026-02": 31.74
    }
  },
  {
    "id": "2cb46956-bb88-4a38-a8e9-4ead9a892a49",
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
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 40",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 73.54
    }
  },
  {
    "id": "bcef4e4d-cf6f-458f-a342-d4623e1de3ed",
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
      "2026-02": 39.94
    }
  },
  {
    "id": "35e61520-b93d-4a52-8be9-e71e8a05a150",
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
      "2026-02": 81.58
    }
  },
  {
    "id": "40b8f150-0bf2-4668-bdcd-0b290170ffd9",
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
      "2026-02": 4.53
    }
  },
  {
    "id": "13aa1d5c-123d-4da6-8f74-5ec9396b6c07",
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
      "2026-02": 7.75
    }
  },
  {
    "id": "39c048b0-a106-409a-81e2-5c43edc6d50f",
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
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 37",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 34.49
    }
  },
  {
    "id": "b6336604-f8c3-4f75-8464-edbc9ffed703",
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
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 35",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 39.84
    }
  },
  {
    "id": "a67bc6a5-723c-43a6-a44a-dddfa272d0b1",
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
    "nomeProduto": "BOTA BORRACHA PVC CANO LONGO PRETA NR 43",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 134.7
    }
  },
  {
    "id": "67a81708-503c-426e-a64c-689d1e799d99",
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
    "nomeProduto": "RECARGA PARA EXTINTOR PQS 8 KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 45
    }
  },
  {
    "id": "a36c6490-a1b9-461f-be47-9e6349b886dd",
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
    "nomeProduto": "RECARGA PARA EXTINTOR PQS 6 KG",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 72.6
    }
  },
  {
    "id": "15173d13-63e1-42d8-8eb6-772df36cd340",
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
      "2026-02": 6.57
    }
  },
  {
    "id": "bcc93b31-d0c4-4de3-b7bd-de2006fa1488",
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
    "nomeProduto": "BOTA BORRACHA PVC CANO CURTO  PRETA FLEX NR 37",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 35.39
    }
  },
  {
    "id": "22e4d489-b783-41e9-b0c1-073c58003de7",
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
    "nomeProduto": "BOTINA SEGURANCA COURO PT C BIQUEIRA NR 43",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 90.72
    }
  },
  {
    "id": "7628b6a0-a060-4662-b05c-1721e9abeff8",
    "codigo": "4.1.01.21.0005",
    "descricao": "PEDAGIOS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "PEDAGIO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 44.8
    }
  },
  {
    "id": "d194f451-e19b-45cc-b065-bc3ae84e0962",
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
      "2026-02": 781
    }
  },
  {
    "id": "7aac2ecc-96ea-4f17-9e1b-bc43450bc1c4",
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
      "2026-02": 362.87999999999994
    }
  },
  {
    "id": "242796ae-6257-4fdc-a73e-d75e6219c450",
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
    "nomeProduto": "SUCO DEL VALE 1LT",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 12
    }
  },
  {
    "id": "1f980858-62a2-458b-9e5c-6c2aed2cf18f",
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
    "nomeProduto": "PAO DE QUEIJO",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 20
    }
  },
  {
    "id": "095c5fb1-d092-4e14-b10b-c58a7f83b36d",
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
    "nomeProduto": "COCA COLA 2 L",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 31
    }
  },
  {
    "id": "98fd2852-4106-4875-b0c7-e954b679e096",
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
    "nomeProduto": "ENROLADINHO DOCE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 40.5
    }
  },
  {
    "id": "2d746cb9-b743-4f6a-a5ae-8b3f0abd0f5e",
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
    "nomeProduto": "PAOZINHO COM PATE",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 54
    }
  },
  {
    "id": "2a83ccb5-0b33-4b32-8f27-8ae79ee7f84d",
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
      "2026-02": 145.20000000000002
    }
  },
  {
    "id": "46abac8a-9c67-4b36-8c93-d0ed93a72e73",
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
      "2026-02": 189.20000000000002
    }
  },
  {
    "id": "2053301c-9649-4151-bcd3-7e509a696e77",
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
      "2026-02": 475.2
    }
  },
  {
    "id": "6d928b21-fd42-44db-872e-0d6ab3c6e4ce",
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
      "2026-02": 690.8000000000001
    }
  },
  {
    "id": "f7b20acc-0650-4030-b384-8d6f035e81e7",
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
      "2026-02": 704
    }
  },
  {
    "id": "1f2d940d-6a97-46e9-8d5b-8c3cbc1af0f0",
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
      "2026-02": 1188
    }
  },
  {
    "id": "bee6cc32-3a34-4ad8-91ee-ecb09d779437",
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
      "2026-02": 80.3
    }
  },
  {
    "id": "eb6f30fd-ef10-4227-8f1f-b3207aeee29e",
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
      "2026-02": 83.60000000000001
    }
  },
  {
    "id": "7e9b7bf4-a5c5-47ba-a5f9-d9791cfa2391",
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
      "2026-02": 88
    }
  },
  {
    "id": "545e7613-145e-475a-944f-476dcad06589",
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
      "2026-02": 70.39999999999999
    }
  },
  {
    "id": "6a154f40-0f66-4644-a26e-4a277d3a9729",
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
      "2026-02": 73.7
    }
  },
  {
    "id": "a70cd69c-0f38-4827-846e-3040945d9e2d",
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
      "2026-02": 30.8
    }
  },
  {
    "id": "26d23f23-dd52-4ee0-b269-aac36c296833",
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
      "2026-02": 35.199999999999996
    }
  },
  {
    "id": "4146d63c-2984-439a-94a9-4504e85f0aa7",
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
      "2026-02": 35.199999999999996
    }
  },
  {
    "id": "5b3ba7b7-8e60-4594-8ad8-828bb90e62d3",
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
      "2026-02": 44
    }
  },
  {
    "id": "27ad404e-9c38-4fe6-8700-6528965800bb",
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
      "2026-02": 48.4
    }
  },
  {
    "id": "d2b33fe1-3781-45f8-b47b-24bdfea8b0b5",
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
      "2026-02": 50.6
    }
  },
  {
    "id": "ca9fe821-c336-493c-897f-5f9cff42ad7f",
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
      "2026-02": 22
    }
  },
  {
    "id": "39ccc75c-2c44-4f13-a3a5-af61ce07b3fa",
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
      "2026-02": 101.2
    }
  },
  {
    "id": "fd95d279-faee-486b-b5ee-8f850e1f955d",
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
      "2026-02": 110
    }
  },
  {
    "id": "b9f7fc84-127e-4897-bb7c-7b45552672a2",
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
      "2026-02": 2917
    }
  },
  {
    "id": "ca0d8573-c56f-4048-93af-232676f5ea35",
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
      "2026-02": 403.62
    }
  },
  {
    "id": "5158e75f-10c9-454e-ae6a-70655a53a32f",
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
      "2026-02": 660
    }
  },
  {
    "id": "e1772983-e026-4158-b4be-f0b7f9fcef5e",
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
      "2026-02": 1016
    }
  },
  {
    "id": "865ff6d9-1920-428d-ba48-05fe04862a1d",
    "codigo": "4.1.01.21.0013",
    "descricao": "TAXAS E ANUIDADES",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "TAXAS, MENSALIDADES OU ANUIDADE 000019",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 3500
    }
  },
  {
    "id": "4eb2e34a-84e3-42b6-8bd1-01aa7c9a1485",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA GOLA POLO G VERDE FLORESTA",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 80.78
    }
  },
  {
    "id": "23cd188c-6cd0-484b-a6ef-d3586ccd5911",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CAMISA ELANCA F. VERDE MANGA LONGA (M)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 49.77
    }
  },
  {
    "id": "2fe88fe6-86e4-4638-8bff-ec6f2412d5b7",
    "codigo": "4.1.01.21.0020",
    "descricao": "OUTROS CUSTOS OPERACIONAIS",
    "tipo": "C",
    "codigoPai": "4.1.01.21",
    "nivel": 5,
    "atividade": "PECUARIA",
    "departamento": "CONFINAMENTO",
    "centroCusto": "RATEIO CONFINAMENTO",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.1.01.21-OUTROS CUSTOS OPERACIONAIS",
    "nomeProduto": "CALCA ELANCA VERDE (M)",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": 57.45
    }
  },
  {
    "id": "d02046da-d07d-4a02-a527-92b9f0ab5930",
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
    "id": "82b2eccd-82d6-46cf-b805-4b32243d87c2",
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
    "id": "000986f0-58c5-4d76-98a5-87ef77e3abf1",
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
    "id": "3d76b95b-cb79-4c8a-842d-7de61f7fe68c",
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
    "id": "c25934d2-dd6f-45c7-8329-06ea372d9c67",
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
    "id": "69f9a0eb-abdc-45af-9ca6-d66c59709af6",
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
    "id": "2c31df3a-c587-4773-b145-9b18b06c3ced",
    "codigo": "4.2.01.02.0001",
    "descricao": "RATEIO RECEBIDO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 5665.04
    }
  },
  {
    "id": "f25fce41-5b00-4cda-bb3d-923f174f3a9e",
    "codigo": "4.2.01.02.0001",
    "descricao": "RATEIO RECEBIDO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 28084.809999999998
    }
  },
  {
    "id": "14e55d55-1dee-40d0-9109-1cdf85dd1ec6",
    "codigo": "4.2.01.02.0001",
    "descricao": "RATEIO RECEBIDO",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3273.93
    }
  },
  {
    "id": "7396763b-3a9e-421b-a703-beee2e5fe60b",
    "codigo": "4.2.01.02.0001",
    "descricao": "RATEIO RECEBIDO",
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
      "2026-02": 19583.56
    }
  },
  {
    "id": "43b5d779-b41a-4130-ad08-42c935047798",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3583.58
    }
  },
  {
    "id": "fb2ef717-f6f8-4672-95b0-6849924c19d6",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6745.56
    }
  },
  {
    "id": "9d81172b-3f4d-473a-b457-4fd3c77b472d",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2951.18
    }
  },
  {
    "id": "259fe69c-8d4d-4c56-8892-45c0c0c10948",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 12437.12
    }
  },
  {
    "id": "753599b8-3ecf-438f-9738-e8173d65e775",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6039.79
    }
  },
  {
    "id": "12d55b44-e2bc-4bf0-9c1a-78dd78f9047c",
    "codigo": "4.2.01.02.0007",
    "descricao": "RATEIO CUSTO DE PESSOAL",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 14334.29
    }
  },
  {
    "id": "ae279396-191b-4ec2-8b9d-d123081e99f7",
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
      "2026-02": 5911.05
    }
  },
  {
    "id": "aac0146e-8326-4e33-b22c-6fbede4ffa91",
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
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "PECUÁRIA",
    "orcado": {},
    "realizado": {
      "2026-02": -539.37
    }
  },
  {
    "id": "1e406420-44f5-452d-be01-e463085c2fe3",
    "codigo": "4.2.01.02.0019",
    "descricao": "RATEIO TRANSPORTE LEVES ADMINITRACAO",
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
      "2026-02": 9224.08
    }
  },
  {
    "id": "52073176-1a47-4f44-ad1b-cdd57341726c",
    "codigo": "4.2.01.02.0020",
    "descricao": "RATEIO MOTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 585.54
    }
  },
  {
    "id": "e8e592ce-50a9-4d79-8173-ba15e0128678",
    "codigo": "4.2.01.02.0020",
    "descricao": "RATEIO MOTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 546.51
    }
  },
  {
    "id": "68662eb9-b934-4768-b5e0-75bec1a46443",
    "codigo": "4.2.01.02.0020",
    "descricao": "RATEIO MOTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 585.54
    }
  },
  {
    "id": "3033cb7b-0611-4ee8-b7ac-8ed7888d7210",
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
      "2026-02": 4668.8
    }
  },
  {
    "id": "c2bb4697-40b8-4d49-bf5d-38bf01570033",
    "codigo": "4.2.01.02.0021",
    "descricao": "RATEIO VEICULOS MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3038.4
    }
  },
  {
    "id": "448d2c84-f420-425b-b75c-c096cdccf231",
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
      "2026-02": 12858.56
    }
  },
  {
    "id": "ac8fb955-dcfe-4a0b-87d1-178d5f6f44fb",
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
      "2026-02": 8713.55
    }
  },
  {
    "id": "1d9a4c84-96f0-404c-bf12-922cc07300ff",
    "codigo": "4.2.01.02.0027",
    "descricao": "PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1502.39
    }
  },
  {
    "id": "0dc95575-0a1a-427f-a83d-d971651ef170",
    "codigo": "4.2.01.02.0027",
    "descricao": "PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 727.96
    }
  },
  {
    "id": "4303f334-e7e8-44af-8c3b-d11c1f14992b",
    "codigo": "4.2.01.02.0027",
    "descricao": "PALHA DE MILHO LG",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 9277.74
    }
  },
  {
    "id": "aa9b1275-eef7-4e52-8aaa-10b186e2c9e2",
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
      "2026-02": 2137.43
    }
  },
  {
    "id": "c73930d7-4d05-4d30-a145-1af1f998c47e",
    "codigo": "4.2.01.02.0030",
    "descricao": "RATEIO TRATORES PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3324.25
    }
  },
  {
    "id": "848b844a-35b3-41d3-b47f-70909bd58f0f",
    "codigo": "4.2.01.02.0030",
    "descricao": "RATEIO TRATORES PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3601.28
    }
  },
  {
    "id": "07627694-4ace-4604-86ca-01f58c853d3d",
    "codigo": "4.2.01.02.0030",
    "descricao": "RATEIO TRATORES PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1939.15
    }
  },
  {
    "id": "adfcad52-ebf5-4667-82ff-b412886ef49b",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 43.87
    }
  },
  {
    "id": "ce7221d8-1c38-4f5c-b406-d9b65237fbcc",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 149.16
    }
  },
  {
    "id": "0e907850-4245-4fe0-b324-400e284e0f61",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 136
    }
  },
  {
    "id": "33599433-b522-4c8e-8347-2ba95d9f2711",
    "codigo": "4.2.01.02.0034",
    "descricao": "RATEIO CARRETAS AGRICOLAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 87.74
    }
  },
  {
    "id": "d4603467-c4e8-4ccd-89b0-f85e6b588d21",
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
      "2026-02": 197.42
    }
  },
  {
    "id": "d7d15638-6d87-4a30-a2db-872d10369d83",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 10979.86
    }
  },
  {
    "id": "6c6a660c-bfad-47c0-a3e3-9bb483d8c04c",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 677.76
    }
  },
  {
    "id": "66280fe8-b2d2-4b81-a7c0-0039f1ff715d",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 10708.55
    }
  },
  {
    "id": "8a05aa98-c5c7-4504-995d-21a4d448c5f7",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8133.15
    }
  },
  {
    "id": "775edfac-5fab-44b3-b584-ac43be5f42c6",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2168.77
    }
  },
  {
    "id": "ff6b0cf9-6734-41ee-b446-452067e99bd5",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1355.53
    }
  },
  {
    "id": "bfeac3e7-9a09-4f95-a9ea-7a8d195ce109",
    "codigo": "4.2.01.02.0035",
    "descricao": "RATEIO TRATORES LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2304.43
    }
  },
  {
    "id": "7c3e846c-60eb-44cc-b25b-68b1cefb71cb",
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
      "2026-02": 2846.53
    }
  },
  {
    "id": "7c48f0be-3ef1-4f2d-a35a-dcf8cc22cacc",
    "codigo": "4.2.01.02.0036",
    "descricao": "RATEIO TRATORES MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1962.62
    }
  },
  {
    "id": "3c4c910c-fb9b-40c8-b988-71c8eee1726e",
    "codigo": "4.2.01.02.0036",
    "descricao": "RATEIO TRATORES MEDIOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2433.69
    }
  },
  {
    "id": "8a3cca6c-20eb-49de-bd6c-597385732d04",
    "codigo": "4.2.01.02.0036",
    "descricao": "RATEIO TRATORES MEDIOS",
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
      "2026-02": 6751.5199999999995
    }
  },
  {
    "id": "55cfbdcc-9271-402e-b221-acb38e0e5fcf",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2028.3
    }
  },
  {
    "id": "1e5ceee7-b01a-4ce6-8368-92152ef12ff4",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 5291.43
    }
  },
  {
    "id": "0dd7f4fc-27e2-4b59-b4d4-92aa9ce11878",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 599.63
    }
  },
  {
    "id": "2139b612-6c45-418e-9c68-ba64c63d4415",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 5291.43
    }
  },
  {
    "id": "b4cbf38a-c575-4460-9ff5-affd04a3008d",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3527.63
    }
  },
  {
    "id": "83e764d5-1278-49c5-a099-0fac2c7084be",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2552.1499999999996
    }
  },
  {
    "id": "3af2ed5a-6531-4906-9a85-c82936621e09",
    "codigo": "4.2.01.02.0037",
    "descricao": "RATEIO VEICULOS LEVES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3693.25
    }
  },
  {
    "id": "bc085d55-2b5f-4a83-bb6b-4fad1ce0cd8f",
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
      "2026-02": 1310.4299999999998
    }
  },
  {
    "id": "84845c95-ef8c-489e-aa42-2e78cea9096b",
    "codigo": "4.2.01.02.0038",
    "descricao": "RATEIO VEICULOS PESADOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": -2711.26
    }
  },
  {
    "id": "a115f2c6-4de1-42f3-9f0b-4141d713cc67",
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
      "2026-02": 154.9
    }
  },
  {
    "id": "3aea6769-9915-4572-b79d-38d492fa9384",
    "codigo": "4.2.01.02.0039",
    "descricao": "RATEIO REBOQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS TRANSFERIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": -744.84
    }
  },
  {
    "id": "73b47b44-bc6e-4955-9b87-10567216b8b9",
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
      "2026-02": 16.41
    }
  },
  {
    "id": "a2030a2c-0c84-4fa9-a150-8cf53cc97e54",
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
      "2026-02": 52442.56
    }
  },
  {
    "id": "029a637d-a52a-4c54-bd6c-1c6e4660a94b",
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
      "2026-02": 190001.54
    }
  },
  {
    "id": "cc5eca1a-3557-4b30-886b-880938014be2",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 439.40999999999997
    }
  },
  {
    "id": "d60e34f2-ea79-4187-80df-13167f92eac7",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 183.08
    }
  },
  {
    "id": "8e7a85e3-4899-4c37-aa24-63001b5701e5",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 292.94
    }
  },
  {
    "id": "59451b03-8a7d-4f3b-9397-a4ce800be80b",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 256.32
    }
  },
  {
    "id": "8d528459-8c5e-46a4-9566-3e2729c8cd1a",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 347.87
    }
  },
  {
    "id": "8d608fb1-8367-42c0-9422-c984a9f0ae4e",
    "codigo": "4.2.01.02.0045",
    "descricao": "RATEIO CARRETAS TANQUE",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1116.84
    }
  },
  {
    "id": "a80a7b40-5f23-4b5f-9eb3-1cbd300ff9f8",
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
      "2026-02": 73.24
    }
  },
  {
    "id": "bc2143ae-4c88-4d73-b111-2fe37c7b866d",
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
      "2026-02": 47932.32
    }
  },
  {
    "id": "5938d68b-fa3c-4744-b66c-97e99508761b",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 46698
    }
  },
  {
    "id": "2b94b51f-c85c-459c-87ef-e2da291ef418",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 595.43
    }
  },
  {
    "id": "b6d23984-da32-462a-90b3-9a6d899bfc57",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2668.55
    }
  },
  {
    "id": "a38f427e-bab3-4ad9-b211-11a1e17449a7",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 5336.85
    }
  },
  {
    "id": "1bace36a-6047-4188-96aa-595327f079d3",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T30 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2477",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8005.4
    }
  },
  {
    "id": "4c1c3ded-94b6-4013-a90b-77ae711158a4",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "SANTA MARIA - SOJA",
    "centroCusto": "F57T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2484",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 14943.330000000002
    }
  },
  {
    "id": "17bc51de-bdfe-4b81-9a9c-98e7f955c1f0",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 88326.56
    }
  },
  {
    "id": "1c527938-d5a9-40f0-a442-ded63660b15e",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 15744.11
    }
  },
  {
    "id": "eb05695e-cd4b-457c-b0fa-15f68fac7144",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 22682.04
    }
  },
  {
    "id": "b270b952-261a-476d-8bde-786367cc6b99",
    "codigo": "4.2.01.02.0047",
    "descricao": "RATEIO PULVERIZADORES",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 23482.58
    }
  },
  {
    "id": "56edac03-e8bd-4209-88a4-566d8cb50782",
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
      "2026-02": 218.57999999999998
    }
  },
  {
    "id": "e6a08647-2545-4d59-a6aa-616f2f93383d",
    "codigo": "4.2.01.02.0048",
    "descricao": "RATEIO SEMEADORAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2277.49
    }
  },
  {
    "id": "cdaa9d13-3968-43e1-8347-7a7238814feb",
    "codigo": "4.2.01.02.0050",
    "descricao": "RATEIO PLANTADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 19378.53
    }
  },
  {
    "id": "0d1420ca-322d-4bed-942a-3eb41756e2dd",
    "codigo": "4.2.01.02.0050",
    "descricao": "RATEIO PLANTADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3799.7
    }
  },
  {
    "id": "3139c2f7-405a-4ae0-8215-9068b152e085",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T20 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2488",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6969.78
    }
  },
  {
    "id": "f9d0c7f9-cf1d-486a-9750-f92d8970c4f0",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "CANADÁ - SOJA",
    "centroCusto": "F51T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2482",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 151835.48
    }
  },
  {
    "id": "c0db18a0-3410-4485-96cc-91a446c7071b",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "UNIÃO - SOJA",
    "centroCusto": "F50T10 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2481",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 84059.66
    }
  },
  {
    "id": "79ab2159-b515-4867-b058-ae25b7b7bc4b",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "VALE DO IMBÉ - SOJA",
    "centroCusto": "F52T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2483",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 123994.93
    }
  },
  {
    "id": "8718d94a-ddd7-42e7-8ed3-24f8a34e99a3",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - MILHO",
    "centroCusto": "F7T100 MILHO SEMENTE MILHO SEMENTE 03/2026 Ciclo:2490",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 38317.13
    }
  },
  {
    "id": "356e4c7b-2d80-4fb5-9719-aecf30e2ce78",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 38317.12
    }
  },
  {
    "id": "ce668830-ba1a-4566-b010-3ffce99a3275",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 24367.39
    }
  },
  {
    "id": "33fb3bd9-0cb1-465b-8bef-0072eaa8d9f1",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 17397.71
    }
  },
  {
    "id": "95e72585-cec2-4db0-be84-3e465e36bfb9",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T30 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2477",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 40371.34
    }
  },
  {
    "id": "e7cf2892-7bdc-44a3-94ab-8a215c513d55",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T30 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2489",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 13570
    }
  },
  {
    "id": "8cc3398a-30a7-4b34-bf1d-425b62a24dc7",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "AROEIRA - SOJA",
    "centroCusto": "F53T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2479",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 26923.29
    }
  },
  {
    "id": "5a7a90de-1d79-4354-a131-1436a605f7ca",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "MONTE CARMELO - SOJA",
    "centroCusto": "F56T1 SOJA COMERCIAL A DEFINIR SOJA 11/2025 Ciclo:2480",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 61047.72
    }
  },
  {
    "id": "98150a5f-1af0-4916-a45f-ffbecef5f802",
    "codigo": "4.2.01.02.0052",
    "descricao": "RATEIO OUTROS IMPLEMENTOS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - GIRASSOL",
    "centroCusto": "F9T30 GIRASSOL GRAO GIRASSOL GRAO 02/2026 Ciclo:2491",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 6956.41
    }
  },
  {
    "id": "4d7f2aca-9d1e-4f96-9f9d-12e29ddd06bd",
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
      "2026-02": 16344.61
    }
  },
  {
    "id": "ae3fd798-00f3-4e7c-8e6f-c60470699b5b",
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
      "2026-02": 76680.01000000001
    }
  },
  {
    "id": "1f2e4332-a8fb-4091-91e0-92a4474b087f",
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
      "2026-02": 7163.03
    }
  },
  {
    "id": "c4860fd4-f2b0-440d-b925-b457365358d9",
    "codigo": "4.2.01.02.0055",
    "descricao": "RATEIO CUSTO PESSOAL PALHA DE MILHO LG",
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
      "2026-02": 708.24
    }
  },
  {
    "id": "4b501321-4393-4999-a1d3-34d8f3c67a9f",
    "codigo": "4.2.01.02.0058",
    "descricao": "RATEIO COLHEITADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 80294.67
    }
  },
  {
    "id": "e860a6b9-d061-41b4-a657-5636ae61163a",
    "codigo": "4.2.01.02.0058",
    "descricao": "RATEIO COLHEITADEIRAS",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAVRINHA SLN - SOJA",
    "centroCusto": "F7T100 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2486",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 8452.06
    }
  },
  {
    "id": "be367d66-137f-4bb8-8151-83a600ff3f00",
    "codigo": "4.2.01.02.0059",
    "descricao": "RATEIO AREAS IRRIGADAS LAGUNA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SORGO",
    "centroCusto": "F9T20 SORGO SEMENTE A DEFINIR SORGO 02/2026 Ciclo:2488",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 1068.16
    }
  },
  {
    "id": "e3c12005-9859-4b17-8ad0-1de39a8d3dd2",
    "codigo": "4.2.01.02.0059",
    "descricao": "RATEIO AREAS IRRIGADAS LAGUNA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - MILHO",
    "centroCusto": "F9T20 MILHO SEMENTE MILHO SEMENTE 02/2026 Ciclo:2487",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 2666.3
    }
  },
  {
    "id": "b08fbb77-f0a1-4cd4-b088-b52de7a70b12",
    "codigo": "4.2.01.02.0059",
    "descricao": "RATEIO AREAS IRRIGADAS LAGUNA",
    "tipo": "C",
    "codigoPai": "4.2.01.02",
    "nivel": 5,
    "atividade": "AGRICOLA",
    "departamento": "LAGUNA - SOJA",
    "centroCusto": "F9T20 SOJA COMERCIAL A DEFINIR SOJA 10/2025 Ciclo:2485",
    "coligada": "1-VERA CRUZ AGROPECUARIA LTDA",
    "grupoContabil": "4",
    "grupoContabilN9": "4.2.01.02-RATEIO DE CUSTOS",
    "nomeProduto": "CUSTOS RECEBIDOS",
    "divisao": "AGRÍCOLA",
    "orcado": {},
    "realizado": {
      "2026-02": 3734.45
    }
  },
  {
    "id": "38c59903-57e2-487c-863f-0d64d19c190a",
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
      "2026-02": 82.79
    }
  },
  {
    "id": "1997f91d-a58c-4038-84e4-dbc33a52ba15",
    "codigo": "4.2.01.02.0065",
    "descricao": "RATEIO DESPESAS ADMINISTRATIVAS",
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
      "2026-02": 19099.29
    }
  },
  {
    "id": "47c3a019-411d-4ecf-94c4-3759880ce716",
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
      "2026-02": 2888.5099999999998
    }
  }
];