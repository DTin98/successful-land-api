import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
  identifier: String,
  email: String,
  password: String,
  resetPassToken: String,
  resetPassStatus: Boolean,
  provider: String,
  role: ObjectId,
});

module.exports = mongoose.model("User", User);
