import { describe, expect, it } from 'vitest';
import { parseEstoqueRows } from '../../import_estoque.js';

describe('parseEstoqueRows', () => {
  it('lê departamentos, categorias e insumos em blocos separados', () => {
    const rows = [
      ['DEPARTAMENTO', 'QUANTIDADE', null, 'CATEGORIA', 'CUSTO MEDIO', null, 'PALHA', null, null],
      ['Fazenda Vera Cruz - Furnas', 1922, null, 'MATRIZES', 2254, null, 'QUANTIDADE', 'VALOR TOTAL', 'PREÇO/KG'],
      ['Confinamento', 23041, null, 'REPRODUTORES', 6728.87, null, 30, 2, 15],
      [null, null, null, null, null, null, 'GRAOS REIDRATADOS', null, null],
      [null, null, null, null, null, null, 'QUANTIDADE', 'VALOR TOTAL', 'PREÇO/KG'],
      [null, null, null, null, null, null, 100, 5, 20],
    ];

    const parsed = parseEstoqueRows(rows);

    expect(parsed.departamentos).toEqual([
      { departamento: 'Fazenda Vera Cruz - Furnas', quantidade: 1922 },
      { departamento: 'Confinamento', quantidade: 23041 },
    ]);
    expect(parsed.categorias).toEqual([
      { categoria: 'MATRIZES', custoMedio: 2254 },
      { categoria: 'REPRODUTORES', custoMedio: 6728.87 },
    ]);
    expect(parsed.insumos).toEqual([
      { nome: 'Palha de milho', quantidadeKg: 30, valorTotal: 2, precoKg: 15 },
      { nome: 'Grãos Reidratados', quantidadeKg: 100, valorTotal: 5, precoKg: 20 },
    ]);
    expect(parsed.totalQuantidadeDepartamentos).toBe(24963);
  });
});
