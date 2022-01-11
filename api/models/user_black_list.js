'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBlackList = sequelize.define('UserBlackList', {
    userId: DataTypes.INTEGER,
    savedTime: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    timestamps: false,
  });
  UserBlackList.associate = function (models) {
    UserBlackList.belongsTo(models.User);
  };
  return UserBlackList;
};
