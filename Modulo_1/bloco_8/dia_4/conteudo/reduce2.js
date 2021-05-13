const assert = require('assert');

const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

// Concatenando os itens do array

const epicPhrase = epic.reduce((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`;
 });


console.log(epicPhrase);


//Teste

const expectedValue = 'A long time ago, in a galaxy far far away...';

assert.strictEqual(epicPhrase, expectedValue);