const userServices = require("../../../services/UserServices");
const reqResponse = require("../../../helpers/responseHandler");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports = {
  login: async (req, res) => {
    try {
      const { tokenId } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const { name, email, picture } = ticket.getPayload();

      const user = await userServices.findOneAndUpdate(
        { $or: [{ email: email }, { username: email }] },
        {
          username: email,
          email,
          email,
          name: name,
          picture: picture,
          provider: "google",
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
