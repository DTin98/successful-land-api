const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 12;

module.exports = {
  createUser: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const salt = await bcrypt.genSalt(saltRounds);
        data.password = await bcrypt.hash(data.password, salt);
        await User.create(data).then((user) => {
          resolve(user);
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  updateUser: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  },
  findOneUser: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      User.findOne({
        $or: [{ username: data.username }, { email: data.email }],
      })
        .select("-favoriteAreas")
        .lean()
        .exec()
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
