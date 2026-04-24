import { RevenueSummary } from '@/components/dashboard/RevenueSummary';
import { GlobalSummary } from '@/components/dashboard/GlobalSummary';
import { RateiosSummary } from '@/components/dashboard/RateiosSummary';
import { DollarSign, Split } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MONTHS, type MonthKey } from '@/types/budget';
import { useBudgetStore } from '@/store/budgetStore';
import { useMemo, useState } from 'react';

export default function Dashboard() {
  const accounts = useBudgetStore((s) => s.accounts);
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');

  const availableMonths = useMemo(() => {
    const monthSet = new Set<string>();
    accounts.forEach((account) => {
      Object.keys(account.orcado).forEach((k) => monthSet.add(k));
      Object.keys(account.realizado).forEach((k) => monthSet.add(k));
    });

    return MONTHS.filter((month) => monthSet.has(month.key));
  }, [accounts]);

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-5xl font-black tracking-tight uppercase">
            <span className="text-primary">Orçado X</span>{' '}
            <span className="text-orange-500">Realizado</span>
          </h1>
          <p className="text-slate-400 font-semibold text-lg leading-relaxed">
            Safra 26/27
          </p>
        </div>
        <div className="sticky top-20 z-40 -mx-2 rounded-xl bg-[#fdfcfb]/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-[#fdfcfb]/80">
          <div className="w-full sm:w-[280px]">
            <Select value={selectedMonth} onValueChange={(value) => setSelectedMonth(value as MonthKey | 'all')}>
              <SelectTrigger className="bg-white border-slate-200 shadow-sm font-semibold text-slate-700">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Consolidado Geral</SelectItem>
                {availableMonths.map((month) => (
                  <SelectItem key={month.key} value={month.key}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 px-1">
          <div className="h-6 w-1.5 bg-orange-500 rounded-full" />
          <h2 className="text-xl font-black text-primary uppercase tracking-tight">CUSTOS</h2>
        </div>
        <GlobalSummary selectedMonth={selectedMonth} />
      </section>

      <section className="space-y-8 pt-6">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1.5 bg-revenue rounded-full" />
            <h2 className="text-2xl font-black text-revenue uppercase tracking-tight">RECEITAS</h2>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase bg-white border border-slate-100 shadow-sm px-3 py-1.5 rounded-full">
            <DollarSign className="h-3.5 w-3.5 text-revenue" />
            Orçado vs Realizado
          </div>
        </div>
        <RevenueSummary selectedMonth={selectedMonth} />
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1.5 bg-sky-500 rounded-full" />
            <h2 className="text-xl font-black text-primary uppercase tracking-tight">RATEIOS</h2>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase bg-white border border-slate-100 shadow-sm px-3 py-1.5 rounded-full">
            <Split className="h-3.5 w-3.5 text-sky-500" />
            Departamentos selecionados
          </div>
        </div>
        <RateiosSummary selectedMonth={selectedMonth} />
      </section>
    </div>
  );
}