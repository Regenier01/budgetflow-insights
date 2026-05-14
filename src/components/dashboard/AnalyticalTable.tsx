import { useState, Fragment } from 'react';
import { ChevronRight, Table, ListTree } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { MonthKey, AtividadeKey, AccountEntry } from '@/types/budget';
import {
  CONFINAMENTO_DIARIA_ORCADO,
  CONFINAMENTO_DIARIA_REALIZADO,
} from '@/data/confinamentoDiarias';
import { PASTO_PCABECA_ORCADO, PASTO_PCABECA_REALIZADO } from '@/data/pastoPcabeca';

interface Props {
  atividadeFilter?: AtividadeKey;
  selectedMonth: MonthKey[] | 'all';
  costCenterFilter?: string[];
  departmentFilter?: string[];
  tipoFilter?: ('R' | 'C' | 'D')[];
  entryFilter?: (entry: AccountEntry) => boolean;
  title?: string;
  subtitle?: string;
  accentColor?: string;
  /** Custos confinamento: Diária O/R (planilha Diarias.xlsx, um mês por célula — sem somar meses) */
  showDiariaColumns?: boolean;
  /** Custos pecuária pasto: P/Cabeça O/R (Diarias/CustoPcabeça.xlsx; um mês por coluna — `npm run pcabeca:import`) */
  showPCabecaColumns?: boolean;
}

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
  orc: number;
  real: number;
}

