'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Toplist = models.Toplist;

var Toplists = bookshelf.Collection.extend({
	model: Toplist
});

module.exports = bookshelf.collection('Toplists', Toplists);