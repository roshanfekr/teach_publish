'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const db = require("../models")
    await db.sequelize.query("CREATE PROCEDURE `rate_default`()\n" +
      "LANGUAGE SQL\n" +
      "NOT DETERMINISTIC\n" +
      "CONTAINS SQL\n" +
      "SQL SECURITY DEFINER\n" +
      "COMMENT ''\n" +
      "BEGIN\n" +
      "\tDECLARE id1 INT;  \n" +
      "\tDECLARE avg_rate1 FLOAT DEFAULT NULL;  \n" +
      "\tDECLARE lessonId1 INT; \n" +
      "\tDECLARE finished INTEGER DEFAULT 0;\n" +
      "\tDECLARE rateOverallsId INT   DEFAULT NULL; \n" +
      "\t\n" +
      "\tDECLARE Get_cur CURSOR \n" +
      "\tFOR SELECT u.id , ul.lessonId , ro.avg_rate , ro.id as rateOverallsId  FROM Users  AS u INNER JOIN UserLessons ul ON ul.userId = u.id  LEFT JOIN RateOveralls AS ro ON u.id = ro.tutorId ;  \n" +
      "\t\n" +
      "\tDECLARE CONTINUE HANDLER \n" +
      "\tFOR NOT FOUND SET finished = 1;\n" +
      "\t\n" +
      "\tOPEN Get_cur; \n" +
      "\t \n" +
      "\tgo1: LOOP\n" +
      "\t  \t\n" +
      "\t\tFETCH Get_cur INTO id1 , lessonId1, avg_rate1 , rateOverallsId;  \n" +
      "\t\n" +
      "\t\tIF finished = 1 THEN \n" +
      "\t\t\tLEAVE go1;\n" +
      "\t\tEND IF;\n" +
      "\t\t\n" +
      "\t\tIF (rateOverallsId IS NULL) THEN\n" +
      "\t\t\tINSERT INTO RateOveralls (avg_rate , tutorId, lessonId) VALUES(0 , id1, lessonId1);\n" +
      "\t\tEND IF;\n" +
      "\t\t\n" +
      "\n" +
      "\t\t\t\n" +
      "\t \n" +
      "\tEND LOOP go1; \n" +
      "\t  \n" +
      "\tCLOSE Get_cur;  \n" +
      "END" )

    await db.sequelize.query("CREATE  TRIGGER `userlessons_after_insert` AFTER INSERT ON `UserLessons` FOR EACH ROW BEGIN\n" +
      "\n" +
      "\t\tDECLARE id1 INT;  \n" +
      "\tDECLARE avg_rate1 FLOAT DEFAULT NULL;  \n" +
      "\tDECLARE lessonId1 INT; \n" +
      "\tDECLARE finished INTEGER DEFAULT 0;\n" +
      "\tDECLARE rateOverallsId INT   DEFAULT NULL; \n" +
      "\t\n" +
      "\tDECLARE Get_cur CURSOR \n" +
      "\tFOR SELECT u.id , ul.lessonId , ro.avg_rate , ro.id as rateOverallsId  FROM Users  AS u INNER JOIN UserLessons ul ON ul.userId = u.id  LEFT JOIN RateOveralls AS ro ON u.id = ro.tutorId ;  \n" +
      "\t\n" +
      "\tDECLARE CONTINUE HANDLER \n" +
      "\tFOR NOT FOUND SET finished = 1;\n" +
      "\t\n" +
      "\tOPEN Get_cur; \n" +
      "\t \n" +
      "\tgo1: LOOP\n" +
      "\t  \t\n" +
      "\t\tFETCH Get_cur INTO id1 , lessonId1, avg_rate1 , rateOverallsId;  \n" +
      "\t\n" +
      "\t\tIF finished = 1 THEN \n" +
      "\t\t\tLEAVE go1;\n" +
      "\t\tEND IF;\n" +
      "\t\t\n" +
      "\t\tIF (rateOverallsId IS NULL) THEN\n" +
      "\t\t\tINSERT INTO RateOveralls (avg_rate , tutorId, lessonId) VALUES(0 , id1, lessonId1);\n" +
      "\t\tEND IF;\n" +
      "\t\t\n" +
      "\tEND LOOP go1; \n" +
      "\t  \n" +
      "\tCLOSE Get_cur;  \n" +
      "\t\n" +
      "END")

      await db.sequelize.query("CALL `rate_default`()")
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
