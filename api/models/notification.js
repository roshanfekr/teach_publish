'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    title: DataTypes.STRING(250),
    text: DataTypes.TEXT,
    level: DataTypes.INTEGER,
   },  {});
  Notification.associate = function (models) {
    Notification.hasMany(models.UserNotification);
  };
  return Notification;
};

