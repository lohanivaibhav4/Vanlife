const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})
exports.User = mongoose.model('User', UserSchema)