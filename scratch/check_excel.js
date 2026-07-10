import XLSX from 'xlsx';
const wb = XLSX.readFile('Estoque/Estoque 06.2026.xlsx', { cellDates: true });
const sheetName = wb.SheetNames[0];
const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, defval: null });
console.log("Rows around MACHO RECRIA:");
for (let i = 0; i < rows.length; i++) {
  const rowStr = JSON.stringify(rows[i]);
  if (rowStr.includes('MACHO RECRIA') || rowStr.includes('FEMEA RECRIA') || rowStr.includes('MATRIZES') || rowStr.includes('CATEGORIA')) {
    console.log(`Row ${i}:`, rows[i]);
  }
}
