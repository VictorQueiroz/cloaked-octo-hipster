'use strict';

var knex = require('knex')({
  client: 'sqlite',
  migrations: {
  	tableName: 'migrations'
  },
  connection: {
    filename: './characters.sqlite'
  },
});

var bookshelf = require('bookshelf')(knex);

// Plugins.
bookshelf.plugin('registry');

module.exports = bookshelf;