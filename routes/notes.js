var express = require("express");
var router = express.Router();
var Validator = require("fastest-validator");
const v = new Validator();
const { Notes } = require("../models");

router.post("/", async (req, res, next) => {
  const schema = {
    title: "string",
    description: "string|optional",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json(validate);
  }

  const note = await Notes.create(req.body);
  res.json({
    status: 200,
    msg: "success",
    data: note,
  });
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  let note = await Notes.findByPk(id);
  if (!note) {
    return res.status(404).json({ msg: "data tidak ditemukan" });
  }

  // validation
  const schema = {
    title: "string|optional",
    description: "string|optional",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json(validate);
  }

  const notes = await note.update(req.body);
  res.json({ msg: "success update", data: notes });
});

module.exports = router;
