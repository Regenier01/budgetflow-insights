import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { AccountTable } from '@/components/dashboard/AccountTable';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ATIVIDADES, MONTHS, type MonthKey } from '@/types/budget';
import NotFound from './NotFound';

export default function ActivityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');
  
  const atividade = ATIVIDADES.find(a => a.key === id);
  
  if (!atividade) return <NotFound />;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Detalhamento: {atividade.label}</h1>
          <p className="text-sm text-muted-foreground">Visão analítica das contas contábeis</p>
        </div>
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

      <SummaryCards selectedMonth={selectedMonth} />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Plano de Contas — {atividade.label}</h2>
        <AccountTable 
          tipoFilter="all" 
          selectedMonth={selectedMonth} 
          atividadeFilter={atividade.key} 
        />
      </div>
    </div>
  );
}