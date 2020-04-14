const { Schema } = require('mongoose');
const mongoose = require('mongoose')

const camara = new Schema({
    nombreCamara: { type: String },
    instalador:{type:String},
    latitud: {type: String},
    longitud :{ type: String}
})

module.exports = mongoose.model('camara', camara)