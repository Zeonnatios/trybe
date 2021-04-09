let n = 5;
let result = "";
let asterisk = "*";
let space = " ";
let position = n;

for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < position) {
      result += space;
    } else {
      result += asterisk;
    }
  }
  result += "\n";
  position -= 1;
}

console.log(result);
