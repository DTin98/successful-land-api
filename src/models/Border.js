const mongoose = require("mongoose");
const { Schema } = mongoose;

const BorderSchema = new Schema(
  {
    type: Number,
    properties: Object,
    geometry: Object,
    area: { type: mongoose.Schema.Types.ObjectId, ref: "Area", select: false },
  },
  {
    collection: "borders",
  }
);

BorderSchema.set("timestamps", true);

const Border = mongoose.model("borders", BorderSchema);
module.exports = Border;
