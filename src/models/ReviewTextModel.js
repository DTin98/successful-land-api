const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReivewTextSchema = new Schema(
  {
    review_text: String,
    area_id: { type: String, ref: "Area", select: true },
    user_id: { type: String, ref: "User", select: true },
  },
  {
    collection: "review_text",
  }
);

const ReivewTextModel = mongoose.model("review_text", ReivewTextSchema);
module.exports = ReivewTextModel;
