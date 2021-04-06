let n = 5;
let result = "";
let asterisk = "*";
let space = " ";
let count = n;

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (j === i || j < i) {
      result += space;
    }
    result += asterisk;
  }
  result += "\n";
}

console.log(result);
