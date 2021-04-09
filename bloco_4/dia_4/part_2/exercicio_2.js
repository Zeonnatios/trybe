function highestIndex(arr) {
  let highest = arr[0];

  for (let index = 0; index < arr.length; index++) {
    if (highest < arr[index]) {
      highest = index;
    }
  }
  return highest;
}

console.log(highestIndex([2, 3, 6, 7, 10, 1]));
