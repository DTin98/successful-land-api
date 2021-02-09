const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewPointSchema = new Schema(
  {
    point: Number,
    khongkhi_text: String,
    khongkhi_point: Number,
    giaothong_text:String,
    giaothong_point:Number,
    ngap_text: String,
    ngap_point: Number,
    anninh_text: String,
    anninh_point: Number,
    area_id: { type: String, ref: "Area", select: true },
    user_id: { type: String, ref: "User", select: true },
  },
  {
    collection: "review_point",
  }
);

const ReviewPointModel = mongoose.model("review_point", ReviewPointSchema);
module.exports = ReviewPointModel;
