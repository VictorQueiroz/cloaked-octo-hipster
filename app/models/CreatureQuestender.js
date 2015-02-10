'use strict';

var path = require('path');
var Creature = require(path.join(__dirname, 'Creature'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));

var CreatureQuestender = bookshelf.Model.extend({
  tableName: 'creature_questender',
  idAttribute: 'id',
  creature: function () {
  	return this.belongsTo(Creature, 'entry');
  }
});

module.exports = bookshelf.model('CreatureQuestender', CreatureQuestender);;