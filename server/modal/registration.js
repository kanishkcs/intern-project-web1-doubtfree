
const mongoose = require("mongoose");
const {Boolean} = require("webidl-conversions");
const UserSchema = new mongoose.Schema(

    {
        name: {type:String, required : true},
        username:{type: String, required: true, unique:true},
        email:{type:String, required:true, unique:true},
        password:{type:String,required:true,unique:true},
        

    },{timestamps:true}
)

module.exports = mongoose.model("User",UserSchema)