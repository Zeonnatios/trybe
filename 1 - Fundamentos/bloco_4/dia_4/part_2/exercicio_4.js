function maiorPalavra(arr) {
  let word = arr[0];

  for (let index in arr) {
    if (word.length < arr[index].length) {
      word = arr[index];
    }
  }
  return word;
}

console.log(
  maiorPalavra(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
