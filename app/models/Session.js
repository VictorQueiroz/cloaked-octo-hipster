'use strict';

var path = require('path');
var crypto = require('crypto');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'server'));

var Session = bookshelf.Model.extend({
	tableName: 'sessions'
});

module.exports = bookshelf.model('Session', Session);