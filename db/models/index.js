'use strict';
const path = require('path');
const Sequelize = require('sequelize');
let sequelize = new Sequelize('roomly', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: function() {},
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    socketPath: '/var/run/mysqld/mysqld.sock'
  },
  define: {
    paranoid: true
  }

});
const db = {};

const models = [
  'User.js',
  'Friend.js',
  'House.js',
  'Like.js',
  'Pic.js',
  'Want.js'
];
models.forEach(function(file) {
  let model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName] ) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
