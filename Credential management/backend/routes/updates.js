const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const con = require('../controllers/log.controller.js')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

//this is the update api for admins
router.post('/updateAdmin', function (req, res) {
    //vars that will be used to update a users credentials
    const username = req.body.Username
    const name = req.body.Name
    const newusername = req.body.Newusername
    const newname = req.body.Newname
    const email = req.body.Email
    const password = req.body.Password
    const ou = req.body.Ou
    const div = req.body.Div
    const role = req.body.Role
    
    //this function will update a users credentials in the database
    con.divUpdate(username, name, newusername, newname, email, password, ou, div, role);
});

//this is the update api for management
router.post('/updateManagement', function (req, res) {
    //vars that will be used to update a users credentials
    const username = req.body.Username
    const name = req.body.Name
    const newusername = req.body.Newusername
    const newname = req.body.Newname
    const email = req.body.Email
    const password = req.body.Password
    
    //this function will update a users credentials in the database
    con.divUpdate(username, name, newusername, newname, email, password);
});

module.exports = router;