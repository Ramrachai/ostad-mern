const mongoose = require('mongoose');

const productSliderSchema = new mongoose.Schema({
  title: String,
  des: String,
  price: Number,
  img: String,
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
});

const ProductSliderModel = mongoose.model('ProductSlider', productSliderSchema);

module.exports = ProductSliderModel;
