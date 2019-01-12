const express = require('express')
const router = express.Router( {mergeParams: true})
const accountsCtrl = require('../controllers/accounts')

router.post('/signup', accountsCtrl.signup)
router.get('/:id', accountsCtrl.getOneAccount)
router.post('/', accountsCtrl.signup)
router.put('/:id',accountsCtrl.editOneAccount)

router.use('/:userId/posts', require('./posts'))

module.exports = router