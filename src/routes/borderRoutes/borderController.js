const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const BorderServices = require("../../services/BorderServices");
const _ = require("lodash");

module.exports = {
  getByArea: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      let border = await BorderServices.findOne(data, params, query);
      if (!border) throw new Error("border is not found");
      return res.status(200).send(border);
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "border is not found":
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
