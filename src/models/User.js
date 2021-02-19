const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    block: { type: Boolean, default: false },
    provider: { type: String, default: "local" },
    resetPassToken: String,
    name: String,
    picture: String,
    favoriteAreas: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Area", select: false },
    ],
  },
  { collection: "users" }
);

UserSchema.set("timestamps", true);

const User = mongoose.model("User", UserSchema);
module.exports = User;
