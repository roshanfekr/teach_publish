'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // logic for reverting the changes
    return queryInterface.removeColumn(
      'UserLessons',
      'university'
    );

  },

  down: async (queryInterface, Sequelize) => {


  }
};
