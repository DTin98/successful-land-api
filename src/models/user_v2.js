const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Datn123@cluster0.0g1dc.mongodb.net/NODE_DB",
  { useNewUrlParser: true }
);

const Schema = mongoose.Schema;

const user = new Schema(
  {
    block: Boolean,
    provider: String,
    email: String,
    password: String,
    createdAt: Date,
    _v: Number,
    dsAreaLike: Array,
  },
  {
    collection: "user",
  }
);

const userModel = mongoose.model("user", user);

module.exports = userModel;
