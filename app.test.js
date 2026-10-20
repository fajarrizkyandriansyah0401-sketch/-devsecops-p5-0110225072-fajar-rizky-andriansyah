const assert = require('node:assert');
const test = require('node:test');
const { calculateTax } = require('./utils');

test('Kalkulasi pajak 11%', () => {
  const result = calculateTax(100);
  assert.strictEqual(result, 11);
});
