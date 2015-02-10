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
  	database: 'auth'
  },
});

var bookshelf = require('bookshelf')(knex);

// Plugins.
bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;