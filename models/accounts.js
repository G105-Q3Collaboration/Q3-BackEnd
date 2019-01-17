const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneAccount(accountId){
	return knex('accounts')
	.where({ id: accountId })
	.returning('*')
}

function signup(displayname, username, password) {
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
			.insert({ username, password: hashedPW, displayname  })
			.returning('accounts.username')
	})
}

function getAllAccounts() {
	return knex('accounts')
	.returning('*')
}

function editOneAccount(accountId, body) {
	return knex('accounts')
	.update({
		username: body.username,
		password: body.password,
		displayname: body.displayname,
		profilepic: body.profilepic,
		eatinghabits: body.eatinghabits,
		quirks: body.quirks,
		bio: body.bio,
		age: body.age,
		type: body.type
	})
	.where({ id: accountId })
	.returning('*')
}

module.exports = {
  signup, getOneAccount, getAllAccounts, editOneAccount
}
