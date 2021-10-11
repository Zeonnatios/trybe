const readline = require('readline-sync');

console.log('IMC');

const height = readline.questionFloat('Qual sua altura ? (em cm) -->> ');
const weight = readline.questionFloat('Qual seu peso ? (em kg) -->> ');

const imc = (weight, height) => {
  const result = weight / Math.pow(height, 2);
  console.log(result.toFixed(2))

  if(result < 18.5) return "Abaixo do peso (magreza)";
  else if(result >= 18.5 && result <= 24.9) return "Peso normal";
  else if(result >= 25 && result <= 29.9) return "Acima do peso (sobrepeso)";
  else if(result >= 30 && result <= 34.9) return "Obesidade grau I ";
  else if(result >= 35 && result <= 39.9) return "Obesidade grau II ";
  else return "Obesidade graus III e IV";
};

console.log(`Peso: ${height}, Altura: ${weight}`)
console.log(`IMC: `, imc(weight, height));