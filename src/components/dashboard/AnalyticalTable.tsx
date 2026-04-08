import { useState, Fragment } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { MonthKey, AtividadeKey } from '@/types/budget';

interface Props {
  atividadeFilter: AtividadeKey;
  selectedMonth: MonthKey | 'all';
}

interface Node {
  name: string;
  orc: number;
  real: number;
  children: Map<string, Node>;
}

export function AnalyticalTable({ atividadeFilter, selectedMonth }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // 1. Filtrar contas da atividade específica
  const filtered = accounts.filter(a => a.atividade === atividadeFilter);

  // 2. Construir árvore de 3 níveis: N9 -> Descrição -> Produto
  const root = new Map<string, Node>();

  filtered.forEach(a => {
    const orc = selectedMonth === 'all' 
      ? Object.values(a.orcado).reduce((sum, v) => sum + v, 0)
      : a.orcado[selectedMonth] || 0;
    
    const real = selectedMonth === 'all'
      ? Object.values(a.realizado).reduce((sum, v) => sum + v, 0)
      : a.realizado[selectedMonth] || 0;

    // Se não tiver valor em nenhum dos dois, ignora
    if (orc === 0 && real === 0) return;

    const n9 = a.grupoContabilN9 || 'Outras Despesas';
    const desc = a.descricao || 'Sem Descrição';
    const prod = a.nomeProduto || '';

    // Nível 1: GRUPOCONTABILN9
    if (!root.has(n9)) {
      root.set(n9, { name: n9, orc: 0, real: 0, children: new Map() });
    }
    const nodeN9 = root.get(n9)!;
    nodeN9.orc += orc;
    nodeN9.real += real;

    // Nível 2: DESCRICAO_CONTABIL
    if (!nodeN9.children.has(desc)) {
      nodeN9.children.set(desc, { name: desc, orc: 0, real: 0, children: new Map() });
    }
    const nodeDesc = nodeN9.children.get(desc)!;
    nodeDesc.orc += orc;
    nodeDesc.real += real;

    // Nível 3: NOMEPRODUTO (se existir)
    if (prod) {
      if (!nodeDesc.children.has(prod)) {
        nodeDesc.children.set(prod, { name: prod, orc: 0, real: 0, children: new Map() });
      }
      const nodeProd = nodeDesc.children.get(prod)!;
      nodeProd.orc += orc;
      nodeProd.real += real;
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
    const sorted = Array.from(nodes.values()).sort((a, b) => b.orc - a.orc);

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
              "group transition-all duration-200 border-b border-gray-100 last:border-0",
              level === 0 ? "bg-white hover:bg-orange-50/30" : 
              level === 1 ? "bg-gray-50/40 hover:bg-orange-50/20" : 
              "bg-white hover:bg-gray-50"
            )}
          >
            <td className="py-2.5 px-4">
              <div 
                className="flex items-center gap-2 cursor-pointer select-none"
                style={{ paddingLeft: `${level * 24}px` }}
                onClick={() => hasChildren && toggleExpand(currentPath)}
              >
                {hasChildren ? (
                  isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-orange-500 transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
                  )
                ) : (
                  <div className="w-4" />
                )}
                <span className={cn(
                  "truncate transition-colors",
                  level === 0 ? "text-[11px] font-bold uppercase tracking-wider text-slate-800" :
                  level === 1 ? "text-xs font-semibold text-slate-600" :
                  "text-[11px] text-slate-500"
                )}>
                  {node.name}
                </span>
              </div>
            </td>
            
            <td className="text-right py-2.5 px-4 font-mono text-[11px] text-slate-600 border-l border-gray-50">
              {fmtCurrency(node.orc)}
            </td>
            
            <td className="text-right py-2.5 px-4 font-mono text-[11px] text-slate-800 border-l border-gray-50">
              {fmtCurrency(node.real)}
            </td>

            <td className={cn(
              "text-right py-2.5 px-4 font-mono text-[11px] border-l border-gray-50 font-medium",
              isOverBudget ? "text-rose-500" : "text-emerald-500"
            )}>
              {diff > 0 ? "+" : ""}{fmtCurrency(diff)}
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
          Abertura Analítica <span className="text-orange-400 ml-2">(N9 &gt; Descrição &gt; Produto)</span>
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50/80 text-slate-500 uppercase text-[9px] font-bold tracking-widest border-b border-slate-200">
              <th className="text-left py-3 px-4 font-bold">Item / Agrupamento</th>
              <th className="text-right py-3 px-4 w-[140px] border-l border-slate-200">Orçado</th>
              <th className="text-right py-3 px-4 w-[140px] border-l border-slate-200">Realizado</th>
              <th className="text-right py-3 px-4 w-[140px] border-l border-slate-200">Variação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {root.size > 0 ? (
              renderNodes(root)
            ) : (
              <tr>
                <td colSpan={4} className="py-12 text-center">
                  <p className="text-sm text-slate-400">Nenhum dado encontrado para os filtros selecionados.</p>
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
