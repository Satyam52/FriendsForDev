const express = require("express");
const router = express.Router();

//@Get /api/user
//@desc Test
//@access Public
router.get("/", (req, res, next) => {
  res.send("user Route");
});

module.exports = router;
