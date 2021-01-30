const { select } = require("async");
const Utility = require("../models/Utility");
const BorderServices = require("../services/BorderServices");
const { ObjectId } = require("mongoose").Types;
const _ = require("lodash");

module.exports = {
  search: async (data, params, query) => {
    let _limit = +query._limit || 0;
    let borders = query.borders || null;
    let border_id = query.border_id || null;
    let page = query.page;
    let db_query = {};
    db_query.category = query.category;

    return new Promise(async (resolve, reject) => {
      let utilities = [];
      try {
        if (border_id) {
          let border = await BorderServices.findOneByBorder(data, params, query);

          if (!border) 
              throw new Error("border is not found");
          else {
            db_query.gps = { $geoWithin: { $geometry: border.geometry } };
          }
        } else if (borders) {
          borders = borders.split(",");
          //borders.splice(1);
          //console.log(borders1);
          //console.log(borders[1]);
          //console.log(typeof(borders[1]));
          
          db_query.gps = {
            $geoWithin: {
              $box: [
                [parseFloat(borders[1]), parseFloat(borders[0])],
                [parseFloat(borders[3]), parseFloat(borders[2])],
              ],
            },
          };
        }

        //find utilities
        if(page)
        {
            page = parseInt(page);
            var skip = (page - 1)*_limit;

            utilities = Utility.find(db_query)
            .skip(skip)
            .limit(_limit)
            .select("hash gps category address title")
            .lean();
          resolve(utilities);
        }
        else{
          utilities = Utility.find(db_query)
          .limit(_limit)
          .select("hash gps category address title")
          .lean();
        resolve(utilities);
        }
       
      } catch (error) {
        reject(error);
      }
    });
  },
  count: async (data, params, query) => {
    let _limit = +query._limit || 0;
    let borders = query.borders || null;
    let area_id = query.border_id || null;
    let db_query = {};
    db_query.category = query.category;

    return new Promise(async (resolve, reject) => {
      let utilities = [];
      try {
        if (area_id) {
          let border = await BorderServices.findOneByBorder(data, params, query);
          if (!border) throw new Error("border is not found");
          else {
            db_query.gps = { $geoWithin: { $geometry: border.geometry } };
          }
        } else if (borders) {
          borders = borders.split(",");
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
          .limit(_limit); 
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
