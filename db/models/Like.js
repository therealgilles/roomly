'use strict';
module.exports = function(sequelize, DataTypes) {
  const Like = sequelize.define('Like', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    like: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Like.belongsToMany(models.User, { through: 'UserLikes' });
      }
    }
  });
  return Like;
};
