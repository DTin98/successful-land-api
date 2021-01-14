import mongoose from "mongoose";
const { Schema } = mongoose;

const Role = new Schema({
  name: { type: String, required: true },
  description: String,
  type: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = { User: mongoose.model("User", User) };
