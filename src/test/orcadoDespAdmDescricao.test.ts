import { describe, it, expect, beforeEach } from 'vitest';
import { useBudgetStore, isSyntheticOrcadoImportEntry } from '@/store/budgetStore';
import {
  tryParseDespAdmOrcadoBudgetRow,
  getDespAdmGrupoContabilN9DisplayLabel,
} from '@/data/despAdmOrcadoGrupoContabilCodes';
import type { ExcelRow } from '@/types/budget';

describe('desp adm orcado cascata (grupo → descrição, sem produto)', () => {
  beforeEach(() => {
    useBudgetStore.getState().clearAllData();
  });

  it('interpreta layout GRUPO_CONTABIL / CONTA / Descrição (3.4)', () => {
    const row = {
      GRUPO_CONTABIL: '3.4.01.01-DESPESAS ADMINISTRATIVAS',
      CONTA_CONTABIL: '3.4.01.01.0001',
      'Descrição C. Contábil': 'SALARIOS E ORDENADOS',
      'ABR/26': 100,
    };
    const parsed = tryParseDespAdmOrcadoBudgetRow(row);
    expect(parsed).not.toBeNull();
    expect(parsed!.grupoN9).toBe('3.4.01.01');
    expect(parsed!.scope).toBe('descricao');
    expect(parsed!.descricaoContabil).toBe('SALARIOS E ORDENADOS');
  });

  it('rótulo N9 de exibição prioriza rótulo do cubo sobre col. A da planilha', () => {
    expect(
      getDespAdmGrupoContabilN9DisplayLabel('3.4.01.01', '3.4.01.01-DESPESAS ADMINISTRATIVAS')
    ).toBe('3.4.01.01-CUSTO DE PESSOAL');
  });

  it('rótulo N9 3.4.01.02 segue padrão do cubo (SERVICOS DE TERCEIROS)', () => {
    expect(getDespAdmGrupoContabilN9DisplayLabel('3.4.01.02', undefined)).toBe(
      '3.4.01.02-SERVICOS DE TERCEIROS'
    );
    expect(getDespAdmGrupoContabilN9DisplayLabel('3.4.01.02', '3.4.01.02')).toBe(
      '3.4.01.02-SERVICOS DE TERCEIROS'
    );
  });

  it('importa orçado adm somente da planilha (sem NOMEDEPTO)', () => {
    const rows: ExcelRow[] = [
      {
        GRUPO_CONTABIL: '3.4.01.01-DESPESAS ADMINISTRATIVAS',
        CONTA_CONTABIL: '3.4.01.01.0001',
        'Descrição C. Contábil': 'SALARIOS E ORDENADOS',
        'ABR/26': 184,
      } as ExcelRow,
    ];
    const count = useBudgetStore
      .getState()
      .importOrcadoExcelRows(rows, '2026-04', 'Pessoal.xlsx');
    expect(count).toBeGreaterThan(0);

    const leaf = useBudgetStore
      .getState()
      .accounts.find(
        (a) =>
          a.id.startsWith('SYN::ORCADOADM::') && a.descricao === 'SALARIOS E ORDENADOS'
      );
    expect(leaf).toBeDefined();
    expect(leaf!.centroCusto).toBe('Pessoal');
    expect(leaf!.orcado['2026-04']).toBe(184);
    expect(leaf!.realizado['2026-04'] || 0).toBe(0);
    expect(leaf!.nomeProduto).toBeUndefined();
    expect(isSyntheticOrcadoImportEntry(leaf!)).toBe(true);
  });
});
