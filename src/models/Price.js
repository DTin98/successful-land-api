const mongoose = require("mongoose");
const { Schema } = mongoose;

const PriceSchema = new Schema(
  {
    time: String,
    price: Number,
    provinceCode: String,
    districtCode: String,
    villageCode: String,
    category: String,
    unit: String,
    year: Number,
  },
  {
    collection: "price_village_v3",
  }
);

//BorderSchema.set("timestamps", true);

const PriceModel = mongoose.model("Price", PriceSchema);
module.exports = PriceModel;
