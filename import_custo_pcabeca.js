/**
 * Lê Diarias/CustoPcabeça.xlsx (linha 1 = meses col. B–M, linha 2 = orçado, linha 3 = realizado)
 * e gera src/data/pastoPcabeca.ts.
 *
 * A leitura da primeira aba (GERAL) permanece exatamente no formato legado.
 * Opcionalmente, a aba FAZENDAS é lida em blocos no formato:
 *   linha de cabeçalho: Fazenda | [vazio] | abr/26 | ... | mar/27
 *   linha Orçado:       Fazenda | Orçado  | valor  | ...
 *   linha Realizado:    Fazenda | Realizado | valor | ...
 *
 * Regra: um valor por mês (não somar entre meses) — igual Diarias.xlsx do confinamento.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import XLSX from 'xlsx';

const OUT = 'src/data/pastoPcabeca.ts';
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

const PT_MONTHS = {
  JAN: 1,
  FEV: 2,
  MAR: 3,
  ABR: 4,
  MAI: 5,
  JUN: 6,
  JUL: 7,
  AGO: 8,
  SET: 9,
  OUT: 10,
  NOV: 11,
  DEZ: 12,
};

const normalizeText = (value) =>
  String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toUpperCase();

/** Só a aba FAZENDAS aceita também cabeçalho textual no formato abr/26. */
function monthKeyFromFazendasHeader(cell) {
  const legacy = monthKeyFromHeader(cell);
  if (legacy) return legacy;
  if (typeof cell !== 'string') return null;

  const match = normalizeText(cell).match(/^([A-Z]{3})\/(\d{2}|\d{4})$/);
  if (!match) return null;

  const month = PT_MONTHS[match[1]];
  if (!month) return null;
  const parsedYear = Number(match[2]);
  const year = match[2].length === 2 ? 2000 + parsedYear : parsedYear;
  const key = `${year}-${String(month).padStart(2, '0')}`;
  return MONTH_KEYS.has(key) ? key : null;
}

function setFarmMonthValue(target, farm, type, month, value, excelRow) {
  target[farm] ??= { orcado: {}, realizado: {} };
  const bucket = target[farm][type];
  if (bucket[month] !== undefined && bucket[month] !== value) {
    throw new Error(
      `Valor conflitante em FAZENDAS: ${farm}, ${type}, ${month} (linha ${excelRow}).`
    );
  }
  bucket[month] = value;
}

function parseFazendasSheet(sheet) {
  if (!sheet) return {};

  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    raw: true,
    defval: null,
  });
  const fazendas = {};

  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || [];
    const farm = typeof row[0] === 'string' ? row[0].trim() : '';
    const typeLabel = normalizeText(row[1]);
    const type = typeLabel === 'ORCADO' ? 'orcado' : typeLabel === 'REALIZADO' ? 'realizado' : null;
    if (!farm || !type) continue;

    let headerRow = null;
    for (let hr = r - 1; hr >= Math.max(0, r - 3); hr--) {
      const candidate = rows[hr] || [];
      const candidateFarm = typeof candidate[0] === 'string' ? candidate[0].trim() : '';
      const hasMonth = candidate.slice(2).some((cell) => monthKeyFromFazendasHeader(cell));
      if (candidateFarm === farm && hasMonth) {
        headerRow = candidate;
        break;
      }
    }

    if (!headerRow) {
      throw new Error(`Cabeçalho de meses não encontrado para ${farm} antes da linha ${r + 1}.`);
    }

    for (let c = 2; c < Math.max(headerRow.length, row.length); c++) {
      const month = monthKeyFromFazendasHeader(headerRow[c]);
      if (!month) continue;
      const value = row[c];
      if (value == null || value === '') continue;
      if (typeof value !== 'number' || Number.isNaN(value)) {
        throw new Error(
          `Valor inválido em FAZENDAS: ${farm}, ${type}, ${month} (linha ${r + 1}).`
        );
      }
      setFarmMonthValue(fazendas, farm, type, month, value, r + 1);
    }
  }

  return fazendas;
}

function resolveInputPath() {
  if (!existsSync(DIR)) {
    throw new Error(`Pasta não encontrada: ${DIR}`);
  }
  const preferredNames = ['CustoPcabeça.xlsx', 'CustoPcabeca.xlsx'];
  for (const name of preferredNames) {
    const p = join(DIR, name);
    if (existsSync(p)) return p;
  }
  const xlsx = readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.xlsx'));
  const fallback = xlsx.find((f) => /custo.*pcabec/i.test(f));
  if (fallback) return join(DIR, fallback);
  throw new Error(`Não encontrado CustoPcabeça.xlsx em ${DIR}`);
}

function main() {
  const input = resolveInputPath();
  const wb = XLSX.read(readFileSync(input), { type: 'buffer', cellDates: true });
  const sh = wb.Sheets[wb.SheetNames[0]];

  const orcado = {};
  const realizado = {};

  // IMPORTANTE: bloco legado do GERAL mantido sem alteração.
  for (let c = 1; c <= 12; c++) {
    const h = sh[XLSX.utils.encode_cell({ r: 0, c })];
    const o = sh[XLSX.utils.encode_cell({ r: 1, c })];
    const r = sh[XLSX.utils.encode_cell({ r: 2, c })];
    const mk = h && h.v != null ? monthKeyFromHeader(h.v) : null;
    if (!mk) continue;
    if (o && typeof o.v === 'number' && !Number.isNaN(o.v)) orcado[mk] = o.v;
    if (r && typeof r.v === 'number' && !Number.isNaN(r.v)) realizado[mk] = r.v;
  }

  const fazendasSheetName = wb.SheetNames.find((name) => normalizeText(name) === 'FAZENDAS');
  const fazendas = parseFazendasSheet(fazendasSheetName ? wb.Sheets[fazendasSheetName] : undefined);

  const fmt = (obj) => JSON.stringify(obj, null, 2);

  const body = `/**
 * P/Cabeça pasto por mês (MonthKey). Um mês por coluna — não somar meses no total.
 * Fonte: ${input.replace(/\\/g, '/')}
 * Regenerar: npm run pcabeca:import
 */
import type { MonthKey } from '@/types/budget';

export const PASTO_PCABECA_ORCADO: Partial<Record<MonthKey, number>> = ${fmt(orcado)};

export const PASTO_PCABECA_REALIZADO: Partial<Record<MonthKey, number>> = ${fmt(realizado)};

export type PastoPcabecaFazendaSeries = {
  orcado: Partial<Record<MonthKey, number>>;
  realizado: Partial<Record<MonthKey, number>>;
};

export const PASTO_PCABECA_POR_FAZENDA: Record<string, PastoPcabecaFazendaSeries> = ${fmt(fazendas)};
`;

  writeFileSync(OUT, body, 'utf8');
  console.log(
    `Escrito ${OUT} (${Object.keys(orcado).length} orç., ${Object.keys(realizado).length} real., ${Object.keys(fazendas).length} fazendas) a partir de ${input}`
  );
}

main();
