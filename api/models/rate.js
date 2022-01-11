'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rate.init({
    tutor_userId: DataTypes.INTEGER,
    rate: DataTypes.INTEGER,
    stu_userId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    acceptStatus: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Rate',
  });

  Rate.associate = function (models) {
    Rate.belongsTo(models.User , { foreignKey: 'tutor_userId', as:'tutor' })
    Rate.belongsTo(models.User , { foreignKey: 'stu_userId', as:'student'})
    Rate.belongsTo(models.Lesson , { foreignKey: 'lessonId'})

  }
  return Rate;
};
