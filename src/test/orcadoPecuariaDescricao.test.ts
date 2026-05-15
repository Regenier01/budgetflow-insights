import { describe, it, expect, beforeEach } from 'vitest';
import { useBudgetStore, isSyntheticOrcadoImportEntry } from '@/store/budgetStore';
import {
  tryParsePecuariaOrcadoBudgetRow,
  extractGrupoN9FromPecuariaOrcadoLabel,
  resolvePecuariaOrcadoGrupoContabilN9,
  getPecuariaGrupoContabilN9DisplayLabel,
  resolvePecuariaOrcadoGrupoDescricao,
} from '@/data/pecuariaOrcadoGrupoContabilCodes';
import type { ExcelRow } from '@/types/budget';

describe('pecuaria orcado granular layout (col. A–C + meses)', () => {
  beforeEach(() => {
    useBudgetStore.getState().clearAllData();
  });

  it('rótulo N9 de exibição iguala ao cubo (código + nome do grupo)', () => {
    expect(getPecuariaGrupoContabilN9DisplayLabel('4.1.01.11', undefined)).toBe('4.1.01.11-CUSTOS RURAIS');
    expect(getPecuariaGrupoContabilN9DisplayLabel('4.2.01.02', undefined)).toBe('4.2.01.02-RATEIO DE CUSTOS');
    expect(getPecuariaGrupoContabilN9DisplayLabel('4.1.01.07', undefined)).toBe('4.1.01.07-UTILIDADES E SERVICOS');
    expect(getPecuariaGrupoContabilN9DisplayLabel('4.1.01.03', undefined)).toBe('4.1.01.03-LOCACOES');
  });

  it('parses colunas sem cabeçalho (__EMPTY*)', () => {
    const row = {
      __EMPTY: 2,
      __EMPTY_1: '4.1.01.11.0001',
      __EMPTY_2: 'ALIMENTACAO ANIMAL',
      'ABR/26': 1234,
    };
    const parsed = tryParsePecuariaOrcadoBudgetRow(row);
    expect(parsed).not.toBeNull();
    expect(parsed!.grupoN9).toBe('4.1.01.11');
    expect(parsed!.contaContabil).toBe('4.1.01.11.0001');
    expect(parsed!.descricaoContabil).toBe('ALIMENTACAO ANIMAL');
    expect(parsed!.grupoContabilLabel).toContain('CUSTOS RURAIS');
    expect(parsed!.scope).toBe('descricao');
  });

  it('linha sem conta contábil consolida no grupo', () => {
    const row = {
      __EMPTY: 1,
      __EMPTY_1: '',
      __EMPTY_2: 'CUSTO DE PESSOAL',
      'ABR/26': 500,
    };
    const parsed = tryParsePecuariaOrcadoBudgetRow(row);
    expect(parsed).not.toBeNull();
    expect(parsed!.scope).toBe('grupo');
    expect(parsed!.contaContabil).toBe('');
    expect(parsed!.descricaoContabil).toBe('CUSTO DE PESSOAL');
  });

  it('descrição de grupo usa col. C ou rótulo da col. A', () => {
    expect(
      resolvePecuariaOrcadoGrupoDescricao('4.1.01.01-CUSTO DE PESSOAL', 'SALÁRIOS')
    ).toBe('SALÁRIOS');
    expect(resolvePecuariaOrcadoGrupoDescricao('4.1.01.01-CUSTO DE PESSOAL', '')).toBe(
      'CUSTO DE PESSOAL'
    );
  });

  it('resolve código 1–9 e extrai N9', () => {
    expect(resolvePecuariaOrcadoGrupoContabilN9(8)).toContain('4.1.01.06');
    expect(extractGrupoN9FromPecuariaOrcadoLabel(resolvePecuariaOrcadoGrupoContabilN9(8))).toBe('4.1.01.06');
    expect(resolvePecuariaOrcadoGrupoContabilN9(9)).toBe('4.1.01.03-LOCACOES');
    expect(extractGrupoN9FromPecuariaOrcadoLabel(resolvePecuariaOrcadoGrupoContabilN9(9))).toBe('4.1.01.03');
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

    const leaf = useBudgetStore
      .getState()
      .accounts.find((a) => a.id.startsWith('SYN::ORCADOPEC::') && a.descricao === 'ALIMENTACAO ANIMAL');
    expect(leaf).toBeDefined();
    expect(leaf!.departamento).toContain('BANDEIRANTES');
    expect(leaf!.orcado['2026-04']).toBe(7777);
    expect(leaf!.nomeProduto).toBeUndefined();
    expect(isSyntheticOrcadoImportEntry(leaf!)).toBe(true);
  });

  it('importa valor só no grupo quando conta está vazia', () => {
    const rows: ExcelRow[] = [
      {
        __EMPTY: 1,
        __EMPTY_1: '',
        __EMPTY_2: 'CUSTO DE PESSOAL',
        'ABR/26': 999,
      } as ExcelRow,
    ];
    const count = useBudgetStore
      .getState()
      .importOrcadoExcelRows(rows, '2026-04', 'BANDEIRANTES - PECUÁRIA.xlsx');
    expect(count).toBeGreaterThan(0);

    const leaf = useBudgetStore
      .getState()
      .accounts.find(
        (a) =>
          a.id.startsWith('SYN::ORCADO::PECUARIA::') &&
          a.descricao === 'CUSTO DE PESSOAL'
      );
    expect(leaf).toBeDefined();
    expect(leaf!.orcado['2026-04']).toBe(999);
    expect(isSyntheticOrcadoImportEntry(leaf!)).toBe(true);
  });
});
