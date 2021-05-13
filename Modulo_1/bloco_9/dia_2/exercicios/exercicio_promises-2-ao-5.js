function myPromise() {
  const promise = new Promise((resolve, reject) => {
    const arrayNumbers = [];
    while (arrayNumbers.length != 10) {
      arrayNumbers.push(Math.pow(Math.floor(Math.random() * 50) + 1, 2));
    }
    const sum = arrayNumbers.reduce((acc, number) => acc + number);

    sum < 8000 ? resolve(sum) : reject();
  });
  promise
    .then((sum) => {
      [2, 3, 5, 10].map((number) => sum / number);
    })
    .then((arr) => {
      arr.reduce((acc, number) => acc + number, 0);
    })
    .catch(() =>
      consolelog('É mais de 8 mil! Esta promise deve estar quebrada!')
    );
}

myPromise();
