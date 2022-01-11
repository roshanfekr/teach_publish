'use strict';
module.exports = (sequelize, DataTypes) => {
  const FAQ = sequelize.define('FAQ', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    sortNumber: DataTypes.INTEGER,
    isEnable: DataTypes.BOOLEAN
  } );
  return FAQ;
};
