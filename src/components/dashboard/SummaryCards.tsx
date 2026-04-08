import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import type { MonthKey } from '@/types/budget';

interface Props {
  selectedMonth: MonthKey | 'all';
}

export function SummaryCards({ selectedMonth }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);

  const topLevel = accounts.filter((a) => a.nivel === 1);

  const sumByTipo = (tipo: string, field: 'orcado' | 'realizado') => {
    const items = topLevel.filter((a) => a.tipo === tipo);
    return items.reduce((sum, a) => {
      if (selectedMonth === 'all') {
        return sum + Object.values(a[field]).reduce((s: number, v: number) => s + v, 0);
      }
      return sum + (a[field][selectedMonth] || 0);
    }, 0);
  };

  const receitaOrc = sumByTipo('R', 'orcado');
  const receitaReal = sumByTipo('R', 'realizado');
  const custoOrc = sumByTipo('C', 'orcado');
  const custoReal = sumByTipo('C', 'realizado');
  const despesaOrc = sumByTipo('D', 'orcado');
  const despesaReal = sumByTipo('D', 'realizado');

  const resultadoOrc = receitaOrc - custoOrc - despesaOrc;
  const resultadoReal = receitaReal - custoReal - despesaReal;

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);

  const pct = (real: number, orc: number) =>
    orc === 0 ? 0 : ((real - orc) / Math.abs(orc)) * 100;

  const cards = [
    { title: 'Receitas', orc: receitaOrc, real: receitaReal, icon: TrendingUp, positive: true },
    { title: 'Custos', orc: custoOrc, real: custoReal, icon: DollarSign, positive: false },
    { title: 'Despesas', orc: despesaOrc, real: despesaReal, icon: TrendingDown, positive: false },
    { title: 'Resultado', orc: resultadoOrc, real: resultadoReal, icon: Target, positive: true },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => {
        const variance = pct(c.real, c.orc);
        const isGood = c.positive ? variance >= 0 : variance <= 0;
        return (
          <Card key={c.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{c.title}</CardTitle>
              <c.icon className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{fmt(c.real)}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Orçado: {fmt(c.orc)}</span>
                <span className={isGood ? 'text-primary font-medium' : 'text-destructive font-medium'}>
                  {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
