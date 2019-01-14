const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneAccount(id){
    return knex('accounts')
    .where({id})
    .returning('*')
}

function signup(username, password, displayname, profilepic, eatinghabits, quirks,bio, age, type, interactions ) {
    return knex('accounts')
        .where('username', username)
        .then(([data]) => {
            if (!!data) throw {
                status: 400,
                message: 'username already in use'
            }
            return bcrypt.hash(password, 10)
        })
        .then(hashedPW => {
            return knex('accounts')
                .insert({
                    username,
                    password: hashedPW,
                    displayname,
                    profilepic,
                    eatinghabits,
                    quirks,
                    bio,
                    age,
                    type,
                    interactions
                })
                .returning('accounts.username')
        })
}


function getAllAccounts () {
    return knex('accounts')
    .returning('*')
}

function editOneAccount(accountId) {
    return knex('accounts')
        .where({
            id: accountId
        })
        .then(response => {
            return knex('accounts')
                .update({
                    username: response.username,
                    password: response.password,
                    profileInformation: response.profileInformation
                })
        })
}
module.exports = {
    signup,
    getOneAccount,
    getAllAccounts,
    editOneAccount
}