const mongoose = require('mongoose')

// Schema
const listingSchema = new mongoose.Schema({
streetAddress: {
    type: String 
},
city: {
    type: String
},
price: {
    type: Number 
},
size: {
    type: String
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category'
},


}, {timestamps:true})

//model
const Listing = mongoose.model('Listing', listingSchema)

//export the model
module.exports = Listing