const { body, check, query } = require("express-validator");

module.exports = {
  search: () => {
    return [query("category", "category is required").not().isEmpty()];
  },
};
