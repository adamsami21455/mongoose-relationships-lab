const mongoose = require('mongoose')

// Schema
const userSchema = new mongoose.Schema({
username: {
    type: String 
},
password: {
    type: String
},


}, {timestamps:true})

//model
const User = mongoose.model('User', userSchema)

//export the model
module.exports = User