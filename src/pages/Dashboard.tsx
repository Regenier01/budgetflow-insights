import { ActivityCards } from '@/components/dashboard/ActivityCards';
import { GlobalSummary } from '@/components/dashboard/GlobalSummary';
import { LayoutDashboard, Info } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <LayoutDashboard className="h-5 w-5" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Visão Executiva</span>
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Dashboard de Performance
        </h1>
        <p className="text-slate-500 font-medium max-w-2xl">
          Acompanhamento consolidado dos resultados financeiros. Clique nos cards de resumo abaixo para acessar a abertura analítica de cada atividade.
        </p>
      </div>

      <section className="space-y-4">
        <div className="flex items-center gap-2 px-1">
          <div className="h-4 w-1 bg-amber-500 rounded-full" />
          <h2 className="text-lg font-bold text-slate-800">Resumo Financeiro por Atividade</h2>
        </div>
        <GlobalSummary />
      </section>

      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 bg-slate-900 rounded-full" />
            <h2 className="text-lg font-bold text-slate-800">Evolução Temporal</h2>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase bg-slate-100 px-2 py-1 rounded">
            <Info className="h-3 w-3" />
            Visualização de Tendência
          </div>
        </div>
        <ActivityCards />
      </section>
    </div>
  );
}