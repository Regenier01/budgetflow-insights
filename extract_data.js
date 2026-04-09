import XLSX from 'xlsx';
import { writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { randomUUID } from 'crypto';

async function run() {
  console.log('--- Iniciando extração de dados ---');

  // 1. Mapeamento de Departamentos
  const mappingFile = 'data/Unida-Depto.xlsx';
  let departmentMapping = {};
  
  if (existsSync(mappingFile)) {
    const workbook = XLSX.readFile(mappingFile);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);
    
    data.forEach(row => {
      if (row.NOMEDEPTO) {
        departmentMapping[row.NOMEDEPTO.trim()] = {
          nomedepto: row.NOMEDEPTO.trim(),
          unidadeNegocio: row['UNIDADE DE NEGÓCIO'] || '',
          divisao: row['DIVISÃO'] || ''
        };
      }
    });
    console.log(`Mapeamento de departamentos carregado: ${Object.keys(departmentMapping).length} registros.`);
  }

  const mappingOutput = `export interface DepartmentInfo {
  nomedepto: string;
  unidadeNegocio: string;
  divisao: string;
}

export const DEPARTMENT_MAPPING: Record<string, DepartmentInfo> = ${JSON.stringify(departmentMapping, null, 2)};
`;
  writeFileSync('src/data/departmentMapping.ts', mappingOutput);

  // 2. Extração de Realizado
  const realizadoDir = 'realizado';
  let allRows = [];

  if (existsSync(realizadoDir)) {
    const files = readdirSync(realizadoDir).filter(f => f.endsWith('.xlsx'));
    console.log(`Arquivos encontrados na pasta realizado: ${files.length}`);

    for (const file of files) {
      console.log(`Processando: ${file}`);
      const workbook = XLSX.readFile(join(realizadoDir, file), { cellDates: true });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);
      allRows = allRows.concat(rows);
    }
  }

  console.log(`Total de linhas brutas extraídas: ${allRows.length}`);

  // 3. Processamento e Agregação (Lógica do budgetStore)
  const accounts = processBudgetRows(allRows, departmentMapping);

  const initialDataOutput = `import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = ${JSON.stringify(accounts, null, 2)};
`;
  writeFileSync('src/data/initialData.ts', initialDataOutput);
  console.log('--- Extração finalizada com sucesso! ---');
}

// Funções Auxiliares (Replicadas do budgetStore)

