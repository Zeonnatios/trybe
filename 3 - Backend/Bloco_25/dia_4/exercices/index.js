const rescue = require('express-rescue');
const express = require('express');
const authMiddleware = require('./authMiddleware');
const simpsonsUtils = require('./fs-utils');
const generateToken = require('./generateToken');
const app = express();
const port = 3000;

app.use(express.json());
//app.use(authMiddleware);

//endpoints

//ping
app.get('/ping', (_req, res) => {
  res.json({ "message": 'pong' });
});

//hello
app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ "message": `Hello, ${name}` });
});

//greetings
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(parseInt(age) <= 17) return res.status(401).json({ "message": "Unauthorized" });
  
  res.status(200).json({ "message": `Hello, ${name}!` });
});

// /users/:name/:age

app.put('/users/:name/:age/', (req, res) => {
  const {name, age} = req.params;
  res.json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade!` });
});


//simpsons

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons);
}));


app.get('/simpsons/:id', rescue(async (req, res) => {

  const { id } = req.params;

  const simpsons = await simpsonsUtils.getSimpsons();
  const character = simpsons.find((s) => s.id === id);

  if(!character) return res.status(404).json({ message: 'simpson not found' });
  return res.status(200).json(character);
}));

app.post('/simpsons', rescue(async(req, res) => {
  const { id, name } = req.body;

  const simpsons = await simpsonsUtils.getSimpsons();

  const characterExists = simpsons.some((s) => parseInt(s.id) === parseInt(id) );

  if(characterExists) return res.status(409).json({ message: 'id already exists' });
  simpsons.push({id, name});
  await simpsonsUtils.setSimpsons(simpsons);

  res.status(204).end();
}));

//signup
app.post('/signup', (req, res) => {
  const { email , password , firstName, phone } = req.body;

  if([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = generateToken();

  return res.status(200).json({token});

});


//Final Script

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});