var mongoose = require('mongoose');
const db = require("../models");
//Wishlist = mongoose.model("wishlist")
const wishlistmodel = require('../models/wishlist');

exports.addtowishlist = function(req, res) {
  console.log(req)
  var userId = req.userId;
  var productid = req.params.pid

  console.log("userid is",userId)
  
  var newwishlist = {
    user: userId,
    product : productid
  };
  var wishlist = wishlistmodel(newwishlist)
  wishlist.save((err, product) =>{

    if (err){

        res.status(500).send({ message: err });
        return;
    }
    res.send({ message: "item added to wishlist!" });

    

  });


 

};
exports.getwishlistitems = function(req, res) {

  var userId = req.params.userId;
  console.log(userId)

  Wishlist.find({'user':userId}, function(err, product) {

    if (err)

      res.send(err);

    res.json(product);

  });

};




