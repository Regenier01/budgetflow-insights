import { readdirSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { basename, join } from 'path';
import XLSX from 'xlsx';

const OUTPUT_FILE = 'src/data/orcadoImportData.ts';
const DEFAULT_ORCADO_DIR = join('Orçado', 'Orça-Seringal');
const FIXED_ATIVIDADE = 'SERINGAL';

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

const PECUARIA_ORCADO_GRUPO_CONTABIL_N9 = {
  '1': '4.1.01.01-CUSTO DE PESSOAL',
  '2': '4.1.01.11-CUSTOS RURAIS',
  '3': '4.1.01.02-SERVICOS DE TERCEIROS',
  '4': '4.1.01.04-MANUTENCAO E CONSERVACAO DE BENS',
  '5': '4.2.01.02-RATEIO DE CUSTOS',
  '6': '4.1.01.05-DEPRECIACOES, EXAUSTOES E AMORTIZACOES',
  '7': '4.1.01.21-OUTROS CUSTOS OPERACIONAIS',
  '8': '4.1.01.06-DESPESAS DE VIAGENS',
  '9': '4.1.01.03-LOCACOES',
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
      : normalized;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseDepartmentFromFilename(fileName) {
  return fileName
    .replace(/\.xlsx$/i, '')
    .replace(/\.xls$/i, '')
    .replace(/^ORCAMENTO\s+/i, '')
    .replace(/^ORÇAMENTO\s+/i, '')
    .trim();
}

function validateSeringalFileNames(files) {
  const invalidFiles = files.filter((fileName) => {
    const department = parseDepartmentFromFilename(fileName);
    const normalizedDepartment = normalizeText(department).replace(/\s+/g, ' ').trim();
    return !/^[^-]+\s*-\s*SERINGAL$/.test(normalizedDepartment);
  });

  if (invalidFiles.length === 0) return;

  throw new Error(
    `Arquivo(s) invalido(s) para seringal: ${invalidFiles.map((fileName) => `"${fileName}"`).join(', ')}. ` +
      `Use o padrao "NOME - SERINGAL", exemplo: "COVOA - SERINGAL.xlsx".`
  );
}

function isSeringalCustosCascadeFile(fileName) {
  const department = parseDepartmentFromFilename(fileName);
  const normalizedDepartment = normalizeText(department).replace(/\s+/g, ' ').trim();
  return /^[^-]+\s*-\s*SERINGAL$/.test(normalizedDepartment);
}

function resolvePecuariaOrcadoGrupoContabilN9(raw) {
  if (typeof raw === 'number' && Number.isFinite(raw)) {
    const n = Math.trunc(raw);
    if (n >= 1 && n <= 9 && Math.abs(raw - n) < 1e-9) {
      return PECUARIA_ORCADO_GRUPO_CONTABIL_N9[String(n)] || '';
    }
  }
  const s = String(raw ?? '').trim();
  if (!s) return '';
  if (/^[1-9]$/.test(s)) return PECUARIA_ORCADO_GRUPO_CONTABIL_N9[s] || '';
  return '';
}

function extractGrupoN9FourLevels(value) {
  const s = String(value ?? '').trim();
  if (!s) return '';
  const head = (s.split(/[-\s]/)[0] || '').trim() || s;
  const match = head.match(/^\d(?:\.\d{1,4})+/);
  if (!match) return '';
  const parts = match[0].split('.');
  if (parts.length <= 4) return match[0];
  return parts.slice(0, 4).join('.');
}

function resolveGrupoDescricao(grupoLabel, rawDesc) {
  const fromColC = String(rawDesc ?? '').trim();
  if (fromColC) return fromColC;
  const label = String(grupoLabel ?? '').trim();
  const dashIdx = label.indexOf('-');
  if (dashIdx >= 0) {
    const afterDash = label.slice(dashIdx + 1).trim();
    if (afterDash) return afterDash;
  }
  return label;
}

function parseBudgetSheet(filePath) {
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
    const colA = row[0];
    if (colA === undefined || colA === null || String(colA).trim() === '') continue;

    const labelFromCod = resolvePecuariaOrcadoGrupoContabilN9(colA);
    const grupoLabel = labelFromCod || String(colA).trim();
    let grupoN9 = extractGrupoN9FourLevels(grupoLabel);
    if (!grupoN9) continue;

    const contaContabil = String(row[1] ?? '').trim();
    const rawDesc = String(row[2] ?? '').trim();
    const hasConta = /^\d\.\d+\.\d+/.test(contaContabil);

    let scope;
    let descricaoContabil;
    let contaOut;
    let descMatchKey;
    if (!hasConta) {
      scope = 'grupo';
      descricaoContabil = resolveGrupoDescricao(grupoLabel, rawDesc);
      contaOut = undefined;
      descMatchKey = '__GRUPO__';
    } else {
      scope = 'descricao';
      const fromConta = extractGrupoN9FourLevels(contaContabil);
      if (fromConta) grupoN9 = fromConta;
      descricaoContabil = (rawDesc || contaContabil).trim();
      contaOut = contaContabil;
      descMatchKey = normalizeText(rawDesc || contaContabil);
    }

    for (const { index, month } of monthColumns) {
      const value = parseNumber(row[index]);
      const k = `${grupoN9}|${scope}|${descMatchKey}|${month}`;
      const prev = grouped.get(k);
      const nextVal = (prev?.value || 0) + value;
      grouped.set(k, {
        value: nextVal,
        scope,
        descricaoContabil,
        contaContabil: contaOut,
      });
    }
  }

  return Array.from(grouped.entries()).map(([key, bucket]) => {
    const month = key.split('|').pop();
    const grupoContabil = key.split('|')[0];
    const out = {
      grupoContabil,
      month,
      value: bucket.value,
      seringalOrcadoScope: bucket.scope,
      descricaoContabil: bucket.descricaoContabil,
    };
    if (bucket.contaContabil) out.contaContabil = bucket.contaContabil;
    return out;
  });
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

/** Lotes de custo seringal em ORCADO_IMPORT_BATCHES (receita latex fica em arquivo separado). */
function isSeringalOrcaCustosBatch(batch) {
  return normalizeText(batch.atividade) === 'SERINGAL';
}

function mergeSeringalBatches(existingBatches, seringalBatches) {
  const preserved = existingBatches.filter((batch) => !isSeringalOrcaCustosBatch(batch));
  return [...preserved, ...seringalBatches];
}

function buildOutputSource(batches) {
  return `import type { AtividadeKey, MonthKey } from '@/types/budget';

export interface OrcadoGrupoMonthValue {
  grupoContabil: string;
  month: MonthKey;
  value: number;
  descricaoContabil?: string;
  pecuariaOrcadoScope?: 'grupo' | 'descricao';
  agricolaOrcadoScope?: 'grupo' | 'descricao';
  seringalOrcadoScope?: 'grupo' | 'descricao';
  contaContabil?: string;
}

export interface OrcadoImportBatch {
  fileName: string;
  departamento: string;
  atividade: AtividadeKey;
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
  validateSeringalFileNames(files);

  const cascadeFiles = files.filter((fileName) => isSeringalCustosCascadeFile(fileName));
  if (cascadeFiles.length === 0) {
    throw new Error(`Nenhum arquivo Fazenda - Seringal encontrado em "${targetDir}".`);
  }

  const seringalBatches = cascadeFiles.map((fileName) => ({
    fileName,
    departamento: parseDepartmentFromFilename(fileName),
    atividade: FIXED_ATIVIDADE,
    rows: parseBudgetSheet(join(targetDir, fileName)),
  }));

  const mergedBatches = mergeSeringalBatches(readExistingBatches(), seringalBatches);
  writeFileSync(OUTPUT_FILE, buildOutputSource(mergedBatches));
  console.log(
    `Importacao Seringal (custos cascata) concluida: ${seringalBatches.length} arquivo(s) processado(s) de "${targetDir}". ` +
    `Total de lotes no arquivo: ${mergedBatches.length}.`
  );
}

run();
