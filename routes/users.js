var express = require("express");
var router = express.Router();
var Validator = require("fastest-validator");

const { Users } = require("../models");

const v = new Validator();

/* GET users listing. */
router.post("/", async (req, res) => {
  const schema = {
    name: "string",
    email: "string",
    password: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const user = await Users.create(req.body);
  res.json(user);
});

module.exports = router;
