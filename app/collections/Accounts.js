'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Account = models.Account;

var Accounts = bookshelf.Collection.extend({
	model: Account
});

module.exports = bookshelf.collection('Accounts', Accounts);