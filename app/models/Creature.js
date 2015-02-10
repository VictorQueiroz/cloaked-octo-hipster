'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));
var CreatureQueststarter = require(path.join(__dirname, 'CreatureQueststarter'));
var CreatureQuestender = require(path.join(__dirname, 'CreatureQuestender'));

var Creature = bookshelf.Model.extend({
  tableName: 'creature_template',
  idAttribute: 'entry',
  queststarter: function () {
  	return this.hasMany(CreatureQueststarter, 'id');
  },
  questender: function () {
  	return this.hasMany(CreatureQuestender, 'id');
  }
});

module.exports = bookshelf.model('Creature', Creature);;