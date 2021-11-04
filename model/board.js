const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    ID: {
        type: String,
        maxlength: 50
    }
});

const users = mongoose.model('board', userSchema);

module.exports = users;