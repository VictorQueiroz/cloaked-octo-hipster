'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));
var CreatureQueststarter = require(path.join(__dirname, 'CreatureQueststarter'));
var CreatureQuestender = require(path.join(__dirname, 'CreatureQuestender'));
var GameobjectQueststarter = require(path.join(__dirname, 'GameobjectQueststarter'));
var GameobjectQuestender = require(path.join(__dirname, 'GameobjectQuestender'));

var Quest = bookshelf.Model.extend({
  tableName: 'quest_template',
  idAttribute: 'Id',
  creature_queststarter: function () {
  	return this.hasOne(CreatureQueststarter, 'quest');
  },
  creature_questender: function () {
  	return this.hasOne(CreatureQuestender, 'quest');
  },
  gameobject_queststarter: function () {
  	return this.hasOne(GameobjectQueststarter, 'quest');
  },
  gameobject_questender: function () {
  	return this.hasOne(GameobjectQuestender, 'quest');
  }
});

module.exports = bookshelf.model('Quest', Quest);