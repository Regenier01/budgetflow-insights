/**
 * Lê planilhas Estoque/Estoque MM.YYYY.xlsx (um arquivo por mês) e gera src/data/estoquePecuariaData.ts.
 * Fluxo independente do orçado/realizado.
 *
 * Layout esperado (Planilha1):
 *   A: DEPARTAMENTO | B: QUANTIDADE
 *   D: CATEGORIA   | E: CUSTO MEDIO
 *   G–I: blocos PALHA e GRAOS REIDRATADOS (QUANTIDADE, VALOR TOTAL, PREÇO/KG)
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';

const DIR = 'Estoque';
const OUT = 'src/data/estoquePecuariaData.ts';

const MONTH_LABELS = {
  '01': 'janeiro',
  '02': 'fevereiro',
  '03': 'março',
  '04': 'abril',
  '05': 'maio',
  '06': 'junho',
  '07': 'julho',
  '08': 'agosto',
  '09': 'setembro',
  '10': 'outubro',
  '11': 'novembro',
  '12': 'dezembro',
};

const MONTH_SHORT = {
  '01': 'Jan',
  '02': 'Fev',
  '03': 'Mar',
  '04': 'Abr',
  '05': 'Mai',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Ago',
  '09': 'Set',
  '10': 'Out',
  '11': 'Nov',
  '12': 'Dez',
};

function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toUpperCase();
}

function parseMonthFromFileName(fileName) {
  const match = fileName.match(/(\d{2})\.(\d{4})/);
  if (!match) return null;
  const [, mm, yyyy] = match;
  const mesKey = `${yyyy}-${mm}`;
  return {
    mesKey,
    mesLabel: `${MONTH_LABELS[mm]}/${yyyy}`,
    mesShort: MONTH_SHORT[mm],
  };
}

function parseNumber(value) {
  if (typeof value === 'number' && !Number.isNaN(value)) return value;
  if (typeof value === 'string') {
    const n = Number(value.replace(/\./g, '').replace(',', '.'));
    return Number.isNaN(n) ? null : n;
  }
  return null;
}

function parseInsumoBlock(rows, startRowIndex) {
  const marker = normalizeText(rows[startRowIndex]?.[6]);
  if (!marker) return null;

  const headerRow = rows[startRowIndex + 1] ?? [];
  const dataRow = rows[startRowIndex + 2] ?? [];
  if (normalizeText(headerRow[6]) !== 'QUANTIDADE') return null;

  const quantidadeKg = parseNumber(dataRow[6]);
  const valorTotal = parseNumber(dataRow[7]);
  const precoKg = parseNumber(dataRow[8]);
  if (quantidadeKg == null || valorTotal == null || precoKg == null) return null;

  const nome =
    marker === 'PALHA'
      ? 'Palha de milho'
      : marker.includes('GRAOS') && marker.includes('REIDRAT')
        ? 'Grãos Reidratados'
        : marker;

  return {
    nome,
    quantidadeKg,
    valorTotal,
    precoKg,
  };
}

export function parseEstoqueRows(rows) {
  const departamentos = [];
  const categorias = [];
  const insumos = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i] ?? [];
    const departamento = String(row[0] ?? '').trim();
    const quantidade = parseNumber(row[1]);
    const categoria = String(row[3] ?? '').trim();
    const custoMedio = parseNumber(row[4]);

    if (departamento && quantidade != null) {
      departamentos.push({ departamento, quantidade });
    }

    if (
      categoria &&
      custoMedio != null &&
      normalizeText(categoria) !== 'QUANTIDADE' &&
      !normalizeText(categoria).includes('GRAOS REIDRAT')
    ) {
      categorias.push({ categoria, custoMedio });
    }
  }

  for (let i = 0; i < rows.length; i++) {
    const marker = normalizeText(rows[i]?.[6]);
    if (marker === 'PALHA' || (marker.includes('GRAOS') && marker.includes('REIDRAT'))) {
      const insumo = parseInsumoBlock(rows, i);
      if (insumo) insumos.push(insumo);
    }
  }

  const totalQuantidadeDepartamentos = departamentos.reduce((sum, item) => sum + item.quantidade, 0);

  return { departamentos, categorias, insumos, totalQuantidadeDepartamentos };
}

function parseWorkbook(buffer, meta) {
  const wb = XLSX.read(buffer, { type: 'buffer', cellDates: true });
  const sheetName = wb.SheetNames[0];
  const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, defval: null });
  const parsed = parseEstoqueRows(rows);

  return {
    ...meta,
    ...parsed,
    sourceFile: meta.fileName,
  };
}

function listEstoqueFiles() {
  if (!existsSync(DIR)) {
    throw new Error(`Pasta não encontrada: ${DIR}`);
  }

  return readdirSync(DIR)
    .filter((file) => file.toLowerCase().endsWith('.xlsx') && !file.startsWith('~$'))
    .map((fileName) => {
      const month = parseMonthFromFileName(fileName);
      if (!month) {
        console.warn(`Ignorando arquivo sem padrão MM.YYYY: ${fileName}`);
        return null;
      }
      return { fileName, path: join(DIR, fileName), ...month };
    })
    .filter(Boolean)
    .sort((a, b) => a.mesKey.localeCompare(b.mesKey));
}

function main() {
  const files = listEstoqueFiles();
  if (files.length === 0) {
    throw new Error(`Nenhum arquivo Estoque MM.YYYY.xlsx encontrado em ${DIR}`);
  }

  const snapshots = files.map(({ fileName, path, mesKey, mesLabel, mesShort }) =>
    parseWorkbook(readFileSync(path), { fileName, mesKey, mesLabel, mesShort })
  );

  const body = `/**
 * Dados de estoque pecuária por mês (importados de Estoque/Estoque MM.YYYY.xlsx).
 * Fluxo independente do orçado/realizado.
 * Regenerar: npm run estoque:import
 */
import type { EstoquePecuariaSnapshot } from '@/types/estoque';

export const ESTOQUE_PECUARIA_SNAPSHOTS: EstoquePecuariaSnapshot[] = ${JSON.stringify(snapshots, null, 2)};
`;

  writeFileSync(OUT, body, 'utf8');
  console.log(`Escrito ${OUT} com ${snapshots.length} mês(es): ${snapshots.map((s) => s.mesKey).join(', ')}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
