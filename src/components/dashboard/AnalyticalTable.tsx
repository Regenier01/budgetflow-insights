import { useState, Fragment } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { MonthKey, AtividadeKey } from '@/types/budget';

interface Props {
  atividadeFilter: AtividadeKey;
  selectedMonth: MonthKey | 'all';
  costCenterFilter?: string;
}

interface Node {
  name: string;
  orc: number;
  real: number;
  isInvalid?: boolean;
  children: Map<string, Node>;
}

export function AnalyticalTable({ atividadeFilter, selectedMonth, costCenterFilter }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  let filtered = accounts.filter(a => a.atividade === atividadeFilter);
  
  if (costCenterFilter) {
    filtered = filtered.filter(a => a.centroCusto === costCenterFilter);
  }

  const root = new Map<string, Node>();

  filtered.forEach(a => {
    const orc = selectedMonth === 'all' 
      ? Object.values(a.orcado).reduce((sum, v) => sum + v, 0)
      : a.orcado[selectedMonth] || 0;
    
    const real = selectedMonth === 'all'
      ? Object.values(a.realizado).reduce((sum, v) => sum + v, 0)
      : a.realizado[selectedMonth] || 0;

    if (orc === 0 && real === 0) return;

    const n9 = a.grupoContabilN9 || 'Outras Despesas';
    const desc = a.descricao || 'Sem Descrição';
    const prod = a.nomeProduto || '';

    if (!root.has(n9)) {
      root.set(n9, { name: n9, orc: 0, real: 0, children: new Map() });
    }
    const nodeN9 = root.get(n9)!;
    nodeN9.orc += orc;
    nodeN9.real += real;
    if (a.isInvalidMapping) nodeN9.isInvalid = true;

    if (!nodeN9.children.has(desc)) {
      nodeN9.children.set(desc, { name: desc, orc: 0, real: 0, children: new Map() });
    }
    const nodeDesc = nodeN9.children.get(desc)!;
    nodeDesc.orc += orc;
    nodeDesc.real += real;
    if (a.isInvalidMapping) nodeDesc.isInvalid = true;

    if (prod) {
      if (!nodeDesc.children.has(prod)) {
        nodeDesc.children.set(prod, { name: prod, orc: 0, real: 0, children: new Map() });
      }
      const nodeProd = nodeDesc.children.get(prod)!;
      nodeProd.orc += orc;
      nodeProd.real += real;
      if (a.isInvalidMapping) nodeProd.isInvalid = true;
    }
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
    const sorted = Array.from(nodes.values()).sort((a, b) => b.real - a.real || b.orc - a.orc);

    return sorted.map(node => {
      const currentPath = `${pathPrefix}/${node.name}`;
      const isExpanded = expanded.has(currentPath);
      const hasChildren = node.children.size > 0;
      
      const diff = node.real - node.orc;
      const isOverBudget = diff > 0;

      return (
        <Fragment key={currentPath}>
          <tr 
            className={cn(
              "group transition-all duration-150 border-b border-slate-100 last:border-0",
              level === 0 ? "bg-slate-50/80 hover:bg-orange-50/40" : 
              level === 1 ? "bg-white hover:bg-orange-50/20" : 
              "bg-white hover:bg-slate-50/60"
            )}
          >
            <td className="py-2 px-3">
              <div 
                className={cn("flex items-center gap-2", hasChildren && "cursor-pointer select-none")}
                style={{ paddingLeft: `${level * 20}px` }}
                onClick={() => hasChildren && toggleExpand(currentPath)}
              >
                {hasChildren ? (
                  <button
                    className={cn(
                      "flex items-center justify-center h-5 w-5 rounded border text-[10px] font-bold transition-all duration-150 shrink-0",
                      isExpanded 
                        ? "bg-orange-500 border-orange-500 text-white shadow-sm" 
                        : "bg-white border-slate-300 text-slate-500 hover:border-orange-400 hover:text-orange-500"
                    )}
                  >
                    {isExpanded ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </button>
                ) : (
                  <div className="w-5 shrink-0" />
                )}
                <span className={cn(
                  "truncate transition-colors",
                  level === 0 ? "text-[11px] font-bold uppercase tracking-wider text-slate-800" :
                  level === 1 ? "text-[11px] font-semibold text-slate-600" :
                  "text-[11px] text-slate-500 italic"
                )}>
                  {node.name}
                </span>
              </div>
            </td>
            
            <td className={cn(
              "text-right py-2 px-3 font-mono text-[11px] border-l border-slate-100",
              level === 0 ? "font-bold text-slate-700" : "text-slate-500"
            )}>
              {node.orc ? fmtCurrency(node.orc) : '-'}
            </td>
            
            <td className={cn(
              "text-right py-2 px-3 font-mono text-[11px] border-l border-slate-100",
              node.isInvalid ? "text-orange-500 font-bold" : (level === 0 ? "font-bold text-slate-800" : "text-slate-700")
            )}>
              {node.real ? fmtCurrency(node.real) : '-'}
            </td>

            <td className={cn(
              "text-right py-2 px-3 font-mono text-[11px] border-l border-slate-100 font-medium",
              isOverBudget ? "text-rose-500" : "text-emerald-500"
            )}>
              {(node.orc || node.real) ? (
                <>{diff > 0 ? "+" : ""}{fmtCurrency(diff)}</>
              ) : '-'}
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
        <h3 className="text-xs font-bold text-white uppercase tracking-widest">
          Abertura Analítica
        </h3>
        <span className="text-[10px] text-orange-400 font-semibold tracking-wide">
          N9 → Descrição → Produto
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50/80 text-slate-500 uppercase text-[9px] font-bold tracking-widest border-b border-slate-200">
              <th className="text-left py-2.5 px-3 font-bold">Item / Agrupamento</th>
              <th className="text-right py-2.5 px-3 w-[130px] border-l border-slate-200">Orçado</th>
              <th className="text-right py-2.5 px-3 w-[130px] border-l border-slate-200">Realizado</th>
              <th className="text-right py-2.5 px-3 w-[130px] border-l border-slate-200">Variação</th>
            </tr>
          </thead>
          <tbody>
            {root.size > 0 ? (
              renderNodes(root)
            ) : (
              <tr>
                <td colSpan={4} className="py-12 text-center">
                  <p className="text-sm text-slate-400">Nenhum dado encontrado. Faça upload de uma planilha para visualizar os valores.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnalyticalTable;
