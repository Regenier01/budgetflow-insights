import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileSpreadsheet, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function InstructionsPage() {
  const columns = [
    { name: 'Codigo', desc: 'Código contábil da conta (ex: 3.1.1)', required: true },
    { name: 'Descricao', desc: 'Nome descritivo da conta', required: false },
    { name: 'Tipo', desc: 'R = Receita, D = Despesa, C = Custo', required: false },
    { name: 'CodigoPai', desc: 'Código da conta pai na hierarquia', required: false },
    { name: 'Orcado', desc: 'Valor orçado (usado apenas no primeiro upload)', required: false },
    { name: 'Realizado', desc: 'Valor realizado do mês selecionado', required: true },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">Instruções de Uso</h1>
        <p className="text-sm text-muted-foreground">Guia para preparar e enviar os arquivos Excel</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <FileSpreadsheet className="h-5 w-5 text-accent" />
            Formato do Arquivo Excel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            O arquivo deve ser um Excel (.xlsx ou .xls) ou CSV com as seguintes colunas na primeira aba:
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Coluna</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Obrigatório</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {columns.map((c) => (
                <TableRow key={c.name}>
                  <TableCell className="font-mono text-sm font-medium">{c.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{c.desc}</TableCell>
                  <TableCell>
                    {c.required ? (
                      <Badge className="bg-accent text-accent-foreground">Sim</Badge>
                    ) : (
                      <Badge variant="secondary">Não</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Fluxo de Trabalho
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Primeiro upload:</strong> Inclua todas as colunas (Codigo, Descricao, Tipo, CodigoPai, Orcado, Realizado) para definir a estrutura e o orçamento.</li>
            <li><strong className="text-foreground">Uploads mensais:</strong> Basta enviar Codigo e Realizado. O orçado já estará definido.</li>
            <li><strong className="text-foreground">Selecione o período:</strong> Na tela de upload, escolha o mês correspondente antes de enviar o arquivo.</li>
            <li><strong className="text-foreground">Visualize no Dashboard:</strong> Os dados são atualizados automaticamente nos gráficos e tabelas.</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertTriangle className="h-5 w-5 text-accent" />
            Observações Importantes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>A hierarquia entre as contas será definida posteriormente conforme sua estrutura contábil.</li>
            <li>Os nomes das colunas devem coincidir exatamente (sem acentos extras).</li>
            <li>Valores numéricos devem estar sem formatação especial (sem R$, sem pontos de milhar).</li>
            <li>O sistema aceita formatos .xlsx, .xls e .csv.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
