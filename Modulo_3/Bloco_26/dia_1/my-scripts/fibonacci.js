const readline = require('readline-sync');

console.log('Fatorial');

const recursiveFib = (chosenNumber) => {

  if(chosenNumber <= 1) return chosenNumber;

  return recursiveFib(chosenNumber -1) + recursiveFib(chosenNumber -2);
};

const fibonacci = () => {
  const chosenNumber = readline.questionInt(
    'Digite um número para ser calculado a sequência fibonacci: '
  );

  const result = recursiveFib(chosenNumber);

  console.log(`O resultado da sequência fibonacci de ${chosenNumber} é: ${result}`)
};

fibonacci();
