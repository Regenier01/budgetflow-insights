import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { AccountTable } from '@/components/dashboard/AccountTable';
import { AnalyticalTable } from '@/components/dashboard/AnalyticalTable';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ATIVIDADES, MONTHS, CULTURAS, type MonthKey, type CulturaKey } from '@/types/budget';
import NotFound from './NotFound';

export default function ActivityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');
  const [selectedCultura, setSelectedCultura] = useState<CulturaKey | 'all'>('all');
  
  const atividade = ATIVIDADES.find(a => a.key === id);
  
  if (!atividade) return <NotFound />;

  const isAgricola = atividade.key === 'AGRICOLA';

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Detalhamento: {atividade.label}</h1>
          <p className="text-sm text-muted-foreground">Visão analítica das contas contábeis</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {isAgricola && (
            <Select value={selectedCultura} onValueChange={(v) => setSelectedCultura(v as CulturaKey | 'all')}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Cultura" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas Culturas</SelectItem>
                {CULTURAS.map((c) => (
                  <SelectItem key={c.key} value={c.key}>{c.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
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

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Abertura de Custos — {atividade.label}</h2>
        <AnalyticalTable 
          atividadeFilter={atividade.key}
          selectedMonth={selectedMonth}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">
          Plano de Contas Completo — {atividade.label} 
          {selectedCultura !== 'all' && ` (${CULTURAS.find(c => c.key === selectedCultura)?.label})`}
        </h2>
        <AccountTable 
          tipoFilter="all" 
          selectedMonth={selectedMonth} 
          atividadeFilter={atividade.key} 
          culturaFilter={selectedCultura}
        />
      </div>
    </div>
  );
}