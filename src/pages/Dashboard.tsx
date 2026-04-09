import { ActivityCards } from '@/components/dashboard/ActivityCards';
import { GlobalSummary } from '@/components/dashboard/GlobalSummary';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Executivo</h1>
          <p className="text-sm text-muted-foreground">Visão consolidada Orçado vs Realizado</p>
        </div>
      </div>

      <GlobalSummary />

      <div className="grid gap-6">
        <h2 className="text-xl font-semibold">Evolução por Atividade</h2>
        <ActivityCards />
      </div>
    </div>
  );
}