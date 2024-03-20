const mongoose = require("mongoose");

const CotoProductsSchema = new mongoose.Schema(
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

const CotoProducts = new mongoose.model("CotoProducts", CotoProductsSchema);

module.exports = CotoProducts;