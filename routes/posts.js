const express = require('express')
const router = express.Router({mergeParams:true})
const postsCtrl = require('../controllers/posts')
const authCtrl = require('../controllers/auth')

router.get('/allPosts', postsCtrl.getAllPosts)

router.get('/', postsCtrl.getAllOneUserPosts)

router.get('/:postId', postsCtrl.getOnePost)

router.delete('/:postId', postsCtrl.deletePost)

router.post('/', postsCtrl.addPost)

router.put('/:postId', postsCtrl.updatePost)


// router.get('/allPosts',authCtrl.authenticate, authCtrl.checkRequest, postsCtrl.getAllPosts)

// router.get('/',authCtrl.authenticate, authCtrl.checkRequest, postsCtrl.getAllOneUserPosts)

// router.get('/:postId',authCtrl.authenticate, authCtrl.checkRequest, postsCtrl.getOnePost)

// router.delete('/:postId',authCtrl.authenticate, authCtrl.checkRequest, postsCtrl.deletePost)

// router.post('/',authCtrl.authenticate, authCtrl.checkRequest, postsCtrl.addPost)

// router.put('/:postId', authCtrl.authenticate, authCtrl.checkRequest, postsCtrl.updatePost)

module.exports = router


