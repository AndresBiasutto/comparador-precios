const mongoose = require("mongoose");

const DiaProductsSchema = new mongoose.Schema(
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

const DiaProducts = new mongoose.model("DiaProducts", DiaProductsSchema);

module.exports = DiaProducts;