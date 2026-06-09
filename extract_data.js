import XLSX from 'xlsx';

import ExcelJS from 'exceljs';

import { writeFileSync, readFileSync, readdirSync, existsSync, createReadStream, statSync } from 'fs';

import { join } from 'path';

import { randomUUID } from 'crypto';



const CACHE_FILE = '.data-cache.json';

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { file: null, replaceRealizado: false };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--file' && args[i + 1] && !args[i + 1].startsWith('-')) {
      result.file = args[i + 1];
      i++;
    } else if (args[i] === '--replace-realizado') {
      result.replaceRealizado = true;
    }
  }
  // Fallback via env var para contornar npm/PowerShell que engole flags `--`
  // após o separador `--` em `npm run`.
  if (!result.replaceRealizado) {
    const env = String(process.env.REPLACE_REALIZADO || '').toLowerCase();
    if (env === '1' || env === 'true' || env === 'yes') {
      result.replaceRealizado = true;
    }
  }
  return result;
}

function loadCache() {
  if (existsSync(CACHE_FILE)) {
    const raw = JSON.parse(readFileSync(CACHE_FILE, 'utf-8'));
    return raw;
  }
  return null;
}

function saveCache(data) {
  writeFileSync(CACHE_FILE, JSON.stringify(data));
}

function mergeAccounts(existing, incoming, { replaceRealizado } = {}) {
  const merged = [...existing];

  for (const newAcc of incoming) {
    const match = merged.find(a =>
      a.codigo === newAcc.codigo &&
      a.atividade === newAcc.atividade &&
      (a.departamento || '') === (newAcc.departamento || '') &&
      (a.centroCusto || '') === (newAcc.centroCusto || '') &&
      (a.nomeProduto || '') === (newAcc.nomeProduto || '') &&
      (a.complemento || '') === (newAcc.complemento || '') &&
      (a.coligada || '') === (newAcc.coligada || '')
    );

    if (match) {
      for (const [month, value] of Object.entries(newAcc.realizado || {})) {
        if (replaceRealizado) {
          match.realizado[month] = value;
        } else {
          match.realizado[month] = (match.realizado[month] || 0) + value;
        }
      }
      for (const [month, value] of Object.entries(newAcc.quantidade || {})) {
        if (!match.quantidade) match.quantidade = {};
        if (replaceRealizado) {
          match.quantidade[month] = value;
        } else {
          match.quantidade[month] = (match.quantidade[month] || 0) + value;
        }
      }
      for (const [month, value] of Object.entries(newAcc.orcado || {})) {
        match.orcado[month] = (match.orcado[month] || 0) + value;
      }
    } else {
      if (replaceRealizado) {
        const r = newAcc.realizado || {};
        if (Object.keys(r).length === 0 || Object.values(r).every((v) => v === 0)) {
          continue;
        }
      }
      merged.push(newAcc);
    }
  }

  return merged.sort((a, b) => a.codigo.localeCompare(b.codigo, undefined, { numeric: true }));
}

/** Meses de realizado presentes em qualquer conta (após processar o arquivo atual). */
function collectRealizadoMonths(accounts) {
  const months = new Set();
  for (const acc of accounts) {
    if (!acc.realizado) continue;
    for (const m of Object.keys(acc.realizado)) {
      months.add(m);
    }
  }
  return months;
}

/**
 * Remove chaves de realizado dos meses indicados em todas as contas.
 * Usado com --replace-realizado: o arquivo novo passa a ser a fonte da verdade
 * para esses meses; lançamentos que saíram da planilha deixam de persistir no cache.
 */
function stripRealizadoMonthsFromAccounts(accounts, monthsToStrip) {
  if (!monthsToStrip.size) return accounts;
  return accounts.map((acc) => {
    const r = acc.realizado || {};
    const next = { ...r };
    for (const m of monthsToStrip) {
      delete next[m];
    }
    const q = acc.quantidade || {};
    const nextQ = { ...q };
    for (const m of monthsToStrip) {
      delete nextQ[m];
    }
    const quantidade = Object.keys(nextQ).length > 0 ? nextQ : undefined;
    return { ...acc, realizado: next, quantidade };
  });
}

