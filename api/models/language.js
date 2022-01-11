'use strict';
module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    key: DataTypes.STRING,
    value: DataTypes.TEXT,
  } ,{ timestamps: false,});
  return Language;
};
