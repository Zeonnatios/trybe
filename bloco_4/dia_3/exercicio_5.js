let n = 7;
let result = "";
let asterisk = "*";
let space = " ";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 1; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex === controlLeft || columnIndex === controlRight || lineIndex === midOfMatrix) {
      result += asterisk;
    } else {
      result += space;
    }
  }
  result += "\n";
  controlRight += 1;
  controlLeft -= 1;
}

console.log(result);
