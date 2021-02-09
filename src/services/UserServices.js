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
  addOneFavoriteArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let area = await Area.findOne({ _id: data.areaId });
        if (!area) reject(new Error("area is not existed"));

        await User.updateOne(
          {
            $or: [{ username: data.username }, { email: data.email }],
          },
          { $addToSet: { favoriteAreas: data.areaId } }
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
    return new Promise(async (resolve, reject) => {
      try {
        await User.updateOne(
          {
            $or: [{ username: data.username }, { email: data.email }],
          },
          { $pullAll: { favoriteAreas: [data.areaId] } }
        )
          .lean()
          .exec()
          .then((user) => {
            resolve(user);
          });
      } catch (error) {
        reject(error);
      }
    });
  },
  addOneRateArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let area = await Area.findOne({ _id: data.areaId });
        if (!area) reject(new Error("area is not existed"));

        await Area.updateOne({
          _id: new ObjectId(data.areaId),
          },{
              $addToSet:{ rate:
                  {
                    username: data.username,
                    review_text: data.review_text,
                  }
              }
          })
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
