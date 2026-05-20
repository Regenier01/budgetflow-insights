import { readdirSync, writeFileSync, existsSync } from 'fs';
import { basename, join } from 'path';
import XLSX from 'xlsx';

const OUTPUT_FILE = 'src/data/orcadoReceitaPecuariaImportData.ts';
const GENETICA_OUTPUT_FILE = 'src/data/orcadoReceitaPecuariaGeneticaImportData.ts';
const DEFAULT_ORCADO_DIR = join('Orçado_Receitas', 'Receita_Pecuaria');
const FIXED_ATIVIDADE = 'PECUARIA';
const RECEITA_GRUPO_PREFIX = '3.1.01';

/** Contas que vão para o lote Receitas Genética (em qualquer planilha de Receita_Pecuaria). */
const RECEITA_GENETICA_CONTAS = new Set([
  '3.1.01.01.0002',
  '3.1.01.01.0019',
  '3.1.01.01.0017',
]);

const isReceitaGeneticaOrcadoRow = (row) => {
  const conta = String(row.contaContabil ?? '').trim();
  return conta.length > 0 && RECEITA_GENETICA_CONTAS.has(conta);
};

/** Linhas só de grupo (sem conta) no arquivo CENTRO COMERCIAL seguem no lote genética. */
const isReceitaGeneticaFile = (fileName) =>
  normalizeText(fileName.replace(/\.(xlsx|xls)$/i, '')) === 'CENTRO COMERCIAL DE TOUROS';

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

/**
 * Layout: GRUPO_CONTABIL (col. 0), CONTA_CONTABIL (col. 1), Descrição C. Contábil (col. 2), meses (col. 3+).
 */
function aggregateBudgetSheetByMonthAndGroup(filePath) {
  const workbook = XLSX.readFile(filePath, { cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
  const header = rows[0] || [];

  const monthColumns = header
    .map((value, index) => ({ index, month: parseMonthKey(value) }))
    .filter((item) => item.index > 2 && item.month);

  if (monthColumns.length === 0) {
    throw new Error(`Nenhuma coluna de mes valida encontrada em "${basename(filePath)}"`);
  }

  const grouped = new Map();
  for (const row of rows.slice(1)) {
    const grupoLabel = String(row[0] ?? '').trim();
    if (!grupoLabel) continue;

    let grupoN9 = extractGrupoN9FourLevels(grupoLabel);
    if (!grupoN9 || !grupoN9.startsWith(RECEITA_GRUPO_PREFIX)) continue;

    const contaContabil = String(row[1] ?? '').trim();
    const rawDesc = String(row[2] ?? '').trim();
    const hasConta = /^\d\.\d+\.\d+/.test(contaContabil);

    let scope;
    let descricaoContabil;
    let contaOut;
    let descMatchKey;
    let grupoStored = grupoLabel.includes('-') ? grupoLabel : grupoN9;

    if (!hasConta) {
      scope = 'grupo';
      descricaoContabil = resolveGrupoDescricao(grupoLabel, rawDesc);
      contaOut = undefined;
      descMatchKey = '__GRUPO__';
    } else {
      scope = 'descricao';
      const fromConta = extractGrupoN9FourLevels(contaContabil);
      if (fromConta && fromConta.startsWith(RECEITA_GRUPO_PREFIX)) grupoN9 = fromConta;
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
        grupoContabil: grupoStored,
      });
    }
  }

  return Array.from(grouped.entries()).map(([key, bucket]) => {
    const month = key.split('|').pop();
    const grupoContabil = bucket.grupoContabil || key.split('|')[0];
    const out = {
      grupoContabil,
      month,
      value: bucket.value,
      pecuariaOrcadoScope: bucket.scope,
      descricaoContabil: bucket.descricaoContabil,
    };
    if (bucket.contaContabil) out.contaContabil = bucket.contaContabil;
    return out;
  });
}

function parseDepartmentFromFilename(fileName) {
  return fileName
    .replace(/\.(xlsx|xls)$/i, '')
    .replace(/^ORCAMENTO\s+/i, '')
    .replace(/^ORÇAMENTO\s+/i, '')
    .trim();
}

function buildOutputSource(batches, exportName) {
  return `import type { AtividadeKey, MonthKey } from '@/types/budget';

type OrcadoImportAtividadeKey = AtividadeKey;

export interface OrcadoGrupoMonthValue {
  grupoContabil: string;
  month: MonthKey;
  value: number;
  descricaoContabil?: string;
  pecuariaOrcadoScope?: 'grupo' | 'descricao';
  contaContabil?: string;
}

export interface OrcadoImportBatch {
  fileName: string;
  departamento: string;
  atividade: OrcadoImportAtividadeKey;
  rows: OrcadoGrupoMonthValue[];
}

export const ${exportName}: OrcadoImportBatch[] = ${JSON.stringify(batches, null, 2)};\n`;
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

  const receitaPecuariaBatches = [];
  const receitaGeneticaBatches = [];

  for (const fileName of files) {
    const rows = aggregateBudgetSheetByMonthAndGroup(join(targetDir, fileName)).sort((a, b) => {
      const ka = `${a.grupoContabil}|${a.pecuariaOrcadoScope}|${a.descricaoContabil}|${a.month}`;
      const kb = `${b.grupoContabil}|${b.pecuariaOrcadoScope}|${b.descricaoContabil}|${b.month}`;
      return ka.localeCompare(kb);
    });

    const batch = {
      fileName,
      departamento: parseDepartmentFromFilename(fileName),
      atividade: FIXED_ATIVIDADE,
      rows,
    };

    const rowBelongsToGenetica = (row) =>
      isReceitaGeneticaFile(fileName) || isReceitaGeneticaOrcadoRow(row);

    const geneticaRows = rows.filter((row) => rowBelongsToGenetica(row));
    const regularRows = rows.filter((row) => !rowBelongsToGenetica(row));

    if (geneticaRows.length > 0) {
      receitaGeneticaBatches.push({ ...batch, rows: geneticaRows });
    }
    if (regularRows.length > 0) {
      receitaPecuariaBatches.push({ ...batch, rows: regularRows });
    }
  }

  writeFileSync(OUTPUT_FILE, buildOutputSource(receitaPecuariaBatches, 'ORCADO_RECEITA_PECUARIA_IMPORT_BATCHES'));
  writeFileSync(
    GENETICA_OUTPUT_FILE,
    buildOutputSource(receitaGeneticaBatches, 'ORCADO_RECEITA_PECUARIA_GENETICA_IMPORT_BATCHES')
  );
  console.log(
    `Importacao Receita Pecuaria concluida: ${files.length} arquivo(s) processado(s) de "${targetDir}". ` +
      `Receitas: "${OUTPUT_FILE}" (${receitaPecuariaBatches.length} lote(s)); ` +
      `Genetica: "${GENETICA_OUTPUT_FILE}" (${receitaGeneticaBatches.length} lote(s)).`
  );
}

run();
