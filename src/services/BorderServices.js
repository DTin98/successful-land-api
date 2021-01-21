const Border = require("../models/Border");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  findOneByArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let border = Border.findOne({
          area: new ObjectId(query.area_id),
        }).lean();
        resolve(border);
      } catch (error) {
        reject(error);
      }
    });
  },
  findOneByBorder: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let border = Border.findOne({
          _id: new ObjectId(query.border_id),
        }).lean();
        resolve(border);
      } catch (error) {
        reject(error);
      }
    });
  },
};
