import { describe, it, expect, beforeEach } from 'vitest';
import { useBudgetStore } from '@/store/budgetStore';
import { ORCADO_RECEITA_PECUARIA_IMPORT_BATCHES } from '@/data/orcadoReceitaPecuariaImportData';
import { receitaPecuariaOrcadoScopeKey } from '@/data/receitaPecuariaOrcado';
import type { ExcelRow } from '@/types/budget';

const findReceitaOrcadoForDept = (departamento: string, month = '2026-04') => {
  const scope = receitaPecuariaOrcadoScopeKey(departamento);
  return useBudgetStore.getState().accounts.find(
    (account) =>
      account.atividade === 'PECUARIA' &&
      account.grupoContabilN9?.startsWith('3.1.01') &&
      receitaPecuariaOrcadoScopeKey(account.departamento || account.centroCusto || '') === scope &&
      account.orcado[month] !== undefined
  );
};

describe('receita pecuária orçado', () => {
  beforeEach(() => {
    useBudgetStore.getState().clearAllData();
  });

  it('reimportar a mesma planilha substitui o valor (não soma)', () => {
    const rows: ExcelRow[] = [
      {
        __EMPTY: '3.1.01.01 - RECEITAS',
        'ABR/26': 1000,
      } as ExcelRow,
    ];

    useBudgetStore.getState().importOrcadoExcelRows(rows, '2026-04', 'BANDEIRANTES - PECUARIA.xlsx');
    const afterFirst = findReceitaOrcadoForDept('BANDEIRANTES - PECUARIA');
    expect(afterFirst?.orcado['2026-04']).toBe(1000);

    useBudgetStore.getState().importOrcadoExcelRows(rows, '2026-04', 'BANDEIRANTES - PECUARIA.xlsx');
    const afterSecond = findReceitaOrcadoForDept('BANDEIRANTES - PECUARIA');
    expect(afterSecond?.orcado['2026-04']).toBe(1000);
  });

  it('upload substitui lote embutido do mesmo departamento', () => {
    const bakedIn = ORCADO_RECEITA_PECUARIA_IMPORT_BATCHES.find(
      (batch) => batch.fileName === 'CENTRO COMERCIAL DE TOUROS.xlsx'
    );
    expect(bakedIn).toBeDefined();

    const bakedInMonth = bakedIn!.rows.find((row) => row.value > 0)?.month || '2026-04';
    const bakedInValue = bakedIn!.rows.find((row) => row.month === bakedInMonth)?.value ?? 0;

    useBudgetStore.setState({
      importedOrcadoBatches: [
        {
          key: 'seed',
          fileName: bakedIn!.fileName,
          departamento: bakedIn!.departamento,
          atividade: bakedIn!.atividade,
          period: bakedInMonth,
          rows: bakedIn!.rows,
          importedAt: new Date(0).toISOString(),
        },
      ],
    });
    useBudgetStore.setState({
      accounts: useBudgetStore.getState().accounts,
    });

    const rows: ExcelRow[] = [
      {
        __EMPTY: '3.1.01.01 - RECEITAS',
        [bakedInMonth === '2026-04' ? 'ABR/26' : 'MAI/26']: 4242,
      } as ExcelRow,
    ];

    useBudgetStore
      .getState()
      .importOrcadoExcelRows(rows, bakedInMonth, 'CENTRO COMERCIAL DE TOUROS.xlsx');

    const batches = useBudgetStore.getState().importedOrcadoBatches;
    const receitaBatches = batches.filter(
      (batch) =>
        batch.atividade === 'PECUARIA' &&
        batch.rows.every((row) => row.grupoContabil.startsWith('3.1.01'))
    );
    expect(receitaBatches).toHaveLength(1);

    const leaf = findReceitaOrcadoForDept('CENTRO COMERCIAL DE TOUROS', bakedInMonth);
    expect(leaf?.orcado[bakedInMonth]).toBe(4242);
    expect(leaf?.orcado[bakedInMonth]).not.toBe(bakedInValue * 2);
  });
});
