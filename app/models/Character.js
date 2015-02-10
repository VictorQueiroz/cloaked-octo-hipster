'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'characters'));
var Race = require(path.join(__dirname, 'Race'));
var Class = require(path.join(__dirname, 'Class'));

var Character = bookshelf.Model.extend({
  tableName: 'characters',
  idAttribute: 'guid',
  inventory: function () {
  	return this.hasMany('CharacterInventory', 'guid');
  },
  class: function () {
  	return this.belongsTo(Class, 'class');
  },
  race: function () {
  	return this.belongsTo(Race, 'race');
  }
});

module.exports = bookshelf.model('Character', Character);