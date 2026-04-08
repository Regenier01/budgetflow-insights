import { useState, useCallback } from 'react';
import { Upload, FileSpreadsheet, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { useBudgetStore } from '@/store/budgetStore';
import { MONTHS } from '@/types/budget';
import type { MonthKey, ExcelRow } from '@/types/budget';
import * as XLSX from 'xlsx';

export default function UploadPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<MonthKey>(MONTHS[0].key);
  const [isDragging, setIsDragging] = useState(false);
  const { uploads, addUpload, importExcelRows } = useBudgetStore();

  const processFile = useCallback(
    async (file: File) => {
      try {
        const buffer = await file.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: 'array', cellDates: true });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json<ExcelRow>(sheet);

        const processed = importExcelRows(rows, selectedPeriod);

        addUpload({
          id: crypto.randomUUID(),
          fileName: file.name,
          uploadDate: new Date().toISOString(),
          period: selectedPeriod,
          status: 'success',
          rowCount: processed,
        });

        toast.success(`${processed} registros importados com sucesso para ${MONTHS.find((m) => m.key === selectedPeriod)?.label}`);
      } catch {
        addUpload({
          id: crypto.randomUUID(),
          fileName: file.name,
          uploadDate: new Date().toISOString(),
          period: selectedPeriod,
          status: 'error',
          rowCount: 0,
        });
        toast.error('Erro ao processar o arquivo. Verifique o formato.');
      }
    },
    [selectedPeriod, addUpload, importExcelRows]
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
        <p className="text-sm text-muted-foreground">Importe arquivos Excel com os dados realizados mensais (formato padrão com 21 colunas)</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Importar Arquivo</CardTitle>
            <CardDescription>Selecione o período e envie o arquivo Excel no formato padrão</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
                Colunas esperadas: CONTA_CONTABIL, SALDO, DATA, NOMEDEPTO, NOMECUSTO, GRUPOCONTABIL...
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
                    <TableHead>Período</TableHead>
                    <TableHead>Registros</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploads.slice().reverse().map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="text-xs">{u.fileName}</TableCell>
                      <TableCell>{MONTHS.find((m) => m.key === u.period)?.label}</TableCell>
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
