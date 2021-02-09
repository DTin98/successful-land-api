const PriceModel = require("../models/Price");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  findOneByArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let price = PriceModel.find({
          year: query.time,
          provinceCode: query.provinceCode,
          districtCode: query.districtCode,
          villageCode: query.villageCode,
          category: query.category
        }).lean();
        resolve(price);
      } catch (error) {
        reject(error);
      }
    });
  },
 
};
