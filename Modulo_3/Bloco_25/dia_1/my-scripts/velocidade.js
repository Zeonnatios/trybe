const readline = require('readline-sync');

console.log('Velocidade');

const distance = readline.questionInt('Distância percorrida (m): ');
const time = readline.questionInt('Tempo gasto (s): ');

const speed = (distance, time) => (distance / time).toFixed(2);

console.log(`Distância: ${distance}, Tempo: ${time}`)
console.log(`Velocidade Média: `, speed(distance, time));