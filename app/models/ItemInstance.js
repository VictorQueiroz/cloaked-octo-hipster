'use strict';

var path = require('path');
var Item = require(path.join(__dirname, 'Item'));
var Character = require(path.join(__dirname, 'Character'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'characters'));

var ItemInstance = bookshelf.Model.extend({
	idAttribute: 'guid',
	tableName: 'item_instance',
	item: function () {
		return this.belongsTo(Item, 'itemEntry');
	},
	owner: function () {
		return this.belongsTo(Character, 'owner_guid');
	},
	creator: function () {
		return this.belongsTo(Character, 'creatorGuid');
	},
	// GUID of character who created the item.
	giftCreator: function () {
		return this.belongsTo(Character, 'giftCreatorGuid');
	}
});

module.exports = bookshelf.model('ItemInstance', ItemInstance);