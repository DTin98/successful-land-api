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
      if (!border)
        return res
          .status(400)
          .send({ statusCode: 400, message: "border is not found", data: "" });
      else return res.status(200).send(border);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send(
          reqResponse.customErrorResponse(500, "Server Error", error.message)
        );
    }
  },
};
