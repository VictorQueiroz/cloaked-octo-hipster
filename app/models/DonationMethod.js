'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var DonationMethod = bookshelf.Model.extend({
	idAttribute: 'id',
	tableName: 'donation_methods'
});

module.exports = bookshelf.model('DonationMethod', DonationMethod);