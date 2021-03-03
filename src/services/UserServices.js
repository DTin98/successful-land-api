const User = require("../models/User");
const Area = require("../models/Area");
const { ObjectId } = require("mongoose").Types;
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
        .select("-favoriteAreas +password")
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
  getFavoriteArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await User.findOne({
          $or: [{ username: data.username }, { email: data.email }],
        });
        if (user) resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  },
  addOneFavoriteArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let area = await Area.findOne({ _id: data.areaId });
        if (!area) reject(new Error("area is not existed"));

        await User.updateOne(
          {
            $or: [{ username: data.username }, { email: data.email }],
          },
          { $addToSet: { favoriteAreas: area } }
        )
          .lean()
          .exec()
          .then((result) => {
            resolve(result);
          });
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteOneFavoriteArea: async (data, params, query) => {
    console.log(
      "🚀 ~ file: UserServices.js ~ line 77 ~ deleteOneFavoriteArea: ~ data",
      data
    );
    return new Promise(async (resolve, reject) => {
      try {
        await User.updateOne(
          {
            $or: [{ username: data.username }, { email: data.email }],
          },
          { $pull: { favoriteAreas: { _id: ObjectId(data.areaId) } } }
        )
          .lean()
          .exec()
          .then((user) => {
            resolve(user);
          });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },
  addOneRateArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let area = await Area.findOne({ _id: data.areaId });
        if (!area) reject(new Error("area is not existed"));

        await Area.updateOne(
          {
            _id: new ObjectId(data.areaId),
          },
          {
            $addToSet: {
              rate: {
                username: data.username,
                review_text: data.review_text,
              },
            },
          }
        )
          .lean()
          .exec()
          .then((result) => {
            resolve(result);
          });
      } catch (error) {
        reject(error);
      }
    });
  },
  findOneAndUpdate: async (data, update) => {
    return new Promise(async (resolve, reject) => {
      try {
        await User.findOneAndUpdate(data, update, { upsert: true })
          .lean()
          .exec()
          .then((result) => {
            resolve(result);
          });
      } catch (error) {
        reject(error);
      }
    });
  },
};
