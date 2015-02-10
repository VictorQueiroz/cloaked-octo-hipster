'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'server'));

var Display = bookshelf.Model.extend({
	idAttribute: 'id',
	tableName: 'dbc_itemdisplayinfo'
});

module.exports = bookshelf.model('Display', Display);