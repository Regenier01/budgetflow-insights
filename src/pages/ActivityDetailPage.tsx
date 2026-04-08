import { useParams } from 'react-router-dom';
import { useState } from 'react';
import AnalyticalTable from '@/components/dashboard/AnalyticalTable';
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
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-6 w-1 bg-orange-500 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600/70">Relatório Detalhado</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            {atividade.label}
          </h1>
          <p className="text-sm text-slate-500 font-medium">Análise granular de orçado vs realizado por categoria contábil</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Select value={selectedMonth} onValueChange={(v) => setSelectedMonth(v as MonthKey | 'all')}>
            <SelectTrigger className="w-[160px] bg-white border-slate-200 shadow-sm font-semibold text-slate-700">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="font-semibold">Acumulado 2026/27</SelectItem>
              {MONTHS.map((m) => (
                <SelectItem key={m.key} value={m.key}>{m.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <SummaryCards selectedMonth={selectedMonth} />

      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Abertura de Custos</h2>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
            {atividade.label}
          </div>
        </div>
        <AnalyticalTable 
          atividadeFilter={atividade.key}
          selectedMonth={selectedMonth}
        />
      </div>
    </div>
  );
}