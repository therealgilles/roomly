'use strict';

const db = require('../index.js');

const addUser = function(user) {
  return db.query('SELECT userName FROM Users WHERE userName = "' + user.userName + '";').then(function(rows) {
    if (rows.length === 0) {
      return db.query('INSERT INTO Users (userName, profPic, city, state, age, landLord, description) VALUES (' + user.userName + ',' + user.profPic + ',' + user.city + ',' + user.state + ',' + user.age + ',' + user.landLord + ',' + user.description + ')');
    } else {
      throw 'Error: User already in db with that name';
    }
  });
    
};

const findOneUser = function(userName) {
  return db.query('SELECT id FROM Users WHERE userName = "' + userName + '";')
    .then(function(rows) {
      return rows;
    });
};

module.exports.addUser = addUser;
module.exports.findOneUser = findOneUser;
