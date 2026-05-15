import { describe, it, expect, beforeEach } from 'vitest';
import { useBudgetStore, isSyntheticOrcadoImportEntry } from '@/store/budgetStore';
import {
  tryParseAgricolaOrcadoBudgetRow,
  getAgricolaGrupoContabilN9DisplayLabel,
} from '@/data/agricolaOrcadoGrupoContabilCodes';
import type { ExcelRow } from '@/types/budget';

describe('agricola orcado custos cascata (grupo → descrição, sem produto)', () => {
  beforeEach(() => {
    useBudgetStore.getState().clearAllData();
  });

  it('parses layout GRUPO_CONTABIL / CONTA / Descrição', () => {
    const row = {
      GRUPO_CONTABIL: '4.1.01.11-CUSTOS RURAIS',
      CONTA_CONTABIL: '4.1.01.11.0019',
      'Descrição C. Contábil': 'HERBICIDAS E DEFENSIVOS',
      'ABR/26': 100,
    };
    const parsed = tryParseAgricolaOrcadoBudgetRow(row);
    expect(parsed).not.toBeNull();
    expect(parsed!.grupoN9).toBe('4.1.01.11');
    expect(parsed!.scope).toBe('descricao');
    expect(parsed!.descricaoContabil).toBe('HERBICIDAS E DEFENSIVOS');
  });

  it('rótulo N9 de exibição alinhado ao cubo', () => {
    expect(getAgricolaGrupoContabilN9DisplayLabel('4.1.01.11', undefined)).toBe(
      '4.1.01.11-CUSTOS RURAIS'
    );
  });

  it('importa orçado agrícola sem NOMEDEPTO (somente planilha)', () => {
    const rows: ExcelRow[] = [
      {
        GRUPO_CONTABIL: '4.1.01.02-SERVICOS DE TERCEIROS',
        CONTA_CONTABIL: '4.1.01.02.0002',
        'Descrição C. Contábil': 'SERVICOS DE TERCEIROS PJ',
        'ABR/26': 184,
      } as ExcelRow,
    ];
    const count = useBudgetStore
      .getState()
      .importOrcadoExcelRows(rows, '2026-04', 'AROEIRA - SOJA.xlsx');
    expect(count).toBeGreaterThan(0);

    const leaf = useBudgetStore
      .getState()
      .accounts.find(
        (a) =>
          a.id.startsWith('SYN::ORCADOAG::') && a.descricao === 'SERVICOS DE TERCEIROS PJ'
      );
    expect(leaf).toBeDefined();
    expect(leaf!.departamento).toBe('AROEIRA - SOJA');
    expect(leaf!.orcado['2026-04']).toBe(184);
    expect(leaf!.realizado['2026-04'] || 0).toBe(0);
    expect(leaf!.nomeProduto).toBeUndefined();
    expect(isSyntheticOrcadoImportEntry(leaf!)).toBe(true);
  });
});
