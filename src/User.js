const { Schema, model } = require('mongoose');
//const QueryString = require('qs');

const User = new Schema({
    name : String,
    email: String,
    password: String,
})

module.exports = model('User', User)