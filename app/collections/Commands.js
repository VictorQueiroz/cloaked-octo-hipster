'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Command = models.Command;

var Commands = bookshelf.Collection.extend({
	model: Command
});

module.exports = bookshelf.collection('Commands', Commands);