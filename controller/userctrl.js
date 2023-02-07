const User = require("../models/usermodel");


const createUser=async(req,res)=>{
    const email=req.body.email;
    const findUser =await User.findOne({email:email})
    if(!findUser){
        //create new user

const newUser = await User.create(req.body)
res.status(201).json(newUser)
    }else{
        //user already exists
        res.status(409).json({message:"User already exists",
    success:false
    })
    }
}
module.exports = {createUser}