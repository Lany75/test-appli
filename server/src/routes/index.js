const express = require("express");
const todoRouter = require("./todoRouter");

const router = express.Router();

router.use("/", todoRouter);

router.use("*", (req, res) => {
  res.status(404).json("C'est pas par là");
});

module.exports = router;
