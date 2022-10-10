'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'Users',
      'receiveEmailOnMessage',
     {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    );

    await queryInterface.addColumn(
      'Users',
      'receiveEmailOnRequest',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    );

  },

  down: async (queryInterface, Sequelize) => {

  }
};
