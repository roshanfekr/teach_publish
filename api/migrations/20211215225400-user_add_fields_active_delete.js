'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'Users',
      'disable',
      Sequelize.BOOLEAN
    );

    await queryInterface.addColumn(
      'Users',
      'deleted',
      Sequelize.BOOLEAN
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
