const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const ReviewServices = require("../../services/ReviewServices");
const _ = require("lodash");

module.exports = {
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
      let ketqua = await ReviewServices.addReviewPoint(data, params, query, user_id);
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send({ketqua: "add thanh cong"});
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
      let ketqua = await ReviewServices.getReviewPointByArea(data, params, query);
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
      let ketqua = await ReviewServices.getReviewPointByUser(data, params, query);
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
      let ketqua = await ReviewServices.deleteReviewPoint(data, params, query, user_id);
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send({kq: "xoa thanh cong"});
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
      let ketqua = await ReviewServices.addReviewText(data, params, query, user_id);
      if (!ketqua) throw new Error("add khong thanh cong");
      return res.status(200).send({ketqua: "add thanh cong"});
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
      let ketqua = await ReviewServices.getReviewTextByArea(data, params, query);
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
      let ketqua = await ReviewServices.getReviewTextByUser(data, params, query);
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
      let ketqua = await ReviewServices.deleteReviewText(data, params, query, user_id);
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
