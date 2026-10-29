const express = require("express") // importing express package
const app = express() // creates a express application 
const dotenv = require("dotenv").config() // allows .env in file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')

const Listing = require("./models/Listing")
const User = require("./models/User")
const Review = require("./models/Review")
const Category = require("./models/Category")

/* const  = require('./models/Author')
const  = require('./models/Book')
 */
app.use(express.static('public')) // static files in public folder
app.use(express.urlencoded({ extended: false }))
//allows to see data being sent in POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to database")


    }
    catch (err) {
        console.log('error occured', err)
    }
}

connectToDB()



async function testRelationships(){
    const allListings = await Listing.find().populate('owner')
    console.log(allListings)
}
testRelationships()

  


