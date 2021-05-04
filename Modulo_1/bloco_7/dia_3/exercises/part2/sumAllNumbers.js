const assert = require('assert');
const sumAllNumbers = (array) => {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);
console.log(output);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
