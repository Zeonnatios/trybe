const myFizzBuzz = require('../files/myFizzBuzz');
const { test, expect, describe } = require('@jest/globals');

describe('Testando função myFizzBuzz', () => {
  test('Número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Número divisível por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  test('Número divisível por 5', () => {
    expect(myFizzBuzz(50)).toBe('buzz');
  });
  test('Número não divisível por 3 e 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  test('Não passar número', () => {
    expect(myFizzBuzz('jest')).toBe(false);
  });
});
