const cred = require('../models/Cred_Schema.js');
const fs = require('fs');

//div1

exports.divCreate = async(username, name, email, ou, div, password, role) => {
    if(role === undefined){
        role = 'normal';
    }
    await cred.create({ 
        Username:username,
        Name: name,
        Email: email,
        Ou:ou,
        Division: div,
        Password: password,
        Role: role
    })
}

exports.divFetch = async() => {
    const fetchedCred = await cred.find();
    if(!fs.existsSync('./Creds')){
        fs.mkdirSync('./Creds')
    }
    fs.writeFileSync('./Creds/Creds.json', JSON.stringify({fetchedCred}));
}

exports.divUpdate = async(username, name, newusername, newname, email, password, ou, div, role) => {
    const credFind = await cred.findOne({Username: username, Name: name})

    console.log(credFind)
    let newUsername = newusername;
    if(newUsername === ''){
        newUsername = credFind.Username
    }
    let newName = newname;
    if(newName === ''){
        newName = credFind.Name
    }
    let newEmail = email;
    if(email === ''){
        newEmail = credFind.Email
    }
    let newPassword = password;
    if(password === ''){
        newPassword = credFind.Password
    }
    let newRole = role;
    if(role === ''){
        newRole = credFind.Role
    }  
    let newOU = ou; 
    if(ou === ''){
        newOU = credFind.Ou
    }
    let newDiv = div;
    if(div === ''){
        newDiv = credFind.Division
    }

    await cred.updateOne({Username: username, Name: name}, {
        Username: newUsername, Name: newName, Email: newEmail, Password: newPassword, Ou: newOU, Division: newDiv, Role: newRole
    })
}

exports.divDelete = async(username, name) => {
    await cred.deleteOne({Username: username, Name: name})
}

