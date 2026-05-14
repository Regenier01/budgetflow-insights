import { useBudgetStore, sumValuesByMonth, receitaLiquidaFromBrutaEDeducoes } from '@/store/budgetStore';
import { ATIVIDADES, type MonthKey } from '@/types/budget';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import { isRendasOperacionaisEntry } from '@/data/rendasOperacionaisAccounts';

interface Props {
  selectedMonth: MonthKey[] | 'all';
}

export function RevenueSummary({ selectedMonth }: Props) {
  const sumEntryValues = (values: Record<string, number>) => sumValuesByMonth(values, selectedMonth);

  const isReceitaDeductionEntry = (entry: { codigo: string; descricao?: string; grupoContabilN9?: string }) => {
    const normalize = (value?: string) =>
      (value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();

    const descricao = normalize(entry.descricao);
    const grupoN9 = normalize(entry.grupoContabilN9);

    return (
      entry.codigo.trim().startsWith('3.2.') ||
      descricao.includes('ABATIMENT') ||
      descricao.includes('IMPOST') ||
      descricao.includes('TRIBUT') ||
      grupoN9.includes('ABATIMENT') ||
      grupoN9.includes('IMPOST') ||
      grupoN9.includes('TRIBUT')
    );
  };

  const calculateRevenueByAtividadeWithoutOutrasEventuais = (atividadeKey: string) => {
    const bruta = accounts
      .filter(
        (a) =>
          a.atividade === atividadeKey &&
          a.nivel === 5 &&
          a.tipo === 'R' &&
          !isOutrasReceitasEventuaisCode(a.codigo) &&
          !isRendasOperacionaisEntry(a)
      )
      .reduce(
        (acc, a) => {
          acc.orc += sumEntryValues(a.orcado);
          acc.real += sumEntryValues(a.realizado);
          return acc;
        },
        { orc: 0, real: 0 }
      );

    const deducoes = accounts
      .filter(
        (a) =>
          a.atividade === atividadeKey &&
          a.nivel === 5 &&
          a.tipo === 'D' &&
          isReceitaDeductionEntry(a) &&
          !isRendasOperacionaisEntry(a)
      )
      .reduce(
        (acc, a) => {
          acc.orc += sumEntryValues(a.orcado);
          acc.real += sumEntryValues(a.realizado);
          return acc;
        },
        { orc: 0, real: 0 }
      );

    const liqOrc = receitaLiquidaFromBrutaEDeducoes(bruta.orc, deducoes.orc);
    const liqReal = receitaLiquidaFromBrutaEDeducoes(bruta.real, deducoes.real);
    return {
      orc: liqOrc,
      real: liqReal,
      diff: liqReal - liqOrc,
    };
  };

  const accounts = useBudgetStore((s) => s.accounts);
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = encodeURIComponent(`${location.pathname}${location.search}${location.hash}`);

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
    // Variação = realizado − orçado: positivo quando a receita superou o orçado (verde).
    const isFavorable = diff > 0;
    const diffPctVsOrc =
      Math.abs(orc) < 1e-9 ? null : (diff / Math.abs(orc)) * 100;
    const isClickable = !!activityKey;

    return (
      <div
        onClick={() =>
          isClickable && navigate(`/atividade/${activityKey}?tipo=receitas&returnTo=${returnTo}`)
        }
        className={cn(
          "border overflow-hidden rounded-2xl transition-all duration-300 bg-white",
          isMain
            ? "mb-10 border-revenue/30 shadow-xl ring-1 ring-revenue/15"
            : "border-slate-100 shadow-sm hover:shadow-md hover:border-revenue/30 group",
          isClickable && "cursor-pointer active:scale-[0.99]"
        )}
      >
        <div className={cn(
          "py-4 px-5 flex items-center justify-between bg-revenue text-revenue-foreground"
        )}>
          <span className={cn(
            "font-semibold text-[13px]"
          )}>
            {title}
          </span>
          {isClickable ? (
            <div className="h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center text-revenue group-hover:bg-revenue/10 transition-colors">
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
              "py-4 text-[13px] font-semibold tabular-nums flex flex-nowrap items-center justify-center gap-2",
              isFavorable ? "text-emerald-600 bg-emerald-50/50" : "text-rose-600 bg-rose-50/50"
            )}
          >
            <span className="inline-flex items-center gap-1">
              {isFavorable ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
              {fmt(diff)}
            </span>
            <span
              className={cn(
                'inline-flex shrink-0 items-center rounded-md border border-slate-200/90 bg-white px-2 py-0.5 text-[11px] font-semibold tabular-nums',
                diffPctVsOrc == null
                  ? 'text-slate-400'
                  : isFavorable
                    ? 'text-emerald-700'
                    : 'text-rose-700'
              )}
            >
              {diffPctVsOrc == null
                ? '—'
                : `${diffPctVsOrc >= 0 ? '+' : ''}${diffPctVsOrc.toFixed(1)}%`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const outrasReceitasEventuais = accounts
    .filter((a) => a.nivel === 5 && isOutrasReceitasEventuaisCode(a.codigo))
    .reduce(
      (acc, a) => {
        acc.orc += sumEntryValues(a.orcado);
        acc.real += sumEntryValues(a.realizado);
        return acc;
      },
      { orc: 0, real: 0 }
    );

  // Filtrar apenas atividades que têm receitas (excluir ENCARGOS e DESP_ADM_TRIB)
  const revenueActivities = ATIVIDADES.filter(a =>
    a.key !== 'ENCARGOS' && a.key !== 'DESP_ADM_TRIB'
  );

  // O consolidado precisa seguir exatamente as mesmas regras dos cards exibidos.
  const globalFromActivities = revenueActivities.reduce(
    (acc, atividade) => {
      const stats = calculateRevenueByAtividadeWithoutOutrasEventuais(atividade.key);
      acc.orc += stats.orc;
      acc.real += stats.real;
      return acc;
    },
    { orc: 0, real: 0 }
  );

  const global = {
    orc: globalFromActivities.orc,
    real: globalFromActivities.real,
  };

  return (
    <div className="space-y-6">
      <SummaryTable
        title="Consolidado Geral de Receita Líquida"
        orc={global.orc}
        real={global.real}
        diff={global.real - global.orc}
        isMain
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {revenueActivities.map((ativ) => {
          const stats = calculateRevenueByAtividadeWithoutOutrasEventuais(ativ.key);
          // Só mostra atividades que têm algum valor orçado ou realizado
          if (stats.orc === 0 && stats.real === 0) return null;

          return (
            <SummaryTable
              key={ativ.key}
              title={`${ativ.label} (Líquida)`}
              activityKey={ativ.key}
              orc={stats.orc}
              real={stats.real}
              diff={stats.diff}
            />
          );
        })}
        <SummaryTable
          title="Outras Receitas Eventuais"
          activityKey="OUTRAS_RECEITAS_EVENTUAIS"
          orc={outrasReceitasEventuais.orc}
          real={outrasReceitasEventuais.real}
          diff={outrasReceitasEventuais.real - outrasReceitasEventuais.orc}
        />
      </div>
    </div>
  );
}
