const express = require('express')
const {authMiddeliWere,isAdmin}=require("../middelweres/authmiddeliwere")

const {createUser, getallUser,loginUserCtrl,getAuser ,deleteuser,updateUser, blockUser,UnblockUser}= require('../controller/userctrl')
const router=express.Router()
router.post('/register',createUser)
router.post('/login',loginUserCtrl)
router.get('/all-user',getallUser)
router.get("/:id",getAuser,authMiddeliWere,isAdmin)
router.delete("/:id",deleteuser)

router.patch("/:edit-user",authMiddeliWere,updateUser)
router.patch("/:block-user/:id",authMiddeliWere,isAdmin,blockUser)
router.patch("/:unblock-user/:id",authMiddeliWere,isAdmin,UnblockUser)


module.exports = router


