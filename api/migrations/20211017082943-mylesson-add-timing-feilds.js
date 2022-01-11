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
      'MyLessons',
      'timeStart',
      Sequelize.FLOAT
    );

    await queryInterface.addColumn(
      'MyLessons',
      'timeEnd',
      Sequelize.FLOAT
    );

    await queryInterface.addColumn(
      'MyLessons',
      'dayOfWeek',
      Sequelize.INTEGER
    );

    await queryInterface.addColumn(
      'MyLessons',
      'tutorUserId',
      Sequelize.INTEGER
    );

    await queryInterface.addColumn(
      'MyLessons',
      'lessonId',
      Sequelize.INTEGER
    );

    await queryInterface.addConstraint(
      'MyLessons',   {
      type: 'foreign key',
      fields: ['lessonId'],
      name: 'fkey_MyLessons_lessonsId',
      references: { //Required field
        table: 'Lessons',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint(
      'MyLessons',   {
      type: 'foreign key',
      fields: ['tutorUserId'],
      name: 'fkey_MyLessons_tutorUserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.removeColumn('MyLessons', 'userLessonId', { /* query options */ });

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
