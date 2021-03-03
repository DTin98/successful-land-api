const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const AreaServices = require("../../services/AreaServices");
const userServices = require("../../services/UserServices");
const axios = require("axios");
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

    // try {
    //   let areas = [];
    //   let response = await axios.post(
    //     "http://vietnamland.me:8000/search/autocomplete/_search",
    //     {
    //       size: query._limit || 5,
    //       query: {
    //         multi_match: {
    //           query: query._q,
    //           type: "bool_prefix",
    //           fields: [
    //             "fullAddress",
    //             "fullAddressSearchable",
    //             "fullAddressSearchable._2gram",
    //             "fullAddressSearchable._3gram",
    //           ],
    //         },
    //       },
    //     }
    //   );
    //   if (response.status === 200)
    //     response.data.hits.hits.map((v) => {
    //       areas.push({
    //         _id: v._source.areaId,
    //         fullAddress: v._source.fullAddress,
    //         border: v._source.border.$oid,
    //       });
    //     });

    //   return res.status(200).send(areas);
    // } catch (error) {
    //   return res.status(500).send(error);
    // }
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
  getFavorite: async (req, res) => {
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      //get username and email of user
      data.username = req.decoded.username || "";
      data.email = req.decoded.email || "";

      const result = await userServices.getFavoriteArea(data, params, query);
      return res.status(200).send(result);
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

      const userData = await userServices.deleteOneFavoriteArea(
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
          return res.status(400).send(error);
          break;
      }
    }
  },
  addRate: async (req, res) => {
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

      await userServices.addOneRateArea(data, params, query);
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
