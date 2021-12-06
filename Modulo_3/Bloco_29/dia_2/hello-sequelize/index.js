const express = require("express");
const { Store } = require("./src/models");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/store", async (req, res) => {
  try {
    const data = await Store.findAll();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Deu algo de errado :(" });
  }
});

app.listen(port, () =>
  console.log(`App Hello Sequelize rodando na porta ${port}!`)
);
