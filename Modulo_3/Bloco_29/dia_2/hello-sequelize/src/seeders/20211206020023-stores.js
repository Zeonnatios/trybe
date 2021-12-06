"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Stores", [
      {
        name: "Magazine Luiza",
        description: "Loja tem de tudo 1",
      },
      {
        name: "Polishop",
        description: "Apolinário manda chuva",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Stores", null, {});
  },
};
