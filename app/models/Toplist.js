'use strict';

var _ = require('underscore');
var Q = require('q');
var path = require('path');
var crypto = require('crypto');
var Character = require(path.join(__dirname, 'Character'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var Toplist = bookshelf.Model.extend({
	tableName: 'toplists',
	idAttribute: 'id',
});

module.exports = bookshelf.model('Toplist', Toplist);