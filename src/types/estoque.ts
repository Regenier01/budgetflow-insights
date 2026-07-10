export interface EstoqueDepartamento {
  departamento: string;
  quantidade: number;
}

export interface EstoqueCategoria {
  categoria: string;
  custoMedio: number;
}

export interface EstoqueRecria {
  categoria: string;
  quantidade: number;
  custoMedio: number;
}

export interface EstoqueInsumo {
  nome: string;
  quantidadeKg: number;
  valorTotal: number;
  precoKg: number;
}

export interface EstoquePecuariaSnapshot {
  fileName: string;
  sourceFile: string;
  mesKey: string;
  mesLabel: string;
  mesShort: string;
  departamentos: EstoqueDepartamento[];
  categorias: EstoqueCategoria[];
  insumos: EstoqueInsumo[];
  recria: EstoqueRecria[];
  totalQuantidadeDepartamentos: number;
}
