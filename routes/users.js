const express = require("express");
const router = express.Router();
const validator = require("fastest-validator");
const v = new validator();
const { Users } = require("../models");

router.post("/", async (req, res, next) => {
  const schema = {
    name: "string",
    email: "string",
    password: "string",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    res.status(400).json(validate);
  }

  try {
    const user = await Users.create(req.body);
    res.json({ data: user });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
