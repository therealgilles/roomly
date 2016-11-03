'use strict';
module.exports = function(sequelize, DataTypes) {
  const House = sequelize.define('House', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    tite: DataTypes.STRING(140),
    addressOne: DataTypes.STRING,
    addressTwo: DataTypes.STRING,
    city: DataTypes.STRING(25),
    state: DataTypes.STRING(2),
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    openRooms: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    smoking: DataTypes.BOOLEAN,
    pets: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: function(models) {
        House.belongsTo(models.User);
      }
    }
  });
  return House;
};
