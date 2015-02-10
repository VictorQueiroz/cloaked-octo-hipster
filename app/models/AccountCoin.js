'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var AccountCoin = bookshelf.Model.extend({
	tableName: 'account_coins',
	account: function () {
		return this.belongsTo('Account', 'account_id');
	}
});

module.exports = bookshelf.model('AccountCoin', AccountCoin);