const model = require('../models/posts');

function getAllPosts(req, res, next) {
  model.getAllPosts()
  .then((result) => {
    if (result.length < 1)
    return next({
      status: 404,
      message: "post not found"
    })
    res.status(200).send(result)
  })
  .catch(next)
}

function getAllOneUserPosts(req, res, next) {
  model.getAllOneUserPosts(req.params.accountId)
  .then((result) => {
    res.status(200).send(result)
  })
  .catch(next)
}

function getOnePost(req, res, next) {
  model.getOnePost(req.params.postId, req.params.accountId)
  .then((result) => {
    if (!result || result.length === 0)
    return next({
      status: 404,
      message: "post not found!"
    })
    res.status(200).send(result)
  })
  .catch(next)
};

function addPost(req, res, next) {
  model.addPost(req.params.accountId, req.body.content)
  .then((result) => {
    if (!result)
    return next({
      status: 500,
      message: "error"
    })
    res.status(201).send(result)
  })
  .catch(next)
}


function deletePost(req, res, next) {
  return model.deletePost(req.params.postId)
  .then((result) =>
    res.status(200).send(result)
  )
  .catch(err => next(err))
}

function updatePost(req, res, next) {
  return model.updatePost(req.params.postId, req.body)
  .then((result) => {
    if (!result) {
      return next({
        status: 404,
        message: "error"
      })
    }
    res.status(201).send(result)
  })
  .catch(next)
}

function addReaction(req, res, next) {
  return model.addReaction(req.params.accountId, req.params.postId, req.body.reaction)
  .then(result => {
    if (!result) return ({ status: 404, message: 'error' })
    res.status(201).send(result)
  })
  .catch(next)
}

function getReaction(req, res, next) {
  return model.getReaction(req.params.postId)
  .then(result => {
    if (!result) return ({ status: 404, message: 'no reactions found' })
    res.status(200).send(result)
  })
  .catch(next)
}

module.exports = {
  getAllPosts, getAllOneUserPosts, getOnePost, addPost, deletePost, updatePost, addReaction, getReaction
}
