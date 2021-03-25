let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];

console.log(menuServices);

menu = ["Home", "Serviços", "Portfólio", "Links"];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

menu = ["Home", "Serviços", "Portfólio", "Links"];

menu.push("Contato");

console.log(menu);

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i]);
}

let names = ["João", "Maria", "Antônio", "Margarida"];

for (let print of names) {
  console.log(print);
}
