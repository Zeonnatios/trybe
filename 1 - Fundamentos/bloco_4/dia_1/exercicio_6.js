function movements(chessPiece) {
  if (chessPiece.toLowerCase() == "king") {
    return "Horizontal, Diagonal, Vertical";
  } else if (chessPiece.toLowerCase() == "queen") {
    return "Horizontal, Diagonal, Vertical";
  } else if (chessPiece.toLowerCase() == "bishop") {
    return "Vertical";
  } else if (chessPiece.toLowerCase() == "rook") {
    return "Horizontal";
  } else if (chessPiece.toLowerCase() == "bishop") {
    return "Vertical";
  } else if (chessPiece.toLowerCase() == "knight") {
    return "Two squares horizontally and one square vertically";
  } else if (chessPiece.toLowerCase() == "pawn") {
    return "Just Forward";
  } else {
    return "Error: piece not identified";
  }
}

console.log(movements("King"));
console.log(movements("Queen"));
console.log(movements("Bishop"));
console.log(movements("Knight"));
console.log(movements("Rook"));
console.log(movements("Pawn"));
console.log(movements("Piece"));
