import { useState, Fragment } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { MonthKey, AtividadeKey } from '@/types/budget';

interface Props {
  atividadeFilter: AtividadeKey;
  selectedMonth: MonthKey | 'all';
  costCenterFilter?: string;
  departmentFilter?: string;
  tipoFilter?: ('R' | 'C' | 'D')[];
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

export function AnalyticalTable({ 
  atividadeFilter, 
  selectedMonth, 
  costCenterFilter,
  departmentFilter,
  tipoFilter,
  title = "Abertura Analítica",
  subtitle = "N9 → Descrição → Produto",
  accentColor = "orange"
}: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  let filtered = accounts.filter(a => a.atividade === atividadeFilter && a.nivel === 5);
  
  if (costCenterFilter) filtered = filtered.filter(a => a.centroCusto === costCenterFilter);
  if (departmentFilter) filtered = filtered.filter(a => a.departamento === departmentFilter);
  if (tipoFilter) filtered = filtered.filter(a => tipoFilter.includes(a.tipo));

  const root = new Map<string, Node>();

  filtered.forEach(a => {
    const orc = selectedMonth === 'all' 
      ? Object.values(a.orcado).reduce((sum, v) => sum + v, 0)
      : a.orcado[selectedMonth] || 0;
    
    const real = selectedMonth === 'all'
      ? Object.values(a.realizado).reduce((sum, v) => sum + v, 0)
      : a.realizado[selectedMonth] || 0;

    if (orc === 0 && real === 0) return;

    // Normalização do N9: Garante que o código da conta pai nível 3 esteja presente para agrupamento correto
    let n9 = a.grupoContabilN9 || 'Outras Categorias';
    if (!n9.match(/^\d+\.\d+\.\d+/)) {
      const prefix = a.codigo.split('.').slice(0, 3).join('.');
      n9 = `${prefix} - ${n9}`;
    }
    
    const desc = a.descricao || 'Sem Descrição';
    const prod = a.nomeProduto || 'Diversos';

    if (!root.has(n9)) root.set(n9, { name: n9, orc: 0, real: 0, children: new Map() });
    const nodeN9 = root.get(n9)!;
    nodeN9.orc += orc;
    nodeN9.real += real;

    if (!nodeN9.children.has(desc)) nodeN9.children.set(desc, { name: desc, orc: 0, real: 0, children: new Map() });
    const nodeDesc = nodeN9.children.get(desc)!;
    nodeDesc.orc += orc;
    nodeDesc.real += real;

    if (!nodeDesc.children.has(prod)) nodeDesc.children.set(prod, { name: prod, orc: 0, real: 0, children: new Map() });
    const nodeProd = nodeDesc.children.get(prod)!;
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

  const isRevenue = tipoFilter?.includes('R') && !tipoFilter?.includes('C') && !tipoFilter?.includes('D');

  const renderNodes = (nodes: Map<string, Node>, pathPrefix: string = '', level: number = 0) => {
    const sorted = Array.from(nodes.values()).sort((a, b) => Math.abs(b.real) - Math.abs(a.real));

    return sorted.map(node => {
      const currentPath = `${pathPrefix}/${node.name}`;
      const isExpanded = expanded.has(currentPath);
      const hasChildren = node.children.size > 0;
      
      const diff = node.real - node.orc;
      const isOverBudget = isRevenue ? diff < 0 : diff > 0;

      return (
        <Fragment key={currentPath}>
          <tr className={cn(
            "group transition-all duration-150 border-b border-slate-100 last:border-0",
            level === 0 ? "bg-slate-50/80 hover:bg-slate-100/50" : "bg-white hover:bg-slate-50/40"
          )}>
            <td className="py-2 px-3">
              <div 
                className={cn("flex items-center gap-2", hasChildren && "cursor-pointer select-none")}
                style={{ paddingLeft: `${level * 20}px` }}
                onClick={() => hasChildren && toggleExpand(currentPath)}
              >
                {hasChildren ? (
                  <button className={cn(
                    "flex items-center justify-center h-5 w-5 rounded border text-[10px] font-bold transition-all duration-150 shrink-0",
                    isExpanded 
                      ? `bg-${accentColor}-500 border-${accentColor}-500 text-white` 
                      : `bg-white border-slate-300 text-slate-500`
                  )}>
                    {isExpanded ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </button>
                ) : <div className="w-5 shrink-0" />}
                <span className={cn(
                  "truncate",
                  level === 0 ? "text-[11px] font-bold uppercase text-slate-800" :
                  level === 1 ? "text-[11px] font-semibold text-slate-600" : "text-[11px] text-slate-500 italic"
                )}>
                  {node.name}
                </span>
              </div>
            </td>
            <td className="text-right py-2 px-3 font-mono text-[11px] border-l border-slate-100 text-slate-500">
              {node.orc ? fmtCurrency(node.orc) : '-'}
            </td>
            <td className="text-right py-2 px-3 font-mono text-[11px] border-l border-slate-100 font-bold text-slate-800">
              {node.real ? fmtCurrency(node.real) : '-'}
            </td>
            <td className={cn(
              "text-right py-2 px-3 font-mono text-[11px] border-l border-slate-100 font-medium",
              isOverBudget ? "text-rose-500" : "text-emerald-500"
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
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest">{title}</h3>
        <span className={cn("text-[10px] font-semibold", `text-${accentColor}-400`)}>{subtitle}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50/80 text-slate-500 uppercase text-[9px] font-bold tracking-widest border-b border-slate-200">
              <th className="text-left py-2.5 px-3">Item / Agrupamento</th>
              <th className="text-right py-2.5 px-3 w-[130px] border-l border-slate-200">Orçado</th>
              <th className="text-right py-2.5 px-3 w-[130px] border-l border-slate-200">Realizado</th>
              <th className="text-right py-2.5 px-3 w-[130px] border-l border-slate-200">Variação</th>
            </tr>
          </thead>
          <tbody>
            {root.size > 0 ? renderNodes(root) : (
              <tr><td colSpan={4} className="py-12 text-center text-sm text-slate-400">Nenhum dado encontrado.</td></tr>
            )}
          </tbody>
          {root.size > 0 && (() => {
            const totalOrc = Array.from(root.values()).reduce((sum, n) => sum + n.orc, 0);
            const totalReal = Array.from(root.values()).reduce((sum, n) => sum + n.real, 0);
            const totalDiff = totalReal - totalOrc;
            const isTotalOverBudget = isRevenue ? totalDiff < 0 : totalDiff > 0;
            return (
              <tfoot className="bg-slate-100/80 border-t-2 border-slate-300 font-bold">
                <tr>
                  <td className="py-3 px-3 text-[11px] uppercase text-slate-800 pl-4">Total</td>
                  <td className="text-right py-3 px-3 font-mono text-[12px] text-slate-800 border-l border-slate-200">{totalOrc ? fmtCurrency(totalOrc) : '-'}</td>
                  <td className="text-right py-3 px-3 font-mono text-[12px] text-slate-800 border-l border-slate-200">{totalReal ? fmtCurrency(totalReal) : '-'}</td>
                  <td className={cn("text-right py-3 px-3 font-mono text-[12px] border-l border-slate-200", isTotalOverBudget ? "text-rose-600" : "text-emerald-600")}>
                    {(totalOrc || totalReal) ? <>{totalDiff > 0 ? "+" : ""}{fmtCurrency(totalDiff)}</> : '-'}
                  </td>
                </tr>
              </tfoot>
            );
          })()}
        </table>
      </div>
    </div>
  );
}

export default AnalyticalTable;