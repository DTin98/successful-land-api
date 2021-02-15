const { body, check } = require("express-validator");

module.exports = {
  register: () => {
    return [
      body("username", "username is required!").not().isEmpty(),
      body("username", "username must be string").isString(),

      body("email", "email is required!").not().isEmpty(),
      body("email", "email must be string").isString(),
      body("email", "email is invalid format").isEmail(),

      body("password", "password is required!").not().isEmpty(),
      body("password", "password must be string").isString(),
    ];
  },
  login: (req, res) => {
    return [
      body("username", "username is required!").not().isEmpty(),
      body("username", "username must be string").isString(),

      body("password", "password is required!").not().isEmpty(),
      body("password", "password must be string").isString(),
    ];
  },
};
