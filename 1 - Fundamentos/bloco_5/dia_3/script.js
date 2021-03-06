let dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfTheMonth() {
  let ul = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let li = document.createElement("li");

    if ((day === 24) | (day === 31)) {
      li.className = "day holiday";
      li.innerHTML = day;
      ul.appendChild(li);
    } else if ((day === 4) | (day === 11) | (day === 18)) {
      li.className = "day friday";
      li.innerHTML = day;
      ul.appendChild(li);
    } else if (day === 25) {
      li.className = "day holiday friday";
      li.innerHTML = day;
      ul.appendChild(li);
    } else {
      li.innerHTML = day;
      li.className = "day";
      ul.appendChild(li);
    }
  }
}

createDaysOfTheMonth();

function createHolidayButton(text) {
  const divButtonContainer = document.querySelector(".buttons-container");
  const button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = text;
  divButtonContainer.appendChild(button);
}

createHolidayButton("Feriados");

function displayHolidays() {
  const button = document.getElementById("btn-holiday");
  const getHolidays = document.querySelectorAll(".holiday");
  const bgColor = "rgb(238,238,238)";
  const originalBgColor = "red";

  button.addEventListener("click", () => {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === originalBgColor) {
        getHolidays[index].style.backgroundColor = bgColor;
      } else {
        getHolidays[index].style.backgroundColor = originalBgColor;
      }
    }
  });
}

displayHolidays();

function createFridayButton(text) {
  const divButtonsContainer = document.querySelector(".buttons-container");
  const fridayButton = document.createElement("button");
  fridayButton.innerText = text;
  fridayButton.id = "btn-friday";
  divButtonsContainer.appendChild(fridayButton);
}
createFridayButton("Sexta-feira");

function displayFridays(fridaysArray) {
  const button = document.querySelector("#btn-friday");
  let fridays = document.querySelectorAll(".friday");
  const text = "Sextou o/";

  button.addEventListener("click", () => {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML === text) {
        fridays[index].innerHTML = fridaysArray[index];
      } else {
        fridays[index].innerHTML = text;
      }
    }
  });
}

const dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);

function dayMouseOver() {
  const days = document.querySelector("#days");
  days.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}
function dayMouseOut() {
  const days = document.querySelector("#days");
  days.addEventListener("mouseout", (event) => {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}

dayMouseOver();
dayMouseOut();

function newTaskSpan(task) {
  const divTasks = document.querySelector(".my-tasks");
  const span = document.createElement("span");
  span.innerHTML = task;
  divTasks.appendChild(span);
}

newTaskSpan("Projeto");

function newTaskDiv(color) {
  const divTasks = document.querySelector(".my-tasks");
  const newDiv = document.createElement("div");
  newDiv.className = "task";
  newDiv.style.backgroundColor = color;
  divTasks.appendChild(newDiv);
}

newTaskDiv("pink");

function setTaskClass() {
  let selectedTask = document.getElementsByClassName("task selected");
  let myTasks = document.querySelector(".task");

  myTasks.addEventListener("click", (event) => {
    if (selectedTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
}

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = "rgb(119,119,119)";
    }
  });
}

setDayColor();

function addNewTask() {
  let getInputField = document.querySelector("#task-input");
  let addInputButton = document.querySelector("#btn-add");
  let getTaskList = document.querySelector(".task-list");

  addInputButton.addEventListener("click", function () {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    } else {
      alert("Error: Digite ao menos 1 caractere.");
    }
  });

  getInputField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    }
  });
}

addNewTask();
