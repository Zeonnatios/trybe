/*
  Utilize template literals para que a chamada console.log(oddsAndEvens); 
  retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
  Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . 
  Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => {
  return a - b;
});

console.log(`Array Ordenado o/ >>> ${oddsAndEvens}`);

console.log(`Tudo na linha: ${oddsAndEvens.sort((a, b) => a - b)}`);