function dateToMonthKey(raw) {
  if (!raw) return null;
  let d;
  if (raw instanceof Date) {
    d = raw;
  } else if (typeof raw === 'number') {
    d = new Date((raw - 25569) * 86400000);
  } else {
    d = new Date(raw);
  }
  if (isNaN(d.getTime())) return null;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

function mapAtividadeByDivisao(divisao) {
  if (!divisao) return null;
  const text = divisao.trim().toUpperCase();
  if (text.includes('PECUA') || text.includes('GADO')) return 'PECUARIA';
  if (text.includes('SERING') || text.includes('LATEX') || text.includes('BORRACHA')) return 'SERINGAL';
  if (text.includes('AGRIC') || text.includes('SOJA') || text.includes('MILHO')) return 'AGRICOLA';
  if (text.includes('CANA')) return 'CANA';
  if (text.includes('ADM') || text.includes('TRIB')) return 'DESP_ADM_TRIB';
  if (text.includes('ENCARGO')) return 'ENCARGOS';
  return null;
}

function mapAtividade(row, departmentMapping) {
  const depto = row.NOMEDEPTO ? String(row.NOMEDEPTO).trim() : '';
  const mapping = departmentMapping[depto];

  if (mapping) {
    const divisao = mapping.divisao.trim().toUpperCase();
    const fromDivisao = mapAtividadeByDivisao(divisao);
    if (divisao === 'SERINGAL') {
      return { atividade: 'SERINGAL', divisao: mapping.divisao, unidadeNegocio: mapping.unidadeNegocio };
    }
    return { 
      atividade: fromDivisao || 'PECUARIA', 
      divisao: mapping.divisao, 
      unidadeNegocio: mapping.unidadeNegocio 
    };
  }

  const currentDivisao = row.DIVISAO ? String(row.DIVISAO) : undefined;
  const fromDivisao = mapAtividadeByDivisao(currentDivisao);
  if (fromDivisao) {
    if (fromDivisao === 'SERINGAL') return { atividade: 'PECUARIA', divisao: currentDivisao };
    return { atividade: fromDivisao, divisao: currentDivisao };
  }
  return { atividade: 'PECUARIA', divisao: currentDivisao };
}

function mapTipo(contaContabil) {
  const conta = String(contaContabil || '').trim();
  if (conta.startsWith('3.1') || conta.startsWith('3.01')) return 'R';
  if (conta.startsWith('3.3') || conta.startsWith('3.03') || conta.startsWith('4')) return 'C';
  return 'D';
}

function processBudgetRows(rows, departmentMapping) {
  const aggregated = new Map();
  const fallbackMonth = '2027-01'; // Default em caso de erro na data

  for (const row of rows) {
    const conta = String(row.CONTA_CONTABIL || '').trim();
    if (!conta) continue;

    const saldo = Number(row.SALDO ?? 0);
    if (isNaN(saldo)) continue;

    const nomeProduto = row.NOMEPRODUTO ? String(row.NOMEPRODUTO).trim() : '';
    const aggKey = `${conta}|${nomeProduto}`;
    const monthKey = dateToMonthKey(row.DATA) || fallbackMonth;

    const existing = aggregated.get(aggKey);

    if (existing) {
      existing.saldo[monthKey] = (existing.saldo[monthKey] || 0) + saldo;
    } else {
      const depto = row.NOMEDEPTO ? String(row.NOMEDEPTO).trim() : '';
      const { atividade, divisao: mappedDivisao, unidadeNegocio } = mapAtividade(row, departmentMapping);

      aggregated.set(aggKey, {
        saldo: { [monthKey]: saldo },
        descricao: String(row.DESCRICAO_CONTABIL || conta),
        departamento: depto || undefined,
        centroCusto: row.NOMECUSTO ? String(row.NOMECUSTO) : undefined,
        coligada: row.COLIGADA ? String(row.COLIGADA) : undefined,
        divisao: mappedDivisao || (row.DIVISAO ? String(row.DIVISAO) : undefined),
        unidadeNegocio,
        grupoContabilN9: row.GRUPOCONTABILN9 ? String(row.GRUPOCONTABILN9) : undefined,
        nomeProduto: nomeProduto || undefined,
        atividade,
        tipo: mapTipo(conta),
      });
    }
  }

  const finalAccounts = [];

  const ensureParentExists = (codigo, data) => {
    const parts = codigo.split('.');
    if (parts.length <= 1) return;

    const codigoPai = parts.slice(0, -1).join('.');
    const parent = finalAccounts.find((a) => a.codigo === codigoPai);

    if (!parent) {
      finalAccounts.push({
        id: randomUUID(),
        codigo: codigoPai,
        descricao: codigoPai,
        tipo: data.tipo,
        codigoPai: codigoPai.includes('.') ? codigoPai.split('.').slice(0, -1).join('.') : null,
        nivel: parts.length - 1,
        atividade: data.atividade,
        orcado: {},
        realizado: {},
      });
      ensureParentExists(codigoPai, data);
    }
  };

  for (const [aggKey, data] of aggregated) {
    const [conta] = aggKey.split('|');
    const parts = conta.split('.');
    const codigoPai = parts.length > 1 ? parts.slice(0, -1).join('.') : null;

    ensureParentExists(conta, data);

    finalAccounts.push({
      id: randomUUID(),
      codigo: conta,
      descricao: data.descricao,
      tipo: data.tipo,
      codigoPai,
      nivel: parts.length,
      atividade: data.atividade,
      departamento: data.departamento,
      centroCusto: data.centroCusto,
      coligada: data.coligada,
      grupoContabilN9: data.grupoContabilN9,
      nomeProduto: data.nomeProduto,
      divisao: data.divisao,
      unidadeNegocio: data.unidadeNegocio,
      orcado: {},
      realizado: data.saldo,
    });
  }

  return finalAccounts.sort((a, b) =>
    a.codigo.localeCompare(b.codigo, undefined, { numeric: true })
  );
}

run().catch(console.error);
