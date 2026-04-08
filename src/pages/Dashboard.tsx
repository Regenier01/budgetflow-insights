import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { ActivityCards } from '@/components/dashboard/ActivityCards';
import { AccountTable } from '@/components/dashboard/AccountTable';
import { GlobalSummary } from '@/components/dashboard/GlobalSummary';
import { MONTHS, ATIVIDADES } from '@/types/budget';
import type { MonthKey } from '@/types/budget';

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');
  const [atividadeFilter, setAtividadeFilter] = useState<string>('all');

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

      {/* Novo Resumo Global no Topo */}
      <GlobalSummary />

      <SummaryCards selectedMonth={selectedMonth} />

      <ActivityCards />

      <Tabs value={atividadeFilter} onValueChange={setAtividadeFilter}>
        <TabsList className="flex-wrap h-auto gap-1">
          <TabsTrigger value="all">Todas</TabsTrigger>
          {ATIVIDADES.map((a) => (
            <TabsTrigger key={a.key} value={a.key}>{a.label}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={atividadeFilter} className="mt-4">
          <AccountTable tipoFilter="all" selectedMonth={selectedMonth} atividadeFilter={atividadeFilter} />
        </TabsContent>
      </Tabs>
    </div>
  );
}