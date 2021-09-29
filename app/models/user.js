const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    image:{type: String, required: true},
    username:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    phone:{type: String, required: true, unique: true},
    address: {type: String, required: true},
    password:{type: String, required: true},
    role:{type: String, default: 'customer'}
},{timestamps: true})

module.exports = mongoose.model('User', userSchema)