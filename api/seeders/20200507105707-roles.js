'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Roles', [{
      name: "admin",
    },{
      name: "tutor",
    },{
      name: "student",
    },{
      name: "guest",
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
