import { describe, it, expect, beforeEach } from 'vitest';
import { useBudgetStore } from '@/store/budgetStore';
import { ORCADO_RECEITA_PECUARIA_IMPORT_BATCHES } from '@/data/orcadoReceitaPecuariaImportData';
import {
  receitaPecuariaOrcadoScopeKey,
  tryParseReceitaPecuariaOrcadoBudgetRow,
  isReceitaPecuariaOrcadoWorkbook,
} from '@/data/receitaPecuariaOrcado';
import type { ExcelRow } from '@/types/budget';

const findReceitaOrcadoLeaf = (
  departamento: string,
  opts: { month?: string; descricao?: string; conta?: string } = {}
) => {
  const scope = receitaPecuariaOrcadoScopeKey(departamento);
  const month = opts.month ?? '2026-04';
  return useBudgetStore.getState().accounts.find(
    (account) =>
      account.atividade === 'PECUARIA' &&
      account.grupoContabilN9?.startsWith('3.1.01') &&
      receitaPecuariaOrcadoScopeKey(account.departamento || account.centroCusto || '') === scope &&
      account.orcado[month] !== undefined &&
      (opts.descricao == null || account.descricao?.includes(opts.descricao)) &&
      (opts.conta == null || account.codigo === opts.conta)
  );
};

describe('receita pecuária orçado (GRUPO_CONTABIL → CONTA → Descrição)', () => {
  beforeEach(() => {
    useBudgetStore.getState().clearAllData();
  });

  it('interpreta layout de 3 colunas com prefixo 3.1.01', () => {
    const row = {
      GRUPO_CONTABIL: '3.1.01.01-RECEITAS',
      CONTA_CONTABIL: '3.1.01.01.0001',
      'Descrição C. Contábil': 'VENDA DE GADO',
    };
    const parsed = tryParseReceitaPecuariaOrcadoBudgetRow(row);
    expect(parsed).not.toBeNull();
    expect(parsed!.scope).toBe('descricao');
    expect(parsed!.grupoN9).toBe('3.1.01.01');
    expect(parsed!.contaContabil).toBe('3.1.01.01.0001');
    expect(parsed!.descricaoContabil).toBe('VENDA DE GADO');
    expect(isReceitaPecuariaOrcadoWorkbook([row as ExcelRow])).toBe(true);
  });

  it('reimportar a mesma planilha substitui o valor (não soma)', () => {
    const rows: ExcelRow[] = [
      {
        GRUPO_CONTABIL: '3.1.01.01-RECEITAS',
        CONTA_CONTABIL: '3.1.01.01.0001',
        'Descrição C. Contábil': 'VENDA DE GADO',
        'ABR/26': 1000,
      } as ExcelRow,
    ];

    useBudgetStore.getState().importOrcadoExcelRows(rows, '2026-04', 'BANDEIRANTES - PECUARIA.xlsx');
    const afterFirst = findReceitaOrcadoLeaf('BANDEIRANTES - PECUARIA', {
      conta: '3.1.01.01.0001',
      descricao: 'VENDA',
    });
    expect(afterFirst?.orcado['2026-04']).toBe(1000);

    useBudgetStore.getState().importOrcadoExcelRows(rows, '2026-04', 'BANDEIRANTES - PECUARIA.xlsx');
    const afterSecond = findReceitaOrcadoLeaf('BANDEIRANTES - PECUARIA', {
      conta: '3.1.01.01.0001',
      descricao: 'VENDA',
    });
    expect(afterSecond?.orcado['2026-04']).toBe(1000);
  });

  it('upload substitui lote embutido do mesmo departamento', () => {
    const bakedIn = ORCADO_RECEITA_PECUARIA_IMPORT_BATCHES.find(
      (batch) => batch.fileName === 'CENTRO COMERCIAL DE TOUROS.xlsx'
    );
    expect(bakedIn).toBeDefined();

    const bakedInMonth = bakedIn!.rows.find((row) => row.value > 0)?.month || '2026-04';
    const bakedInRow = bakedIn!.rows.find((row) => row.month === bakedInMonth && row.value > 0);
    const bakedInValue = bakedInRow?.value ?? 0;

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

    const monthHeader = bakedInMonth === '2026-04' ? 'ABR/26' : 'MAI/26';
    const rows: ExcelRow[] = [
      {
        GRUPO_CONTABIL: bakedInRow?.grupoContabil ?? '3.1.01.01-RECEITAS',
        CONTA_CONTABIL: bakedInRow?.contaContabil ?? '3.1.01.01.0099',
        'Descrição C. Contábil': bakedInRow?.descricaoContabil ?? 'TESTE ORCADO',
        [monthHeader]: 4242,
      } as ExcelRow,
    ];

    useBudgetStore
      .getState()
      .importOrcadoExcelRows(rows, bakedInMonth, 'CENTRO COMERCIAL DE TOUROS.xlsx');

    const batches = useBudgetStore.getState().importedOrcadoBatches;
    const receitaBatches = batches.filter(
      (batch) =>
        batch.atividade === 'PECUARIA' &&
        batch.rows.every((row) => String(row.grupoContabil).startsWith('3.1.01'))
    );
    expect(receitaBatches).toHaveLength(1);

    const leaf = findReceitaOrcadoLeaf('CENTRO COMERCIAL DE TOUROS', {
      month: bakedInMonth,
      conta: bakedInRow?.contaContabil ?? '3.1.01.01.0099',
    });
    expect(leaf?.orcado[bakedInMonth]).toBe(4242);
    expect(leaf?.orcado[bakedInMonth]).not.toBe(bakedInValue * 2);
  });
});
