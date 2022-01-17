const fs = require('fs').promises;

const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function arrayToFile() {

  const createFilePromises = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  await Promise.all(createFilePromises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

const newFileContent = fileContents.join(' ');

await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();