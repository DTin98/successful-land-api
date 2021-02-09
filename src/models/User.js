const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    resetPassToken: String,
    block: { type: Boolean, default: false },
    provider: { type: String, default: "local" },
    favoriteAreas: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Area", select: false },
    ],
  },
  { collection: "users" }
);

UserSchema.set("timestamps", true);

const User = mongoose.model("User", UserSchema);
module.exports = User;
