const accountModel = require('../models/accounts')
const cloudinary = require('cloudinary')

function signup(req, res, next) {
  const { petname, username, password } = req.body
  if (!username && !password)
    return next({
      status: 400,
      message: 'Username and Password required for creating an account'
    })
  return accountModel.signup(petname, username, password)
    .then(([data]) => {
      if (!data) return next({
        status: 500,
        message: 'Something went wrong. Abandon all hope. The end is nigh.'
      }) 
      next()
    })
    .catch(next)
}

function getOneAccount(req, res, next) {
  return accountModel.getOneAccount(req.params.accountId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(200).send(result)
    })
}

function getAllAccounts(req, res, next) {
  return accountModel.getAllAccounts()
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'accounts not found'
        })
      }
      res.status(200).send(result)
    })
}

function editOneAccount(req, res, next) {
  let { profilepic, displayname, age, bio, type, eatinghabits, quirks } = req.body

  profilepic = profilepic || undefined
  displayname = displayname || undefined
  age = age || undefined
  bio = bio || undefined
  type = type || undefined
  eatinghabits = eatinghabits || undefined
  quirks = quirks || undefined

  if (!profilepic && !displayname && !age && !bio && !type && !eatinghabits && !quirks) {
    return next({
      status: 400,
      message: "No input provided, we don't value your input anyway"
    })
  }

  req.body = { profilepic, displayname, age, bio, type, eatinghabits, quirks }

  return accountModel.editOneAccount(req.params.accountId, req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(201).send({
        profilepic, displayname, age, bio, type, eatinghabits, quirks
      })
    })
}

function uploadImage(req, res, next) {
  let imageurl
  cloudinary.config({
    cloud_name: 'squeaker',
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  })
  cloudinary.v2.uploader.upload(req.body.image, (err, result) => {
    if (err) return next({status: 500, message: 'the cloud broke'})
    imageurl = result.url
    res.status(201).send({image: result.url})
  })
  return imageurl
}

module.exports = {
  signup, getOneAccount, getAllAccounts, editOneAccount, uploadImage
}
