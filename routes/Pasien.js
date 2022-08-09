const express = require("express");
const router = express.Router();
const validator = require("fastest-validator");
const v = new validator();
const { pasien } = require("../models");

router.get("/", async (req, res) => {
  try {
    const Pasien = await pasien.findAll();
    res.json({ data: Pasien });
  } catch (error) {
    res.json({ message: error });
  }
});

//get User By Id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const Pasien = await pasien.findByPk(id);
    res.json({ data: Pasien });
  } catch (error) {
    res.status(404).json({ message: "data not found" });
  }
});

// POST
router.post("/", async (req, res, next) => {
  const schema = {
    name: "string",
    alamat: "string",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    res.status(400).json(validate);
  }

  try {
    const Pasien = await pasien.create(req.body);
    res.status(201).json({ data: Pasien });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
