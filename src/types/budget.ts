export interface AccountEntry {
  id: string;
  codigo: string;
  descricao: string;
  tipo: 'R' | 'D' | 'C'; // Receita, Despesa, Custo
  codigoPai: string | null;
  nivel: number;
  orcado: Record<string, number>; // { "2026-04": 1000, ... }
  realizado: Record<string, number>;
}

export interface UploadRecord {
  id: string;
  fileName: string;
  uploadDate: string;
  period: string;
  status: 'success' | 'error';
  rowCount: number;
}

export const MONTHS = [
  { key: '2026-04', label: 'Abr/26' },
  { key: '2026-05', label: 'Mai/26' },
  { key: '2026-06', label: 'Jun/26' },
  { key: '2026-07', label: 'Jul/26' },
  { key: '2026-08', label: 'Ago/26' },
  { key: '2026-09', label: 'Set/26' },
  { key: '2026-10', label: 'Out/26' },
  { key: '2026-11', label: 'Nov/26' },
  { key: '2026-12', label: 'Dez/26' },
  { key: '2027-01', label: 'Jan/27' },
  { key: '2027-02', label: 'Fev/27' },
  { key: '2027-03', label: 'Mar/27' },
] as const;

export type MonthKey = typeof MONTHS[number]['key'];

export const TIPO_LABELS: Record<string, string> = {
  R: 'Receitas',
  D: 'Despesas',
  C: 'Custos',
};
