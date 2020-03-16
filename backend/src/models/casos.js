const { Schema } = require('mongoose');
const mongoose = require('mongoose')

const casos = new Schema({
     nombre: { type: String },
     probabilidad: { type: Number },
     hora: { type: Number},
     minuto: { type: Number },
     segundos: { type: Number },
     dia: {type:Number},
     mes :{type :Number, default: new Date().getMonth() + 1 },
     año :{type :Number, default: new Date().getFullYear()},
     horaExacta:{type:String},
     contador: {type: Number, default: 1},
     FechaISO :{ type: String, default:new Date().toISOString().substr(0, 10)}
})


module.exports = mongoose.model('casos', casos)