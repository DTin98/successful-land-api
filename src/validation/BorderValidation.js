const { body, check, query } = require("express-validator");

module.exports = {
  getByArea: () => {
    return [query("area_id", "area_id is required!").not().isEmpty()];
  },
};
