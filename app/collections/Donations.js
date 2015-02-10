'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Donation = models.Donation;

var Donations = bookshelf.Collection.extend({
	model: Donation
});

module.exports = bookshelf.collection('Donations', Donations);