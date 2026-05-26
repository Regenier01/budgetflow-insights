/** Variação / diferença = realizado − orçado (sempre). */
export function budgetDifference(real: number, orc: number): number {
  return real - orc;
}

export type BudgetVariationKind = 'revenue' | 'cost' | 'result';

/** Receita/resultado: positivo = favorável (verde). Custo/despesa: positivo = desfavorável (vermelho). */
export function isBudgetDifferenceFavorable(
  diff: number,
  kind: BudgetVariationKind
): boolean {
  return kind === 'cost' ? diff <= 0 : diff >= 0;
}

export function budgetDifferencePctVsOrc(diff: number, orc: number): number | null {
  if (Math.abs(orc) < 1e-9) return null;
  return (diff / Math.abs(orc)) * 100;
}
