import XLSX from 'xlsx';
import { existsSync } from 'fs';

const filePath = 'realizado/Realizado 04.2026.xlsx';

if (!existsSync(filePath)) {
  console.log('Arquivo não encontrado:', filePath);
  process.exit(1);
}

console.log('=== Lendo arquivo:', filePath, '===');
const workbook = XLSX.readFile(filePath, { cellDates: true });
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// Ler cabeçalhos
const range = XLSX.utils.decode_range(sheet['!ref']);
const headers = [];
for (let C = range.s.c; C <= range.e.c; ++C) {
  const cell = sheet[XLSX.utils.encode_cell({ r: range.s.r, c: C })];
  headers.push(cell ? String(cell.v).trim() : '');
}

console.log('\n=== CABEÇALHOS ENCONTRADOS ===');
headers.forEach((h, i) => {
  console.log(`Col ${i}: "${h}"`);
});

// Verificar índices das colunas importantes
const colNOMEDEPTO = headers.findIndex(h => h.includes('NOMEDEPTO'));
const colNOMECUSTO = headers.findIndex(h => h.includes('NOMECUSTO'));
const colDIVISAO = headers.findIndex(h => h.includes('DIVISAO'));

console.log('\n=== ÍNDICES DAS COLUNAS ===');
console.log('NOMEDEPTO índice:', colNOMEDEPTO, 'cabeçalho:', headers[colNOMEDEPTO]);
console.log('NOMECUSTO índice:', colNOMECUSTO, 'cabeçalho:', headers[colNOMECUSTO]);
console.log('DIVISAO índice:', colDIVISAO, 'cabeçalho:', headers[colDIVISAO]);

// Ler algumas linhas de exemplo
console.log('\n=== PRIMEIRAS 5 LINHAS (colunas D, E) ===');
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
for (let i = 1; i <= 5 && i < rows.length; i++) {
  const row = rows[i];
  console.log(`Linha ${i}:`);
  console.log('  NOMEDEPTO:', row[colNOMEDEPTO]);
  console.log('  NOMECUSTO:', row[colNOMECUSTO]);
  console.log('  DIVISAO:', row[colDIVISAO]);
}

// Buscar especificamente por linhas LAGUNA
console.log('\n=== BUSCANDO LINHAS LAGUNA ===');
let count = 0;
for (let i = 1; i < rows.length && count < 10; i++) {
  const row = rows[i];
  const depto = row[colNOMEDEPTO];
  if (depto && String(depto).toUpperCase().includes('LAGUNA')) {
    console.log(`Linha ${i}: DEPTO="${depto}" CUSTO="${row[colNOMECUSTO]}"`);
    count++;
  }
}
