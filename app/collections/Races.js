'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'server'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Race = models.Race;

var Races = bookshelf.Collection.extend({
	model: Race
});

module.exports = bookshelf.collection('Races', Races);