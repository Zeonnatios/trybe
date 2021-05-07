const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

/**
 * 
arrayOfValues - Nome do array que será percorrido;
forEach - A HOF , pode ser, .find , .some , .every ;
element - Valor do elemento do array;
(element) => {console.log('Cada elemento do array:', element); 
função a ser executada, pode ser passada igual ao 
terceiro exemplo do conteúdo com a função verifyGrade .
 */

/*
Uma função como meuArray.find(elemento => elemento % 5 === 0) , por outro lado, seria 
Encontre o primeiro elemento de meuArray que é múltiplo de cinco . Ficou mais claro agora? 
A própria Higher Order Function se encarrega da lógica de pegar cada elemento do array 
e passar como parâmetro para a arrow function . Com for você faria isso manualmente, 
a proposta aqui é a HOF fazer pra você! Sua única preocupação deve ser 
"O que eu quero fazer com cada elemento do array?", e não 
"Como eu acesso cada elemento do array?".

*/

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]