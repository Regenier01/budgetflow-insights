import { useState, Fragment, useMemo } from 'react';
import { ChevronRight, Table, ListTree, ChevronDown, Search } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { MonthKey, AtividadeKey, AccountEntry } from '@/types/budget';
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
  extractGrupoN9FourLevels,
  getPecuariaGrupoContabilN9DisplayLabel,
} from '@/data/pecuariaOrcadoGrupoContabilCodes';
import { getDespAdmGrupoContabilN9DisplayLabel } from '@/data/despAdmOrcadoGrupoContabilCodes';
import {
  budgetDifference,
  budgetDifferencePctVsOrc,
  isBudgetDifferenceFavorable,
  type BudgetVariationKind,
} from '@/lib/budgetVariation';

interface Props {
  atividadeFilter?: AtividadeKey;
  selectedMonth: MonthKey[] | 'all';
  costCenterFilter?: string[];
  departmentFilter?: string[];
  tipoFilter?: ('R' | 'C' | 'D')[];
  entryFilter?: (entry: AccountEntry) => boolean;
  fieldFilter?: (entry: AccountEntry, field: 'orcado' | 'realizado') => boolean;
  title?: string;
  subtitle?: string;
  accentColor?: string;
  /** Custos confinamento: Diária O/R (planilha Diarias.xlsx, um mês por célula — sem somar meses) */
  showDiariaColumns?: boolean;
  /** Custos pecuária pasto: P/Cabeça O/R (Diarias/CustoPcabeça.xlsx; um mês por coluna — `npm run pcabeca:import`) */
  showPCabecaColumns?: boolean;
  /** Custos seringal: Custo P/KG O/R (Diarias/CustoKg.xlsx; um mês por coluna — `npm run seringal:custokg:import`) */
  showPpKgColumns?: boolean;
  /**
   * Pecuária custo orçado: cascata Grupo Contábil → Descrição Contábil (sem nível produto no orçamento).
   * Realizado continua podendo exibir produto abaixo da descrição.
   */
  costHierarchyMode?: 'default' | 'grupo_descricao';
  /** Mantém a estrutura da abertura, exibindo orçado/realizado zerados (planejamento). */
  forceZeroValues?: boolean;
  /** Aplica caixa alta apenas na exibição dos rótulos. */
  uppercaseLabels?: boolean;
}

/** Barra de título fixa (abaixo do header do app). */
const ACTIVITY_TITLE_STICKY =
  'sticky z-40 top-16 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]';
/** Cabeçalho de colunas fixo logo abaixo da barra de título (~4rem). */
const ACTIVITY_THEAD_STICKY =
  'sticky z-30 top-32 shadow-[0_2px_8px_rgba(0,0,0,0.08)]';
const TABLE_LAYOUT = 'w-full border-collapse table-fixed';

interface Node {
  name: string;
  orc: number;
  real: number;
  children: Map<string, Node>;
}

interface FlatEntry {
  id: string;
  departamento?: string;
  centroCusto?: string;
  conta: string;
  descricao: string;
  grupoContabil?: string;
  documento?: string;
  produto?: string;
  quantidade?: number;
  orc: number;
  real: number;
}

const TABLE_ACCENTS = {
  emerald: {
    titleBar: 'bg-dashboard-green',
    subtitle: 'text-white/75',
    thead: 'bg-dashboard-green text-white font-semibold border-b border-black/15',
    tfoot: 'bg-dashboard-green/10 border-t-2 border-dashboard-green/30',
    hoverL0: 'bg-white hover:bg-dashboard-green/10',
    hoverL1: 'bg-slate-100/70 hover:bg-dashboard-green/15',
    flatHover: 'hover:bg-dashboard-green/10',
    chevronOpen: 'bg-dashboard-green text-white',
  },
  sky: {
    titleBar: 'bg-sky-600',
    subtitle: 'text-sky-100',
    thead: 'bg-sky-500 text-white font-semibold border-b border-sky-600',
    tfoot: 'bg-sky-50 border-t-2 border-sky-200',
    hoverL0: 'bg-white hover:bg-sky-50/40',
    hoverL1: 'bg-slate-100/70 hover:bg-sky-50/70',
    flatHover: 'hover:bg-sky-50/40',
    chevronOpen: 'bg-sky-500 text-white',
  },
  red: {
    titleBar: 'bg-red-700',
    subtitle: 'text-red-100',
    thead: 'bg-red-600 text-white font-semibold border-b border-red-700',
    tfoot: 'bg-red-50 border-t-2 border-red-200',
    hoverL0: 'bg-white hover:bg-red-50/40',
    hoverL1: 'bg-slate-100/70 hover:bg-red-50/70',
    flatHover: 'hover:bg-red-50/40',
    chevronOpen: 'bg-red-600 text-white',
  },
  orange: {
    titleBar: 'bg-dashboard-green',
    subtitle: 'text-dashboard-orange',
    thead: 'bg-dashboard-orange text-white font-semibold border-b border-black/20',
    tfoot: 'bg-dashboard-orange/10 border-t-2 border-dashboard-orange/30',
    hoverL0: 'bg-white hover:bg-dashboard-orange/10',
    hoverL1: 'bg-slate-100/70 hover:bg-dashboard-orange/15',
    flatHover: 'hover:bg-dashboard-orange/10',
    chevronOpen: 'bg-dashboard-orange text-white',
  },
  amber: {
    titleBar: 'bg-amber-600',
    subtitle: 'text-amber-100',
    thead: 'bg-amber-500 text-white font-semibold border-b border-amber-600',
    tfoot: 'bg-amber-50 border-t-2 border-amber-200',
    hoverL0: 'bg-white hover:bg-amber-50/40',
    hoverL1: 'bg-slate-100/70 hover:bg-amber-50/70',
    flatHover: 'hover:bg-amber-50/40',
    chevronOpen: 'bg-amber-500 text-white',
  },
} as const;

