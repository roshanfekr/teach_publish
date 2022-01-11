'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    let lessons = []
    const fs = require('fs')

    try {
      const data = fs.readFileSync('../db/courses.txt', 'utf8')
      var rows = data.split("\n");
      rows.forEach( (item) =>{
        if(item !== null && item !== undefined ) {
          var names = item.split(" ");
          if (names.length === 2)
          {
            lessons.push({subject: item, code: names[0], isenable: true})
          }
        }
      })

    } catch (err) {
      console.error(err)
    }


    if(lessons.length  > 0)
    {
      return queryInterface.bulkInsert('Lessons', lessons, {});
    }else
      return queryInterface.bulkInsert('Lessons', [{
        subject: "Math1",
        isenable: true
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lessons', null, {});
  }
};
