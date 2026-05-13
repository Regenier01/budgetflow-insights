const OUTRAS_RENDAS_CODES = [
  '3.7.01.01.0001',
  '3.7.01.01.0002',
  '3.7.01.01.0003',
  '3.7.01.01.0004',
  '3.7.01.01.0005',
  '3.7.01.01.0006',
  '3.7.01.01.0030',
  '3.7.01.01.0031',
  '3.7.01.01.0040',
  '3.6.01.01.0001',
  '3.6.01.01.0002',
  '3.6.01.01.0003',
  '3.6.01.01.0004',
  '3.6.01.01.0005',
  '3.6.01.01.0006',
  '3.6.01.01.0007',
  '3.6.01.01.0008',
  '3.6.01.01.0009',
  '3.6.01.01.0010',
  '3.6.01.01.0011',
  '3.6.01.01.0012',
  '3.6.01.01.0013',
  '3.6.01.01.0014',
  '3.6.01.01.0020',
  '3.6.01.01.0050',
  '3.6.01.01.0051',
  '3.6.01.01.0052',
  '3.6.01.01.0053',
  '3.6.01.01.0054',
  '3.6.01.01.0055',
  '3.6.01.01.0056',
  '3.6.02.01.0001',
] as const;

export const OUTRAS_RENDAS_CODE_SET = new Set<string>(OUTRAS_RENDAS_CODES);

/** Plano 3.6 e 3.7 inteiro: card Outras Receitas Eventuais (além da lista explícita). */
const OUTRAS_RECEITAS_EVENTUAIS_PREFIXES = ['3.6.', '3.7.'] as const;

export const isOutrasReceitasEventuaisCode = (codigo?: string) => {
  const trimmed = (codigo || '').trim();
  if (!trimmed) return false;
  if (OUTRAS_RENDAS_CODE_SET.has(trimmed)) return true;
  if (trimmed === '3.6' || trimmed === '3.7') return true;
  return OUTRAS_RECEITAS_EVENTUAIS_PREFIXES.some((prefix) => trimmed.startsWith(prefix));
};
