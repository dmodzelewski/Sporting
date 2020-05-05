
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    Street : String,
    Number: String,
    ZipCode:String,
    City:String,
    Province:String,
    SportObjectID:String,
    CompanyID:String
})
//Tworzenie modelu User na podstawie schematu userSchema
module.exports = mongoose.model('Address',AddressSchema)