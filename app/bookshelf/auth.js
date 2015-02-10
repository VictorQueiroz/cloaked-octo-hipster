'use strict';

var knex = require('knex')({
  client: 'sqlite',
  migrations: {
  	tableName: 'migrations'
  },
  connection: {
    filename: './auth.sqlite'
  },
});

var bookshelf = require('bookshelf')(knex);

// Plugins.
bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;