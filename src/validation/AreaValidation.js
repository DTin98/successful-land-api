const { body, check, query } = require("express-validator");

module.exports = {
  search: () => {
    return [query("_q", "_q is required!").not().isEmpty()];
  },
  getByBorder: () => {
    return [query("border_id", "border_id is required").not().isEmpty()];
  },
  addToFavorite: () => {
    return [body("areaId", "areaId is required").not().isEmpty()];
  },
};
