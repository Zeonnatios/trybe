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

const callFunction = async () => {
  
  const a = generateRandomNumber();
  const b = generateRandomNumber();
  const c = generateRandomNumber();
  
  try {
    const result = await calcMath(a, b, c);
    console.log(`Resultado: ${result}`);
  } catch (err) {
    console.error(err);
  }

};

callFunction();