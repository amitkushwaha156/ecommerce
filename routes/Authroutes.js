const express = require('express')

const {createUser, getallUser,loginUserCtrl }= require('../controller/userctrl')
const router=express.Router()
router.post('/register',createUser)
router.post('/login',loginUserCtrl)
router.get('/all-user',getallUser)
module.exports = router