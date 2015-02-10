'use strict';

var path = require('path');
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'world'));

var GameobjectLoot = bookshelf.Model.extend({
  tableName: 'gameobject_loot_template'
});

module.exports = bookshelf.model('GameobjectLoot', GameobjectLoot);