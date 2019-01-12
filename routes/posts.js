const express = require('express')
const router = express.Router({mergeParams:true})
const postsCtrl = require('../controllers/posts')
const authCtrl = require('../controllers/auth')

router.get('/',postsCtrl.getAllPosts)
router.get('/:postId',postsCtrl.getPost)
router.delete('/:postId',postsCtrl.deletePost)
router.post('/' ,postsCtrl.addPost)
router.put('/postId',postsCtrl.updatePost)

router.put('/:postId', authCtrl.authenticate, authCtrl.checkRequest, postsCtrl.updatePost)

module.exports = router