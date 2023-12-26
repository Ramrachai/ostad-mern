const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cus_add: String,
    cus_city: String,
    cus_country: String,
    cus_fax: String,
    cus_name: String,
    cus_phone: String,
    cus_postcode: String,
    cus_state: String,
    ship_add: String,
    ship_city: String,
    ship_country: String,
    ship_name: String,
    ship_phone: String,
    ship_postcode: String,
    ship_state: String,
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
