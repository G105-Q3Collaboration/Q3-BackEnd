const knex = require('../db/knex')

function addPost(accountId, content) {
  return knex('posts')
    .insert({ account_id: accountId, content})
    .then(result =>  result)
}

function updatePost(postId, content) {
  return knex('posts')
    .where({ 'posts.id': postId })
    .update({ content })
    .returning('*')
}

function getAllOneUserPosts(accountId) {
  return knex('posts')
    .where({ 'account_id': accountId })
    .then(result =>  result)
}

function getOnePost(postId, accountId) {
  return knex('posts')
    .where({
      'posts.id': postId,
      'account_id':accountId
    })
    .then(result =>  result)
}

function deletePost(postId) {
  return knex('posts')
    .where({ 'posts.id': postId })
    .del()
    .returning('*')
    .then(result => result)
}

function getAllPosts() {
  return knex('posts')
  .then(result => result)
}

function addReaction() {
  return knex('posts')
}

function getReaction(postId) {
  return knex('reactions')
  .select('posts.id AS post_id', 'reaction' )
  .join('accounts_posts_reactions', 'accounts_posts_reactions.reaction_id', 'reactions.id')
  .join('posts', 'posts.id', 'accounts_posts_reactions.post_id')
  .where('post_id', postId )
  .then(result => result)
}

module.exports = {
  getAllPosts, getAllOneUserPosts, getOnePost, addPost, deletePost, updatePost, addReaction, getReaction
}
