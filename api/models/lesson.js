'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    subject: DataTypes.STRING,
    code: DataTypes.STRING,
    isEnable: DataTypes.BOOLEAN,
    universityId: DataTypes.INTEGER
  }, {
    timestamps: false,
  });
  Lesson.associate = function (models) {
    Lesson.hasMany(models.UserLesson);
    Lesson.belongsTo(models.University)
  };

  return Lesson;
};

