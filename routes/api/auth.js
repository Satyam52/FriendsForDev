const express = require("express");
const router = express.Router();

//@Get /api/auth
//@desc Test
//@access Public
router.get("/", (req, res, next) => {
  res.send("auth Route");
});

module.exports = router;
