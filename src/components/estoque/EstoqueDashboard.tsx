import { useMemo, useState } from 'react';
import { FazendasPieChart } from '@/components/estoque/FazendasPieChart';
import { ESTOQUE_PECUARIA_SNAPSHOTS } from '@/data/estoquePecuariaData';
import { fmtEstoqueCurrency, fmtEstoqueNumber } from '@/lib/estoqueFormat';
import { cn } from '@/lib/utils';
import type { EstoquePecuariaSnapshot } from '@/types/estoque';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ESTOQUE_TABLE = 'w-full border-collapse table-fixed text-[13px] leading-tight';
const TH_CELL =
  'border border-dashboard-orange bg-dashboard-orange px-2.5 py-2 font-semibold text-white';
const TD_BORDER = 'border border-slate-200';
const TD_DIVIDER = 'border-r border-dashboard-orange/70';
const TD_NUMBER =
  'font-numeric text-[14px] font-semibold tabular-nums tracking-tight text-slate-800';

function PanelHeader({ title }: { title: string }) {
  return (
    <div className="bg-dashboard-orange px-5 py-3">
      <h2 className="text-sm font-bold text-white">{title}</h2>
    </div>
  );
}

interface EstoqueReportTableProps {
  columns: { key: string; label: string; align?: 'left' | 'right'; width?: string }[];
  rows: { key: string; label: string; value: string }[];
  footer?: { label: string; value: string };
}

