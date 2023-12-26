const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  color: String,
  price: Number,
  qty: Number,
  size: String,
});

const CartModel = mongoose.model('Cart', cartSchema);

module.exports = CartModel;
