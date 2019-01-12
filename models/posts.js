const knex = require('../db/knex')

function addPost(userId, newPost) {
    return knex('posts')
        .where({
            'accounts_id':userId
        })
        .insert(newPost)
        .then(result => {
            return result
        })
}

function updatePost(postId, newItem) {
    return knex('posts')
        .where({
            'posts.id': postId
        })
        .update({
            "content": newItem.content
        }).returning('*')
}


function getAllOneUsersPosts(userId) {
    return knex('posts')
        .where({
            'accounts_id': userId
        })
        .then(result => {
            return result
        })
}

function getOnePost(userId, postId) {
    return knex('posts')
        .where({
            'posts.id': postId
        })
        .then(result => {
            return result
        })
};

function deletePost(postId) {
    return knex('posts')
        .where({
            'posts.id': postId
        })
        .del()
        .then(result => {
            return result
        })
}

module.exports = {
  getAllPosts,
  getAllOneUsersPosts,
  getOnePost,
  addPost,
  deletePost,
  updatePost
}