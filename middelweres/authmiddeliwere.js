const User = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddeliWere = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers?.authorization?.split(" ")[1];

    try {
        if(token){
                   const decoded = jwt.verify(token, process.env.JWT_SECRET);
                   const user=await User.findById(decoded?.id);
                   req.user=user;
                   next()
        }
 
    } catch (err) {
      res.send("token error");
    }
  }else{
    res.status(401);
    throw new Error("No token provided");
  }
});

const isAdmin=asyncHandler(async(req, res) => {

  const {email}  = req.user;
const adminuser=await User.findOne({email})
if(adminuser.role !== "admin"){
  throw new Error("you must be an admin")
}else{
  next()
}

 
})



module.exports ={ authMiddeliWere ,isAdmin};
