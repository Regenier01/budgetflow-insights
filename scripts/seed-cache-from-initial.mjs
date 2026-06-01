import { readFileSync, writeFileSync } from 'fs';

function parseTsJsonExport(filePath, exportName) {
  const content = readFileSync(filePath, 'utf8');
  const re = new RegExp(`export const ${exportName}(?:\\s*:[^=]+)?\\s*=\\s*`);
  const match = content.match(re);
  if (!match) throw new Error(`Export ${exportName} not found in ${filePath}`);
  const jsonStart = match.index + match[0].length;
  let depth = 0;
  let inString = false;
  let escape = false;
  let end = jsonStart;
  for (let i = jsonStart; i < content.length; i++) {
    const ch = content[i];
    if (inString) {
      if (escape) escape = false;
      else if (ch === '\\') escape = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
      continue;
    }
    if (ch === '{' || ch === '[') depth++;
    if (ch === '}' || ch === ']') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  return JSON.parse(content.slice(jsonStart, end));
}

const accounts = parseTsJsonExport('src/data/initialData.ts', 'INITIAL_ACCOUNTS');
const departmentMapping = parseTsJsonExport('src/data/departmentMapping.ts', 'DEPARTMENT_MAPPING');
const costCenterMapping = parseTsJsonExport('src/data/costCenterMapping.ts', 'COST_CENTER_MAPPING');

writeFileSync(
  '.data-cache.json',
  JSON.stringify({ accounts, departmentMapping, costCenterMapping })
);
console.log(`Cache gerado: ${accounts.length} contas.`);
