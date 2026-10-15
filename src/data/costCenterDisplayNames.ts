/**
 * Nome legível para as abas de centro de custo de Despesas Administrativas e Tributárias no Excel de
 * desvios (`deviationExport.ts`). O centro de custo chega do sistema em caixa alta e sem acentos
 * (ex.: "GESTAO ADMINISTRATIVA"), o que gera nomes de aba difíceis de ler.
 *
 * Os 13 nomes abaixo são os mesmos usados pela base de orçado por centro de custo do sistema
 * (pasta "Orçado/Orça-Despesas Administrativas", um arquivo por centro de custo) — usados aqui
 * como fonte da verdade para esses nomes. Os demais centros de custo (sem arquivo correspondente
 * na base) recebem o mesmo tratamento de capitalização por `formatCostCenterDisplayName`.
 */
const COST_CENTER_DISPLAY_OVERRIDES: Record<string, string> = {
  COMPRAS: 'Compras',
  CONTROLADORIA: 'Controladoria',
  'DEPARTAMENTO JURIDICO': 'Departamento Juridico',
  DIRETORIA: 'Diretoria',
  FISCAL: 'Fiscal',
  'GESTAO ADMINISTRATIVA': 'Gestao Administrativa',
  'GOVERNANCIA CORPORATIVA': 'Governancia Corporativa',
  'MARKETING INTERNO': 'Marketing Interno',
  'ORGANIZACAO PREDIAL': 'Organizacao Predial',
  PESSOAL: 'Pessoal',
  'RATEIO DESENVOLVIMENTO HUMANO': 'Rateio Desenvolvimento Humano',
  'RATEIO FINANCEIRO': 'Rateio Financeiro',
  'RATEIO INFORMACAO E TECNOLOGIA': 'Rateio Informacao e Tecnologia',
  // Placeholders de "sem centro de custo" vindos de diferentes variações de importação — mesmo
  // rótulo amigável usado como fallback quando o campo vem vazio.
  SEM_CCUSTO: 'Sem Centro de Custo',
  SEM_CENTROCUSTO: 'Sem Centro de Custo',
  SEM_CODCCUTO: 'Sem Centro de Custo',
};

/** Preposições/conjunções que ficam em minúsculo quando não são a primeira palavra do nome. */
const PT_LOWERCASE_WORDS = new Set([
  'de', 'da', 'do', 'das', 'dos', 'e', 'a', 'o', 'com', 'em', 'no', 'na', 'nos', 'nas', 'sem', 'para',
]);

/** Siglas/abreviações conhecidas (marcas, programas, códigos de máquina) que devem ficar em caixa alta. */
const KNOWN_ACRONYMS = new Set(['SIPAT', 'GPTW', 'PPR', 'LTDA', 'APP']);

function titleCaseWord(word: string, isFirstWord: boolean): string {
  const upper = word.toUpperCase();
  if (KNOWN_ACRONYMS.has(upper)) return upper;
  if (/\d/.test(word)) return upper; // código alfanumérico (ex.: M6263, 25420) — mantém como está
  if (!isFirstWord && PT_LOWERCASE_WORDS.has(word.toLowerCase())) return word.toLowerCase();
  if (word.length <= 2) return upper; // sigla curta (ex.: OL, SP, VW, MF, CD, II)
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Capitaliza um nome de centro de custo vindo em caixa alta do sistema (ex.: "RATEIO VIGILANCIA E
 * APOIO" -> "Rateio Vigilancia e Apoio"), preservando siglas/códigos curtos e corrigindo o símbolo
 * "€" (artefato de importação no lugar de um "ç"). Não restaura acentos ausentes além desse caso —
 * mesma convenção sem acentuação já usada nos nomes da base (`COST_CENTER_DISPLAY_OVERRIDES`).
 */
export function formatCostCenterDisplayName(raw: string): string {
  const fixed = raw.replace(/€/g, 'ç');
  let isFirstWord = true;
  return fixed.replace(/[A-Za-zÀ-ÿ0-9]+/g, (word) => {
    const result = titleCaseWord(word, isFirstWord);
    isFirstWord = false;
    return result;
  });
}

/** Nome de exibição de um centro de custo: usa a base conhecida quando existir, senão capitaliza. */
export function resolveCostCenterDisplayLabel(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return trimmed;
  const override = COST_CENTER_DISPLAY_OVERRIDES[trimmed.toUpperCase()];
  return override ?? formatCostCenterDisplayName(trimmed);
}
