'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'Users',
      'universityId',
      Sequelize.INTEGER
    );

    await queryInterface.addConstraint(
      'Users',   {
        type: 'foreign key',
        fields: ['universityId'],
        name: 'fkey_user_universityId',
        references: { //Required field
          table: 'Universities',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {

      // logic for reverting the changes
      return queryInterface.removeColumn(
        'Users',
        'universityId'
      );

  }
};
