import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import AnalyticalTable from '@/components/dashboard/AnalyticalTable';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ATIVIDADES, MONTHS, type MonthKey } from '@/types/budget';
import type { AccountEntry } from '@/types/budget';
import { useBudgetStore, calculateEncargosTotals } from '@/store/budgetStore';
import { isDespesaFinanceira, isReceitaFinanceira } from '@/data/encargosAccounts';
import { isDespesaComVendasCode } from '@/data/despesasComVendasAccounts';
import { isOutrasReceitasEventuaisCode } from '@/data/outrasRendasAccounts';
import { ArrowRight, TrendingUp, TrendingDown, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import NotFound from './NotFound';

const RECEITAS_GREEN = '#038779';
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
    normalized === 'CENTRO COMERCIAL DE TOUROS' ||
    normalized === 'CONFINAMENTO' ||
    normalized === 'CONFINAMENTO - TRANSPORTE DE GADO' ||
    /^[^-]+ - PECUARIA$/.test(normalized)
  );
};

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

const isSyntheticOrcadoEntry = (entry: AccountEntry) => entry.id.includes('::ORCADO::');
const isRateioDeCustosGroup = (entry: AccountEntry) =>
  normalizeText(entry.grupoContabilN9).includes('4.2.01.02-RATEIO DE CUSTOS');

