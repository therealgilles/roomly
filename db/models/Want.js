'use strict';
module.exports = function(sequelize, DataTypes) {
  const Want = sequelize.define('Want', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    city: DataTypes.STRING(25),
    state: DataTypes.STRING(2),
    smoking: DataTypes.BOOLEAN,
    pets: DataTypes.BOOLEAN,
    minPrice: DataTypes.DECIMAL(10, 2),
    maxPrice: DataTypes.DECIMAL(10, 2),
  }, {
    classMethods: {
      associate: function(models) {
        Want.belongsTo(models.User);
      }
    }
  });
  return Want;
};
