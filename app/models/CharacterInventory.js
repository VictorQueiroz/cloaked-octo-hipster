'use strict';

var path = require('path');
var Item = require(path.join(__dirname, 'Item'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'characters'));

var CharacterInventory = bookshelf.Model.extend({
	tableName: 'character_inventory',
	item_instance: function () {
		return this.belongsTo('ItemInstance', 'item');
	},
	character: function () {
		return this.belongsTo('Character', 'guid');
	}
});

module.exports = bookshelf.model('CharacterInventory', CharacterInventory);