import { useBudgetStore, calculateRevenueByAtividade, calculateGlobalRevenueTotals } from '@/store/budgetStore';
import { ATIVIDADES } from '@/types/budget';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const OUTRAS_RECEITAS_EVENTUAIS_CODES = new Set([
  '3.7.01.01.0001',
  '3.7.01.01.0002',
  '3.7.01.01.0003',
  '3.7.01.01.0004',
  '3.7.01.01.0005',
  '3.7.01.01.0006',
  '3.7.01.01.0030',
  '3.7.01.01.0031',
  '3.7.01.01.0040',
]);

export function RevenueSummary() {
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
        onClick={() => isClickable && navigate(`/atividade/${activityKey}?tipo=receitas`)}
        className={cn(
          "border overflow-hidden rounded-2xl transition-all duration-300 bg-white",
          isMain
            ? "mb-10 border-emerald-500/20 shadow-xl ring-1 ring-emerald-500/10"
            : "border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 group",
          isClickable && "cursor-pointer active:scale-[0.99]"
        )}
      >
        <div className={cn(
          "py-4 px-5 flex items-center justify-between",
          isMain ? "bg-emerald-500 text-white" : "bg-emerald-500 text-white"
        )}>
          <span className={cn(
            "font-semibold text-[13px]"
          )}>
            {title}
          </span>
          {isClickable ? (
            <div className="h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-500 group-hover:bg-emerald-100 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </div>
          ) : (
            <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 text-center border-y border-slate-200 bg-slate-100/70">
          <div className="py-2 text-[12px] font-semibold text-slate-700">Orçado</div>
          <div className="py-2 text-[12px] font-semibold text-slate-700">Realizado</div>
          <div className="py-2 text-[12px] font-semibold text-slate-700">Variação</div>
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
            {fmt(Math.abs(diff))}
          </div>
        </div>
      </div>
    );
  };

  const global = calculateGlobalRevenueTotals(accounts);
  const outrasReceitasEventuais = accounts
    .filter(
      (a) =>
        a.nivel === 5 &&
        OUTRAS_RECEITAS_EVENTUAIS_CODES.has(a.codigo.trim())
    )
    .reduce(
      (acc, a) => {
        acc.orc += Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
        acc.real += Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
        return acc;
      },
      { orc: 0, real: 0 }
    );

  // Filtrar apenas atividades que têm receitas (excluir ENCARGOS e DESP_ADM_TRIB)
  const revenueActivities = ATIVIDADES.filter(a =>
    a.key !== 'ENCARGOS' && a.key !== 'DESP_ADM_TRIB'
  );

  return (
    <div className="space-y-6">
      <SummaryTable
        title="Consolidado Geral de Receitas"
        orc={global.orc}
        real={global.real}
        diff={global.diff}
        isMain
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {revenueActivities.map((ativ) => {
          const stats = calculateRevenueByAtividade(accounts, ativ.key);
          // Só mostra atividades que têm algum valor orçado ou realizado
          if (stats.orc === 0 && stats.real === 0) return null;

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
        <SummaryTable
          title="Outras Receitas Eventuais"
          orc={outrasReceitasEventuais.orc}
          real={outrasReceitasEventuais.real}
          diff={outrasReceitasEventuais.real - outrasReceitasEventuais.orc}
        />
      </div>
    </div>
  );
}
