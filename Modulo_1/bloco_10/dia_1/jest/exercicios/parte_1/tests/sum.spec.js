const sum = require('../files/sum');
const { test, expect, describe } = require('@jest/globals');

describe('test function sum', () => {
  test('sum(4,5) === 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('sum(0,0) === 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('throws on sum if params is a string (4, "5")', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('message error is: "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(Error('parameters must be numbers'));
  });
});
