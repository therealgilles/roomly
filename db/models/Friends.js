'use strict';

const db = require('../index.js');

const addFriend = function(friend, userId) {
  return db.query('SELECT id FROM Users WHERE id = ?', userId)
    .then(function(rows) {
      if (rows.length === 0) {
        throw 'Error: User not in database';
      } else {
        friend.userId = userId;
        return db.query('INSERT INTO Friends SET ?', friend);
      }
    });
};

module.exports.addFriend = addFriend;
