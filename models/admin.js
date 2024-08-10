const mongoose =require("mongoose")
const adminSchema =mongoose.Schema(
    {

        Username:String,
        Password:String
    }
)
const adminModel=mongoose.model("admindata",adminSchema)
module.exports=adminModel
