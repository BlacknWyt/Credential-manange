const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const con = require('../controllers/log.controller.js')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

//delete api
router.post('/delete', function (req, res) {
    //holds vars of the user it must remove from the database
    const username = req.body.Username
    const name = req.body.Name
    
    //function to remove user
    con.divDelete(username, name);
});

module.exports = router;