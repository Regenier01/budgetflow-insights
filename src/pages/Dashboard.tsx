import { RevenueSummary } from '@/components/dashboard/RevenueSummary';
import { GlobalSummary } from '@/components/dashboard/GlobalSummary';
import { RateiosSummary } from '@/components/dashboard/RateiosSummary';
import { LayoutDashboard, DollarSign, Split } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-orange-500">
          <LayoutDashboard className="h-5 w-5" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em]">Performance Corporativa</span>
        </div>
        <h1 className="text-5xl font-black text-primary tracking-tight">
          Dashboard <span className="text-orange-500">Executivo</span>
        </h1>
        <p className="text-slate-400 font-semibold max-w-2xl text-lg leading-relaxed">
          Análise consolidada de resultados. Utilize os painéis abaixo para navegar entre as divisões operacionais.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 px-1">
          <div className="h-6 w-1.5 bg-orange-500 rounded-full" />
          <h2 className="text-xl font-black text-primary uppercase tracking-tight">CUSTOS</h2>
        </div>
        <GlobalSummary />
      </section>

      <section className="space-y-8 pt-6">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1.5 bg-emerald-500 rounded-full" />
            <h2 className="text-xl font-black text-primary uppercase tracking-tight">RECEITAS</h2>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase bg-white border border-slate-100 shadow-sm px-3 py-1.5 rounded-full">
            <DollarSign className="h-3.5 w-3.5 text-emerald-500" />
            Orçado vs Realizado
          </div>
        </div>
        <RevenueSummary />
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1.5 bg-sky-500 rounded-full" />
            <h2 className="text-xl font-black text-primary uppercase tracking-tight">RATEIOS</h2>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase bg-white border border-slate-100 shadow-sm px-3 py-1.5 rounded-full">
            <Split className="h-3.5 w-3.5 text-sky-500" />
            Departamentos selecionados
          </div>
        </div>
        <RateiosSummary />
      </section>
    </div>
  );
}