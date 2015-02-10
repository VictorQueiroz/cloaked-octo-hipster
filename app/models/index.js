'use strict';

var fs = require('fs');
var path = require('path');

fs
	.readdirSync(__dirname)
	.filter(function (file) {
		return file !== 'index.js';
	})
	.forEach(function (file) {
		var modelName = file.replace(/.js$/, '');

		exports[modelName] = require(path.join(__dirname, file));
	});