let num1 = 1,
  num2 = 2,
  num3 = 3;

function oddNumber() {
  if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(oddNumber(num1, num2, num3));
