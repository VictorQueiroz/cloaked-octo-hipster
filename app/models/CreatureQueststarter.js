'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));

var CreatureQueststarter = bookshelf.Model.extend({
  tableName: 'creature_queststarter',
  idAttribute: 'id',
  creature: function () {
  	return this.belongsTo('Creature', 'id');
  },
  quest: function () {
  	return this.belongsTo('Quest', 'quest');
  }
});

module.exports = bookshelf.model('CreatureQueststarter', CreatureQueststarter);;