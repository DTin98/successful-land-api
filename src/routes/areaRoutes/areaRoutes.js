const router = require("express").Router();
const RouteConstant = require("../../constant/Routes");
const AreasController = require("./areaController");
const Middleware = require("../../middlewares/authMiddleware").checkToken;
const Validation = require("../../validation/AreaValidation");

module.exports = (app) => {
  router.route("/search").get(Validation.search(), AreasController.search);
  router
    .route("/getByBorder")
    .get(Validation.getByBorder(), AreasController.getByBorder);

  router
    .route("/addFavorite")
    .post(Validation.addFavorite(), Middleware, AreasController.addFavorite);

  router
    .route("/deleteFavorite")
    .post(
      Validation.deleteFavorite(),
      Middleware,
      AreasController.deleteFavorite
    );

  app.use(RouteConstant.AREAS, router);
};
