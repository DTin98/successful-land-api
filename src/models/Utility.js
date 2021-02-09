const mongoose = require("mongoose");
const { Schema } = mongoose;

const UtilitySchema = new Schema(
  {
    gps: Object,
    hash: String,
    title: String,
    brand: String,
    address: String,
    category: String,
    rating: Number,
    description: String,
  },
  {
    collection: "utilities",
  }
);

UtilitySchema.set("timestamps", true);
UtilitySchema.indexes({ gps: "2dsphere" });

const Utility = mongoose.model("utilities", UtilitySchema);
module.exports = Utility;
