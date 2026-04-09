import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import type { MonthKey, AtividadeKey } from '@/types/budget';

interface Props {
  selectedMonth: MonthKey | 'all';
  atividadeFilter?: AtividadeKey;
}

export function SummaryCards({ selectedMonth, atividadeFilter }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);

  // Filtramos apenas as contas de nível 5 (folhas) para evitar somar pais e filhos
  // E aplicamos o filtro de atividade se fornecido
  const leafAccounts = accounts.filter(a => 
    a.nivel === 5 && 
    (!atividadeFilter || a.atividade === atividadeFilter)
  );

  const sumByTipo = (tipo: string, field: 'orcado' | 'realizado') => {
    const items = leafAccounts.filter((a) => a.tipo === tipo);
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

  // Resultado = Receitas - (Custos + Despesas)
  const resultadoOrc = receitaOrc - (custoOrc + despesaOrc);
  const resultadoReal = receitaReal - (custoReal + despesaReal);

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL', 
      maximumFractionDigits: 0 
    }).format(v);

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
          <Card key={c.title} className="border-slate-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-500">{c.title}</CardTitle>
              <c.icon className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-slate-900">{fmt(c.real)}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-medium text-slate-400">Orçado: {fmt(c.orc)}</span>
                <span className={cn(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded",
                  isGood ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                )}>
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

import { cn } from '@/lib/utils';