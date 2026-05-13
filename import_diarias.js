/**
 * Lê Diarias/Diarias.xlsx (linha 1 = meses col. B–M, linha 2 = orçado, linha 3 = realizado)
 * e gera src/data/confinamentoDiarias.ts
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import XLSX from 'xlsx';

const OUT = 'src/data/confinamentoDiarias.ts';
const DIR = join('Diarias');

const MONTH_KEYS = new Set([
  '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09',
  '2026-10', '2026-11', '2026-12', '2027-01', '2027-02', '2027-03',
]);

function monthKeyFromHeader(cell) {
  if (cell instanceof Date && !Number.isNaN(cell.getTime())) {
    const k = `${cell.getFullYear()}-${String(cell.getMonth() + 1).padStart(2, '0')}`;
    return MONTH_KEYS.has(k) ? k : null;
  }
  if (typeof cell === 'number') {
    const d = XLSX.SSF.parse_date_code(cell);
    if (d && d.y && d.m) {
      const k = `${d.y}-${String(d.m).padStart(2, '0')}`;
      return MONTH_KEYS.has(k) ? k : null;
    }
  }
  return null;
}

function resolveInputPath() {
  const preferred = join(DIR, 'Diarias.xlsx');
  if (existsSync(preferred)) return preferred;
  if (!existsSync(DIR)) {
    throw new Error(`Pasta não encontrada: ${DIR}`);
  }
  const xlsx = readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.xlsx'));
  if (xlsx.length === 0) throw new Error(`Nenhum .xlsx em ${DIR}`);
  return join(DIR, xlsx[0]);
}

function main() {
  const input = resolveInputPath();
  const wb = XLSX.read(readFileSync(input), { type: 'buffer', cellDates: true });
  const sh = wb.Sheets[wb.SheetNames[0]];

  const orcado = {};
  const realizado = {};

  // Colunas B–M → índices 1..12 (A=0)
  for (let c = 1; c <= 12; c++) {
    const h = sh[XLSX.utils.encode_cell({ r: 0, c })];
    const o = sh[XLSX.utils.encode_cell({ r: 1, c })];
    const r = sh[XLSX.utils.encode_cell({ r: 2, c })];
    const mk = h && h.v != null ? monthKeyFromHeader(h.v) : null;
    if (!mk) continue;
    if (o && typeof o.v === 'number' && !Number.isNaN(o.v)) orcado[mk] = o.v;
    if (r && typeof r.v === 'number' && !Number.isNaN(r.v)) realizado[mk] = r.v;
  }

  const fmt = (obj) => JSON.stringify(obj, null, 2);

  const body = `/**
 * Valores de diária confinamento por mês (MonthKey).
 * Fonte: ${input.replace(/\\/g, '/')}
 * Regenerar: npm run diarias:import
 */
import type { MonthKey } from '@/types/budget';

export const CONFINAMENTO_DIARIA_ORCADO: Partial<Record<MonthKey, number>> = ${fmt(orcado)};

export const CONFINAMENTO_DIARIA_REALIZADO: Partial<Record<MonthKey, number>> = ${fmt(realizado)};
`;

  writeFileSync(OUT, body, 'utf8');
  console.log(`Escrito ${OUT} (${Object.keys(orcado).length} orç., ${Object.keys(realizado).length} real.) a partir de ${input}`);
}

main();
