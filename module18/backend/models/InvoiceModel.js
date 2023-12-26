const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    payable: Number,
    cus_details: Object,
    ship_details: Object,
    tran_id: String,
    val_id: String,
    payment_status: String,
    delivery_status: String,
    total: Number,
    vat: Number,
});

const InvoiceModel = mongoose.model('Invoice', invoiceSchema);

module.exports = InvoiceModel;
