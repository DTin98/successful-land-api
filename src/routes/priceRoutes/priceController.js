const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const PriceServices = require("../../services/PriceServices");
const _ = require("lodash");

module.exports = {
  getBieuDo: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      let dataPrice = await PriceServices.findOneByArea(data, params, query);
      if (!dataPrice) throw new Error("Price is not found");
      return res.status(200).send(dataPrice);
    } catch (error) {
      console.error(error);
      switch (error.message) {
        case "Price is not found":
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
