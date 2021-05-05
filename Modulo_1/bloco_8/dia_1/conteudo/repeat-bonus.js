// Crie uma função que:

// 1. Dado um `número`
// 2. Dada uma `função`

// Execute a `função` a quantidade de vezes dada pelo parâmetro `número`
// Tenha a capacidade de informar para o bloco de código em qual iteração está

const repeat = (times, block) => {
  for (let count = 0; count < times; count += 1) {
    block(count);
  }
};

repeat(5, (index) => { console.log(`Olá, HOF! ${index + 1}x`) });

const numbers = [1000, 2000, 3000, 4000];

repeat((numbers.length), (index) => console.log(numbers[index]));
