const fs = require('fs').promises;

const fileName = 'simpsons.json';

const readJsonFile = async () => {

  try {
    const rawData = await fs.readFile(fileName, 'utf-8');
    const dataJson = JSON.parse(rawData);
    const simpsons = dataJson.map((data) => `${data.id} - ${data.name}` );
    console.log(simpsons)
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.path}`);
    console.log(error);
  }

};

readJsonFile();

const getSimpsonById = async (id) => {

  const rawData = await fs.readFile(fileName, 'utf-8')
    .then((dataJson) => JSON.parse(dataJson));

  const character = rawData.find((simpson) => simpson.id === id);

  if(!character) {
    /* 
      * A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
      * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
      * tendo como motivo o que passarmos para o `throw`.
      * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
    */
    throw new Error('id não encontrado');
  };
    /* 
      * Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
      * `return` aciona o fluxo de sucesso e resolve a Promise.
      * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
      * dentro do executor de uma Promise.
    */
  return character;
};

getSimpsonById("1")
  .then((character) => console.log(character))
  .catch((err) => console.log(err));


const filterSimpsons = async () => {
  const simpsons = await fs
    .readFile(fileName, 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}


const createSimpsonsFamily = async () => {
  const simpsons = await fs
    .readFile(fileName, 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));

await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}