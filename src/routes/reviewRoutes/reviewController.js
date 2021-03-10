const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const ReviewServices = require("../../services/ReviewServices");
const ReviewPointModel = require("../../models/ReviewPointModel");
const _ = require("lodash");

module.exports = {
  getReview: async (req, res) => {
    console.log(
      "🚀 ~ file: reviewController.js ~ line 9 ~ getReview: ~ req",
      req.query.area_id
    );
    const area_id = req.query.area_id;
    try {
      const result = await ReviewPointModel.find({
        area_id: area_id,
      }).lean();
      console.log(
        "🚀 ~ file: reviewController.js ~ line 13 ~ getReview: ~ result",
        result
      );

      let khongkhi_sum = 0;
      let khongkhi_count = 0;
      let giaothong_sum = 0;
      let giaothong_count = 0;
      let ngap_sum = 0;
      let ngap_count = 0;
      let annninh_sum = 0;
      let annninh_count = 0;

      result.map((i) => {
        if (i.khongkhi_point) {
          khongkhi_sum += i.khongkhi_point;
          khongkhi_count++;
        }
        if (i.giaothong_point) {
          giaothong_sum += i.giaothong_point;
          giaothong_count++;
        }
        if (i.ngap_point) {
          ngap_sum += i.ngap_point;
          ngap_count++;
        }
        if (i.anninh_point) {
          annninh_sum += i.anninh_point;
          annninh_count++;
        }
      });

      return res.status(200).send([
        {
          area_id: req.query.area_id,
          khongkhi_point: khongkhi_sum / khongkhi_count,
          giaothong_point: giaothong_sum / giaothong_count,
          ngap_point: ngap_sum / ngap_count,
          anninh_point: annninh_sum / annninh_count,
        },
      ]);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  },
  addReviewPoint: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    let user_id = req.decoded._id;

    try {
      let ketqua = await ReviewServices.addReviewPoint(
        data,
        params,
        query,
        user_id
      );
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send({ ketqua: "add thanh cong" });
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "ket qua k thanh cong":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;

        default:
          return res
            .status(500)
            .send(
              reqResponse.customErrorResponse(
                500,
                "Server Error",
                error.message
              )
            );
          break;
      }
    }
  },

  getReviewPointByArea: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      let ketqua = await ReviewServices.getReviewPointByArea(
        data,
        params,
        query
      );
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send(ketqua);
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "ket qua k thanh cong":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;

        default:
          return res
            .status(500)
            .send(
              reqResponse.customErrorResponse(
                500,
                "Server Error",
                error.message
              )
            );
          break;
      }
    }
  },

  getReviewPointByUser: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      let ketqua = await ReviewServices.getReviewPointByUser(
        data,
        params,
        query
      );
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send(ketqua);
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "ket qua k thanh cong":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;

        default:
          return res
            .status(500)
            .send(
              reqResponse.customErrorResponse(
                500,
                "Server Error",
                error.message
              )
            );
          break;
      }
    }
  },

  deleteReviewPoint: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    let user_id = req.decoded._id;

    try {
      let ketqua = await ReviewServices.deleteReviewPoint(
        data,
        params,
        query,
        user_id
      );
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send({ kq: "xoa thanh cong" });
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "ket qua k thanh cong":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;

        default:
          return res
            .status(500)
            .send(
              reqResponse.customErrorResponse(
                500,
                "Server Error",
                error.message
              )
            );
          break;
      }
    }
  },

  addReviewText: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    let user_id = req.decoded._id;

    try {
      let ketqua = await ReviewServices.addReviewText(
        data,
        params,
        query,
        user_id
      );
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send({ ketqua: "add thanh cong" });
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "ket qua k thanh cong":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;

        default:
          return res
            .status(500)
            .send(
              reqResponse.customErrorResponse(
                500,
                "Server Error",
                error.message
              )
            );
          break;
      }
    }
  },

  getReviewTextByArea: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      let ketqua = await ReviewServices.getReviewTextByArea(
        data,
        params,
        query
      );
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send(ketqua);
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "ket qua k thanh cong":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;

        default:
          return res
            .status(500)
            .send(
              reqResponse.customErrorResponse(
                500,
                "Server Error",
                error.message
              )
            );
          break;
      }
    }
  },

  getReviewTextByUser: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      let ketqua = await ReviewServices.getReviewTextByUser(
        data,
        params,
        query
      );
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send(ketqua);
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "ket qua k thanh cong":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;

        default:
          return res
            .status(500)
            .send(
              reqResponse.customErrorResponse(
                500,
                "Server Error",
                error.message
              )
            );
          break;
      }
    }
  },

  deleteReviewText: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    let user_id = req.decoded._id;

    try {
      let ketqua = await ReviewServices.deleteReviewText(
        data,
        params,
        query,
        user_id
      );
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send(ketqua);
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "ket qua k thanh cong":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;

        default:
          return res
            .status(500)
            .send(
              reqResponse.customErrorResponse(
                500,
                "Server Error",
                error.message
              )
            );
          break;
      }
    }
  },
};
