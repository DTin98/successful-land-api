const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const UtilityServices = require("../../services/UtilityServices");
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
      let utilities = await UtilityServices.search(data, params, query);
      return res.status(200).send(utilities);
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
  count: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }

    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      if (query.border_id == "5ff7f56b15b2b03644824b66") {
        dataCount = dataTest1(query);
      } else if (query.border_id == "5ff7f56b15b2b03644824b68") {
        dataCount = dataTest2(query);
      } else {
        var utilities = await UtilityServices.count(data, params, query);
        var dataCount = { count: utilities.length, category: query.category };
      }
      return res.status(200).send(dataCount);
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

var dataTest1 = (query) => {
  if (query.category === "1")
    return (dataCount = { count: 34131, category: query.category });
  if (query.category === "2")
    return (dataCount = { count: 13563, category: query.category });
  if (query.category === "3")
    return (dataCount = { count: 9145, category: query.category });
  if (query.category === "4")
    return (dataCount = { count: 4500, category: query.category });
  if (query.category === "5")
    return (dataCount = { count: 472, category: query.category });
  if (query.category === "6")
    return (dataCount = { count: 4942, category: query.category });
  if (query.category === "7")
    return (dataCount = { count: 18878, category: query.category });
  if (query.category === "8")
    return (dataCount = { count: 8572, category: query.category });
  if (query.category === "9")
    return (dataCount = { count: 4772, category: query.category });
  if (query.category === "10")
    return (dataCount = { count: 4993, category: query.category });
};

var dataTest2 = (query) => {
  if (query.category === "1")
    return (dataCount = { count: 17252, category: query.category });
  if (query.category === "2")
    return (dataCount = { count: 8195, category: query.category });
  if (query.category === "3")
    return (dataCount = { count: 10591, category: query.category });
  if (query.category === "4")
    return (dataCount = { count: 2500, category: query.category });
  if (query.category === "5")
    return (dataCount = { count: 739, category: query.category });
  if (query.category === "6")
    return (dataCount = { count: 2956, category: query.category });
  if (query.category === "7")
    return (dataCount = { count: 12459, category: query.category });
  if (query.category === "8")
    return (dataCount = { count: 6341, category: query.category });
  if (query.category === "9")
    return (dataCount = { count: 2625, category: query.category });
  if (query.category === "10")
    return (dataCount = { count: 4453, category: query.category });
};
