const x = 10,
  y = -15,
  z = 0;

function numeroValor(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(numeroValor(x), numeroValor(y), numeroValor(0));
