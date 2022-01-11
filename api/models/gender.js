'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define('Gender', {
    title: DataTypes.STRING,
    disable: DataTypes.BOOLEAN,
  } ,
    { timestamps: false,});
  return Gender;
};
