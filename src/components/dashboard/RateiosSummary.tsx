import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import {
  getRateioDepartmentsForSubview,
  isExcludedFromRateios,
  isRateioDepartmentForSubview,
  matchesRateioColigadaSubview,
  parseRateioColigadaSubview,
  RATEIO_COLIGADA_GROUPS,
  type RateioColigadaSubview,
} from '@/data/rateiosColigadas';
import type { MonthKey } from '@/types/budget';

const normalizeDepartment = (value?: string) =>
  (value || '')
    .toUpperCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const isConta4AdministracaoEntry = (codigo?: string, departamento?: string) =>
  (codigo || '').trim().startsWith('4') && normalizeDepartment(departamento) === 'ADMINISTRACAO';

const isRateioAnalysisEntry = (
  account: {
    codigo: string;
    departamento?: string;
    coligada?: string;
  },
  coligadaSubview: RateioColigadaSubview
) => {
  if (isExcludedFromRateios(account)) return false;
  if (!matchesRateioColigadaSubview(account, coligadaSubview)) return false;

  const isRateioDept = isRateioDepartmentForSubview(account.departamento, coligadaSubview);

  return (
    (isRateioDept || isConta4AdministracaoEntry(account.codigo, account.departamento)) &&
    !isOutrasReceitasEventuaisCode(account.codigo)
  );
};

interface Props {
  selectedMonth: MonthKey | 'all';
  coligadaSubview?: RateioColigadaSubview | null;
}

export function RateiosSummary({ selectedMonth: _selectedMonth, coligadaSubview = null }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = encodeURIComponent(`${location.pathname}${location.search}${location.hash}`);

  const activeSubview = coligadaSubview ?? null;

  if (!activeSubview) {
    return (
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-2 sm:grid-cols-2 sm:px-4">
        {RATEIO_COLIGADA_GROUPS.map((group) => (
          <button
            type="button"
            key={group.subview}
            onClick={() => navigate(`/rateios?subview=${group.subview}`)}
            className={cn(
              'border overflow-hidden rounded-2xl transition-all duration-300 bg-white',
              'border-slate-100 shadow-sm hover:shadow-md hover:border-sky-500/30',
              'cursor-pointer active:scale-[0.99] group text-left'
            )}
          >
            <div className="flex items-center justify-between bg-sky-600 px-5 py-4 text-white">
              <div>
                <span className="block font-semibold text-[13px]">{group.shortLabel}</span>
                <span className="mt-1 block text-[11px] font-medium text-sky-100/90">{group.label}</span>
              </div>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  const rateioAccounts = accounts.filter(
    (account) => account.nivel === 5 && isRateioAnalysisEntry(account, activeSubview)
  );

  const baseDepartments = getRateioDepartmentsForSubview(activeSubview);
  const departmentCards = Array.from(
    new Set([
      ...baseDepartments,
      ...rateioAccounts.map((account) => account.departamento).filter((dept): dept is string => Boolean(dept)),
    ])
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-6 px-2 sm:px-4">
      {departmentCards.map((department) => (
        <button
          type="button"
          key={department}
          onClick={() =>
            navigate(
              `/atividade/RATEIOS?tipo=todos&subview=${activeSubview}&departamento=${encodeURIComponent(department)}&returnTo=${returnTo}`
            )
          }
          className={cn(
            'border overflow-hidden rounded-2xl transition-all duration-300 bg-white',
            'border-slate-100 shadow-sm hover:shadow-md hover:border-dashboard-green/30',
            'cursor-pointer active:scale-[0.99] group text-left',
            'w-full shrink-0 sm:w-80'
          )}
        >
          <div className="flex items-center justify-between bg-dashboard-green px-5 py-4 text-white">
            <span className="font-semibold text-[13px]">{department}</span>
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-dashboard-green shadow-sm group-hover:bg-dashboard-green/10 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export function useRateiosColigadaSubviewFromSearch() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return parseRateioColigadaSubview(params.get('subview'));
}
