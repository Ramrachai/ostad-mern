const mongoose = require('mongoose');

const productDetailsSchema = new mongoose.Schema({
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    des: String,
    color: String,
    size: String,
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
});

const ProductDetailsModel = mongoose.model('ProductDetails', productDetailsSchema);

module.exports = ProductDetailsModel;
