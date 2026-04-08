import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { ActivityCards } from '@/components/dashboard/ActivityCards';
import { GlobalSummary } from '@/components/dashboard/GlobalSummary';
import { MONTHS } from '@/types/budget';
import type { MonthKey } from '@/types/budget';

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Executivo</h1>
          <p className="text-sm text-muted-foreground">Visão consolidada Orçado vs Realizado</p>
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

      <GlobalSummary />

      <div className="grid gap-6">
        <h2 className="text-xl font-semibold">Resumo por Categoria</h2>
        <SummaryCards selectedMonth={selectedMonth} />
      </div>

      <div className="grid gap-6">
        <h2 className="text-xl font-semibold">Evolução por Atividade</h2>
        <ActivityCards />
      </div>
    </div>
  );
}