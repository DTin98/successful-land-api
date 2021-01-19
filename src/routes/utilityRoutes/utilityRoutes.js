const router = require("express").Router();
const RouteConstant = require("../../constant/Routes");
const UtilityController = require("./utilityController");
const Middleware = require("../../middlewares/authMiddleware").checkToken;
const Validation = require("../../validation/UtilityValidation");

module.exports = (app) => {
  router.route("/search").get(Validation.search(), UtilityController.search);
  router.route("/count").get(Validation.search(), UtilityController.count);

  app.use(RouteConstant.UTILITIES, router);
};
