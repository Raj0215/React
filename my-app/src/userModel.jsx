const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email:string
});

module.exports = mongoose.model('User', userSchema);