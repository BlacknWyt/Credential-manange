const express = require("express");
const router = express.Router();
const mod = require("../moduals/NoCreds.js");

//api that fetches user credentials that arent in a ou or div
router.get("/no_credentials", (req, res) => {
  //this gets the latest credentials from database
  let arr = mod.getUsersNoCreds();
  res.send(arr);
});

module.exports = router;
