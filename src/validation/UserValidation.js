const { body, check } = require("express-validator");

module.exports = {
  update: () => {
    return [
      check("name", "Name is Mandatory Parameter Missing.").not().isEmpty(),
    ];
  },
};
