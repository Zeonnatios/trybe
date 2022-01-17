const fs = require('fs').promises;
const readline = require('readline-sync');

const main = async () => {

  const file = readline.question('Qual arquivo gostaria de ler ? ');
  const fileName = `./${file}.txt`;
  try {
    const content = await fs.readFile(fileName, 'utf8');
    console.log(content);
  } catch (error) {
    console.log("Arquivo inexistente");
  }  
};

main();