const router = require("express").Router();
const RouteConstant = require("../../constant/Routes");
const UtilityController = require("./utilityController");
const Middleware = require("../../middlewares/authMiddleware").checkToken;
const Validation = require("../../validation/AreaValidation");

module.exports = (app) => {
  router.route("/search").get(Validation.search(), UtilityController.search);

  app.use(RouteConstant.UTILITIES, router);
};
