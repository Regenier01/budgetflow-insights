import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import {
  budgetDifference,
  budgetDifferencePctVsOrc,
  isBudgetDifferenceFavorable,
  type BudgetVariationKind,
} from '@/lib/budgetVariation';
import type { MonthKey, AtividadeKey, AccountEntry } from '@/types/budget';

interface Props {
  selectedMonth: MonthKey[] | 'all';
  atividadeFilter?: AtividadeKey;
  costCenterFilter?: string[];
  departmentFilter?: string[];
  tipoFilter?: string[];
  entryFilter?: (entry: AccountEntry) => boolean;
  fieldFilter?: (entry: AccountEntry, field: 'orcado' | 'realizado') => boolean;
  /** Quando informado (ex.: visão receitas na atividade), o card de receitas e o total refletem receita líquida (R + deduções), alinhado ao consolidado e à caixa "Receita líquida". */
  receitaLiquidaOverride?: { orc: number; real: number };
  /** Exibe todos os totais como zero (planejamento sem dados importados). */
  forceZeroValues?: boolean;
}

export function SummaryCards({
  selectedMonth,
  atividadeFilter,
  costCenterFilter,
  departmentFilter,
  tipoFilter,
  entryFilter,
  fieldFilter,
  receitaLiquidaOverride,
  forceZeroValues = false,
}: Props) {
  const accounts = useBudgetStore((s) => s.accounts);

  const isAllMonths = selectedMonth === 'all' || selectedMonth.length === 0;
  const monthList = isAllMonths ? [] : (selectedMonth as MonthKey[]);

  const sumEntries = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
    entries.reduce((sum, entry) => {
      if (fieldFilter && !fieldFilter(entry, field)) return sum;
      if (isAllMonths) {
        return sum + Object.values(entry[field]).reduce((acc: number, value: number) => acc + value, 0);
      }
      return sum + monthList.reduce((acc, m) => acc + (entry[field][m] || 0), 0);
    }, 0);

  const leafAccounts = accounts.filter(a =>
    a.nivel === 5 &&
    (!atividadeFilter || a.atividade === atividadeFilter) &&
    (!costCenterFilter ||
      costCenterFilter.length === 0 ||
      (a.centroCusto !== undefined && costCenterFilter.includes(a.centroCusto))) &&
    (!departmentFilter ||
      departmentFilter.length === 0 ||
      (a.departamento !== undefined && departmentFilter.includes(a.departamento))) &&
    (!entryFilter || entryFilter(a))
  );

  const sumByTipo = (tipo: string, field: 'orcado' | 'realizado') => {
    const items = leafAccounts.filter((a) => a.tipo === tipo);
    return sumEntries(items, field);
  };

  const receitaBrutaOrc = sumByTipo('R', 'orcado');
  const receitaBrutaReal = sumByTipo('R', 'realizado');
  const useLiquidaCard =
    receitaLiquidaOverride &&
    tipoFilter?.length === 1 &&
    tipoFilter[0] === 'R';
  const receitaOrc = useLiquidaCard ? receitaLiquidaOverride.orc : receitaBrutaOrc;
  const receitaReal = useLiquidaCard ? receitaLiquidaOverride.real : receitaBrutaReal;
  const custoOrc = sumByTipo('C', 'orcado');
  const custoReal = sumByTipo('C', 'realizado');
  const despesaOrc = sumByTipo('D', 'orcado');
  const despesaReal = sumByTipo('D', 'realizado');

  const resultadoOrc = receitaOrc - (custoOrc + despesaOrc);
  const resultadoReal = receitaReal - (custoReal + despesaReal);
  const scopedAccounts = tipoFilter
    ? leafAccounts.filter((a) => tipoFilter.includes(a.tipo))
    : leafAccounts;
  const totalOrc = useLiquidaCard
    ? receitaLiquidaOverride.orc
    : sumEntries(scopedAccounts, 'orcado');
  const totalReal = useLiquidaCard
    ? receitaLiquidaOverride.real
    : sumEntries(scopedAccounts, 'realizado');

  const displayReceitaOrc = forceZeroValues ? 0 : receitaOrc;
  const displayReceitaReal = forceZeroValues ? 0 : receitaReal;
  const displayCustoOrc = forceZeroValues ? 0 : custoOrc;
  const displayCustoReal = forceZeroValues ? 0 : custoReal;
  const displayDespesaOrc = forceZeroValues ? 0 : despesaOrc;
  const displayDespesaReal = forceZeroValues ? 0 : despesaReal;
  const displayResultadoOrc = forceZeroValues ? 0 : resultadoOrc;
  const displayResultadoReal = forceZeroValues ? 0 : resultadoReal;
  const displayTotalOrc = forceZeroValues ? 0 : totalOrc;
  const displayTotalReal = forceZeroValues ? 0 : totalReal;

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL', 
      maximumFractionDigits: 0 
    }).format(v);

  const receitaCardTitle = useLiquidaCard ? 'Receita líquida' : 'Receitas';

  const allCards = [
    { title: receitaCardTitle, orc: displayReceitaOrc, real: displayReceitaReal, icon: TrendingUp, color: 'emerald', tipo: 'R' },
    { title: 'Custos', orc: displayCustoOrc, real: displayCustoReal, icon: DollarSign, color: 'orange', tipo: 'C' },
    { title: 'Despesas', orc: displayDespesaOrc, real: displayDespesaReal, icon: TrendingDown, color: 'orange', tipo: 'D' },
    { title: 'Resultado', orc: displayResultadoOrc, real: displayResultadoReal, icon: Target, color: 'primary', tipo: 'RESULTADO' },
  ];

  const scopedCards = [
    { title: receitaCardTitle, orc: displayReceitaOrc, real: displayReceitaReal, icon: TrendingUp, color: 'emerald', tipo: 'R' },
    { title: 'Custos', orc: displayCustoOrc, real: displayCustoReal, icon: DollarSign, color: 'orange', tipo: 'C' },
    { title: 'Despesas', orc: displayDespesaOrc, real: displayDespesaReal, icon: TrendingDown, color: 'orange', tipo: 'D' },
    { title: 'Total da Abertura', orc: displayTotalOrc, real: displayTotalReal, icon: Target, color: 'primary', tipo: 'TOTAL' },
  ];

  const cards = tipoFilter
    ? scopedCards.filter((c) => tipoFilter.includes(c.tipo) || c.tipo === 'TOTAL')
    : allCards;

  const totalColor = tipoFilter?.includes('R')
    ? 'emerald'
    : tipoFilter?.some((tipo) => tipo === 'C' || tipo === 'D')
      ? 'orange'
      : 'primary';

  const resolveCardColor = (color: string, tipo: string) =>
    tipo === 'TOTAL' ? totalColor : color;

  const resolveHeaderClass = (color: string) =>
    color === 'emerald'
      ? 'bg-dashboard-green text-white'
      : color === 'orange'
        ? 'bg-dashboard-orange text-white'
        : 'bg-dashboard-green text-white';

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => {
        const cardColor = resolveCardColor(c.color, c.tipo);
        const diff = budgetDifference(c.real, c.orc);
        const variationKind: BudgetVariationKind =
          c.tipo === 'R' ? 'revenue' : c.tipo === 'RESULTADO' ? 'result' : 'cost';
        const isFavorable = isBudgetDifferenceFavorable(diff, variationKind);
        const diffPct = budgetDifferencePctVsOrc(diff, c.orc) ?? 0;

        return (
          <Card key={c.title} className="overflow-hidden border border-slate-200 shadow-sm bg-white group">
            <CardHeader className={cn(
              "flex flex-row items-center justify-between pb-3 space-y-0",
              resolveHeaderClass(cardColor)
            )}>
              <CardTitle className="text-[13px] font-semibold">
                {c.title}
              </CardTitle>
              <div className={cn(
                "p-2 rounded-lg bg-white/90",
                cardColor === 'emerald' ? "text-dashboard-green" :
                cardColor === 'orange' ? "text-dashboard-orange" : "text-dashboard-green"
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
                  isFavorable ? "bg-dashboard-green/15 text-dashboard-green" : "bg-rose-50/80 text-rose-600"
                )}>
                  {isFavorable ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
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