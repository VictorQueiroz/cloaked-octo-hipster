'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var Coin = bookshelf.Model.extend({
	tableName: 'coins',
	accounts: function () {
		return this.belognsToMany('Account', 'account_coins', 'account_id', 'coin_id');
	}
});

module.exports = bookshelf.model('Coin', Coin);