const User = require("../models/usermodel");
const asyncHandler = require("express-async-handler");

const createUser=asyncHandler(async(req,res)=>{
    const email=req.body.email;
    const findUser =await User.findOne({email:email})
    if(!findUser){
        //create new user

const newUser = await User.create(req.body)
res.json(newUser)
    }else{
        //user already exists
       
    res.send("User already exists")
    }
})
module.exports = {createUser}