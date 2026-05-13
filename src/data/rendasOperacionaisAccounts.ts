import type { AccountEntry } from '@/types/budget';

const normalizeText = (value?: string) =>
  (value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim();

/** Contas de grupo "Rendas Operacionais" entram no consolidado de custos com regras distintas; a abertura de receitas por atividade as exclui. */
export const isRendasOperacionaisEntry = (entry: Pick<AccountEntry, 'grupoContabilN9'>) => {
  const normalizedGroup = normalizeText(entry.grupoContabilN9);
  return normalizedGroup.includes('RENDAS OPERACIONAIS');
};
