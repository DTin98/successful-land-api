const router = require("express").Router();
const RouteConstant = require("../../constant/Routes");
const PriceController = require("./priceController");
const Middleware = require("../../middlewares/authMiddleware").checkToken;
const Validation = require("../../validation/BorderValidation");

module.exports = (app) => {
  router
    .route("/getBieuDo")
    .get(PriceController.getBieuDo);

  app.use(RouteConstant.PRICE, router);
};
