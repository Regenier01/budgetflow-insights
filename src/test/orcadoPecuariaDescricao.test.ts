import { describe, it, expect, beforeEach } from 'vitest';
import { useBudgetStore } from '@/store/budgetStore';
import {
  tryParsePecuariaOrcadoGranularRow,
  extractGrupoN9FromPecuariaOrcadoLabel,
  resolvePecuariaOrcadoGrupoContabilN9,
} from '@/data/pecuariaOrcadoGrupoContabilCodes';
import type { ExcelRow } from '@/types/budget';

describe('pecuaria orcado granular layout (col. A–C + meses)', () => {
  beforeEach(() => {
    useBudgetStore.getState().clearAllData();
  });

  it('parses colunas sem cabeçalho (__EMPTY*)', () => {
    const row = {
      __EMPTY: 2,
      __EMPTY_1: '4.1.01.11.0001',
      __EMPTY_2: 'ALIMENTACAO ANIMAL',
      'ABR/26': 1234,
    };
    const parsed = tryParsePecuariaOrcadoGranularRow(row);
    expect(parsed).not.toBeNull();
    expect(parsed!.grupoN9).toBe('4.1.01.11');
    expect(parsed!.contaContabil).toBe('4.1.01.11.0001');
    expect(parsed!.descricaoContabil).toBe('ALIMENTACAO ANIMAL');
    expect(parsed!.grupoContabilLabel).toContain('CUSTOS RURAIS');
  });

  it('resolve código 1–8 e extrai N9', () => {
    expect(resolvePecuariaOrcadoGrupoContabilN9(8)).toContain('4.1.01.06');
    expect(extractGrupoN9FromPecuariaOrcadoLabel(resolvePecuariaOrcadoGrupoContabilN9(8))).toBe('4.1.01.06');
  });

  it('importa orçado granular sem NOMEDEPTO quando o arquivo é pecuária', () => {
    const rows: ExcelRow[] = [
      {
        __EMPTY: 2,
        __EMPTY_1: '4.1.01.11.0001',
        __EMPTY_2: 'ALIMENTACAO ANIMAL',
        'ABR/26': 7777,
      } as ExcelRow,
    ];
    const count = useBudgetStore
      .getState()
      .importOrcadoExcelRows(rows, '2026-04', 'BANDEIRANTES - PECUÁRIA.xlsx');
    expect(count).toBeGreaterThan(0);

    const syn = useBudgetStore
      .getState()
      .accounts.find((a) => a.id.startsWith('SYN::ORCADO::PEC::') && a.codigo === '4.1.01.11.0001');
    expect(syn).toBeDefined();
    expect(syn!.departamento).toContain('BANDEIRANTES');
    expect(syn!.orcado['2026-04']).toBe(7777);
    expect(syn!.nomeProduto).toBeUndefined();
  });
});
