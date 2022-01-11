'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    name: DataTypes.STRING,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    msg: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    subject: DataTypes.STRING
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};
