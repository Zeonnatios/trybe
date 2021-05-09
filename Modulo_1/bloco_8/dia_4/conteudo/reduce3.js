const assert = require('assert');

const players = [
  { fullName: 'Cristiane Rozeira de Souza Silva', email: 'criscris@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
  { fullName: 'Ronaldo de Assis Moreira', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Luís Nazário de Lima', email: 'cortedocascao@futebol.br' },
];

// Gerando um objeto com email como chave e name como valor

const newPlayers = players.reduce((playerAccumulator, player) => {
  playerAccumulator[player.email] = player.fullName;
  return playerAccumulator;
}, {});

//Teste

console.table(newPlayers);

const expectedValues = {
  'criscris@futebol.br': 'Cristiane Rozeira de Souza Silva',
  'rainhamarta@futebol.br': 'Marta Vieira da Silva',
  'bruxo@futebol.br': 'Ronaldo de Assis Moreira',
  'cortedocascao@futebol.br': 'Ronaldo Luís Nazário de Lima',
};

assert.deepStrictEqual(newPlayers, expectedValues);