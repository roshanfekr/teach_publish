'use strict';
module.exports = (sequelize, DataTypes) => {
  const setting = sequelize.define('Setting', {
    key: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {});
  setting.associate = function (models) {

  };
  return setting;
};
