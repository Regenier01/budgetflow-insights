import { describe, expect, it } from 'vitest';
import {
  getRateioDepartmentsForSubview,
  isExcludedFromRateios,
  isPlanagriColigada,
  isRateioDepartmentForEntry,
  isRateioDepartmentForSubview,
  matchesRateioColigadaSubview,
} from '@/data/rateiosColigadas';

describe('rateiosColigadas', () => {
  it('exclui PLANAGRI dos rateios', () => {
    expect(isPlanagriColigada('2-PLANAGRI S.A.')).toBe(true);
    expect(isExcludedFromRateios({ coligada: '2-PLANAGRI S.A.' })).toBe(true);
  });

  it('agrupa Vera Cruz sozinha', () => {
    const entry = { coligada: '1-VERA CRUZ AGROPECUARIA LTDA' };
    expect(matchesRateioColigadaSubview(entry, 'vera-cruz')).toBe(true);
    expect(matchesRateioColigadaSubview(entry, 'ol-latex')).toBe(false);
  });

  it('agrupa OL Latex 18 e 34 juntas', () => {
    expect(
      matchesRateioColigadaSubview({ coligada: '18-OL LATEX LTDA' }, 'ol-latex')
    ).toBe(true);
    expect(
      matchesRateioColigadaSubview({ coligada: '34-OL LATEX TOCANTINS LTDA' }, 'ol-latex')
    ).toBe(true);
    expect(
      matchesRateioColigadaSubview({ coligada: '34-OL LATEX TOCANTINS LTDA' }, 'vera-cruz')
    ).toBe(false);
  });

  it('exclui Fábrica de Ração, Fábrica de Sal e Logística dos rateios OL Latex', () => {
    const olLatexDepts = getRateioDepartmentsForSubview('ol-latex');
    expect(olLatexDepts).toEqual(['OFICINA GERAL', 'MECANIZADO', 'ALMOXARIFADO']);

    const veraCruzDepts = getRateioDepartmentsForSubview('vera-cruz');
    expect(veraCruzDepts).toContain('FABRICA DE RACAO');
    expect(veraCruzDepts).toContain('FABRICA DE SAL');
    expect(veraCruzDepts).toContain('LOGISTICA');

    expect(
      isRateioDepartmentForSubview('LOGISTICA', 'ol-latex')
    ).toBe(false);
    expect(
      isRateioDepartmentForEntry({
        coligada: '18-OL LATEX LTDA',
        departamento: 'FABRICA DE RACAO',
      })
    ).toBe(false);
    expect(
      isRateioDepartmentForEntry({
        coligada: '1-VERA CRUZ AGROPECUARIA LTDA',
        departamento: 'FABRICA DE RACAO',
      })
    ).toBe(true);
  });
});
