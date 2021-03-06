const express = require('express');

const app = express();
const port = 3000;


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.use(express.json());


app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});


/*
  Recipes routes
*/

const validatePrice = (req, res, next) => {

  const { price } = req.body;
  
  if(!price || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invalid data!'});
  }
  next();
};

app.get('/recipes', (_req, res) => {
  res.json(recipes).status(200);
});


app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if(!recipe) return res.status(404).json({ message: 'Recipe not Found!' });

  res.json(recipe).status(200);
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.post('/recipes', validatePrice, (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!', values: {id, name, price}});
});

app.put('/recipes/:id', validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

/*
  Drinks routes
*/

app.get('/drinks', (_req, res) => {
  // const orderedDrinks = drinks.sort((a,b) => {
  //   if (a.name > b.name) return 1;
  //   if (a.name < b.name) return -1;
  //   return 0;
  // });
  res.json(drinks).status(200);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id));

  if(!drink) return res.status(404).json({ message: 'Drink not Found!' });

  res.json(drink).status(200);
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Drink created successfully!', values: {id, name, price}});
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinksIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinksIndex] = { ...drinks[drinksIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

/*
  app.get('/hello', (_req, res) => {
   res.status(200).send('Hello World! o/');
  });
  const handleHelloWorldRequest = (req, res) => {
    res.status(200).send('Hello World!');
  };
  app.get('/hello', handleHelloWorldRequest);
*/

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(port, () => {
  console.log("Aplicação ouvindo na porta 3000");
});
