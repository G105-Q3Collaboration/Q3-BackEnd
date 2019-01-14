const knex = require('../db/knex')

function addPost(accountId, newPost) {
    console.log("hitting addPost")
    return knex('posts')
        .where({
            'account_id':accountId
        })
        .insert(newPost)
        .then(result => {
            return result
        })
}

function updatePost(postId, newPost) {
    console.log("hitting updatePost")
    return knex('posts')
        .where({
            'posts.id': postId
        })
        .update({
            "content": newPost.content
        }).returning('*')
}


function getAllOneUserPosts(accountId) {
    console.log("hitting getalloneusersposts")
    return knex('posts')
        .where({
            'account_id': accountId
        })
        .then(result => {
            return result
        })
}

function getOnePost(postId, accountId) {
    console.log("hitting getOnePost")
    return knex('posts')
        .where({
            'posts.id': postId,
            'account_id':accountId
        })
        .then(result => {
            return result
        })
};

function deletePost(postId) {
    console.log("hitting deletePost")
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
    console.log("hitting getallposts")
    return knex('posts')
    .then(result => {
        return result
    })
}

module.exports = {
  getAllPosts,
  getAllOneUserPosts,
  getOnePost,
  addPost,
  deletePost,
  updatePost
}