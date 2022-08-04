const express = require("express");
const router = express.Router();
const validator = require("fastest-validator");
const v = new validator();

const { dokter } = require("../models");

router.get("/", async (req, res) => {
  try {
    const data = await dokter.findAll();
    res.json({
      data: data,
    });
  } catch (error) {
    res.json({
      msgError: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const schema = {
    name: "string",
    alamat: "string",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    res.status(400).json(validate);
  }

  try {
    const data = await dokter.create(req.body);
    res.status(201).json({
      message: "created",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      msgError: error.message,
    });
  }
});

module.exports = router;
