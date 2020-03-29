const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    Login: String,
    Password: String,
    Name:String,
    Surname:String,
    Age:Number,
    reservationId:String
})
//Tworzenie modelu User na podstawie schematu userSchema
module.exports = mongoose.model('User',userSchema)