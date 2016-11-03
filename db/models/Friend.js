'use strict';
module.exports = function(sequelize, DataTypes) {
  const Friend = sequelize.define('Friend', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    friendName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Friend.belongsToMany(models.User, { through: 'UserFriends' });
      }
    }
  });
  return Friend;
};
