import { useBudgetStore, sumValuesByMonth } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, TrendingDown, TrendingUp } from 'lucide-react';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import type { MonthKey } from '@/types/budget';

const RATEIO_DEPARTMENTS = [
  'OFICINA GERAL',
  'FABRICA DE RACAO',
  'FABRICA DE SAL',
  'MECANIZADO',
  'LOGISTICA',
  'ALMOXARIFADO',
] as const;

const normalizeDepartment = (value?: string) =>
  (value || '')
    .toUpperCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const isConta4AdministracaoEntry = (codigo?: string, departamento?: string) =>
  (codigo || '').trim().startsWith('4') && normalizeDepartment(departamento) === 'ADMINISTRACAO';

interface Props {
  selectedMonth: MonthKey | 'all';
}

export function RateiosSummary({ selectedMonth }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = encodeURIComponent(`${location.pathname}${location.search}${location.hash}`);

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(v);

  const rateioDepartmentSet = new Set(RATEIO_DEPARTMENTS.map(normalizeDepartment));

  const rateioAccounts = accounts.filter(
    (account) =>
      account.nivel === 5 &&
      account.departamento &&
      (
        rateioDepartmentSet.has(normalizeDepartment(account.departamento)) ||
        isConta4AdministracaoEntry(account.codigo, account.departamento)
      ) &&
      !isOutrasReceitasEventuaisCode(account.codigo)
  );

  const orderedDepartments = Array.from(
    new Set([
      ...RATEIO_DEPARTMENTS,
      ...rateioAccounts.map((account) => account.departamento).filter((dept): dept is string => Boolean(dept)),
    ])
  );

  const totalsByDepartment = orderedDepartments.map((department) => {
    const normalizedDepartment = normalizeDepartment(department);
    const departmentAccounts = rateioAccounts.filter(
      (account) => normalizeDepartment(account.departamento) === normalizedDepartment
    );

    const totals = departmentAccounts.reduce(
      (acc, account) => {
        acc.orc += sumValuesByMonth(account.orcado, selectedMonth);
        acc.real += sumValuesByMonth(account.realizado, selectedMonth);
        return acc;
      },
      { orc: 0, real: 0 }
    );

    return {
      department,
      orc: totals.orc,
      real: totals.real,
      diff: totals.orc - totals.real,
    };
  }).filter((item) => item.orc !== 0 || item.real !== 0);

  const globalTotals = totalsByDepartment.reduce(
    (acc, item) => {
      acc.orc += item.orc;
      acc.real += item.real;
      return acc;
    },
    { orc: 0, real: 0 }
  );

  const SummaryTable = ({
    title,
    orc,
    real,
    diff,
    isMain = false,
    department,
  }: {
    title: string;
    orc: number;
    real: number;
    diff: number;
    isMain?: boolean;
    department?: string;
  }) => {
    const isPositive = diff > 0;
    const diffPctVsOrc =
      Math.abs(orc) < 1e-9 ? null : (diff / Math.abs(orc)) * 100;
    const isClickable = Boolean(department);

    return (
      <div
        onClick={() =>
          department &&
          navigate(
            `/atividade/RATEIOS?tipo=todos&departamento=${encodeURIComponent(department)}&returnTo=${returnTo}`
          )
        }
        className={cn(
          'border overflow-hidden rounded-2xl transition-all duration-300 bg-white',
          isMain
            ? 'mb-10 border-revenue/30 shadow-xl ring-1 ring-revenue/15'
            : 'border-slate-100 shadow-sm hover:shadow-md hover:border-revenue/30'
          ,
          isClickable && 'cursor-pointer active:scale-[0.99] group'
        )}
      >
        <div className="py-4 px-5 flex items-center justify-between bg-revenue text-revenue-foreground">
          <span className="font-semibold text-[13px]">{title}</span>
          {isClickable ? (
            <div className="h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center text-revenue group-hover:bg-revenue/10 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </div>
          ) : (
            <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
              <Building2 className="h-4 w-4 text-white" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 text-center border-y border-slate-200 bg-slate-100/70">
          <div className="py-2 text-[12px] font-semibold text-slate-700">Orcado</div>
          <div className="py-2 text-[12px] font-semibold text-slate-700">Realizado</div>
          <div className="py-2 text-[12px] font-semibold text-slate-700">Variacao</div>
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
              'py-4 text-[13px] font-semibold tabular-nums flex flex-nowrap items-center justify-center gap-2',
              isPositive ? 'text-emerald-600 bg-emerald-50/50' : 'text-rose-600 bg-rose-50/50'
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

  return (
    <div className="space-y-6">
      <SummaryTable
        title="Consolidado de Rateios"
        orc={globalTotals.orc}
        real={globalTotals.real}
        diff={globalTotals.orc - globalTotals.real}
        isMain
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {totalsByDepartment.map((department) => (
          <SummaryTable
            key={department.department}
            title={department.department}
            orc={department.orc}
            real={department.real}
            diff={department.diff}
            department={department.department}
          />
        ))}
      </div>
    </div>
  );
}
