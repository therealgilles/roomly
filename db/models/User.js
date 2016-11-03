'use strict';

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    userName: DataTypes.STRING(20),
    profPic: DataTypes.STRING,
    city: DataTypes.STRING(25),
    state: DataTypes.STRING(2),
    age: DataTypes.INTEGER,
    landLord: DataTypes.BOOLEAN,
    description: DataTypes.STRING
  });
  return User;
};
