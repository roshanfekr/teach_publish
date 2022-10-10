'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    resetPasswordCode: DataTypes.STRING,
    emailConfirmCode: DataTypes.STRING,
    emailConfirmed: DataTypes.BOOLEAN,
    acceptStatus: DataTypes.INTEGER,
    headline: DataTypes.TEXT,
    bioMore: DataTypes.TEXT,
    fileId: DataTypes.INTEGER,
    universityId: DataTypes.INTEGER,
    program: DataTypes.STRING,
    training_method:DataTypes.INTEGER,
    disable: DataTypes.BOOLEAN,
    deleted: DataTypes.BOOLEAN,
    receiveEmailOnMessage: DataTypes.BOOLEAN,
    receiveEmailOnRequest: DataTypes.BOOLEAN,
  }, {});
  User.associate = function (models) {
    User.hasMany(models.UserRole);
    User.hasMany(models.UserLesson);
    User.hasMany(models.Communication);
    User.hasMany(models.Educations);
    User.hasMany(models.Experience);
    User.hasMany(models.TutorTiming);
    User.hasMany(models.Certificate);
    User.hasMany(models.Transcripts);
    User.hasMany(models.MyLesson , {as:"TutorMyLessons" ,foreignKey: 'tutorUserId'});
    User.hasMany(models.MyLesson  , {as:"UserMyLessons" , foreignKey: 'userId'});
    User.belongsTo(models.File, { foreignKey: 'fileId'})
    User.belongsTo(models.University, { foreignKey: 'universityId'})
    User.hasMany(models.RateOverall,{foreignKey: 'tutorId'});
    User.belongsTo(models.Gender , {foreignKey: 'genderId'});
    // Order.belongsTo(models.User);
    // associations can be defined here
  };
  return User;
};
