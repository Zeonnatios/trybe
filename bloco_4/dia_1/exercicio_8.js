let num1 = 1,
  num2 = 2,
  num3 = 3;

function evenNumber() {
  if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(evenNumber(num1, num2, num3));
