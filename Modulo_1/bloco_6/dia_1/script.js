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

function createCurriculum() {
  button.addEventListener("click", () => {
    
  });
}

function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day <= 31) 
    && (month > 0 && month <= 12) && (year >= 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
}

function checkData() {
  const inputData = document.querySelector('#input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
}

function checkEmail() {
  const email = document.querySelector('#email-input');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', renderCurriculum);
clearButton.addEventListener('click', clearFields);
