var mongoose = require('mongoose'),
Product = mongoose.model('productModel');


exports.getusersproduct = function(req, res) {

  var userId = req.params.userId;
  console.log(userId)

  Product.find({'addedby':userId}, function(err, product) {

    if (err)

      res.send(err);

    res.json(product);

  });

};



