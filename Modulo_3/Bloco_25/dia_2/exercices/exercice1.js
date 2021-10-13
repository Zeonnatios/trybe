const calcMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
      if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        reject('Informe apenas números');
      };
      const result = (a + b) * c;
      result < 50 ? reject("Valor muito baixo") : resolve(result) ;
  });
};

calcMath(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

  calcMath(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

  calcMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))