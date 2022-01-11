'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RateOverall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // RateOverall.belongsTo(models.User ,{ as:'rate' ,  foreignKey: 'tutorId'})
    }
  }
  RateOverall.init({
    tutorId: DataTypes.INTEGER,
    avg_rate: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'RateOverall',
  });

  RateOverall.associate = function (models) {
    RateOverall.belongsTo(models.User ,{foreignKey: 'tutorId' })

  }

  return RateOverall;
};
