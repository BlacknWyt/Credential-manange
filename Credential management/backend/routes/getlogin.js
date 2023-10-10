const express = require('express');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');

//login api
router.get('/login', (req, res) => {
    if(fs.existsSync('token.json')){
        //gets token from json file
        let token = JSON.parse(fs.readFileSync('token.json'));
        let decode = jwt.verify(token.token, 'jwt-secret');
        //verifies token 
        if(decode){
            res.send(decode)
        }
    }
 
})

module.exports = router;

