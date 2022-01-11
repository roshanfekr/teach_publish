'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Requests',
      'deleteId1',
      Sequelize.INTEGER
    );
    await queryInterface.addColumn(
      'Requests',
      'deleteId2',
      Sequelize.INTEGER
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
