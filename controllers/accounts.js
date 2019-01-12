const userModel = require('../models/accounts')

function login(req, res, next) {
    
    const {
      username,
      password,
      displayname,
      profilepic,
      eatinghabits,
      quirks,
      bio,
      age,
      type,
      interactions
    } = req.body
    if (!username || !password || !displayname || !profilepic || !eatinghabits || !quirks || !bio || !age || !type) return next({
        status: 400,
        message: 'Incomplete signup'
    })
    return accountModel.signup(username, password, displayname, profilepic, eatinghabits, quirks, bio, age, type, interactions)
        .then(([data]) => {
            if (!data) return next({
                status: 500,
                message: 'Something went wrong. Abandon all hope. The end is nigh.'
            })
            res.status(201).send({
                message: `Account created for ${data}`
            })
        })
        .catch(next)
}

function getOneAccount(req, res, next) {
    return userModel.getOneAccount(req.params.id)
        .then((result) => {
            if (!result) {
                return next({
                    status: 404,
                    message: "account not found"
                })
            }
            res.status(200).send(result)
        })
}

function editOneAccount(req, res, next) {
    const {
        username,
        password,
        profileInformation
    } = req.body;
    return userModel.editOneAccount(req.params.userId, req.body)
        .then((result) => {
            if (!result) {
                return next({
                    status: 404,
                    message: "account not found"
                })
            }
            res.status(201).send({
                username,
                password,
                profileInformation
            })
        })
}
module.exports = {
    login,
    getOneAccount,
    editOneAccount
}