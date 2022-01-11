'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyLessons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyLessons.belongsTo(models.User , { foreignKey: 'tutorUserId', as:'tutor' })
      MyLessons.belongsTo(models.User , { foreignKey: 'userId', as:'student'})
      MyLessons.belongsTo(models.Lesson)
    }
  }
  MyLessons.init({
    userId: DataTypes.INTEGER,
    tutorUserId: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER,
    timingId: DataTypes.INTEGER,
    acceptStatus: DataTypes.INTEGER,
    finished: DataTypes.BOOLEAN,
    timeStart: DataTypes.FLOAT,
    timeEnd: DataTypes.FLOAT,
    dayOfWeek: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    replay: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'MyLesson',
  });
  return MyLessons;
};
