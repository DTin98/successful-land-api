const { body, check, query } = require("express-validator");

module.exports = {
  search: () => {
    return [query("_q", "_q is required!").not().isEmpty()];
  },
};
