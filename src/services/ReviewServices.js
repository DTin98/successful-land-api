const ReviewPointModel = require("../models/ReviewPointModel");
const ReviewTextModel = require("../models/ReviewTextModel");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  addReviewPoint: async (data, params, query, userid) => {
    return new Promise(async (resolve, reject) => {
      try {
        var temp = 0;
        var a = await ReviewPointModel.updateOne({
          area_id: data.area_id,
          user_id: userid,
        },{user_id: userid,})
        //console.log(a);
        if(a.n == 0){
          temp = 1
        }
        
        if(temp == 1)
        {  
          let ketqua = ReviewPointModel.create({
            point: data.point,
            khongkhi_text: data.khongkhi_text,
            khongkhi_point: data.khongkhi_point,
            giaothong_text: data.giaothong_text,
            giaothong_point: data.giaothong_point,
            ngap_text: data.ngap_text,
            ngap_point: data.ngap_point,
            anninh_text: data.anninh_text,
            anninh_point: data.anninh_point,
            area_id: data.area_id,
            user_id: userid,
          });
          resolve(ketqua);
        }
        else{
          let ketqua = ReviewPointModel.updateOne({
            area_id: data.area_id,
            user_id: userid,
          },{
            point: data.point,
            khongkhi_text: data.khongkhi_text,
            khongkhi_point: data.khongkhi_point,
            giaothong_text: data.giaothong_text,
            giaothong_point: data.giaothong_point,
            ngap_text: data.ngap_text,
            ngap_point: data.ngap_point,
            anninh_text: data.anninh_text,
            anninh_point: data.anninh_point,
          });
          resolve(ketqua);
        }
      } catch (error) {
        reject(error);
      }
    });
  },

  getReviewPointByArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let ketqua = ReviewPointModel.find({
          //$or: [{ area_id: query.area_id }, { user_id: query.user_id }],
          area_id: query.area_id
        }).lean();
        resolve(ketqua);
      } catch (error) {
        reject(error);
      }
    });
  },

  getReviewPointByUser: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let ketqua = ReviewPointModel.find({
          //$or: [{ area_id: query.area_id }, { user_id: query.user_id }],
          user_id: query.user_id
        }).lean();
        resolve(ketqua);
      } catch (error) {
        reject(error);
      }
    });
  },

  deleteReviewPoint: async (data, params, query, userid) => {
    return new Promise(async (resolve, reject) => {
      try {
        let ketqua = ReviewPointModel.deleteOne({
          area_id: data.area_id,
          user_id: userid,
        }).lean();
        resolve(ketqua);
      } catch (error) {
        reject(error);
      }
    });
  },
 
  addReviewText: async (data, params, query, userid) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(data);
        let ketqua = ReviewTextModel.create({
          review_text: data.review_text,
          area_id: data.area_id,
          user_id: userid,
        });
        resolve(ketqua);
      } catch (error) {
        reject(error);
      }
    });
  },

  getReviewTextByArea: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let ketqua = ReviewTextModel.find({
           //$or: [{ area_id: query.area_id }, { user_id: query.user_id }],
          area_id: query.area_id
        });
        resolve(ketqua);
      } catch (error) {
        reject(error);
      }
    });
  },

  getReviewTextByUser: async (data, params, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let ketqua = ReviewTextModel.find({
           //$or: [{ area_id: query.area_id }, { user_id: query.user_id }],
          user_id: query.user_id
        });
        resolve(ketqua);
      } catch (error) {
        reject(error);
      }
    });
  },

  deleteReviewText: async (data, params, query, userid) => {
    return new Promise(async (resolve, reject) => {
      try {
        let ketqua = ReviewTextModel.deleteOne({
          area_id: data.area_id,
          user_id: userid,
        }).lean();
        resolve(ketqua);
      } catch (error) {
        reject(error);
      }
    });
  },

 
};