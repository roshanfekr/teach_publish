'use strict';
module.exports = (sequelize, DataTypes) => {
  const TutorTiming = sequelize.define('TutorTiming', {
    userId: DataTypes.INTEGER,
    timeStart: DataTypes.FLOAT,
    timeEnd: DataTypes.FLOAT,
    dayOfWeek: DataTypes.INTEGER,
   },  {
    timestamps: false,
  });
  TutorTiming.associate = function (models) {
    TutorTiming.belongsTo(models.User)
  };
  return TutorTiming;
};

