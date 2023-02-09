
const mongoose = require("mongoose");
const {Boolean} = require("webidl-conversions");
const users = new mongoose.Schema(

    {
        name: {type:String, required : true},
        mobile:{type: Number, required: true, unique:true},
        email:{type:String, required:true, unique:true},
        password:{type:String,required:true,unique:true},
        

    },{timestamps:true}
)

module.exports = mongoose.model("User",users)