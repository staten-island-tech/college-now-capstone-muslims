const express = require("express");
const router = new express.Router(); //instantiate express router

router.get("/", (req, res) => {
  try {
    return res.send("We're Live");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;