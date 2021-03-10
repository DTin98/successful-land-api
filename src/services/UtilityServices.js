const { select } = require("async");
const Utility = require("../models/Utility");
const BorderServices = require("../services/BorderServices");
const { ObjectId } = require("mongoose").Types;
const _ = require("lodash");

var chu_category;

var xuLycategory = (so_category) => {
  if (so_category == 1) {
    chu_category = { $in: ["Ẩm thực đường phố", "Nhà hàng", "Café"] };
  }
  if (so_category == 2) {
    chu_category = { $in: ["Café", "Cuộc sống về đêm", "Giải trí"] };
  }
  if (so_category == 3) {
    chu_category = { $in: ["Giải trí", "Làm đẹp", "Thể thao"] };
  }
  if (so_category == 4) {
    chu_category = { $in: ["Các cây ATM", "Tài chính"] };
  }
  if (so_category == 5) {
    chu_category = { $in: ["Sức khỏe"] };
  }
  if (so_category == 6) {
    chu_category = { $in: ["Khách sạn và chỗ ở"] };
  }
  if (so_category == 7) {
    chu_category = { $in: ["Mua sắm"] };
  }
  if (so_category == 8) {
    chu_category = { $in: ["Dịch vụ", "Giao thông"] };
  }
  if (so_category == 9) {
    chu_category = { $in: ["Du lịch", "Thắng cảnh", "Tổ chức"] };
  }
  if (so_category == 10) {
    chu_category = { $in: ["Giáo dục"] };
  }
};

module.exports = {
  search: async (data, params, query) => {
    let _limit = +query._limit || 0;
    let borders = query.borders || null;
    let border_id = query.border_id || null;
    let page = query.page;
    let db_query = {};

    so_category = parseInt(query.category);
    // hàm lấy ra category
    xuLycategory(so_category);

    db_query.category = chu_category;

    return new Promise(async (resolve, reject) => {
      let utilities = [];
      try {
        if (border_id) {
          let border = await BorderServices.findOneByBorder(
            data,
            params,
            query
          );

          if (!border) throw new Error("border is not found");
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
        if (page) {
          page = parseInt(page);
          var skip = (page - 1) * _limit;

          utilities = Utility.find(db_query)
            .skip(skip)
            .limit(_limit)
            .select("gps address title img_big -_id")
            .lean();
          resolve(utilities);
        } else {
          utilities = Utility.find(db_query)
            .limit(_limit)
            .select("gps address title img_big -_id")
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
    so_category = parseInt(query.category);
    // hàm lấy ra category
    xuLycategory(so_category);

    db_query.category = chu_category;

    return new Promise(async (resolve, reject) => {
      let utilities = [];
      try {
        if (area_id) {
          let border = await BorderServices.findOneByBorder(
            data,
            params,
            query
          );
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

        utilities = Utility.countDocuments(db_query).lean();
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
