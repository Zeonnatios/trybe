const readline = require('readline-sync');

console.log('Hello, world!');

const name = readline.question('Qual o seu nome ? -->> ');
const age = readline.questionInt('Quantos anos você tem ? -->> ');

console.log(`Hello ${name}! You're ${age} years old!`)