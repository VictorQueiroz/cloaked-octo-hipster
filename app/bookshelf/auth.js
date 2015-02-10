'use strict';

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.SERVER_MYSQL_HOST,
    user: process.env.SERVER_MYSQL_USERNAME,
    password: process.env.SERVER_MYSQL_PASSWORD,
    database: process.env.SERVER_AUTH_DB
  },
  migrations: {
  	tableName: 'migrations'
  }
});

var bookshelf = require('bookshelf')(knex);

// Plugins.
bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;