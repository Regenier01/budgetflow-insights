import { readdirSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { basename, join } from 'path';
import XLSX from 'xlsx';

const OUTPUT_FILE = 'src/data/orcadoImportData.ts';
const DEFAULT_ORCADO_DIR = join('Orçado', 'Orça-Outras Receitas');
const FIXED_ATIVIDADE = 'OUTRAS_RECEITAS_EVENTUAIS';
const FIXED_DEPARTAMENTO = 'OUTRAS RECEITAS EVENTUAIS';

const MONTH_KEYS = new Set([
  '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09',
  '2026-10', '2026-11', '2026-12', '2027-01', '2027-02', '2027-03',
]);

const MONTH_LABEL_MAP = {
  'APR-26': '2026-04',
  'ABR-26': '2026-04',
  'APR/26': '2026-04',
  'ABR/26': '2026-04',
  'MAY-26': '2026-05',
  'MAI-26': '2026-05',
  'MAY/26': '2026-05',
  'MAI/26': '2026-05',
  'JUN-26': '2026-06',
  'JUN/26': '2026-06',
  'JUL-26': '2026-07',
  'JUL/26': '2026-07',
  'AUG-26': '2026-08',
  'AGO-26': '2026-08',
  'AUG/26': '2026-08',
  'AGO/26': '2026-08',
  'SEP-26': '2026-09',
  'SET-26': '2026-09',
  'SEP/26': '2026-09',
  'SET/26': '2026-09',
  'OCT-26': '2026-10',
  'OUT-26': '2026-10',
  'OCT/26': '2026-10',
  'OUT/26': '2026-10',
  'NOV-26': '2026-11',
  'NOV/26': '2026-11',
  'DEC-26': '2026-12',
  'DEZ-26': '2026-12',
  'DEC/26': '2026-12',
  'DEZ/26': '2026-12',
  'JAN-27': '2027-01',
  'JAN/27': '2027-01',
  'FEB-27': '2027-02',
  'FEV-27': '2027-02',
  'FEB/27': '2027-02',
  'FEV/27': '2027-02',
  'MAR-27': '2027-03',
  'MAR/27': '2027-03',
};

function normalizeText(value) {
  return String(value || '')
    .toUpperCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function parseMonthKey(headerCell) {
  if (typeof headerCell === 'number') {
    const date = XLSX.SSF.parse_date_code(headerCell);
    if (date && date.y && date.m) {
      const month = `${date.y}-${String(date.m).padStart(2, '0')}`;
      return MONTH_KEYS.has(month) ? month : null;
    }
  }

  if (headerCell instanceof Date && !Number.isNaN(headerCell.getTime())) {
    const month = `${headerCell.getFullYear()}-${String(headerCell.getMonth() + 1).padStart(2, '0')}`;
    return MONTH_KEYS.has(month) ? month : null;
  }

  const normalized = normalizeText(headerCell);
  const variants = [
    normalized,
    normalized.replace(/\s+/g, '-'),
    normalized.replace(/\s+/g, '/'),
    normalized.replace(/-/g, '/'),
    normalized.replace(/\//g, '-'),
  ];

  for (const variant of variants) {
    if (MONTH_LABEL_MAP[variant]) return MONTH_LABEL_MAP[variant];
  }
  return null;
}

function parseNumber(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  const raw = String(value ?? '').trim();
  if (!raw) return 0;

  const cleaned = raw.replace(/[R$\s\u00A0]/g, '');
  const hasComma = cleaned.includes(',');
  const hasDot = cleaned.includes('.');
  let normalized = cleaned;
  const commaAsThousandsPattern = /^-?\d{1,3}(,\d{3})+$/;
  const dotAsThousandsPattern = /^-?\d{1,3}(\.\d{3})+$/;

  if (hasComma && hasDot) {
    if (cleaned.lastIndexOf(',') > cleaned.lastIndexOf('.')) {
      normalized = cleaned.replace(/\./g, '').replace(',', '.');
    } else {
      normalized = cleaned.replace(/,/g, '');
    }
  } else if (hasComma) {
    normalized = commaAsThousandsPattern.test(cleaned)
      ? cleaned.replace(/,/g, '')
      : cleaned.replace(',', '.');
  } else if (hasDot) {
    normalized = dotAsThousandsPattern.test(cleaned)
      ? cleaned.replace(/\./g, '')
      : cleaned;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function aggregateBudgetSheetByMonthAndGroup(filePath) {
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
  const header = rows[0] || [];

  const monthColumns = header
    .map((value, index) => ({ index, month: parseMonthKey(value) }))
    .filter((item) => item.index > 0 && item.month);

  if (monthColumns.length === 0) {
    throw new Error(`Nenhuma coluna de mes valida encontrada em "${basename(filePath)}"`);
  }

  const grouped = new Map();
  for (const row of rows.slice(1)) {
    const rawGroup = String(row[0] ?? '').trim();
    if (!rawGroup) continue;
    const grupoContabil = rawGroup.split('-')[0]?.trim() || rawGroup;
    if (!grupoContabil) continue;

    for (const { index, month } of monthColumns) {
      const value = parseNumber(row[index]);
      const key = `${grupoContabil}::${month}`;
      grouped.set(key, (grouped.get(key) || 0) + value);
    }
  }

  return grouped;
}

function readExistingBatches() {
  if (!existsSync(OUTPUT_FILE)) return [];
  const source = readFileSync(OUTPUT_FILE, 'utf-8');
  const match = source.match(/export const ORCADO_IMPORT_BATCHES:[^=]*=\s*(\[[\s\S]*\]);/m);
  if (!match) return [];

  try {
    return JSON.parse(match[1]);
  } catch (error) {
    throw new Error(`Falha ao ler lotes existentes em "${OUTPUT_FILE}": ${error.message}`);
  }
}

function mergeOutrasReceitasBatch(existingBatches, outrasReceitasBatch) {
  const targetKey = `${normalizeText(outrasReceitasBatch.atividade)}::${normalizeText(outrasReceitasBatch.departamento)}`;
  const preserved = existingBatches.filter((batch) => {
    const key = `${normalizeText(batch.atividade)}::${normalizeText(batch.departamento)}`;
    return key !== targetKey;
  });

  return [...preserved, outrasReceitasBatch];
}

function buildOutputSource(batches) {
  return `import type { AtividadeKey, MonthKey } from '@/types/budget';

type OrcadoImportAtividadeKey = AtividadeKey | 'OUTRAS_RECEITAS_EVENTUAIS';

export interface OrcadoGrupoMonthValue {
  grupoContabil: string;
  month: MonthKey;
  value: number;
}

export interface OrcadoImportBatch {
  fileName: string;
  departamento: string;
  atividade: OrcadoImportAtividadeKey;
  rows: OrcadoGrupoMonthValue[];
}

export const ORCADO_IMPORT_BATCHES: OrcadoImportBatch[] = ${JSON.stringify(batches, null, 2)};\n`;
}

function run() {
  const targetDir = process.argv[2] || DEFAULT_ORCADO_DIR;
  if (!existsSync(targetDir)) {
    throw new Error(`Diretorio de orcado nao encontrado: "${targetDir}"`);
  }

  const files = readdirSync(targetDir).filter((file) => /\.(xlsx|xls)$/i.test(file) && !file.startsWith('~$'));
  if (files.length === 0) {
    throw new Error(`Nenhum arquivo Excel encontrado em "${targetDir}".`);
  }

  const monthAndGroupTotals = new Map();
  files.forEach((fileName) => {
    const fileTotals = aggregateBudgetSheetByMonthAndGroup(join(targetDir, fileName));
    fileTotals.forEach((value, key) => {
      monthAndGroupTotals.set(key, (monthAndGroupTotals.get(key) || 0) + value);
    });
  });

  const rows = Array.from(monthAndGroupTotals.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([key, value]) => {
      const [grupoContabil, month] = key.split('::');
      return {
      month,
      grupoContabil,
      value,
      };
    });

  const mergedBatches = mergeOutrasReceitasBatch(readExistingBatches(), {
    fileName: files.length === 1 ? files[0] : `OUTRAS_RECEITAS_EVENTUAIS_${files.length}_ARQUIVOS.xlsx`,
    departamento: FIXED_DEPARTAMENTO,
    atividade: FIXED_ATIVIDADE,
    rows,
  });

  writeFileSync(OUTPUT_FILE, buildOutputSource(mergedBatches));
  console.log(
    `Importacao Outras Receitas concluida: ${files.length} arquivo(s) processado(s) de "${targetDir}". ` +
    `Total de lotes no arquivo: ${mergedBatches.length}.`
  );
}

run();
