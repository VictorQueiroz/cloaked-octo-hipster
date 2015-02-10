'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'characters'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Character = models.Character;

var Characters = bookshelf.Collection.extend({
	model: Character
});

module.exports = bookshelf.collection('Characters', Characters);