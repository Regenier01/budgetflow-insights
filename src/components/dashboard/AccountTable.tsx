import { useState, Fragment } from 'react';
import { PlusSquare, MinusSquare } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { MonthKey, AtividadeKey, CulturaKey } from '@/types/budget';

interface Props {
  tipoFilter: string | 'all';
  selectedMonth: MonthKey | 'all';
  atividadeFilter?: AtividadeKey | 'all';
  culturaFilter?: CulturaKey | 'all';
}

interface Node {
  name: string;
  orc: number;
  real: number;
  children: Map<string, Node>;
}

export function AccountTable({ tipoFilter, selectedMonth, atividadeFilter = 'all', culturaFilter = 'all' }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // 1. Filtrar contas
  const filtered = accounts.filter((a) => {
    if (tipoFilter !== 'all' && a.tipo !== tipoFilter) return false;
    if (atividadeFilter !== 'all' && a.atividade !== atividadeFilter) return false;
    if (culturaFilter !== 'all' && a.cultura !== culturaFilter) return false;
    return true;
  });

  // 2. Construir árvore
  const root = new Map<string, Node>();

  filtered.forEach(a => {
    const orc = selectedMonth === 'all' 
      ? Object.values(a.orcado).reduce((sum, v) => sum + v, 0)
      : a.orcado[selectedMonth] || 0;
    
    const real = selectedMonth === 'all'
      ? Object.values(a.realizado).reduce((sum, v) => sum + v, 0)
      : a.realizado[selectedMonth] || 0;

    const n9 = a.grupoContabilN9 || 'Sem Grupo';
    const desc = a.descricao || 'Sem Descrição';
    const prod = a.nomeProduto || '';

    if (!root.has(n9)) {
      root.set(n9, { name: n9, orc: 0, real: 0, children: new Map() });
    }
    const nodeN9 = root.get(n9)!;
    nodeN9.orc += orc;
    nodeN9.real += real;

    if (!nodeN9.children.has(desc)) {
      nodeN9.children.set(desc, { name: desc, orc: 0, real: 0, children: new Map() });
    }
    const nodeDesc = nodeN9.children.get(desc)!;
    nodeDesc.orc += orc;
    nodeDesc.real += real;

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

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);

  const renderNodes = (nodes: Map<string, Node>, pathPrefix: string = '', level: number = 0) => {
    const sorted = Array.from(nodes.values()).sort((a, b) => b.orc - a.orc);

    return sorted.map(node => {
      const currentPath = `${pathPrefix}/${node.name}`;
      const isExpanded = expanded.has(currentPath);
      const hasChildren = node.children.size > 0;
      
      const varR = node.real - node.orc;
      const varPct = node.orc === 0 ? 0 : (varR / Math.abs(node.orc)) * 100;
      const isGood = varR <= 0; // Simplificação: assume despesa por padrão

      return (
        <Fragment key={currentPath}>
          <tr className={cn(
            "border-b border-[#d1d1d1] transition-colors",
            level === 0 ? "bg-[#f2f2f2] font-bold text-gray-800" : 
            level === 1 ? "bg-[#f9f9f9] font-semibold text-gray-700" : 
            "bg-white text-gray-600"
          )}>
            <td className="py-1 px-3">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                style={{ paddingLeft: `${level * 20}px` }}
                onClick={() => hasChildren && toggleExpand(currentPath)}
              >
                {hasChildren ? (
                  isExpanded ? (
                    <MinusSquare className="h-4 w-4 text-gray-400 shrink-0" />
                  ) : (
                    <PlusSquare className="h-4 w-4 text-gray-400 shrink-0" />
                  )
                ) : (
                  <span className="w-4 shrink-0" />
                )}
                <span className={cn(level < 2 ? "uppercase tracking-tight text-[11px]" : "text-xs")}>
                  {node.name}
                </span>
              </div>
            </td>
            <td className="text-right py-1 px-3 border-l border-[#d1d1d1] tabular-nums text-xs">{fmt(node.orc)}</td>
            <td className="text-right py-1 px-3 border-l border-[#d1d1d1] tabular-nums text-xs">{fmt(node.real)}</td>
            <td className={cn('text-right py-1 px-3 border-l border-[#d1d1d1] tabular-nums text-xs font-medium', isGood ? 'text-green-600' : 'text-red-600')}>
              {fmt(varR)}
            </td>
            <td className={cn('text-right py-1 px-3 border-l border-[#d1d1d1] tabular-nums text-xs font-medium', isGood ? 'text-green-600' : 'text-red-600')}>
              {varPct >= 0 ? '+' : ''}{varPct.toFixed(1)}%
            </td>
          </tr>
          {isExpanded && hasChildren && renderNodes(node.children, currentPath, level + 1)}
        </Fragment>
      );
    });
  };

  return (
    <div className="overflow-hidden border border-[#d1d1d1] rounded-sm bg-white shadow-sm">
      <table className="w-full border-collapse">
        <thead className="bg-[#ef810b] text-white uppercase text-[10px] font-bold tracking-wider">
          <tr>
            <th className="text-left py-2 px-3 border-r border-orange-400/30">Plano de Contas</th>
            <th className="text-right py-2 px-3 border-r border-orange-400/30">Orçado</th>
            <th className="text-right py-2 px-3 border-r border-orange-400/30">Realizado</th>
            <th className="text-right py-2 px-3 border-r border-orange-400/30">Var (R$)</th>
            <th className="text-right py-2 px-3">Var (%)</th>
          </tr>
        </thead>
        <tbody>
          {renderNodes(root)}
        </tbody>
      </table>
    </div>
  );
}