'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Educations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      university: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.INTEGER
      },
      speciality: {
        type: Sequelize.STRING
      },
      fileId: {
        type: Sequelize.INTEGER
      },
      startYear: {
        type: Sequelize.INTEGER
      },
      endYear: {
        type: Sequelize.INTEGER
      },
      acceptStatus:{
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
    }).then(() => queryInterface.addConstraint('Educations',  {
      type: 'foreign key',
      fields: ['userId'],
      name: 'fkey_educations_user',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Educations');
  }
};
