import { useState } from 'react';
import { PlusSquare, MinusSquare } from 'lucide-react';
import { useBudgetStore, getAccountCategory } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { AccountEntry, MonthKey, AtividadeKey } from '@/types/budget';

interface Props {
  atividadeFilter: AtividadeKey;
  selectedMonth: MonthKey | 'all';
}

interface CategoryGroup {
  name: string;
  orc: number;
  real: number;
  accounts: AccountEntry[];
}

export function AnalyticalTable({ atividadeFilter, selectedMonth }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // 1. Filtrar contas da atividade específica
  const filtered = accounts.filter(a => a.atividade === atividadeFilter);

  // 2. Agrupar por categoria de negócio
  const groupsMap = new Map<string, CategoryGroup>();

  filtered.forEach(a => {
    // Apenas somamos contas folha (sem filhos) para evitar duplicidade, 
    // ou usamos a lógica de raízes caso o usuário importe grupos.
    // Para visão analítica por descrição, geralmente usamos as contas folha.
    const hasChildren = accounts.some(child => child.codigoPai === a.codigo);
    if (hasChildren) return;

    const category = getAccountCategory(a.descricao);
    const orc = selectedMonth === 'all' 
      ? Object.values(a.orcado).reduce((sum, v) => sum + v, 0)
      : a.orcado[selectedMonth] || 0;
    
    const real = selectedMonth === 'all'
      ? Object.values(a.realizado).reduce((sum, v) => sum + v, 0)
      : a.realizado[selectedMonth] || 0;

    const existing = groupsMap.get(category) || { name: category, orc: 0, real: 0, accounts: [] };
    existing.orc += orc;
    existing.real += real;
    existing.accounts.push(a);
    groupsMap.set(category, existing);
  });

  const groups = Array.from(groupsMap.values()).sort((a, b) => b.orc - a.orc);

  const toggleExpand = (name: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);

  return (
    <div className="overflow-hidden border border-[#d1d1d1] rounded-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#ef810b] text-white uppercase text-[11px] font-bold">
            <th className="text-left py-2 px-3 border-r border-orange-400/30">Custos</th>
            <th className="text-right py-2 px-3 border-r border-orange-400/30 w-[140px]">Orçado</th>
            <th className="text-right py-2 px-3 w-[140px]">Realizado</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <>
              {/* Category Row */}
              <tr key={group.name} className="bg-[#f2f2f2] border-b border-[#d1d1d1] hover:bg-gray-100 transition-colors">
                <td className="py-1.5 px-3">
                  <div 
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => toggleExpand(group.name)}
                  >
                    {expanded.has(group.name) ? (
                      <MinusSquare className="h-4 w-4 text-gray-500" />
                    ) : (
                      <PlusSquare className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="font-medium text-gray-700">{group.name}</span>
                  </div>
                </td>
                <td className="text-right py-1.5 px-3 font-medium border-l border-[#d1d1d1] tabular-nums">
                  {fmt(group.orc)}
                </td>
                <td className="text-right py-1.5 px-3 font-medium border-l border-[#d1d1d1] tabular-nums">
                  {fmt(group.real)}
                </td>
              </tr>

              {/* Account Rows (Expanded) */}
              {expanded.has(group.name) && group.accounts.map(acc => {
                 const aOrc = selectedMonth === 'all' 
                  ? Object.values(acc.orcado).reduce((sum, v) => sum + v, 0)
                  : acc.orcado[selectedMonth] || 0;
                const aReal = selectedMonth === 'all'
                  ? Object.values(acc.realizado).reduce((sum, v) => sum + v, 0)
                  : acc.realizado[selectedMonth] || 0;
                
                return (
                  <tr key={acc.id} className="border-b border-[#e5e5e5] bg-white last:border-b-0">
                    <td className="py-1 px-8 text-xs text-gray-600 italic">
                      {acc.descricao}
                    </td>
                    <td className="text-right py-1 px-3 text-xs text-gray-500 border-l border-[#e5e5e5] tabular-nums">
                      {fmt(aOrc)}
                    </td>
                    <td className="text-right py-1 px-3 text-xs text-gray-500 border-l border-[#e5e5e5] tabular-nums">
                      {fmt(aReal)}
                    </td>
                  </tr>
                );
              })}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnalyticalTable;
