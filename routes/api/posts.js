const express = require("express");
const router = express.Router();

//@Get /api/post
//@desc Test
//@access Public
router.get("/", (req, res, next) => {
  res.send("Post Route");
});

module.exports = router;
