const router = require("express").Router();
const AuthController = require("./authController");
const RouteConstant = require("../../../constant/Routes");
const Middleware = require("../../../middlewares/authMiddleware").checkToken;
const Validation = require("../../../validation/AuthValidation");

module.exports = (app) => {
  router
    .route("/register")
    .post(Validation.register(), AuthController.register);

  router.route("/login").post(Validation.login(), AuthController.login);

  app.use(RouteConstant.LOCAL, router);
};
