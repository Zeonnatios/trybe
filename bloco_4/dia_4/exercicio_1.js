let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem Vinda, " + info.personagem);
console.log("\n");

info.recorrente = "Sim";

console.log(info);

console.log("\n");

for (const key in info) {
  console.log(key);
}

console.log("\n");

for (const key in info) {
  console.log(info[key]);
}

const character = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log("\n");

for (const key in info) {
  console.log(info[key] + ' e ' + character[key]);
}
