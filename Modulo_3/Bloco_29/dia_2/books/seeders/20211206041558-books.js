"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Books", [
      {
        title: "A Arte da Guerra",
        author: "Sun Tzu",
        pageQuantity: 128,
      },
      {
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        pageQuantity: 130,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Books", null, {});
  },
};
