const { Address, Employee } = require("../models");

const getEmployees = async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: "addresses" },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const getEmployeesById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: { id },
      include: [{ model: Address, as: "addresses" }],
      // include: [{
      //   model: Address, as: 'addresses', attributes: { exclude: ['employee_id'] },
      // }],
    });

    if (!employee)
      return res.status(404).json({ message: "Funcionário não encontrado" });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
};

module.exports = { getEmployees, getEmployeesById };
