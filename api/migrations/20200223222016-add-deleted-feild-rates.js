'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Rates',
      'deleted',
      Sequelize.BOOLEAN
    );

    await queryInterface.renameColumn('Rates', 'userId', 'tutor_userId');

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rates');
  }
};
