/*const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    sale:{type:Array, default: []},
    messages:{type:Array,default: []},

})
const userModel = mongoose.model('userModel',userSchema);
module.exports = userModel; */
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
