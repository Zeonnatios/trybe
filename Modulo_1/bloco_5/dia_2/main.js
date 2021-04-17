//Ex1;

const elementH1 = document.createElement("h1");
elementH1.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(elementH1);

// Ex2

const divMainContent = document.createElement("div");
divMainContent.classList.add("main-content");
document.body.appendChild(divMainContent);

//Ex3

const divCenterContent = document.createElement("div");
divCenterContent.classList.add("center-content");
divMainContent.appendChild(divCenterContent);

//Ex4
const paragraph = document.createElement("p");
paragraph.innerText = "Hello World";
divCenterContent.appendChild(paragraph);

//Ex5
const divLeftContent = document.createElement("div");
divLeftContent.className = "left-content";
divMainContent.appendChild(divLeftContent);

//Ex6
const divRightContent = document.createElement("div");
divRightContent.className = "right-content";
divMainContent.appendChild(divRightContent);

//Ex7
const image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.className = "small-image";
divLeftContent.appendChild(image);