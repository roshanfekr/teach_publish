'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserNotification = sequelize.define('UserNotification', {
    userId: DataTypes.INTEGER,
    notificationId: DataTypes.INTEGER,
    view: DataTypes.BOOLEAN,
    viewDate: DataTypes.DATE,
   },  {});
  UserNotification.associate = function (models) {
    UserNotification.belongsTo(models.User)
    UserNotification.belongsTo(models.Notification);
  };
  return UserNotification;
};

