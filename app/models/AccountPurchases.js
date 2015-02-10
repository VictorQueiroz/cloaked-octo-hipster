'use strict';

var path = require('path');
var Item = require(path.join(__dirname, 'Item'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var AccountPurchases = bookshelf.Model.extend({
	tableName: 'account_purchases',
	hasTimestamps: ['createdAt', 'updatedAt'],
	account: function () {
		return this.belongsTo('Account', 'account_id');
	},
	item: function () {
		return this.belongsTo(Item, 'item_id');
	},
	coin: function () {
		return this.belongsTo('Coin', 'coin_id');
	}
});

module.exports = bookshelf.model('AccountPurchases', AccountPurchases);