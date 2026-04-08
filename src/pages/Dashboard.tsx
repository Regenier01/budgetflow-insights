import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { AccountTable } from '@/components/dashboard/AccountTable';
import { BudgetChart } from '@/components/dashboard/BudgetChart';
import { MONTHS, TIPO_LABELS } from '@/types/budget';
import type { MonthKey } from '@/types/budget';

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');
  const [tipoFilter, setTipoFilter] = useState<string>('all');

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Relatório Orçado vs Realizado</h1>
          <p className="text-sm text-muted-foreground">Abril/2026 — Março/2027</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedMonth} onValueChange={(v) => setSelectedMonth(v as MonthKey | 'all')}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Acumulado</SelectItem>
              {MONTHS.map((m) => (
                <SelectItem key={m.key} value={m.key}>{m.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <SummaryCards selectedMonth={selectedMonth} />

      <BudgetChart tipoFilter={tipoFilter} />

      <Tabs value={tipoFilter} onValueChange={setTipoFilter}>
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          {Object.entries(TIPO_LABELS).map(([k, v]) => (
            <TabsTrigger key={k} value={k}>{v}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={tipoFilter} className="mt-4">
          <AccountTable tipoFilter={tipoFilter} selectedMonth={selectedMonth} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
