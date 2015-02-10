'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'server'));

var Race = bookshelf.Model.extend({
	idAttribute: 'id',
	tableName: 'dbc_chrraces'
});

module.exports = bookshelf.model('Race', Race);