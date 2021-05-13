function sumArrNumbers() {
  const arrayNumbers = Array.from({ length: 10 }, () =>
    Math.pow(Math.floor(Math.random() * 50) + 1, 2)
  );
  const sum = arrayNumbers.reduce((acc, number) => acc + number);

  if (sum > 8000) {
    throw new Error();
  }
  return sum;
}

function sumNumbersFromArray(sum) {
  return [2, 3, 5, 10]
    .map((number) => sum / number)
    .reduce((acc, number) => acc + number, 0);
}

const fetchPromise = async () => {
  try {
    const sum = await sumArrNumbers();
    const sumFromSum = await sumNumbersFromArray(sum);
    console.log(`Soma menor que 8000: ${sum}`);
    console.log(`Segunda soma: ${sumFromSum}`);
  } catch (error) {
    console.log('É mais de 8 mil! Esta promise deve estar quebrada!');
  }
};

fetchPromise();
