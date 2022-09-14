const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ id: 2020 });
});

router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  res.send({ first: "Lutfi", last: "Ikbal Majid" });
});

module.exports = router;
