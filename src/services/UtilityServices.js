const { select } = require("async");
const Utility = require("../models/Utility");
const BorderServices = require("../services/BorderServices");
const { ObjectId } = require("mongoose").Types;
const _ = require("lodash");

module.exports = {
  search: async (data, params, query) => {
    let _limit = +query._limit || 0;
    let borders = query.borders || null;
    let area_id = query.area_id || null;
    let db_query = {};
    db_query.category = query.category;

    return new Promise(async (resolve, reject) => {
      let utilities = [];
      try {
        if (area_id) {
          let border = await BorderServices.findOneByArea(data, params, query);
          if (!border) throw new Error("border is not found");
          else {
            db_query.gps = { $geoWithin: { $geometry: border.geometry } };
          }
        } else if (borders) {
          borders = borders.split(", ");
          db_query.gps = {
            $geoWithin: {
              $box: [
                [parseFloat(borders[1]), parseFloat(borders[0])],
                [parseFloat(borders[3]), parseFloat(borders[2])],
              ],
            },
          };
        }

        utilities = Utility.find(db_query)
          .limit(_limit)
          .select("hash gps category")
          .lean();
        resolve(utilities);
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
