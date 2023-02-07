const User = require("../models/usermodel");
const asyncHandler = require("express-async-handler");
const { generateToken} = require("../config/jwtToken");

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
const loginUserCtrl=asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const findUser =await User.findOne({email})
  if(findUser && await findUser.isPasswordMatched(password)){
   res.json({
    id:findUser?._id,
    Firstname:findUser?.Firstname,
    Lastname:findUser?.Lastname,
    email:findUser?.email,
    mobile:findUser?.mobile,
    token:generateToken(findUser?._id),
})
  }
  else{
    res.send("Invalid Credentials")
  }
})

const getallUser=asyncHandler(async(req,res)=>{
    try{
        const getUser =await User.findOne();
        res.json(getUser)
    }
    catch(err){
           res.send("User not")
    }
    
    
   
}
)
module.exports = {createUser,loginUserCtrl,getallUser}