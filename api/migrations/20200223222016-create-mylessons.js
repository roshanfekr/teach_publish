'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MyLessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userLessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      finished:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      timingId:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      acceptStatus:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('MyLessons',   {
      type: 'foreign key',
      fields: ['userId'],
      name: 'fkey_MyLessons_users',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }));

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MyLessons');
  }
};
