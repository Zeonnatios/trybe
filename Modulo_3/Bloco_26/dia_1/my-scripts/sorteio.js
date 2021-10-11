const readline = require('readline-sync');

console.log('Sorteio');

const gameResult = (sortedNumber, chosenNumber) => {

  if(sortedNumber === chosenNumber) return console.log("Parabéns, número correto!");

  return console.log(`Opa, não foi dessa vez. O número era ${sortedNumber}`);

};

const restartGame = () => {
  const again = readline.questionInt('Digite 1 para jogar novamente, ou 0 para sair do jogo: ');

  if(again !== 1) return console.log('Até mais --- Fechando Jogo ---');
  return runGame();
}

const runGame = () => {

  const sortedNumber = parseInt(Math.random() * 10);

  const chosenNumber = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  gameResult(sortedNumber, chosenNumber);

  restartGame();

};

runGame();
