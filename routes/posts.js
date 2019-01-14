const express = require('express')
const router = express.Router({mergeParams:true})
const postsCtrl = require('../controllers/posts')
const authCtrl = require('../controllers/auth')

router.get('/', postsCtrl.getAllPosts)
router.get('/accounts/:accountId/posts', postsCtrl.getAllOneUserPosts)
router.get('/accounts/:accountId/posts/:postId',postsCtrl.getOnePost)
router.delete('/accounts/:accountId/posts/:postId',postsCtrl.deletePost)
router.post('/accounts/:accountId/posts' ,postsCtrl.addPost)
router.put('/accounts/:accountId/posts/:postId',postsCtrl.updatePost)

router.put('/accounts/:accountId/posts/:postId', authCtrl.authenticate, authCtrl.checkRequest, postsCtrl.updatePost)

module.exports = router