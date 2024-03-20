const mongoose = require("mongoose");

const CarrefourProductsSchema = new mongoose.Schema(
  {
    store: {
      type: String,
    },
    products: {
      type: Array,
    }
  },
  { timestamps: true, versionKey: false }
);

const CarrefourProducts = new mongoose.model("CarrefourProducts", CarrefourProductsSchema);

module.exports = CarrefourProducts;