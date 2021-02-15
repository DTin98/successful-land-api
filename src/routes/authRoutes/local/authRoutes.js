const router = require("express").Router();
const AuthController = require("./authController");
const RouteConstant = require("../../../constant/Routes");
const Middleware = require("../../../middlewares/authMiddleware").checkToken;
const AuthValidation = require("../../../validation/AuthValidation");

module.exports = (app) => {
  router
    .route("/register")
    .post(AuthValidation.register(), AuthController.register);

  router.route("/login").post(AuthValidation.login(), AuthController.login);

  app.use(RouteConstant.LOCAL_AUTH, router);
};
