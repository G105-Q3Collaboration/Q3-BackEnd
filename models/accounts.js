const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneAccount(accountId){
    return knex('accounts')
    .where({id:accountId})
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

function editOneAccount(accountId, body) {
    return knex('accounts')
        .where({
            id: accountId
        })
        .then(() => {
            return knex('accounts')
                .update({
                    username:body.username,
                    password:body.password,
                    displayname:body.displayname,
                    profilepic:body.profilepic,
                    eatinghabits:body.eatinghabits,
                    quirks:body.quirks,
                    bio:body.bio,
                    age:body.age,
                    type:body.type,
                    interaction:body.interaction
                })
        })
}
module.exports = {
    signup,
    getOneAccount,
    getAllAccounts,
    editOneAccount
}