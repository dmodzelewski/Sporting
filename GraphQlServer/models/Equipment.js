
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EquipmentSchema = new Schema({
    Type: String,
    Count: Number,
    gymID:String,
})
//Tworzenie modelu User na podstawie schematu userSchema
module.exports = mongoose.model('Equipment',EquipmentSchema)