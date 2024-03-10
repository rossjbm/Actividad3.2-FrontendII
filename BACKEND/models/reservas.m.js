const mongoose = require('mongoose'); //requerimos libreria de mongo

const reservasSchema = new mongoose.Schema( 
    {
        _id: {
            type: String  
        },
        nombre: {
            type: String
        },
        cedula: {
            type: String
        },
        correo: {
            type: String
        },
        habitacion: {
            type: String
        },
        fecha_inicio: {
            type: Date
        },
        fecha_salida: {
            type: Date
        }
    },
    {
        versionKey: false //para evitar el __v al agregar datos
    }
)

module.exports = mongoose.model('reservas', reservasSchema, 'reservas') //primer argumento: nombre del modelo; segundo argumento: esquema; tercer argumento: nombre de la collection
