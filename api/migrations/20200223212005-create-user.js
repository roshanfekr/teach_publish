'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      emailConfirmCode: {
        type: Sequelize.STRING(128),
      },
      emailConfirmed:{
        type: Sequelize.BOOLEAN
      },
      resetPasswordCode: {
        type: Sequelize.STRING(128),
      },
      name: {
        type: Sequelize.STRING(128)
      },
      lastName: {
        type: Sequelize.STRING(128)
      },
      acceptStatus: {
        type: Sequelize.INTEGER
      },
      headline:{
        type: Sequelize.TEXT,
      },
      bioMore:{
        type: Sequelize.TEXT,
      },
      fileId: {
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
    });

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
