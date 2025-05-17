const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { hex2rgba } = require('../index.cjs');

describe('hex2rgba', () => {
  test('converts hex color to rgba with default alpha', () => {
    assert.strictEqual(hex2rgba('#ffffff'), 'rgba(255,255,255,1)');
  });

  test('converts hex color to rgba with provided alpha', () => {
    assert.strictEqual(hex2rgba('#000000', 0.5), 'rgba(0,0,0,0.5)');
  });
});
