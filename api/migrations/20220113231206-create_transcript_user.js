'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Transcripts', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type:Sequelize.INTEGER
      },
      fileId: {
        allowNull: false,
        type:Sequelize.INTEGER
      },
      acceptStatus:{
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('Transcripts',  {
      type: 'foreign key',
      fields: ['userId'],
      name: 'fkey_transcripts_user',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }));

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
