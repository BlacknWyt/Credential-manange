const cred = require("../models/credentials.js");
const fs = require("fs");

exports.create = async (username, password, site, ou, div) => {
  await cred.create({
    Username: username,
    Password: password,
    Site: site,
    Ou: ou,
    Division: div,
  });
};

exports.fetch = async () => {
  const fetchedCred = await cred.find();
  if (!fs.existsSync("./Creds")) {
    fs.mkdirSync("./Creds");
  }
  fs.writeFileSync("./Creds/Creds.json", JSON.stringify({ fetchedCred }));
};

exports.update = async (
  username,
  site,
  newusername,
  newsite,
  password,
  ou,
  div
) => {
  console.log(username, site, newusername, newsite, password, ou, div);
  const credFind = await cred.findOne({ Username: username, Site: site });
  console.log(credFind);
  let newUsername = newusername;
  if (newUsername === "") {
    newUsername = credFind.Username;
  }
  let newSite = newsite;
  if (newSite === "") {
    newSite = credFind.Site;
  }
  let newPassword = password;
  if (newPassword === "") {
    newPassword = credFind.Password;
  }
  let newOU = ou;
  if (ou.length === 0) {
    newOU = credFind.Ou;
  }
  let newDiv = div;
  if (div.length === 0) {
    newDiv = credFind.Division;
  }
  console.log(newUsername, newSite, newPassword, newOU, newDiv);

  await cred.updateOne(
    { Username: username, Site: site },
    {
      Username: newUsername,
      Site: newSite,
      Password: newPassword,
      Ou: newOU,
      Division: newDiv,
    }
  );
};

exports.delete = async (username, name) => {
  await cred.deleteOne({ Username: username, Name: name });
};
