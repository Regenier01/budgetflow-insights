import * as XLSX from 'xlsx';
import * as fs from 'fs';

// Fix for xlsx in ESM
const buf = fs.readFileSync('data/Unida-Depto.xlsx');
const workbook = XLSX.read(buf, { type: 'buffer' });
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

console.log(JSON.stringify(data, null, 2));