type TableAccentKey = keyof typeof TABLE_ACCENTS;

function resolveTableAccent(accentColor: string): (typeof TABLE_ACCENTS)[TableAccentKey] {
  const normalized = accentColor === 'amber' ? 'orange' : accentColor;
  if (normalized in TABLE_ACCENTS) return TABLE_ACCENTS[normalized as TableAccentKey];
  return TABLE_ACCENTS.orange;
}

/** Filtros por coluna só na visão Planilha (independente dos filtros globais do dashboard). */
type SpreadsheetFilterKey =
  | 'departamento'
  | 'centroCusto'
  | 'conta'
  | 'descricao'
  | 'produto'
  | 'realizado';

type SpreadsheetColumnFilters = Partial<Record<SpreadsheetFilterKey, Set<string>>>;

const SPREADSHEET_FILTER_EMPTY = '(Vazio)';

function spreadsheetCellValue(
  key: SpreadsheetFilterKey,
  entry: FlatEntry,
  fmtCurrency: (v: number) => string
): string {
  switch (key) {
    case 'departamento':
      return entry.departamento?.trim() || SPREADSHEET_FILTER_EMPTY;
    case 'centroCusto':
      return entry.centroCusto?.trim() || SPREADSHEET_FILTER_EMPTY;
    case 'conta':
      return entry.conta?.trim() || SPREADSHEET_FILTER_EMPTY;
    case 'descricao':
      return entry.descricao?.trim() || SPREADSHEET_FILTER_EMPTY;
    case 'produto':
      return entry.produto?.trim() || SPREADSHEET_FILTER_EMPTY;
    case 'realizado':
      return fmtCurrency(entry.real);
  }
}

function passesSpreadsheetColumnFilters(
  entry: FlatEntry,
  filters: SpreadsheetColumnFilters,
  fmtCurrency: (v: number) => string
): boolean {
  for (const key of Object.keys(filters) as SpreadsheetFilterKey[]) {
    const allowed = filters[key];
    if (!allowed) continue;
    if (allowed.size === 0) return false;
    if (!allowed.has(spreadsheetCellValue(key, entry, fmtCurrency))) return false;
  }
  return true;
}

