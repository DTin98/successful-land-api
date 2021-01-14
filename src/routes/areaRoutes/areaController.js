const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const AreaServices = require("../../services/AreasServices");
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
};
