function verifyWord(palavra, fimPalavra) {
  control = true;
  palavra = palavra.split("");
  fimPalavra = fimPalavra.split("");

  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (
      palavra[palavra.length - fimPalavra.length + index] !== fimPalavra[index]
    ) {
      control = false;
    }
  }
  return control;
}

console.log(verifyWord("trybe", "be"));
console.log(verifyWord("joaofernando", "fernan"));
