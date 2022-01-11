'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'Users',
      'genderId',
      Sequelize.INTEGER
    );

    await queryInterface.addConstraint(
      'Users',   {
        type: 'foreign key',
        fields: ['genderId'],
        name: 'fkey_user_genderId',
        references: { //Required field
          table: 'Gender',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })


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
