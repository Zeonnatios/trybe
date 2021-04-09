let valorProduto = 1;
let valorVenda = 3;

if (valorProduto > 0 && valorVenda > 0) {
  let valorTotalProduto = valorProduto * 1.2;
  let lucroTotal = (valorVenda - valorTotalProduto) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Erro, os valores podem estar negativos");
}