function EstoqueReportTable({ columns, rows, footer }: EstoqueReportTableProps) {
  return (
    <table className={ESTOQUE_TABLE}>
      <colgroup>
        {columns.map((col) => (
          <col key={col.key} style={col.width ? { width: col.width } : undefined} />
        ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={col.key}
              className={cn(
                TH_CELL,
                col.align === 'right' ? 'text-right' : 'text-left',
                index < columns.length - 1 && TD_DIVIDER
              )}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row.key} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-100/80'}>
            <td className={cn(TD_BORDER, TD_DIVIDER, 'px-2.5 py-1.5 font-medium text-slate-800')}>
              {row.label}
            </td>
            <td className={cn(TD_BORDER, TD_NUMBER, 'px-2 py-1.5 text-right')}>
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr className="bg-slate-50 font-semibold text-slate-900">
            <td className={cn(TD_BORDER, TD_DIVIDER, 'px-2.5 py-1.5')}>{footer.label}</td>
            <td className={cn(TD_BORDER, TD_NUMBER, 'px-2 py-1.5 text-right')}>
              {footer.value}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-orange-100 bg-white px-5 py-4 shadow-sm">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-1 font-numeric text-2xl font-bold tabular-nums tracking-tight text-slate-900">
        {value}
      </p>
    </div>
  );
}

function FazendasTable({ snapshot }: { snapshot: EstoquePecuariaSnapshot }) {
  const total = snapshot.totalQuantidadeDepartamentos;

  return (
    <EstoqueReportTable
      columns={[
        { key: 'unidade', label: 'Unidade de Negócio' },
        { key: 'qtde', label: 'Quantidade de Cabeças', align: 'right', width: '148px' },
      ]}
      rows={snapshot.departamentos.map((row) => ({
        key: row.departamento,
        label: row.departamento,
        value: fmtEstoqueNumber(row.quantidade),
      }))}
      footer={{ label: 'Total', value: fmtEstoqueNumber(total) }}
    />
  );
}

function CategoriasTable({ snapshot }: { snapshot: EstoquePecuariaSnapshot }) {
  return (
    <EstoqueReportTable
      columns={[
        { key: 'categoria', label: 'Categoria' },
        { key: 'custo', label: 'Custo Médio', align: 'right', width: '108px' },
      ]}
      rows={snapshot.categorias.map((row) => ({
        key: row.categoria,
        label: row.categoria,
        value: fmtEstoqueCurrency(row.custoMedio),
      }))}
    />
  );
}

function RecriaTable({ snapshot }: { snapshot: EstoquePecuariaSnapshot }) {
  if (!snapshot.recria || snapshot.recria.length === 0) return null;

  return (
    <table className={ESTOQUE_TABLE}>
      <colgroup>
        <col />
        <col style={{ width: '120px' }} />
        <col style={{ width: '120px' }} />
      </colgroup>
      <thead>
        <tr>
          <th className={cn(TH_CELL, 'text-left', TD_DIVIDER)}>Categoria</th>
          <th className={cn(TH_CELL, 'text-right', TD_DIVIDER)}>Quantidade</th>
          <th className={cn(TH_CELL, 'text-right')}>Custo Médio</th>
        </tr>
      </thead>
      <tbody>
        {snapshot.recria.map((row, rowIndex) => (
          <tr key={row.categoria} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-100/80'}>
            <td className={cn(TD_BORDER, TD_DIVIDER, 'px-2.5 py-1.5 font-medium text-slate-800')}>
              {row.categoria}
            </td>
            <td className={cn(TD_BORDER, TD_DIVIDER, TD_NUMBER, 'px-2 py-1.5 text-right')}>
              {fmtEstoqueNumber(row.quantidade)}
            </td>
            <td className={cn(TD_BORDER, TD_NUMBER, 'px-2 py-1.5 text-right')}>
              {fmtEstoqueCurrency(row.custoMedio)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function EstoqueDashboard() {
  const snapshots = ESTOQUE_PECUARIA_SNAPSHOTS;
  const [selectedMesKey, setSelectedMesKey] = useState(
    snapshots[snapshots.length - 1]?.mesKey ?? ''
  );

  const snapshot = useMemo(
    () => snapshots.find((item) => item.mesKey === selectedMesKey) ?? snapshots[snapshots.length - 1],
    [snapshots, selectedMesKey]
  );

  if (!snapshot) {
    return (
      <div className="rounded-2xl border border-orange-100 bg-white px-6 py-16 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Nenhum arquivo de estoque importado. Coloque planilhas em{' '}
          <span className="font-semibold">Estoque/Estoque MM.YYYY.xlsx</span> e execute{' '}
          <span className="font-semibold">npm run estoque:import</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SummaryCard
          label="Total em estoque"
          value={fmtEstoqueNumber(snapshot.totalQuantidadeDepartamentos)}
        />
        <Select value={snapshot.mesKey} onValueChange={setSelectedMesKey}>
          <SelectTrigger className="h-9 w-[min(200px,80vw)] border-orange-500 bg-orange-500 text-xs font-semibold text-white">
            <SelectValue placeholder="Mês de referência" />
          </SelectTrigger>
          <SelectContent>
            {snapshots.map((item) => (
              <SelectItem key={item.mesKey} value={item.mesKey}>
                {item.mesLabel}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <div className="w-full max-w-[min(100%,32rem)] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <p className="border-b border-slate-100 bg-slate-50/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Quantidades por fazenda — {snapshot.mesLabel}
          </p>
          <div className="p-2">
            <FazendasTable snapshot={snapshot} />
          </div>
        </div>

        <div className="w-full max-w-[min(100%,28rem)] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <p className="border-b border-slate-100 bg-slate-50/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Custo médio por categoria — {snapshot.mesLabel}
          </p>
          <div className="p-2">
            <CategoriasTable snapshot={snapshot} />
          </div>
        </div>

        {snapshot.recria && snapshot.recria.length > 0 && (
          <div className="w-full max-w-[min(100%,32rem)] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <p className="border-b border-slate-100 bg-slate-50/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Recria — {snapshot.mesLabel}
            </p>
            <div className="p-2">
              <RecriaTable snapshot={snapshot} />
            </div>
          </div>
        )}
      </div>

      <div className="max-w-3xl overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Distribuição por unidade de negócio — {snapshot.mesLabel}
        </p>
        <FazendasPieChart snapshot={snapshot} />
      </div>

      {snapshot.insumos.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
          <PanelHeader title="Insumos" />
          <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {snapshot.insumos.map((insumo) => (
              <div key={insumo.nome} className="p-5">
                <h3 className="mb-3 text-sm font-bold text-slate-900">{insumo.nome}</h3>
                <dl className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg bg-slate-50 px-3 py-3">
                    <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      Qtde (Kg)
                    </dt>
                    <dd className="mt-1 font-numeric text-sm font-semibold tabular-nums text-slate-800">
                      {fmtEstoqueNumber(insumo.quantidadeKg)}
                    </dd>
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-3">
                    <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      Preço/Kg
                    </dt>
                    <dd className="mt-1 font-numeric text-sm font-semibold tabular-nums text-slate-800">
                      {fmtEstoqueCurrency(insumo.precoKg)}
                    </dd>
                  </div>
                  <div className="rounded-lg bg-orange-50 px-3 py-3">
                    <dt className="text-[10px] font-bold uppercase tracking-wide text-orange-600/70">
                      Valor total
                    </dt>
                    <dd className="mt-1 font-numeric text-sm font-semibold tabular-nums text-slate-900">
                      {fmtEstoqueCurrency(insumo.valorTotal)}
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 text-center text-[11px] text-slate-400">{snapshot.mesLabel}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
