const { test, expect, describe } = require('@jest/globals');
const { encode, decode, techList } = require('../files/playground');

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

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;
