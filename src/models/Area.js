const mongoose = require("mongoose");
const { Schema } = mongoose;

const AreaSchema = new Schema(
  {
    fullAddress: String,
    type: Number,
    provinceCode: { type: String, required: true },
    districtCode: { type: String, required: true },
    villageCode: { type: String, required: true },
    border: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "border",
      select: false,
    },
    rate:[
      {
        username: { type: String, ref: "User", select: false },
        review_text: String,
      }
    ],

  },
  {
    collection: "areas",
  }
);

AreaSchema.set("timestamps", true);
AreaSchema.indexes(
  { provinceCode: -1, districtCode: -1, villageCode: -1 },
  { unique: true }
);
AreaSchema.indexes({ fullAddress: "text" });

const Area = mongoose.model("areas", AreaSchema);
module.exports = Area;
