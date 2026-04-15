import { useState, Fragment } from 'react';
import { ChevronRight, Table, ListTree } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { MonthKey, AtividadeKey, AccountEntry } from '@/types/budget';

interface Props {
  atividadeFilter?: AtividadeKey;
  selectedMonth: MonthKey | 'all';
  costCenterFilter?: string;
  departmentFilter?: string;
  tipoFilter?: ('R' | 'C' | 'D')[];
  entryFilter?: (entry: AccountEntry) => boolean;
  title?: string;
  subtitle?: string;
  accentColor?: string;
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

export function AnalyticalTable({ 
  atividadeFilter, 
  selectedMonth, 
  costCenterFilter,
  departmentFilter,
  tipoFilter,
  entryFilter,
  title = "Abertura Analítica",
  subtitle = "N9 → Conta → Produto",
  accentColor = "orange"
}: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'hierarchy' | 'flat'>('hierarchy');

  let filtered = accounts.filter(
    (a) => a.nivel === 5 && (!atividadeFilter || a.atividade === atividadeFilter)
  );
  
  if (costCenterFilter) filtered = filtered.filter(a => a.centroCusto === costCenterFilter);
  if (departmentFilter) filtered = filtered.filter(a => a.departamento === departmentFilter);
  if (tipoFilter) filtered = filtered.filter(a => tipoFilter.includes(a.tipo));
  if (entryFilter) filtered = filtered.filter(entryFilter);

  // Flat entries for spreadsheet view
  const flatEntries: FlatEntry[] = filtered.map(a => {
    const orc = selectedMonth === 'all' 
      ? Object.values(a.orcado).reduce((sum, v) => sum + v, 0)
      : a.orcado[selectedMonth] || 0;
    
    const real = selectedMonth === 'all'
      ? Object.values(a.realizado).reduce((sum, v) => sum + v, 0)
      : a.realizado[selectedMonth] || 0;

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
    const orc = selectedMonth === 'all' 
      ? Object.values(a.orcado).reduce((sum, v) => sum + v, 0)
      : a.orcado[selectedMonth] || 0;
    
    const real = selectedMonth === 'all'
      ? Object.values(a.realizado).reduce((sum, v) => sum + v, 0)
      : a.realizado[selectedMonth] || 0;

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

  const renderNodes = (nodes: Map<string, Node>, pathPrefix: string = '', level: number = 0) => {
    const sorted = Array.from(nodes.values()).sort((a, b) => Math.abs(b.real) - Math.abs(a.real));

    return sorted.map(node => {
      const currentPath = `${pathPrefix}/${node.name}`;
      const isExpanded = expanded.has(currentPath);
      const hasChildren = node.children.size > 0;
      
      const diff = node.real - node.orc;
      const isHigher = node.real > node.orc;

      return (
        <Fragment key={currentPath}>
          <tr className={cn(
            "group transition-all duration-150 border-b border-slate-200 last:border-0",
            level === 0 ? "bg-white hover:bg-orange-50/40" : "bg-slate-100/70 hover:bg-orange-50/70"
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
                    isExpanded ? "bg-orange-500 text-white rotate-90" : "bg-slate-100 text-slate-400"
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
              {node.orc ? fmtCurrency(node.orc) : '-'}
            </td>
            <td className="text-right py-3 px-4 text-[13px] font-semibold text-slate-800 tabular-nums">
              {node.real ? fmtCurrency(node.real) : '-'}
            </td>
            <td className={cn(
              "text-right py-3 px-4 text-[13px] font-semibold tabular-nums",
              isHigher ? "text-emerald-600" : "text-rose-600"
            )}>
              {(node.orc || node.real) ? <>{diff > 0 ? "+" : ""}{fmtCurrency(diff)}</> : '-'}
            </td>
          </tr>
          {isExpanded && hasChildren && renderNodes(node.children, currentPath, level + 1)}
        </Fragment>
      );
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      <div className="bg-primary px-6 py-4 flex items-center justify-between">
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
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{subtitle}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        {viewMode === 'hierarchy' ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-500 text-white text-[13px] font-semibold border-b border-orange-600">
                <th className="text-left py-3 px-4">Classificação Contábil</th>
                <th className="text-right py-3 px-4 w-[150px]">Orçado</th>
                <th className="text-right py-3 px-4 w-[150px]">Realizado</th>
                <th className="text-right py-3 px-4 w-[150px]">Variação</th>
              </tr>
            </thead>
            <tbody>
              {root.size > 0 ? renderNodes(root) : (
                <tr><td colSpan={4} className="py-20 text-center text-sm font-medium text-slate-300">Nenhum dado disponível para este filtro.</td></tr>
              )}
            </tbody>
            {root.size > 0 && (() => {
              const totalOrc = Array.from(root.values()).reduce((sum, n) => sum + n.orc, 0);
              const totalReal = Array.from(root.values()).reduce((sum, n) => sum + n.real, 0);
              const totalDiff = totalReal - totalOrc;
              const isTotalHigher = totalReal > totalOrc;
              return (
                <tfoot className="bg-orange-50 border-t-2 border-orange-200 font-semibold">
                  <tr>
                    <td className="py-4 px-4 text-[13px] text-slate-700">Total Consolidado</td>
                    <td className="text-right py-4 px-4 text-[13px] text-slate-700 tabular-nums">{totalOrc ? fmtCurrency(totalOrc) : '-'}</td>
                    <td className="text-right py-4 px-4 text-[13px] text-slate-800 tabular-nums">{totalReal ? fmtCurrency(totalReal) : '-'}</td>
                    <td className={cn("text-right py-4 px-4 text-[13px] font-semibold tabular-nums", isTotalHigher ? "text-emerald-600" : "text-rose-600")}>
                      {(totalOrc || totalReal) ? <>{totalDiff > 0 ? "+" : ""}{fmtCurrency(totalDiff)}</> : '-'}
                    </td>
                  </tr>
                </tfoot>
              );
            })()}
          </table>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-500 text-white text-[12px] font-semibold border-b border-orange-600">
                <th className="text-left py-3 px-3">Departamento</th>
                <th className="text-left py-3 px-3">Centro de Custo</th>
                <th className="text-left py-3 px-3">Conta</th>
                <th className="text-left py-3 px-3">Descrição</th>
                <th className="text-left py-3 px-3">Produto</th>
                <th className="text-right py-3 px-3 w-[120px]">Orçado</th>
                <th className="text-right py-3 px-3 w-[120px]">Realizado</th>
                <th className="text-right py-3 px-3 w-[120px]">Variação</th>
              </tr>
            </thead>
            <tbody>
              {flatEntries.length > 0 ? flatEntries.map((entry) => {
                const diff = entry.real - entry.orc;
                const isHigher = entry.real > entry.orc;
                return (
                  <tr key={entry.id} className="border-b border-slate-200 hover:bg-orange-50/40 transition-colors">
                    <td className="py-2.5 px-3 text-[12px] text-slate-700 font-medium">{entry.departamento || '-'}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-600">{entry.centroCusto || '-'}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-600 font-mono">{entry.conta}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-700">{entry.descricao}</td>
                    <td className="py-2.5 px-3 text-[12px] text-slate-500">{entry.produto || '-'}</td>
                    <td className="text-right py-2.5 px-3 text-[12px] text-slate-600 tabular-nums">{entry.orc ? fmtCurrency(entry.orc) : '-'}</td>
                    <td className="text-right py-2.5 px-3 text-[12px] font-semibold text-slate-800 tabular-nums">{entry.real ? fmtCurrency(entry.real) : '-'}</td>
                    <td className={cn("text-right py-2.5 px-3 text-[12px] font-semibold tabular-nums", isHigher ? "text-emerald-600" : "text-rose-600")}>
                      {(entry.orc || entry.real) ? <>{diff > 0 ? "+" : ""}{fmtCurrency(diff)}</> : '-'}
                    </td>
                  </tr>
                );
              }) : (
                <tr><td colSpan={8} className="py-20 text-center text-sm font-medium text-slate-300">Nenhum dado disponível para este filtro.</td></tr>
              )}
            </tbody>
            {flatEntries.length > 0 && (() => {
              const totalOrc = flatEntries.reduce((sum, e) => sum + e.orc, 0);
              const totalReal = flatEntries.reduce((sum, e) => sum + e.real, 0);
              const totalDiff = totalReal - totalOrc;
              const isTotalHigher = totalReal > totalOrc;
              return (
                <tfoot className="bg-orange-50 border-t-2 border-orange-200 font-semibold">
                  <tr>
                    <td className="py-4 px-3 text-[13px] text-slate-700" colSpan={5}>Total Consolidado ({flatEntries.length} registros)</td>
                    <td className="text-right py-4 px-3 text-[13px] text-slate-700 tabular-nums">{totalOrc ? fmtCurrency(totalOrc) : '-'}</td>
                    <td className="text-right py-4 px-3 text-[13px] text-slate-800 tabular-nums">{totalReal ? fmtCurrency(totalReal) : '-'}</td>
                    <td className={cn("text-right py-4 px-3 text-[13px] font-semibold tabular-nums", isTotalHigher ? "text-emerald-600" : "text-rose-600")}>
                      {(totalOrc || totalReal) ? <>{totalDiff > 0 ? "+" : ""}{fmtCurrency(totalDiff)}</> : '-'}
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