function SpreadsheetColumnFilter({
  label,
  align = 'left',
  options,
  selected,
  onChange,
}: {
  label: string;
  align?: 'left' | 'right';
  options: string[];
  selected: Set<string> | undefined;
  onChange: (next: Set<string> | undefined) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const isActive = selected !== undefined;
  const normalizedSearch = search.trim().toLowerCase();
  const visibleOptions = normalizedSearch
    ? options.filter((o) => o.toLowerCase().includes(normalizedSearch))
    : options;

  const isChecked = (value: string) => {
    if (!selected) return true;
    if (selected.size === 0) return false;
    return selected.has(value);
  };

  const toggleValue = (value: string, checked: boolean) => {
    if (!selected) {
      if (checked) return;
      const next = new Set(options);
      next.delete(value);
      onChange(next.size === options.length ? undefined : next);
      return;
    }
    const next = new Set(selected);
    if (checked) next.add(value);
    else next.delete(value);
    if (next.size === 0) onChange(new Set());
    else if (next.size === options.length) onChange(undefined);
    else onChange(next);
  };

  const selectAll = () => onChange(undefined);
  const clearFilter = () => onChange(new Set());

  return (
    <th
      className={cn(
        'py-3 px-3 font-semibold',
        align === 'right' ? 'text-right' : 'text-left'
      )}
    >
      <div
        className={cn(
          'inline-flex items-center gap-0.5',
          align === 'right' && 'justify-end w-full'
        )}
      >
        <span>{label}</span>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              aria-label={`Filtrar coluna ${label}`}
              className={cn(
                'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors',
                isActive
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-white/75 hover:bg-white/15 hover:text-white'
              )}
            >
              <ChevronDown className="h-3 w-3" strokeWidth={2.5} />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align={align === 'right' ? 'end' : 'start'}
            className="w-64 p-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <div className="border-b px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Filtrar: {label}
              </p>
              <div className="relative mt-2">
                <Search className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar..."
                  className="h-8 pl-8 text-xs"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 border-b px-3 py-1.5">
              <button
                type="button"
                onClick={selectAll}
                className="text-[11px] font-medium text-slate-600 hover:text-slate-900"
              >
                Selecionar todos
              </button>
              <button
                type="button"
                onClick={clearFilter}
                className="text-[11px] font-medium text-slate-500 hover:text-slate-800"
              >
                Limpar
              </button>
            </div>
            <div className="max-h-52 overflow-y-auto py-1">
              {visibleOptions.length === 0 ? (
                <p className="px-3 py-4 text-center text-xs text-slate-400">Nenhum valor encontrado</p>
              ) : (
                visibleOptions.map((value) => (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center gap-2 px-3 py-1.5 hover:bg-slate-50"
                  >
                    <Checkbox
                      checked={isChecked(value)}
                      onCheckedChange={(c) => toggleValue(value, c === true)}
                    />
                    <span className="truncate text-xs text-slate-700" title={value}>
                      {value}
                    </span>
                  </label>
                ))
              )}
            </div>
            <div className="border-t p-2">
              <Button
                type="button"
                size="sm"
                variant="secondary"
                className="h-8 w-full text-xs"
                onClick={() => setOpen(false)}
              >
                Aplicar
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </th>
  );
}

export function AnalyticalTable({ 
  atividadeFilter, 
  selectedMonth, 
  costCenterFilter,
  departmentFilter,
  tipoFilter,
  entryFilter,
  fieldFilter,
  title = "Abertura Analítica",
  subtitle = "N9 → Conta → Produto",
  accentColor = "orange",
  showDiariaColumns = false,
  showPCabecaColumns = false,
  showPpKgColumns = false,
  costHierarchyMode = 'default',
  forceZeroValues = false,
  uppercaseLabels = false,
}: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'hierarchy' | 'flat'>('hierarchy');
  const [spreadsheetFilters, setSpreadsheetFilters] = useState<SpreadsheetColumnFilters>({});
  const ta = resolveTableAccent(accentColor);
  const extraMetricCols =
    (showDiariaColumns ? 2 : 0) + (showPCabecaColumns ? 2 : 0) + (showPpKgColumns ? 2 : 0);

  const isRevenueTable =
    (tipoFilter?.length === 1 && tipoFilter[0] === 'R') || accentColor === 'emerald';
  const variationKind: BudgetVariationKind = isRevenueTable ? 'revenue' : 'cost';
  const isCostTable = tipoFilter?.length === 1 && tipoFilter[0] === 'C';
  const isExpenseTable = tipoFilter?.length === 1 && tipoFilter[0] === 'D';
  const sortByVariationPct = isCostTable || isExpenseTable;
  /** Planilha de receitas das atividades: coluna QUANTIDADE (planilha realizado). */
  const showQuantidadeColumn = isRevenueTable;
  /** Planilha de custos, despesas e receitas: só realizado, ordenado por valor (maiores no topo). */
  const flatRealizadoOnly = isCostTable || isExpenseTable || isRevenueTable;
  const flatRealOnlyMetricCols =
    (showDiariaColumns ? 1 : 0) + (showPCabecaColumns ? 1 : 0) + (showPpKgColumns ? 1 : 0);
  const flatSpreadsheetColSpan =
    (flatRealizadoOnly ? 6 : 8) +
    (showQuantidadeColumn ? 1 : 0) +
    flatRealOnlyMetricCols +
    (flatRealizadoOnly ? 0 : extraMetricCols);
  const computeDiff = (orc: number, real: number) => budgetDifference(real, orc);
  const isDiffFavorable = (diff: number) =>
    isBudgetDifferenceFavorable(diff, variationKind);

  /** Percentual da diferença em relação ao orçado (|orçado| como base). */
  const variationPctValue = (orc: number, real: number): number | null => {
    const diff = computeDiff(orc, real);
    return budgetDifferencePctVsOrc(diff, orc);
  };

  const fmtDiffVsOrcPct = (orc: number, diff: number) => {
    const pct = budgetDifferencePctVsOrc(diff, orc);
    if (pct == null) return null;
    const sign = pct > 0 ? '+' : '';
    const abs = Math.abs(pct);
    if (abs >= 10_000) return `${sign}${(pct / 1000).toFixed(0)}k%`;
    if (abs >= 1000) return `${sign}${pct.toFixed(0)}%`;
    return `${sign}${pct.toFixed(1)}%`;
  };

  /** Custos e despesas: maiores |% variação| no topo; demais tabelas: maior |realizado|. */
  const sortRankForNode = (orc: number, real: number) => {
    if (sortByVariationPct) {
      const pct = variationPctValue(orc, real);
      return pct != null ? Math.abs(pct) : -1;
    }
    return Math.abs(real);
  };

  const compareByDisplayOrder = (orcA: number, realA: number, orcB: number, realB: number) => {
    const rankDiff = sortRankForNode(orcB, realB) - sortRankForNode(orcA, realA);
    if (rankDiff !== 0) return rankDiff;
    return Math.abs(realB) - Math.abs(realA);
  };

  const variationPctBadge = (orc: number, diff: number, toneClass: string) => {
    const text = fmtDiffVsOrcPct(orc, diff);
    return (
      <span
        title={text ?? undefined}
        className={cn(
          'inline-flex max-w-full shrink-0 items-center justify-end rounded border border-slate-200/90 bg-white px-1.5 py-0.5 text-[11px] font-semibold leading-none tabular-nums whitespace-nowrap',
          text ? toneClass : 'text-slate-400'
        )}
      >
        {text ?? '—'}
      </span>
    );
  };

  const fmtSignedCurrency = (v: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
      signDisplay: 'exceptZero',
    }).format(v);

  const renderVariationCell = (
    orc: number,
    real: number,
    diff: number,
    isPositive: boolean
  ) => {
    if (!forceZeroValues && !orc && !real) return <>-</>;
    const tone = isPositive ? 'text-dashboard-green' : 'text-rose-600';
    const badgeTone = isPositive ? 'text-dashboard-green' : 'text-rose-700';
    return (
      <div className="flex min-w-0 flex-col items-end justify-center gap-1 leading-tight">
        <span className={cn('text-[12px] font-semibold tabular-nums whitespace-nowrap', tone)}>
          {fmtSignedCurrency(diff)}
        </span>
        {variationPctBadge(orc, diff, badgeTone)}
      </div>
    );
  };

  let filtered = accounts.filter(
    (a) => a.nivel === 5 && (!atividadeFilter || a.atividade === atividadeFilter)
  );

  if (costCenterFilter && costCenterFilter.length > 0) {
    filtered = filtered.filter(
      (a) => a.centroCusto !== undefined && costCenterFilter.includes(a.centroCusto)
    );
  }
  if (departmentFilter && departmentFilter.length > 0) {
    filtered = filtered.filter(
      (a) => a.departamento !== undefined && departmentFilter.includes(a.departamento)
    );
  }
  if (tipoFilter) filtered = filtered.filter(a => tipoFilter.includes(a.tipo));
  if (entryFilter) filtered = filtered.filter(entryFilter);

  const isAllMonths = selectedMonth === 'all' || selectedMonth.length === 0;
  const monthList = isAllMonths ? [] : (selectedMonth as MonthKey[]);

  const valueForMonths = (
    entry: AccountEntry,
    field: 'orcado' | 'realizado',
    values: Record<string, number>
  ) => {
    if (fieldFilter && !fieldFilter(entry, field)) return 0;
    if (forceZeroValues) return 0;
    if (isAllMonths) {
      return Object.values(values).reduce((sum, v) => sum + v, 0);
    }
    return monthList.reduce((sum, m) => sum + (values[m] || 0), 0);
  };

  const fmtCurrency = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);

  const fmtOrcCell = (v: number) => (forceZeroValues || v !== 0 ? fmtCurrency(v) : '-');
  const fmtRealCell = (v: number) => (forceZeroValues || v !== 0 ? fmtCurrency(v) : '-');

  const fmtQuantidade = (v: number) =>
    new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(v);

  // Lançamentos da visão Planilha (antes dos filtros por coluna)
  const flatEntriesAll: FlatEntry[] = useMemo(
    () =>
      filtered
        .map((a) => {
          const orc = valueForMonths(a, 'orcado', a.orcado);
          const real = valueForMonths(a, 'realizado', a.realizado);
          const qty = a.quantidade
            ? isAllMonths
              ? Object.values(a.quantidade).reduce((sum, v) => sum + v, 0)
              : monthList.reduce((sum, m) => sum + (a.quantidade?.[m] || 0), 0)
            : 0;
          return {
            id: a.id,
            departamento: a.departamento,
            centroCusto: a.centroCusto,
            conta: a.codigo,
            descricao: a.descricao,
            grupoContabil: a.grupoContabilN9,
            documento: a.centroCusto,
            produto: a.nomeProduto,
            quantidade: qty !== 0 ? qty : undefined,
            orc,
            real,
          };
        })
        .filter((e) => forceZeroValues || e.orc !== 0 || e.real !== 0)
        .sort((a, b) =>
          flatRealizadoOnly
            ? Math.abs(b.real) - Math.abs(a.real) ||
              Math.abs(b.orc) - Math.abs(a.orc) ||
              String(a.conta).localeCompare(b.conta)
            : compareByDisplayOrder(a.orc, a.real, b.orc, b.real)
        ),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- valueForMonths depende de selectedMonth/isAllMonths
    [filtered, selectedMonth, flatRealizadoOnly, isRevenueTable, isCostTable, isExpenseTable]
  );

  const spreadsheetFilterOptions = useMemo(() => {
    const keys: SpreadsheetFilterKey[] = [
      'departamento',
      'centroCusto',
      'conta',
      'descricao',
      'produto',
      'realizado',
    ];
    const result = {} as Record<SpreadsheetFilterKey, string[]>;
    for (const key of keys) {
      const unique = new Set<string>();
      for (const entry of flatEntriesAll) {
        unique.add(spreadsheetCellValue(key, entry, fmtCurrency));
      }
      const list = Array.from(unique);
      if (key === 'realizado') {
        list.sort((a, b) => {
          const parse = (s: string) => {
            const n = Number(
              s.replace(/[^\d,-]/g, '').replace(/\./g, '').replace(',', '.')
            );
            return Number.isFinite(n) ? Math.abs(n) : 0;
          };
          return parse(b) - parse(a);
        });
      } else {
        list.sort((a, b) => a.localeCompare(b, 'pt-BR'));
      }
      result[key] = list;
    }
    return result;
  }, [flatEntriesAll]);

  const flatEntries: FlatEntry[] = useMemo(() => {
    const hasColumnFilters = Object.values(spreadsheetFilters).some((s) => s !== undefined);
    if (!hasColumnFilters) return flatEntriesAll;
    return flatEntriesAll.filter((e) =>
      passesSpreadsheetColumnFilters(e, spreadsheetFilters, fmtCurrency)
    );
  }, [flatEntriesAll, spreadsheetFilters]);

  const setSpreadsheetColumnFilter = (key: SpreadsheetFilterKey, next: Set<string> | undefined) => {
    setSpreadsheetFilters((prev) => {
      const copy = { ...prev };
      if (next === undefined) delete copy[key];
      else copy[key] = next;
      return copy;
    });
  };

  const root = new Map<string, Node>();

  /** Alinha orçado sintético e realizado no mesmo nó N9 (prefixo 4 níveis vs rótulo completo), só na cascata pecuária. */
  const grupoContabilN9DisplayLabel = (n9: string, hint?: string | null) =>
    n9.startsWith('3.4.')
      ? getDespAdmGrupoContabilN9DisplayLabel(n9, hint)
      : getPecuariaGrupoContabilN9DisplayLabel(n9, hint);

  const n9KeyForHierarchy = (a: AccountEntry): string => {
    if (costHierarchyMode === 'grupo_descricao') {
      const fromG = extractGrupoN9FourLevels(a.grupoContabilN9);
      if (fromG) return fromG;
      // Orçado adm.: grupo vem da coluna A; não inferir pelo código da conta (ex. plano de saúde).
      if (a.id.startsWith('SYN::ORCADOADM::')) {
        return fromG || 'Outras Categorias';
      }
      const fromC = extractGrupoN9FourLevels(a.codigo);
      if (fromC) return fromC;
    }
    let n9 = a.grupoContabilN9 || 'Outras Categorias';
    if (!n9.match(/^\d+\.\d+\.\d+/)) {
      const prefix = a.codigo.split('.').slice(0, 3).join('.');
      n9 = `${prefix} - ${n9}`;
    }
    return n9;
  };

  /** Conta contábil “folha” (≥5 segmentos) para fundir orçado granular e realizado na cascata pecuária. */
  const LEAF_CONTA_PATTERN = /^\d(?:\.\d+){4,}$/;

  const childKeyForHierarchy = (a: AccountEntry): string => {
    const desc = a.descricao || 'Sem Descrição';
    if (costHierarchyMode !== 'grupo_descricao') {
      return `${a.codigo} - ${desc}`;
    }
    if (a.id.startsWith('SYN::ORCADO::')) {
      return '__GRUPO_ORC__';
    }
    const cod = String(a.codigo || '').trim();
    if (
      a.id.startsWith('SYN::ORCADOPEC::') ||
      a.id.startsWith('SYN::ORCADOAG::') ||
      a.id.startsWith('SYN::ORCADOSER::') ||
      a.id.startsWith('SYN::ORCADOADM::') ||
      LEAF_CONTA_PATTERN.test(cod)
    ) {
      return `conta::${cod}`;
    }
    return `desc::${desc}`;
  };

  const childDisplayNameGrupoDescricao = (a: AccountEntry, key: string): string => {
    if (key === '__GRUPO_ORC__') {
      return (a.descricao || 'Consolidado no grupo (orçado)').trim();
    }
    if (key.startsWith('conta::')) {
      const cod = key.slice('conta::'.length);
      const d = (a.descricao || '').trim();
      return d ? `${cod} — ${d}` : cod;
    }
    return (a.descricao || 'Sem Descrição').trim();
  };

  const accountLabelForHierarchy = (a: AccountEntry, childKey: string): string => {
    const desc = a.descricao || 'Sem Descrição';
    if (costHierarchyMode !== 'grupo_descricao') {
      return `${a.codigo} - ${desc}`;
    }
    return childDisplayNameGrupoDescricao(a, childKey);
  };

  const treeSource =
    costHierarchyMode === 'grupo_descricao'
      ? [...filtered].sort((a, b) => {
          const rank = (x: AccountEntry) =>
            x.id.startsWith('SYN::ORCADOPEC::') ||
            x.id.startsWith('SYN::ORCADOAG::') ||
            x.id.startsWith('SYN::ORCADOSER::') ||
            x.id.startsWith('SYN::ORCADOADM::')
              ? 0
              : LEAF_CONTA_PATTERN.test(String(x.codigo || '').trim()) && !x.id.startsWith('SYN::ORCADO::')
                ? 1
                : x.id.startsWith('SYN::ORCADO::')
                  ? 2
                  : 3;
          return rank(a) - rank(b);
        })
      : filtered;

  treeSource.forEach((a) => {
    const orc = valueForMonths(a, 'orcado', a.orcado);
    const real = valueForMonths(a, 'realizado', a.realizado);

    if (!forceZeroValues && orc === 0 && real === 0) return;

    const n9 = n9KeyForHierarchy(a);

    const desc = a.descricao || 'Sem Descrição';
    const childKey = childKeyForHierarchy(a);
    const accountLabel =
      costHierarchyMode === 'grupo_descricao'
        ? accountLabelForHierarchy(a, childKey)
        : `${a.codigo} - ${desc}`;
    const prod = a.nomeProduto?.trim();

    if (!root.has(n9)) {
      root.set(n9, {
        name:
          costHierarchyMode === 'grupo_descricao'
            ? grupoContabilN9DisplayLabel(n9, a.grupoContabilN9)
            : n9,
        orc: 0,
        real: 0,
        children: new Map(),
      });
    }
    const nodeN9 = root.get(n9)!;
    nodeN9.orc += orc;
    nodeN9.real += real;
    if (costHierarchyMode === 'grupo_descricao') {
      const cand = grupoContabilN9DisplayLabel(n9, a.grupoContabilN9);
      const score = (s: string) => (s.includes('-') ? 1_000_000 : 0) + s.length;
      if (score(cand) > score(nodeN9.name)) nodeN9.name = cand;
    }

    if (!nodeN9.children.has(childKey)) {
      nodeN9.children.set(childKey, { name: accountLabel, orc: 0, real: 0, children: new Map() });
    }
    const nodeAccount = nodeN9.children.get(childKey)!;
    nodeAccount.orc += orc;
    nodeAccount.real += real;

    if (!prod || costHierarchyMode === 'grupo_descricao') return;

    if (!nodeAccount.children.has(prod)) {
      nodeAccount.children.set(prod, { name: prod, orc: 0, real: 0, children: new Map() });
    }
    const nodeProd = nodeAccount.children.get(prod)!;
    nodeProd.orc += orc;
    nodeProd.real += real;
  });

  const toggleExpand = (path: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  /** Um único mês no filtro: usa a coluna daquele mês na planilha; vários meses ou “todos” → não soma, mostra “-”. */
  const singleMonthForDiaria: MonthKey | null =
    showDiariaColumns &&
    selectedMonth !== 'all' &&
    Array.isArray(selectedMonth) &&
    selectedMonth.length === 1
      ? selectedMonth[0]
      : null;

  const diariaOrcResolved: number | null =
    singleMonthForDiaria == null ? null : (CONFINAMENTO_DIARIA_ORCADO[singleMonthForDiaria] ?? null);

  const diariaRealResolved: number | null =
    singleMonthForDiaria == null ? null : (CONFINAMENTO_DIARIA_REALIZADO[singleMonthForDiaria] ?? null);

  const singleMonthForPCabeca: MonthKey | null =
    showPCabecaColumns &&
    selectedMonth !== 'all' &&
    Array.isArray(selectedMonth) &&
    selectedMonth.length === 1
      ? selectedMonth[0]
      : null;

  const pcabecaOrcResolved: number | null =
    singleMonthForPCabeca == null ? null : (PASTO_PCABECA_ORCADO[singleMonthForPCabeca] ?? null);

  const pcabecaRealResolved: number | null =
    singleMonthForPCabeca == null ? null : (PASTO_PCABECA_REALIZADO[singleMonthForPCabeca] ?? null);

  const singleMonthForPpKg: MonthKey | null =
    showPpKgColumns &&
    selectedMonth !== 'all' &&
    Array.isArray(selectedMonth) &&
    selectedMonth.length === 1
      ? selectedMonth[0]
      : null;

  const ppKgOrcResolved: number | null =
    singleMonthForPpKg == null ? null : (SERINGAL_CUSTO_PKG_ORCADO[singleMonthForPpKg] ?? null);

  const ppKgRealResolved: number | null =
    singleMonthForPpKg == null ? null : (SERINGAL_CUSTO_PKG_REALIZADO[singleMonthForPpKg] ?? null);

  const fmtDiaria = (v: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(v);

  const renderDiariaTd = (className: string, value: number | null) => (
    <td className={cn(className, 'tabular-nums', value != null ? 'text-slate-700' : 'text-slate-400')}>
      {value != null ? fmtDiaria(value) : '-'}
    </td>
  );

  const renderNodes = (nodes: Map<string, Node>, pathPrefix: string = '', level: number = 0) => {
    const sorted = Array.from(nodes.values()).sort((a, b) =>
      compareByDisplayOrder(a.orc, a.real, b.orc, b.real)
    );

    return sorted.map(node => {
      const currentPath = `${pathPrefix}/${node.name}`;
      const isExpanded = expanded.has(currentPath);
      const hasChildren = node.children.size > 0;
      
      const showBudget =
        level === 0 || (costHierarchyMode === 'grupo_descricao' && level === 1);
      const diff = computeDiff(node.orc, node.real);
      const isPositive = isDiffFavorable(diff);

      return (
        <Fragment key={currentPath}>
          <tr className={cn(
            "group transition-all duration-150 border-b border-slate-200 last:border-0",
            level === 0 ? ta.hoverL0 : ta.hoverL1
          )}>
            <td className="py-3 px-4">
              <div 
                className={cn("flex items-center gap-3", hasChildren && "cursor-pointer select-none")}
                style={{ paddingLeft: `${level * 24}px` }}
                onClick={() => hasChildren && toggleExpand(currentPath)}
              >
                {hasChildren ? (
                  <div className={cn(
                    "flex items-center justify-center h-5 w-5 rounded-md transition-all duration-200",
                    isExpanded ? cn(ta.chevronOpen, "rotate-90") : "bg-slate-100 text-slate-400"
                  )}>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                ) : <div className="w-5 shrink-0" />}
                <span className={cn(
                  "truncate tracking-tight",
                  uppercaseLabels && "uppercase",
                  level === 0 ? "text-[13px] font-semibold text-slate-700" :
                  level === 1 ? "text-[12px] font-medium text-slate-700" : "text-[12px] text-slate-500 font-medium"
                )}>
                  {node.name}
                </span>
              </div>
            </td>
            <td className="text-right py-3 px-4 text-[13px] text-slate-600 tabular-nums">
              {showBudget ? fmtOrcCell(node.orc) : '-'}
            </td>
            {showDiariaColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            {showPCabecaColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            {showPpKgColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            <td className="text-right py-3 px-4 text-[13px] font-semibold text-slate-800 tabular-nums">
              {fmtRealCell(node.real)}
            </td>
            {showDiariaColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            {showPCabecaColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            {showPpKgColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            <td className="overflow-hidden text-right py-3 px-3 align-middle">
              {showBudget ? renderVariationCell(node.orc, node.real, diff, isPositive) : '-'}
            </td>
          </tr>
          {isExpanded && hasChildren && renderNodes(node.children, currentPath, level + 1)}
        </Fragment>
      );
    });
  };

  const titleBarControls = (
    <>
      <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">{title}</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-slate-800/50 rounded-lg p-1">
          <button
            onClick={() => setViewMode('hierarchy')}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all',
              viewMode === 'hierarchy'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-400 hover:text-white'
            )}
          >
            <ListTree className="h-3.5 w-3.5" />
            Hierárquico
          </button>
          <button
            onClick={() => setViewMode('flat')}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all',
              viewMode === 'flat'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-400 hover:text-white'
            )}
          >
            <Table className="h-3.5 w-3.5" />
            Planilha
          </button>
        </div>
        <span className={cn('text-[10px] font-bold uppercase tracking-widest', ta.subtitle)}>{subtitle}</span>
      </div>
    </>
  );

  const hierarchyHeaderRow = (
    <tr className="text-[13px]">
      <th className="text-left py-3 px-4">Classificação Contábil</th>
      <th className="text-right py-3 px-4 w-[150px]">Orçado</th>
      {showDiariaColumns && <th className="text-right py-3 px-4 w-[120px]">Diária O</th>}
      {showPCabecaColumns && <th className="text-right py-3 px-4 w-[120px]">P/Cabeça O</th>}
      {showPpKgColumns && <th className="text-right py-3 px-4 w-[120px]">Custo P/KG O</th>}
      <th className="text-right py-3 px-4 w-[150px]">Realizado</th>
      {showDiariaColumns && <th className="text-right py-3 px-4 w-[120px]">Diária R</th>}
      {showPCabecaColumns && <th className="text-right py-3 px-4 w-[120px]">P/Cabeça R</th>}
      {showPpKgColumns && <th className="text-right py-3 px-4 w-[120px]">Custo P/KG R</th>}
      <th className="text-right py-3 px-3 w-[172px] min-w-[172px]">Diferença</th>
    </tr>
  );

  const flatHeaderRow = (
    <tr className="text-[12px]">
      <SpreadsheetColumnFilter
        label="Departamento"
        options={spreadsheetFilterOptions.departamento}
        selected={spreadsheetFilters.departamento}
        onChange={(next) => setSpreadsheetColumnFilter('departamento', next)}
      />
      <SpreadsheetColumnFilter
        label="Centro de Custo"
        options={spreadsheetFilterOptions.centroCusto}
        selected={spreadsheetFilters.centroCusto}
        onChange={(next) => setSpreadsheetColumnFilter('centroCusto', next)}
      />
      <SpreadsheetColumnFilter
        label="Conta"
        options={spreadsheetFilterOptions.conta}
        selected={spreadsheetFilters.conta}
        onChange={(next) => setSpreadsheetColumnFilter('conta', next)}
      />
      <SpreadsheetColumnFilter
        label="Descrição"
        options={spreadsheetFilterOptions.descricao}
        selected={spreadsheetFilters.descricao}
        onChange={(next) => setSpreadsheetColumnFilter('descricao', next)}
      />
      <SpreadsheetColumnFilter
        label="Produto"
        options={spreadsheetFilterOptions.produto}
        selected={spreadsheetFilters.produto}
        onChange={(next) => setSpreadsheetColumnFilter('produto', next)}
      />
      {showQuantidadeColumn && <th className="text-right py-3 px-3 w-[110px]">Quantidade</th>}
      {!flatRealizadoOnly && <th className="text-right py-3 px-3 w-[120px]">Orçado</th>}
      {!flatRealizadoOnly && showDiariaColumns && (
        <th className="text-right py-3 px-3 w-[100px]">Diária O</th>
      )}
      {!flatRealizadoOnly && showPCabecaColumns && (
        <th className="text-right py-3 px-3 w-[100px]">P/Cabeça O</th>
      )}
      {!flatRealizadoOnly && showPpKgColumns && (
        <th className="text-right py-3 px-3 w-[100px]">Custo P/KG O</th>
      )}
      <SpreadsheetColumnFilter
        label="Realizado"
        align="right"
        options={spreadsheetFilterOptions.realizado}
        selected={spreadsheetFilters.realizado}
        onChange={(next) => setSpreadsheetColumnFilter('realizado', next)}
      />
      {showDiariaColumns && (
        <th className="text-right py-3 px-3 w-[100px]">
          {flatRealizadoOnly ? 'Diária' : 'Diária R'}
        </th>
      )}
      {showPCabecaColumns && (
        <th className="text-right py-3 px-3 w-[100px]">
          {flatRealizadoOnly ? 'P/Cabeça' : 'P/Cabeça R'}
        </th>
      )}
      {showPpKgColumns && (
        <th className="text-right py-3 px-3 w-[100px]">
          {flatRealizadoOnly ? 'Custo P/KG' : 'Custo P/KG R'}
        </th>
      )}
      {!flatRealizadoOnly && (
        <th className="text-right py-3 px-3 w-[172px] min-w-[172px]">Diferença</th>
      )}
    </tr>
  );

  const tableHeader = (
    <thead className={cn(ACTIVITY_THEAD_STICKY, ta.thead)}>
      {viewMode === 'hierarchy' ? hierarchyHeaderRow : flatHeaderRow}
    </thead>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
      <div className={ACTIVITY_TITLE_STICKY}>
        <div className={cn('px-6 py-4 flex items-center justify-between', ta.titleBar)}>
          {titleBarControls}
        </div>
      </div>
      {viewMode === 'hierarchy' ? (
        <table className={TABLE_LAYOUT}>
          {tableHeader}
          <tbody>
              {root.size > 0 ? renderNodes(root) : (
                <tr><td colSpan={4 + extraMetricCols} className="py-20 text-center text-sm font-medium text-slate-300">Nenhum dado disponível para este filtro.</td></tr>
              )}
            </tbody>
            {root.size > 0 && (() => {
              const totalOrc = Array.from(root.values()).reduce((sum, n) => sum + n.orc, 0);
              const totalReal = Array.from(root.values()).reduce((sum, n) => sum + n.real, 0);
              const totalDiff = computeDiff(totalOrc, totalReal);
              const isTotalPositive = isDiffFavorable(totalDiff);
              return (
                <tfoot className={cn(ta.tfoot, 'font-semibold')}>
                  <tr>
                    <td className="py-4 px-4 text-[13px] text-slate-700">Total Consolidado</td>
                    <td className="text-right py-4 px-4 text-[13px] text-slate-700 tabular-nums">{fmtOrcCell(totalOrc)}</td>
                    {showDiariaColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', diariaOrcResolved)}
                    {showPCabecaColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', pcabecaOrcResolved)}
                    {showPpKgColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', ppKgOrcResolved)}
                    <td className="text-right py-4 px-4 text-[13px] text-slate-800 tabular-nums">{fmtRealCell(totalReal)}</td>
                    {showDiariaColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', diariaRealResolved)}
                    {showPCabecaColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', pcabecaRealResolved)}
                    {showPpKgColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', ppKgRealResolved)}
                    <td className="overflow-hidden text-right py-4 px-3 align-middle">
                      {renderVariationCell(totalOrc, totalReal, totalDiff, isTotalPositive)}
                    </td>
                  </tr>
                </tfoot>
              );
            })()}
        </table>
      ) : (
        <table className={TABLE_LAYOUT}>
          {tableHeader}
          <tbody>
              {flatEntries.length > 0 ? flatEntries.map((entry) => {
                const diff = computeDiff(entry.orc, entry.real);
                const isPositive = isDiffFavorable(diff);
                return (
                  <tr key={entry.id} className={cn('border-b border-slate-200 transition-colors', ta.flatHover)}>
                    <td className="py-2.5 px-3 text-[12px] text-slate-700 font-medium">{entry.departamento || '-'}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-600">{entry.centroCusto || '-'}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-600 font-mono">{entry.conta}</td>
                    <td className={cn("py-2.5 px-3 text-[12px] text-slate-700", uppercaseLabels && "uppercase")}>
                      {entry.descricao}
                    </td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-500">{entry.produto || '-'}</td>
                    {showQuantidadeColumn && (
                      <td className="text-right py-2.5 px-3 text-[12px] text-slate-600 tabular-nums">
                        {entry.quantidade != null ? fmtQuantidade(entry.quantidade) : '-'}
                      </td>
                    )}
                    {!flatRealizadoOnly && (
                      <td className="text-right py-2.5 px-3 text-[12px] text-slate-600 tabular-nums">{fmtOrcCell(entry.orc)}</td>
                    )}
                    {!flatRealizadoOnly && showDiariaColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    {!flatRealizadoOnly && showPCabecaColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    {!flatRealizadoOnly && showPpKgColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    <td className="text-right py-2.5 px-3 text-[12px] font-semibold text-slate-800 tabular-nums">{fmtRealCell(entry.real)}</td>
                    {showDiariaColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    {showPCabecaColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    {showPpKgColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    {!flatRealizadoOnly && (
                      <td className="overflow-hidden text-right py-2.5 px-3 align-middle">
                        {renderVariationCell(entry.orc, entry.real, diff, isPositive)}
                      </td>
                    )}
                  </tr>
                );
              }) : (
                <tr><td colSpan={flatSpreadsheetColSpan} className="py-20 text-center text-sm font-medium text-slate-300">Nenhum dado disponível para este filtro.</td></tr>
              )}
            </tbody>
            {flatEntries.length > 0 && (() => {
              const totalOrc = flatEntries.reduce((sum, e) => sum + e.orc, 0);
              const totalReal = flatEntries.reduce((sum, e) => sum + e.real, 0);
              const totalQuantidade = flatEntries.reduce((sum, e) => sum + (e.quantidade ?? 0), 0);
              const totalDiff = computeDiff(totalOrc, totalReal);
              const isTotalPositive = isDiffFavorable(totalDiff);
              return (
                <tfoot className={cn(ta.tfoot, 'font-semibold')}>
                  <tr>
                    <td className="py-4 px-3 text-[13px] text-slate-700" colSpan={5}>Total Consolidado ({flatEntries.length} registros)</td>
                    {!flatRealizadoOnly && (
                      <td className="text-right py-4 px-3 text-[13px] text-slate-700 tabular-nums">{fmtOrcCell(totalOrc)}</td>
                    )}
                    {!flatRealizadoOnly && showDiariaColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', diariaOrcResolved)}
                    {!flatRealizadoOnly && showPCabecaColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', pcabecaOrcResolved)}
                    {!flatRealizadoOnly && showPpKgColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', ppKgOrcResolved)}
                    {showQuantidadeColumn && (
                      <td className="text-right py-4 px-3 text-[13px] text-slate-700 tabular-nums">
                        {totalQuantidade ? fmtQuantidade(totalQuantidade) : '-'}
                      </td>
                    )}
                    <td className="text-right py-4 px-3 text-[13px] text-slate-800 tabular-nums">{fmtRealCell(totalReal)}</td>
                    {showDiariaColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', diariaRealResolved)}
                    {showPCabecaColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', pcabecaRealResolved)}
                    {showPpKgColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', ppKgRealResolved)}
                    {!flatRealizadoOnly && (
                      <td className="overflow-hidden text-right py-4 px-3 align-middle">
                        {renderVariationCell(totalOrc, totalReal, totalDiff, isTotalPositive)}
                      </td>
                    )}
                  </tr>
                </tfoot>
              );
            })()}
        </table>
      )}
    </div>
  );
}

export default AnalyticalTable;