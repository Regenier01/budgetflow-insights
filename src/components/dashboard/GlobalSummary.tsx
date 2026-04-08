import { Card, CardContent } from '@/components/ui/card';
import { useBudgetStore } from '@/store/budgetStore';
import { ATIVIDADES } from '@/types/budget';
import { AlertCircle, CheckCircle2, TrendingDown, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GlobalSummary() {
  const accounts = useBudgetStore((s) => s.accounts);

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      maximumFractionDigits: 0 
    }).format(v);

  const calculateTotals = (filterAtividade?: string) => {
    const filtered = filterAtividade 
      ? accounts.filter(a => a.atividade === filterAtividade && a.nivel === 1)
      : accounts.filter(a => a.nivel === 1);

    let orc = 0;
    let real = 0;

    filtered.forEach(a => {
      const aOrc = Object.values(a.orcado).reduce((sum, v) => sum + v, 0);
      const aReal = Object.values(a.realizado).reduce((sum, v) => sum + v, 0);
      
      if (a.tipo === 'R') {
        orc += aOrc;
        real += aReal;
      } else {
        orc -= aOrc;
        real -= aReal;
      }
    });

    return { orc, real, diff: real - orc };
  };

  const global = calculateTotals();
  const isGlobalNegative = global.diff < 0;

  return (
    <div className="space-y-4">
      {/* Card Principal de Resultado Geral */}
      <Card className={cn(
        "border-l-4",
        isGlobalNegative ? "border-l-destructive bg-destructive/5" : "border-l-primary bg-primary/5"
      )}>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                "p-2 rounded-full",
                isGlobalNegative ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
              )}>
                {isGlobalNegative ? <AlertCircle className="h-6 w-6" /> : <CheckCircle2 className="h-6 w-6" />}
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Resultado Consolidado (EBITDA)</p>
                <h2 className="text-3xl font-bold">{fmt(global.real)}</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:flex gap-8">
              <div>
                <p className="text-xs text-muted-foreground">Orçado Total</p>
                <p className="text-lg font-semibold">{fmt(global.orc)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Diferença</p>
                <div className="flex items-center gap-1">
                  <p className={cn("text-lg font-bold", isGlobalNegative ? "text-destructive" : "text-primary")}>
                    {fmt(global.diff)}
                  </p>
                  {isGlobalNegative ? <TrendingDown className="h-4 w-4 text-destructive" /> : <TrendingUp className="h-4 w-4 text-primary" />}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid de Atividades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {ATIVIDADES.map((ativ) => {
          const stats = calculateTotals(ativ.key);
          const isNegative = stats.diff < 0;
          
          return (
            <Card key={ativ.key} className="overflow-hidden">
              <div className={cn("h-1 w-full", isNegative ? "bg-destructive" : "bg-primary")} />
              <CardContent className="p-3">
                <p className="text-[10px] font-bold text-muted-foreground uppercase truncate mb-1">{ativ.label}</p>
                <div className="flex flex-col">
                  <span className="text-sm font-bold">{fmt(stats.real)}</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] text-muted-foreground">Var:</span>
                    <span className={cn("text-[10px] font-bold", isNegative ? "text-destructive" : "text-primary")}>
                      {stats.diff > 0 ? '+' : ''}{fmt(stats.diff)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}