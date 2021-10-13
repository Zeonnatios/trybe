const fs = require('fs').promises;
const readline = require('readline-sync');

const readerFile = async () => {

  const file = readline.question('Qual arquivo gostaria de utilizar ? ');
  const fileName = `./${file}.txt`;
  try {
    const content = await fs.readFile(fileName, 'utf8');
    return content;
  } catch (error) {
    console.log("Arquivo inexistente");
    return;
  }  
};

const main = async () => {
  const content = await readerFile();
  
  if(content) {
    console.log(content);

    const oldWord = readline.question('Qual palavra a ser substituída ? ');
    const newWord = readline.question('Qual a nova palavra ? ');
    const replaceContent = content.replace(new RegExp(oldWord, 'g'), newWord);
    console.log(replaceContent);

    const destinationFileName = readline.question('Qual o nome do arquivo destino ? ');
    await fs.writeFile(`./${destinationFileName}.txt`, replaceContent);

  }

};

main();