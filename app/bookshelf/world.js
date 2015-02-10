'use strict';

var knex = require('knex')({
  client: 'sqlite',
  migrations: {
  	tableName: 'migrations'
  },
  connection: {
  	host: 'localhost',
  	user: 'root',
  	password: '',
  	database: 'world'
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