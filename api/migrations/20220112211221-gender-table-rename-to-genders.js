'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.renameTable("Gender" , "Genders")

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
