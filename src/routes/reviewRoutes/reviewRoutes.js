const router = require("express").Router();
const RouteConstant = require("../../constant/Routes");
const reviewController = require("./reviewController");
const Middleware = require("../../middlewares/authMiddleware").checkToken;
const Validation = require("../../validation/BorderValidation");

module.exports = (app) => {
  //ReviewPoint
  router
    .route("/addReviewPoint")
    .post(Middleware, reviewController.addReviewPoint);
  router
    .route("/getReviewPointByArea")
    .get(reviewController.getReviewPointByArea);
  router
    .route("/getReviewPointByUser")
    .get(reviewController.getReviewPointByUser);
  router
    .route("/deleteReviewPoint")
    .post(Middleware, reviewController.deleteReviewPoint);

  //ReviewText
  router
    .route("/addReviewText")
    .post(Middleware, reviewController.addReviewText);
 
  router
    .route("/getReviewTextByArea")
    .get(reviewController.getReviewTextByArea);
  router
    .route("/getReviewTextByUser")
    .get(reviewController.getReviewTextByUser);
  router
    .route("/deleteReviewText")
    .post(Middleware, reviewController.deleteReviewText);

  app.use(RouteConstant.REVIEW, router);
};
