'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // logic for transforming into the new state
    await queryInterface.addColumn(
      'Universities',
      'gradePercent',
      Sequelize.BOOLEAN
    );

  },
  down: async (queryInterface, Sequelize) => {

  }
};
