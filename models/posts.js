const knex = require('../db/knex')

function addPost(accountId, content) {
  return knex('posts')
    .insert({ account_id: accountId, content })
    .returning('*')
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

function addReaction(accountId, postId, reaction) {
  let reactionId
  return knex('reactions')
  .where('reaction', reaction)
  .returning('reaction')
  .then(([reaction]) => {
    reactionId = reaction.id
    return knex('accounts_posts_reactions')
    .where({'account_id': accountId, 'post_id': postId})
  })
  .then(([reaction]) => {
    if (!reaction)
      return knex('accounts_posts_reactions')
        .insert({ account_id: accountId, post_id: postId, reaction_id: reactionId })
        .returning('*')
  })
}

function getReaction(postId) {
  return knex('reactions')
  .select('reactions.id AS id', 'reaction' )
  .join('accounts_posts_reactions', 'accounts_posts_reactions.reaction_id', 'reactions.id')
  .join('posts', 'posts.id', 'accounts_posts_reactions.post_id')
  .where('post_id', postId )
  .returning('*')
}

module.exports = {
  getAllOneUserPosts, getOnePost, addPost, deletePost, updatePost, addReaction, getReaction
}
