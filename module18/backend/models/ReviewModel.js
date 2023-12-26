const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
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
    des: String,
    rating: Number,
});

const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports = ReviewModel;
