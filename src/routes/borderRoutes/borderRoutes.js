const router = require("express").Router();
const RouteConstant = require("../../constant/Routes");
const BorderController = require("./borderController");
const Middleware = require("../../middlewares/authMiddleware").checkToken;
const Validation = require("../../validation/BorderValidation");

module.exports = (app) => {
  router
    .route("/getByArea")
    .get(Validation.getByArea(), BorderController.getByArea);

  app.use(RouteConstant.BORDERS, router);
};
