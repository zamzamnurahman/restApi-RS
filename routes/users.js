const express = require("express");
const router = express.Router();
const validator = require("fastest-validator");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const v = new validator();
const { users } = require("../models");

router.get("/", async (req, res) => {
  try {
    const User = await users.findAll();
    res.json({ data: User });
  } catch (error) {
    res.json({ message: error });
  }
});

//get User By Id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await users.findByPk(id);
    res.json({ data: user });
  } catch (error) {
    res.status(404).json({ message: "data not found" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await users.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    res.json({
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
});

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
    const User = await users.create(req.body);
    res.status(201).json({ data: User });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
