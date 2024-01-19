const mongoose = require('mongoose')
const schema = new mongoose.Schema(
    {
name:{
    type:String,
    required : true,
},
featured :{ 
 type : Boolean,
 required : true,  
},
Password:{
  type : Number,
  required:true,   
},

  
    }
)


module.exports = mongoose.model("Schema",schema);