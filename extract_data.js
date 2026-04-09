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

  // 1.5. Mapeamento de Centros de Custo
  const ccMappingFile = 'data/C.c.xlsx';
  let costCenterMapping = {};
  
  if (existsSync(ccMappingFile)) {
    const workbook = XLSX.readFile(ccMappingFile);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);
    
    data.forEach(row => {
      const cc = row['CENTRO DE CUSTO'];
      if (cc) {
        costCenterMapping[cc.trim()] = {
          centroCusto: cc.trim(),
          unidadeNegocio: row['UNIDADE DE NEGÓCIO'] || ''
        };
      }
    });
  }

  const ccMappingOutput = `export interface CostCenterInfo {
  centroCusto: string;
  unidadeNegocio: string;
}

export const COST_CENTER_MAPPING: Record<string, CostCenterInfo> = ${JSON.stringify(costCenterMapping, null, 2)};
`;
  writeFileSync('src/data/costCenterMapping.ts', ccMappingOutput);

  // 2. Extração de Realizado
  const realizadoDir = 'realizado';
  let allRows = [];

  if (existsSync(realizadoDir)) {
    const files = readdirSync(realizadoDir).filter(f => f.endsWith('.xlsx'));
    for (const file of files) {
      const workbook = XLSX.readFile(join(realizadoDir, file), { cellDates: true });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);
      allRows = allRows.concat(rows);
    }
    console.log(`Arquivos de realizado carregados: ${files.length}. Registros encontrados: ${allRows.length}.`);
  } else {
    console.log(`Aviso: Pasta '${realizadoDir}' não encontrada na raiz do projeto.`);
  }

  // 3. Processamento e Agregação
  const accounts = processBudgetRows(allRows, departmentMapping, costCenterMapping);

  // 4. Gerar Mapeamento Atividade -> Centros de Custo
  const activityCCMap = {};
  accounts.forEach(acc => {
    if (acc.centroCusto && acc.atividade) {
      if (!activityCCMap[acc.atividade]) {
        activityCCMap[acc.atividade] = new Set();
      }
      activityCCMap[acc.atividade].add(acc.centroCusto);
    }
  });

  const finalCCMap = {};
  for (const act in activityCCMap) {
    finalCCMap[act] = Array.from(activityCCMap[act]).sort();
  }

  const activityCCMappingOutput = `import type { AtividadeKey } from '@/types/budget';

export const ACTIVITY_CC_MAPPING: Record<AtividadeKey, string[]> = ${JSON.stringify(finalCCMap, null, 2)};
`;
  writeFileSync('src/data/activityCCMapping.ts', activityCCMappingOutput);

  const initialDataOutput = `import type { AccountEntry } from '@/types/budget';

export const INITIAL_ACCOUNTS: AccountEntry[] = ${JSON.stringify(accounts, null, 2)};
`;
  writeFileSync('src/data/initialData.ts', initialDataOutput);
  console.log('--- Extração finalizada com sucesso! ---');
}

// Funções Auxiliares

function getValue(row, keyName) {
  if (!row) return undefined;
  if (row[keyName] !== undefined) return row[keyName];
  const normalizedKey = keyName.trim().toUpperCase();
  for (const k in row) {
    if (k.trim().toUpperCase() === normalizedKey) return row[k];
  }
  return undefined;
}

