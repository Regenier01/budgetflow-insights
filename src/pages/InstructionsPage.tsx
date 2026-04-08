import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileSpreadsheet, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function InstructionsPage() {
  const columns = [
    { name: 'GRUPOCONTABIL', desc: 'Grupo contábil — identificação secundária da atividade', required: false },
    { name: 'COLIGADA', desc: 'Empresa do grupo (ex: 1-VERA CRUZ AGROPECUARIA LTDA)', required: false },
    { name: 'DIVISAO', desc: 'Divisão da empresa — Principal identificador da atividade (Pecuária, Seringal, etc.)', required: true },
    { name: 'NOMEDEPTO', desc: 'Nome do departamento', required: false },
    { name: 'NOMECUSTO', desc: 'Nome do centro de custo', required: false },
    { name: 'CODFILIAL', desc: 'Código da filial', required: false },
    { name: 'CODTMV', desc: 'Código do tipo de movimento', required: false },
    { name: 'DOCUMENTO', desc: 'Número do documento', required: false },
    { name: 'GRUPOCONTABILN9', desc: 'Grupo contábil nível 9', required: false },
    { name: 'CONTA_CONTABIL', desc: 'Código da conta contábil (ex: 3.1.01)', required: true },
    { name: 'DESCRICAO_CONTABIL', desc: 'Descrição da conta contábil', required: false },
    { name: 'NOMEPRODUTO', desc: 'Nome do produto', required: false },
    { name: 'COMPLEMENTO', desc: 'Complemento do lançamento', required: false },
    { name: 'CODUND', desc: 'Código da unidade', required: false },
    { name: 'QUANTIDADE', desc: 'Quantidade', required: false },
    { name: 'SALDOUNITARIO', desc: 'Valor unitário (R$)', required: false },
    { name: 'SALDO', desc: 'Valor total realizado (R$)', required: true },
    { name: 'HISTFATURAMENTO', desc: 'Histórico de faturamento', required: false },
    { name: 'NOMEPRODUTO_ANTIGO', desc: 'Nome do produto anterior', required: false },
    { name: 'NOME_ORCAMENTO', desc: 'Nome do orçamento (alternativa para atividade)', required: false },
    { name: 'DATA', desc: 'Data do lançamento — determina o mês do período', required: false },
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
            Formato do Arquivo Excel (21 colunas)
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
            <li><strong className="text-foreground">Exporte os dados</strong> do sistema contábil no formato padrão com as 21 colunas.</li>
            <li><strong className="text-foreground">Selecione o período</strong> na tela de upload (usado quando a coluna DATA não estiver preenchida).</li>
            <li><strong className="text-foreground">Envie o arquivo:</strong> O sistema agrega automaticamente os valores de SALDO por CONTA_CONTABIL e mês.</li>
            <li><strong className="text-foreground">Visualize no Dashboard:</strong> Os dados são atualizados nos cards e tabelas por atividade.</li>
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
            <li>As colunas obrigatórias são <strong className="text-foreground">CONTA_CONTABIL</strong>, <strong className="text-foreground">SALDO</strong> e <strong className="text-foreground">DIVISAO</strong>.</li>
            <li>A coluna <strong className="text-foreground">DIVISAO</strong> é usada para classificar os dados entre Pecuária, Seringal, Agrícola, etc.</li>
            <li>Se a coluna <strong className="text-foreground">DATA</strong> estiver preenchida, o mês é detectado automaticamente.</li>
            <li>Caso contrário, será usado o período selecionado manualmente.</li>
            <li>Valores de SALDO são agregados (somados) por conta contábil + mês.</li>
            <li>O sistema aceita formatos .xlsx, .xls e .csv.</li>
            <li>Os nomes das colunas devem coincidir exatamente (maiúsculas, sem acentos).</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}