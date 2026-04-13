import { useBudgetStore, calculateGlobalTotals, calculateTotalsByDivisao, calculateTotalsByDivisaoGrupo4, calculateTotalsByDivisaoOutrosGrupos } from '@/store/budgetStore';
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

  // Calcular totais para GRUPOCONTABIL = 4 (resumo por atividade consolidado)
  const totalsGrupo4 = ATIVIDADES.map(ativ => ({
    key: ativ.key,
    label: ativ.label,
    stats: calculateTotalsByDivisaoGrupo4(accounts, ativ.key)
  }));

  // Calcular totais para demais atividades (resumo totalizador de custos)
  const totalsOutrosGrupos = ATIVIDADES.map(ativ => ({
    key: ativ.key,
    label: ativ.label,
    stats: calculateTotalsByDivisaoOutrosGrupos(accounts, ativ.key)
  }));

  // Calcular consolidado geral para GRUPOCONTABIL = 4
  const consolidadoGrupo4 = totalsGrupo4.reduce(
    (acc, curr) => ({
      orc: acc.orc + curr.stats.orc,
      real: acc.real + curr.stats.real,
      diff: acc.diff + curr.stats.diff
    }),
    { orc: 0, real: 0, diff: 0 }
  );

  // Calcular consolidado geral para demais grupos
  const consolidadoOutrosGrupos = totalsOutrosGrupos.reduce(
    (acc, curr) => ({
      orc: acc.orc + curr.stats.orc,
      real: acc.real + curr.stats.real,
      diff: acc.diff + curr.stats.diff
    }),
    { orc: 0, real: 0, diff: 0 }
  );

  return (
    <div className="space-y-6">
      <SummaryTable
        title="Consolidado Geral de Operações"
        orc={global.orc}
        real={global.real}
        diff={global.real - global.orc}
        isMain
      />

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 px-1">
            <div className="h-6 w-1.5 bg-blue-500 rounded-full" />
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Resumo por Atividade (GRUPOCONTABIL = 4)</h3>
          </div>
          
          <SummaryTable
            title="Consolidado Grupo 4"
            orc={consolidadoGrupo4.orc}
            real={consolidadoGrupo4.real}
            diff={consolidadoGrupo4.real - consolidadoGrupo4.orc}
            isMain={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {totalsGrupo4.map((ativ) => (
              <SummaryTable
                key={ativ.key}
                title={ativ.label}
                activityKey={ativ.key}
                orc={ativ.stats.orc}
                real={ativ.stats.real}
                diff={ativ.stats.real - ativ.stats.orc}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 px-1">
            <div className="h-6 w-1.5 bg-purple-500 rounded-full" />
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Resumo Totalizador - Demais Atividades (GRUPOCONTABIL &ne; 4)</h3>
          </div>
          
          <SummaryTable
            title="Consolidado Demais Grupos"
            orc={consolidadoOutrosGrupos.orc}
            real={consolidadoOutrosGrupos.real}
            diff={consolidadoOutrosGrupos.real - consolidadoOutrosGrupos.orc}
            isMain={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {totalsOutrosGrupos.map((ativ) => (
              <SummaryTable
                key={ativ.key}
                title={ativ.label}
                activityKey={ativ.key}
                orc={ativ.stats.orc}
                real={ativ.stats.real}
                diff={ativ.stats.real - ativ.stats.orc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}