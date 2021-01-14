const { select } = require("async");
const Area = require("../models/Area");

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
};
