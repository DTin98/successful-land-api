const router = require("express").Router();
const RouteConstant = require("../../constant/Routes");
const AreasController = require("./areaController");
const Middleware = require("../../middlewares/authMiddleware").checkToken;
const Validation = require("../../validation/AreaValidation");

module.exports = (app) => {
  router.route("/search").get(Validation.search(), AreasController.search);

  app.use(RouteConstant.AREAS, router);
};
