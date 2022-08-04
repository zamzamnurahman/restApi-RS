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

module.exports = router;
