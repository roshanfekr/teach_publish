'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
  }, {});
  Role.associate = function (models) {
    Role.hasMany(models.UserRole);
    // Order.belongsTo(models.User);
    // associations can be defined here
  };
  return Role;
};
