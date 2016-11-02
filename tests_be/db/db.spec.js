var Sequelize = require('sequelize');
var Promise = require('bluebird');
var models = require('../../db/models');

var tableNames = [
  'User',
  'Friend',
  'House',
  'Like',
  'Pic',
  'Want'
];



describe('Database Schema',function() {
  beforeEach(function(done) {
    
    // Clear tables for next test
    var queries = [];

    tableNames.map(function(table) {
      queries.push(db.query('truncate ' + table));
    });

    Promise.all(queries).then(done);

  });

    
  it('Should add users to the DB');
  it('Should add a House to a User');
  it('Should add a Want to a User');
  it('Should add a Pic to the House');
  it('Should add a Friend to a User');
  it('Should add a Like to a User');
});
