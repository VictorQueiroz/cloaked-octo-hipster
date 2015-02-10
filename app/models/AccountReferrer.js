'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var AccountReferrer = bookshelf.Model.extend({
	tableName: 'account_referrer',
	account: function () {
		return this.belongsTo('Account', 'account_id');
	},
	referrer: function () {
		return this.belongsTo('Account', 'referrer_id');
	}
});

module.exports = bookshelf.model('AccountReferrer', AccountReferrer);