async function run() {

  const cliArgs = parseArgs();
  const argv = process.argv.slice(2);
  const hasBareFileFlag = argv.includes('--file');
  if (hasBareFileFlag && !cliArgs.file) {
    console.error(
      'Uso incorreto: --file precisa do trecho do nome do .xlsx dentro de realizado/.\n' +
        '  npm run data:add -- 04.2026\n' +
        'Sem o nome após o comando, o script cai no modo COMPLETO (todos os xlsx) e reescreve initialData inteiro.\n' +
        'Para sobrescrever o realizado dos meses vindos do arquivo (incluindo zerar saldos), use:\n' +
        '  npm run data:replace -- 04.2026\n' +
        '  (ou: $env:REPLACE_REALIZADO=1; npm run data:add -- 04.2026)\n' +
        'Obs.: no PowerShell, npm engole flags --xxx depois do separador `--`, por isso evite\n' +
        '  npm run data:add -- 04.2026 --replace-realizado'
    );
    process.exit(1);
  }

  const incrementalMode = !!cliArgs.file;
  const replaceRealizado = incrementalMode && !!cliArgs.replaceRealizado;

  if (incrementalMode) {
    console.log(`--- Modo incremental: carregando apenas "${cliArgs.file}" ---`);
    if (replaceRealizado) {
      console.log('*** MODO REPLACE-REALIZADO ATIVO: meses do arquivo SUBSTITUEM o cache (saldos 0 zeram o mês) ***');
    } else {
      console.log('Modo MERGE (soma): valores do arquivo serão SOMADOS aos do cache para os mesmos meses.');
      console.log('  Para substituir em vez de somar, use: npm run data:replace -- <nome>');
    }
  } else {
    console.log('--- Iniciando extração completa de dados ---');
  }



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

  }



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



  // 2. Extração de Realizado (com streaming para arquivos grandes)

  const realizadoDir = 'realizado';

  let allRows = [];



  async function readLargeExcel(filePath) {

    const rows = [];

    const workbook = new ExcelJS.Workbook();

    const stream = createReadStream(filePath);

    

    await workbook.xlsx.read(stream);

    const worksheet = workbook.worksheets[0];

    

    // Ler cabeçalhos

    const headers = [];

    worksheet.getRow(1).eachCell((cell, colNumber) => {

      headers[colNumber] = cell.value;

    });

    

    // Ler dados a partir da linha 2

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {

      if (rowNumber === 1) return; // Pular cabeçalho

      

      const rowData = {};

      row.eachCell((cell, colNumber) => {

        const header = headers[colNumber];

        if (header) {

          // Converter datas

          if (cell.type === ExcelJS.ValueType.Date) {

            rowData[header] = cell.value;

          } else if (cell.type === ExcelJS.ValueType.Number) {

            rowData[header] = cell.value;

          } else {

            rowData[header] = cell.value ? String(cell.value).replace(/\n/g, '').trim() : '';

          }

        }

      });

      rows.push(rowData);

    });

    

    return rows;

  }



  if (existsSync(realizadoDir)) {

    let files = readdirSync(realizadoDir).filter(f => f.endsWith('.xlsx') && !f.startsWith('~$'));

    if (incrementalMode) {
      const target = files.find(f => f.toLowerCase().includes(cliArgs.file.toLowerCase()));
      if (!target) {
        console.error(`Arquivo não encontrado na pasta realizado/ contendo "${cliArgs.file}"`);
        console.log('Arquivos disponíveis:');
        files.forEach(f => console.log(`  - ${f}`));
        process.exit(1);
      }
      files = [target];
    }

    for (const file of files) {

      console.log(`Processando arquivo: ${file}...`);

      const filePath = join(realizadoDir, file);

      const fileSize = statSync(filePath).size;

      const fileSizeMB = (fileSize / 1024 / 1024).toFixed(2);

      console.log(`Tamanho: ${fileSizeMB} MB`);

      

      // Usar streaming para arquivos grandes (> 10MB)

      if (fileSize > 10 * 1024 * 1024) {

        console.log('Usando modo streaming (arquivo grande)...');

        const rows = await readLargeExcel(filePath);

        console.log(`Linhas lidas: ${rows.length}`);

        allRows = allRows.concat(rows);

      } else {

        const workbook = XLSX.readFile(filePath, { cellDates: true });

        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        const rows = XLSX.utils.sheet_to_json(sheet);

        // Limpar quebras de linha em todos os campos string
        const cleanedRows = rows.map(row => {
          const cleanedRow = {};
          for (const [key, value] of Object.entries(row)) {
            cleanedRow[key] = typeof value === 'string' ? value.replace(/\n/g, '').trim() : value;
          }
          return cleanedRow;
        });

        allRows = allRows.concat(cleanedRows);

      }

    }

  }



  // 3. Processamento e Agregação

  const newAccounts = processBudgetRows(allRows, departmentMapping, costCenterMapping, {
    includeZeroSaldo: replaceRealizado,
  });

  let accounts;

  if (incrementalMode) {
    const cache = loadCache();
    if (cache) {
      console.log(`Mesclando com cache existente (${cache.accounts.length} contas)...`);
      let cacheAccounts = cache.accounts;
      if (replaceRealizado) {
        const monthsFromImport = collectRealizadoMonths(newAccounts);
        if (monthsFromImport.size) {
          const monthList = [...monthsFromImport].sort().join(', ');
          console.log(
            `Substituindo realizado no cache para o(s) mes(es): ${monthList} (linhas ausentes no arquivo serao removidas).`
          );
          cacheAccounts = stripRealizadoMonthsFromAccounts(cache.accounts, monthsFromImport);
        }
      }
      accounts = mergeAccounts(cacheAccounts, newAccounts, { replaceRealizado });
      departmentMapping = { ...cache.departmentMapping, ...departmentMapping };
      costCenterMapping = { ...cache.costCenterMapping, ...costCenterMapping };
    } else {
      console.log('Sem cache anterior, usando apenas dados do arquivo atual.');
      accounts = newAccounts;
    }
  } else {
    accounts = newAccounts;
  }



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



  // Salvar cache para uso incremental futuro
  saveCache({ accounts, departmentMapping, costCenterMapping });
  console.log('Cache salvo em .data-cache.json');

  // Escrita dos arquivos de saída

  writeFileSync('src/data/departmentMapping.ts', `export const DEPARTMENT_MAPPING = ${JSON.stringify(departmentMapping, null, 2)};`);

  writeFileSync('src/data/costCenterMapping.ts', `export const COST_CENTER_MAPPING = ${JSON.stringify(costCenterMapping, null, 2)};`);

  writeFileSync('src/data/activityCCMapping.ts', `export const ACTIVITY_CC_MAPPING = ${JSON.stringify(finalCCMap, null, 2)};`);

  writeFileSync('src/data/initialData.ts', `import type { AccountEntry } from '@/types/budget';\n\nexport const INITIAL_ACCOUNTS: AccountEntry[] = ${JSON.stringify(accounts, null, 2)};`);

  
  if (incrementalMode) {
    console.log(`--- Extração incremental finalizada! (${newAccounts.length} contas do arquivo novo, ${accounts.length} contas no total) ---`);
  } else {
    console.log(`--- Extração completa finalizada! (${accounts.length} contas) ---`);
  }

}



