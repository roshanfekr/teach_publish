'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      receiverId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      senderId:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      text: {
        allowNull: false,
        type: Sequelize.STRING
      },
      viewed:{
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      viewTime:{
        allowNull:true,
        type: Sequelize.DATE
      },
      deleted:{
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      type:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      entityId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }) .then(() => queryInterface.addConstraint('Requests',  {
  type: 'foreign key',
  fields: ['senderId'],
  name: 'fkey_requests_user_senderId',
  references: { //Required field
    table: 'Users',
    field: 'id'
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
})).then(() => queryInterface.addConstraint('Requests',   {
  type: 'foreign key',
  fields: ['receiverId'],
  name: 'fkey_requests_user_receiverId',
  references: { //Required field
    table: 'Users',
    field: 'id'
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
}));

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Requests');
  }
};
