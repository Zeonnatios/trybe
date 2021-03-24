function nota(porcentagem) {
  if (porcentagem >= 90) {
    return "A";
  } else if (porcentagem >= 80) {
    return "B";
  } else if (porcentagem >= 70) {
    return "C";
  } else if (porcentagem >= 60) {
    return "D";
  } else if (porcentagem >= 50) {
    return "E";
  } else if (porcentagem < 50) {
    return "F";
  } else if (porcentagem > 100 && porcentagem < 0) {
    return "A";
  }
}

console.log(nota(100));
