import { useBudgetStore, calculateGlobalTotals, calculateTotalsByDivisao, calculateEncargosTotals } from '@/store/budgetStore';
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
          isMain ? "bg-orange-500 text-white" : "bg-orange-500 text-white"
        )}>
          <span className={cn(
            "font-semibold text-[13px]"
          )}>
            {title}
          </span>
          {isClickable && (
            <div className="h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-3 text-center border-y border-slate-200 bg-slate-100/70">
          <div className="py-2 text-[12px] font-semibold text-slate-700">Orçado</div>
          <div className="py-2 text-[12px] font-semibold text-slate-700">Realizado</div>
          <div className="py-2 text-[12px] font-semibold text-slate-700">Diferença</div>
        </div>

        <div className="grid grid-cols-3 text-center items-center">
          <div className="py-4 text-[13px] font-medium border-r border-slate-200 tabular-nums text-slate-700 bg-white">
            {fmt(orc)}
          </div>
          <div className="py-4 text-[13px] font-semibold border-r border-slate-200 tabular-nums text-slate-800 bg-white">
            {fmt(real)}
          </div>
          <div
            className={cn(
              "py-4 text-[13px] font-semibold tabular-nums flex items-center justify-center gap-1",
              isHigher ? "text-emerald-600 bg-emerald-50/50" : "text-rose-600 bg-rose-50/50"
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
          let stats;
          if (ativ.key === 'ENCARGOS') {
            const encargosData = calculateEncargosTotals(accounts);
            stats = encargosData.total;
          } else {
            stats = calculateTotalsByDivisao(accounts, ativ.key);
          }
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