const generateEmployee = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (generateEmployee) => {
  const employees = {
    id1: generateEmployee('Pedro Guerra'),
    id2: generateEmployee('Luiza Drumond '),
    id3: generateEmployee('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(generateEmployee))