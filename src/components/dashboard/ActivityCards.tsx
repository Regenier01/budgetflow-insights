import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useBudgetStore } from '@/store/budgetStore';
import { ATIVIDADES, MONTHS } from '@/types/budget';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

export function ActivityCards() {
  const accounts = useBudgetStore((s) => s.accounts);

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact' }).format(v);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ATIVIDADES.map((ativ) => {
        const ativAccounts = accounts.filter(
          (a) => a.atividade === ativ.key && a.nivel === 1
        );

        const sparkData = MONTHS.map(({ key, label }) => {
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

        return (
          <Card key={ativ.key} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{ativ.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold">{fmt(totalReal)}</span>
                <span className={`text-xs font-medium ${variance <= 0 ? 'text-primary' : 'text-destructive'}`}>
                  {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Orçado: {fmt(totalOrc)}
              </div>
              <div className="h-[60px] -mx-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sparkData}>
                    <defs>
                      <linearGradient id={`grad-orc-${ativ.key}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id={`grad-real-${ativ.key}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Tooltip
                      formatter={(value: number) => fmt(value)}
                      contentStyle={{
                        background: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                        fontSize: 11,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="Orçado"
                      stroke="hsl(var(--primary))"
                      fill={`url(#grad-orc-${ativ.key})`}
                      strokeWidth={1.5}
                      dot={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="Realizado"
                      stroke="hsl(var(--accent))"
                      fill={`url(#grad-real-${ativ.key})`}
                      strokeWidth={1.5}
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
