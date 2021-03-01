const mongoose = require("mongoose");
const { Schema } = mongoose;

const AreaFavoriteSchema = new Schema(
  {
    area: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "areas",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      select: false,
    },
  },
  {
    collection: "areas",
  }
);

AreaFavoriteSchema.set("timestamps", true);
AreaFavoriteSchema.indexes(
  { provinceCode: -1, districtCode: -1, villageCode: -1 },
  { unique: true }
);
AreaFavoriteSchema.indexes({ fullAddress: "text" });

const Area = mongoose.model("areas", AreaFavoriteSchema);
module.exports = Area;
