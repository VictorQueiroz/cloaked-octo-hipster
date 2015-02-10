'use strict';

var path = require('path');
var crypto = require('crypto');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var Donation = bookshelf.Model.extend({
	idAttribute: 'id',
	tableName: 'donations',
	hasTimestamps: ['createdAt', 'updatedAt'],
	method: function () {
		return this.belongsTo('DonationMethod', 'method_id');
	},
	account: function () {
		return this.belongsTo('Account', 'account_id');
	}
});

module.exports = bookshelf.model('Donation', Donation);