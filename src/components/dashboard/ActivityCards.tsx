import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useBudgetStore } from '@/store/budgetStore';
import { ATIVIDADES, MONTHS } from '@/types/budget';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import { TrendingUp, TrendingDown, Target, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ActivityCards() {
  const accounts = useBudgetStore((s) => s.accounts);
  const navigate = useNavigate();

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
        const ativAccounts = accounts.filter(
          (a) => a.atividade === ativ.key && a.nivel === 1
        );

        const chartData = MONTHS.map(({ key, label }) => {
          const orc = ativAccounts.reduce((s, a) => s + (a.orcado[key] || 0), 0);
          const real = ativAccounts.reduce((s, a) => s + (a.realizado[key] || 0), 0);
          return { month: label, Orçado: orc, Realizado: real };
        });

        const totalOrc = ativAccounts.reduce(
          (s, a) => s + Object.values(a.orcado).reduce((x, v) => x + v, 0), 0
        );
        const totalReal = ativAccounts.reduce(
          (s, a) => s + Object.values(a.realizado).reduce((x, v) => x + v, 0), 0
        );
        
        const variance = totalOrc === 0 ? 0 : ((totalReal - totalOrc) / Math.abs(totalOrc)) * 100;
        const isRevenue = ativAccounts.some(a => a.tipo === 'R');
        const isGood = isRevenue ? variance >= 0 : variance <= 0;

        return (
          <Card 
            key={ativ.key} 
            className="flex flex-col cursor-pointer transition-all hover:ring-2 hover:ring-primary/50 hover:shadow-lg group"
            onClick={() => navigate(`/atividade/${ativ.key}`)}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {ativ.label}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </div>
                <Target className="h-5 w-5 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
              {/* Mini Cards de Comparação */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-muted/50 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Orçado</p>
                  <p className="text-sm font-bold">{fmt(totalOrc)}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Realizado</p>
                  <p className="text-sm font-bold">{fmt(totalReal)}</p>
                </div>
                <div className={`rounded-lg p-3 ${isGood ? 'bg-primary/10' : 'bg-destructive/10'}`}>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Variação</p>
                  <div className="flex items-center gap-1">
                    {isGood ? <TrendingUp className="h-3 w-3 text-primary" /> : <TrendingDown className="h-3 w-3 text-destructive" />}
                    <p className={`text-sm font-bold ${isGood ? 'text-primary' : 'text-destructive'}`}>
                      {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Gráfico de Colunas */}
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10 }} 
                      stroke="hsl(var(--muted-foreground))" 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tickFormatter={fmt} 
                      tick={{ fontSize: 10 }} 
                      stroke="hsl(var(--muted-foreground))" 
                    />
                    <Tooltip
                      cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
                      formatter={(value: number) => fmt(value)}
                      contentStyle={{
                        background: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        fontSize: 12,
                      }}
                    />
                    <Bar dataKey="Orçado" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} barSize={12} />
                    <Bar dataKey="Realizado" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} barSize={12} />
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