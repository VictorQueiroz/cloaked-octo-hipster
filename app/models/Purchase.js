'use strict';

var path = require('path');
var Purchase = require(path.join(__dirname, 'AccountPurchases'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

module.exports = bookshelf.model('Purchase', Purchase);