import { useBudgetStore, calculateGlobalTotals, calculateTotalsByDivisao } from '@/store/budgetStore';
import { ATIVIDADES } from '@/types/budget';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';

export function GlobalSummary() {
  const accounts = useBudgetStore((s) => s.accounts);
  const navigate = useNavigate();

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(v);

  const SummaryTable = ({
    title,
    orc,
    real,
    diff,
    isMain = false,
    activityKey
  }: {
    title: string;
    orc: number;
    real: number;
    diff: number;
    isMain?: boolean;
    activityKey?: string;
  }) => {
    const isNegative = diff < 0;
    const isClickable = !!activityKey;

    return (
      <div 
        onClick={() => isClickable && navigate(`/atividade/${activityKey}`)}
        className={cn(
          "border border-slate-200 overflow-hidden rounded-xl transition-all duration-200 bg-white shadow-sm",
          isMain ? "mb-8 border-slate-300 shadow-md" : "hover:border-primary/40 hover:shadow-md group",
          isClickable && "cursor-pointer active:scale-[0.98]"
        )}
      >
        <div className={cn(
          "py-3 px-4 flex items-center justify-between",
          isMain ? "bg-slate-900 text-white" : "bg-slate-50 group-hover:bg-primary/5"
        )}>
          <span className="font-bold text-xs uppercase tracking-widest">
            {title}
          </span>
          {isClickable && (
            <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-primary transition-transform group-hover:translate-x-1" />
          )}
        </div>
        
        <div className="grid grid-cols-3 text-center border-y border-slate-100">
          <div className="bg-amber-400/10 py-2 text-[9px] font-black text-amber-700 border-r border-slate-100 uppercase tracking-tighter">Orçado</div>
          <div className="bg-amber-400/10 py-2 text-[9px] font-black text-amber-700 border-r border-slate-100 uppercase tracking-tighter">Realizado</div>
          <div className="bg-amber-400/10 py-2 text-[9px] font-black text-amber-700 uppercase tracking-tighter">Diferença</div>
        </div>

        <div className="grid grid-cols-3 text-center">
          <div className="py-4 text-[13px] font-mono font-semibold border-r border-slate-100 tabular-nums text-slate-600">
            {fmt(orc)}
          </div>
          <div className="py-4 text-[13px] font-mono font-semibold border-r border-slate-100 tabular-nums text-slate-900">
            {fmt(real)}
          </div>
          <div
            className={cn(
              "py-4 text-[13px] font-mono font-bold tabular-nums flex items-center justify-center gap-1",
              isNegative ? "text-rose-600 bg-rose-50/30" : "text-emerald-600 bg-emerald-50/30"
            )}
          >
            {isNegative ? <TrendingDown className="h-3 w-3" /> : <TrendingUp className="h-3 w-3" />}
            {fmt(diff)}
          </div>
        </div>
      </div>
    );
  };

  const global = calculateGlobalTotals(accounts);

  return (
    <div className="space-y-6">
      <SummaryTable
        title="Consolidado Geral (Custos e Despesas)"
        orc={global.orc}
        real={global.real}
        diff={global.diff}
        isMain
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ATIVIDADES.map((ativ) => {
          const stats = calculateTotalsByDivisao(accounts, ativ.key);
          return (
            <SummaryTable
              key={ativ.key}
              title={ativ.label}
              activityKey={ativ.key}
              orc={stats.orc}
              real={stats.real}
              diff={stats.diff}
            />
          );
        })}
      </div>
    </div>
  );
}