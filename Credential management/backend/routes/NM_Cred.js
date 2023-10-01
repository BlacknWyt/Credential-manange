const express = require('express');
const router = express.Router();
const fs = require('fs');
const con = require('../controllers/log.controller.js')

//apis that fetch divisions 1 - 5 in News Management OU
router.get('/div1', (req, res) => {
    //this gets the latest credentials from database

    //cred holds the contents of the credentail json file
    let cred = JSON.parse(fs.readFileSync('Creds/Creds.json'))
    let arr = []
    //this loops through the cred file and finds specific divisions and OU's then pushes them into the arr above
    for(let i = 0; i < cred.fetchedCred.length; i++){
        if(cred.fetchedCred[i].Division.includes('div1') && cred.fetchedCred[i].Ou.includes('News Management')){
            arr.push(cred.fetchedCred[i])
        }
    }
    //then sends the arr as a response
    res.send(arr);
})

//the functions below are almost identical to the one above except they fetch their own divisions and OU's

router.get('/div2', (req, res) => {
    let cred = JSON.parse(fs.readFileSync('Creds/Creds.json'))
    let arr = []
    for(let i = 0; i < cred.fetchedCred.length; i++){
        if(cred.fetchedCred[i].Division.includes('div2') && cred.fetchedCred[i].Ou.includes('News Management')){
            arr.push(cred.fetchedCred[i])
        }
    }
    res.send(arr);
})

router.get('/div3', (req, res) => {
    let cred = JSON.parse(fs.readFileSync('Creds/Creds.json'))
    let arr = []
    for(let i = 0; i < cred.fetchedCred.length; i++){
        if(cred.fetchedCred[i].Division.includes('div3') && cred.fetchedCred[i].Ou.includes('News Management')){
            arr.push(cred.fetchedCred[i])
        }
    }
    res.send(arr);
})

router.get('/div4', (req, res) => {
    let cred = JSON.parse(fs.readFileSync('Creds/Creds.json'))
    let arr = []
    for(let i = 0; i < cred.fetchedCred.length; i++){
        if(cred.fetchedCred[i].Division.includes('div4') && cred.fetchedCred[i].Ou.includes('News Management')){
            arr.push(cred.fetchedCred[i])
        }
    }
    res.send(arr);
})

router.get('/div5', (req, res) => {
    let cred = JSON.parse(fs.readFileSync('Creds/Creds.json'))
    let arr = []
    for(let i = 0; i < cred.fetchedCred.length; i++){
        if(cred.fetchedCred[i].Division.includes('div5') && cred.fetchedCred[i].Ou.includes('News Management')){
            arr.push(cred.fetchedCred[i])
        }
    }
    res.send(arr);
})

module.exports = router