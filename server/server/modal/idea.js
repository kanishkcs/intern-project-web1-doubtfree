
const mongoose = require("mongoose");
const {Boolean} = require("webidl-conversions");
const ideas = new mongoose.Schema(

    {
        problem: {type:String, required : true},
        others:{type: String, required: true, },
        benifits:{type:String, required:true,},
        keyfeature:{type:String,required:true,},
        exists: {type:String,required:true,}

    },{timestamps:true}
)

  

module.exports = mongoose.model("Idea",ideas)