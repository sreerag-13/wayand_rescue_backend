const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const app=express()
app.use(cors())
app.use(express.json())
app.post("/adminsignup",(req,res)=>{
res.json({"status":"done"})
})
app.listen(8080,()=>{
    console.log("server start")
})