const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    NAME: {
        type: String,
        maxlength: 50
    },
    ID: {
        type: String,
        maxlength: 50
    },
    PW: {
        type: String,
        maxlength: 50
    }
});

const users = mongoose.model('users', userSchema);

module.exports = users;