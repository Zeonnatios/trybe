let n = 5;
result = "";
asterisk = "*";

for (let i = 0; i < n; i += 1) {
  for (let i = 0; i < n; i += 1) {
    result += asterisk;
  }
  result += "\n";
}

console.log(result);
