import { Split, ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { RateiosSummary } from '@/components/dashboard/RateiosSummary';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  parseRateioColigadaSubview,
  RATEIO_COLIGADA_GROUPS,
  type RateioColigadaSubview,
} from '@/data/rateiosColigadas';

export default function RateiosPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const coligadaSubview = parseRateioColigadaSubview(searchParams.get('subview'));

  const setColigadaSubview = (next: RateioColigadaSubview | null) => {
    const params = new URLSearchParams(searchParams);
    if (next) params.set('subview', next);
    else params.delete('subview');
    setSearchParams(params, { replace: true });
  };

  const activeGroup = RATEIO_COLIGADA_GROUPS.find((g) => g.subview === coligadaSubview);

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
            {coligadaSubview ? 'Departamentos' : 'Coligadas'}
          </div>
        </div>

        <Tabs
          value={coligadaSubview ?? 'hub'}
          onValueChange={(value) => {
            if (value === 'hub') setColigadaSubview(null);
            else setColigadaSubview(value as RateioColigadaSubview);
          }}
        >
          <TabsList className="h-auto w-full max-w-3xl flex-wrap justify-start gap-1 bg-slate-100/80 p-1">
            <TabsTrigger value="hub" className="text-xs sm:text-sm">
              Visão geral
            </TabsTrigger>
            {RATEIO_COLIGADA_GROUPS.map((group) => (
              <TabsTrigger key={group.subview} value={group.subview} className="text-xs sm:text-sm">
                {group.shortLabel}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {coligadaSubview && activeGroup && (
          <button
            type="button"
            onClick={() => setColigadaSubview(null)}
            className="flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para escolha de coligada
          </button>
        )}

        {coligadaSubview && activeGroup && (
          <p className="text-sm text-slate-500 font-medium px-1">{activeGroup.label}</p>
        )}

        <RateiosSummary selectedMonth="all" coligadaSubview={coligadaSubview} />
      </section>
    </div>
  );
}
