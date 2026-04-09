import XLSX from 'xlsx';
import { writeFileSync } from 'fs';

async function run() {
  const workbook = XLSX.readFile('data/Unida-Depto.xlsx');
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  
  const mapping = {};
  data.forEach(row => {
    if (row.NOMEDEPTO) {
      mapping[row.NOMEDEPTO] = {
        nomedepto: row.NOMEDEPTO,
        unidadeNegocio: row['UNIDADE DE NEGÓCIO'] || '',
        divisao: row['DIVISÃO'] || ''
      };
    }
  });

  const output = `export interface DepartmentInfo {
  nomedepto: string;
  unidadeNegocio: string;
  divisao: string;
}

export const DEPARTMENT_MAPPING: Record<string, DepartmentInfo> = ${JSON.stringify(mapping, null, 2)};
`;
  writeFileSync('src/data/departmentMapping.ts', output);
}

run().catch(console.error);
