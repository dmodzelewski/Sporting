
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sportObjectSchema = new Schema({
    Name: String,
    NumberOfGyms:Number,
    
})
//Tworzenie modelu User na podstawie schematu userSchema
module.exports = mongoose.model('SportObject',sportObjectSchema)