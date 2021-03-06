const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson3));

const sizeObject = (key) => key.length;
console.log(sizeObject(listKeys(lesson3)));

const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const getValueByIndex = (obj, index) => Object.values(obj)[index];
console.log(getValueByIndex(lesson1, 0));

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if (obj[array[index]].materia === 'Matemática') {
      total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

const createReport = (obj, nome) => {
  const relatorio = {};
  const array = Object.keys(obj);
  for (index in array) {
    if (obj[array[index]].professor === nome) {
      relatorio.professor = nome;
      relatorio.aulas = obj[array[index]].materia;
      relatorio.estudantes = getNumberOfStudents(allLessons);
    }
  }
  return relatorio;
};

console.log(createReport(allLessons, 'Maria Clara'));
