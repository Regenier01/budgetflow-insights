import { useState, useCallback } from 'react';
import { Upload, FileSpreadsheet, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { dateToMonthKey, getLastUploadedPeriod, useBudgetStore } from '@/store/budgetStore';
import { ATIVIDADES, MONTHS } from '@/types/budget';
import type { AtividadeKey, MonthKey, ExcelRow, OrcadoGrupoMonthValue } from '@/types/budget';
import * as XLSX from 'xlsx';

const MAX_FILE_SIZE_KB = 6500;
type UploadKind = 'realizado' | 'orcado';

const MONTHS_BY_LABEL: Record<string, MonthKey> = {
  'APR-26': '2026-04',
  'MAY-26': '2026-05',
  'JUN-26': '2026-06',
  'JUL-26': '2026-07',
  'AUG-26': '2026-08',
  'SEP-26': '2026-09',
  'OCT-26': '2026-10',
  'NOV-26': '2026-11',
  'DEC-26': '2026-12',
  'JAN-27': '2027-01',
  'FEB-27': '2027-02',
  'MAR-27': '2027-03',
};

const parseBudgetNumber = (value: unknown): number => {
  if (typeof value === 'number') return value;
  const normalized = String(value ?? '').replace(/,/g, '').trim();
  if (!normalized) return 0;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const normalizeBudgetMonth = (header: unknown): MonthKey | null => {
  const key = String(header ?? '').trim().toUpperCase();
  return MONTHS_BY_LABEL[key] || null;
};

const parseOrcadoSheet = (sheet: XLSX.WorkSheet): OrcadoGrupoMonthValue[] => {
  const rows = XLSX.utils.sheet_to_json<(string | number | null)[]>(sheet, { header: 1, defval: null });
  const header = rows[0] ?? [];
  if (header.length < 2) return [];

  const monthColumns = header
    .map((value, index) => ({ index, month: normalizeBudgetMonth(value) }))
    .filter((item) => item.index > 0 && item.month);

  const grouped = new Map<string, number>();
  for (const row of rows.slice(1)) {
    const rawGroup = String(row[0] ?? '').trim();
    if (!rawGroup) continue;
    const grupoContabil = rawGroup.split('-')[0]?.trim() || rawGroup;
    if (!grupoContabil) continue;

    monthColumns.forEach(({ index, month }) => {
      if (!month) return;
      const value = parseBudgetNumber(row[index]);
      const key = `${grupoContabil}::${month}`;
      grouped.set(key, (grouped.get(key) || 0) + value);
    });
  }

  return Array.from(grouped.entries()).map(([key, value]) => {
    const [grupoContabil, month] = key.split('::');
    return { grupoContabil, month: month as MonthKey, value };
  });
};

export default function UploadPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<MonthKey>(() => getLastUploadedPeriod() ?? MONTHS[0].key);
  const [uploadKind, setUploadKind] = useState<UploadKind>('realizado');
  const [selectedAtividade, setSelectedAtividade] = useState<AtividadeKey>('SERINGAL');
  const [isDragging, setIsDragging] = useState(false);
  const { uploads, addUpload, importExcelRows, importOrcadoByGrupo } = useBudgetStore();

  const processFile = useCallback(
    async (file: File) => {
      // Validação de tamanho de arquivo
      if (file.size > MAX_FILE_SIZE_KB * 1024) {
        toast.error(`O arquivo excede o limite de ${MAX_FILE_SIZE_KB}KB.`);
        return;
      }

      try {
        const buffer = await file.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: 'array', cellDates: true });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        if (uploadKind === 'orcado') {
          const rows = parseOrcadoSheet(sheet);
          const processed = importOrcadoByGrupo(rows, selectedAtividade, file.name);

          addUpload({
            id: crypto.randomUUID(),
            fileName: file.name,
            uploadDate: new Date().toISOString(),
            period: selectedPeriod,
            kind: 'orcado',
            atividade: selectedAtividade,
            status: 'success',
            rowCount: processed,
          });

          toast.success(
            `${processed} grupos/mês de orçado importados para ${ATIVIDADES.find((a) => a.key === selectedAtividade)?.label}`
          );
          return;
        }

        const rows = XLSX.utils.sheet_to_json<ExcelRow>(sheet);

        let rowsWithoutDate = 0;
        let rowsOutOfPeriod = 0;

        rows.forEach((row) => {
          const rowMonth = dateToMonthKey(row.DATA);
          if (!rowMonth) {
            rowsWithoutDate++;
          } else if (rowMonth !== selectedPeriod) {
            rowsOutOfPeriod++;
          }
        });

        // Mantém compatibilidade com o comportamento anterior:
        // nenhuma linha é descartada no upload; apenas sinalizamos divergências.
        const processed = importExcelRows(rows, selectedPeriod, file.name);

        addUpload({
          id: crypto.randomUUID(),
          fileName: file.name,
          uploadDate: new Date().toISOString(),
          period: selectedPeriod,
          kind: 'realizado',
          status: 'success',
          rowCount: processed,
        });

        const notices: string[] = [];
        if (rowsWithoutDate > 0) notices.push(`${rowsWithoutDate} sem DATA válida`);
        if (rowsOutOfPeriod > 0) notices.push(`${rowsOutOfPeriod} fora do período`);
        const suffix = notices.length > 0 ? ` (${notices.join(' | ')})` : '';

        toast.success(
          `${processed} registros importados com sucesso para ${MONTHS.find((m) => m.key === selectedPeriod)?.label}${suffix}`
        );
      } catch {
        addUpload({
          id: crypto.randomUUID(),
          fileName: file.name,
          uploadDate: new Date().toISOString(),
          period: selectedPeriod,
          kind: uploadKind,
          atividade: uploadKind === 'orcado' ? selectedAtividade : undefined,
          status: 'error',
          rowCount: 0,
        });
        toast.error('Erro ao processar o arquivo. Verifique o formato.');
      }
    },
    [uploadKind, selectedAtividade, selectedPeriod, addUpload, importExcelRows, importOrcadoByGrupo]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Upload de Dados</h1>
        <p className="text-sm text-muted-foreground">
          Importe planilhas de realizado mensal ou orçado por atividade/grupo contábil
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Importar Arquivo</CardTitle>
            <CardDescription>Selecione o período e envie o arquivo Excel (máx. {MAX_FILE_SIZE_KB}KB)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={uploadKind} onValueChange={(v) => setUploadKind(v as UploadKind)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de upload" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realizado">Realizado (contábil detalhado)</SelectItem>
                <SelectItem value="orcado">Orçado (grupo por atividade)</SelectItem>
              </SelectContent>
            </Select>

            {uploadKind === 'realizado' ? (
            <Select value={selectedPeriod} onValueChange={(v) => setSelectedPeriod(v as MonthKey)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o mês" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((m) => (
                  <SelectItem key={m.key} value={m.key}>{m.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            ) : (
              <Select value={selectedAtividade} onValueChange={(v) => setSelectedAtividade(v as AtividadeKey)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a atividade" />
                </SelectTrigger>
                <SelectContent>
                  {ATIVIDADES.map((a) => (
                    <SelectItem key={a.key} value={a.key}>
                      {a.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 transition-colors ${
                isDragging ? 'border-accent bg-accent/10' : 'border-border hover:border-accent/50'
              }`}
            >
              <Upload className="h-10 w-10 text-accent" />
              <p className="text-sm text-muted-foreground text-center">
                Arraste o arquivo Excel aqui ou clique para selecionar
              </p>
              <p className="text-xs text-muted-foreground/70 text-center">
                {uploadKind === 'realizado'
                  ? `Limite: ${MAX_FILE_SIZE_KB}KB. Colunas: CONTA_CONTABIL, SALDO, DATA...`
                  : `Limite: ${MAX_FILE_SIZE_KB}KB. Colunas: GRUPO_CONTABIL + meses (Apr-26...Mar-27)`}
              </p>
              <Button variant="outline" size="sm" asChild>
                <label className="cursor-pointer">
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                  Selecionar arquivo
                  <input type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={handleFileInput} />
                </label>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Histórico de Uploads</CardTitle>
          </CardHeader>
          <CardContent>
            {uploads.length === 0 ? (
              <p className="text-sm text-muted-foreground py-8 text-center">Nenhum upload realizado ainda</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Arquivo</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Referência</TableHead>
                    <TableHead>Registros</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploads.slice().reverse().map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="text-xs">{u.fileName}</TableCell>
                      <TableCell>{u.kind === 'orcado' ? 'Orçado' : 'Realizado'}</TableCell>
                      <TableCell>
                        {u.kind === 'orcado'
                          ? ATIVIDADES.find((a) => a.key === u.atividade)?.label || '-'
                          : MONTHS.find((m) => m.key === u.period)?.label}
                      </TableCell>
                      <TableCell>{u.rowCount}</TableCell>
                      <TableCell>
                        {u.status === 'success' ? (
                          <Badge variant="default" className="bg-primary text-primary-foreground gap-1">
                            <CheckCircle2 className="h-3 w-3" /> OK
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="gap-1">
                            <AlertCircle className="h-3 w-3" /> Erro
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}