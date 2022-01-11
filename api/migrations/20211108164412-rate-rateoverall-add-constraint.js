'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addConstraint(
      'Rates',   {
        type: 'foreign key',
        fields: ['tutor_userId'],
        name: 'fkey_rates_users',
        references: { //Required field
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

    await queryInterface.addConstraint(
      'Rates',   {
        type: 'foreign key',
        fields: ['stu_userId'],
        name: 'fkey_rates_users2',
        references: { //Required field
          table: 'Users',
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
