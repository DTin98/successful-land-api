const userServices = require("../../../services/UserServices");
const reqResponse = require("../../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const axios = require("axios");
require("dotenv").config();

async function getFacebookUserData(access_token) {
  const { data } = await axios({
    url: "https://graph.facebook.com/me",
    method: "get",
    params: {
      fields: ["id", "email", "first_name", "last_name"].join(","),
      access_token: access_token,
    },
  });
  console.log(data); // { id, email, first_name, last_name }
  return data;
}

module.exports = {
  login: async (req, res) => {
    try {
      const { accessToken } = req.body;
      console.log(
        "🚀 ~ file: authController.js ~ line 27 ~ login: ~ accessToken",
        accessToken
      );
      const { id, email, first_name, last_name } = await getFacebookUserData(
        accessToken
      );
      const user = await userServices.findOneAndUpdate(
        { $or: [{ email: email }, { username: email }] },
        {
          username: email,
          email: email,
          name: first_name,
          provider: "facebook",
        },
        { upsert: true }
      );
      let jwtToken = jwt.sign(
        { _id: user._id, username: user.username },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "3h",
        }
      );
      return res.status(200).send({
        jwt: jwtToken,
        user: user,
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
