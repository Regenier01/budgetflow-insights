import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useBudgetStore } from '@/store/budgetStore';
import { MONTHS } from '@/types/budget';

interface Props {
  tipoFilter: string | 'all';
}

export function BudgetChart({ tipoFilter }: Props) {
  const accounts = useBudgetStore((s) => s.accounts);

  const topLevel = accounts.filter((a) => a.nivel === 1 && (tipoFilter === 'all' || a.tipo === tipoFilter));

  const data = MONTHS.map(({ key, label }) => {
    const orcado = topLevel.reduce((s, a) => s + (a.orcado[key] || 0), 0);
    const realizado = topLevel.reduce((s, a) => s + (a.realizado[key] || 0), 0);
    return { month: label, Orçado: orcado, Realizado: realizado };
  });

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact' }).format(v);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Orçado vs Realizado — Evolução Mensal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                formatter={(value: number) => fmt(value)}
                contentStyle={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: 12,
                }}
              />
              <Legend />
              <Bar dataKey="Orçado" fill="#038779" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Realizado" fill="#FF7E00" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
