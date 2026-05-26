import type { AccountEntry } from '@/types/budget';

export const COLIGADA_VERA_CRUZ = '1-VERA CRUZ AGROPECUARIA LTDA';
export const COLIGADA_OL_LATEX = '18-OL LATEX LTDA';
export const COLIGADA_OL_LATEX_TOCANTINS = '34-OL LATEX TOCANTINS LTDA';
export const COLIGADA_PLANAGRI = '2-PLANAGRI S.A.';

export type RateioColigadaSubview = 'vera-cruz' | 'ol-latex';

export const RATEIO_COLIGADA_GROUPS: {
  subview: RateioColigadaSubview;
  label: string;
  shortLabel: string;
}[] = [
  {
    subview: 'vera-cruz',
    label: COLIGADA_VERA_CRUZ,
    shortLabel: 'Vera Cruz',
  },
  {
    subview: 'ol-latex',
    label: 'OL Latex (18 + 34)',
    shortLabel: 'OL Latex',
  },
];

export function normalizeColigadaKey(value?: string): string {
  return (value || '')
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

const NORMALIZED_COLIGADA_BY_SUBVIEW: Record<RateioColigadaSubview, readonly string[]> = {
  'vera-cruz': [normalizeColigadaKey(COLIGADA_VERA_CRUZ)],
  'ol-latex': [
    normalizeColigadaKey(COLIGADA_OL_LATEX),
    normalizeColigadaKey(COLIGADA_OL_LATEX_TOCANTINS),
  ],
};

export function parseRateioColigadaSubview(
  subview: string | null | undefined
): RateioColigadaSubview | null {
  if (subview === 'vera-cruz' || subview === 'ol-latex') return subview;
  return null;
}

export function isPlanagriColigada(coligada?: string): boolean {
  return normalizeColigadaKey(coligada) === normalizeColigadaKey(COLIGADA_PLANAGRI);
}

/** Coligada 2-PLANAGRI S.A. não entra na abertura de rateios. */
export function isExcludedFromRateios(entry: Pick<AccountEntry, 'coligada'>): boolean {
  return isPlanagriColigada(entry.coligada);
}

export function matchesRateioColigadaSubview(
  entry: Pick<AccountEntry, 'coligada'>,
  subview: RateioColigadaSubview
): boolean {
  const normalized = normalizeColigadaKey(entry.coligada);
  if (!normalized) return false;
  return NORMALIZED_COLIGADA_BY_SUBVIEW[subview].includes(normalized);
}

export function rateioColigadaSubviewFilter(
  subview: RateioColigadaSubview | null
): ((entry: AccountEntry) => boolean) | undefined {
  if (!subview) return undefined;
  return (entry) => matchesRateioColigadaSubview(entry, subview);
}

export const RATEIO_DEPARTMENTS = [
  'OFICINA GERAL',
  'FABRICA DE RACAO',
  'FABRICA DE SAL',
  'MECANIZADO',
  'LOGISTICA',
  'ALMOXARIFADO',
] as const;

const RATEIO_DEPARTMENTS_EXCLUDED_BY_SUBVIEW: Record<
  RateioColigadaSubview,
  readonly string[]
> = {
  'vera-cruz': [],
  'ol-latex': ['FABRICA DE RACAO', 'FABRICA DE SAL', 'LOGISTICA'],
};

export function getRateioDepartmentsForSubview(
  subview: RateioColigadaSubview
): readonly string[] {
  const excluded = new Set(
    RATEIO_DEPARTMENTS_EXCLUDED_BY_SUBVIEW[subview].map(normalizeColigadaKey)
  );
  return RATEIO_DEPARTMENTS.filter((dept) => !excluded.has(normalizeColigadaKey(dept)));
}

export function resolveRateioColigadaSubviewForEntry(
  entry: Pick<AccountEntry, 'coligada'>
): RateioColigadaSubview | null {
  if (matchesRateioColigadaSubview(entry, 'vera-cruz')) return 'vera-cruz';
  if (matchesRateioColigadaSubview(entry, 'ol-latex')) return 'ol-latex';
  return null;
}

export function isRateioDepartmentForSubview(
  departamento: string | undefined,
  subview: RateioColigadaSubview
): boolean {
  if (!departamento) return false;
  const normalized = normalizeColigadaKey(departamento);
  return getRateioDepartmentsForSubview(subview).some(
    (dept) => normalizeColigadaKey(dept) === normalized
  );
}

export function isRateioDepartmentForEntry(
  entry: Pick<AccountEntry, 'departamento' | 'coligada'>
): boolean {
  const subview = resolveRateioColigadaSubviewForEntry(entry);
  if (!subview) return false;
  return isRateioDepartmentForSubview(entry.departamento, subview);
}
