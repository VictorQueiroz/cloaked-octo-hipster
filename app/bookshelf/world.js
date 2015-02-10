'use strict';

var knex = require('knex')({
  client: 'sqlite',
  migrations: {
  	tableName: 'migrations'
  },
  connection: {
    filename: './world.sqlite'
  },
  pool: {
    min: 0,
    max: 7
  }
});

var bookshelf = require('bookshelf')(knex);

// Plugins.
bookshelf.plugin('registry');

module.exports = bookshelf;