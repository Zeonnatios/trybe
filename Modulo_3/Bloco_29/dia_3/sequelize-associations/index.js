// index.js
const express = require("express");
const { getEmployees, getEmployeesById } = require("./controllers/employeeController");
const { getUserBooksById } = require("./controllers/libraryController");

const app = express();

app.get("/employees", getEmployees);

app.get("/employees/:id", getEmployeesById);

app.get("/userbooks/:id", getUserBooksById);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;
