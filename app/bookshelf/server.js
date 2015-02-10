'use strict';

var parse = require('./parse');
var knex = require('knex')({
  client: 'sqlite',
  connection: {
    filename: './server.sqlite'
  },
  migrations: {
  	tableName: 'migrations'
  }
});

var bookshelf = require('bookshelf')(knex);

// Plugins.
bookshelf.plugin('registry');

module.exports = bookshelf;