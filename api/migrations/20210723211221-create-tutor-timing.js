'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TutorTimings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timeStart: {
        type: Sequelize.FLOAT
      },
      timeEnd: {
        type: Sequelize.FLOAT
      },
      dayOfWeek: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      }
    }).then(() => queryInterface.addConstraint('TutorTimings',  {
      type: 'foreign key',
      fields: ['userId'],
      name: 'fkey_tutor-timing_users',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TutorTimings');
  }
};
