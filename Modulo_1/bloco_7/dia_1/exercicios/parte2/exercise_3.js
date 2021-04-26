const count = document.getElementById('count');
const button = document.getElementById('btn');

let clickCounter = 0;

button.addEventListener('click', () => (count.innerHTML = clickCounter += 1));
