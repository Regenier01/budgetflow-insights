import XLSX from 'xlsx';

const path = 'realizado/Custos Totais - 04.2026.xlsx';
const wb = XLSX.readFile(path, { cellDates: true });
const name = wb.SheetNames[0];
const sh = wb.Sheets[name];
const rows = XLSX.utils.sheet_to_json(sh, { defval: '' });
console.log('sheet', name, 'rows', rows.length);
if (rows[0]) console.log('headers', Object.keys(rows[0]));
const r0 = rows[0];
const r1 = rows[1] || {};
for (const k of ['CONTA_CONTABIL', 'SALDO', ' SALDO ', 'DATA', 'NOMEDEPTO', 'NOMECUSTO', 'DIVISAO']) {
  console.log(k, JSON.stringify(r0[k]), JSON.stringify(r1[k]));
}
function getLikeExtract(row, keyName) {
  if (row[keyName] !== undefined) return row[keyName];
  const normalizedKey = keyName.trim().toUpperCase();
  for (const k in row) {
    if (k.trim().toUpperCase() === normalizedKey) return row[k];
  }
  return undefined;
}
let saldoNonZero = 0;
let contaCount = 0;
for (const row of rows) {
  const c = String(row.CONTA_CONTABIL || '').trim();
  if (c) contaCount++;
  const s = getLikeExtract(row, 'SALDO');
  const n = typeof s === 'number' ? s : Number(String(s || '').replace(/\./g, '').replace(',', '.'));
  if (n) saldoNonZero++;
}
console.log('rows with conta', contaCount, 'rows with saldo parse non-zero', saldoNonZero);
let found = 0;
for (let i = 0; i < rows.length && found < 5; i++) {
  const s = getLikeExtract(rows[i], 'SALDO');
  if (s !== '' && s !== undefined && s !== null) {
    console.log('row', i, 'SALDO', s, typeof s);
    found++;
  }
}
// sample keys with non-empty values row 100
const r100 = rows[100];
if (r100) {
  console.log('row100 sample');
  for (const [k, v] of Object.entries(r100)) {
    if (v !== '' && v != null) console.log(k, JSON.stringify(v));
  }
}
