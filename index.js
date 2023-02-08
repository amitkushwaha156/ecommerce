const express =require("express")
const app=express()
const dotenv=require("dotenv").config()
const PORT=process.env.PORT || 4000
const auth = require("./routes/Authroutes")
const bodyParser = require("body-parser")
const connect= require('./config/connect')
const {notfound,errorhndler}=require('./middelweres/errorHandler')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false,
}))

app.use(express.json())
app.use('/api/user',auth)

app.use(notfound)
app.use(errorhndler)

app.listen(PORT,()=>{
    console.log(`server runing ${PORT}`)
   
})
