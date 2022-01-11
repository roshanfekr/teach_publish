'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'Educations',
      'levelEducation',
      Sequelize.STRING
    );

    await queryInterface.addColumn(
      'Educations',
      'department',
      Sequelize.STRING
    );

    await queryInterface.removeColumn('Educations', 'degree', { /* query options */ });
    await queryInterface.removeColumn('Educations', 'speciality', { /* query options */ });


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
