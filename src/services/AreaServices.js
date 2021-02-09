const { select } = require("async");
const Area = require("../models/Area");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  search: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let areas = [];
        areas = Area.find()
          .or([
            { fullAddress: { $regex: query._q, $options: "i" } },
            { fullAddressSearchable: { $regex: query._q, $options: "i" } },
          ])
          .limit(5)
          .select("-createdAt -updatedAt -__v")
          .lean();
        resolve(areas);
      } catch (error) {
        reject(error);
      }
    });
  },
  findOne: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let area = Area.findOne({
          border: new ObjectId(query.border_id),
        }).lean();
        resolve(area);
      } catch (error) {
        reject(error);
      }
    });
  },
};
