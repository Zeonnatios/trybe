const checkNumber = (apostado, sorteado) => apostado === sorteado;

const loteria = (apostado, callback) => {
  const number = Math.floor(Math.random() * 5 + 1);
  return callback(apostado, number)
    ? 'Incrivel, você ganhou!'
    : 'Que pena, você perdeu!';
};

console.log(loteria(2, checkNumber));
