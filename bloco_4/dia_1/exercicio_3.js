let x = 100,
  y = 50,
  z = 10;

let maiorNumero = function (x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else return z;
};

console.log(maiorNumero(x,y,z))
