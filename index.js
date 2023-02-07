const express =require("express")
const app=express()
const dotenv=require("dotenv").config()
const PORT=process.env.PORT || 4000
const auth = require("./routes/Authroutes")
const bodyParser = require("body-parser")
const connect= require('./config/connect')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false,
}))

app.use('/api/user',auth)
app.get('/',(res,req)=>{
    
})

app.listen(PORT,()=>{
    console.log(`server runing ${PORT}`)
   
})
