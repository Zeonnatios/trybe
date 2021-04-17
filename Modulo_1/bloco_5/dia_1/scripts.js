//Ex1
(function () {
  document.getElementsByTagName("p")[0].innerText =
    "Me imagino programando altos códigos em uma empresa daóra. GG!!!";
})();

//Ex2
(function () {
  document.getElementsByClassName("main-content")[0].style.backgroundColor =
    "rgb(76,164,109)";
})();

//Ex3
(function () {
  document.getElementsByClassName("center-content")[0].style.backgroundColor =
    "white";
})();

//Ex4
(function () {
  document.getElementsByClassName("title")[0].innerText =
    "Exercício 5.1 - JavaScript";
})();

//Ex5
(function () {
  document.getElementsByTagName("p")[0].style.textTransform = "uppercase";
})();

(function () {
  let paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i += 1) {
    console.log(paragraphs[i].innerText);
  }
})();
