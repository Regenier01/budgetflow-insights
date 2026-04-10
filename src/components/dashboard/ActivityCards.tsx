import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useBudgetStore } from '@/store/budgetStore';
import { ATIVIDADES, MONTHS } from '@/types/budget';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';

export function ActivityCards() {
  const accounts = useBudgetStore((s) => s.accounts);

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL', 
      notation: 'compact',
      maximumFractionDigits: 1 
    }).format(v);

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
      {ATIVIDADES.map((ativ) => {
        const ativRootAccounts = accounts.filter(
          (a) => a.atividade === ativ.key && 
                 !accounts.some(p => p.codigo === a.codigoPai) &&
                 !a.codigo.startsWith('3.1.01.01')
        );

        const chartData = MONTHS.map(({ key, label }) => {
          const orc = ativRootAccounts.reduce((s, a) => s + (a.orcado[key] || 0), 0);
          const real = ativRootAccounts.reduce((s, a) => s + (a.realizado[key] || 0), 0);
          return { month: label, Orçado: orc, Realizado: real };
        });

        const totalOrc = ativRootAccounts.reduce(
          (s, a) => s + Object.values(a.orcado).reduce((x, v) => x + v, 0), 0
        );
        const totalReal = ativRootAccounts.reduce(
          (s, a) => s + Object.values(a.realizado).reduce((x, v) => x + v, 0), 0
        );
        
        const isHigher = totalReal > totalOrc;
        const variance = totalOrc === 0 ? 0 : ((totalReal - totalOrc) / Math.abs(totalOrc)) * 100;

        return (
          <Card 
            key={ativ.key} 
            className="flex flex-col border-none shadow-lg overflow-hidden bg-white rounded-2xl"
          >
            <CardHeader className="pb-4 bg-primary text-white">
              <CardTitle className="text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-between">
                <span>Evolução: {ativ.label}</span>
                <Target className="h-4 w-4 text-orange-400" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6 flex-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black mb-1">Orçado</p>
                  <p className="text-sm font-mono font-bold text-slate-600">{fmt(totalOrc)}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black mb-1">Realizado</p>
                  <p className="text-sm font-mono font-bold text-slate-900">{fmt(totalReal)}</p>
                </div>
                <div className={cn(
                  "rounded-xl p-4 border",
                  isHigher ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'
                )}>
                  <p className={cn(
                    "text-[9px] uppercase tracking-widest font-black mb-1",
                    isHigher ? 'text-emerald-600' : 'text-rose-600'
                  )}>Variação</p>
                  <div className="flex items-center gap-1">
                    {isHigher ? <TrendingUp className="h-3.5 w-3.5 text-emerald-600" /> : <TrendingDown className="h-3.5 w-3.5 text-rose-600" />}
                    <p className={cn(
                      "text-sm font-mono font-black",
                      isHigher ? 'text-emerald-700' : 'text-rose-700'
                    )}>
                      {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-[240px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tickFormatter={fmt} 
                      tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                    />
                    <Tooltip
                      cursor={{ fill: '#fff7ed' }}
                      contentStyle={{
                        background: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                        fontSize: 12,
                        fontWeight: 800
                      }}
                    />
                    <Bar dataKey="Orçado" fill="#062d24" radius={[4, 4, 0, 0]} barSize={12} />
                    <Bar dataKey="Realizado" fill="#f97316" radius={[4, 4, 0, 0]} barSize={12} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}