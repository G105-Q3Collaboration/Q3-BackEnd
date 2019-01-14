const express = require('express')
const router = express.Router( {mergeParams: true})
const accountsCtrl = require('../controllers/accounts')
const authCtrl = require('../controllers/auth')


router.get('/', accountsCtrl.getAllAccounts)
router.get('/:accountId', accountsCtrl.getOneAccount)
router.post('/', accountsCtrl.signup)
router.put('/:accountId',accountsCtrl.editOneAccount)

router.use('/:accountId/posts', require('./posts'))

module.exports = router