'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Certificate.init({
    userId: DataTypes.INTEGER,
    certName: DataTypes.STRING,
    description: DataTypes.STRING,
    startYear: DataTypes.INTEGER,
    endYear: DataTypes.INTEGER,
    fileId: DataTypes.INTEGER,
    issuedby: DataTypes.STRING,
    acceptStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Certificate',
  });

  Certificate.associate = function (models) {
    Certificate.belongsTo(models.User)
  }
  return Certificate;
};
