'use strict';

var path = require('path');
var Gameobject = require(path.join(__dirname, 'Gameobject'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));

var GameobjectQueststarter = bookshelf.Model.extend({
  tableName: 'gameobject_queststarter',
  idAttribute: 'id',
  gameobject: function () {
  	return this.belongsTo(Gameobject);
  }
});

module.exports = bookshelf.model('GameobjectQueststarter', GameobjectQueststarter);