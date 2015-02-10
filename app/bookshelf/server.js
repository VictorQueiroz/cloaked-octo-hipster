'use strict';

var parse = require('./parse');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.SERVER_MYSQL_HOST,
    user: process.env.SERVER_MYSQL_USERNAME,
    password: process.env.SERVER_MYSQL_PASSWORD,
    database: 'server'
  },
  migrations: {
  	tableName: 'migrations'
  }
});

var bookshelf = require('bookshelf')(knex);

// Plugins.
bookshelf.plugin('registry');

module.exports = bookshelf;