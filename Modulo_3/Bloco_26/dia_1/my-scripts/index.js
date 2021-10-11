const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
  { name: 'Calculo da Fatorial', script: './fatorial.js' },
  { name: 'Sequência Fibonacci', script: './fibonacci.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `\n${index + 1} - ${script.name} `);
 
// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

const scriptNumber = readline.questionInt(`${mensagem} \n`) -1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);