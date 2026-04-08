import { useBudgetStore } from '@/store/budgetStore';
import { ATIVIDADES } from '@/types/budget';
import { cn } from '@/lib/utils';

export function GlobalSummary() {
  const accounts = useBudgetStore((s) => s.accounts);

  const fmt = (v: number) =>
    new Intl.NumberFormat('pt-BR', { 
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(v);

  const calculateTotals = (filterAtividade?: string) => {
    // Filtramos apenas as contas que não possuem um pai presente na lista atual
    // Isso evita dupla contagem se o arquivo tiver tanto a conta pai quanto a filha
    const rootAccounts = accounts.filter(a => {
      if (filterAtividade && a.atividade !== filterAtividade) return false;
      return !accounts.some(parent => parent.codigo === a.codigoPai);
    });

    let orc = 0;
    let real = 0;

    rootAccounts.forEach(a => {
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

  const SummaryTable = ({ title, orc, real, diff, isMain = false }: { title: string, orc: number, real: number, diff: number, isMain?: boolean }) => {
    const isNegative = diff < 0;
    
    return (
      <div className={cn("border border-border overflow-hidden rounded-sm", isMain ? "mb-6" : "")}>
        <div className="bg-white border-b border-border py-1 text-center font-bold text-xs uppercase tracking-wider">
          {title}
        </div>
        <div className="grid grid-cols-3 text-center border-b border-border">
          <div className="bg-[#FFBF00] py-1 text-[10px] font-bold border-r border-border">ORÇADO</div>
          <div className="bg-[#FFBF00] py-1 text-[10px] font-bold border-r border-border">REALIZADO</div>
          <div className="bg-[#FFBF00] py-1 text-[10px] font-bold">DIFERENÇA</div>
        </div>
        <div className="grid grid-cols-3 text-center bg-white">
          <div className="py-2 text-xs font-medium border-r border-border tabular-nums">{fmt(orc)}</div>
          <div className="py-2 text-xs font-medium border-r border-border tabular-nums">{fmt(real)}</div>
          <div className={cn(
            "py-2 text-xs font-bold tabular-nums",
            isNegative ? "text-destructive bg-destructive/5" : "text-primary bg-primary/5"
          )}>
            {fmt(diff)}
          </div>
        </div>
      </div>
    );
  };

  const global = calculateTotals();

  return (
    <div className="space-y-6">
      <SummaryTable 
        title="TOTAL GERAL" 
        orc={global.orc} 
        real={global.real} 
        diff={global.diff} 
        isMain 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ATIVIDADES.map((ativ) => {
          const stats = calculateTotals(ativ.key);
          return (
            <SummaryTable 
              key={ativ.key}
              title={ativ.label}
              orc={stats.orc}
              real={stats.real}
              diff={stats.diff}
            />
          );
        })}
      </div>
    </div>
  );
}