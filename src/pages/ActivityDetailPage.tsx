import { useParams } from 'react-router-dom';
import { useState } from 'react';
import AnalyticalTable from '@/components/dashboard/AnalyticalTable';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ATIVIDADES, MONTHS, type MonthKey } from '@/types/budget';
import { ACTIVITY_CC_MAPPING } from '@/data/activityCCMapping';
import NotFound from './NotFound';

export default function ActivityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [selectedMonth, setSelectedMonth] = useState<MonthKey | 'all'>('all');
  const [selectedCC, setSelectedCC] = useState<string | 'all'>('all');
  
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
          <Select value={selectedCC} onValueChange={(v) => setSelectedCC(v)}>
            <SelectTrigger className="w-[200px] bg-white border-slate-200 shadow-sm font-semibold text-slate-700">
              <SelectValue placeholder="Centro de Custo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="font-semibold">Todos Centros de Custo</SelectItem>
              {(ACTIVITY_CC_MAPPING[id as keyof typeof ACTIVITY_CC_MAPPING] || []).map((cc) => (
                <SelectItem key={cc} value={cc}>{cc}</SelectItem>
              ))}
            </SelectContent>
          </Select>

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

      <div className="grid gap-8">
        {/* Seção de Receitas */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Abertura de Receitas</h2>
            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
              Entradas
            </div>
          </div>
          <AnalyticalTable 
            atividadeFilter={atividade.key}
            selectedMonth={selectedMonth}
            costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
            tipoFilter={['R']}
            title="Detalhamento de Receitas"
            accentColor="emerald"
          />
        </div>

        {/* Seção de Custos e Despesas */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Abertura de Custos e Despesas</h2>
            <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">
              Saídas
            </div>
          </div>
          <AnalyticalTable 
            atividadeFilter={atividade.key}
            selectedMonth={selectedMonth}
            costCenterFilter={selectedCC === 'all' ? undefined : selectedCC}
            tipoFilter={['C', 'D']}
            title="Detalhamento de Custos e Despesas"
            accentColor="orange"
          />
        </div>
      </div>
    </div>
  );
}