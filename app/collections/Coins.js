'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Coin = models.Coin;

var Coins = bookshelf.Collection.extend({
	model: Coin
});

module.exports = bookshelf.collection('Coins', Coins);