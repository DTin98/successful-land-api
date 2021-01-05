const Router = require("express").Router();

module.exports = Router.get("/hello", async (req, res) => {
  return res.send("hello world");
});
