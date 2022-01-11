'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLesson = sequelize.define('UserLesson', {
    userId: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER,
    grade: DataTypes.STRING(10),
    acceptStatus: DataTypes.INTEGER,
    price: DataTypes.INTEGER
   },  {});
  UserLesson.associate = function (models) {
    UserLesson.belongsTo(models.User)
    UserLesson.belongsTo(models.Lesson);
  };
  return UserLesson;
};

