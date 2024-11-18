const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required."],
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
    maxlength: [500, "Description should not exceed 500 characters."],
  }
},
{
  timestamps: true,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;