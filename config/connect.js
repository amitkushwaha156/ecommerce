const {default:mongoose }= require('mongoose');
mongoose.set('strictQuery', false);
const connect= mongoose.connect(process.env.URL)
.then(()=>{
    console.log("db connection successfully")
}).catch((e)=>{
    console.log("not connectedd")
})

module.exports= connect