'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint(
      'MyLessons',   {
        type: 'foreign key',
        fields: ['lessonId'],
        name: 'fkey_MyLessons_lessonId',
        references: { //Required field
          table: 'Lessons',
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
