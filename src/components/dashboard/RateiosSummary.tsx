import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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

export function RateiosSummary({ selectedMonth: _selectedMonth }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = encodeURIComponent(`${location.pathname}${location.search}${location.hash}`);

  const rateioDepartmentSet = new Set(RATEIO_DEPARTMENTS.map(normalizeDepartment));

  const rateioAccounts = accounts.filter(
    (account) =>
      account.nivel === 5 &&
      account.departamento &&
      (rateioDepartmentSet.has(normalizeDepartment(account.departamento)) ||
        isConta4AdministracaoEntry(account.codigo, account.departamento)) &&
      !isOutrasReceitasEventuaisCode(account.codigo)
  );

  const departmentCards = Array.from(
    new Set([
      ...RATEIO_DEPARTMENTS,
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
              `/atividade/RATEIOS?tipo=todos&departamento=${encodeURIComponent(department)}&returnTo=${returnTo}`
            )
          }
          className={cn(
            'border overflow-hidden rounded-2xl transition-all duration-300 bg-white',
            'border-slate-100 shadow-sm hover:shadow-md hover:border-dashboard-green/30',
            'cursor-pointer active:scale-[0.99] group text-left',
            'w-full shrink-0 sm:w-80'
          )}
        >
          <div className="py-4 px-5 flex items-center justify-between bg-dashboard-green text-white">
            <span className="font-semibold text-[13px]">{department}</span>
            <div className="h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center text-dashboard-green group-hover:bg-dashboard-green/10 transition-colors shrink-0">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
