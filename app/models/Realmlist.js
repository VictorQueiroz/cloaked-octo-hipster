'use strict';

var path = require('path');
var Promise = require('bluebird');
var crypto = require('crypto');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var Realmlist = bookshelf.Model.extend({
	tableName: 'realmlist',
	idAttribute: 'id',
	uptime: function () {
		return this.hasMany('Uptime', 'realmid');
	}
});

module.exports = bookshelf.model('Realmlist', Realmlist);