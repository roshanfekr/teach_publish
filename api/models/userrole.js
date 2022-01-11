'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {
    timestamps: false,
  });
  UserRole.associate = function (models) {
    UserRole.belongsTo(models.User);
    UserRole.belongsTo(models.Role);
    // associations can be defined here
  };
  return UserRole;
};
