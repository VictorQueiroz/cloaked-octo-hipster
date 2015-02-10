'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'server'));
var models = require(path.join(path.dirname(__dirname), 'models'));
var Class = models.Class;

var Classes = bookshelf.Collection.extend({
	model: Class
});

module.exports = bookshelf.collection('Classes', Classes);