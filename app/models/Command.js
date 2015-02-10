'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));

var Command = bookshelf.Model.extend({
	idAttribute: 'name',
  tableName: 'command'
});

module.exports = bookshelf.model('Command', Command);