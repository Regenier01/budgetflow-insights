import { describe, it, expect, beforeEach } from 'vitest';
import { useBudgetStore } from '@/store/budgetStore';
import { tryParseDespAdmOrcadoBudgetRow } from '@/data/despAdmOrcadoGrupoContabilCodes';

describe('RATEIO DESENVOLVIMENTO HUMANO linha 11 — Plano de Saúde em Custo de Pessoal', () => {
  beforeEach(() => {
    useBudgetStore.getState().clearAllData();
  });

  it('mantém grupo N9 da coluna A quando a conta pertence a outro prefixo', () => {
    const row = {
      GRUPO_CONTABIL: '3.4.01.01-CUSTO DE PESSOAL',
      CONTA_CONTABIL: '3.4.02.01.0010',
      'Descrição C. Contábil': 'Plano de Saúde',
      'ABR/26': 1251.113,
    };
    const parsed = tryParseDespAdmOrcadoBudgetRow(row);
    expect(parsed).not.toBeNull();
    expect(parsed!.grupoN9).toBe('3.4.01.01');
    expect(parsed!.scope).toBe('descricao');
    expect(parsed!.descricaoContabil).toBe('Plano de Saúde');
  });

  it('importa Plano de Saúde no grupo 3.4.01.01 para RATEIO DESENVOLVIMENTO HUMANO', () => {
    const rows = [
      {
        GRUPO_CONTABIL: '3.4.01.01-CUSTO DE PESSOAL',
        CONTA_CONTABIL: '3.4.02.01.0010',
        'Descrição C. Contábil': 'Plano de Saúde',
        'ABR/26': 1251.113,
      },
    ];
    useBudgetStore
      .getState()
      .importOrcadoExcelRows(rows, '2026-04', 'RATEIO DESENVOLVIMENTO HUMANO.xlsx');

    const leaf = useBudgetStore.getState().accounts.find(
      (a) =>
        a.id.startsWith('SYN::ORCADOADM::') &&
        a.centroCusto === 'RATEIO DESENVOLVIMENTO HUMANO' &&
        a.descricao === 'Plano de Saúde'
    );
    expect(leaf).toBeDefined();
    expect(leaf!.grupoContabilN9).toContain('3.4.01.01');
    expect(leaf!.orcado['2026-04']).toBeCloseTo(1251.113, 2);
  });
});
