import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    price: Number,
    date: Date
  });

const SalesModel = mongoose.model('Sales', salesSchema);

export default SalesModel