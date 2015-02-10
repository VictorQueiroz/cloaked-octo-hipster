'use strict';

var _ = require('underscore');
var Q = require('q');
var path = require('path');
var crypto = require('crypto');
var Character = require(path.join(__dirname, 'Character'));
var bookshelf = require(path.join(path.dirname(__dirname), 'bookshelf', 'auth'));

var Account = bookshelf.Model.extend({
	tableName: 'account',
	idAttribute: 'id',
	hidden: ['sha_pass_hash', 'v', 's', 'sessionkey'],
	access: function () {
		return this.hasMany('AccountAccess', 'id');
	},
	votepoints: function () {
		return this.hasMany('AccountVotepoint', 'account_id');
	},
	coins: function () {
		return this.hasOne('AccountCoin', 'account_id')
	},
	donations: function () {
		return this.hasMany('Donation', 'account_id');
	},
	purchases: function () {
		return this.hasMany('AccountPurchases', 'account_id');
	},
	referrer: function () {
		return this.hasOne('Account').through('AccountReferrer', 'id', 'referrer_id');
	},
	referrals: function () {
		return this.belongsToMany('Account', 'account_referrer', 'account_id', 'referrer_id');
	},
	initialize: function () {
		this.on('saving', this.onSaving);
	},
	onSaving: function () {
		var account = this.attributes;

		var username = account.username.toString().toUpperCase();
		var password = account.sha_pass_hash.toString().toUpperCase();

		var sha_pass_hash = crypto.createHash('sha1');
		sha_pass_hash.update(username + ':' + password);

		account.sha_pass_hash = sha_pass_hash.digest('hex');
	},
	validPassword: function (password) {
		var account = this.attributes;
		var sha_pass_hash = account.username.toString().toUpperCase() + ':' + password.toString().toUpperCase();
		sha_pass_hash = crypto.createHash('sha1').update(sha_pass_hash).digest('hex');

		return account.sha_pass_hash.toUpperCase() === sha_pass_hash.toUpperCase();
	},
	hasAccess: function (accessLevel) {
		var deferred = Q.defer();
		return this.related('access').fetch().then(function (access) {
			return JSON.parse(JSON.stringify(access));
		})
		.then(function (access) {
			var has = false;
			_.forEach(access, function (access) {
				if(accessLevel === access.gmlevel) {
					has = true;
				}
			});
			if(has) {
				deferred.resolve();
			} else {
				deferred.reject();
			}
			return deferred.promise;
		});
	}
});

module.exports = bookshelf.model('Account', Account);