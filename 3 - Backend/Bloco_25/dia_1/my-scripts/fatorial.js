const readline = require('readline-sync');

console.log('Fatorial');

const recursiveCalculation = (chosenNumber) => {

  if(chosenNumber === 1 || chosenNumber === 0) return 1;

  return chosenNumber * recursiveCalculation(chosenNumber - 1);
};

const factorial = () => {
  const chosenNumber = readline.questionInt(
    'Digite um número para ser calculado seu fatorial: '
  );

  const result = recursiveCalculation(chosenNumber);

  console.log(`O fatorial de ${chosenNumber} é: ${result}`)
};

factorial();
