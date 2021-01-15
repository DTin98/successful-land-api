const userServices = require("../../services/UserServices");
const reqResponse = require("../../helpers/responseHandler");
const { validationResult } = require("express-validator");

module.exports = {
  createUser: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(reqResponse.errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    try {
      let result = await userServices.createUser(data, params, query);
      res
        .status(201)
        .send(
          reqResponse.successResponse(
            201,
            "User Created",
            "User has been created successfully"
          )
        );
    } catch (error) {
      console.error(error);
      res.status(502).send(reqResponse.errorResponse(502));
    }
  },

  updateUser: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(reqResponse.errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    userServices
      .updateUser(data, params, query)
      .then((result) => {
        res
          .status(201)
          .send(
            reqResponse.successResponse(
              201,
              "User Updated",
              "User has been updated successfully"
            )
          );
      })
      .catch((error) => {
        console.error(error);
        res.status(502).send(reqResponse.errorResponse(502));
      });
  },
};
