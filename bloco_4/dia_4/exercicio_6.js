function sequencialSum(number) {
  let sum = 0;
  for (let index = 0; index <= number; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(sequencialSum(5));
