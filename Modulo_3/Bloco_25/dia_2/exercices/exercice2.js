const calcMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
      if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        reject('Informe apenas números');
      };
      const result = (a + b) * c;
      result < 50 ? reject("Valor muito baixo") : resolve(result) ;
  });
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
}

const a = generateRandomNumber();
const b = generateRandomNumber();
const c = generateRandomNumber();

calcMath(a, b, c)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));