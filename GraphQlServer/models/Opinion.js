
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const opinionsSchema = new Schema({
    Description: String,
    StarRate:Number,
    SportObjectID:String,
    gymID:String
})
//Tworzenie modelu User na podstawie schematu userSchema
module.exports = mongoose.model('Opinion',opinionsSchema)