'use strict';

var knex = require('knex')({
  client: 'mysql',
  connection: {
  	host: 'localhost',
  	user: 'root',
  	password: '',
  	database: 'characters'
  },
  migrations: {
  	tableName: 'migrations'
  }
});

var bookshelf = require('bookshelf')(knex);

// Plugins.
bookshelf.plugin('registry');

module.exports = bookshelf;