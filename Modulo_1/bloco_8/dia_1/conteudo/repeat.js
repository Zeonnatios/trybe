// Crie uma função que:

// 1. Dado um `número`
// 2. Dada uma `função`

// Execute a `função` a quantidade de vezes dada pelo parâmetro `número`

const repeat = (number, callback) => {
  for (let count = 0; count < number ; count += 1) {
    callback();
  }
};

const xablau = () => console.log('Hello, HOF!');

const callback = () => console.log('Isto é um callback!');

repeat(3, () => { console.log('Hello, HOF!')});
