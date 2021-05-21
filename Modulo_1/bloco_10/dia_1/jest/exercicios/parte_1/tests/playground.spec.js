const { test, expect, describe } = require('@jest/globals');
const { encode, decode } = require('../files/playground');

describe('Testes encode e decode', () => {
  test('Encode and decode are functions', () => {
    expect(typeof encode && typeof decode).toBe('function');
  });
  test('Encode "aeiou" === "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('Decode "12345" === "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('String length"', () => {
    expect(decode('hello World').length).toBe(11);
  });
});
