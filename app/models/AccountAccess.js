'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var AccountAccess = bookshelf.Model.extend({
	tableName: 'account_access',
	account: function () {
		return this.belongsTo('Account', 'id');
	}
});

module.exports = bookshelf.model('AccountAccess', AccountAccess);