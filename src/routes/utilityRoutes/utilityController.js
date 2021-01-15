const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const UtilityServices = require("../../services/AreaServices");
const userServices = require("../../services/UserServices");
const _ = require("lodash");

module.exports = {
  search: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      let areas = await UtilityServices.search(data, params, query);
      return res.status(200).send(areas);
    } catch (error) {
      return res
        .status(500)
        .send(
          reqResponse.customErrorResponse(500, "Server Error", error.message)
        );
    }
  },
  getByBorder: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      let area = await UtilityServices.findOne(data, params, query);
      if (!area) throw new Error("area is not found");
      return res.status(200).send(area);
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "area is not found":
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
  addFavorite: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      //get username and email of user
      data.username = req.decoded.username || "";
      data.email = req.decoded.email || "";

      await userServices.addOneFavoriteArea(data, params, query);
      return res.status(200).send({ ok: false });
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "area is not found":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;
        default:
          return res.status(400).send(error);
          break;
      }
    }
  },
  deleteFavorite: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      //get username and email of user
      data.username = req.decoded.username || "";
      data.email = req.decoded.email || "";

      await userServices.deleteOneFavoriteArea(data, params, query);
      return res.status(200).send({ ok: true });
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "area is not found":
          return res
            .status(400)
            .send(
              reqResponse.customErrorResponse(400, "Invalid", error.message)
            );
          break;
        default:
          return res.status(400).send(error);
          break;
      }
    }
  },
};
