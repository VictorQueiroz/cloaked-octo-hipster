'use strict';

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.SERVER_MYSQL_HOST,
    user: process.env.SERVER_MYSQL_USERNAME,
    password: process.env.SERVER_MYSQL_PASSWORD,
    database: process.env.SERVER_WORLD_DB
  },
  migrations: {
  	tableName: 'migrations'
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