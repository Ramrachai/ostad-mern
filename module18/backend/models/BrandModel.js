const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
    },
    brandImg: {
        type: String,
        required: true,
    },
});

const BrandModel = mongoose.model('Brand', brandSchema);

module.exports = BrandModel;
