import { mapAtividade } from './src/store/budgetStore.js';

const testCases = [
  { NOMEDEPTO: 'BANDEIRANTES - SERINGAL', expected: 'SERINGAL' },
  { NOMEDEPTO: 'ESPLANADA - SERINGAL', expected: 'SERINGAL' },
  { NOMEDEPTO: 'PECUÁRIA', expected: 'PECUARIA' },
  { NOMEDEPTO: 'Seringal', expected: 'SERINGAL' },
  { NOMEDEPTO: 'OFICINA GERAL', expected: 'PECUARIA' }, // Derived from OFICINA division which defaults to PECUARIA ActivityKey
  { NOMEDEPTO: 'FAKE SERINGAL', expected: 'PECUARIA' }, // Should fail strict check
];

console.log('--- Verification ---');
testCases.forEach(tc => {
  const result = mapAtividade({ NOMEDEPTO: tc.NOMEDEPTO });
  console.log(`Depto: ${tc.NOMEDEPTO.padEnd(30)} | Result: ${result.atividade.padEnd(10)} | Expected: ${tc.expected}`);
});
