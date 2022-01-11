'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Educations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Educations.belongsTo(models.User)
    }
  };
  Educations.init({
    userId: DataTypes.INTEGER,
    university: DataTypes.STRING,
    levelEducation: DataTypes.STRING,
    department: DataTypes.STRING,
    fileId: DataTypes.INTEGER,
    startYear: DataTypes.INTEGER,
    endYear: DataTypes.INTEGER,
    acceptStatus: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Educations',
  });
  return Educations;
};
