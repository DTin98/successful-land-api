const userServices = require("../../../services/UserServices");
const reqResponse = require("../../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      //check user is existed?
      await userServices.findOneUser(data, params, query).then((user) => {
        if (user)
          throw {
            statusCode: 401,
            message: "User already registered",
            data: "username or email already registered",
          };
      });

      await userServices.createUser(data, params, query).then((user) => {
        let token = jwt.sign(
          { _id: user._id, username: user.username },
          process.env.TOKEN_SECRET,
          {
            expiresIn: "10h",
          }
        );

        return res.status(200).send({
          jwt: token,
          user: _.omit(user._doc, "password"),
        });
      });
    } catch (error) {
      console.error(error);
      res
        .status(error.statusCode || 500)
        .send(
          reqResponse.customErrorResponse(
            error.statusCode || 500,
            error.message || "Server Error",
            error.data || ""
          )
        );
    }
  },

  login: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errors);
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      await userServices.findOneUser(data, params, query).then(async (user) => {
        //should update to using bcrypt hashing
        if (user) {
          const isCorrectPassword = await bcrypt.compare(
            data.password,
            user.password
          );
          if (isCorrectPassword) {
            let token = jwt.sign(
              { _id: user._id, username: user.username },
              process.env.TOKEN_SECRET,
              {
                expiresIn: "10h",
              }
            );
            return res.status(200).send({
              jwt: token,
              user: _.omit(user, ["password"]),
            });
          } else res.status(405).json(reqResponse.errorResponse(405));
        } else {
          res.status(405).json(reqResponse.errorResponse(405));
        }
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(
          reqResponse.customErrorResponse(500, "Server Error", error.message)
        );
    }
  },
};