const isAllowedEntryForCustos = (atividadeKey: string | undefined, entry: AccountEntry) =>
  isSyntheticOrcadoEntry(entry) ||
  isRateioDeCustosGroup(entry) ||
  isAllowedCentroCustoForCustos(atividadeKey, entry.centroCusto);

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
const hasEntryValueForMonth = (entry: AccountEntry, selectedMonth: MonthKey | 'all') => {
  if (selectedMonth === 'all') {
    const totalOrcado = Object.values(entry.orcado).reduce((sum, value) => sum + value, 0);
    const totalRealizado = Object.values(entry.realizado).reduce((sum, value) => sum + value, 0);
    return totalOrcado !== 0 || totalRealizado !== 0;
  }

  return (entry.orcado[selectedMonth] || 0) !== 0 || (entry.realizado[selectedMonth] || 0) !== 0;
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
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');
  const [selectedCC, setSelectedCC] = useState<string | 'all'>('all');
  const [selectedDept, setSelectedDept] = useState<string | 'all'>(initialDepartment || 'all');
  
  const isOutrasReceitasEventuais = id === 'OUTRAS_RECEITAS_EVENTUAIS';
  const isDespesasComVendas = id === 'DESPESAS_COM_VENDAS';
  const isRateios = id === 'RATEIOS';
  const atividade = ATIVIDADES.find(a => a.key === id);
  const isAdmTrib = atividade?.key === 'DESP_ADM_TRIB';
  const isEncargos = atividade?.key === 'ENCARGOS';
  const isAgricola = atividade?.key === 'AGRICOLA';
  const isPecuaria = atividade?.key === 'PECUARIA';
  const isAdmTribLaizaSubview = isAdmTrib && subview === 'laiza';
  const isAdmTribRaileneSubview = isAdmTrib && subview === 'railene';
  const isAgricolaUnidadeRecepSubview = isAgricola && subview === 'unidade-recep';
  const isAgricolaGeralSubview = isAgricola && subview === 'geral';
  const resolvedTipoView = isDespesasComVendas ? 'custos' : tipoView;
  const shouldApplyCostCenterFilter = resolvedTipoView !== 'receitas';
  const activeCostCenterFilter =
    shouldApplyCostCenterFilter && selectedCC !== 'all' ? selectedCC : undefined;
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
    : isDespesasComVendas
      ? 'Despesas com Vendas'
      : isRateios
        ? 'Rateios'
        : isPecuaria && subview === 'pasto'
          ? 'Pecuária — Pasto'
          : isPecuaria && subview === 'confinamento'
            ? 'Pecuária — Confinamento'
            : isAdmTrib && subview === 'laiza'
              ? 'Desp. Adm. e Tributárias — DESPESAS - LAIZA'
              : isAdmTrib && subview === 'railene'
                ? 'Desp. Adm. e Tributárias — DESPESAS RAILENE'
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

  const activityLevelEntryFilter = combineEntryFilters(
    baseActivityFilter,
    pecuariaSubFilter,
    agricolaSubFilter,
    admTribSubFilter
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
          (!activeCostCenterFilter || entry.centroCusto === activeCostCenterFilter) &&
          (selectedDept === 'all' || entry.departamento === selectedDept) &&
          (!activityLevelEntryFilter || activityLevelEntryFilter(entry))
      ),
    [accounts, atividade?.key, activeCostCenterFilter, selectedDept, activityLevelEntryFilter]
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

  const fmtDecimal = (v: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(v);

  const activityHubSummary = useMemo(() => {
    if (!atividade?.key) return null;

    const sum = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
      entries.reduce((acc, entry) => {
        if (selectedMonth === 'all') {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + (entry[field][selectedMonth] || 0);
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
    const deducoesEntries = baseLeaves.filter(
      (a) => a.tipo === 'D' && isReceitaDeductionEntry(a)
    );

    // Custos/Despesas — para Encargos usa filtro financeiro; para AdmTrib remove rateio/conta4/marketing
    let custosEntries: AccountEntry[];
    if (isEncargos) {
      custosEntries = baseLeaves.filter(
        (a) => isDespesaFinanceira(a.codigo) || isReceitaFinanceira(a.codigo)
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
            isAgricolaUnidadeRecepConta4Entry(a)) &&
          !isAgricolaUnidadeRecepConta4Entry(a)
      );
    } else {
      custosEntries = baseLeaves.filter(
        (a) =>
          (a.tipo === 'C' || a.tipo === 'D') &&
          !isReceitaDeductionEntry(a) &&
          (a.tipo !== 'C' || isAllowedEntryForCustos(atividade.key, a))
      );
    }

    const recOrc =
      isAdmTrib ? 0 : sum(receitasEntries, 'orcado') + sum(deducoesEntries, 'orcado');
    const recReal =
      isAdmTrib ? 0 : sum(receitasEntries, 'realizado') + sum(deducoesEntries, 'realizado');
    const rawCusOrc = sum(custosEntries, 'orcado');
    const cusReal = sum(custosEntries, 'realizado');
    const cusOrc =
      isAdmTrib && selectedMonth === 'all'
        ? rawCusOrc - DESP_ADM_BUDGET_ADJUSTMENT
        : rawCusOrc;

    return {
      receitas: { orc: recOrc, real: recReal },
      custos: { orc: cusOrc, real: cusReal },
      total: isAdmTrib
        ? { orc: cusOrc, real: cusReal }
        : { orc: recOrc - cusOrc, real: recReal - cusReal },
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
        (a.tipo !== 'C' || isAllowedEntryForCustos('PECUARIA', a))
    );

    const pastoEntries = pecuariaLeaves.filter((a) => !isConfinamentoEntry(a));
    const confinamentoEntries = pecuariaLeaves.filter((a) => isConfinamentoEntry(a));

    const sum = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
      entries.reduce((acc, entry) => {
        if (selectedMonth === 'all') {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + (entry[field][selectedMonth] || 0);
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
        isNotMarketingInternoCostCenter(a.centroCusto)
    );

    const admLeaves = admBaseLeaves.filter((a) => !isTributariaEntry(a));
    const tributariaEntries = admBaseLeaves.filter((a) => isTributariaEntry(a));
    const laizaEntries = admLeaves.filter((a) => isDespesasLaizaCostCenter(a.centroCusto));
    const raileneEntries = admLeaves.filter((a) => isDespesasRaileneCostCenter(a.centroCusto));

    const sum = (entries: AccountEntry[], field: 'orcado' | 'realizado') =>
      entries.reduce((acc, entry) => {
        if (selectedMonth === 'all') {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + (entry[field][selectedMonth] || 0);
      }, 0);

    const laizaOrc = sum(laizaEntries, 'orcado');
    const laizaReal = sum(laizaEntries, 'realizado');
    const raileneOrc = sum(raileneEntries, 'orcado');
    const raileneReal = sum(raileneEntries, 'realizado');
    const tributariaOrc = sum(tributariaEntries, 'orcado');
    const tributariaReal = sum(tributariaEntries, 'realizado');

    const totalOrcRaw = laizaOrc + raileneOrc + tributariaOrc;
    const totalOrc =
      selectedMonth === 'all'
        ? totalOrcRaw - DESP_ADM_BUDGET_ADJUSTMENT
        : totalOrcRaw;

    return {
      laiza: { orc: laizaOrc, real: laizaReal },
      railene: { orc: raileneOrc, real: raileneReal },
      total: {
        orc: totalOrc,
        real: laizaReal + raileneReal + tributariaReal,
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
        if (selectedMonth === 'all') {
          return acc + Object.values(entry[field]).reduce((s, v) => s + v, 0);
        }
        return acc + (entry[field][selectedMonth] || 0);
      }, 0);

    const geralOrc = sum(agricolaGeralEntries, 'orcado');
    const geralReal = sum(agricolaGeralEntries, 'realizado');
    const recepOrc = sum(unidadeRecepEntries, 'orcado');
    const recepReal = sum(unidadeRecepEntries, 'realizado');

    return {
      geral: { orc: geralOrc, real: geralReal },
      unidadeRecep: { orc: recepOrc, real: recepReal },
      total: { orc: geralOrc, real: geralReal },
    };
  }, [accounts, isAgricola, selectedMonth]);

  const renderSummaryCard = (
    title: string,
    data: { orc: number; real: number },
    options?: { isMain?: boolean; onClick?: () => void; accentColor?: string }
  ) => {
    const { isMain = false, onClick, accentColor = 'orange' } = options || {};
    const isHigher = data.real > data.orc;
    const isEmerald = accentColor === 'emerald';
    const isAmber = accentColor === 'amber';
    const bgColor = isAmber ? 'bg-amber-500' : isEmerald ? '' : 'bg-orange-500';
    const hoverBorder = isAmber ? 'hover:border-amber-200' : isEmerald ? 'hover:border-emerald-200' : 'hover:border-orange-200';
    const iconColor = isAmber ? 'text-amber-500' : isEmerald ? '' : 'text-orange-500';
    const iconHover = isAmber ? 'group-hover:bg-amber-100' : isEmerald ? 'group-hover:bg-emerald-100' : 'group-hover:bg-orange-100';

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
          className={cn('py-4 px-5 flex items-center justify-between text-white', bgColor)}
          style={isEmerald ? { backgroundColor: RECEITAS_GREEN } : undefined}
        >
          <span className="font-semibold text-[13px]">{title}</span>
          {onClick && (
            <div
              className={cn(
                'h-7 w-7 rounded-full bg-white shadow-sm flex items-center justify-center transition-colors',
                iconColor,
                iconHover
              )}
              style={isEmerald ? { color: RECEITAS_GREEN } : undefined}
            >
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
            {fmtDecimal(data.orc)}
          </div>
          <div className="py-4 text-[13px] font-semibold border-r border-slate-200 tabular-nums text-slate-800 bg-white">
            {fmtDecimal(data.real)}
          </div>
          <div
            className={cn(
              'py-4 text-[13px] font-semibold tabular-nums flex items-center justify-center gap-1',
              isHigher ? 'text-emerald-600 bg-emerald-50/50' : 'text-rose-600 bg-rose-50/50'
            )}
          >
            {isHigher ? (
              <TrendingUp className="h-3.5 w-3.5" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5" />
            )}
            {fmtDecimal(data.real - data.orc)}
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
              : ['C', 'D']
            : undefined;

  const summaryEntryFilter = combineEntryFilters(
    activityLevelEntryFilter,
    resolvedTipoView === 'custos' && !isDespesasComVendas
      ? isEncargos
        ? (entry) => isDespesaFinanceira(entry.codigo) || isReceitaFinanceira(entry.codigo)
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
    resolvedTipoView === 'custos' && !isDespesasComVendas && !isEncargos && isAdmTrib
      ? (entry) => isNotMarketingInternoCostCenter(entry.centroCusto)
      : undefined,
    resolvedTipoView === 'custos' && !isDespesasComVendas && !isEncargos && isAgricola
      ? (entry) =>
        entry.tipo !== 'C' ||
        isAgricolaFarmCultureDepartment(entry.departamento) ||
        isAgricolaUnidadeRecepConta4Entry(entry)
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
        (entry) => isDespesaComVendasCode(entry.codigo)
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
    resolvedTipoView,
    activityLevelEntryFilter,
    summaryEntryFilter,
    isAgricola,
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
          .filter((dept) => (isPecuaria ? isPecuariaDepartmentOption(dept) : true))
      )
    ).sort();
  }, [accounts, id, atividade?.key, filterEntriesForSelectors, selectedMonth, isPecuaria]);

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
    (isAgricola && resolvedTipoView === 'custos' && !subview && Boolean(agricolaSummary)) ||
    (isAdmTrib && resolvedTipoView === 'custos' && !subview && Boolean(admTribSummary));

  useEffect(() => {
    if (selectedDept !== 'all' && !availableDepts.includes(selectedDept)) {
      setSelectedDept('all');
    }
  }, [availableDepts, selectedDept]);

  useEffect(() => {
    if (selectedCC !== 'all' && !availableCostCenters.includes(selectedCC)) {
      setSelectedCC('all');
    }
  }, [availableCostCenters, selectedCC]);

  if (!atividade && !isOutrasReceitasEventuais && !isDespesasComVendas && !isRateios) return <NotFound />;

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4">
        <div>
          {(isPecuaria || isAgricola || isAdmTrib) && subview && (
            <button
              onClick={() => atividade?.key && navigate(buildActivityPath(atividade.key))}
              className="flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-semibold mb-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para {isPecuaria ? 'Pecuária' : isAgricola ? 'Agrícola' : 'Desp. Adm. e Tributárias'}
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
                <Select value={selectedDept} onValueChange={(v) => setSelectedDept(v)}>
                  <SelectTrigger className="w-[200px] border-orange-500 bg-orange-500 shadow-sm font-semibold text-white [&>span]:text-white [&>svg]:text-white">
                    <SelectValue placeholder="Departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="font-semibold">Todos Departamentos</SelectItem>
                    {availableDepts.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {isPecuaria && subview === 'confinamento'
                          ? formatConfinamentoDepartmentLabel(dept)
                          : dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {!isGeneralTotalsView && shouldApplyCostCenterFilter && (
                <Select value={selectedCC} onValueChange={(v) => setSelectedCC(v)}>
                  <SelectTrigger className="w-[200px] border-orange-500 bg-orange-500 shadow-sm font-semibold text-white [&>span]:text-white [&>svg]:text-white">
                    <SelectValue placeholder="Centro de Custo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="font-semibold">Todos Centros de Custo</SelectItem>
                    {availableCostCenters.map((cc) => (
                      <SelectItem key={cc} value={cc}>{cc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              <Select value={selectedMonth} onValueChange={(v) => setSelectedMonth(v as MonthKey | 'all')}>
                <SelectTrigger className="w-[160px] border-orange-500 bg-orange-500 shadow-sm font-semibold text-white [&>span]:text-white [&>svg]:text-white">
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
          return (
            <div className="space-y-6">
              {renderSummaryCard(`Total ${atividade.label}`, activityHubSummary.total, { isMain: true })}
              {isAdmTrib && admTribSummary ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderSummaryCard('DESPESAS - LAIZA', admTribSummary.laiza, {
                    onClick: () => navigate(buildHubPathWithSubview('custos', 'laiza')),
                  })}
                  {renderSummaryCard('DESPESAS RAILENE', admTribSummary.railene, {
                    onClick: () => navigate(buildHubPathWithSubview('custos', 'railene')),
                    accentColor: 'amber',
                  })}
                </div>
              ) : (
                <div className={cn('grid gap-6', onlyDespesas ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2')}>
                  {!onlyDespesas &&
                    renderSummaryCard('Receitas', activityHubSummary.receitas, {
                      onClick: () => navigate(buildHubPath('receitas')),
                      accentColor: 'emerald',
                    })}
                  {renderSummaryCard(onlyDespesas ? 'Despesas' : 'Custos', activityHubSummary.custos, {
                    onClick: () => navigate(buildHubPath('custos')),
                    accentColor: 'amber',
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
            })}
            {renderSummaryCard('Confinamento', pecuariaSummary.confinamento, {
              onClick: () => navigate(buildActivityPath('PECUARIA', { subview: 'confinamento' })),
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
            {renderSummaryCard('DESPESAS - LAIZA', admTribSummary.laiza, {
              onClick: () => navigate(buildActivityPath('DESP_ADM_TRIB', { subview: 'laiza' })),
            })}
            {renderSummaryCard('DESPESAS RAILENE', admTribSummary.railene, {
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
            entryFilter={summaryEntryFilter}
            tipoFilter={summaryTipoFilter}
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
              <div className="text-[10px] font-bold text-revenue uppercase tracking-widest bg-revenue/10 px-2 py-1 rounded border border-revenue/25">
                Entradas
              </div>
            </div>
            <AnalyticalTable 
              atividadeFilter={atividade.key}
              selectedMonth={selectedMonth}
              costCenterFilter={activeCostCenterFilter}
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
                  costCenterFilter={activeCostCenterFilter}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
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
                costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                tipoFilter={['C', 'D']}
                entryFilter={combineEntryFilters(
                  activityLevelEntryFilter,
                  (entry) => isDespesaComVendasCode(entry.codigo),
                )}
                title="Detalhamento de Despesas com Vendas"
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
                  costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                  entryFilter={combineEntryFilters(
                    activityLevelEntryFilter,
                    (entry) => isDespesaFinanceira(entry.codigo),
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
                        costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                        departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                        tipoFilter={['D']}
                        entryFilter={combineEntryFilters(
                          activityLevelEntryFilter,
                          (entry) => isNonRateioDepartment(entry.departamento),
                          (entry) => !isConta4Entry(entry),
                          (entry) => !isTributariaEntry(entry),
                          (entry) => !isReceitaDeductionEntry(entry),
                        )}
                        title={isAdmTribLaizaSubview ? 'DESPESAS - LAIZA' : 'DESPESAS RAILENE'}
                        subtitle={
                          isAdmTribLaizaSubview
                            ? 'Centros administrativos (exceto Governancia, Rateio DH, Marketing Interno, Organizacao Predial e Pessoal)'
                            : 'Governancia Corporativa, Rateio Desenvolvimento Humano, Marketing Interno, Organizacao Predial e Pessoal'
                        }
                        accentColor="orange"
                      />
                    )}
                    <AnalyticalTable
                      atividadeFilter={atividade.key}
                      selectedMonth={selectedMonth}
                      costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                      departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
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
                    costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                    departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
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
                    <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100">
                      Confinamento
                    </div>
                  </div>
                  <AnalyticalTable
                    atividadeFilter={atividade.key}
                    selectedMonth={selectedMonth}
                    costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                    departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                    tipoFilter={['C', 'D']}
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
                    costCenterFilter={activeCostCenterFilter}
                    departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
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
                costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
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
                    costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                    departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
                    tipoFilter={['D']}
                    entryFilter={combineEntryFilters(
                      activityLevelEntryFilter,
                      (entry) => isNonRateioDepartment(entry.departamento),
                      (entry) => !isConta4Entry(entry),
                      (entry) => !isTributariaEntry(entry),
                      (entry) => !isReceitaDeductionEntry(entry),
                      (entry) => isDespesasLaizaCostCenter(entry.centroCusto),
                    )}
                    title="DESPESAS - LAIZA"
                    subtitle="Centros administrativos (exceto Governancia, Rateio DH, Marketing Interno, Organizacao Predial e Pessoal)"
                    accentColor="orange"
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
                      (entry) => !isConta4Entry(entry),
                      (entry) => !isTributariaEntry(entry),
                      (entry) => !isReceitaDeductionEntry(entry),
                      (entry) => isDespesasRaileneCostCenter(entry.centroCusto),
                    )}
                    title="DESPESAS RAILENE"
                    subtitle="Governancia Corporativa, Rateio Desenvolvimento Humano, Marketing Interno, Organizacao Predial e Pessoal"
                    accentColor="orange"
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
                  costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
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
                  <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100">
                    Confinamento
                  </div>
                </div>
                <AnalyticalTable
                  atividadeFilter={atividade.key}
                  selectedMonth={selectedMonth}
                  costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
                  departmentFilter={selectedDept === 'all' ? undefined : selectedDept}
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