const TABLE_ACCENTS = {
  emerald: {
    titleBar: 'bg-revenue',
    subtitle: 'text-white/75',
    thead: 'bg-revenue text-white font-semibold border-b border-black/15',
    tfoot: 'bg-revenue/10 border-t-2 border-revenue/30',
    hoverL0: 'bg-white hover:bg-revenue/10',
    hoverL1: 'bg-slate-100/70 hover:bg-revenue/15',
    flatHover: 'hover:bg-revenue/10',
    chevronOpen: 'bg-revenue text-white',
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
    titleBar: 'bg-primary',
    subtitle: 'text-orange-400',
    thead: 'bg-orange-500 text-white font-semibold border-b border-orange-600',
    tfoot: 'bg-orange-50 border-t-2 border-orange-200',
    hoverL0: 'bg-white hover:bg-orange-50/40',
    hoverL1: 'bg-slate-100/70 hover:bg-orange-50/70',
    flatHover: 'hover:bg-orange-50/40',
    chevronOpen: 'bg-orange-500 text-white',
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
  if (accentColor in TABLE_ACCENTS) return TABLE_ACCENTS[accentColor as TableAccentKey];
  return TABLE_ACCENTS.orange;
}

export function AnalyticalTable({ 
  atividadeFilter, 
  selectedMonth, 
  costCenterFilter,
  departmentFilter,
  tipoFilter,
  entryFilter,
  title = "Abertura Analítica",
  subtitle = "N9 → Conta → Produto",
  accentColor = "orange",
  showDiariaColumns = false,
  showPCabecaColumns = false,
}: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'hierarchy' | 'flat'>('hierarchy');
  const ta = resolveTableAccent(accentColor);
  const extraMetricCols = (showDiariaColumns ? 2 : 0) + (showPCabecaColumns ? 2 : 0);

  // Tabela de receitas (tipoFilter exclusivamente 'R'): variação = realizado − orçado;
  // favorável (verde) quando real > orçado.
  const isRevenueTable = tipoFilter?.length === 1 && tipoFilter[0] === 'R';
  const computeDiff = (orc: number, real: number) =>
    isRevenueTable ? real - orc : orc - real;
  const isDiffFavorable = (diff: number) => diff > 0;

  /** Percentual da variação em relação ao orçado (|orçado| como base). */
  const fmtDiffVsOrcPct = (orc: number, diff: number) => {
    if (Math.abs(orc) < 1e-9) return null;
    const pct = (diff / Math.abs(orc)) * 100;
    return `${pct > 0 ? '+' : ''}${pct.toFixed(1)}%`;
  };

  const variationPctBadge = (orc: number, diff: number, toneClass: string) => {
    const text = fmtDiffVsOrcPct(orc, diff);
    return (
      <span
        className={cn(
          'inline-flex shrink-0 items-center rounded-md border border-slate-200/90 bg-white px-1.5 py-0.5 text-[11px] font-semibold tabular-nums',
          text ? toneClass : 'text-slate-400'
        )}
      >
        {text ?? '—'}
      </span>
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

  const valueForMonths = (values: Record<string, number>) => {
    if (isAllMonths) {
      return Object.values(values).reduce((sum, v) => sum + v, 0);
    }
    return monthList.reduce((sum, m) => sum + (values[m] || 0), 0);
  };

  // Flat entries for spreadsheet view
  const flatEntries: FlatEntry[] = filtered.map(a => {
    const orc = valueForMonths(a.orcado);
    const real = valueForMonths(a.realizado);

    return {
      id: a.id,
      departamento: a.departamento,
      centroCusto: a.centroCusto,
      conta: a.codigo,
      descricao: a.descricao,
      grupoContabil: a.grupoContabilN9,
      documento: a.centroCusto,
      produto: a.nomeProduto,
      orc,
      real,
    };
  }).filter(e => e.orc !== 0 || e.real !== 0)
    .sort((a, b) => Math.abs(b.real) - Math.abs(a.real));

  const root = new Map<string, Node>();

  filtered.forEach(a => {
    const orc = valueForMonths(a.orcado);
    const real = valueForMonths(a.realizado);

    if (orc === 0 && real === 0) return;

    let n9 = a.grupoContabilN9 || 'Outras Categorias';
    if (!n9.match(/^\d+\.\d+\.\d+/)) {
      const prefix = a.codigo.split('.').slice(0, 3).join('.');
      n9 = `${prefix} - ${n9}`;
    }
    
    const desc = a.descricao || 'Sem Descrição';
    const accountLabel = `${a.codigo} - ${desc}`;
    const prod = a.nomeProduto?.trim();

    if (!root.has(n9)) root.set(n9, { name: n9, orc: 0, real: 0, children: new Map() });
    const nodeN9 = root.get(n9)!;
    nodeN9.orc += orc;
    nodeN9.real += real;

    if (!nodeN9.children.has(accountLabel)) {
      nodeN9.children.set(accountLabel, { name: accountLabel, orc: 0, real: 0, children: new Map() });
    }
    const nodeAccount = nodeN9.children.get(accountLabel)!;
    nodeAccount.orc += orc;
    nodeAccount.real += real;

    if (!prod) return;

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

  const fmtCurrency = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);

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
    const sorted = Array.from(nodes.values()).sort((a, b) => Math.abs(b.real) - Math.abs(a.real));

    return sorted.map(node => {
      const currentPath = `${pathPrefix}/${node.name}`;
      const isExpanded = expanded.has(currentPath);
      const hasChildren = node.children.size > 0;
      
      const showBudget = level === 0;
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
                  level === 0 ? "text-[13px] font-semibold text-slate-700" :
                  level === 1 ? "text-[12px] font-medium text-slate-700" : "text-[12px] text-slate-500 font-medium"
                )}>
                  {node.name}
                </span>
              </div>
            </td>
            <td className="text-right py-3 px-4 text-[13px] text-slate-600 tabular-nums">
              {showBudget && node.orc ? fmtCurrency(node.orc) : '-'}
            </td>
            {showDiariaColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            {showPCabecaColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            <td className="text-right py-3 px-4 text-[13px] font-semibold text-slate-800 tabular-nums">
              {node.real ? fmtCurrency(node.real) : '-'}
            </td>
            {showDiariaColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            {showPCabecaColumns && renderDiariaTd('text-right py-3 px-4 text-[13px]', null)}
            <td className={cn(
              "text-right py-3 px-4 text-[13px] font-semibold tabular-nums",
              isPositive ? "text-emerald-600" : "text-rose-600"
            )}>
              {showBudget && (node.orc || node.real) ? (
                <div className="flex flex-nowrap items-center justify-end gap-2">
                  <span>
                    {diff > 0 ? '+' : ''}
                    {fmtCurrency(diff)}
                  </span>
                  {variationPctBadge(node.orc, diff, isPositive ? 'text-emerald-700' : 'text-rose-700')}
                </div>
              ) : (
                '-'
              )}
            </td>
          </tr>
          {isExpanded && hasChildren && renderNodes(node.children, currentPath, level + 1)}
        </Fragment>
      );
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      <div className={cn('px-6 py-4 flex items-center justify-between', ta.titleBar)}>
        <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">{title}</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-800/50 rounded-lg p-1">
            <button
              onClick={() => setViewMode('hierarchy')}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all",
                viewMode === 'hierarchy' 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-400 hover:text-white"
              )}
            >
              <ListTree className="h-3.5 w-3.5" />
              Hierárquico
            </button>
            <button
              onClick={() => setViewMode('flat')}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all",
                viewMode === 'flat' 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-400 hover:text-white"
              )}
            >
              <Table className="h-3.5 w-3.5" />
              Planilha
            </button>
          </div>
          <span className={cn('text-[10px] font-bold uppercase tracking-widest', ta.subtitle)}>{subtitle}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        {viewMode === 'hierarchy' ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className={cn(ta.thead, 'text-[13px]')}>
                <th className="text-left py-3 px-4">Classificação Contábil</th>
                <th className="text-right py-3 px-4 w-[150px]">Orçado</th>
                {showDiariaColumns && (
                  <th className="text-right py-3 px-4 w-[120px]">Diária O</th>
                )}
                {showPCabecaColumns && (
                  <th className="text-right py-3 px-4 w-[120px]">P/Cabeça O</th>
                )}
                <th className="text-right py-3 px-4 w-[150px]">Realizado</th>
                {showDiariaColumns && (
                  <th className="text-right py-3 px-4 w-[120px]">Diária R</th>
                )}
                {showPCabecaColumns && (
                  <th className="text-right py-3 px-4 w-[120px]">P/Cabeça R</th>
                )}
                <th className="text-right py-3 px-4 w-[150px]">Variação</th>
              </tr>
            </thead>
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
                    <td className="text-right py-4 px-4 text-[13px] text-slate-700 tabular-nums">{totalOrc ? fmtCurrency(totalOrc) : '-'}</td>
                    {showDiariaColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', diariaOrcResolved)}
                    {showPCabecaColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', pcabecaOrcResolved)}
                    <td className="text-right py-4 px-4 text-[13px] text-slate-800 tabular-nums">{totalReal ? fmtCurrency(totalReal) : '-'}</td>
                    {showDiariaColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', diariaRealResolved)}
                    {showPCabecaColumns &&
                      renderDiariaTd('py-4 px-4 text-[13px] text-right', pcabecaRealResolved)}
                    <td className={cn("text-right py-4 px-4 text-[13px] font-semibold tabular-nums", isTotalPositive ? "text-emerald-600" : "text-rose-600")}>
                      {(totalOrc || totalReal) ? (
                        <div className="flex flex-nowrap items-center justify-end gap-2">
                          <span>
                            {totalDiff > 0 ? '+' : ''}
                            {fmtCurrency(totalDiff)}
                          </span>
                          {variationPctBadge(
                            totalOrc,
                            totalDiff,
                            isTotalPositive ? 'text-emerald-700' : 'text-rose-700'
                          )}
                        </div>
                      ) : (
                        '-'
                      )}
                    </td>
                  </tr>
                </tfoot>
              );
            })()}
          </table>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className={cn(ta.thead, 'text-[12px]')}>
                <th className="text-left py-3 px-3">Departamento</th>
                <th className="text-left py-3 px-3">Centro de Custo</th>
                <th className="text-left py-3 px-3">Conta</th>
                <th className="text-left py-3 px-3">Descrição</th>
                <th className="text-left py-3 px-3">Produto</th>
                <th className="text-right py-3 px-3 w-[120px]">Orçado</th>
                {showDiariaColumns && (
                  <th className="text-right py-3 px-3 w-[100px]">Diária O</th>
                )}
                {showPCabecaColumns && (
                  <th className="text-right py-3 px-3 w-[100px]">P/Cabeça O</th>
                )}
                <th className="text-right py-3 px-3 w-[120px]">Realizado</th>
                {showDiariaColumns && (
                  <th className="text-right py-3 px-3 w-[100px]">Diária R</th>
                )}
                {showPCabecaColumns && (
                  <th className="text-right py-3 px-3 w-[100px]">P/Cabeça R</th>
                )}
                <th className="text-right py-3 px-3 w-[120px]">Variação</th>
              </tr>
            </thead>
            <tbody>
              {flatEntries.length > 0 ? flatEntries.map((entry) => {
                const diff = computeDiff(entry.orc, entry.real);
                const isPositive = isDiffFavorable(diff);
                return (
                  <tr key={entry.id} className={cn('border-b border-slate-200 transition-colors', ta.flatHover)}>
                    <td className="py-2.5 px-3 text-[12px] text-slate-700 font-medium">{entry.departamento || '-'}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-600">{entry.centroCusto || '-'}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-600 font-mono">{entry.conta}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-700">{entry.descricao}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-500">{entry.produto || '-'}</td>
                    <td className="text-right py-2.5 px-3 text-[12px] text-slate-600 tabular-nums">{entry.orc ? fmtCurrency(entry.orc) : '-'}</td>
                    {showDiariaColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    {showPCabecaColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    <td className="text-right py-2.5 px-3 text-[12px] font-semibold text-slate-800 tabular-nums">{entry.real ? fmtCurrency(entry.real) : '-'}</td>
                    {showDiariaColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    {showPCabecaColumns && renderDiariaTd('text-right py-2.5 px-3 text-[12px]', null)}
                    <td className={cn("text-right py-2.5 px-3 text-[12px] font-semibold tabular-nums", isPositive ? "text-emerald-600" : "text-rose-600")}>
                      {(entry.orc || entry.real) ? (
                        <div className="flex flex-nowrap items-center justify-end gap-2">
                          <span>
                            {diff > 0 ? '+' : ''}
                            {fmtCurrency(diff)}
                          </span>
                          {variationPctBadge(entry.orc, diff, isPositive ? 'text-emerald-700' : 'text-rose-700')}
                        </div>
                      ) : (
                        '-'
                      )}
                    </td>
                  </tr>
                );
              }) : (
                <tr><td colSpan={8 + extraMetricCols} className="py-20 text-center text-sm font-medium text-slate-300">Nenhum dado disponível para este filtro.</td></tr>
              )}
            </tbody>
            {flatEntries.length > 0 && (() => {
              const totalOrc = flatEntries.reduce((sum, e) => sum + e.orc, 0);
              const totalReal = flatEntries.reduce((sum, e) => sum + e.real, 0);
              const totalDiff = computeDiff(totalOrc, totalReal);
              const isTotalPositive = isDiffFavorable(totalDiff);
              return (
                <tfoot className={cn(ta.tfoot, 'font-semibold')}>
                  <tr>
                    <td className="py-4 px-3 text-[13px] text-slate-700" colSpan={5}>Total Consolidado ({flatEntries.length} registros)</td>
                    <td className="text-right py-4 px-3 text-[13px] text-slate-700 tabular-nums">{totalOrc ? fmtCurrency(totalOrc) : '-'}</td>
                    {showDiariaColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', diariaOrcResolved)}
                    {showPCabecaColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', pcabecaOrcResolved)}
                    <td className="text-right py-4 px-3 text-[13px] text-slate-800 tabular-nums">{totalReal ? fmtCurrency(totalReal) : '-'}</td>
                    {showDiariaColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', diariaRealResolved)}
                    {showPCabecaColumns &&
                      renderDiariaTd('py-4 px-3 text-[13px] text-right', pcabecaRealResolved)}
                    <td className={cn("text-right py-4 px-3 text-[13px] font-semibold tabular-nums", isTotalPositive ? "text-emerald-600" : "text-rose-600")}>
                      {(totalOrc || totalReal) ? (
                        <div className="flex flex-nowrap items-center justify-end gap-2">
                          <span>
                            {totalDiff > 0 ? '+' : ''}
                            {fmtCurrency(totalDiff)}
                          </span>
                          {variationPctBadge(
                            totalOrc,
                            totalDiff,
                            isTotalPositive ? 'text-emerald-700' : 'text-rose-700'
                          )}
                        </div>
                      ) : (
                        '-'
                      )}
                    </td>
                  </tr>
                </tfoot>
              );
            })()}
          </table>
        )}
      </div>
    </div>
  );
}

export default AnalyticalTable;