const mongoose = require('mongoose');

const usersCollections = 'Users';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

const userModel = mongoose.model(usersCollections, userSchema);

module.exports = userModel;