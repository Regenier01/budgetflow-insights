import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import AnalyticalTable from '@/components/dashboard/AnalyticalTable';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ATIVIDADES, MONTHS, type MonthKey } from '@/types/budget';
import type { AccountEntry } from '@/types/budget';
import { ACTIVITY_CC_MAPPING } from '@/data/activityCCMapping';
import { useBudgetStore, calculateEncargosTotals } from '@/store/budgetStore';
import { isDespesaFinanceira, isReceitaFinanceira } from '@/data/encargosAccounts';
import { isDespesaComVendasCode } from '@/data/despesasComVendasAccounts';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import NotFound from './NotFound';
const RATEIO_DEPARTMENTS = [
  'OFICINA GERAL',
  'FABRICA DE RACAO',
  'FABRICA DE SAL',
  'MECANIZADO',
  'LOGISTICA',
  'ALMOXARIFADO',
] as const;

const normalizeText = (value?: string) =>
  (value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim();

const isRateioDepartment = (departamento?: string) => {
  if (!departamento) return false;
  const normalized = normalizeText(departamento);
  return RATEIO_DEPARTMENTS.some((item) => normalizeText(item) === normalized);
};

const isNonRateioDepartment = (departamento?: string) => !isRateioDepartment(departamento);

const isRendasOperacionaisEntry = (entry: AccountEntry) => {
  const normalizedGroup = normalizeText(entry.grupoContabilN9);
  return normalizedGroup.includes('RENDAS OPERACIONAIS');
};

const isReceitaDeductionEntry = (entry: AccountEntry) => {
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

const combineEntryFilters = (
  ...filters: Array<((entry: AccountEntry) => boolean) | undefined>
) => {
  const activeFilters = filters.filter(Boolean) as Array<(entry: AccountEntry) => boolean>;
  if (activeFilters.length === 0) return undefined;
  return (entry: AccountEntry) => activeFilters.every((filter) => filter(entry));
};

export default function ActivityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const tipoView = searchParams.get('tipo') || 'todos';
  const initialDepartment = searchParams.get('departamento');
  const accounts = useBudgetStore((s) => s.accounts);
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');
  const [selectedCC, setSelectedCC] = useState<string | 'all'>('all');
  const [selectedDept, setSelectedDept] = useState<string | 'all'>(initialDepartment || 'all');
  
  const isOutrasReceitasEventuais = id === 'OUTRAS_RECEITAS_EVENTUAIS';
  const isDespesasComVendas = id === 'DESPESAS_COM_VENDAS';
  const isRateios = id === 'RATEIOS';
  const atividade = ATIVIDADES.find(a => a.key === id);
  const isAdmTrib = atividade?.key === 'DESP_ADM_TRIB';
  const isEncargos = atividade?.key === 'ENCARGOS';
  const resolvedTipoView = isDespesasComVendas ? 'custos' : tipoView;
  const atividadeLabel = isOutrasReceitasEventuais
    ? 'Outras Receitas Eventuais'
    : isDespesasComVendas
      ? 'Despesas com Vendas'
      : isRateios
        ? 'Rateios'
        : atividade?.label;
  const activityLevelEntryFilter = isOutrasReceitasEventuais
    ? undefined
    : isRateios
      ? (entry: AccountEntry) =>
        isRateioDepartment(entry.departamento) &&
        !isOutrasReceitasEventuaisCode(entry.codigo)
      : (entry: AccountEntry) =>
        !isOutrasReceitasEventuaisCode(entry.codigo) &&
        !isRendasOperacionaisEntry(entry) &&
        (isDespesasComVendas || !isDespesaComVendasCode(entry.codigo));

  const isTributariaEntry = (entry: {
    descricao?: string;
    departamento?: string;
    centroCusto?: string;
    grupoContabilN9?: string;
    divisao?: string;
    unidadeNegocio?: string;
  }) => {
    const haystack = [
      entry.descricao,
      entry.departamento,
      entry.centroCusto,
      entry.grupoContabilN9,
      entry.divisao,
      entry.unidadeNegocio,
    ]
      .filter(Boolean)
      .join(' ')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();

    return haystack.includes('TRIBUT');
  };
  
  const availableDepts = useMemo(() => {
    if (!id) return [];
    const depts = new Set<string>();
    accounts.forEach(a => {
      const matchesRateios =
        isRateios && isRateioDepartment(a.departamento);
      const matchesOutrasReceitas =
        isOutrasReceitasEventuais && isOutrasReceitasEventuaisCode(a.codigo);
      const matchesDespesasComVendas =
        isDespesasComVendas && isDespesaComVendasCode(a.codigo);
      const matchesAtividade =
        !isOutrasReceitasEventuais &&
        !isDespesasComVendas &&
        a.atividade === id &&
        !isOutrasReceitasEventuaisCode(a.codigo);
      if ((matchesRateios || matchesOutrasReceitas || matchesDespesasComVendas || matchesAtividade) && a.departamento) {
        depts.add(a.departamento);
      }
    });
    return Array.from(depts).sort();
  }, [accounts, id, isOutrasReceitasEventuais, isDespesasComVendas, isRateios]);

  const availableCostCenters = useMemo(() => {
    if (!id) return [];
    const dynamic = new Set<string>();
    accounts.forEach((a) => {
      const matchesRateios =
        isRateios && isRateioDepartment(a.departamento);
      const matchesOutrasReceitas =
        isOutrasReceitasEventuais && isOutrasReceitasEventuaisCode(a.codigo);
      const matchesDespesasComVendas =
        isDespesasComVendas && isDespesaComVendasCode(a.codigo);
      const matchesAtividade =
        !isOutrasReceitasEventuais &&
        !isDespesasComVendas &&
        a.atividade === id &&
        !isOutrasReceitasEventuaisCode(a.codigo);
      if ((matchesRateios || matchesOutrasReceitas || matchesDespesasComVendas || matchesAtividade) && a.centroCusto) {
        dynamic.add(a.centroCusto);
      }
    });

    if (!isOutrasReceitasEventuais && !isDespesasComVendas && !isRateios) {
      const fallback = ACTIVITY_CC_MAPPING[id as keyof typeof ACTIVITY_CC_MAPPING] || [];
      fallback.forEach((cc) => dynamic.add(cc));
    }
    return Array.from(dynamic).sort();
  }, [accounts, id, isOutrasReceitasEventuais, isDespesasComVendas, isRateios]);

  const filteredLeafAccounts = useMemo(
    () =>
      accounts.filter(
        (entry) =>
          entry.nivel === 5 &&
          (!atividade?.key || entry.atividade === atividade.key) &&
          (selectedCC === 'all' || entry.centroCusto === selectedCC) &&
          (selectedDept === 'all' || entry.departamento === selectedDept) &&
          (!activityLevelEntryFilter || activityLevelEntryFilter(entry))
      ),
    [accounts, atividade?.key, selectedCC, selectedDept, activityLevelEntryFilter]
  );

  const sumEntries = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
    entries.reduce((sum, entry) => {
      if (selectedMonth === 'all') {
        return sum + Object.values(entry[field]).reduce((acc, value) => acc + value, 0);
      }
      return sum + (entry[field][selectedMonth] || 0);
    }, 0);

  const receitaBrutaEntries = filteredLeafAccounts.filter(
    (entry) => entry.tipo === 'R' && !isOutrasReceitasEventuaisCode(entry.codigo)
  );
  const deducoesReceitaEntries = filteredLeafAccounts.filter(
    (entry) => entry.tipo === 'D' && isReceitaDeductionEntry(entry)
  );
  const receitaBrutaOrc = sumEntries(receitaBrutaEntries, 'orcado');
  const receitaBrutaReal = sumEntries(receitaBrutaEntries, 'realizado');
  const deducoesReceitaOrc = sumEntries(deducoesReceitaEntries, 'orcado');
  const deducoesReceitaReal = sumEntries(deducoesReceitaEntries, 'realizado');
  const receitaLiquida = {
    orc: receitaBrutaOrc + deducoesReceitaOrc,
    real: receitaBrutaReal + deducoesReceitaReal,
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);

  if (!atividade && !isOutrasReceitasEventuais && !isDespesasComVendas && !isRateios) return <NotFound />;

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-6 w-1 bg-orange-500 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600/70">Relatório Detalhado</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            {atividadeLabel}
          </h1>
          <p className="text-sm text-slate-500 font-medium">Análise granular de orçado vs realizado por categoria contábil</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Select value={selectedDept} onValueChange={(v) => setSelectedDept(v)}>
            <SelectTrigger className="w-[200px] bg-white border-slate-200 shadow-sm font-semibold text-slate-700">
              <SelectValue placeholder="Departamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="font-semibold">Todos Departamentos</SelectItem>
              {availableDepts.map((dept) => (
                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedCC} onValueChange={(v) => setSelectedCC(v)}>
            <SelectTrigger className="w-[200px] bg-white border-slate-200 shadow-sm font-semibold text-slate-700">
              <SelectValue placeholder="Centro de Custo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="font-semibold">Todos Centros de Custo</SelectItem>
              {availableCostCenters.map((cc) => (
                <SelectItem key={cc} value={cc}>{cc}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedMonth} onValueChange={(v) => setSelectedMonth(v as MonthKey | 'all')}>
            <SelectTrigger className="w-[160px] bg-white border-slate-200 shadow-sm font-semibold text-slate-700">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="font-semibold">Acumulado 2026/27</SelectItem>
              {MONTHS.map((m) => (
                <SelectItem key={m.key} value={m.key}>{m.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <SummaryCards 
        selectedMonth={selectedMonth} 
        atividadeFilter={isOutrasReceitasEventuais || isRateios ? undefined : atividade?.key}
        costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
        departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
        entryFilter={activityLevelEntryFilter}
        tipoFilter={
          isOutrasReceitasEventuais
            ? ['R']
            : isDespesasComVendas
              ? ['C', 'D']
            : resolvedTipoView === 'receitas'
              ? ['R']
              : resolvedTipoView === 'custos'
                ? ['C', 'D']
                : undefined
        }
      />

      <div className="grid gap-8">
        {isOutrasReceitasEventuais ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Abertura de Outras Receitas Eventuais</h2>
              <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                Entradas
              </div>
            </div>
            <AnalyticalTable
              selectedMonth={selectedMonth}
              costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
              departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
              entryFilter={combineEntryFilters(
                activityLevelEntryFilter,
                (entry) => isOutrasReceitasEventuaisCode(entry.codigo),
              )}
              title="Detalhamento de Outras Receitas Eventuais"
              subtitle="Contas 3.7.01.01"
              accentColor="emerald"
            />
          </div>
        ) : isRateios ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Abertura de Rateios</h2>
              <div className="text-[10px] font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-2 py-1 rounded border border-sky-100">
                Departamentos
              </div>
            </div>
            <AnalyticalTable
              selectedMonth={selectedMonth}
              costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
              departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
              entryFilter={activityLevelEntryFilter}
              title="Detalhamento de Rateios"
              subtitle="Departamentos selecionados"
              accentColor="sky"
            />
          </div>
        ) : resolvedTipoView === 'receitas' ? (
          // Mostrar apenas Receitas
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Abertura de Receitas</h2>
              <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                Entradas
              </div>
            </div>
            <AnalyticalTable 
              atividadeFilter={atividade.key}
              selectedMonth={selectedMonth}
              costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
              departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
              tipoFilter={['R']}
              entryFilter={combineEntryFilters(
                activityLevelEntryFilter,
                (entry) => !isOutrasReceitasEventuaisCode(entry.codigo),
              )}
              title="Detalhamento de Receitas"
              accentColor="emerald"
            />
            {!isOutrasReceitasEventuais && !isRateios && !isDespesasComVendas && (
              <>
                <AnalyticalTable
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                  tipoFilter={['D']}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => isReceitaDeductionEntry(entry),
                  )}
                  title="Deduções de Receita (Impostos)"
                  subtitle="Contas de abatimento e tributos sobre vendas"
                  accentColor="red"
                />

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
                    Receita Líquida da Atividade
                  </h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-emerald-100 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase text-slate-500">Receita Bruta</p>
                      <p className="text-[14px] font-semibold text-slate-800">{formatCurrency(receitaBrutaReal)}</p>
                    </div>
                    <div className="rounded-lg border border-rose-100 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase text-slate-500">Impostos / Deduções</p>
                      <p className="text-[14px] font-semibold text-rose-600">{formatCurrency(deducoesReceitaReal)}</p>
                    </div>
                    <div className="rounded-lg border border-emerald-200 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase text-slate-500">Receita Líquida</p>
                      <p className="text-[14px] font-bold text-emerald-700">{formatCurrency(receitaLiquida.real)}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : resolvedTipoView === 'custos' ? (
          // Mostrar apenas Custos/Despesas
          isDespesasComVendas ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Despesas com Vendas</h2>
                <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded border border-red-100">
                  Saídas
                </div>
              </div>
              <AnalyticalTable
                selectedMonth={selectedMonth}
                costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                tipoFilter={['C', 'D']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  (entry) => isDespesaComVendasCode(entry.codigo),
                )}
                title="Detalhamento de Despesas com Vendas"
                subtitle="Contas 3.4.02"
                accentColor="red"
              />
            </div>
          ) : isEncargos ? (
            <>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Despesas Financeiras</h2>
                  <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded border border-red-100">
                    Saídas
                  </div>
                </div>
                <AnalyticalTable 
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => isDespesaFinanceira(entry.codigo),
                  )}
                  title="Detalhamento de Despesas Financeiras"
                  subtitle="Contas 3.4.04.01"
                  accentColor="red"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Receitas Financeiras</h2>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                    Entradas
                  </div>
                </div>
                <AnalyticalTable 
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => isReceitaFinanceira(entry.codigo),
                  )}
                  title="Detalhamento de Receitas Financeiras"
                  subtitle="Contas 3.4.04.05"
                  accentColor="emerald"
                />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Abertura de Custos</h2>
                  <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
                    Saídas
                  </div>
                </div>
                <AnalyticalTable 
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                  tipoFilter={['C']}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    isAdmTrib ? (entry) => isNonRateioDepartment(entry.departamento) : undefined,
                  )}
                  title="Detalhamento de Custos"
                  accentColor="orange"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Abertura de Despesas</h2>
                  <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded border border-red-100">
                    Saídas
                  </div>
                </div>
                {isAdmTrib ? (
                  <div className="space-y-6">
                    <AnalyticalTable
                      atividadeFilter={atividade.key}
                      selectedMonth={selectedMonth}
                      costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                      departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                      tipoFilter={['D']}
                      entryFilter={combineEntryFilters(
                        activityLevelEntryFilter,
                        (entry) => isNonRateioDepartment(entry.departamento),
                        (entry) => !isTributariaEntry(entry),
                        (entry) => !isReceitaDeductionEntry(entry),
                      )}
                      title="Abertura de Despesas ADM"
                      subtitle="Despesas administrativas"
                      accentColor="red"
                    />
                    <AnalyticalTable
                      atividadeFilter={atividade.key}
                      selectedMonth={selectedMonth}
                      costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                      departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                      tipoFilter={['D']}
                      entryFilter={combineEntryFilters(
                        activityLevelEntryFilter,
                        (entry) => isNonRateioDepartment(entry.departamento),
                        (entry) => isTributariaEntry(entry),
                        (entry) => !isReceitaDeductionEntry(entry),
                      )}
                      title="Abertura de Despesas Tributárias"
                      subtitle="Despesas tributárias"
                      accentColor="red"
                    />
                  </div>
                ) : (
                  <AnalyticalTable 
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                    departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => !isReceitaDeductionEntry(entry),
                    )}
                    title="Detalhamento de Despesas"
                    accentColor="red"
                  />
                )}
              </div>
            </>
          )
        ) : (
          // Mostrar tudo (fallback)
          <>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Receitas</h2>
                <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                  Entradas
                </div>
              </div>
              <AnalyticalTable 
                atividadeFilter={atividade.key}
                selectedMonth={selectedMonth}
                costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                tipoFilter={['R']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  (entry) => !isOutrasReceitasEventuaisCode(entry.codigo),
                )}
                title="Detalhamento de Receitas"
                accentColor="emerald"
              />
              {!isOutrasReceitasEventuais && !isRateios && !isDespesasComVendas && (
                <>
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                    departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => isReceitaDeductionEntry(entry),
                    )}
                    title="Deduções de Receita (Impostos)"
                    subtitle="Contas de abatimento e tributos sobre vendas"
                    accentColor="red"
                  />

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4">
                    <h3 className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
                      Receita Líquida da Atividade
                    </h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-lg border border-emerald-100 bg-white px-3 py-2">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">Receita Bruta</p>
                        <p className="text-[14px] font-semibold text-slate-800">{formatCurrency(receitaBrutaReal)}</p>
                      </div>
                      <div className="rounded-lg border border-rose-100 bg-white px-3 py-2">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">Impostos / Deduções</p>
                        <p className="text-[14px] font-semibold text-rose-600">{formatCurrency(deducoesReceitaReal)}</p>
                      </div>
                      <div className="rounded-lg border border-emerald-200 bg-white px-3 py-2">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">Receita Líquida</p>
                        <p className="text-[14px] font-bold text-emerald-700">{formatCurrency(receitaLiquida.real)}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Custos</h2>
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
                  Saídas
                </div>
              </div>
              <AnalyticalTable 
                atividadeFilter={atividade.key}
                selectedMonth={selectedMonth}
                costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                tipoFilter={['C']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  isAdmTrib ? (entry) => isNonRateioDepartment(entry.departamento) : undefined,
                )}
                title="Detalhamento de Custos"
                accentColor="orange"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Despesas</h2>
                <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded border border-red-100">
                  Saídas
                </div>
              </div>
              {isAdmTrib ? (
                <div className="space-y-6">
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                    departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => isNonRateioDepartment(entry.departamento),
                      (entry) => !isTributariaEntry(entry),
                      (entry) => !isReceitaDeductionEntry(entry),
                    )}
                    title="Abertura de Despesas ADM"
                    subtitle="Despesas administrativas"
                    accentColor="red"
                  />
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                    departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => isNonRateioDepartment(entry.departamento),
                      (entry) => isTributariaEntry(entry),
                      (entry) => !isReceitaDeductionEntry(entry),
                    )}
                    title="Abertura de Despesas Tributárias"
                    subtitle="Despesas tributárias"
                    accentColor="red"
                  />
                </div>
              ) : (
                <AnalyticalTable 
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                  tipoFilter={['D']}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => !isReceitaDeductionEntry(entry),
                  )}
                  title="Detalhamento de Despesas"
                  accentColor="red"
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}