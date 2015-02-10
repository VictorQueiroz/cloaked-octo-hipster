'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var Uptime = bookshelf.Model.extend({
	tableName: 'uptime',
	idAttribute: 'realmid',
	realmlist: function () {
		return this.belongsTo('Realmlist', 'realmid');
	}
});

module.exports = bookshelf.model('Uptime', Uptime);