import { describe, expect, it } from 'vitest';
import { budgetDifference, receitaBudgetDifference } from '@/lib/budgetVariation';

describe('receitaBudgetDifference', () => {
  it('calcula realizado − orçado nos módulos exibidos', () => {
    expect(receitaBudgetDifference(3_977_508, 1_090_302)).toBe(2_887_206);
  });

  it('corrige sinais opostos (orçado positivo, realizado negativo na base)', () => {
    expect(budgetDifference(-3_977_508, 1_090_302)).toBe(-5_067_810);
    expect(receitaBudgetDifference(-3_977_508, 1_090_302)).toBe(2_887_206);
  });

  it('mantém resultado quando ambos são créditos negativos', () => {
    expect(receitaBudgetDifference(-3_977_508, -1_090_302)).toBe(2_887_206);
  });
});
