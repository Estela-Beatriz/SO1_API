const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: String,
    location: String,
    gender: String,
    age: Number,
    vaccine_type: String,
    service: String
});

module.exports = model('user', UserSchema);