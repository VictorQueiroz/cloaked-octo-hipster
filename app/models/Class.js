'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'server'));

var Class = bookshelf.Model.extend({
	idAttribute: 'id',
	tableName: 'dbc_chrclasses'
});

module.exports = bookshelf.model('Class', Class);