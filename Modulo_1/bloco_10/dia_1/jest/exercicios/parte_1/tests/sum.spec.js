const sum = require('../files/sum');
const { test, expect, describe } = require('@jest/globals');

describe('test function sum', () => {
  test('sum(4,5) === 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
});
