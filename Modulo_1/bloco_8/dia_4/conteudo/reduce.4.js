const assert = require('assert');

// Implementando a função reduce

const players = [
  { fullName: 'Cristiane Rozeira de Souza Silva', email: 'criscris@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
  { fullName: 'Ronaldo de Assis Moreira', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Luís Nazário de Lima', email: 'cortedocascao@futebol.br' },
];

const numbers = [2, 3, 4, 6, 8, 12, 24];

const reduce = (array, callbackfn, initialValue) => {
  let accumulator;
  let initialIndex;

  if (initialValue === undefined) {
    accumulator = array[0];
    initialIndex = 1;
  } else {
    accumulator = initialValue;
    initialIndex = 0;
  }

  for (let index = initialIndex; index < array.length; index += 1) {
    const currentValue = array[index];
    accumulator = callbackfn(accumulator, currentValue);
  }

  return accumulator;
}

const newPlayers = reduce(players, (playerAccumulator, player) => {
  playerAccumulator[player.email] = player.fullName;
  return playerAccumulator;
}, {});
console.table(newPlayers);

const numbersSum = reduce(numbers, (accumulator, number) => {
  return accumulator + number;
}, 0);

console.log(numbersSum);


const expectedValues = {
  'criscris@futebol.br': 'Cristiane Rozeira de Souza Silva',
  'rainhamarta@futebol.br': 'Marta Vieira da Silva',
  'bruxo@futebol.br': 'Ronaldo de Assis Moreira',
  'cortedocascao@futebol.br': 'Ronaldo Luís Nazário de Lima',
};

assert.deepStrictEqual(newPlayers, expectedValues);
