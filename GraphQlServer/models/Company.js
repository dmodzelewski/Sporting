
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanySchema = new Schema({
    Name : String,
    Nip: Number,
})
//Tworzenie modelu User na podstawie schematu userSchema
module.exports = mongoose.model('Company',CompanySchema)