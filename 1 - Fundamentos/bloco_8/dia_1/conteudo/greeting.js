const person = {
  name: 'Carol',
  lastName: 'Santos',
  greet: (callback) => { 
    callback();
  },
};

const goodMoodGreeting = () => {
  console.log(`Está tudo uma grande maravilha!`);
}

const badMoodGreeting = () => {
  console.log("Não fale comigo...");
}

const greetingPeople = (mood) => {
  console.log(`Olá, ${person.name} ${person.lastName}, como vai você?`);

  if (mood === 'bom humor') {
    person.greet(goodMoodGreeting);
  } else {
    person.greet(badMoodGreeting)
  }
};

greetingPeople('mau humor');