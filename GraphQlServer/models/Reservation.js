const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema({
    Date: Date.UTC(),
    Start_Reservation: Date.UTC(),
    End_Reservation: Date.UTC(),

})
//Tworzenie modelu User na podstawie schematu userSchema
module.exports = mongoose.model('Reservation', reservationSchema)