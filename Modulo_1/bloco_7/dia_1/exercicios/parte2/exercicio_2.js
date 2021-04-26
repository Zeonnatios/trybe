const longestWord = (text) => {
  let wordArray = text.split(' ');
  let longestWord = wordArray[0];

  for (const word of wordArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);