function dateToMonthKey(raw) {
  if (!raw) return null;
  let d;
  if (raw instanceof Date) d = raw;
  else if (typeof raw === 'number') d = new Date((raw - 25569) * 86400000);
  else d = new Date(raw);
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

function mapAtividade(row, departmentMapping, costCenterMapping, conta) {
  const depto = getValue(row, 'NOMEDEPTO') ? String(getValue(row, 'NOMEDEPTO')).trim() : '';
  const centroCusto = getValue(row, 'NOMECUSTO') ? String(getValue(row, 'NOMECUSTO')).trim() : '';

  const mapping = departmentMapping[depto];
  const ccMapping = costCenterMapping[centroCusto];
  const unidadeNegocio = ccMapping ? ccMapping.unidadeNegocio : null;

  let isInvalidMapping = false;
  if (mapping && ccMapping) {
    const deptUN = mapping.unidadeNegocio ? mapping.unidadeNegocio.trim().toUpperCase() : '';
    const ccUN = ccMapping.unidadeNegocio ? ccMapping.unidadeNegocio.trim().toUpperCase() : '';
    if (deptUN && ccUN && deptUN !== ccUN) isInvalidMapping = true;
  }

  const divisaoFinal = mapping ? mapping.divisao : (getValue(row, 'DIVISAO') ? String(getValue(row, 'DIVISAO')) : undefined);

  // REGRAS DE RECEITAS ESPECÍFICAS
  if (conta) {
    // REGRA SOLICITADA: 3.1.01.01 -> RECEITAS PECUÁRIA
    if (conta.startsWith('3.1.01.01')) {
      return { atividade: 'PECUARIA', divisao: divisaoFinal || 'PECUÁRIA', unidadeNegocio, isInvalidMapping };
    }
    if (conta === '3.1.02.03.0001') {
      return { atividade: 'SERINGAL', divisao: divisaoFinal, unidadeNegocio, isInvalidMapping };
    }
    if (conta.startsWith('3.1.02.01')) {
      return { atividade: 'AGRICOLA', divisao: divisaoFinal, unidadeNegocio, isInvalidMapping };
    }
    if (conta.startsWith('3.1.02.02')) {
      return { atividade: 'CANA', divisao: divisaoFinal, unidadeNegocio, isInvalidMapping };
    }
  }

  if (mapping) {
    const divisao = mapping.divisao.trim().toUpperCase();
    const fromDivisao = mapAtividadeByDivisao(divisao);
    return { 
      atividade: fromDivisao || 'PECUARIA', 
      divisao: mapping.divisao, 
      unidadeNegocio,
      isInvalidMapping
    };
  }

  const currentDivisao = divisaoFinal;
  const fromDivisao = mapAtividadeByDivisao(currentDivisao);
  return { atividade: fromDivisao || 'PECUARIA', divisao: currentDivisao, unidadeNegocio, isInvalidMapping };
}

function mapTipo(contaContabil) {
  const conta = String(contaContabil || '').trim();
  if (conta.startsWith('3.1') || conta.startsWith('3.01')) return 'R';
  if (conta.startsWith('3.3') || conta.startsWith('3.03') || conta.startsWith('4')) return 'C';
  return 'D';
}

function processBudgetRows(rows, departmentMapping, costCenterMapping) {
  const aggregated = new Map();
  const fallbackMonth = '2027-01';

  for (const row of rows) {
    const conta = String(getValue(row, 'CONTA_CONTABIL') || '').trim();
    if (!conta) continue;

    const rawSaldo = getValue(row, 'SALDO');
    let saldo = 0;
    if (typeof rawSaldo === 'number') saldo = rawSaldo;
    else if (typeof rawSaldo === 'string') saldo = Number(rawSaldo.replace(/\./g, '').replace(',', '.'));
    if (isNaN(saldo)) saldo = 0;

    const nomeProduto = getValue(row, 'NOMEPRODUTO') ? String(getValue(row, 'NOMEPRODUTO')).trim() : '';
    const aggKey = `${conta}|${nomeProduto}`;
    const monthKey = dateToMonthKey(getValue(row, 'DATA')) || fallbackMonth;

    const existing = aggregated.get(aggKey);
    if (existing) {
      existing.saldo[monthKey] = (existing.saldo[monthKey] || 0) + saldo;
    } else {
      const depto = getValue(row, 'NOMEDEPTO') ? String(getValue(row, 'NOMEDEPTO')).trim() : '';
      const mapped = mapAtividade(row, departmentMapping, costCenterMapping, conta);

      aggregated.set(aggKey, {
        saldo: { [monthKey]: saldo },
        descricao: String(getValue(row, 'DESCRICAO_CONTABIL') || conta),
        departamento: depto || undefined,
        centroCusto: getValue(row, 'NOMECUSTO') ? String(getValue(row, 'NOMECUSTO')) : undefined,
        coligada: getValue(row, 'COLIGADA') ? String(getValue(row, 'COLIGADA')) : undefined,
        divisao: mapped.divisao || (getValue(row, 'DIVISAO') ? String(getValue(row, 'DIVISAO')) : undefined),
        unidadeNegocio: mapped.unidadeNegocio,
        grupoContabilN9: getValue(row, 'GRUPOCONTABILN9') ? String(getValue(row, 'GRUPOCONTABILN9')) : undefined,
        nomeProduto: nomeProduto || undefined,
        atividade: mapped.atividade,
        tipo: mapTipo(conta),
        isInvalidMapping: mapped.isInvalidMapping,
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
      isInvalidMapping: data.isInvalidMapping,
      orcado: {},
      realizado: data.saldo,
    });
  }

  return finalAccounts.sort((a, b) => a.codigo.localeCompare(b.codigo, undefined, { numeric: true }));
}

run().catch(console.error);