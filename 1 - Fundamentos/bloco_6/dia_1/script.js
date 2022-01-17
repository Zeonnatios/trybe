const select = document.getElementById("estado");
const button = document.getElementById("btnEnviar");

const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Paraná",
  "Paraíba",
  "Pará",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondonia",
  "Roraima",
  "Santa Catarina",
  "Sergipe",
  "São Paulo",
  "Tocantins",
];

function insertStates(estados) {
  for (let index = 0; index < estados.length; index += 1) {
    const option = document.createElement("option");
    option.value = estados[index];
    option.innerText = estados[index];
    select.appendChild(option);
  }
}

insertStates(estados);


insertStates(estados);

const picker = new Pikaday({
  field: document.getElementById("datepicker"),
  format: "DD/MM/YYYY",
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

function createCurriculum() {
  button.addEventListener("click", () => {});
}

const clearButton = document.querySelector(".clear-button");
function clearFields() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (
    let index = 0;
    index < formElements.length && index < div.length;
    index += 1
  ) {
    const userInput = formElements[index];
    userInput.value = "";
    textArea.value = "";
  }
}
clearButton.addEventListener("click", clearFields);

