import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import AnalyticalTable from '@/components/dashboard/AnalyticalTable';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { MultiSelect } from '@/components/ui/multi-select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ATIVIDADES, MONTHS, type MonthKey } from '@/types/budget';
import type { AccountEntry } from '@/types/budget';
import {
  useBudgetStore,
  calculateEncargosTotals,
  getDefaultRealizadoFilterMonth,
  receitaLiquidaFromBrutaEDeducoes,
  isSyntheticOrcadoImportEntry,
} from '@/store/budgetStore';
import { isDespesaFinanceiraAccount, isReceitaFinanceiraAccount } from '@/data/encargosAccounts';
import { isDespesaComVendasCode } from '@/data/despesasComVendasAccounts';
import {
  isDespesasVendasAgricolaDepartment,
  isDespesasVendasPecuariaDepartment,
} from '@/data/despesasComVendasDepartments';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import { isRendasOperacionaisEntry } from '@/data/rendasOperacionaisAccounts';
import { ArrowRight, TrendingUp, TrendingDown, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import NotFound from './NotFound';
import {
  CONFINAMENTO_DIARIA_ORCADO,
  CONFINAMENTO_DIARIA_REALIZADO,
} from '@/data/confinamentoDiarias';
import { PASTO_PCABECA_ORCADO, PASTO_PCABECA_REALIZADO } from '@/data/pastoPcabeca';
import {
  SERINGAL_CUSTO_PKG_ORCADO,
  SERINGAL_CUSTO_PKG_REALIZADO,
} from '@/data/seringalCustoPpKg';
import {
  isReceitaPecuariaGeneticaDepartment,
  isReceitaPecuariaGeneticaReceitaEntry,
  isReceitaPecuariaGeneticaDeducaoEntry,
  isReceitaPecuariaGeneticaCustosEntry,
} from '@/data/receitaPecuariaGenetica';

const DESP_ADM_BUDGET_ADJUSTMENT = 216000;

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
const isConta4Entry = (entry: AccountEntry) => entry.codigo.trim().startsWith('4');
const isConta4AdministracaoEntry = (entry: AccountEntry) =>
  entry.codigo.trim().startsWith('4') && normalizeText(entry.departamento) === 'ADMINISTRACAO';

const isAgricolaFarmCultureDepartment = (departamento?: string) => {
  const normalized = normalizeText(departamento);
  if (!normalized.includes(' - ')) return false;
  const [farm, culture, ...rest] = normalized.split(' - ').map((part) => part.trim());
  return Boolean(farm) && Boolean(culture) && rest.length === 0;
};

const AGRICOLA_CULTURES = ['SOJA', 'MILHO', 'SORGO', 'GIRASSOL'] as const;
const AGRICOLA_RECEITAS_DEPT_EXCLUSIONS = new Set(AGRICOLA_CULTURES.map((culture) => normalizeText(culture)));

const resolveAgricolaCulture = (value?: string) => {
  const normalized = normalizeText(value);
  if (!normalized) return undefined;
  return AGRICOLA_CULTURES.find((culture) => normalized.includes(culture));
};

const getAgricolaCultureFromDepartment = (departamento?: string) => {
  const normalized = normalizeText(departamento);
  if (!normalized) return undefined;

  if (normalized.includes(' - ')) {
    const [, culture, ...rest] = normalized.split(' - ').map((part) => part.trim());
    if (culture && rest.length === 0) return resolveAgricolaCulture(culture);
  }

  return resolveAgricolaCulture(normalized);
};

const getAgricolaCultureFromDescription = (descricao?: string) => {
  const normalized = normalizeText(descricao);
  if (!normalized) return undefined;
  return resolveAgricolaCulture(normalized);
};

const shouldHideAgricolaReceitaDepartment = (
  departamento: string,
  isAgricola: boolean,
  resolvedTipoView: string
) =>
  isAgricola &&
  resolvedTipoView === 'receitas' &&
  AGRICOLA_RECEITAS_DEPT_EXCLUSIONS.has(normalizeText(departamento));

const getAgricolaCultureFromOrcado = (entry: AccountEntry) => {
  const syntheticScope =
    entry.id.includes('::ORCADO::') ? entry.id.split('::ORCADO::')[1]?.split('::')[0] : undefined;
  const fromSyntheticScope = resolveAgricolaCulture(syntheticScope);
  if (fromSyntheticScope) return fromSyntheticScope;

  const fromDepartment = getAgricolaCultureFromDepartment(entry.departamento);
  if (fromDepartment) return fromDepartment;

  return getAgricolaCultureFromDescription(entry.descricao);
};

const getAgricolaCultureFromRealizado = (entry: AccountEntry) => {
  const fromDepartment = getAgricolaCultureFromDepartment(entry.departamento);
  if (fromDepartment) return fromDepartment;

  return getAgricolaCultureFromDescription(entry.descricao);
};

type MonthSelection = MonthKey[] | 'all';

const isAllMonthsSelection = (selection: MonthSelection): selection is 'all' =>
  selection === 'all' || selection.length === 0;

const hasOrcadoValueForMonth = (entry: AccountEntry, selectedMonth: MonthSelection) => {
  if (isAllMonthsSelection(selectedMonth)) {
    return Object.values(entry.orcado).some((value) => value !== 0);
  }
  return selectedMonth.some((m) => (entry.orcado[m] || 0) !== 0);
};

const hasRealizadoValueForMonth = (entry: AccountEntry, selectedMonth: MonthSelection) => {
  if (isAllMonthsSelection(selectedMonth)) {
    return Object.values(entry.realizado).some((value) => value !== 0);
  }
  return selectedMonth.some((m) => (entry.realizado[m] || 0) !== 0);
};

const matchesAgricolaCulture = (
  entry: AccountEntry,
  culture: string,
  selectedMonth: MonthSelection
) => {
  const normalizedCulture = normalizeText(culture);
  const orcadoCulture = getAgricolaCultureFromOrcado(entry);
  const realizadoCulture = getAgricolaCultureFromRealizado(entry);
  const hasRealizado = hasRealizadoValueForMonth(entry, selectedMonth);
  const hasOrcado = hasOrcadoValueForMonth(entry, selectedMonth);

  // Quando existe realizado no período, a cultura deve ser guiada pela DESCRICAO_CONTABIL.
  // Evita vazar realizado de uma cultura para outra por causa do orçado na mesma linha.
  if (hasRealizado) {
    return normalizeText(realizadoCulture) === normalizedCulture;
  }

  if (hasOrcado) {
    return normalizeText(orcadoCulture) === normalizedCulture;
  }

  return false;
};

const AGRICOLA_UNIDADE_RECEP_DEPARTMENT = 'UNIDADE RECEPÇÃO DE GRAOS';
const AGRICOLA_UNIDADE_RECEP_COST_CENTER = 'UNIDADE DE RECEPCAO DE GRAOS';

const isAgricolaUnidadeRecepConta4Entry = (entry: AccountEntry) => {
  if (!entry.codigo.trim().startsWith('4')) return false;
  const dept = normalizeText(entry.departamento);
  const cc = normalizeText(entry.centroCusto);
  return (
    dept === normalizeText(AGRICOLA_UNIDADE_RECEP_DEPARTMENT) ||
    cc === normalizeText(AGRICOLA_UNIDADE_RECEP_COST_CENTER)
  );
};

const CONFINAMENTO_COST_CENTERS = [
  'RATEIO CONFINAMENTO',
  'CONFINAMENTO - TRANSPORTE DE GADO',
  'CONFINAMENTO - TRANSPORTE DE INSUMOS',
  'MANUTENCAO SISTEMA IRRIGACAO - CUSTO CONFINAMENTO',
  'RECRIA GOTEJO CONFINAMENTO',
] as const;

const isConfinamentoEntry = (entry: AccountEntry) => {
  const dept = normalizeText(entry.departamento);
  const cc = normalizeText(entry.centroCusto);
  return (
    dept === 'CONFINAMENTO' ||
    CONFINAMENTO_COST_CENTERS.some((allowed) => normalizeText(allowed) === cc)
  );
};

const isPecuariaDepartmentOption = (departamento?: string) => {
  const normalized = normalizeText(departamento);
  if (!normalized) return false;
  return (
    normalized === 'CONFINAMENTO' ||
    normalized === 'CONFINAMENTO - TRANSPORTE DE GADO' ||
    normalized === 'CODORA' ||
    normalized === 'CODORA PECUARIA' ||
    /^[^-]+ - PECUARIA$/.test(normalized)
  );
};

const isPecuariaGeneticaDepartmentOption = (departamento?: string) =>
  isReceitaPecuariaGeneticaDepartment(departamento);

const isPecuariaGeneticaReceitaDepartmentOption = (
  departamento: string,
  entries: AccountEntry[]
) =>
  isPecuariaGeneticaDepartmentOption(departamento) ||
  entries.some(
    (entry) => entry.departamento === departamento && isReceitaPecuariaGeneticaReceitaEntry(entry)
  );

const formatConfinamentoDepartmentLabel = (departamento: string) =>
  departamento.replace(/\s*-\s*PECUARIA$/i, '').trim();

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

const isAllowedCentroCustoForCustos = (atividadeKey: string | undefined, centroCusto?: string) => {
  if (!atividadeKey) return true;
  const allowed = CUSTOS_ALLOWED_CC_BY_ACTIVITY[atividadeKey];
  if (!allowed) return true;
  const normalizedCC = normalizeText(centroCusto);
  return allowed.some((item) => normalizeText(item) === normalizedCC);
};

const isSyntheticOrcadoEntry = (entry: AccountEntry) => isSyntheticOrcadoImportEntry(entry);
const isRateioDeCustosGroup = (entry: AccountEntry) =>
  normalizeText(entry.grupoContabilN9).includes('4.2.01.02-RATEIO DE CUSTOS');

const isAllowedEntryForCustos = (atividadeKey: string | undefined, entry: AccountEntry) =>
  isSyntheticOrcadoEntry(entry) ||
  isRateioDeCustosGroup(entry) ||
  isAllowedCentroCustoForCustos(atividadeKey, entry.centroCusto);

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
const MARKETING_INTERNO_CC = 'MARKETING INTERNO';
const isNotMarketingInternoCostCenter = (centroCusto?: string) =>
  normalizeText(centroCusto) !== MARKETING_INTERNO_CC;
const DESPESAS_RAILENE_COST_CENTERS = [
  'GOVERNANCIA CORPORATIVA',
  'RATEIO DESENVOLVIMENTO HUMANO',
  'MARKETING INTERNO',
  'ORGANIZACAO PREDIAL',
  'PESSOAL',
] as const;
const isDespesasRaileneCostCenter = (centroCusto?: string) =>
  DESPESAS_RAILENE_COST_CENTERS.some((item) => normalizeText(item) === normalizeText(centroCusto));
const isDespesasLaizaCostCenter = (centroCusto?: string) => !isDespesasRaileneCostCenter(centroCusto);

const combineEntryFilters = (
  ...filters: Array<((entry: AccountEntry) => boolean) | undefined>
) => {
  const activeFilters = filters.filter(Boolean) as Array<(entry: AccountEntry) => boolean>;
  if (activeFilters.length === 0) return undefined;
  return (entry: AccountEntry) => activeFilters.every((filter) => filter(entry));
};

const ENCARGOS_SUMMARY_TIPO_FILTER: Array<'R' | 'C' | 'D'> = ['R', 'C', 'D'];
const hasEntryValueForMonth = (entry: AccountEntry, selectedMonth: MonthSelection) => {
  if (isAllMonthsSelection(selectedMonth)) {
    const totalOrcado = Object.values(entry.orcado).reduce((sum, value) => sum + value, 0);
    const totalRealizado = Object.values(entry.realizado).reduce((sum, value) => sum + value, 0);
    return totalOrcado !== 0 || totalRealizado !== 0;
  }

  return selectedMonth.some(
    (m) => (entry.orcado[m] || 0) !== 0 || (entry.realizado[m] || 0) !== 0
  );
};

export default function ActivityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const tipoView = searchParams.get('tipo') || 'todos';
  const subview = searchParams.get('subview');
  const returnTo = searchParams.get('returnTo');
  const navigate = useNavigate();
  const initialDepartment = searchParams.get('departamento');
  const accounts = useBudgetStore((s) => s.accounts);
  const [selectedMonths, setSelectedMonths] = useState<MonthKey[]>(() => {
    const s = useBudgetStore.getState();
    const fallback = getDefaultRealizadoFilterMonth(s.accounts, s.importedRealizadoBatches);
    return fallback ? [fallback] : [];
  });
  const [selectedCCs, setSelectedCCs] = useState<string[]>([]);
  const [selectedDepts, setSelectedDepts] = useState<string[]>(
    initialDepartment ? [initialDepartment] : []
  );
  const [selectedCulture, setSelectedCulture] = useState<string | 'all'>('all');
  const selectedMonth: MonthKey[] = selectedMonths;
  const isMonthAll = selectedMonths.length === 0;
  
  const isOutrasReceitasEventuais = id === 'OUTRAS_RECEITAS_EVENTUAIS';
  const isDespesasComVendas = id === 'DESPESAS_COM_VENDAS';
  const isRateios = id === 'RATEIOS';
  const atividade = ATIVIDADES.find(a => a.key === id);
  const isAdmTrib = atividade?.key === 'DESP_ADM_TRIB';
  const isEncargos = atividade?.key === 'ENCARGOS';
  const isAgricola = atividade?.key === 'AGRICOLA';
  const isPecuaria = atividade?.key === 'PECUARIA';
  const isSeringal = atividade?.key === 'SERINGAL';
  const isAdmTribLaizaSubview = isAdmTrib && subview === 'laiza';
  const isAdmTribRaileneSubview = isAdmTrib && subview === 'railene';
  const isAgricolaUnidadeRecepSubview = isAgricola && subview === 'unidade-recep';
  const isAgricolaGeralSubview = isAgricola && subview === 'geral';
  const isDespesasComVendasPecuariaSubview = isDespesasComVendas && subview === 'pecuaria';
  const isDespesasComVendasAgricolaSubview = isDespesasComVendas && subview === 'agricola';
  const isPecuariaReceitasGeneticaSubview = isPecuaria && subview === 'genetica';
  const isPecuariaCustosGeneticaSubview = isPecuaria && subview === 'custos-genetica';
  const resolvedTipoView = isDespesasComVendas ? 'custos' : tipoView;
  const shouldApplyCostCenterFilter = resolvedTipoView !== 'receitas';
  const activeCostCenterFilter: string[] | undefined =
    shouldApplyCostCenterFilter && selectedCCs.length > 0 ? selectedCCs : undefined;
  const activeDepartmentFilter: string[] | undefined =
    selectedDepts.length > 0 ? selectedDepts : undefined;
  const shouldApplyCultureFilter = isAgricola;
  const activeCultureFilter =
    shouldApplyCultureFilter && selectedCulture !== 'all' ? selectedCulture : undefined;
  const cultureEntryFilter = activeCultureFilter
    ? (entry: AccountEntry) =>
      matchesAgricolaCulture(entry, activeCultureFilter, selectedMonth)
    : undefined;
  const buildActivityPath = (activityKey: string, options?: { subview?: string }) => {
    const params = new URLSearchParams();
    params.set('tipo', tipoView);

    if (options?.subview) {
      params.set('subview', options.subview);
    }

    if (returnTo) {
      params.set('returnTo', returnTo);
    }

    return `/atividade/${activityKey}?${params.toString()}`;
  };
  const atividadeLabel = isOutrasReceitasEventuais
    ? 'Outras Receitas Eventuais'
    : isDespesasComVendas && subview === 'pecuaria'
      ? 'Desp. com Vendas Pecuária'
      : isDespesasComVendas && subview === 'agricola'
        ? 'Desp. com Vendas Agrícola'
        : isDespesasComVendas
      ? 'Despesas com Vendas'
      : isRateios
        ? 'Rateios'
        : isPecuaria && subview === 'genetica'
          ? 'Pecuária — Receitas Genética'
          : isPecuaria && subview === 'custos-genetica'
            ? 'Pecuária — Custos Genética'
            : isPecuaria && subview === 'pasto'
          ? 'Pecuária — Pasto'
          : isPecuaria && subview === 'confinamento'
            ? 'Pecuária — Confinamento'
            : isAdmTrib && subview === 'laiza'
              ? 'Desp. Adm. e Tributárias — DESPESAS - GERENCIA FINANCEIRO'
              : isAdmTrib && subview === 'railene'
                ? 'Desp. Adm. e Tributárias — DESPESAS - GERENCIA RH'
            : isAgricola && subview === 'geral'
              ? 'Agrícola'
              : isAgricola && subview === 'unidade-recep'
                ? 'AGRICOLA / UNIDADE RECEP'
            : atividade?.label;
  const baseActivityFilter = isOutrasReceitasEventuais
    ? undefined
    : isRateios
      ? (entry: AccountEntry) =>
        (isRateioDepartment(entry.departamento) || isConta4AdministracaoEntry(entry)) &&
        !isOutrasReceitasEventuaisCode(entry.codigo)
      : (entry: AccountEntry) =>
        !isOutrasReceitasEventuaisCode(entry.codigo) &&
        !isRendasOperacionaisEntry(entry) &&
        (isDespesasComVendas || !isDespesaComVendasCode(entry.codigo));

  const pecuariaSubFilter = resolvedTipoView === 'custos' && isPecuaria && subview === 'pasto'
    ? (entry: AccountEntry) => !isConfinamentoEntry(entry)
    : resolvedTipoView === 'custos' && isPecuaria && subview === 'confinamento'
      ? isConfinamentoEntry
      : undefined;

  const agricolaSubFilter = resolvedTipoView === 'custos' && isAgricola && subview === 'geral'
    ? (entry: AccountEntry) => !isAgricolaUnidadeRecepConta4Entry(entry)
    : resolvedTipoView === 'custos' && isAgricola && subview === 'unidade-recep'
      ? isAgricolaUnidadeRecepConta4Entry
      : undefined;

  const admTribSubFilter = resolvedTipoView === 'custos' && isAdmTrib && subview === 'laiza'
    ? (entry: AccountEntry) => isDespesasLaizaCostCenter(entry.centroCusto)
    : resolvedTipoView === 'custos' && isAdmTrib && subview === 'railene'
      ? (entry: AccountEntry) => isDespesasRaileneCostCenter(entry.centroCusto)
      : undefined;
  const despesasComVendasSubFilter =
    resolvedTipoView === 'custos' && isDespesasComVendas && subview === 'pecuaria'
      ? (entry: AccountEntry) => isDespesasVendasPecuariaDepartment(entry.departamento)
      : resolvedTipoView === 'custos' && isDespesasComVendas && subview === 'agricola'
        ? (entry: AccountEntry) => isDespesasVendasAgricolaDepartment(entry.departamento)
        : undefined;

  const activityLevelEntryFilterBase = combineEntryFilters(
    baseActivityFilter,
    pecuariaSubFilter,
    agricolaSubFilter,
    admTribSubFilter,
    despesasComVendasSubFilter
  );
  const pecuariaReceitasScopeFilter =
    isPecuaria && resolvedTipoView === 'receitas'
      ? isPecuariaReceitasGeneticaSubview
        ? (entry: AccountEntry) =>
            entry.tipo === 'R'
              ? isReceitaPecuariaGeneticaReceitaEntry(entry)
              : isReceitaPecuariaGeneticaDeducaoEntry(entry)
        : (entry: AccountEntry) =>
            entry.tipo === 'R'
              ? !isReceitaPecuariaGeneticaReceitaEntry(entry)
              : !isReceitaPecuariaGeneticaDeducaoEntry(entry)
      : undefined;
  const pecuariaCustosScopeFilter =
    isPecuaria && resolvedTipoView === 'custos'
      ? isPecuariaCustosGeneticaSubview
        ? (entry: AccountEntry) => isReceitaPecuariaGeneticaCustosEntry(entry)
        : (entry: AccountEntry) => !isReceitaPecuariaGeneticaCustosEntry(entry)
      : undefined;
  const activityLevelEntryFilter = combineEntryFilters(
    activityLevelEntryFilterBase,
    cultureEntryFilter,
    pecuariaReceitasScopeFilter,
    pecuariaCustosScopeFilter
  );

  const isTributariaEntry = (entry: {
    grupoContabil?: string;
    grupoContabilN9?: string;
  }) => {
    const normalizedGrupo = normalizeText(entry.grupoContabil);
    const normalizedGrupoN9 = normalizeText(entry.grupoContabilN9);

    return (
      normalizedGrupo.startsWith('3.4.03.01') ||
      normalizedGrupo.startsWith('3.4.03.02') ||
      normalizedGrupoN9.startsWith('3.4.03.01') ||
      normalizedGrupoN9.startsWith('3.4.03.02')
    );
  };
  
  const filteredLeafAccounts = useMemo(
    () =>
      accounts.filter(
        (entry) =>
          entry.nivel === 5 &&
          (!atividade?.key || entry.atividade === atividade.key) &&
          (!activeCostCenterFilter ||
            (entry.centroCusto !== undefined &&
              activeCostCenterFilter.includes(entry.centroCusto))) &&
          (!activeDepartmentFilter ||
            (entry.departamento !== undefined &&
              activeDepartmentFilter.includes(entry.departamento))) &&
          (!activeCultureFilter ||
            matchesAgricolaCulture(entry, activeCultureFilter, selectedMonth)) &&
          (!activityLevelEntryFilter || activityLevelEntryFilter(entry))
      ),
    [
      accounts,
      atividade?.key,
      activeCostCenterFilter,
      activeDepartmentFilter,
      activeCultureFilter,
      activityLevelEntryFilter,
      selectedMonth,
    ]
  );

  const sumEntries = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
    entries.reduce((sum, entry) => {
      if (isMonthAll) {
        return sum + Object.values(entry[field]).reduce((acc, value) => acc + value, 0);
      }
      return sum + selectedMonths.reduce((acc, m) => acc + (entry[field][m] || 0), 0);
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
    orc: receitaLiquidaFromBrutaEDeducoes(receitaBrutaOrc, deducoesReceitaOrc),
    real: receitaLiquidaFromBrutaEDeducoes(receitaBrutaReal, deducoesReceitaReal),
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);

  const fmtDecimal = (v: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(v);

  /** Mesmo critério da abertura analítica: um único mês no filtro; acumulado ou vários meses → “-”. */
  const pecuariaCardMetricMonth: MonthKey | null =
    !isMonthAll && selectedMonths.length === 1 ? selectedMonths[0] : null;

  const fmtPecuariaMetricCell = (v: number | null) =>
    v != null
      ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(v)
      : null;

  const pecuariaSummaryCardExtras = useMemo(() => {
    if (pecuariaCardMetricMonth == null) {
      return {
        pasto: { orcExtra: null as number | null, realExtra: null as number | null },
        confinamento: { orcExtra: null as number | null, realExtra: null as number | null },
      };
    }
    const m = pecuariaCardMetricMonth;
    return {
      pasto: {
        orcExtra: PASTO_PCABECA_ORCADO[m] ?? null,
        realExtra: PASTO_PCABECA_REALIZADO[m] ?? null,
      },
      confinamento: {
        orcExtra: CONFINAMENTO_DIARIA_ORCADO[m] ?? null,
        realExtra: CONFINAMENTO_DIARIA_REALIZADO[m] ?? null,
      },
    };
  }, [pecuariaCardMetricMonth]);

  const seringalSummaryCardExtras = useMemo(() => {
    if (pecuariaCardMetricMonth == null) {
      return { orcExtra: null as number | null, realExtra: null as number | null };
    }
    const m = pecuariaCardMetricMonth;
    return {
      orcExtra: SERINGAL_CUSTO_PKG_ORCADO[m] ?? null,
      realExtra: SERINGAL_CUSTO_PKG_REALIZADO[m] ?? null,
    };
  }, [pecuariaCardMetricMonth]);

  const activityHubSummary = useMemo(() => {
    if (!atividade?.key) return null;

    const sum = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
      entries.reduce((acc, entry) => {
        if (isMonthAll) {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + selectedMonths.reduce((s, m) => s + (entry[field][m] || 0), 0);
      }, 0);

    const baseLeaves = accounts.filter(
      (a) =>
        a.nivel === 5 &&
        a.atividade === atividade.key &&
        !isOutrasReceitasEventuaisCode(a.codigo) &&
        !isRendasOperacionaisEntry(a) &&
        !isDespesaComVendasCode(a.codigo)
    );

    // Receitas (R) — exclui deduções tributárias (vão como redutor) e contas de "outras receitas"
    const receitasEntries = baseLeaves.filter((a) => a.tipo === 'R');
    const receitasGeneticaEntries =
      atividade.key === 'PECUARIA'
        ? receitasEntries.filter((a) => isReceitaPecuariaGeneticaReceitaEntry(a))
        : [];
    const receitasRegularEntries =
      atividade.key === 'PECUARIA'
        ? receitasEntries.filter((a) => !isReceitaPecuariaGeneticaReceitaEntry(a))
        : receitasEntries;
    const deducoesEntries = baseLeaves.filter(
      (a) => a.tipo === 'D' && isReceitaDeductionEntry(a)
    );
    const deducoesGeneticaEntries =
      atividade.key === 'PECUARIA'
        ? deducoesEntries.filter((a) => isReceitaPecuariaGeneticaDeducaoEntry(a))
        : [];
    const deducoesRegularEntries =
      atividade.key === 'PECUARIA'
        ? deducoesEntries.filter((a) => !isReceitaPecuariaGeneticaDeducaoEntry(a))
        : deducoesEntries;

    // Custos/Despesas — para Encargos usa filtro financeiro; para AdmTrib remove rateio/conta4/marketing
    let custosEntries: AccountEntry[];
    if (isEncargos) {
      custosEntries = baseLeaves.filter(
        (a) => isDespesaFinanceiraAccount(a) || isReceitaFinanceiraAccount(a)
      );
    } else if (isAdmTrib) {
      custosEntries = baseLeaves.filter(
        (a) =>
          (a.tipo === 'C' || a.tipo === 'D') &&
          isNonRateioDepartment(a.departamento) &&
          !isConta4Entry(a) &&
          isNotMarketingInternoCostCenter(a.centroCusto)
      );
    } else if (isAgricola) {
      custosEntries = baseLeaves.filter(
        (a) =>
          (a.tipo === 'C' || a.tipo === 'D') &&
          !isReceitaDeductionEntry(a) &&
          (a.tipo !== 'C' || isAllowedEntryForCustos('AGRICOLA', a)) &&
          (a.tipo !== 'C' ||
            isAgricolaFarmCultureDepartment(a.departamento) ||
            isAgricolaUnidadeRecepConta4Entry(a))
      );
    } else {
      custosEntries = baseLeaves.filter(
        (a) =>
          (a.tipo === 'C' || a.tipo === 'D') &&
          !isReceitaDeductionEntry(a) &&
          (a.tipo !== 'C' || isAllowedEntryForCustos(atividade.key, a)) &&
          (atividade.key !== 'PECUARIA' || !isConta4AdministracaoEntry(a))
      );
    }

    const recOrc = isAdmTrib
      ? 0
      : receitaLiquidaFromBrutaEDeducoes(
          sum(receitasRegularEntries, 'orcado'),
          sum(deducoesRegularEntries, 'orcado')
        );
    const recReal = isAdmTrib
      ? 0
      : receitaLiquidaFromBrutaEDeducoes(
          sum(receitasRegularEntries, 'realizado'),
          sum(deducoesRegularEntries, 'realizado')
        );
    const recGeneticaOrc =
      atividade.key === 'PECUARIA'
        ? receitaLiquidaFromBrutaEDeducoes(
            sum(receitasGeneticaEntries, 'orcado'),
            sum(deducoesGeneticaEntries, 'orcado')
          )
        : 0;
    const recGeneticaReal =
      atividade.key === 'PECUARIA'
        ? receitaLiquidaFromBrutaEDeducoes(
            sum(receitasGeneticaEntries, 'realizado'),
            sum(deducoesGeneticaEntries, 'realizado')
          )
        : 0;
    const custosGeneticaEntries =
      atividade.key === 'PECUARIA'
        ? custosEntries.filter((a) => isReceitaPecuariaGeneticaCustosEntry(a))
        : [];
    const custosRegularEntries =
      atividade.key === 'PECUARIA'
        ? custosEntries.filter((a) => !isReceitaPecuariaGeneticaCustosEntry(a))
        : custosEntries;
    const rawCusOrc = sum(custosRegularEntries, 'orcado');
    const cusReal = sum(custosRegularEntries, 'realizado');
    const cusGeneticaOrc = sum(custosGeneticaEntries, 'orcado');
    const cusGeneticaReal = sum(custosGeneticaEntries, 'realizado');
    const cusOrc =
      isAdmTrib && isMonthAll
        ? rawCusOrc - DESP_ADM_BUDGET_ADJUSTMENT
        : rawCusOrc;

    return {
      receitas: { orc: recOrc, real: recReal },
      receitasGenetica: { orc: recGeneticaOrc, real: recGeneticaReal },
      custos: { orc: cusOrc, real: cusReal },
      custosGenetica: { orc: cusGeneticaOrc, real: cusGeneticaReal },
      total: isAdmTrib
        ? { orc: cusOrc, real: cusReal }
        : {
            orc: recOrc + recGeneticaOrc - cusOrc - cusGeneticaOrc,
            real: recReal + recGeneticaReal - cusReal - cusGeneticaReal,
          },
    };
  }, [accounts, atividade?.key, selectedMonth, isEncargos, isAdmTrib, isAgricola]);

  const pecuariaSummary = useMemo(() => {
    if (!isPecuaria) return null;

    const pecuariaLeaves = accounts.filter(
      (a) =>
        a.nivel === 5 &&
        a.atividade === 'PECUARIA' &&
        (a.tipo === 'C' || a.tipo === 'D') &&
        !isConta4AdministracaoEntry(a) &&
        !isOutrasReceitasEventuaisCode(a.codigo) &&
        !isRendasOperacionaisEntry(a) &&
        !isDespesaComVendasCode(a.codigo) &&
        !isReceitaDeductionEntry(a) &&
        !isReceitaPecuariaGeneticaCustosEntry(a) &&
        (a.tipo !== 'C' || isAllowedEntryForCustos('PECUARIA', a))
    );

    const pastoEntries = pecuariaLeaves.filter((a) => !isConfinamentoEntry(a));
    const confinamentoEntries = pecuariaLeaves.filter((a) => isConfinamentoEntry(a));

    const sum = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
      entries.reduce((acc, entry) => {
        if (isMonthAll) {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + selectedMonths.reduce((s, m) => s + (entry[field][m] || 0), 0);
      }, 0);

    const pastoOrc = sum(pastoEntries, 'orcado');
    const pastoReal = sum(pastoEntries, 'realizado');
    const confOrc = sum(confinamentoEntries, 'orcado');
    const confReal = sum(confinamentoEntries, 'realizado');

    return {
      pasto: { orc: pastoOrc, real: pastoReal },
      confinamento: { orc: confOrc, real: confReal },
      total: { orc: pastoOrc + confOrc, real: pastoReal + confReal },
    };
  }, [accounts, isPecuaria, selectedMonth]);

  const admTribSummary = useMemo(() => {
    if (!isAdmTrib) return null;

    const admBaseLeaves = accounts.filter(
      (a) =>
        a.nivel === 5 &&
        a.atividade === 'DESP_ADM_TRIB' &&
        a.tipo === 'D' &&
        isNonRateioDepartment(a.departamento) &&
        !isConta4Entry(a) &&
        !isOutrasReceitasEventuaisCode(a.codigo) &&
        !isRendasOperacionaisEntry(a) &&
        !isDespesaComVendasCode(a.codigo)
    );

    const admLeaves = admBaseLeaves.filter(
      (a) => !isTributariaEntry(a) && !isReceitaDeductionEntry(a)
    );
    const tributariaEntries = admBaseLeaves.filter((a) => isTributariaEntry(a));
    const laizaEntries = admLeaves.filter((a) => isDespesasLaizaCostCenter(a.centroCusto));
    const raileneEntries = admLeaves.filter((a) => isDespesasRaileneCostCenter(a.centroCusto));

    const sum = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
      entries.reduce((acc, entry) => {
        if (isMonthAll) {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + selectedMonths.reduce((s, m) => s + (entry[field][m] || 0), 0);
      }, 0);

    const laizaOrc = sum(laizaEntries, 'orcado');
    const laizaReal = sum(laizaEntries, 'realizado');
    const raileneOrc = sum(raileneEntries, 'orcado');
    const raileneReal = sum(raileneEntries, 'realizado');
    const tributariaOrc = sum(tributariaEntries, 'orcado');
    const tributariaReal = sum(tributariaEntries, 'realizado');

    const totalOrcRaw = laizaOrc + raileneOrc + tributariaOrc;
    const totalRealRaw = laizaReal + raileneReal + tributariaReal;
    const totalOrc =
      isMonthAll
        ? totalOrcRaw - DESP_ADM_BUDGET_ADJUSTMENT
        : totalOrcRaw;
    const totalReal = totalRealRaw;

    return {
      laiza: { orc: laizaOrc, real: laizaReal },
      railene: { orc: raileneOrc, real: raileneReal },
      total: {
        orc: totalOrc,
        real: totalReal,
      },
    };
  }, [accounts, isAdmTrib, selectedMonth]);

  const agricolaSummary = useMemo(() => {
    if (!isAgricola) return null;

    const agricolaLeaves = accounts.filter(
      (a) =>
        a.nivel === 5 &&
        a.atividade === 'AGRICOLA' &&
        (a.tipo === 'C' || a.tipo === 'D') &&
        !isOutrasReceitasEventuaisCode(a.codigo) &&
        !isRendasOperacionaisEntry(a) &&
        !isDespesaComVendasCode(a.codigo) &&
        !isReceitaDeductionEntry(a) &&
        (a.tipo !== 'C' ||
          isAllowedEntryForCustos('AGRICOLA', a) ||
          isAgricolaUnidadeRecepConta4Entry(a)) &&
        (a.tipo !== 'C' ||
          isAgricolaFarmCultureDepartment(a.departamento) ||
          isAgricolaUnidadeRecepConta4Entry(a))
    );

    const unidadeRecepEntries = agricolaLeaves.filter((a) => isAgricolaUnidadeRecepConta4Entry(a));
    const agricolaGeralEntries = agricolaLeaves.filter((a) => !isAgricolaUnidadeRecepConta4Entry(a));

    const sum = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
      entries.reduce((acc, entry) => {
        if (isMonthAll) {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + selectedMonths.reduce((s, m) => s + (entry[field][m] || 0), 0);
      }, 0);

    const geralOrc = sum(agricolaGeralEntries, 'orcado');
    const geralReal = sum(agricolaGeralEntries, 'realizado');
    const recepOrc = sum(unidadeRecepEntries, 'orcado');
    const recepReal = sum(unidadeRecepEntries, 'realizado');

    return {
      geral: { orc: geralOrc, real: geralReal },
      unidadeRecep: { orc: recepOrc, real: recepReal },
      total: { orc: geralOrc + recepOrc, real: geralReal + recepReal },
    };
  }, [accounts, isAgricola, selectedMonth]);

  const despesasComVendasSummary = useMemo(() => {
    if (!isDespesasComVendas) return null;

    const vendasLeaves = accounts.filter(
      (a) => a.nivel === 5 && (a.tipo === 'C' || a.tipo === 'D') && isDespesaComVendasCode(a.codigo)
    );

    const pecuariaEntries = vendasLeaves.filter((a) =>
      isDespesasVendasPecuariaDepartment(a.departamento)
    );
    const agricolaEntries = vendasLeaves.filter((a) =>
      isDespesasVendasAgricolaDepartment(a.departamento)
    );

    const sum = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
      entries.reduce((acc, entry) => {
        if (isMonthAll) {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + selectedMonths.reduce((s, m) => s + (entry[field][m] || 0), 0);
      }, 0);

    const pecuariaOrc = sum(pecuariaEntries, 'orcado');
    const pecuariaReal = sum(pecuariaEntries, 'realizado');
    const agricolaOrc = sum(agricolaEntries, 'orcado');
    const agricolaReal = sum(agricolaEntries, 'realizado');

    return {
      pecuaria: { orc: pecuariaOrc, real: pecuariaReal },
      agricola: { orc: agricolaOrc, real: agricolaReal },
      total: { orc: pecuariaOrc + agricolaOrc, real: pecuariaReal + agricolaReal },
    };
  }, [accounts, isDespesasComVendas, selectedMonth]);

  const renderSummaryCard = (
    title: string,
    data: { orc: number; real: number },
    options?: {
      isMain?: boolean;
      onClick?: () => void;
      accentColor?: string;
      /** Colunas extras alinhadas à abertura (P/Cabeça ou Diária), só preenchidas com um mês no filtro. */
      pecuariaMetrics?: {
        kind: 'pasto' | 'confinamento';
        orcExtra: number | null;
        realExtra: number | null;
      };
      /** Hub Seringal: Custo P/KG O/R (CustoKg.xlsx), um mês no filtro — não somar meses. */
      seringalPkgMetrics?: { orcExtra: number | null; realExtra: number | null };
      /** Exibe traços no lugar dos valores (card reservado para dados futuros). */
      emptyValues?: boolean;
    }
  ) => {
    const {
      isMain = false,
      onClick,
      accentColor = 'orange',
      pecuariaMetrics,
      seringalPkgMetrics,
      emptyValues = false,
    } = options || {};
    const isRevenueStyle = accentColor === 'emerald';
    const difference = isRevenueStyle
      ? data.real - data.orc
      : Math.abs(data.orc) - Math.abs(data.real);
    const diffPctVsOrc =
      Math.abs(data.orc) < 1e-9 ? null : (difference / Math.abs(data.orc)) * 100;
    const isPositiveDifference = difference >= 0;
    const isEmerald = accentColor === 'emerald';
    const bgColor = isEmerald ? '' : 'bg-dashboard-orange';
    const hoverBorder = isEmerald
      ? 'hover:border-dashboard-green/30'
      : 'hover:border-dashboard-orange/35';
    const iconColor = isEmerald ? '' : 'text-dashboard-orange';
    const iconHover = isEmerald
      ? 'group-hover:bg-dashboard-green/10'
      : 'group-hover:bg-dashboard-orange/15';

    const hubExtraColumns = pecuariaMetrics
      ? pecuariaMetrics.kind === 'confinamento'
        ? {
            labelOrc: 'Diária O',
            labelReal: 'Diária R',
            orcExtra: pecuariaMetrics.orcExtra,
            realExtra: pecuariaMetrics.realExtra,
          }
        : {
            labelOrc: 'P/Cabeça O',
            labelReal: 'P/Cabeça R',
            orcExtra: pecuariaMetrics.orcExtra,
            realExtra: pecuariaMetrics.realExtra,
          }
      : seringalPkgMetrics
        ? {
            labelOrc: 'Custo P/KG O',
            labelReal: 'Custo P/KG R',
            orcExtra: seringalPkgMetrics.orcExtra,
            realExtra: seringalPkgMetrics.realExtra,
          }
        : null;
    /** Colunas centrais (P/Cabeça, Diária, Custo P/KG) mais estreitas que Orçado/Realizado/Diferença. */
    const gridColsClass = hubExtraColumns
      ? 'grid-cols-[minmax(0,1.05fr)_minmax(4.75rem,0.34fr)_minmax(0,1.05fr)_minmax(4.75rem,0.34fr)_minmax(7.75rem,0.95fr)]'
      : 'grid-cols-3';

    return (
      <div
        onClick={onClick}
        className={cn(
          'border overflow-hidden rounded-2xl transition-all duration-300 bg-white',
          isMain
            ? 'border-primary/20 shadow-xl ring-1 ring-primary/5'
            : cn('border-slate-100 shadow-sm hover:shadow-md group', hoverBorder),
          onClick && 'cursor-pointer active:scale-[0.99]'
        )}
      >
        <div
          className={cn(
            'py-4 px-5 flex items-center justify-between text-white',
            isEmerald ? 'bg-dashboard-green' : bgColor
          )}
        >
          <span className="font-semibold text-[13px]">{title}</span>
          {onClick && (
            <div
              className={cn(
                'h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center transition-colors',
                isEmerald ? 'text-dashboard-green' : iconColor,
                iconHover
              )}
            >
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </div>
        <div
          className={cn('grid text-center border-y border-slate-200 bg-slate-100/70', gridColsClass)}
        >
          <div className="py-2 text-[12px] font-semibold text-slate-700 border-r border-slate-200/80">
            Orçado
          </div>
          {hubExtraColumns && (
            <div className="py-1.5 px-0.5 text-[9px] font-semibold text-slate-700 border-r border-slate-200/80 leading-tight">
              {hubExtraColumns.labelOrc}
            </div>
          )}
          <div className="py-2 text-[12px] font-semibold text-slate-700 border-r border-slate-200/80">
            Realizado
          </div>
          {hubExtraColumns && (
            <div className="py-1.5 px-0.5 text-[9px] font-semibold text-slate-700 border-r border-slate-200/80 leading-tight">
              {hubExtraColumns.labelReal}
            </div>
          )}
          <div className="py-2 text-[12px] font-semibold text-slate-700">Diferença</div>
        </div>
        <div className={cn('grid text-center items-center', gridColsClass)}>
          <div className="py-4 text-[13px] font-medium border-r border-slate-200 tabular-nums text-slate-700 bg-white">
            {emptyValues ? (
              <span className="text-slate-400">—</span>
            ) : (
              fmtDecimal(data.orc)
            )}
          </div>
          {hubExtraColumns && (
            <div className="py-2.5 px-0.5 text-[10px] font-medium border-r border-slate-200 tabular-nums text-slate-600 bg-white leading-tight">
              {fmtPecuariaMetricCell(hubExtraColumns.orcExtra) ?? (
                <span className="text-slate-400">-</span>
              )}
            </div>
          )}
          <div className="py-4 text-[13px] font-semibold border-r border-slate-200 tabular-nums text-slate-800 bg-white">
            {emptyValues ? (
              <span className="text-slate-400">—</span>
            ) : (
              fmtDecimal(data.real)
            )}
          </div>
          {hubExtraColumns && (
            <div className="py-2.5 px-0.5 text-[10px] font-medium border-r border-slate-200 tabular-nums text-slate-600 bg-white leading-tight">
              {fmtPecuariaMetricCell(hubExtraColumns.realExtra) ?? (
                <span className="text-slate-400">-</span>
              )}
            </div>
          )}
          <div
            className={cn(
              'py-4 text-[13px] font-semibold tabular-nums flex flex-nowrap items-center justify-center gap-2',
              emptyValues
                ? 'text-slate-400 bg-slate-50/80'
                : isPositiveDifference
                  ? 'text-dashboard-green bg-dashboard-green/10'
                  : 'text-rose-600 bg-rose-50/50'
            )}
          >
            <span className="inline-flex items-center gap-1">
              {!emptyValues &&
                (isPositiveDifference ? (
                  <TrendingUp className="h-3.5 w-3.5" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" />
                ))}
              {emptyValues ? '—' : fmtDecimal(difference)}
            </span>
            <span
              className={cn(
                'inline-flex shrink-0 items-center rounded-md border border-slate-200/90 bg-white px-2 py-0.5 text-[11px] font-semibold tabular-nums',
                emptyValues || diffPctVsOrc == null
                  ? 'text-slate-400'
                  : isPositiveDifference
                    ? 'text-dashboard-green'
                    : 'text-rose-700'
              )}
            >
              {emptyValues || diffPctVsOrc == null
                ? '—'
                : `${diffPctVsOrc >= 0 ? '+' : ''}${diffPctVsOrc.toFixed(1)}%`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const summaryTipoFilter: Array<'R' | 'C' | 'D'> | undefined =
    isOutrasReceitasEventuais
      ? ['R']
      : isDespesasComVendas
        ? ['C', 'D']
        : resolvedTipoView === 'receitas'
          ? ['R']
          : resolvedTipoView === 'custos'
            ? isEncargos
              ? ENCARGOS_SUMMARY_TIPO_FILTER
              : isAdmTrib
                ? ['D']
                : ['C', 'D']
            : undefined;

  const summaryEntryFilter = combineEntryFilters(
    activityLevelEntryFilter,
    resolvedTipoView === 'custos' && !isDespesasComVendas
      ? isEncargos
        ? (entry) => isDespesaFinanceiraAccount(entry) || isReceitaFinanceiraAccount(entry)
        : isAdmTrib
          ? undefined
          : (entry) => entry.tipo !== 'D' || !isReceitaDeductionEntry(entry)
      : undefined,
    resolvedTipoView === 'custos' && !isDespesasComVendas && !isEncargos
      ? (entry) => entry.tipo !== 'C' || isAllowedEntryForCustos(atividade?.key, entry)
      : undefined,
    resolvedTipoView === 'custos' && !isDespesasComVendas && !isEncargos && isAdmTrib
      ? (entry) => isNonRateioDepartment(entry.departamento) && !isConta4Entry(entry)
      : undefined,
    resolvedTipoView === 'custos' &&
    !isDespesasComVendas &&
    !isEncargos &&
    isAdmTrib &&
    !isAdmTribRaileneSubview
      ? (entry) => isNotMarketingInternoCostCenter(entry.centroCusto)
      : undefined,
    resolvedTipoView === 'custos' && !isDespesasComVendas && !isEncargos && (isAdmTribLaizaSubview || isAdmTribRaileneSubview)
      ? (entry) => !isTributariaEntry(entry)
      : undefined,
    resolvedTipoView === 'custos' && !isDespesasComVendas && !isEncargos && (isAdmTribLaizaSubview || isAdmTribRaileneSubview)
      ? (entry) => !isReceitaDeductionEntry(entry)
      : undefined,
    resolvedTipoView === 'custos' && !isDespesasComVendas && !isEncargos && isAgricola
      ? (entry) =>
        entry.tipo !== 'C' ||
        isAgricolaFarmCultureDepartment(entry.departamento) ||
        isAgricolaUnidadeRecepConta4Entry(entry)
      : undefined,
    resolvedTipoView === 'custos' && !isDespesasComVendas && !isEncargos && isPecuaria
      ? (entry) => !isConta4AdministracaoEntry(entry)
      : undefined
  );

  const filterEntriesForSelectors = useMemo(() => {
    if (isOutrasReceitasEventuais) {
      return combineEntryFilters(
        activityLevelEntryFilter,
        (entry) => isOutrasReceitasEventuaisCode(entry.codigo)
      );
    }

    if (isRateios) return activityLevelEntryFilter;

    if (isDespesasComVendas) {
      return combineEntryFilters(
        activityLevelEntryFilter,
        (entry) => isDespesaComVendasCode(entry.codigo),
        isDespesasComVendasPecuariaSubview
          ? (entry) => isDespesasVendasPecuariaDepartment(entry.departamento)
          : undefined,
        isDespesasComVendasAgricolaSubview
          ? (entry) => isDespesasVendasAgricolaDepartment(entry.departamento)
          : undefined
      );
    }

    if (resolvedTipoView === 'receitas') {
      return combineEntryFilters(
        activityLevelEntryFilter,
        (entry) => entry.tipo === 'R' || isReceitaDeductionEntry(entry)
      );
    }

    if (resolvedTipoView === 'custos') {
      return combineEntryFilters(
        summaryEntryFilter,
        isAgricola
          ? (entry) =>
            isAgricolaFarmCultureDepartment(entry.departamento) ||
            isAgricolaUnidadeRecepConta4Entry(entry)
          : undefined
      );
    }

    return activityLevelEntryFilter;
  }, [
    isOutrasReceitasEventuais,
    isRateios,
    isDespesasComVendas,
    isDespesasComVendasPecuariaSubview,
    isDespesasComVendasAgricolaSubview,
    resolvedTipoView,
    activityLevelEntryFilter,
    summaryEntryFilter,
    isAgricola,
    isPecuaria,
  ]);

  const availableCultures = useMemo(() => {
    if (!id || !shouldApplyCultureFilter) return [];
    const culturesWithData = new Set(
      accounts
        .filter(
          (entry) =>
            entry.nivel === 5 &&
            (!atividade?.key || entry.atividade === atividade.key) &&
            (!activityLevelEntryFilterBase || activityLevelEntryFilterBase(entry)) &&
            (!activeCostCenterFilter ||
              (entry.centroCusto !== undefined &&
                activeCostCenterFilter.includes(entry.centroCusto))) &&
            (!activeDepartmentFilter ||
              (entry.departamento !== undefined &&
                activeDepartmentFilter.includes(entry.departamento))) &&
            hasEntryValueForMonth(entry, selectedMonth)
        )
        .flatMap((entry) => {
          const cultures: string[] = [];
          if (hasOrcadoValueForMonth(entry, selectedMonth)) {
            const fromOrcado = getAgricolaCultureFromOrcado(entry);
            if (fromOrcado) cultures.push(fromOrcado);
          }
          if (hasRealizadoValueForMonth(entry, selectedMonth)) {
            const fromRealizado = getAgricolaCultureFromRealizado(entry);
            if (fromRealizado) cultures.push(fromRealizado);
          }
          return cultures;
        })
        .filter((culture): culture is string => Boolean(culture))
    );

    return AGRICOLA_CULTURES.filter((culture) => culturesWithData.has(culture));
  }, [
    id,
    shouldApplyCultureFilter,
    accounts,
    atividade?.key,
    activityLevelEntryFilterBase,
    activeCostCenterFilter,
    activeDepartmentFilter,
    selectedMonth,
  ]);

  const availableDepts = useMemo(() => {
    if (!id) return [];
    return Array.from(
      new Set(
        accounts
          .filter(
            (entry) =>
              entry.nivel === 5 &&
              (!atividade?.key || entry.atividade === atividade.key) &&
              (!filterEntriesForSelectors || filterEntriesForSelectors(entry)) &&
              hasEntryValueForMonth(entry, selectedMonth)
          )
          .map((entry) => entry.departamento)
          .filter((dept): dept is string => Boolean(dept))
          .filter((dept) => {
            if (isPecuariaCustosGeneticaSubview) return isPecuariaGeneticaDepartmentOption(dept);
            if (isPecuariaReceitasGeneticaSubview) {
              return isPecuariaGeneticaReceitaDepartmentOption(
                dept,
                accounts.filter(
                  (entry) =>
                    entry.nivel === 5 &&
                    entry.atividade === 'PECUARIA' &&
                    entry.tipo === 'R' &&
                    isReceitaPecuariaGeneticaReceitaEntry(entry)
                )
              );
            }
            if (isPecuaria && resolvedTipoView === 'receitas') {
              return isPecuariaDepartmentOption(dept);
            }
            if (isPecuaria) {
              return isPecuariaDepartmentOption(dept) && !isPecuariaGeneticaDepartmentOption(dept);
            }
            return true;
          })
          .filter((dept) => !shouldHideAgricolaReceitaDepartment(dept, isAgricola, resolvedTipoView))
      )
    ).sort();
  }, [
    accounts,
    id,
    atividade?.key,
    filterEntriesForSelectors,
    selectedMonth,
    isPecuaria,
    isPecuariaReceitasGeneticaSubview,
    isPecuariaCustosGeneticaSubview,
    isAgricola,
    resolvedTipoView,
  ]);

  const availableCostCenters = useMemo(() => {
    if (!id) return [];
    const dynamic = Array.from(
      new Set(
        accounts
          .filter(
            (entry) =>
              entry.nivel === 5 &&
              (!atividade?.key || entry.atividade === atividade.key) &&
              (!filterEntriesForSelectors || filterEntriesForSelectors(entry)) &&
              hasEntryValueForMonth(entry, selectedMonth)
          )
          .map((entry) => entry.centroCusto)
          .filter((cc): cc is string => Boolean(cc))
      )
    );

    if (resolvedTipoView === 'custos' && !isOutrasReceitasEventuais && !isDespesasComVendas && !isRateios) {
      const allowed = dynamic.filter((cc) => isAllowedCentroCustoForCustos(atividade?.key, cc));
      if (isPecuaria && subview === 'confinamento') {
        return allowed
          .filter((cc) => normalizeText(cc) !== 'CONFINAMENTO - TRANSPORTE DE GADO')
          .sort();
      }
      return allowed.sort();
    }

    return dynamic.sort();
  }, [
    accounts,
    id,
    atividade?.key,
    filterEntriesForSelectors,
    isOutrasReceitasEventuais,
    isDespesasComVendas,
    isRateios,
    resolvedTipoView,
    selectedMonth,
    isPecuaria,
    subview,
  ]);

  const isGeneralTotalsView =
    (tipoView === 'todos' &&
      Boolean(atividade) &&
      !isOutrasReceitasEventuais &&
      !isRateios &&
      !isDespesasComVendas &&
      !subview &&
      Boolean(activityHubSummary)) ||
    (isPecuaria && resolvedTipoView === 'custos' && !subview && Boolean(pecuariaSummary)) ||
    (isDespesasComVendas &&
      resolvedTipoView === 'custos' &&
      !subview &&
      Boolean(despesasComVendasSummary)) ||
    (isAgricola && resolvedTipoView === 'custos' && !subview && Boolean(agricolaSummary)) ||
    (isAdmTrib && resolvedTipoView === 'custos' && !subview && Boolean(admTribSummary));

  useEffect(() => {
    if (selectedDepts.length === 0) return;
    const stillAvailable = selectedDepts.filter((dept) => availableDepts.includes(dept));
    if (stillAvailable.length !== selectedDepts.length) {
      setSelectedDepts(stillAvailable);
    }
  }, [availableDepts, selectedDepts]);

  useEffect(() => {
    if (selectedCCs.length === 0) return;
    const stillAvailable = selectedCCs.filter((cc) => availableCostCenters.includes(cc));
    if (stillAvailable.length !== selectedCCs.length) {
      setSelectedCCs(stillAvailable);
    }
  }, [availableCostCenters, selectedCCs]);

  useEffect(() => {
    if (selectedCulture !== 'all' && !availableCultures.includes(selectedCulture)) {
      setSelectedCulture('all');
    }
  }, [availableCultures, selectedCulture]);

  if (!atividade && !isOutrasReceitasEventuais && !isDespesasComVendas && !isRateios) return <NotFound />;

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4">
        <div>
          {(isPecuaria || isAgricola || isAdmTrib || isDespesasComVendas) && subview && (
            <button
              onClick={() =>
                navigate(
                  isDespesasComVendas
                    ? buildActivityPath('DESPESAS_COM_VENDAS')
                    : isPecuariaReceitasGeneticaSubview || isPecuariaCustosGeneticaSubview
                      ? `/atividade/${atividade!.key}?tipo=todos${returnTo ? `&returnTo=${encodeURIComponent(returnTo)}` : ''}`
                      : buildActivityPath(atividade!.key)
                )
              }
              className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-semibold mb-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para {isPecuaria ? 'Pecuária' : isAgricola ? 'Agrícola' : isDespesasComVendas ? 'Despesas com Vendas' : 'Desp. Adm. e Tributárias'}
            </button>
          )}
          <div className="flex items-center gap-2 mb-1">
            <div className="h-6 w-1 bg-orange-500 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600/70">Relatório Detalhado</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            {atividadeLabel}
          </h1>
          <p className="text-sm text-slate-500 font-medium">Análise granular de orçado vs realizado por categoria contábil</p>
        </div>
        
        <div className="fixed inset-x-0 top-16 z-40 py-3">
          <div className="flex justify-end px-4 sm:px-8">
            <div className="flex flex-wrap items-center justify-end gap-3">
              {!isGeneralTotalsView && (
                <MultiSelect
                  className="w-[200px]"
                  triggerClassName="border-orange-500 bg-orange-500 shadow-sm font-semibold text-white hover:bg-orange-500/90"
                  placeholder="Departamento"
                  allLabel="Todos Departamentos"
                  options={availableDepts.map((dept) => ({
                    value: dept,
                    label:
                      isPecuaria && subview === 'confinamento'
                        ? formatConfinamentoDepartmentLabel(dept)
                        : dept,
                  }))}
                  selected={selectedDepts}
                  onChange={setSelectedDepts}
                />
              )}

              {!isGeneralTotalsView && shouldApplyCostCenterFilter && (
                <MultiSelect
                  className="w-[200px]"
                  triggerClassName="border-orange-500 bg-orange-500 shadow-sm font-semibold text-white hover:bg-orange-500/90"
                  placeholder="Centro de Custo"
                  allLabel="Todos Centros de Custo"
                  options={availableCostCenters.map((cc) => ({ value: cc, label: cc }))}
                  selected={selectedCCs}
                  onChange={setSelectedCCs}
                />
              )}

              {!isGeneralTotalsView && shouldApplyCultureFilter && (
                <Select value={selectedCulture} onValueChange={(v) => setSelectedCulture(v)}>
                  <SelectTrigger className="w-[220px] border-orange-500 bg-orange-500 shadow-sm font-semibold text-white [&>span]:text-white [&>svg]:text-white">
                    <SelectValue placeholder="Cultura" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="font-semibold">Todas Culturas</SelectItem>
                    {availableCultures.map((culture) => (
                      <SelectItem key={culture} value={culture}>{culture}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              <MultiSelect
                className="w-[180px]"
                triggerClassName="border-orange-500 bg-orange-500 shadow-sm font-semibold text-white hover:bg-orange-500/90"
                placeholder="Período"
                allLabel="Acumulado 2026/27"
                align="end"
                options={MONTHS.map((m) => ({ value: m.key, label: m.label }))}
                selected={selectedMonths}
                onChange={(next) => setSelectedMonths(next as MonthKey[])}
              />
            </div>
          </div>
        </div>
        <div className="h-[84px]" />
      </div>

      {tipoView === 'todos' &&
      atividade &&
      !isOutrasReceitasEventuais &&
      !isRateios &&
      !isDespesasComVendas &&
      !subview &&
      activityHubSummary ? (
        (() => {
          const buildHubPath = (tipo: 'receitas' | 'custos') => {
            const params = new URLSearchParams();
            params.set('tipo', tipo);
            if (returnTo) params.set('returnTo', returnTo);
            return `/atividade/${atividade.key}?${params.toString()}`;
          };
          const buildHubPathWithSubview = (tipo: 'receitas' | 'custos', nextSubview?: string) => {
            const params = new URLSearchParams();
            params.set('tipo', tipo);
            if (nextSubview) params.set('subview', nextSubview);
            if (returnTo) params.set('returnTo', returnTo);
            return `/atividade/${atividade.key}?${params.toString()}`;
          };
          const onlyDespesas = isAdmTrib || isEncargos;
          const activityTotalData =
            isAdmTrib && admTribSummary ? admTribSummary.total : activityHubSummary.total;
          return (
            <div className="space-y-6">
              {!isPecuaria &&
                !isAgricola &&
                atividade?.key !== 'SERINGAL' &&
                renderSummaryCard(`Total ${atividade.label}`, activityTotalData, { isMain: true })}
              {isAdmTrib && admTribSummary ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderSummaryCard('DESPESAS - GERENCIA FINANCEIRO', admTribSummary.laiza, {
                    onClick: () => navigate(buildHubPathWithSubview('custos', 'laiza')),
                  })}
                  {renderSummaryCard('DESPESAS - GERENCIA RH', admTribSummary.railene, {
                    onClick: () => navigate(buildHubPathWithSubview('custos', 'railene')),
                    accentColor: 'amber',
                  })}
                </div>
              ) : isPecuaria && !onlyDespesas ? (
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                  {renderSummaryCard('Receitas', activityHubSummary.receitas, {
                    onClick: () => navigate(buildHubPath('receitas')),
                    accentColor: 'emerald',
                  })}
                  {renderSummaryCard('Custos', activityHubSummary.custos, {
                    onClick: () => navigate(buildHubPath('custos')),
                    accentColor: 'amber',
                  })}
                  {renderSummaryCard('Receitas Genética', activityHubSummary.receitasGenetica, {
                    onClick: () => navigate(buildHubPathWithSubview('receitas', 'genetica')),
                    accentColor: 'emerald',
                  })}
                  {renderSummaryCard('Custos Genética', activityHubSummary.custosGenetica, {
                    onClick: () => navigate(buildHubPathWithSubview('custos', 'custos-genetica')),
                    accentColor: 'amber',
                  })}
                </div>
              ) : (
                <div
                  className={cn(
                    'grid gap-6',
                    onlyDespesas ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
                  )}
                >
                  {!onlyDespesas &&
                    renderSummaryCard('Receitas', activityHubSummary.receitas, {
                      onClick: () => navigate(buildHubPath('receitas')),
                      accentColor: 'emerald',
                    })}
                  {renderSummaryCard(isEncargos ? 'Encargos' : onlyDespesas ? 'Despesas' : 'Custos', activityHubSummary.custos, {
                    onClick: () => navigate(buildHubPath('custos')),
                    accentColor: 'amber',
                    ...(isSeringal ? { seringalPkgMetrics: seringalSummaryCardExtras } : {}),
                  })}
                </div>
              )}
            </div>
          );
        })()
      ) : isPecuaria && resolvedTipoView === 'custos' && !subview && pecuariaSummary ? (
        <div className="space-y-6">
          {renderSummaryCard('Total Pecuária', pecuariaSummary.total, { isMain: true })}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderSummaryCard('Pasto', pecuariaSummary.pasto, {
              onClick: () => navigate(buildActivityPath('PECUARIA', { subview: 'pasto' })),
              pecuariaMetrics: { kind: 'pasto', ...pecuariaSummaryCardExtras.pasto },
            })}
            {renderSummaryCard('Confinamento', pecuariaSummary.confinamento, {
              onClick: () => navigate(buildActivityPath('PECUARIA', { subview: 'confinamento' })),
              accentColor: 'amber',
              pecuariaMetrics: { kind: 'confinamento', ...pecuariaSummaryCardExtras.confinamento },
            })}
          </div>
        </div>
      ) : isDespesasComVendas && resolvedTipoView === 'custos' && !subview && despesasComVendasSummary ? (
        <div className="space-y-6">
          {renderSummaryCard('Total Despesas com Vendas', despesasComVendasSummary.total, { isMain: true })}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderSummaryCard('Desp. com Vendas Pecuária', despesasComVendasSummary.pecuaria, {
              onClick: () => navigate(buildActivityPath('DESPESAS_COM_VENDAS', { subview: 'pecuaria' })),
            })}
            {renderSummaryCard('Desp. com Vendas Agrícola', despesasComVendasSummary.agricola, {
              onClick: () => navigate(buildActivityPath('DESPESAS_COM_VENDAS', { subview: 'agricola' })),
              accentColor: 'amber',
            })}
          </div>
        </div>
      ) : isAgricola && resolvedTipoView === 'custos' && !subview && agricolaSummary ? (
        <div className="space-y-6">
          {renderSummaryCard('Total Agrícola', agricolaSummary.total, { isMain: true })}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderSummaryCard('Agrícola', agricolaSummary.geral, {
              onClick: () => navigate(buildActivityPath('AGRICOLA', { subview: 'geral' })),
            })}
            {renderSummaryCard('AGRICOLA / UNIDADE RECEP', agricolaSummary.unidadeRecep, {
              onClick: () => navigate(buildActivityPath('AGRICOLA', { subview: 'unidade-recep' })),
              accentColor: 'amber',
            })}
          </div>
        </div>
      ) : isAdmTrib && resolvedTipoView === 'custos' && !subview && admTribSummary ? (
        <div className="space-y-6">
          {renderSummaryCard('Total Despesas Administrativas', admTribSummary.total, { isMain: true })}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderSummaryCard('DESPESAS - GERENCIA FINANCEIRO', admTribSummary.laiza, {
              onClick: () => navigate(buildActivityPath('DESP_ADM_TRIB', { subview: 'laiza' })),
            })}
            {renderSummaryCard('DESPESAS - GERENCIA RH', admTribSummary.railene, {
              onClick: () => navigate(buildActivityPath('DESP_ADM_TRIB', { subview: 'railene' })),
              accentColor: 'amber',
            })}
          </div>
        </div>
      ) : (
        <>
          <SummaryCards
            selectedMonth={selectedMonth}
            atividadeFilter={isOutrasReceitasEventuais || isRateios ? undefined : atividade?.key}
            costCenterFilter={activeCostCenterFilter}
            departmentFilter={activeDepartmentFilter}
            entryFilter={summaryEntryFilter}
            tipoFilter={summaryTipoFilter}
            receitaLiquidaOverride={
              resolvedTipoView === 'receitas' &&
              atividade?.key &&
              !isOutrasReceitasEventuais &&
              !isRateios &&
              !isDespesasComVendas
                ? receitaLiquida
                : undefined
            }
          />

          <div className="grid gap-8">
        {isOutrasReceitasEventuais ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Abertura de Outras Receitas Eventuais</h2>
              <div className="text-[10px] font-bold text-revenue uppercase tracking-widest bg-revenue/10 px-2 py-1 rounded border border-revenue/25">
                Entradas
              </div>
            </div>
            <AnalyticalTable
              selectedMonth={selectedMonth}
              costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
              departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
              entryFilter={combineEntryFilters(
                activityLevelEntryFilter,
                (entry) => isOutrasReceitasEventuaisCode(entry.codigo),
              )}
              title="Detalhamento de Outras Receitas Eventuais"
              subtitle="Contas 3.6 e 3.7"
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
              costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
              departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
              entryFilter={activityLevelEntryFilter}
              title="Detalhamento de Rateios"
              subtitle="Departamentos selecionados"
              accentColor="sky"
            />
          </div>
        ) : resolvedTipoView === 'receitas' && isPecuariaReceitasGeneticaSubview ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Abertura de Receitas Genética</h2>
              <div className="text-[10px] font-bold text-revenue uppercase tracking-widest bg-revenue/10 px-2 py-1 rounded border border-revenue/25">
                Entradas
              </div>
            </div>
            <AnalyticalTable
              atividadeFilter={atividade.key}
              selectedMonth={selectedMonth}
              costCenterFilter={activeCostCenterFilter}
              departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
              tipoFilter={['R']}
              entryFilter={combineEntryFilters(
                activityLevelEntryFilter,
                (entry) => isReceitaPecuariaGeneticaReceitaEntry(entry),
                (entry) => !isOutrasReceitasEventuaisCode(entry.codigo),
              )}
              title="Detalhamento de Receitas Genética"
              subtitle="Grupo Contábil → Descrição Contábil"
              accentColor="emerald"
              costHierarchyMode="grupo_descricao"
            />
          </div>
        ) : resolvedTipoView === 'receitas' ? (
          // Mostrar apenas Receitas
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Abertura de Receitas</h2>
              <div className="text-[10px] font-bold text-revenue uppercase tracking-widest bg-revenue/10 px-2 py-1 rounded border border-revenue/25">
                Entradas
              </div>
            </div>
            <AnalyticalTable 
              atividadeFilter={atividade.key}
              selectedMonth={selectedMonth}
              costCenterFilter={activeCostCenterFilter}
              departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
              tipoFilter={['R']}
              entryFilter={combineEntryFilters(
                activityLevelEntryFilter,
                (entry) => !isOutrasReceitasEventuaisCode(entry.codigo),
              )}
              title="Detalhamento de Receitas"
              subtitle={isPecuaria ? 'Grupo Contábil → Descrição Contábil' : undefined}
              accentColor="emerald"
              costHierarchyMode={isPecuaria ? 'grupo_descricao' : 'default'}
            />
            {!isOutrasReceitasEventuais && !isRateios && !isDespesasComVendas && (
              <>
                <AnalyticalTable
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={activeCostCenterFilter}
                  departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                  tipoFilter={['D']}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => isReceitaDeductionEntry(entry),
                  )}
                  title="Deduções de Receita (Impostos)"
                  subtitle="Contas de abatimento e tributos sobre vendas"
                  accentColor="emerald"
                />

                <div className="rounded-2xl border border-revenue/30 bg-revenue/[0.08] px-5 py-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.18em] text-revenue">
                    Receita Líquida da Atividade
                  </h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-revenue/20 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase text-slate-500">Receita Bruta</p>
                      <p className="text-[14px] font-semibold text-slate-800">{formatCurrency(receitaBrutaReal)}</p>
                    </div>
                    <div className="rounded-lg border border-rose-100 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase text-slate-500">Impostos / Deduções</p>
                      <p className="text-[14px] font-semibold text-rose-600">{formatCurrency(deducoesReceitaReal)}</p>
                    </div>
                    <div className="rounded-lg border border-revenue/30 bg-white px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase text-slate-500">Receita Líquida</p>
                      <p className="text-[14px] font-bold text-revenue">{formatCurrency(receitaLiquida.real)}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : resolvedTipoView === 'custos' && isPecuariaCustosGeneticaSubview ? (
          <>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Custos Genética</h2>
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
                  Saídas
                </div>
              </div>
              <AnalyticalTable
                atividadeFilter={atividade.key}
                selectedMonth={selectedMonth}
                costCenterFilter={activeCostCenterFilter}
                departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                tipoFilter={['C']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  (entry) => isAllowedEntryForCustos(atividade?.key, entry),
                )}
                title="Detalhamento de Custos Genética"
                subtitle="Grupo Contábil → Descrição Contábil"
                accentColor="orange"
                costHierarchyMode="grupo_descricao"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Despesas</h2>
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
                  Saídas
                </div>
              </div>
              <AnalyticalTable
                atividadeFilter={atividade.key}
                selectedMonth={selectedMonth}
                costCenterFilter={activeCostCenterFilter}
                departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                tipoFilter={['D']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  (entry) => !isReceitaDeductionEntry(entry),
                )}
                title="Detalhamento de Despesas"
                accentColor="orange"
              />
            </div>
          </>
        ) : resolvedTipoView === 'custos' ? (
          // Mostrar apenas Custos/Despesas
          isDespesasComVendas ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Despesas com Vendas</h2>
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
                  Saídas
                </div>
              </div>
              <AnalyticalTable
                selectedMonth={selectedMonth}
                costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                tipoFilter={['C', 'D']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  (entry) => isDespesaComVendasCode(entry.codigo),
                  isDespesasComVendasPecuariaSubview
                    ? (entry) => isDespesasVendasPecuariaDepartment(entry.departamento)
                    : isDespesasComVendasAgricolaSubview
                      ? (entry) => isDespesasVendasAgricolaDepartment(entry.departamento)
                      : undefined,
                )}
                title={
                  isDespesasComVendasPecuariaSubview
                    ? 'Desp. com Vendas Pecuária - COMERCIALIZACAO DE TOUROS - SUPERVISAO PECUARIA'
                    : isDespesasComVendasAgricolaSubview
                      ? 'Desp. com Vendas Agrícola - COMERCIALIZACAO DE SEMENTES'
                      : 'Detalhamento de Despesas com Vendas'
                }
                subtitle="Contas 3.4.02"
                accentColor="orange"
              />
            </div>
          ) : isEncargos ? (
            <>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Despesas Financeiras</h2>
                  <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
                    Saídas
                  </div>
                </div>
                <AnalyticalTable 
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                  departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => isDespesaFinanceiraAccount(entry),
                  )}
                  title="Detalhamento de Despesas Financeiras"
                  subtitle="Contas 3.4.04.01"
                  accentColor="orange"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Receitas Financeiras</h2>
                  <div className="text-[10px] font-bold text-revenue uppercase tracking-widest bg-revenue/10 px-2 py-1 rounded border border-revenue/25">
                    Entradas
                  </div>
                </div>
                <AnalyticalTable 
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                  departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => isReceitaFinanceiraAccount(entry),
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
                  costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                  departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                  tipoFilter={['C']}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    isAdmTrib ? (entry) => isNonRateioDepartment(entry.departamento) : undefined,
                    isAdmTrib ? (entry) => !isConta4Entry(entry) : undefined,
                    isAgricola
                      ? (entry) =>
                        isAgricolaFarmCultureDepartment(entry.departamento) ||
                        isAgricolaUnidadeRecepConta4Entry(entry)
                      : undefined,
                    (entry) => isAllowedEntryForCustos(atividade?.key, entry),
                  )}
                  title="Detalhamento de Custos"
                  subtitle={
                    isPecuaria || (isAgricola && isAgricolaGeralSubview) || isSeringal || isAdmTrib
                      ? 'Grupo Contábil → Descrição Contábil'
                      : 'N9 → Conta → Produto'
                  }
                  accentColor="orange"
                  showDiariaColumns={isPecuaria && subview === 'confinamento'}
                  showPCabecaColumns={isPecuaria && subview === 'pasto'}
                  showPpKgColumns={isSeringal}
                  costHierarchyMode={
                    isPecuaria || (isAgricola && isAgricolaGeralSubview) || isSeringal || isAdmTrib
                      ? 'grupo_descricao'
                      : 'default'
                  }
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Abertura de Despesas</h2>
                  <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
                    Saídas
                  </div>
                </div>
                {isAdmTrib ? (
                  <div className="space-y-6">
                    {(isAdmTribLaizaSubview || isAdmTribRaileneSubview) && (
                      <AnalyticalTable
                        atividadeFilter={atividade.key}
                        selectedMonth={selectedMonth}
                        costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                        departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                        tipoFilter={['D']}
                        entryFilter={combineEntryFilters(
                          activityLevelEntryFilter,
                          (entry) => isNonRateioDepartment(entry.departamento),
                          (entry) => !isConta4Entry(entry),
                          (entry) => !isTributariaEntry(entry),
                          (entry) => !isReceitaDeductionEntry(entry),
                          isAdmTribLaizaSubview
                            ? (entry) => isDespesasLaizaCostCenter(entry.centroCusto)
                            : isAdmTribRaileneSubview
                              ? (entry) => isDespesasRaileneCostCenter(entry.centroCusto)
                              : undefined,
                        )}
                        title={isAdmTribLaizaSubview ? 'DESPESAS - GERENCIA FINANCEIRO' : 'DESPESAS - GERENCIA RH'}
                        subtitle={
                          isAdmTribLaizaSubview
                            ? 'Grupo Contábil → Descrição Contábil · centros administrativos (exceto Governancia, Rateio DH, Marketing Interno, Organizacao Predial e Pessoal)'
                            : 'Grupo Contábil → Descrição Contábil · Governancia Corporativa, Rateio Desenvolvimento Humano, Marketing Interno, Organizacao Predial e Pessoal'
                        }
                        accentColor="orange"
                        costHierarchyMode="grupo_descricao"
                      />
                    )}
                    <AnalyticalTable
                      atividadeFilter={atividade.key}
                      selectedMonth={selectedMonth}
                      costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                      departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                      tipoFilter={['D']}
                      entryFilter={combineEntryFilters(
                        activityLevelEntryFilter,
                        (entry) => isNonRateioDepartment(entry.departamento),
                        (entry) => !isConta4Entry(entry),
                        (entry) => isTributariaEntry(entry),
                      )}
                      title="Abertura de Despesas Tributárias"
                      subtitle="Despesas tributárias"
                      accentColor="orange"
                    />
                  </div>
                ) : (
                  <AnalyticalTable 
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                    departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => !isReceitaDeductionEntry(entry),
                    )}
                    title="Detalhamento de Despesas"
                    accentColor="orange"
                  />
                )}
              </div>

              {isPecuaria && !subview && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900">Pecuária Confinamento</h2>
                    <div className="text-[10px] font-bold text-dashboard-orange uppercase tracking-widest bg-dashboard-orange/10 px-2 py-1 rounded border border-dashboard-orange/25">
                      Confinamento
                    </div>
                  </div>
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                    departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                    tipoFilter={['C', 'D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      isConfinamentoEntry,
                    )}
                    title="Detalhamento Pecuária Confinamento"
                    subtitle="Grupo Contábil → Descrição Contábil"
                    accentColor="amber"
                    costHierarchyMode="grupo_descricao"
                  />
                </div>
              )}
            </>
          )
        ) : (
          // Mostrar tudo (fallback)
          <>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Receitas</h2>
                <div className="text-[10px] font-bold text-revenue uppercase tracking-widest bg-revenue/10 px-2 py-1 rounded border border-revenue/25">
                  Entradas
                </div>
              </div>
              <AnalyticalTable 
                atividadeFilter={atividade.key}
                selectedMonth={selectedMonth}
                costCenterFilter={activeCostCenterFilter}
                departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                tipoFilter={['R']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  (entry) => !isOutrasReceitasEventuaisCode(entry.codigo),
                )}
                title="Detalhamento de Receitas"
                subtitle={isPecuaria ? 'Grupo Contábil → Descrição Contábil' : undefined}
                accentColor="emerald"
                costHierarchyMode={isPecuaria ? 'grupo_descricao' : 'default'}
              />
              {!isOutrasReceitasEventuais && !isRateios && !isDespesasComVendas && (
                <>
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={activeCostCenterFilter}
                    departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => isReceitaDeductionEntry(entry),
                    )}
                    title="Deduções de Receita (Impostos)"
                    subtitle="Contas de abatimento e tributos sobre vendas"
                    accentColor="emerald"
                  />

                  <div className="rounded-2xl border border-revenue/30 bg-revenue/[0.08] px-5 py-4">
                    <h3 className="text-sm font-black uppercase tracking-[0.18em] text-revenue">
                      Receita Líquida da Atividade
                    </h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-lg border border-revenue/20 bg-white px-3 py-2">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">Receita Bruta</p>
                        <p className="text-[14px] font-semibold text-slate-800">{formatCurrency(receitaBrutaReal)}</p>
                      </div>
                      <div className="rounded-lg border border-rose-100 bg-white px-3 py-2">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">Impostos / Deduções</p>
                        <p className="text-[14px] font-semibold text-rose-600">{formatCurrency(deducoesReceitaReal)}</p>
                      </div>
                      <div className="rounded-lg border border-revenue/30 bg-white px-3 py-2">
                        <p className="text-[11px] font-semibold uppercase text-slate-500">Receita Líquida</p>
                        <p className="text-[14px] font-bold text-revenue">{formatCurrency(receitaLiquida.real)}</p>
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
                costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                tipoFilter={['C']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  isAdmTrib ? (entry) => isNonRateioDepartment(entry.departamento) : undefined,
                  isAdmTrib ? (entry) => !isConta4Entry(entry) : undefined,
                  isAgricola
                    ? (entry) =>
                      isAgricolaFarmCultureDepartment(entry.departamento) ||
                      isAgricolaUnidadeRecepConta4Entry(entry)
                    : undefined,
                  (entry) => isAllowedEntryForCustos(atividade?.key, entry),
                )}
                title="Detalhamento de Custos"
                accentColor="orange"
                showDiariaColumns={isPecuaria && subview === 'confinamento'}
                showPCabecaColumns={isPecuaria && subview === 'pasto'}
                showPpKgColumns={isSeringal}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Abertura de Despesas</h2>
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
                  Saídas
                </div>
              </div>
              {isAdmTrib ? (
                <div className="space-y-6">
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                    departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => isNonRateioDepartment(entry.departamento),
                      (entry) => !isConta4Entry(entry),
                      (entry) => !isTributariaEntry(entry),
                      (entry) => !isReceitaDeductionEntry(entry),
                      (entry) => isDespesasLaizaCostCenter(entry.centroCusto),
                    )}
                    title="DESPESAS - GERENCIA FINANCEIRO"
                    subtitle="Grupo Contábil → Descrição Contábil · centros administrativos (exceto Governancia, Rateio DH, Marketing Interno, Organizacao Predial e Pessoal)"
                    accentColor="orange"
                    costHierarchyMode="grupo_descricao"
                  />
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                    departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => isNonRateioDepartment(entry.departamento),
                      (entry) => !isConta4Entry(entry),
                      (entry) => !isTributariaEntry(entry),
                      (entry) => !isReceitaDeductionEntry(entry),
                      (entry) => isDespesasRaileneCostCenter(entry.centroCusto),
                    )}
                    title="DESPESAS - GERENCIA RH"
                    subtitle="Grupo Contábil → Descrição Contábil · Governancia Corporativa, Rateio Desenvolvimento Humano, Marketing Interno, Organizacao Predial e Pessoal"
                    accentColor="orange"
                    costHierarchyMode="grupo_descricao"
                  />
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                    departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => isNonRateioDepartment(entry.departamento),
                      (entry) => !isConta4Entry(entry),
                      (entry) => isTributariaEntry(entry),
                    )}
                    title="Abertura de Despesas Tributárias"
                    subtitle="Despesas tributárias"
                    accentColor="orange"
                  />
                </div>
              ) : (
                <AnalyticalTable 
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                  departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                  tipoFilter={['D']}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => !isReceitaDeductionEntry(entry),
                  )}
                  title="Detalhamento de Despesas"
                  accentColor="orange"
                />
              )}
            </div>

            {isPecuaria && !subview && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Pecuária Confinamento</h2>
                  <div className="text-[10px] font-bold text-dashboard-orange uppercase tracking-widest bg-dashboard-orange/10 px-2 py-1 rounded border border-dashboard-orange/25">
                    Confinamento
                  </div>
                </div>
                <AnalyticalTable
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCCs.length > 0 ? selectedCCs : undefined}
                  departmentFilter={selectedDepts.length > 0 ? selectedDepts : undefined}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    isConfinamentoEntry,
                  )}
                  title="Detalhamento Pecuária Confinamento"
                  subtitle="Depto. Confinamento e centros de custo relacionados"
                  accentColor="amber"
                />
              </div>
            )}
          </>
        )}
      </div>
        </>
      )}
    </div>
  );
}