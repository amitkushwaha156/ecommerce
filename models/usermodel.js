const mongoose = require('mongoose'); // Erase if already required
const bcrypt=require('bcrypt'); // Erase if
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
       
       
    },
    Lastname:{
        type:String,
        required:true,
    
      
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:Number,
        required:true,
       
    },
    password:{
        type:String,
        required:true,
    },
});

userSchema.pre("save",async function(next){
  const salt= await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt)

})

userSchema.methods.isPasswordMatched=async function(enteredPassword)
{
    return await bcrypt.compare(enteredPassword,this.password)
}
//Export the model
module.exports = mongoose.model('User', userSchema);

