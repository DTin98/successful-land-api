const router = require("express").Router();
const UserProfileController = require("./UserProfileController");
const RouteConstant = require("../../constant/Routes");
const Middleware = require("../../middlewares/authMiddleware").checkToken;
const Validation = require("../../validation/UserValidation");

module.exports = (app) => {
  router
    .route("/update")
    .post(Validation.update(), UserProfileController.updateUser);

  app.use(RouteConstant.USER, Middleware, router);
};
