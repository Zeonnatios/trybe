const newStr = (text, word) => {
  const skills = ['JavaScript', 'HTML5', 'CSS3', 'MySQL', 'Java'];
  return `${text.replace(/x/i,word)} Minhas principais habilidades são: ${skills.sort().join(' ')}`;
};

console.log(newStr('Tryber x aqui!', 'Matheus'));
