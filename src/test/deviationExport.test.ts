import { describe, expect, it } from 'vitest';
import { buildDeviationExportData } from '@/lib/deviationExport';
import type { AccountEntry } from '@/types/budget';

const baseAccount = (overrides: Partial<AccountEntry>): AccountEntry => ({
  id: overrides.id ?? crypto.randomUUID(),
  codigo: '3.4.03.01.0001',
  descricao: 'Conta genérica',
  tipo: 'D',
  codigoPai: '3.4.03.01',
  nivel: 5,
  atividade: 'DESP_ADM_TRIB',
  orcado: {},
  realizado: {},
  ...overrides,
});

describe('buildDeviationExportData', () => {
  it('consolida orçado e realizado de todos os meses por grupo contábil, dentro de cada área', () => {
    const accounts: AccountEntry[] = [
      baseAccount({
        atividade: 'PECUARIA',
        grupoContabilN9: '3.4.03.01-DESPESAS COM PESSOAL',
        codigo: '3.4.03.01.0001',
        orcado: { '2026-04': 1000, '2026-05': 500 },
        realizado: { '2026-04': 1200, '2026-05': 400 },
      }),
      baseAccount({
        atividade: 'PECUARIA',
        grupoContabilN9: '3.4.03.01-DESPESAS COM PESSOAL',
        codigo: '3.4.03.01.0002',
        orcado: { '2026-04': 200 },
        realizado: { '2026-04': 100 },
      }),
    ];

    const { areas } = buildDeviationExportData(accounts);
    const pecuaria = areas.find((a) => a.key === 'PECUARIA_PASTO')!;

    expect(pecuaria.groupRows).toHaveLength(1);
    expect(pecuaria.groupRows[0]).toMatchObject({
      grupoContabil: '3.4.03.01-DESPESAS COM PESSOAL',
      orcado: 1700,
      realizado: 1700,
      diferenca: 0,
    });
    expect(pecuaria.lancamentos).toHaveLength(2);
  });

  it('ordena os grupos de cada área pelo maior desvio absoluto', () => {
    const accounts: AccountEntry[] = [
      baseAccount({
        atividade: 'AGRICOLA',
        grupoContabilN9: '3.4.01.01-GRUPO PEQUENO',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 110 },
      }),
      baseAccount({
        atividade: 'AGRICOLA',
        grupoContabilN9: '3.4.01.02-GRUPO GRANDE',
        orcado: { '2026-04': 1000 },
        realizado: { '2026-04': 5000 },
      }),
    ];

    const { areas } = buildDeviationExportData(accounts);
    const agricola = areas.find((a) => a.key === 'AGRICOLA')!;

    expect(agricola.groupRows.map((g) => g.grupoContabil)).toEqual([
      '3.4.01.02-GRUPO GRANDE',
      '3.4.01.01-GRUPO PEQUENO',
    ]);
  });

  it('exclui contas de receita (tipo R) de todas as áreas — o export é só de custos e despesas', () => {
    const accounts: AccountEntry[] = [
      // Receita: não deve aparecer em nenhuma área.
      baseAccount({
        atividade: 'PECUARIA',
        tipo: 'R',
        codigo: '3.1.01.01.0001',
        grupoContabilN9: '3.1.01.01-VENDA DE BOVINOS',
        orcado: { '2026-04': 5000 },
        realizado: { '2026-04': 4800 },
      }),
      // Custo na mesma área: deve aparecer normalmente.
      baseAccount({
        atividade: 'PECUARIA',
        tipo: 'C',
        codigo: '4.1.01.11.0001',
        grupoContabilN9: '4.1.01.11-CUSTOS RURAIS',
        orcado: { '2026-04': 300 },
        realizado: { '2026-04': 280 },
      }),
      // Outras Receitas Eventuais: código de receita, também deve ficar de fora.
      baseAccount({
        atividade: 'DESP_ADM_TRIB',
        tipo: 'R',
        codigo: '3.6.01.01.0001',
        grupoContabilN9: '3.6.01.01-RECEITAS EVENTUAIS',
        orcado: { '2026-04': 300 },
        realizado: { '2026-04': 250 },
      }),
    ];

    const { areas, resumoGeral } = buildDeviationExportData(accounts);
    const pecuaria = areas.find((a) => a.key === 'PECUARIA_PASTO')!;

    expect(pecuaria.groupRows).toMatchObject([{ grupoContabil: '4.1.01.11-CUSTOS RURAIS', orcado: 300, realizado: 280 }]);
    expect(resumoGeral.some((r) => r.grupoContabil.includes('VENDA DE BOVINOS'))).toBe(false);
    expect(resumoGeral.some((r) => r.grupoContabil.includes('RECEITAS EVENTUAIS'))).toBe(false);
  });

  it('divide Despesas Administrativas e Tributárias em Gerência Financeiro, Gerência RH e Tributárias, sem perder nem duplicar lançamentos', () => {
    const accounts: AccountEntry[] = [
      // Tributária: grupo contábil 3.4.03.01/02, independente do centro de custo.
      baseAccount({
        atividade: 'DESP_ADM_TRIB',
        grupoContabilN9: '3.4.03.01-IMPOSTOS MUNICIPAIS',
        centroCusto: 'ADMINISTRACAO',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 110 },
      }),
      // Gerência RH: centro de custo da lista Railene, fora do grupo tributário.
      baseAccount({
        atividade: 'DESP_ADM_TRIB',
        grupoContabilN9: '3.4.01.01-CUSTO DE PESSOAL',
        centroCusto: 'PESSOAL',
        orcado: { '2026-04': 200 },
        realizado: { '2026-04': 190 },
      }),
      // Gerência Financeiro: tudo que não é tributária nem centro de custo Railene (catch-all).
      baseAccount({
        atividade: 'DESP_ADM_TRIB',
        grupoContabilN9: '3.4.01.02-SERVICOS DE TERCEIROS',
        centroCusto: 'DIRETORIA',
        orcado: { '2026-04': 300 },
        realizado: { '2026-04': 280 },
      }),
    ];

    const { areas } = buildDeviationExportData(accounts);
    const financeiro = areas.find((a) => a.key === 'DESP_ADM_TRIB_FINANCEIRO')!;
    const rh = areas.find((a) => a.key === 'DESP_ADM_TRIB_RH')!;
    const tributarias = areas.find((a) => a.key === 'DESP_ADM_TRIB_TRIBUTARIAS')!;

    expect(tributarias.groupRows).toMatchObject([{ orcado: 100, realizado: 110 }]);
    expect(rh.groupRows).toMatchObject([{ orcado: 200, realizado: 190 }]);
    expect(financeiro.groupRows).toMatchObject([{ orcado: 300, realizado: 280 }]);

    // Nenhum lançamento perdido nem contado duas vezes entre as 3 sub-áreas.
    const totalLancamentos = financeiro.lancamentos.length + rh.lancamentos.length + tributarias.lancamentos.length;
    expect(totalLancamentos).toBe(accounts.length);
  });

  it('ignora entradas que não são folha (nível 5) e as com orçado e realizado zerados', () => {
    const accounts: AccountEntry[] = [
      baseAccount({ nivel: 4, orcado: { '2026-04': 500 }, realizado: { '2026-04': 500 } }),
      baseAccount({ orcado: {}, realizado: {} }),
    ];

    const { resumoGeral } = buildDeviationExportData(accounts);
    expect(resumoGeral).toHaveLength(0);
  });

  it('monta o resumo geral ordenado pelo maior desvio absoluto entre todas as áreas', () => {
    const accounts: AccountEntry[] = [
      baseAccount({
        atividade: 'SERINGAL',
        grupoContabilN9: '3.4.02.01-GRUPO SERINGAL',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 200 },
      }),
      baseAccount({
        atividade: 'AGRICOLA',
        grupoContabilN9: '3.4.02.02-GRUPO AGRICOLA',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 1100 },
      }),
    ];

    const { resumoGeral } = buildDeviationExportData(accounts);
    expect(resumoGeral.map((r) => r.area)).toEqual(['Agrícola', 'Seringal']);
  });

  it('não exporta Cana nem Encargos Financeiros — ficaram de fora do relatório', () => {
    const accounts: AccountEntry[] = [
      baseAccount({
        atividade: 'CANA',
        grupoContabilN9: '3.4.02.02-GRUPO CANA',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 200 },
      }),
      baseAccount({
        atividade: 'ENCARGOS',
        grupoContabilN9: '3.4.04.01-DESPESAS FINANCEIRAS',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 200 },
      }),
    ];

    const { areas, resumoGeral } = buildDeviationExportData(accounts);

    expect(areas.some((a) => a.label.toLowerCase().includes('cana'))).toBe(false);
    expect(areas.some((a) => a.label.toLowerCase().includes('encargos'))).toBe(false);
    expect(resumoGeral).toHaveLength(0);
  });

  it('consolida orçado e realizado apenas até o mês de corte, ignorando meses futuros em ambos os lados', () => {
    const accounts: AccountEntry[] = [
      baseAccount({
        atividade: 'PECUARIA',
        grupoContabilN9: '3.4.03.01-DESPESAS COM PESSOAL',
        // Orçado cobre a safra inteira (Abr a Dez), realizado só existe até Jun.
        orcado: { '2026-04': 100, '2026-05': 100, '2026-06': 100, '2026-07': 100, '2026-12': 100 },
        realizado: { '2026-04': 90, '2026-05': 95, '2026-06': 100 },
      }),
    ];

    const { areas } = buildDeviationExportData(accounts, '2026-06');
    const pecuaria = areas.find((a) => a.key === 'PECUARIA_PASTO')!;

    // Orçado deve somar só Abr+Mai+Jun (300), não a safra inteira (500).
    expect(pecuaria.groupRows[0]).toMatchObject({ orcado: 300, realizado: 285, diferenca: -15 });
  });

  it('sem mês de corte, consolida todos os meses (comportamento "consolidado geral")', () => {
    const accounts: AccountEntry[] = [
      baseAccount({
        atividade: 'PECUARIA',
        grupoContabilN9: '3.4.03.01-DESPESAS COM PESSOAL',
        orcado: { '2026-04': 100, '2027-03': 400 },
        realizado: { '2026-04': 90 },
      }),
    ];

    const { areas } = buildDeviationExportData(accounts, null);
    const pecuaria = areas.find((a) => a.key === 'PECUARIA_PASTO')!;
    expect(pecuaria.groupRows[0]).toMatchObject({ orcado: 500, realizado: 90 });
  });

  it('divide Pecuária em Pasto e Confinamento por departamento/centro de custo, sem perder nem duplicar lançamentos', () => {
    const accounts: AccountEntry[] = [
      // Confinamento: departamento CONFINAMENTO.
      baseAccount({
        atividade: 'PECUARIA',
        tipo: 'C',
        grupoContabilN9: '4.1.01.11-CUSTOS RURAIS',
        departamento: 'CONFINAMENTO',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 90 },
      }),
      // Confinamento: centro de custo da lista, departamento diferente.
      baseAccount({
        atividade: 'PECUARIA',
        tipo: 'C',
        grupoContabilN9: '4.1.01.11-CUSTOS RURAIS',
        departamento: 'JOIA - PECUARIA',
        centroCusto: 'RATEIO CONFINAMENTO',
        orcado: { '2026-04': 150 },
        realizado: { '2026-04': 140 },
      }),
      // Pasto: nem departamento nem centro de custo de confinamento (catch-all).
      baseAccount({
        atividade: 'PECUARIA',
        tipo: 'C',
        grupoContabilN9: '4.1.01.11-CUSTOS RURAIS',
        departamento: 'JOIA - PECUARIA',
        centroCusto: 'RATEIO GADO GERAL',
        orcado: { '2026-04': 300 },
        realizado: { '2026-04': 280 },
      }),
    ];

    const { areas } = buildDeviationExportData(accounts);
    const pasto = areas.find((a) => a.key === 'PECUARIA_PASTO')!;
    const confinamento = areas.find((a) => a.key === 'PECUARIA_CONFINAMENTO')!;

    expect(confinamento.groupRows).toMatchObject([{ orcado: 250, realizado: 230 }]);
    expect(pasto.groupRows).toMatchObject([{ orcado: 300, realizado: 280 }]);

    const totalLancamentos = pasto.lancamentos.length + confinamento.lancamentos.length;
    expect(totalLancamentos).toBe(accounts.length);
  });

  it('divide Pecuária em Genética, Confinamento e Pasto por departamento, sem perder nem duplicar lançamentos', () => {
    const accounts: AccountEntry[] = [
      // Genética: departamento CENTRO COMERCIAL DE TOUROS, mesmo que o centro de custo pareça confinamento.
      baseAccount({
        atividade: 'PECUARIA',
        tipo: 'C',
        grupoContabilN9: '4.1.01.11-CUSTOS RURAIS',
        departamento: 'CENTRO COMERCIAL DE TOUROS',
        centroCusto: 'RATEIO CONFINAMENTO',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 90 },
      }),
      // Confinamento: departamento CONFINAMENTO.
      baseAccount({
        atividade: 'PECUARIA',
        tipo: 'C',
        grupoContabilN9: '4.1.01.11-CUSTOS RURAIS',
        departamento: 'CONFINAMENTO',
        orcado: { '2026-04': 150 },
        realizado: { '2026-04': 140 },
      }),
      // Pasto: nem Genética nem Confinamento (catch-all).
      baseAccount({
        atividade: 'PECUARIA',
        tipo: 'C',
        grupoContabilN9: '4.1.01.11-CUSTOS RURAIS',
        departamento: 'JOIA - PECUARIA',
        centroCusto: 'RATEIO GADO GERAL',
        orcado: { '2026-04': 300 },
        realizado: { '2026-04': 280 },
      }),
    ];

    const { areas } = buildDeviationExportData(accounts);
    const genetica = areas.find((a) => a.key === 'PECUARIA_GENETICA')!;
    const confinamento = areas.find((a) => a.key === 'PECUARIA_CONFINAMENTO')!;
    const pasto = areas.find((a) => a.key === 'PECUARIA_PASTO')!;

    expect(genetica.groupRows).toMatchObject([{ orcado: 100, realizado: 90 }]);
    expect(confinamento.groupRows).toMatchObject([{ orcado: 150, realizado: 140 }]);
    expect(pasto.groupRows).toMatchObject([{ orcado: 300, realizado: 280 }]);

    const totalLancamentos = genetica.lancamentos.length + confinamento.lancamentos.length + pasto.lancamentos.length;
    expect(totalLancamentos).toBe(accounts.length);
  });

  it('abertura (lançamentos) usa a granularidade e as colunas da visão Planilha do dashboard, só com realizado', () => {
    const accounts: AccountEntry[] = [
      baseAccount({
        atividade: 'DESP_ADM_TRIB',
        grupoContabilN9: '3.4.01.01-RATEIO DESENVOLVIMENTO HUMANO',
        descricao: 'PPR',
        departamento: 'ADMINISTRACAO',
        centroCusto: 'RATEIO DESENVOLVIMENTO HUMANO',
        nomeProduto: 'PPR',
        complemento: '001.02.01.001',
        orcado: { '2026-04': 0 },
        realizado: { '2026-04': 177735 },
      }),
      // Entrada só de orçado sintético (sem realizado): não deve virar linha na abertura.
      baseAccount({
        id: 'SYN::ORCADO::1',
        atividade: 'DESP_ADM_TRIB',
        grupoContabilN9: '3.4.01.01-RATEIO DESENVOLVIMENTO HUMANO',
        descricao: 'Orçado agregado',
        orcado: { '2026-04': 5000 },
        realizado: {},
      }),
    ];

    const { areas } = buildDeviationExportData(accounts);
    const admTrib = areas.find((a) => a.key === 'DESP_ADM_TRIB_RH')!;

    expect(admTrib.lancamentos).toHaveLength(1);
    expect(admTrib.lancamentos[0]).toMatchObject({
      departamento: 'ADMINISTRACAO',
      centroCusto: 'RATEIO DESENVOLVIMENTO HUMANO',
      descricao: 'PPR',
      produto: 'PPR',
      complemento: '001.02.01.001',
      realizado: 177735,
    });
    expect(admTrib.lancamentos[0]).not.toHaveProperty('orcado');
    expect(admTrib.lancamentos[0]).not.toHaveProperty('conta');
  });
});
