let n = 5;
let result = "";
let asterisk = "*";
let space = " ";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
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
