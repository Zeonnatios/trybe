let n = 5;
let result = "";
let asterisk = "*";

for (let i = 1; i <= n; i += 1) {
  for (let j = 0; j < i; j += 1) {
    result += asterisk;
  }
  result += "\n";
}

console.log(result);
