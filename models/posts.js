const knex = require('../db/knex')

function addPost(accountId, newPost) {
  return knex('posts')
    .where({
      'account_id':accountId
    })
    .insert(newPost)
    .then((result) => {
      return result
    })
}

function updatePost(postId, newPost) {
  return knex('posts')
    .where({
      'posts.id': postId
    })
    .update({
      'content': newPost.content
    }).returning('*')
}

function getAllOneUserPosts(accountId) {
  return knex('posts')
    .where({
      'account_id': accountId
    })
    .then((result) => {
      return result
    })
}

function getOnePost(postId, accountId) {
  return knex('posts')
    .where({
      'posts.id': postId,
      'account_id':accountId
    })
    .then((result) => {
      return result
    })
}

function deletePost(postId) {
  return knex('posts')
    .where({
      'posts.id': postId
    })
    .del()
    .then((result) => {
      return result
    })
}

function getAllPosts() {
  return knex('posts')
  .then((result) => {
    return result
  })
}

module.exports = {
  getAllPosts, getAllOneUserPosts, getOnePost, addPost, deletePost, updatePost
}
