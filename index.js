const express=require("express");
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
const app=express();
const port=4000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
const MovieRouter=require("./Router/MovieRouter")
mongoose.connect('mongodb://localhost:27017/Movie').then(()=>{
    console.log("database in connected😍🤞🤗🤦‍♀️");
}).catch((err)=>{
    console.log(err);
})
app.use("/api/movie",MovieRouter)


app.listen(port,()=>{console.log(`listen port number🤞😍💕 ${port}`)})