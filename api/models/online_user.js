'use strict';
module.exports = (sequelize, DataTypes) => {
  const OnlineUser = sequelize.define('OnlineUser', {
    email: DataTypes.STRING,
  });
  return OnlineUser;
};
