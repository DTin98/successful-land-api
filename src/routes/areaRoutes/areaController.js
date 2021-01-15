const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const AreaServices = require("../../services/AreasServices");
const UserProfileServices = require("../../services/UserProfileServices");
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
      let areas = await AreaServices.search(data, params, query);
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
      let area = await AreaServices.findOne(data, params, query);
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
  addToFavorite: async (req, res) => {
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

      let result = await UserProfileServices.addOneFavoriteArea(
        data,
        params,
        query
      );
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
          return res.status(500).send({ ok: false });
          break;
      }
    }
  },
};
