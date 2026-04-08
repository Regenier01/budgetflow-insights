import { useBudgetStore, calculateGlobalTotals, calculateTotalsByDivisao } from '@/store/budgetStore';
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

  const SummaryTable = ({
    title,
    orc,
    real,
    diff,
    isMain = false
  }: {
    title: string;
    orc: number;
    real: number;
    diff: number;
    isMain?: boolean;
  }) => {
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
          <div
            className={cn(
              "py-2 text-xs font-bold tabular-nums",
              isNegative ? "text-destructive bg-destructive/5" : "text-primary bg-primary/5"
            )}
          >
            {fmt(diff)}
          </div>
        </div>
      </div>
    );
  };

  const global = calculateGlobalTotals(accounts);

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
          const stats = calculateTotalsByDivisao(accounts, ativ.key);
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