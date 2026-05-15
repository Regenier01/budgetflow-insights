import {
  useBudgetStore,
  sumValuesByMonth,
  isSyntheticOrcadoImportEntry,
} from '@/store/budgetStore';
import { ATIVIDADES, type MonthKey } from '@/types/budget';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { isDespesaComVendasCode } from '@/data/despesasComVendasAccounts';
import { isDespesasComVendasConsolidatedScopeDepartment } from '@/data/despesasComVendasDepartments';
import { isDespesaFinanceiraAccount, isReceitaFinanceiraAccount } from '@/data/encargosAccounts';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import { isRendasOperacionaisEntry } from '@/data/rendasOperacionaisAccounts';

interface Props {
  selectedMonth: MonthKey[] | 'all';
}

const isAllMonthsSelection = (selection: MonthKey[] | 'all') =>
  selection === 'all' || selection.length === 0;

const DESP_ADM_BUDGET_ADJUSTMENT = 216000;
const MARKETING_INTERNO_CC = 'MARKETING INTERNO';

export function GlobalSummary({ selectedMonth }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = encodeURIComponent(`${location.pathname}${location.search}${location.hash}`);

  const normalizeText = (value?: string) =>
    (value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .trim();

  const isReceitaDeductionEntry = (entry: (typeof accounts)[number]) => {
    const normalizedDescription = normalizeText(entry.descricao);
    const normalizedGroup = normalizeText(entry.grupoContabilN9);

    return (
      entry.codigo.trim().startsWith('3.2.') ||
      normalizedDescription.includes('ABATIMENT') ||
      normalizedDescription.includes('IMPOST') ||
      normalizedDescription.includes('TRIBUT') ||
      normalizedGroup.includes('ABATIMENT') ||
      normalizedGroup.includes('IMPOST') ||
      normalizedGroup.includes('TRIBUT')
    );
  };

  const RATEIO_DEPARTMENTS = [
    'OFICINA GERAL',
    'FABRICA DE RACAO',
    'FABRICA DE SAL',
    'MECANIZADO',
    'LOGISTICA',
    'ALMOXARIFADO',
  ] as const;

  const isRateioDepartment = (departamento?: string) => {
    if (!departamento) return false;
    const normalized = normalizeText(departamento);
    return RATEIO_DEPARTMENTS.some((item) => normalizeText(item) === normalized);
  };

  const isConta4AdministracaoEntry = (entry: (typeof accounts)[number]) =>
    entry.codigo.trim().startsWith('4') && normalizeText(entry.departamento) === 'ADMINISTRACAO';
  const isConta4Entry = (entry: (typeof accounts)[number]) => entry.codigo.trim().startsWith('4');
  const isNotMarketingInternoCostCenter = (centroCusto?: string) =>
    normalizeText(centroCusto) !== MARKETING_INTERNO_CC;

  const CUSTOS_ALLOWED_CC_BY_ACTIVITY: Partial<Record<string, string[]>> = {
    PECUARIA: [
      'RATEIO GADO GERAL',
      'RATEIO CONFINAMENTO',
      'TRANSPORTE DE GADO CONFINAMENTO',
      'TRANSPORTE DE INSUMOS CONFINAMENTO',
      'CONFINAMENTO - TRANSPORTE DE GADO',
      'CONFINAMENTO - TRANSPORTE DE INSUMOS',
      'MANUTENCAO SISTEMA IRRIGACAO - CUSTO CONFINAMENTO',
      'RECRIA GOTEJO CONFINAMENTO',
    ],
    SERINGAL: ['RATEIO SERINGAL'],
  };

  const isAllowedCentroCustoForCustos = (activityKey: string, centroCusto?: string) => {
    const allowed = CUSTOS_ALLOWED_CC_BY_ACTIVITY[activityKey];
    if (!allowed) return true;
    const normalizedCC = normalizeText(centroCusto);
    return allowed.some((item) => normalizeText(item) === normalizedCC);
  };
  const isRateioDeCustosGroup = (entry: (typeof accounts)[number]) =>
    normalizeText(entry.grupoContabilN9).includes('4.2.01.02-RATEIO DE CUSTOS');
  const isAllowedEntryForCustos = (activityKey: string, entry: (typeof accounts)[number]) =>
    isSyntheticOrcadoImportEntry(entry) ||
    isRateioDeCustosGroup(entry) ||
    isAllowedCentroCustoForCustos(activityKey, entry.centroCusto);

  const isAgricolaFarmCultureDepartment = (departamento?: string) => {
    const normalized = normalizeText(departamento);
    if (!normalized.includes(' - ')) return false;
    const [farm, culture, ...rest] = normalized.split(' - ').map((part) => part.trim());
    return Boolean(farm) && Boolean(culture) && rest.length === 0;
  };

  const isAgricolaUnidadeRecepConta4Entry = (entry: (typeof accounts)[number]) => {
    if (!entry.codigo.trim().startsWith('4')) return false;
    const dept = normalizeText(entry.departamento);
    const cc = normalizeText(entry.centroCusto);
    return (
      dept === normalizeText('UNIDADE RECEPÇÃO DE GRAOS') ||
      cc === normalizeText('UNIDADE DE RECEPCAO DE GRAOS')
    );
  };
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
    const isPositive = diff > 0;
    const diffPctVsOrc =
      Math.abs(orc) < 1e-9 ? null : (diff / Math.abs(orc)) * 100;
    const isClickable = !!activityKey;

    return (
      <div 
        onClick={() =>
          isClickable && navigate(`/atividade/${activityKey}?tipo=custos&returnTo=${returnTo}`)
        }
        className={cn(
          "border overflow-hidden rounded-2xl transition-all duration-300 bg-white",
          isMain 
            ? "mb-10 border-primary/20 shadow-xl ring-1 ring-primary/5" 
            : "border-slate-100 shadow-sm hover:shadow-md hover:border-dashboard-orange/35 group",
          isClickable && "cursor-pointer active:scale-[0.99]"
        )}
      >
        <div className={cn(
          "py-4 px-5 flex items-center justify-between",
          isMain ? "bg-dashboard-orange text-white" : "bg-dashboard-orange text-white"
        )}>
          <span className={cn(
            "font-semibold text-[13px]"
          )}>
            {title}
          </span>
          {isClickable && (
            <div className="h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center text-dashboard-orange group-hover:bg-dashboard-orange/15 transition-colors">
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
              "py-4 text-[13px] font-semibold tabular-nums flex flex-nowrap items-center justify-center gap-2",
              isPositive ? "text-dashboard-green bg-dashboard-green/10" : "text-rose-600 bg-rose-50/50"
            )}
          >
            <span className="inline-flex items-center gap-1">
              {isPositive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
              {fmt(diff)}
            </span>
            <span
              className={cn(
                'inline-flex shrink-0 items-center rounded-md border border-slate-200/90 bg-white px-2 py-0.5 text-[11px] font-semibold tabular-nums',
                diffPctVsOrc == null
                  ? 'text-slate-400'
                  : isPositive
                    ? 'text-dashboard-green'
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

  const computeTotals = (predicate: (entry: (typeof accounts)[number]) => boolean) =>
    accounts
      .filter((a) => a.nivel === 5 && predicate(a))
      .reduce(
        (acc, a) => {
          acc.orc += sumValuesByMonth(a.orcado, selectedMonth);
          acc.real += sumValuesByMonth(a.realizado, selectedMonth);
          return acc;
        },
        { orc: 0, real: 0 }
      );

  const calculateCostsByActivity = (activityKey: string) => {
    if (activityKey === 'ENCARGOS') {
      return computeTotals(
        (a) =>
          a.atividade === 'ENCARGOS' &&
          (isDespesaFinanceiraAccount(a) || isReceitaFinanceiraAccount(a))
      );
    }

    const shouldExcludeReceitaDeductions = activityKey !== 'DESP_ADM_TRIB';

    const totals = computeTotals(
      (a) =>
        a.atividade === activityKey &&
        (activityKey !== 'DESP_ADM_TRIB' ? !isConta4AdministracaoEntry(a) : !isConta4Entry(a)) &&
        (a.tipo === 'C' || a.tipo === 'D') &&
        !isOutrasReceitasEventuaisCode(a.codigo) &&
        !isRendasOperacionaisEntry(a) &&
        !isDespesaComVendasCode(a.codigo) &&
        (!shouldExcludeReceitaDeductions || !isReceitaDeductionEntry(a)) &&
        (a.tipo !== 'C' || isAllowedEntryForCustos(activityKey, a)) &&
        (activityKey !== 'DESP_ADM_TRIB' ||
          (!isRateioDepartment(a.departamento) &&
            !isConta4Entry(a) &&
            isNotMarketingInternoCostCenter(a.centroCusto))) &&
        (activityKey !== 'AGRICOLA' ||
          a.tipo !== 'C' ||
          isAgricolaFarmCultureDepartment(a.departamento) ||
          isAgricolaUnidadeRecepConta4Entry(a)) &&
        (activityKey !== 'AGRICOLA' || !isAgricolaUnidadeRecepConta4Entry(a))
    );

    if (activityKey !== 'DESP_ADM_TRIB' || !isAllMonthsSelection(selectedMonth)) {
      return totals;
    }

    return {
      ...totals,
      orc: totals.orc - DESP_ADM_BUDGET_ADJUSTMENT,
    };
  };

  // O total consolidado de custos não inclui Encargos.
  const global = ATIVIDADES.filter((atividade) => atividade.key !== 'ENCARGOS').reduce(
    (acc, atividade) => {
      const stats = calculateCostsByActivity(atividade.key);
      acc.orc += stats.orc;
      acc.real += stats.real;
      return acc;
    },
    { orc: 0, real: 0 }
  );
  const despesasComVendas = computeTotals(
    (a) =>
      isDespesaComVendasCode(a.codigo) &&
      (a.tipo === 'C' || a.tipo === 'D') &&
      isDespesasComVendasConsolidatedScopeDepartment(a.departamento)
  );
  const consolidatedOrc = global.orc + despesasComVendas.orc;
  const consolidatedReal = global.real + despesasComVendas.real;

  return (
    <div className="space-y-6">
      <SummaryTable
        title="Total Consolidado de Custos das Operações"
        orc={consolidatedOrc}
        real={consolidatedReal}
        diff={consolidatedOrc - consolidatedReal}
        isMain
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ATIVIDADES.map((ativ) => {
          const stats = calculateCostsByActivity(ativ.key);
          return (
            <SummaryTable
              key={ativ.key}
              title={ativ.label}
              activityKey={ativ.key}
              orc={stats.orc}
              real={stats.real}
              diff={stats.orc - stats.real}
            />
          );
        })}
        <SummaryTable
          title="Despesas com Vendas"
          activityKey="DESPESAS_COM_VENDAS"
          orc={despesasComVendas.orc}
          real={despesasComVendas.real}
          diff={despesasComVendas.orc - despesasComVendas.real}
        />
      </div>
    </div>
  );
}