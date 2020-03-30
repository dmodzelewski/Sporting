
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EquipmentSchema = new Schema({
    Type: String,
    Count: Number,
    gymID:String,
})
//Tworzenie modelu Use1r na podstawie schematu 
module.exports = mongoose.model('Equipment',EquipmentSchema)