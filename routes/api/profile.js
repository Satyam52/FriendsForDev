const express = require("express");
const router = express.Router();

//@Get /api/profile
//@desc Test
//@access Public
router.get("/", (req, res, next) => {
  res.send("Profile Route");
});

module.exports = router;
