'use strict';

var path = require('path');
var Display = require(path.join(__dirname, 'Display'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));

var Item = bookshelf.Model.extend({
	idAttribute: 'entry',
	tableName: 'item_template',
	display: function () {
		return this.belongsTo(Display, 'displayid');
	}
});

module.exports = bookshelf.model('Item', Item);