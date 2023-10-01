const express = require('express');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const con = require('../controllers/log.controller.js')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

//login api
router.post('/login', (req, res) => {
    //vars that hold users login details
    const username = req.body.user;
    const password = req.body.pwd;
    let pass = false;

    con.divFetch();
    //this var holds the credentails of all users
    let allCred = JSON.parse(fs.readFileSync('Creds/Creds.json'));

    let role = '';
    let div = '';
    let ou = '';
    //this loop goes through the credentials and looks for the specifc user
    for(let a = 0; a < allCred.fetchedCred.length; a++) {
        if(allCred.fetchedCred[a].Username === username && allCred.fetchedCred[a].Password === password) {
            //if user is found then pass is changed to true which will allow the use to login
            pass = true;
            role = allCred.fetchedCred[a].Role;
            div = allCred.fetchedCred[a].Division;
            ou = allCred.fetchedCred[a].Ou;
            console.log('found');
            break;
        }
    }
   
    //if pass is true that means user exists 
    if(pass) {
        //payload for jwt
        payload = {
            'username': username,
            'password': password,
            'role': role,
            "div":  div,
            "ou": ou
        }
        //user token creation
        const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', {algorithm:'HS256'});
        fs.writeFileSync('token.json',JSON.stringify({'token': token}));
        res.send({"success":true});
    }
    else{//if user doesnt exist then this is the response
        res.send({"success":false});
    }

})

//register api
router.post('/Register', (req, res) => {
    //var that will be used to store user credentials in database
    const username = req.body.Username
    const name = req.body.Name
    const email = req.body.Email
    const ou = req.body.Ou
    const div = req.body.Div
    const password = req.body.Password
    const pass = false;

    //adds user to database
    con.divCreate(username, name, email, ou, div, password);
    res.json({"success":true})

})

module.exports = router;
