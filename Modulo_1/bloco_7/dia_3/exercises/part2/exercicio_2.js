const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
  const output = [];
  for (let value of array) {
    output.push(value.length)
  }
  return output;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
console.log(output)
assert.deepStrictEqual(output, expected);