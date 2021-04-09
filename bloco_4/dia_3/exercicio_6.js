let number = 17;
let count = 0;

for (let i = 1; i <= number; i += 1) {
  if (number % i === 0) {
    count +=1;
  }
}

if (count === 2) console.log(number + ' é um número primo!')
else console.log(number + ' não é um número primo!')