// Funções Auxiliares



function getValue(row, keyName) {

  if (!row) return undefined;

  if (row[keyName] !== undefined) {
    const value = row[keyName];
    return typeof value === 'string' ? value.replace(/\n/g, '').trim() : value;
  }

  const normalizedKey = keyName.trim().toUpperCase();

  for (const k in row) {

    if (k.trim().toUpperCase() === normalizedKey) {
      const value = row[k];
      return typeof value === 'string' ? value.replace(/\n/g, '').trim() : value;
    }

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

  const text = divisao.trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (text.includes('PECUA') || text.includes('GADO')) return 'PECUARIA';

  if (text.includes('SERING') || text.includes('LATEX') || text.includes('BORRACHA')) return 'SERINGAL';

  if (text.includes('AGRIC') || text.includes('SOJA') || text.includes('MILHO') || text.includes('GRAO')) return 'AGRICOLA';

  if (text.includes('CANA')) return 'CANA';

  if (text.includes('ADM') || text.includes('TRIB') || text.includes('LOGISTICA') || text.includes('ALMOXARIFADO')) return 'DESP_ADM_TRIB';

  if (text.includes('ENCARGO')) return 'ENCARGOS';

  return null;

}



const DESPESAS_FINANCEIRAS = [

  '3.4.04.01.0001', '3.4.04.01.0002', '3.4.04.01.0003', '3.4.04.01.0004',

  '3.4.04.01.0005', '3.4.04.01.0006', '3.4.04.01.0007', '3.4.04.01.0008',

  '3.4.04.01.0009', '3.4.04.01.0010', '3.4.04.01.0011', '3.4.04.01.0012',

  '3.4.04.01.0013', '3.4.04.01.0019', '3.4.04.01.0020', '3.4.04.01.0021',

  '3.4.04.01.0022', '3.4.04.01.0023', '3.4.04.01.0024'

];



const RECEITAS_FINANCEIRAS = [

  '3.4.04.05.0001', '3.4.04.05.0002', '3.4.04.05.0003', '3.4.04.05.0004',

  '3.4.04.05.0005', '3.4.04.05.0006', '3.4.04.05.0007', '3.4.04.05.0008',

  '3.4.04.05.0009', '3.4.04.05.0010', '3.4.04.05.0011', '3.4.04.05.0012',

  '3.4.04.05.0013', '3.4.04.05.0020', '3.4.04.05.0021', '3.4.04.05.0022',

  '3.4.04.05.0023'

];



function isEncargoFinanceiro(conta) {

  const c = conta.trim();

  return DESPESAS_FINANCEIRAS.includes(c) || RECEITAS_FINANCEIRAS.includes(c);

}



function mapAtividade(row, departmentMapping, costCenterMapping, conta) {

  const depto = getValue(row, 'NOMEDEPTO') ? String(getValue(row, 'NOMEDEPTO')).trim() : '';

  const centroCusto = getValue(row, 'NOMECUSTO') ? String(getValue(row, 'NOMECUSTO')).trim() : '';

  const divisaoRaw = getValue(row, 'DIVISAO') ? String(getValue(row, 'DIVISAO')).trim() : '';



  // 0. Verificação de Encargos Financeiros (Prioridade Máxima)

  if (conta && isEncargoFinanceiro(conta)) {

    return { atividade: 'ENCARGOS', divisao: 'ENCARGOS FINANCEIROS' };

  }



  // 1. Regras de Receitas (Prioridade Máxima)

  if (conta) {

    if (conta.startsWith('3.1.01.01')) return { atividade: 'PECUARIA', divisao: 'PECUÁRIA' };

    if (conta === '3.1.02.03.0001') return { atividade: 'SERINGAL', divisao: 'SERINGAL' };

    if (conta.startsWith('3.1.02.01')) return { atividade: 'AGRICOLA', divisao: 'AGRÍCOLA' };

    if (conta.startsWith('3.1.02.02')) return { atividade: 'CANA', divisao: 'CANA' };

  }



  // 2. Tenta pelo Mapeamento de Departamento (Mais específico)

  const mapping = departmentMapping[depto];

  if (mapping) {

    const fromDept = mapAtividadeByDivisao(mapping.divisao);

    if (fromDept && fromDept !== 'DESP_ADM_TRIB') return { atividade: fromDept, divisao: mapping.divisao };

  }



  // 3. Tenta pelo Mapeamento de Centro de Custo

  const ccMapping = costCenterMapping[centroCusto];

  if (ccMapping) {

    const fromCC = mapAtividadeByDivisao(ccMapping.unidadeNegocio);

    if (fromCC && fromCC !== 'DESP_ADM_TRIB') return { atividade: fromCC, divisao: ccMapping.unidadeNegocio };

  }



  // 4. Tenta pela Divisão do Excel

  const fromDivisao = mapAtividadeByDivisao(divisaoRaw);

  if (fromDivisao) return { atividade: fromDivisao, divisao: divisaoRaw };



  // 5. Fallback seguro

  return { atividade: 'DESP_ADM_TRIB', divisao: divisaoRaw || 'NÃO IDENTIFICADO' };

}



function mapTipo(contaContabil) {

  const conta = String(contaContabil || '').trim();

  if (conta.startsWith('3.1') || conta.startsWith('3.01')) return 'R';

  if (conta.startsWith('4.')) return 'C';

  return 'D';

}



function processBudgetRows(rows, departmentMapping, costCenterMapping, options = {}) {
  const { includeZeroSaldo = false } = options;

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

    const rawQuantidade = getValue(row, 'QUANTIDADE');
    let quantidade = 0;
    if (typeof rawQuantidade === 'number') quantidade = rawQuantidade;
    else if (typeof rawQuantidade === 'string') {
      quantidade = Number(rawQuantidade.replace(/\./g, '').replace(',', '.'));
    }
    if (isNaN(quantidade)) quantidade = 0;

    // Ignorar valores zerados para evitar criar contas vazias (no modo replace-realizado incremental, zero zera o mês)

    if (saldo === 0 && quantidade === 0 && !includeZeroSaldo) continue;



    const nomeProduto = getValue(row, 'NOMEPRODUTO') ? String(getValue(row, 'NOMEPRODUTO')).trim() : '';
    const complemento = getValue(row, 'COMPLEMENTO') ? String(getValue(row, 'COMPLEMENTO')).trim() : '';

    const depto = getValue(row, 'NOMEDEPTO') ? String(getValue(row, 'NOMEDEPTO')).trim() : '';

    const centroCusto = getValue(row, 'NOMECUSTO') ? String(getValue(row, 'NOMECUSTO')).trim() : '';

    const divisaoRaw = getValue(row, 'DIVISAO') ? String(getValue(row, 'DIVISAO')).trim() : '';

    // Adicionar automaticamente departamentos e centros de custo ausentes ao mapeamento
    if (depto && !departmentMapping[depto]) {
      departmentMapping[depto] = {
        nomedepto: depto,
        unidadeNegocio: divisaoRaw || 'NÃO IDENTIFICADO',
        divisao: divisaoRaw || 'NÃO IDENTIFICADO'
      };
    }

    if (centroCusto && !costCenterMapping[centroCusto]) {
      // Tentar inferir a unidade de negócio a partir do nome do centro de custo
      let unidadeNegocio = 'NÃO IDENTIFICADO';
      if (centroCusto.includes('SOJA')) unidadeNegocio = 'AGRÍCOLA - SOJA';
      else if (centroCusto.includes('MILHO')) unidadeNegocio = 'AGRÍCOLA - MILHO';
      else if (centroCusto.includes('SORGO')) unidadeNegocio = 'AGRÍCOLA - SORGO';
      else if (centroCusto.includes('GIRASSOL')) unidadeNegocio = 'AGRÍCOLA - GIRASSOL';
      else if (centroCusto.includes('PECUARIA') || centroCusto.includes('GADO')) unidadeNegocio = 'PECUÁRIA';
      else if (centroCusto.includes('SERING')) unidadeNegocio = 'SERINGAL';
      else if (centroCusto.includes('CANA')) unidadeNegocio = 'CANA';
      
      costCenterMapping[centroCusto] = {
        centroCusto: centroCusto,
        unidadeNegocio: unidadeNegocio
      };
    }

    const mapped = mapAtividade(row, departmentMapping, costCenterMapping, conta);

    const coligada = getValue(row, 'COLIGADA') ? String(getValue(row, 'COLIGADA')).trim() : '';

    // Incluir departamento, centro de custo e coligada na chave para agregação correta
    const aggKey = `${conta}|${nomeProduto}|${complemento}|${mapped.atividade}|${depto}|${centroCusto}|${coligada}`;

    const monthKey = dateToMonthKey(getValue(row, 'DATA')) || fallbackMonth;

    const existing = aggregated.get(aggKey);

    if (existing) {

      existing.saldo[monthKey] = (existing.saldo[monthKey] || 0) + saldo;
      if (quantidade !== 0) {
        if (!existing.quantidade) existing.quantidade = {};
        existing.quantidade[monthKey] = (existing.quantidade[monthKey] || 0) + quantidade;
      }

    } else {

      aggregated.set(aggKey, {

        saldo: { [monthKey]: saldo },

        quantidade: quantidade !== 0 ? { [monthKey]: quantidade } : undefined,

        descricao: String(getValue(row, 'DESCRICAO_CONTABIL') || conta),

        departamento: getValue(row, 'NOMEDEPTO') ? String(getValue(row, 'NOMEDEPTO')).trim() : undefined,

        centroCusto: getValue(row, 'NOMECUSTO') ? String(getValue(row, 'NOMECUSTO')).trim() : undefined,

        coligada: coligada || undefined,

        divisao: mapped.divisao,

        grupoContabil: getValue(row, 'GRUPOCONTABIL') ? String(getValue(row, 'GRUPOCONTABIL')) : undefined,

        grupoContabilN9: getValue(row, 'GRUPOCONTABILN9') ? String(getValue(row, 'GRUPOCONTABILN9')) : undefined,

        nomeProduto: nomeProduto || undefined,

        complemento: complemento || undefined,

        atividade: mapped.atividade,

        tipo: mapTipo(conta),

      });

    }

  }



  const finalAccounts = [];

  const ensureParentExists = (codigo, data) => {

    const parts = codigo.split('.');

    if (parts.length <= 1) return;

    const codigoPai = parts.slice(0, -1).join('.');

    

    const parent = finalAccounts.find((a) => a.codigo === codigoPai && a.atividade === data.atividade);

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

      grupoContabil: data.grupoContabil,

      grupoContabilN9: data.grupoContabilN9,

      nomeProduto: data.nomeProduto,

      complemento: data.complemento,

      divisao: data.divisao,

      orcado: {},

      realizado: data.saldo,

      ...(data.quantidade ? { quantidade: data.quantidade } : {}),

    });

  }



  return finalAccounts.sort((a, b) => a.codigo.localeCompare(b.codigo, undefined, { numeric: true }));

}



run().catch(console.error);