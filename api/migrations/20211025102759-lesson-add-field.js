'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'UserLessons',
      'grade',
      Sequelize.STRING(5)
    );

    await queryInterface.addColumn(
      'UserLessons',
      'year',
      Sequelize.INTEGER
    );

    await queryInterface.addColumn(
      'UserLessons',
      'university',
      Sequelize.STRING
    );

    await queryInterface.addColumn(
      'Users',
      'transcript_fileId',
      Sequelize.STRING
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
