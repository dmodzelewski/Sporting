
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gymSchema = new Schema({
    Type: String,
    Quantity: String,
    SportObjectID:String,
    
})
//Tworzenie modelu User na podstawie schematu userSchema
module.exports = mongoose.model('Gym',gymSchema)