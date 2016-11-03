'use strict';
module.exports = function(sequelize, DataTypes) {
  const Pic = sequelize.define('Pic', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    housePic: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Pic.belongsTo(models.House);
      }
    }
  });
  return Pic;
};
