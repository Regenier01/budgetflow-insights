import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useBudgetStore } from '@/store/budgetStore';
import { cn } from '@/lib/utils';
import type { AccountEntry, MonthKey } from '@/types/budget';

interface Props {
  tipoFilter: string | 'all';
  selectedMonth: MonthKey | 'all';
}

export function AccountTable({ tipoFilter, selectedMonth }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const filtered = tipoFilter === 'all' ? accounts : accounts.filter((a) => a.tipo === tipoFilter);

  const toggleCollapse = (codigo: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(codigo)) next.delete(codigo);
      else next.add(codigo);
      return next;
    });
  };

  const isHidden = (account: AccountEntry): boolean => {
    if (!account.codigoPai) return false;
    const parent = accounts.find((a) => a.codigo === account.codigoPai);
    if (!parent) return false;
    if (collapsed.has(parent.codigo)) return true;
    return isHidden(parent);
  };

  const hasChildren = (codigo: string) => accounts.some((a) => a.codigoPai === codigo);

  const getVal = (a: AccountEntry, field: 'orcado' | 'realizado') => {
    if (selectedMonth === 'all') return Object.values(a[field]).reduce((s, v) => s + v, 0);
    return a[field][selectedMonth] || 0;
  };

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);

  return (
    <div className="rounded-lg border bg-card overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary/5">
            <TableHead className="min-w-[280px]">Conta</TableHead>
            <TableHead className="text-right">Orçado</TableHead>
            <TableHead className="text-right">Realizado</TableHead>
            <TableHead className="text-right">Variação (R$)</TableHead>
            <TableHead className="text-right">Variação (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((account) => {
            if (isHidden(account)) return null;
            const orc = getVal(account, 'orcado');
            const real = getVal(account, 'realizado');
            const varR = real - orc;
            const varPct = orc === 0 ? 0 : (varR / Math.abs(orc)) * 100;
            const isPositiveGood = account.tipo === 'R';
            const isGood = isPositiveGood ? varR >= 0 : varR <= 0;

            return (
              <TableRow
                key={account.id}
                className={cn(
                  account.nivel === 1 && 'bg-primary/5 font-semibold',
                  account.nivel === 2 && 'font-medium'
                )}
              >
                <TableCell>
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    style={{ paddingLeft: `${(account.nivel - 1) * 20}px` }}
                    onClick={() => hasChildren(account.codigo) && toggleCollapse(account.codigo)}
                  >
                    {hasChildren(account.codigo) ? (
                      collapsed.has(account.codigo) ? (
                        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                      )
                    ) : (
                      <span className="w-4 shrink-0" />
                    )}
                    <span className="text-muted-foreground text-xs mr-2">{account.codigo}</span>
                    <span>{account.descricao}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right tabular-nums">{fmt(orc)}</TableCell>
                <TableCell className="text-right tabular-nums">{fmt(real)}</TableCell>
                <TableCell className={cn('text-right tabular-nums font-medium', isGood ? 'text-primary' : 'text-destructive')}>
                  {fmt(varR)}
                </TableCell>
                <TableCell className={cn('text-right tabular-nums font-medium', isGood ? 'text-primary' : 'text-destructive')}>
                  {varPct >= 0 ? '+' : ''}{varPct.toFixed(1)}%
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
