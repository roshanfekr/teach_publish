'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const db = require("../models")

    await db.sequelize.query("CREATE TRIGGER rates_after_insert AFTER INSERT ON Rates\n" +
      "FOR EACH ROW \n" +
      "BEGIN\n" +
      "\tDECLARE avg_rate FLOAT;\n" +
      "\t \n" +
      "\tSET avg_rate = (SELECT avg(rate)  FROM Rates WHERE tutor_userId = NEW.tutor_UserId AND lessonId = NEW.lessonId and acceptStatus = 1  LIMIT 1) ;\n" +
      "\t\n" +
      "\tIF (avg_rate IS NULL) THEN\n" +
      "\t\tdelete from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;\n" +
      "\tELSE\t\n" +
      "\t\n" +
      "\t\tIF NOT exists(select id from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId) THEN\n" +
      "\t\t\tINSERT INTO RateOveralls (avg_rate , lessonId , tutorId) values(avg_rate, NEW.lessonId , NEW.tutor_UserId );\n" +
      "\t\tELSE\n" +
      "\t\t\tUPDATE RateOveralls set avg_rate = avg_rate WHERE tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;\n" +
      "\t\tEND IF;\n" +
      "\tEND IF;\n" +
      "END" )

    await db.sequelize.query("CREATE TRIGGER rates_after_update AFTER UPDATE ON Rates\n" +
      "FOR EACH ROW \n" +
      "BEGIN\n" +
      "\tDECLARE avg_rate FLOAT;\n" +
      "\t \n" +
      "\tSET avg_rate = (SELECT avg(rate)  FROM Rates WHERE tutor_userId = NEW.tutor_UserId AND lessonId = NEW.lessonId and acceptStatus = 1  LIMIT 1) ;\n" +
      "\t\n" +
      "\tIF (avg_rate IS NULL) THEN\n" +
      "\t\tdelete from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;\n" +
      "\tELSE\t\n" +
      "\t\n" +
      "\t\tIF NOT exists(select id from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId) THEN\n" +
      "\t\t\tINSERT INTO RateOveralls (avg_rate , lessonId , tutorId) values(avg_rate, NEW.lessonId , NEW.tutor_UserId );\n" +
      "\t\tELSE\n" +
      "\t\t\tUPDATE RateOveralls set avg_rate = avg_rate WHERE tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;\n" +
      "\t\tEND IF;\n" +
      "\tEND IF;\n" +
      "END" )


    await db.sequelize.query("CREATE TRIGGER rates_after_delete AFTER DELETE ON Rates\n" +
      "FOR EACH ROW \n" +
      "BEGIN\n" +
      "\tDECLARE avg_rate FLOAT;\n" +
      "\t \n" +
      "\tSET avg_rate = (SELECT avg(rate)  FROM Rates WHERE tutor_userId = OLD.tutor_UserId AND lessonId = OLD.lessonId and acceptStatus = 1  LIMIT 1) ;\n" +
      "\t\n" +
      "\tIF (avg_rate IS NULL) THEN\n" +
      "\t\tdelete from RateOveralls where tutorId = OLD.tutor_UserId and  lessonId = OLD.lessonId;\n" +
      "\tELSE\t\n" +
      "\t\n" +
      "\t\tIF NOT exists(select id from RateOveralls where tutorId = OLD.tutor_UserId and  lessonId = OLD.lessonId) THEN\n" +
      "\t\t\tINSERT INTO RateOveralls (avg_rate , lessonId , tutorId) values(avg_rate, OLD.lessonId , OLD.tutor_UserId );\n" +
      "\t\tELSE\n" +
      "\t\t\tUPDATE RateOveralls set avg_rate = avg_rate WHERE tutorId = OLD.tutor_UserId and  lessonId = OLD.lessonId;\n" +
      "\t\tEND IF;\n" +
      "\tEND IF;\n" +
      "END" )

    await queryInterface.changeColumn("Rates" , "rate" , {type: Sequelize.FLOAT , allowNull: false})
    await queryInterface.changeColumn("RateOveralls" , "avg_rate" , {type: Sequelize.FLOAT , allowNull: false})

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
