'use strict';

var models = require('./app/models');
var Account = models.Account;

function createAccount () {
	return Account.forge({
		username: 'something_' + Math.floor((Math.random() * 999) + 1),
		password: '123456'
	}).save().then(function (account) {
		return Account.forge({
			id: account.id
		}).fetch({
			withRelated: ['referrer', 'referrals']
		});
	});
}

createAccount().then(function (account) {
	return createAccount().then(function (referrer) {
		return account.related('referrer').attach(referrer);
	})
}) 