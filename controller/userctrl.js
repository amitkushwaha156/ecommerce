const User = require("../models/usermodel");
const asyncHandler = require("express-async-handler");
const { generateToken} = require("../config/jwtToken");


//create a new
const createUser=asyncHandler(async(req,res)=>{
    const email=req.body.email;
    const findUser =await User.findOne({email:email})
    if(!findUser){
        //create new user
const newUser = await User.create(req.body)
res.json(newUser)
console.log(newUser)
    }else{
        //user already exists
    res.send("User already exists")
    }
})

//login
const loginUserCtrl=asyncHandler(async(req,res)=>{
    const {email,password} = req.body
   // console.log(email,password)
    const findUser =await User.findOne({email})
  if(findUser && await findUser.isPasswordMatched(password)){
   res.json({
    id:findUser?._id,
    firstname:findUser?.firstname,
    lastname:findUser?.lastname,
    email:findUser?.email,
    mobile:findUser?.mobile,
    token:generateToken(findUser?._id),
})
  }
  else{
    res.send("Invalid Credentials")
  }
})

//update a user

const updateUser=asyncHandler(async(req,res)=>{
    const{_id}=req.user
    try{
        const UpdateUser =await User.findByIdAndUpdate(_id,{

            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            mobile:req.body.mobile,
        },{
        new:true}
        )
        res.json(UpdateUser)
       
    }
    catch(err){
           res.send("User  update not")
    }
}) 


const getallUser=asyncHandler(async(req,res)=>{
    try{
        const getUser =await User.find();
        res.json(getUser)
    }
    catch(err){
           res.send("User found not")
    }
})
//get a single user

const getAuser=asyncHandler(async(req,res)=>{
    try{
        const getUser =await User.findById(req.params.id);
        res.json(getUser)
    }
    catch(err){
        res.send(" this User not found ")
    }
})
const deleteuser=asyncHandler(async(req,res)=>{
    try{
        const delgetUser =await User.findByIdAndDelete(req.params.id);
        res.json(delgetUser)
        console.log(delgetUser)
    }
    catch(err){
        res.send(" this User not found ")
    }
})

const blockUser=asyncHandler(async(req,res)=>{
 
    const {id}=req.params
    try{

        const blockUser =await User.findByIdAndUpdate(id,{
            isBlocked:true
        },{
        new:true}
        )
      res.json({
        massage:"user blocked"
      })  
    }catch(err){
         res.send(" this User not found ")
    }

})

const UnblockUser=asyncHandler(async(req,res)=>{
    const {id}=req.params
    try{

        const blockUser =await User.findByIdAndUpdate(id,{
            isBlocked:false
        },{
        new:true}
        )
        res.json({
            massage:"user unblocked"
          })
    }catch(err){
         res.send(" this User not found ")
    }
    
})



module.exports = {createUser,loginUserCtrl,getallUser,getAuser,deleteuser,updateUser,blockUser,UnblockUser}