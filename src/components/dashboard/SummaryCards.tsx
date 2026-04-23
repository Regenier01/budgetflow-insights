import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { MonthKey, AtividadeKey, AccountEntry } from '@/types/budget';

interface Props {
  selectedMonth: MonthKey | 'all';
  atividadeFilter?: AtividadeKey;
  costCenterFilter?: string;
  departmentFilter?: string;
  tipoFilter?: string[];
  entryFilter?: (entry: AccountEntry) => boolean;
}

export function SummaryCards({
  selectedMonth,
  atividadeFilter,
  costCenterFilter,
  departmentFilter,
  tipoFilter,
  entryFilter,
}: Props) {
  const accounts = useBudgetStore((s) => s.accounts);

  const sumEntries = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
    entries.reduce((sum, entry) => {
      if (selectedMonth === 'all') {
        return sum + Object.values(entry[field]).reduce((acc: number, value: number) => acc + value, 0);
      }
      return sum + (entry[field][selectedMonth] || 0);
    }, 0);

  const leafAccounts = accounts.filter(a => 
    a.nivel === 5 && 
    (!atividadeFilter || a.atividade === atividadeFilter) &&
    (!costCenterFilter || a.centroCusto === costCenterFilter) &&
    (!departmentFilter || a.departamento === departmentFilter) &&
    (!entryFilter || entryFilter(a))
  );

  const sumByTipo = (tipo: string, field: 'orcado' | 'realizado') => {
    const items = leafAccounts.filter((a) => a.tipo === tipo);
    return sumEntries(items, field);
  };

  const receitaOrc = sumByTipo('R', 'orcado');
  const receitaReal = sumByTipo('R', 'realizado');
  const custoOrc = sumByTipo('C', 'orcado');
  const custoReal = sumByTipo('C', 'realizado');
  const despesaOrc = sumByTipo('D', 'orcado');
  const despesaReal = sumByTipo('D', 'realizado');

  const resultadoOrc = receitaOrc - (custoOrc + despesaOrc);
  const resultadoReal = receitaReal - (custoReal + despesaReal);
  const scopedAccounts = tipoFilter
    ? leafAccounts.filter((a) => tipoFilter.includes(a.tipo))
    : leafAccounts;
  const totalOrc = sumEntries(scopedAccounts, 'orcado');
  const totalReal = sumEntries(scopedAccounts, 'realizado');

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL', 
      maximumFractionDigits: 0 
    }).format(v);

  const allCards = [
    { title: 'Receitas', orc: receitaOrc, real: receitaReal, icon: TrendingUp, color: 'emerald', tipo: 'R' },
    { title: 'Custos', orc: custoOrc, real: custoReal, icon: DollarSign, color: 'orange', tipo: 'C' },
    { title: 'Despesas', orc: despesaOrc, real: despesaReal, icon: TrendingDown, color: 'red', tipo: 'D' },
    { title: 'Resultado', orc: resultadoOrc, real: resultadoReal, icon: Target, color: 'primary', tipo: 'RESULTADO' },
  ];

  const scopedCards = [
    { title: 'Receitas', orc: receitaOrc, real: receitaReal, icon: TrendingUp, color: 'emerald', tipo: 'R' },
    { title: 'Custos', orc: custoOrc, real: custoReal, icon: DollarSign, color: 'orange', tipo: 'C' },
    { title: 'Despesas', orc: despesaOrc, real: despesaReal, icon: TrendingDown, color: 'red', tipo: 'D' },
    { title: 'Total da Abertura', orc: totalOrc, real: totalReal, icon: Target, color: 'primary', tipo: 'TOTAL' },
  ];

  const cards = tipoFilter
    ? scopedCards.filter((c) => tipoFilter.includes(c.tipo) || c.tipo === 'TOTAL')
    : allCards;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => {
        const isPositive = c.orc - c.real > 0;
        const diffPct = c.orc === 0 ? 0 : ((c.orc - c.real) / Math.abs(c.orc)) * 100;

        return (
          <Card key={c.title} className="overflow-hidden border border-slate-200 shadow-sm bg-white group">
            <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0 bg-orange-500 text-white">
              <CardTitle className="text-[13px] font-semibold">
                {c.title}
              </CardTitle>
              <div className={cn(
                "p-2 rounded-lg bg-white/90",
                c.color === 'emerald' ? "text-emerald-600" :
                c.color === 'orange' ? "text-orange-500" :
                c.color === 'red' ? "text-red-500" : "text-primary"
              )}>
                <c.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent className="bg-slate-100/70 border-t border-slate-200 py-4">
              <div className="text-[13px] font-semibold text-slate-700 mb-1">Realizado</div>
              <div className="text-[13px] font-semibold text-slate-800 tabular-nums">{fmt(c.real)}</div>
              <div className="flex items-center gap-2 mt-3">
                <div className={cn(
                  "flex items-center gap-0.5 text-[13px] font-semibold px-2 py-0.5 rounded-full",
                  isPositive ? "bg-emerald-50/80 text-emerald-600" : "bg-rose-50/80 text-rose-600"
                )}>
                  {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {Math.abs(diffPct).toFixed(1)}%
                </div>
                <span className="text-[13px] font-medium text-slate-600">vs Orçado</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}