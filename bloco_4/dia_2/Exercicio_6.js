let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 == 1) {
    valoresImpares += 1;
  }
}

if (valoresImpares == 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log("Números de valores impares encontrados: " + valoresImpares);
}
