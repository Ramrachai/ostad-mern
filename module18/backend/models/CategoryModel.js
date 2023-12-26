const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryImg: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
