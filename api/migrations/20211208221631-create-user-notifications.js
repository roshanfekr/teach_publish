'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('UserNotifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type:Sequelize.INTEGER
      },
      notificationId:{
        type:Sequelize.INTEGER
      },
      view: {
        type:  Sequelize.BOOLEAN
      },
      viewDate:{
        type: Sequelize.DATE
      }
      ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('UserNotifications',  {
        type: 'foreign key',
        fields: ['userId'],
        name: 'fkey_usernotification_user',
        references: { //Required field
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })).then(() => queryInterface.addConstraint('UserNotifications',  {
      type: 'foreign key',
      fields: ['notificationId'],
      name: 'fkey_notification_userNotification',
      references: { //Required field
        table: 'Notifications',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }))

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
