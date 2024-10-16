const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of the item is required."],
    unique: [true, "This product already exists."],
  },

  price: {
    type: Number,
    required: [true, "Price of the product is required."],
    min: 0,
    max: 5000,
  },
  size: {
    type: String,
    required: [true, "Please mention the size of the product."],
  },
  image: {
    type: String,
    required: [true, "Please provide the image of the product."],
  },
});


const Menu = mongoose.model('menu' , menuSchema)

module.exports = {
    Menu
}