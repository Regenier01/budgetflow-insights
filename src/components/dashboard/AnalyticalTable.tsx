import { useState, Fragment } from 'react';
import { ChevronRight } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { MonthKey, AtividadeKey, AccountEntry } from '@/types/budget';

interface Props {
  atividadeFilter: AtividadeKey;
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

export function AnalyticalTable({ 
  atividadeFilter, 
  selectedMonth, 
  costCenterFilter,
  departmentFilter,
  tipoFilter,
  entryFilter,
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
  if (entryFilter) filtered = filtered.filter(entryFilter);

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
        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{subtitle}</span>
      </div>
      <div className="overflow-x-auto">
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
      </div>
    </div>
  );
}

export default AnalyticalTable;