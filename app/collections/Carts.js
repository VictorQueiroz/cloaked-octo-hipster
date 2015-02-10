'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Cart = models.Cart;

var Carts = bookshelf.Collection.extend({
	model: Cart
});

module.exports = bookshelf.collection('Carts', Carts);