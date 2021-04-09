function smallerIndex(arr) {
  let small = arr[0];

  for (let index = 0; index < arr.length; index++) {
    if (small > arr[index]) {
      small = index;
    }
  }
  return small;
}

console.log(smallerIndex([2, 4, 6, 7, 10, 0, -3]));
