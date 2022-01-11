'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Request.init({
    room: DataTypes.INTEGER,
    receiverId:  DataTypes.INTEGER,
    senderId:  DataTypes.INTEGER,
    text: DataTypes.STRING,
    viewed: DataTypes.BOOLEAN,
    viewTime: DataTypes.DATE,
    deleted: DataTypes.BOOLEAN,
    type: DataTypes.INTEGER,
    entityId: DataTypes.INTEGER,
    deleteId1:  DataTypes.INTEGER,
    deleteId2:  DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Request',
  });

  Request.associate = function (models) {
    Request.belongsTo(models.MyLesson, { foreignKey: 'entityId'})
  }
  return Request;
};
