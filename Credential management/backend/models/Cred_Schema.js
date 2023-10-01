const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb+srv://BlacknWyt:mongotest101@cluster0.s6ucwda.mongodb.net/');

//Credentaial schema
const credSchema = new mongoose.Schema({
    Username:{
        type:String,
        required: true
    },
    Name:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required: true
    },
    Role:{
        type:String, enum:['normal', 'management', 'admin'],
        required: true,
        default:['normal']
    },
    Ou:{
        type:[],
        required: true
    },
    Division:{
        type:[],
        required: true
    }
})

//creation of model
const credentials = db.model('Credentials', credSchema);

module.exports = credentials;