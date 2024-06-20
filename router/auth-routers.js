const express = require('express')

const {home  , bookingjini} = require('../controller/auth-controllers')
const router = express.Router()


router.route('/').get(home)




// ALL POST METHODTS
router.route('/bookingjini').post(bookingjini)




module.exports = router