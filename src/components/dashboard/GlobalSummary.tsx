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
    const isHigher = real > orc;
    const isClickable = !!activityKey;

    return (
      <div 
        onClick={() => isClickable && navigate(`/atividade/${activityKey}`)}
        className={cn(
          "border overflow-hidden rounded-2xl transition-all duration-300 bg-white",
          isMain 
            ? "mb-10 border-primary/20 shadow-xl ring-1 ring-primary/5" 
            : "border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 group",
          isClickable && "cursor-pointer active:scale-[0.99]"
        )}
      >
        <div className={cn(
          "py-4 px-5 flex items-center justify-between",
          isMain ? "bg-primary text-white" : "bg-slate-50 group-hover:bg-orange-50/50"
        )}>
          <span className={cn(
            "font-black text-[11px] uppercase tracking-[0.15em]",
            !isMain && "text-primary"
          )}>
            {title}
          </span>
          {isClickable && (
            <div className="h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-3 text-center border-y border-slate-50">
          <div className="py-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Orçado</div>
          <div className="py-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Realizado</div>
          <div className="py-2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Diferença</div>
        </div>

        <div className="grid grid-cols-3 text-center items-center">
          <div className="py-5 text-[14px] font-mono font-medium border-r border-slate-50 tabular-nums text-slate-500">
            {fmt(orc)}
          </div>
          <div className="py-5 text-[14px] font-mono font-bold border-r border-slate-50 tabular-nums text-slate-900">
            {fmt(real)}
          </div>
          <div
            className={cn(
              "py-5 text-[14px] font-mono font-black tabular-nums flex items-center justify-center gap-1",
              isHigher ? "text-emerald-600 bg-emerald-50/30" : "text-rose-600 bg-rose-50/30"
            )}
          >
            {isHigher ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
            {fmt(real - orc)}
          </div>
        </div>
      </div>
    );
  };

  const global = calculateGlobalTotals(accounts);

  return (
    <div className="space-y-6">
      <SummaryTable
        title="Consolidado Geral de Operações"
        orc={global.orc}
        real={global.real}
        diff={global.real - global.orc}
        isMain
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ATIVIDADES.map((ativ) => {
          const stats = calculateTotalsByDivisao(accounts, ativ.key);
          return (
            <SummaryTable
              key={ativ.key}
              title={ativ.label}
              activityKey={ativ.key}
              orc={stats.orc}
              real={stats.real}
              diff={stats.real - stats.orc}
            />
          );
        })}
      </div>
    </div>
  );
}