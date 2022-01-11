'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.addColumn(
      'Lessons',
      'universityId',
      Sequelize.INTEGER
    );

    await queryInterface.addConstraint(
      'Lessons',   {
        type: 'foreign key',
        fields: ['universityId'],
        name: 'fkey_lessons_universities',
        references: { //Required field
          table: 'Universities',
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
