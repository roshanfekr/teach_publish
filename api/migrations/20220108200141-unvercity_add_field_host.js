'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.addColumn(
      'Universities',
      'host',
      Sequelize.STRING(128)
    );

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
