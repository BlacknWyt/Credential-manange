const express = require("express");
const router = express.Router();
const mod = require("../moduals/NewManagement.js");

//apis that fetch divisions 1 - 5 in News Management OU
router.get("/div1", (req, res) => {
  //this gets the latest credentials from database
  let arr = mod.getUsersDiv1NM();
  res.send(arr);
});

//the functions below are almost identical to the one above except they fetch their own divisions and OU's

router.get("/div2", (req, res) => {
  let arr = mod.getUsersDiv2NM();
  res.send(arr);
});

router.get("/div3", (req, res) => {
  let arr = mod.getUsersDiv3NM();
  res.send(arr);
});

router.get("/div4", (req, res) => {
  let arr = mod.getUsersDiv4NM();
  res.send(arr);
});

router.get("/div5", (req, res) => {
  let arr = mod.getUsersDiv5NM();
  res.send(arr);
});

//apis that fetch credentials stored in divisions 1 - 5 in News Management OU
router.get("/credentialsDiv1", (req, res) => {
  //this gets the latest credentials from database
  let arr = mod.getCredentialsDiv1NM();
  res.send(arr);
});

//the functions below are almost identical to the one above except they fetch their own divisions and OU's

router.get("/credentialsDiv2", (req, res) => {
  let arr = mod.getCredentialsDiv2NM();
  res.send(arr);
});

router.get("/credentialsDiv3", (req, res) => {
  let arr = mod.getCredentialsDiv3NM();
  res.send(JSON.stringify(arr));
});

router.get("/credentialsDiv4", (req, res) => {
  let arr = mod.getCredentialsDiv4NM();
  res.send(arr);
});

router.get("/credentialsDiv5", (req, res) => {
  let arr = mod.getCredentialsDiv5NM();
  res.send(arr);
});

module.exports = router;
