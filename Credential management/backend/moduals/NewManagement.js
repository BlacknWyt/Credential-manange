const fs = require("fs");
const userCon = require("../controllers/log.controller.js");
const credCon = require("../controllers/credentials.js");

//these functions update the user credentials and store the related ones together then returns them
exports.getUsersDiv1NM = () => {
  //updates user credentials
  userCon.divFetch();
  let cred = JSON.parse(fs.readFileSync("Creds/userCreds.json"));
  let arr = [];
  //loops through the user credentials and stores the related ones in arr
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div1") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  //returns arr
  return arr;
};

//the functions below are the same to the one above except they get their own related user credentials
exports.getUsersDiv2NM = () => {
  userCon.divFetch();
  let cred = JSON.parse(fs.readFileSync("Creds/userCreds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div2") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};

exports.getUsersDiv3NM = () => {
  userCon.divFetch();
  let cred = JSON.parse(fs.readFileSync("Creds/userCreds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div3") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};

exports.getUsersDiv4NM = () => {
  userCon.divFetch();
  let cred = JSON.parse(fs.readFileSync("Creds/userCreds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div4") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};

exports.getUsersDiv5NM = () => {
  userCon.divFetch();
  let cred = JSON.parse(fs.readFileSync("Creds/userCreds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div5") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};

//get credentials
//this functions update the credentials and store the related ones together then returns them
exports.getCredentialsDiv1NM = () => {
  credCon.fetch();
  //update credentials
  let cred = JSON.parse(fs.readFileSync("Creds/Creds.json"));
  let arr = [];
  //loops through the credentials and stores the related ones in arr
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div1") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  //returns arr
  return arr;
};

//function below are the same to the one above except finding their own relavent credentials
exports.getCredentialsDiv2NM = () => {
  credCon.fetch();
  let cred = JSON.parse(fs.readFileSync("Creds/Creds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div2") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};

exports.getCredentialsDiv3NM = () => {
  credCon.fetch();
  let cred = JSON.parse(fs.readFileSync("Creds/Creds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div3") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};

exports.getCredentialsDiv4NM = () => {
  credCon.fetch();
  let cred = JSON.parse(fs.readFileSync("Creds/Creds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div4") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};

exports.getCredentialsDiv5NM = () => {
  credCon.fetch();
  let cred = JSON.parse(fs.readFileSync("Creds/Creds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.includes("div5") &&
      cred.fetchedCred[i].Ou.includes("News Management")
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};
