const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    uniqe:true
  },
  description: String,
  price: Number,
  discountPercentage: {
    type: Number,
    min: [0, "Wrong Discount"],
    manx: [100, "Wrong "],
  },
  rating: {
    type: Number,
    min: [0, "Wrong  minrating"],
    manx: [5, "Wrong max rating"],
    default:0
  },
  brand: String,
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
