const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productname: { type:String,required:true},
    description:{type:String,required:true},
    rentperday:{type:Number,required:true},
    rentperweek:{type:Number},
    image:{type:String,required:true},
    addedby: { type:mongoose.Schema.Types.ObjectId,ref:"User"},
    addedon:{type:Date,default:Date.now},
    address:{type:String},
    city:{type:String},
    district:{type:String},
    state:{type:String},
    category:{type:String}
});

const productModel = mongoose.model('productModel',productSchema)

module.exports = productModel;
