const mongoose = require('mongoose');

const habitacionesSchema = new mongoose.Schema( 
    {
        id: mongoose.Schema.ObjectId,
        nombre: {
            type: String
        },
        descripcion: {
            type: String
        },
        personas: {
            type: Number
        },
        tarifa: {
            type: Number
        },
        calificacion: {
            type: Number,
            default: 0
        },
        disponible: {
            type: String,
            default: "Reservado"
        }        
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('habitaciones', habitacionesSchema, 'habitaciones') 