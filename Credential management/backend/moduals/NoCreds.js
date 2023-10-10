const fs = require("fs");

exports.getUsersNoCreds = () => {
  let cred = JSON.parse(fs.readFileSync("Creds/userCreds.json"));
  let arr = [];
  for (let i = 0; i < cred.fetchedCred.length; i++) {
    if (
      cred.fetchedCred[i].Division.length === 0 ||
      cred.fetchedCred[i].Ou.length === 0
    ) {
      arr.push(cred.fetchedCred[i]);
    }
  }
  return arr;
};
