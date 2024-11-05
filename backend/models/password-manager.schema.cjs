const Schema = require('mongoose').Schema;

module.exports = new Schema({
    url: {
        type: String,
        required: true,
    },
    password: String,
    owner:String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
}, { collection : 'Passwords'});