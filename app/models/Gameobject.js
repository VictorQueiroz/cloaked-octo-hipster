'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));
var GameobjectQueststarter = require(path.join(__dirname, 'GameobjectQueststarter'));
var GameobjectQuestender = require(path.join(__dirname, 'GameobjectQuestender'));
var GameobjectLoot = require(path.join(__dirname, 'GameobjectLoot'));

var Gameobject = bookshelf.Model.extend({
  tableName: 'gameobject_template',
  idAttribute: 'entry',
  queststarter: function () {
  	return this.hasMany(GameobjectQueststarter, 'id');
  },
  questender: function () {
  	return this.hasMany(GameobjectQuestender, 'id');
  },
  loot: function () {
  	return this.hasMany(GameobjectLoot, 'Entry');
  }
});

module.exports = bookshelf.model('Gameobject', Gameobject);