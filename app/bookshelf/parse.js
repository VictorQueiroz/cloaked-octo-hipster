'use strict';
								   //       mysql://  root             :  password         @  localhost            /  databasename
var URL_REGEXP = /(?:[A-z]{0,}\:\/\/)([A-z0-9]{0,})(?:\:)([A-z0-9]{0,})(?:\@)([A-z0-9\-\.]{0,})(?:\/)([A-z0-9]{0,})/;

exports.url = function (str) {
	return str.toString().match(URL_REGEXP);
}