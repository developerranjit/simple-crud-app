const mongoose = require("mongoose");

const ProductShcema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter your product name"],
    },
    quantity: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    img: {
      type: String,
      require: false
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", ProductShcema);

module.exports = Product;
