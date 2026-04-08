import { useState } from 'react';
import { PlusSquare, MinusSquare } from 'lucide-react';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { AccountEntry, MonthKey, AtividadeKey } from '@/types/budget';

interface Props {
  atividadeFilter: AtividadeKey;
  selectedMonth: MonthKey | 'all';
}

interface Node {
  name: string;
  orc: number;
  real: number;
  children: Map<string, Node>;
  isLeaf?: boolean;
}

export function AnalyticalTable({ atividadeFilter, selectedMonth }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // 1. Filtrar contas da atividade específica
  const filtered = accounts.filter(a => a.atividade === atividadeFilter);

  // 2. Construir árvore de 3 níveis: N9 -> Descrição -> Produto
  const root = new Map<string, Node>();

  filtered.forEach(a => {
    // Evitar duplicidade somando apenas as contas que não têm filhos em termos de código (raízes lógicas de valor)
    // No entanto, para a visão de cascata por campos de texto, somamos os valores das "folhas" de importação.
    const hasChildren = accounts.some(child => child.codigoPai === a.codigo);
    if (hasChildren) return;

    const orc = selectedMonth === 'all' 
      ? Object.values(a.orcado).reduce((sum, v) => sum + v, 0)
      : a.orcado[selectedMonth] || 0;
    
    const real = selectedMonth === 'all'
      ? Object.values(a.realizado).reduce((sum, v) => sum + v, 0)
      : a.realizado[selectedMonth] || 0;

    const n9 = a.grupoContabilN9 || '';
    const desc = a.descricao || '';
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

    // Nível 3: NOMEPRODUTO
    if (!nodeDesc.children.has(prod)) {
      nodeDesc.children.set(prod, { name: prod, orc: 0, real: 0, children: new Map(), isLeaf: true });
    }
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

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);

  const renderNodes = (nodes: Map<string, Node>, pathPrefix: string = '', level: number = 0) => {
    const sorted = Array.from(nodes.values()).sort((a, b) => b.orc - a.orc);

    return sorted.map(node => {
      const currentPath = `${pathPrefix}/${node.name}`;
      const isExpanded = expanded.has(currentPath);
      const hasChildren = node.children.size > 0;
      
      // Se o nome está em branco, mas não é folha, mostramos um indicador de "Sem Categoria/Nome" 
      // ou apenas o espaço conforme pedido, mas com o ícone de expansão se houver filhos.
      const displayName = node.name || (level === 2 ? "" : "(Vazio)");

      return (
        <Fragment key={currentPath}>
          <tr className={cn(
            "border-b border-[#d1d1d1] transition-colors",
            level === 0 ? "bg-[#f2f2f2] font-semibold" : level === 1 ? "bg-white font-medium" : "bg-white/50 text-xs italic"
          )}>
            <td className="py-1.5 px-3">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                style={{ paddingLeft: `${level * 24}px` }}
                onClick={() => hasChildren && toggleExpand(currentPath)}
              >
                {hasChildren ? (
                  isExpanded ? (
                    <MinusSquare className="h-4 w-4 text-gray-500" />
                  ) : (
                    <PlusSquare className="h-4 w-4 text-gray-500" />
                  )
                ) : (
                  <span className="w-4" />
                )}
                <span className={cn(level === 0 ? "text-gray-800" : "text-gray-600")}>
                  {displayName}
                </span>
              </div>
            </td>
            <td className="text-right py-1.5 px-3 border-l border-[#d1d1d1] tabular-nums">
              {fmt(node.orc)}
            </td>
            <td className="text-right py-1.5 px-3 border-l border-[#d1d1d1] tabular-nums">
              {fmt(node.real)}
            </td>
          </tr>
          {isExpanded && hasChildren && renderNodes(node.children, currentPath, level + 1)}
        </Fragment>
      );
    });
  };

  return (
    <div className="overflow-hidden border border-[#d1d1d1] rounded-sm bg-white">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#ef810b] text-white uppercase text-[11px] font-bold">
            <th className="text-left py-2 px-3 border-r border-orange-400/30">Abertura Cascata</th>
            <th className="text-right py-2 px-3 border-r border-orange-400/30 w-[140px]">Orçado</th>
            <th className="text-right py-2 px-3 w-[140px]">Realizado</th>
          </tr>
        </thead>
        <tbody>
          {renderNodes(root)}
        </tbody>
      </table>
    </div>
  );
}

import { Fragment } from 'react';
export default AnalyticalTable;
