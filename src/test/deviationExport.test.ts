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
    const pecuaria = areas.find((a) => a.key === 'PECUARIA')!;

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

  it('separa contas de Outras Receitas Eventuais da área original, sem duplicar valores', () => {
    const accounts: AccountEntry[] = [
      baseAccount({
        atividade: 'DESP_ADM_TRIB',
        tipo: 'R',
        codigo: '3.6.01.01.0001',
        grupoContabilN9: '3.6.01.01-RECEITAS EVENTUAIS',
        orcado: { '2026-04': 300 },
        realizado: { '2026-04': 250 },
      }),
    ];

    const { areas } = buildDeviationExportData(accounts);
    const admTrib = areas.find((a) => a.key === 'DESP_ADM_TRIB')!;
    const outras = areas.find((a) => a.key === 'OUTRAS_RECEITAS_EVENTUAIS')!;

    expect(admTrib.groupRows).toHaveLength(0);
    expect(outras.groupRows).toHaveLength(1);
    expect(outras.groupRows[0]).toMatchObject({ orcado: 300, realizado: 250, diferenca: -50 });
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
        atividade: 'CANA',
        grupoContabilN9: '3.4.02.02-GRUPO CANA',
        orcado: { '2026-04': 100 },
        realizado: { '2026-04': 1100 },
      }),
    ];

    const { resumoGeral } = buildDeviationExportData(accounts);
    expect(resumoGeral.map((r) => r.area)).toEqual(['Cana', 'Seringal']);
  });
});
