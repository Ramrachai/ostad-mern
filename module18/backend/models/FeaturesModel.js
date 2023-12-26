const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: String,
});

const FeaturesModel = mongoose.model('Features', featuresSchema);

module.exports = FeaturesModel;
