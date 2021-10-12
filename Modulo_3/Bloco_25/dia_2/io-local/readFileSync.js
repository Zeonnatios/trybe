const fs = require('fs');

const fileName = 'file.txt';

try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}


/*

  Método fs.readFileSync

  Esse método é responsável por ler arquivos e 
  trazer seu conteúdo para dentro do Node.js. 
  Por ser síncrono , ele espera a leitura do arquivo 
  terminar para, só então, atribuir o resultado à constante data.

  O método readFileSync recebe dois parâmetros:

    - O nome do arquivo;
    - Um parâmetro opcional que, quando é uma string, 
      define o encoding que será utilizado durante a leitura do arquivo.

*/