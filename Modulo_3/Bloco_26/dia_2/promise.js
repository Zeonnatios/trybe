const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if(err) return reject(err);
      resolve(content);
    });
  });
}

/*
 - Recebemos, como parâmetro, o nome do arquivo que queremos ler, 
    fileName na função readFilePromise(fileName) ;

 - Criamos e retornamos uma nova Promise, Promise((resolve, reject) => {} ;

 - Chamamos o módulo nativo do node, fs , para realizar a leitura 
    desse arquivo, fs.readFile(fileName, (err, content) => {}) ;

 - Dentro da callback fs.readFile(fileName, (err, content) => {}) 
    que passamos para a função readFile , verificamos se ocorreu um erro ( if (err) ). 
    Se sim, rejeitamos a Promise e encerramos a execução - reject(err) ;

 - Caso não tenha acontecido nenhum erro, resolvemos a Promise 
    com o resultado da leitura do arquivo - resolve(content) .
*/

// ...

readFilePromise('./file.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
  });