const knex = require('../db/knex')

function addPost(accountId, newPost) {
    return knex('posts')
        .where({
            'accounts_id':accountId
        })
        .insert(newPost)
        .then(result => {
            return result
        })
}

function updatePost(postId, newPost) {
    return knex('posts')
        .where({
            'posts.id': postId
        })
        .update({
            "content": newPost.content
        }).returning('*')
}


function getAllOneUsersPosts(accountId) {
    console.log("hello, hitting getalloneusersposts")
    return knex('posts')
        .where({
            'accounts.id': accountId
        })
        .then(result => {
            return result
        })
}

function getOnePost(postId) {
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

function getAllPosts() {
    return knex('posts')
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