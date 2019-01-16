const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneAccount(accountId){
	return knex('accounts')
	.where({ id: accountId })
	.returning('*')
}

function signup(displayname, username, password, profilepic, eatinghabits, quirks,bio, age, type, interactions ) {
	return knex('accounts')
	.where({ username })
	.then(([data]) => {
		if (!!data) throw {
			status: 400,
			message: 'username already in use'
		}
		return bcrypt.hash(password, 10)
	})
	.then((hashedPW) => {
		return knex('accounts')
			.insert({ username, password: hashedPW, displayname})
			.returning('accounts.username')
	})
}

function getAllAccounts() {
	return knex('accounts')
	.returning('*')
}

function editOneAccount(accountId, body) {
	return knex('accounts')
	.where({ id: accountId })
	.then(() => {
		return knex('accounts')
			.update({
				profilepic:body.profilepic, displayname:body.displayname, age:body.age,
				bio:body.bio, type:body.type, eatinghabits:body.eatinghabits, quirks:body.quirks
			})
	})
}

module.exports = {
  signup, getOneAccount, getAllAccounts, editOneAccount
}
