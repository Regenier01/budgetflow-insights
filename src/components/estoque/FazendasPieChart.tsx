import { useMemo } from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { fmtEstoqueNumber } from '@/lib/estoqueFormat';
import type { EstoquePecuariaSnapshot } from '@/types/estoque';

const SLICE_COLORS = [
  '#FF7E00',
  '#038779',
  '#F59E0B',
  '#0EA5E9',
  '#8B5CF6',
  '#EC4899',
  '#14B8A6',
  '#E11D48',
  '#6366F1',
  '#84CC16',
  '#F97316',
  '#06B6D4',
];

interface FazendasPieChartProps {
  snapshot: EstoquePecuariaSnapshot;
}

export function FazendasPieChart({ snapshot }: FazendasPieChartProps) {
  const total = snapshot.totalQuantidadeDepartamentos;

  const chartData = useMemo(
    () =>
      [...snapshot.departamentos]
        .sort((a, b) => b.quantidade - a.quantidade)
        .map((item, index) => ({
          key: `unidade-${index}`,
          name: item.departamento,
          quantidade: item.quantidade,
          fill: SLICE_COLORS[index % SLICE_COLORS.length],
          percent: total > 0 ? (item.quantidade / total) * 100 : 0,
        })),
    [snapshot.departamentos, total]
  );

  const chartConfig = useMemo(() => {
    const config: ChartConfig = {
      quantidade: { label: 'Cabeças' },
    };
    chartData.forEach((item) => {
      config[item.key] = { label: item.name, color: item.fill };
    });
    return config;
  }, [chartData]);

  if (chartData.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-[9.5rem] w-[9.5rem] shrink-0 [&_.recharts-pie-label-text]:fill-foreground"
      >
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent
                hideLabel
                nameKey="name"
                formatter={(value, _name, item) => {
                  const percent = item?.payload?.percent as number | undefined;
                  const pctLabel =
                    percent !== undefined ? ` (${percent.toFixed(1).replace('.', ',')}%)` : '';
                  return (
                    <span className="font-numeric font-semibold tabular-nums">
                      {fmtEstoqueNumber(Number(value))} cabeças{pctLabel}
                    </span>
                  );
                }}
              />
            }
          />
          <Pie
            data={chartData}
            dataKey="quantidade"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="88%"
            paddingAngle={0}
            strokeWidth={1}
            stroke="#ffffff"
          >
            {chartData.map((entry) => (
              <Cell key={entry.key} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>

      <ul className="min-w-0 flex-1 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
        {chartData.map((item) => (
          <li
            key={item.key}
            className="flex items-center gap-2 rounded px-1 py-0.5 transition-colors hover:bg-slate-50"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-sm"
              style={{ backgroundColor: item.fill }}
              aria-hidden
            />
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[11px] font-medium text-slate-700">{item.name}</p>
              <p className="font-numeric text-[10px] tabular-nums text-slate-500">
                <span className="font-semibold text-slate-800">
                  {fmtEstoqueNumber(item.quantidade)}
                </span>
                {' · '}
                {item.percent.toFixed(1).replace('.', ',')}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
