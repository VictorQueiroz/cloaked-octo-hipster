'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var AccountVotepoint = bookshelf.Model.extend({
	tableName: 'account_votepoints',
	account: function () {
		return this.belongsTo('Account', 'account_id');
	}
});

module.exports = bookshelf.model('AccountVotepoint', AccountVotepoint);