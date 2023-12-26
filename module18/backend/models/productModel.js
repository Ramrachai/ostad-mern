const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    shortDes: String,
    price: Number,
    discount: Number,
    discountPrice: Number,
    image: String,
    star: Number,
    stock: Number,
    remark: String,
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    brandID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
    },
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
