'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Product = models.Product;

var Products = bookshelf.Collection.extend({
	model: Product
});

module.exports = bookshelf.collection('Products', Products);