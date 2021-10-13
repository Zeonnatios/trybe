const fs = require('fs').promises;

const text = "Matheus Antonio da Silva,\n" +
  "21 anos,\n" +
  "estudante de Desenvolvimento Web Full Stack pela Trybe!";

fs.writeFile('./newFile.txt', text)
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });