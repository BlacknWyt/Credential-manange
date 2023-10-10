const express = require("express");
const router = express.Router();
const mod = require("../moduals/SoftwareReviews.js");

//apis that fetch divisions 1 - 5 in Software Reviews OU
router.get("/div1", (req, res) => {
  //cred holds the contents of the credentail json file
  let arr = mod.getUsersDiv1SR();
  //then sends the arr as a response
  res.send(arr);
});

//the functions below are almost identical to the one above except they fetch their own divisions and OU's

router.get("/div2", (req, res) => {
  let arr = mod.getUsersDiv2SR();
  res.send(arr);
});

router.get("/div3", (req, res) => {
  let arr = mod.getUsersDiv3SR();
  res.send(arr);
});

router.get("/div4", (req, res) => {
  let arr = mod.getUsersDiv4SR();
  res.send(arr);
});

router.get("/div5", (req, res) => {
  let arr = mod.getUsersDiv5SR();
  res.send(arr);
});

//apis that fetch credentials stored in divisions 1 - 5 in News Management OU
router.get("/credentialsDiv1", (req, res) => {
  //this gets the latest credentials from database
  let arr = mod.getCredentialsDiv1SR();
  res.send(arr);
});

//the functions below are almost identical to the one above except they fetch their own divisions and OU's

router.get("/credentialsDiv2", (req, res) => {
  let arr = mod.getCredentialsDiv2SR();
  res.send(arr);
});

router.get("/credentialsDiv3", (req, res) => {
  let arr = mod.getCredentialsDiv3SR();
  res.send(arr);
});

router.get("/credentialsDiv4", (req, res) => {
  let arr = mod.getCredentialsDiv4SR();
  res.send(arr);
});

router.get("/credentialsDiv5", (req, res) => {
  let arr = mod.getCredentialsDiv4SR();
  res.send(arr);
});

module.exports = router;
