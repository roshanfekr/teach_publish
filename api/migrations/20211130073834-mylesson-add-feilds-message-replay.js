'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.addColumn(
      'MyLessons',
      'message',
      Sequelize.STRING(500)
    );

    await queryInterface.addColumn(
      'MyLessons',
      'replay',
      Sequelize.STRING(500)
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
