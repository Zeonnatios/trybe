const assert = require('assert');

// const numbers = [2, 3, 4, 6, 8, 12, 24];

// Somando os números do array com for

// let accumulatorFor = numbers[0]; // = 2
// console.log(`accumulatorFor: ${accumulatorFor}`);
// for (let index = 1; index < numbers.length; index += 1) {
  // console.log(`indice: ${index}, value: ${numbers[index]}`)
  // console.log(`accumulatorFor before: ${accumulatorFor}`);
  // accumulatorFor = accumulatorFor + numbers[index];
  // console.log(`accumulatorFor after: ${accumulatorFor}`);
// }

// console.log(`Resultado da soma com for: ${accumulatorFor}`);


// Teste

const expectedValue = 59;
// assert.strictEqual(accumulatorFor, expectedValue);










// Somando os números do array com reduce

const numbers = [2, 3, 4, 6, 8, 12, 24];

const accumulatorReduce = numbers.reduce((accumulator, number) => {
  console.log(`Accumulator = ${accumulator}, Number = ${number}`);
  return accumulator + number;
  // Tem que retornar algo - undefined por padrão
});


console.log(`Resultado da soma com reduce: ${accumulatorReduce}`);

// Teste
assert.strictEqual(accumulatorReduce, expectedValue);




















// O QUE ESTÁ ACONTECENDO?

// 1 iteração: previousValue === 2 | currentValue === 3

// 2 iteração: previousValue === 5 | currentValue === 4

// 3 iteração: previousValue === 9 | currentValue === 6

// 4 iteração: previousValue === 15 | currentValue === 8

// 5 iteração: previousValue === 23 | currentValue === 12

// 6 iteração: previousValue === 35 | currentValue === 24

// Retorno => 59
