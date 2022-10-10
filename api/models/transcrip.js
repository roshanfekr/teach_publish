'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transcript = sequelize.define('Transcripts', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    fileId: DataTypes.INTEGER,
    acceptStatus: DataTypes.INTEGER,
  },{
    freezeTableName: true
  });
  Transcript.associate = function (models) {

    Transcript.belongsTo(models.File, { foreignKey: 'fileId'})
    Transcript.belongsTo(models.User,{foreignKey: 'userId'});
    // Order.belongsTo(models.User);
    // associations can be defined here
  };
  return Transcript;
};
