const { test, expect, describe } = require('@jest/globals');
const myRemoveWithoutCopy = require('../files/myRemoveWithoutCopy');

describe('test function myRemoveWithoutCopy', () => {
  test('myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('myRemove([1, 2, 3, 4], 5)', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
