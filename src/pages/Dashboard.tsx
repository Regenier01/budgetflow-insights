import { RevenueSummary } from '@/components/dashboard/RevenueSummary';
import { GlobalSummary } from '@/components/dashboard/GlobalSummary';
import { DollarSign, FileSpreadsheet } from 'lucide-react';
import { MultiSelect } from '@/components/ui/multi-select';
import { Button } from '@/components/ui/button';
import { MONTHS, type MonthKey } from '@/types/budget';
import { useBudgetStore, getDefaultRealizadoFilterMonth } from '@/store/budgetStore';
import { exportDeviationAnalysisWorkbook } from '@/lib/deviationExport';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

export default function Dashboard() {
  const accounts = useBudgetStore((s) => s.accounts);
  const [selectedMonths, setSelectedMonths] = useState<MonthKey[]>(() => {
    const s = useBudgetStore.getState();
    const fallback = getDefaultRealizadoFilterMonth(s.accounts, s.importedRealizadoBatches);
    return fallback ? [fallback] : [];
  });

  const availableMonths = useMemo(() => {
    const monthSet = new Set<string>();
    accounts.forEach((account) => {
      Object.keys(account.orcado).forEach((k) => monthSet.add(k));
      Object.keys(account.realizado).forEach((k) => monthSet.add(k));
    });

    return MONTHS.filter((month) => monthSet.has(month.key));
  }, [accounts]);

  const monthOptions = useMemo(
    () => availableMonths.map((month) => ({ value: month.key, label: month.label })),
    [availableMonths]
  );

  const exportCutoffMonth = useMemo(
    () => getDefaultRealizadoFilterMonth(accounts, useBudgetStore.getState().importedRealizadoBatches),
    [accounts]
  );

  const exportCutoffLabel = exportCutoffMonth
    ? MONTHS.find((m) => m.key === exportCutoffMonth)?.label
    : null;

  const handleExportDesvios = () => {
    try {
      exportDeviationAnalysisWorkbook(accounts, exportCutoffMonth);
      toast.success('Análise de desvios exportada com sucesso');
    } catch {
      toast.error('Erro ao gerar o Excel de análise de desvios');
    }
  };

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-5xl font-black tracking-tight uppercase">
            <span className="text-dashboard-green">Orçado X</span>{' '}
            <span className="text-dashboard-orange">Realizado</span>
          </h1>
          <p className="text-slate-400 font-semibold text-lg leading-relaxed">
            Safra 26/27
          </p>
        </div>
        <div className="sticky top-20 z-40 -mx-2 rounded-xl bg-[#fdfcfb]/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-[#fdfcfb]/80">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full sm:w-[280px]">
              <MultiSelect
                options={monthOptions}
                selected={selectedMonths}
                onChange={(next) => setSelectedMonths(next as MonthKey[])}
                placeholder="Selecione o período"
                allLabel="Consolidado Geral"
                triggerClassName="bg-white border-slate-200 shadow-sm font-semibold text-slate-700"
              />
            </div>
            <div className="flex flex-col items-end gap-1">
              <Button
                onClick={handleExportDesvios}
                variant="outline"
                className="gap-2 border-slate-200 bg-white font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                <FileSpreadsheet className="h-4 w-4" />
                Exportar Análise de Desvios
              </Button>
              <span className="text-[11px] font-medium text-slate-400">
                {exportCutoffLabel
                  ? `Orçado e realizado consolidados de Abr/26 até ${exportCutoffLabel} (independente do período selecionado acima)`
                  : 'Consolidado da safra completa (independente do período selecionado acima)'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 px-1">
          <div className="h-6 w-1.5 bg-dashboard-orange rounded-full" />
          <h2 className="text-xl font-black text-dashboard-green uppercase tracking-tight">CUSTOS</h2>
        </div>
        <GlobalSummary selectedMonth={selectedMonths} />
      </section>

      <section className="space-y-8 pt-6">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1.5 bg-dashboard-green rounded-full" />
            <h2 className="text-2xl font-black text-dashboard-green uppercase tracking-tight">RECEITAS</h2>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase bg-white border border-slate-100 shadow-sm px-3 py-1.5 rounded-full">
            <DollarSign className="h-3.5 w-3.5 text-dashboard-green" />
            Orçado vs Realizado
          </div>
        </div>
        <RevenueSummary selectedMonth={selectedMonths} />
      </section>
    </div>
  );
}
