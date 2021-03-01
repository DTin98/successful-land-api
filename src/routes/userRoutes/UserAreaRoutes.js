const router = require("express").Router();
const UserAreaController = require("./UserAreaController");
const RouteConstant = require("../../constant/Routes");
const Middleware = require("../../middlewares/authMiddleware").checkToken;

module.exports = (app) => {
  router.route("/add-area").get(UserAreaController.addArea);

  router.route("/delete-area").get(UserAreaController.deleteArea);

  router.route("/get-area").get(UserAreaController.getArea);

  app.use(RouteConstant.USER, Middleware, router);
};
