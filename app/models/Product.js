'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));
var Item = require(path.join(__dirname, 'Item'));

var Product = bookshelf.Model.extend({
	idAttribute: 'id',
	tableName: 'products',
	coin: function () {
		return this.belongsTo('Coin', 'coin_id');
	},
	item: function () {
		return this.belongsTo(Item, 'item_id');
	}
});

module.exports = bookshelf.model('Product', Product);