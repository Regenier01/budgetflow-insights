import { Split } from 'lucide-react';
import { RateiosSummary } from '@/components/dashboard/RateiosSummary';

export default function RateiosPage() {
  return (
    <div className="space-y-8 pb-20">
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
        <RateiosSummary selectedMonth="all" />
      </section>
    </div>
  );
}
