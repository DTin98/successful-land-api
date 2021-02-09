const jwt = require("jsonwebtoken");
const reqResponse = require("../helpers/responseHandler");
require("dotenv").config();
const key = process.env.TOKEN_SECRET;

module.exports = {
  checkToken,
};

function checkToken(req, res, next) {
  let token =
    req.headers["x-access-token"] || req.headers["authorization"] || "";
  TokenArray = token.split(" ");
  token = TokenArray[1];
  if (token) {
    jwt.verify(
      token,
      key,
      {
        ignoreExpiration: true,
      },
      (err, decoded) => {
        if (err) {
          return res.status(414).send(reqResponse.errorResponse(414));
        } else {
          if (key === process.env.TOKEN_SECRET) {
            decoded.isAdminUser = false;
          } else {
            decoded.isAdminUser = true;
          }
          req.decoded = decoded;
          next();
        }
      }
    );
  } else {
    return res.status(415).send(reqResponse.errorResponse(415));
  }
}
