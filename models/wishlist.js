const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref: "User"},
    product: {type: mongoose.Schema.Types.ObjectId,ref: "productModel"}
});

const wishlist = mongoose.model('wishlist',wishlistSchema)

module.exports = wishlist;
