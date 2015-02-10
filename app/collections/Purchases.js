'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Purchase = models.Purchase;

var Purchases = bookshelf.Collection.extend({
	model: Purchase
});

module.exports = bookshelf.collection('Purchases', Purchases);