'use strict';

var path = require('path');
var Gameobject = require(path.join(__dirname, 'Gameobject'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));

var GameobjectQuestender = bookshelf.Model.extend({
  tableName: 'gameobject_questender',
  idAttribute: 'id',
  gameobject: function () {
  	return this.belongsTo(Gameobject);
  }
});

module.exports = bookshelf.model('GameobjectQuestender', GameobjectQuestender);