'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Experience.belongsTo(models.User)

    }
  };
  Experience.init({
    userId: DataTypes.INTEGER,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    startYear: DataTypes.INTEGER,
    endYear: DataTypes.INTEGER,
    acceptStatus: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Experience',
  });
  return Experience;
};
