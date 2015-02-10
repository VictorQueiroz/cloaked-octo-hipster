'use strict';

var _ = require('underscore');
var Q = require('q');
var path = require('path');
var Account = require(path.join(__dirname, 'Account'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'server'));

var Post = bookshelf.Model.extend({
	tableName: 'posts',
	idAttribute: 'id',
	hidden: ['sha_pass_hash'],
	hasTimestamps: ['createdAt', 'updatedAt'],
	author: function () {
		return this.belongsTo(Account, 'author_id');
	}
});

module.exports = bookshelf.model('Post', Post);