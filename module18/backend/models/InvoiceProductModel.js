const mongoose = require('mongoose');

const invoiceProductSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    invoiceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice',
        required: true,
    },
    qty: Number,
    price: Number,
    color: String,
    size: String,
});

const InvoiceProductModel = mongoose.model('InvoiceProduct', invoiceProductSchema);

module.exports = InvoiceProductModel;
