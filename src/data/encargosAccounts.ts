/** Prefixos do grupo contábil de encargos financeiros (orçado importado por grupo). */
const PREFIX_DESP_FIN = '3.4.04.01';
const PREFIX_REC_FIN = '3.4.04.05';

function contaSegmentCount(codigo: string): number {
  return codigo.split('.').filter(Boolean).length;
}

/** Extrai o código numérico inicial de GRUPOCONTABILN9 (ex.: "3.4.04.01-DESPESAS" → "3.4.04.01"). */
export function grupoContabilN9Prefix(grupoContabilN9?: string): string {
  const raw = String(grupoContabilN9 ?? '').trim();
  const m = raw.match(/^\d(?:\.\d{1,4}){2,}/);
  return m?.[0] ?? '';
}

// Contas de Encargos Financeiras - Despesas (3.4.04.01)
export const DESPESAS_FINANCEIRAS = [
  '3.4.04.01.0001',
  '3.4.04.01.0002',
  '3.4.04.01.0003',
  '3.4.04.01.0004',
  '3.4.04.01.0005',
  '3.4.04.01.0006',
  '3.4.04.01.0007',
  '3.4.04.01.0008',
  '3.4.04.01.0009',
  '3.4.04.01.0010',
  '3.4.04.01.0011',
  '3.4.04.01.0012',
  '3.4.04.01.0013',
  '3.4.04.01.0019',
  '3.4.04.01.0020',
  '3.4.04.01.0021',
  '3.4.04.01.0022',
  '3.4.04.01.0023',
  '3.4.04.01.0024'
];

// Contas de Encargos Financeiras - Receitas (3.4.04.05)
export const RECEITAS_FINANCEIRAS = [
  '3.4.04.05.0001',
  '3.4.04.05.0002',
  '3.4.04.05.0003',
  '3.4.04.05.0004',
  '3.4.04.05.0005',
  '3.4.04.05.0006',
  '3.4.04.05.0007',
  '3.4.04.05.0008',
  '3.4.04.05.0009',
  '3.4.04.05.0010',
  '3.4.04.05.0011',
  '3.4.04.05.0012',
  '3.4.04.05.0013',
  '3.4.04.05.0020',
  '3.4.04.05.0021',
  '3.4.04.05.0022',
  '3.4.04.05.0023'
];

// Função para verificar se uma conta é de despesa financeira
export function isDespesaFinanceira(conta: string): boolean {
  const c = String(conta ?? '').trim();
  if (!c) return false;
  if (DESPESAS_FINANCEIRAS.includes(c)) return true;
  // Ancoras de orçado por grupo (ex.: 3.4.04.01.9001) e demais folhas sob 3.4.04.01
  return c.startsWith(`${PREFIX_DESP_FIN}.`) && contaSegmentCount(c) >= 5;
}

// Função para verificar se uma conta é de receita financeira
export function isReceitaFinanceira(conta: string): boolean {
  const c = String(conta ?? '').trim();
  if (!c) return false;
  if (RECEITAS_FINANCEIRAS.includes(c)) return true;
  return c.startsWith(`${PREFIX_REC_FIN}.`) && contaSegmentCount(c) >= 5;
}

/** Despesa financeira: lista fechada, folha sob 3.4.04.01, ou grupo N9 alinhado ao import de orçado. */
export function isDespesaFinanceiraAccount(entry: {
  codigo: string;
  grupoContabilN9?: string;
}): boolean {
  if (isDespesaFinanceira(entry.codigo)) return true;
  const g = grupoContabilN9Prefix(entry.grupoContabilN9);
  if (!g) return false;
  return g === PREFIX_DESP_FIN || g.startsWith(`${PREFIX_DESP_FIN}.`);
}

/** Receita financeira: lista fechada, folha sob 3.4.04.05, ou grupo N9 alinhado ao import de orçado. */
export function isReceitaFinanceiraAccount(entry: {
  codigo: string;
  grupoContabilN9?: string;
}): boolean {
  if (isReceitaFinanceira(entry.codigo)) return true;
  const g = grupoContabilN9Prefix(entry.grupoContabilN9);
  if (!g) return false;
  return g === PREFIX_REC_FIN || g.startsWith(`${PREFIX_REC_FIN}.`);
}

// Função para verificar se uma conta é de encargo (despesa ou receita)
export function isEncargo(conta: string): boolean {
  return isDespesaFinanceira(conta) || isReceitaFinanceira(conta);
}

// Função para obter o tipo de encargo
export function getTipoEncargo(conta: string): 'despesa' | 'receita' | null {
  if (isDespesaFinanceira(conta)) return 'despesa';
  if (isReceitaFinanceira(conta)) return 'receita';
  return null;
}
