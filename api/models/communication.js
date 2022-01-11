'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Communication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Communication.belongsTo(models.User)

    }
  };
  Communication.init({
    name: DataTypes.STRING,
    accountId: DataTypes.STRING,
    userId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Communication',
  });
  return Communication;
};
